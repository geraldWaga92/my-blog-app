import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        {/* Header */}
        <Header />

        {/* Banner */}
        <Banner />
        {children}
      </body>
    </html>
  );
}
