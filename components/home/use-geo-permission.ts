"use client";

import { useEffect, useState } from "react";

type GeoPermissionState = "unknown" | "prompt" | "granted" | "denied" | "unsupported";

function getInitialStatus(): GeoPermissionState {
  if (typeof navigator === "undefined" || !navigator.geolocation) return "unsupported";
  if (!navigator.permissions?.query) return "prompt";
  return "unknown";
}

export function useGeoPermission() {
  const [status, setStatus] = useState<GeoPermissionState>(getInitialStatus);

  useEffect(() => {
    if (status !== "unknown") return;

    let permissionStatus: PermissionStatus | null = null;

    navigator.permissions
      .query({ name: "geolocation" as PermissionName })
      .then((result) => {
        permissionStatus = result;
        setStatus(result.state as GeoPermissionState);
        result.onchange = () => setStatus(result.state as GeoPermissionState);
      })
      .catch(() => setStatus("prompt"));

    return () => {
      if (permissionStatus) permissionStatus.onchange = null;
    };
  }, [status]);

  const requestLocation = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unsupported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => setStatus("granted"),
      () => setStatus("denied"),
    );
  };

  return { status, requestLocation };
}
