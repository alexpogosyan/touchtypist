import { inter } from "@/ui/fonts";
import Logo from "@/ui/Logo";
import "./globals.css";

const defaultUrl = "https://www.touchtypist.app";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Touchtypist | Learn touch typing ",
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
        <main className="flex min-h-screen flex-col items-center">
          <div className="flex w-full flex-1 flex-col items-center gap-20">
            <nav className="flex h-12 w-full justify-center border-b border-b-foreground/10">
              <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
                <Logo />
              </div>
            </nav>
            {children}
            <footer className="flex h-12 w-full items-center justify-center border-t border-t-foreground/10 text-center text-xs">
              <a
                className="text-blue-600 underline"
                href="https://github.com/alexpogosyan/touchtypist"
              >
                Github
              </a>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
