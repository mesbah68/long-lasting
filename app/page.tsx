import Carousel from "./_components/carousel/page";
import Header from "./_components/header/page";
import Navbar from "./_components/navbar/page";
import Section from "./_components/section/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-6 bg-[#f5f5f4]">
      <Navbar />
      <Header />
      <Section />
      <Carousel />
    </main >
  );
}
