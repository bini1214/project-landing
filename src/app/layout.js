import "./globals.css";

export const metadata = {
  title: "PrepX",
  description: "The only prep you need for your next exam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
