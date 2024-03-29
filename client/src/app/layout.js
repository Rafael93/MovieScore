import { Inter } from "next/font/google";
import "./globals.css";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stack direction="row" spacing={2}>
          <Link href="/session">
            <Button variant="contained">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="contained">Sign In</Button>
          </Link>
          <Link href="/">
            <Button variant="contained">Home</Button>
          </Link>
        </Stack>
        {children}
      </body>
    </html>
  );
}
