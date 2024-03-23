import "~/styles/globals.css";

export const metadata = {
  title: "NOT IKEA",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/IKE.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
