import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/MuiTheme";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReduxProvider from "./store/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <ReduxProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
