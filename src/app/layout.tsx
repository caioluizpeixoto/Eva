import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Hellen Criativa',
  description: 'O kit com mais de 2 mil moldes para artesanato em EVA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <script src="https://fast.wistia.com/player.js" async></script>
        <script src="https://fast.wistia.com/embed/n1pj3f7c1k.js" async type="module"></script>
        <style>{`wistia-player[media-id='n1pj3f7c1k']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/n1pj3f7c1k/swatch'); display: block; filter: blur(5px); padding-top:133.33%; }`}</style>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
