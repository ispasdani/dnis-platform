import FilledBand from "@/dnis-components/filledBand/FilledBand";
import Nav from "@/dnis-components/nav/Nav";
import ScrollBand from "@/dnis-components/scrollBand/ScrollBand";
import About from "@/dnis-sections/about/About";
import Coaching from "@/dnis-sections/coaching/Coaching";
import Herobox from "@/dnis-sections/herobox/Herobox";
import Projects from "@/dnis-sections/projects/Projects";
import Work from "@/dnis-sections/work/Work";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black">
      <Nav />
      <Herobox />
      <FilledBand />
      <About />
      <FilledBand />
      <Work />
      <ScrollBand
        directionX="-1200"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <Projects />
      <ScrollBand
        directionX="-1200"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      {/* <Coaching /> */}
    </main>
  );
}
