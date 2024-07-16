import "/app/globals.css";

export const metadata = {
  title: "gpt stock report",
  description: "You can view stock reports written with ChatGPT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZEBL0ZMYJ"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}