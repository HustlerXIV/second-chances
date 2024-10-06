import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/MuiTheme";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
