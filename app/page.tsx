import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-[#FBF9F5]">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#3B2D22]">Grotte Bernadou Archives</h1>
        <nav className="flex flex-col gap-4">
          <Link 
            href="/saisie" 
            className="p-4 bg-white border border-black/10 rounded-xl shadow-sm hover:bg-black/5 transition-colors font-medium text-[#8C4327]"
          >
            Saisie Terrain — Nouveau Relevé →
          </Link>
        </nav>
      </div>
    </main>
  )
}
