import "/app/globals.css";

export const metadata = {
  title: "gptstockreport",
  description: "You can view stock reports written with ChatGPT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
