export const metadata = {
  title: "Archives des graffitis de la Grotte Bernadou",
  description: "Inventaire et consultation des archives",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#F3F0E6] text-[#2C221E] antialiased">{children}</body>
    </html>
  )
}
