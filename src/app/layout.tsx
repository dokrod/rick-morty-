import './globals.css';

import Navigation from "../components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
