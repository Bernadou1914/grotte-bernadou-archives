
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
      <body>{children}</body>
    </html>
  )
}
