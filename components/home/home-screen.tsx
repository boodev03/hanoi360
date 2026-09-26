import { Banner } from "./banner";
import { BottomNav } from "./bottom-nav";
import { CategoryGrid } from "./category-grid";
import { Header } from "./header";
import { HistoryBanner } from "./history-banner";
import { NearYou } from "./near-you";

export function HomeScreen() {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <Header />

      <main
        className="h-full space-y-7 overflow-y-auto pb-6"
        style={{
          paddingTop: "calc(92px + env(safe-area-inset-top))",
          paddingBottom: "calc(103px + env(safe-area-inset-bottom))",
          background: "linear-gradient(rgb(250, 248, 245) 0%, rgb(239, 236, 231) 100%)",
          touchAction: "pan-y",
        }}
      >
        <div>
          <Banner />
          <CategoryGrid />
          <NearYou />
          <HistoryBanner />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
