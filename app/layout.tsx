import "./globals.css";

export const metadata = {
  title: "Portal de Viagens",
  description: "Projeto desenvolvido com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}