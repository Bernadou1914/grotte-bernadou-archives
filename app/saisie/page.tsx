"use client"

import Link from "next/link"

export default function SaisiePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-black/5 rounded-lg text-xl font-bold">
            ←
          </Link>
          <h1 className="text-2xl font-bold text-[#3B2D22]">Saisie Terrain — Nouveau Relevé</h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded-xl border border-black/10 space-y-4 shadow-sm">
          <div>
            <label className="block text-sm font-medium mb-1">Code du graffiti</label>
            <input type="text" placeholder="ex: GRAF-001" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Localisation / Salle</label>
            <input type="text" placeholder="ex: Galerie des Inscriptions" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description & Notes</label>
            <textarea rows={4} placeholder="Observations..." className="w-full p-2 border rounded-md" />
          </div>
          <button type="submit" className="w-full bg-[#8C4327] text-white py-3 rounded-lg font-medium">
            Enregistrer le relevé
          </button>
        </form>
      </div>
    </div>
  )
}
