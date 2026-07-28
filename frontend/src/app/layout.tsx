export const metadata = {
  title: "Web Anichin",
  description: "Platform Streaming Donghua Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
