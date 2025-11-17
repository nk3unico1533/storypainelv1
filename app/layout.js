import "./globals.css";

export const metadata = {
  title: "Painel Story",
  description: "Consultas estilo Instagram Story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
