import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Dislog Group | Build & Run Company",
  description: "Build & Run Company, Dislog Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta
          property="og:image"
          content="https://buildandrun.netlify.app/preview.jpg"
        />
        <meta
          property="og:title"
          content="Dislog Group | Build & Run Company"
        />
        <meta
          property="og:description"
          content="Build & Run Company, Dislog Group"
        />
        <meta
          property="og:site_name"
          content="Dislog Group | Build & Run Company"
        />
        <meta property="og:url" content="https://buildandrun.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="keywords"
          content="Dislog Group, Build & Run Company"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dislog Group | Build & Run Company"
        />
        <meta
          name="twitter:description"
          content="Dislog Group, Build & Run Company"
        />
        <meta
          name="twitter:image"
          content="https://buildandrun.netlify.app/preview.jpg"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
