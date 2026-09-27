"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function RouteProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const doneTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (doneTimeoutRef.current) clearTimeout(doneTimeoutRef.current);
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setVisible(true);
    setProgress(15);
    intervalRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (90 - p) * 0.1, 90));
    }, 100);
  }, [clearTimers]);

  // start on internal navigations: <Link> clicks, router.push (pushState), back (popstate)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href || !href.startsWith("/") || anchor?.target === "_blank") return;
      if (href === window.location.pathname) return;
      start();
    };
    document.addEventListener("click", onClick, true);

    const origPush = window.history.pushState;
    window.history.pushState = function (...args: Parameters<History["pushState"]>) {
      const result = origPush.apply(this, args);
      // Next.js calls pushState inside a React insertion effect — defer updates
      setTimeout(start, 0);
      return result;
    };

    const onPop = () => start();
    window.addEventListener("popstate", onPop);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.history.pushState = origPush;
      window.removeEventListener("popstate", onPop);
    };
  }, [start]);

  // finish once the new route commits
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    clearTimers();
    setProgress(100);
    doneTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 250);
  }, [pathname, clearTimers]);

  useEffect(() => clearTimers, [clearTimers]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="h-full bg-[#19264E] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
