import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Dislog Group | Build & Run Company",
  description:
    "Découvrez l'histoire de Dislog Group, une success story marocaine racontée par Moncef Belkhayat. Un modèle d'entrepreneuriat, de leadership et de management au service des secteurs de la santé, de l'hygiène et de l'alimentation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Favicons */}
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

        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Moncef Belkhayat, David Autissier" />
        <meta
          name="keywords"
          content="Dislog Group, Build and Run Company, The Moroccan Dream, Moncef Belkhayat, David Autissier, success story Maroc, stratégie d'entreprise, innovation managériale, H&S Invest Holding, ESSEC"
        />
        <meta
          name="description"
          content="Découvrez l'histoire de Dislog Group, une success story marocaine racontée par Moncef Belkhayat. Un modèle d'entrepreneuriat, de leadership et de management dans les secteurs de la santé, de l'hygiène et de l'alimentation."
        />
        <link rel="canonical" href="https://buildandrun.ma/" />

        {/* Open Graph (OG) for Social Media */}
        <meta
          property="og:title"
          content="Dislog Group | Build & Run Company"
        />
        <meta
          property="og:description"
          content="Le livre raconté par Moncef Belkhayat avec David Autissier : l'histoire du groupe Dislog, une success story marocaine dans les secteurs de la santé, de l'hygiène et de l'alimentation."
        />
        <meta
          property="og:image"
          content="https://buildandrun.ma/preview.jpg"
        />
        <meta property="og:url" content="https://buildandrun.ma" />
        <meta
          property="og:site_name"
          content="Dislog Group | Build & Run Company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dislog Group | Build & Run Company"
        />
        <meta
          name="twitter:description"
          content="Le parcours de Dislog Group raconté par Moncef Belkhayat : leadership, management et ambition marocaine."
        />
        <meta
          name="twitter:image"
          content="https://buildandrun.ma/preview.jpg"
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
