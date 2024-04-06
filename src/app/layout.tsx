import AuthButton from "../ui/AuthButton";
import { inter } from "@/ui/fonts";
import Logo from "@/ui/Logo";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Touchtypist | Learn to type fast",
  description: "Learn touch typing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} aintialiased`}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-12">
              <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                <Logo />
                <AuthButton />
              </div>
            </nav>
            {children}
            <footer className="w-full border-t border-t-foreground/10 flex justify-center items-center text-center text-xs h-12">
              2024
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
