// The page only composes features. Each one lives in src/features/<name>.
import { Navbar } from "@/features/navbar";
import { Hero } from "@/features/hero";
import { Marquee } from "@/features/marquee";
import { Karbar } from "@/features/karbar";
import { Menu } from "@/features/menu";
import { DayCycle } from "@/features/day-cycle";
import { Spaces } from "@/features/spaces";
import { Story } from "@/features/story";
import { Booking } from "@/features/booking";
import { FindUs } from "@/features/find-us";
import { Footer } from "@/features/footer";
import { MessengerButton } from "@/features/messenger-button";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Karbar />
        <Menu />
        <DayCycle />
        <Spaces />
        <Story />
        <Booking />
        <FindUs />
      </main>
      <Footer />
      <MessengerButton />
    </>
  );
}
