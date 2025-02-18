import TransitionProvider from "@/components/transitionProvider";
import "./globals.css";

export const metadata = {
  title: "Subiyal dev portfolio app",
  description: "Best Animated Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
