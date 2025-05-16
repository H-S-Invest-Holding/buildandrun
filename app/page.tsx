import Hero from "./components/Hero";
import Authors from "./components/Authors";
import Book from "./components/Book";
import Libraries from "./components/Libraries";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Book />
      <Authors />
      <Libraries />
      <Carousel />
    </main>
  );
}
