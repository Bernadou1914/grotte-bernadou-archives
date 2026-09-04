import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F0E6] text-[#2C221E] font-sans">
      <header className="bg-[#EADFCF] border-b border-[#D8C7B3] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#8C4327] text-white p-2 rounded-lg font-bold">M</div>
          <div>
            <h1 className="font-bold text-sm leading-tight text-[#2C221E]">Grotte Bernadou</h1>
            <p className="text-xs text-[#7A6B5D] uppercase tracking-wider">ARCHIVES GRAFFITIS</p>
          </div>
        </div>
        <nav className="flex items-center gap-2 text-sm font-medium">
          <Link href="/" className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-md shadow-sm border border-black/5 text-[#2C221E]">
            Tableau de bord
          </Link>
          <Link href="/saisie" className="flex items-center gap-2 px-3 py-1.5 text-[#7A6B5D] hover:bg-black/5 rounded-md">
            Saisie terrain
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7A6B5D] mb-1">CORPUS ÉPIGRAPHIQUE • Tarn-et-Garonne</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-[#2C221E]">Archives des graffitis de la Grotte Bernadou</h2>
            <Link href="/saisie" className="flex items-center gap-2 px-4 py-2 bg-[#8C4327] text-white rounded-lg hover:bg-[#73351E] font-medium shadow-sm transition-colors">
              + Nouveau relevé
            </Link>
          </div>
          <p className="text-sm text-[#7A6B5D] mt-1">Inventaire, consultation et relevé de terrain des inscriptions historiques recensées dans le réseau souterrain.</p>
        </div>

        {/* Grille de statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E3D7C5]">
            <p className="text-3xl font-bold">9</p>
            <p className="text-xs text-[#7A6B5D] mt-1">Graffitis relevés</p>
          </div>
          <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E3D7C5]">
            <p className="text-3xl font-bold">6</p>
            <p className="text-xs text-[#7A6B5D] mt-1">Panneaux</p>
          </div>
          <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E3D7C5]">
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-[#7A6B5D] mt-1">Grottes</p>
          </div>
          <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E3D7C5]">
            <p className="text-3xl font-bold">5</p>
            <p className="text-xs text-[#7A6B5D] mt-1">Photos</p>
          </div>
          <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E3D7C5]">
            <p className="text-3xl font-bold">4</p>
            <p className="text-xs text-[#7A6B5D] mt-1">Relevés par</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E3D7C5] flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base">Consulter les archives</h3>
              <p className="text-xs text-[#7A6B5D]">Rechercher et filtrer les graffitis inventoriés</p>
            </div>
          </div>
          <Link href="/saisie" className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E3D7C5] flex items-center justify-between hover:bg-[#F3ECE0] transition-colors">
            <div>
              <h3 className="font-bold text-base">Saisir sur le terrain</h3>
              <p className="text-xs text-[#7A6B5D]">Formulaire mobile optimisé pour le relevé in situ</p>
            </div>
            <span className="text-[#8C4327] font-bold">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
