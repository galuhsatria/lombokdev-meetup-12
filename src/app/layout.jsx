import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Lombok Dev Meetup 12",
  description: "Informasi tentang lombok dev meetup yang ke 12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
