import Hero from "./components/Hero";
import Authors from "./components/Authors";
import Book from "./components/Book";
import Libraries from "./components/Libraries";

export default function Home() {
  return (
    <main>
      <Hero />
      <Book />
      <Authors />
      <Libraries />
    </main>
  );
}
