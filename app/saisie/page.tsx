"use client"

import Link from "next/link"

export default function SaisiePage() {
  return (
    <div className="min-h-screen bg-[#F3F0E6] p-4 md:p-8 text-[#2C221E]">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-black/5 rounded-lg text-xl font-bold">
            ←
          </Link>
          <h1 className="text-2xl font-bold text-[#2C221E]">Saisie Terrain — Nouveau Relevé</h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-[#FAF7F0] p-6 rounded-xl border border-[#E3D7C5] space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Numéro du Panneau</label>
              <input type="text" placeholder="ex: PAN-01" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Numéro du graffiti</label>
              <input type="text" placeholder="ex: GRAF-001" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Localisation / Secteur (Cazals - 82)</label>
            <input type="text" placeholder="ex: Galerie des Inscriptions — Paroi Est" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Type d'élément relevé</label>
            <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white">
              <option>Graffiti / Inscription</option>
              <option>Panneau complet</option>
              <option>Tracé charbon / Signature</option>
              <option>Document d'archive / Scan</option>
            </select>
          </div>

          {/* Zone de téléchargement de documents et photos */}
          <div className="border-2 border-dashed border-[#D8C7B3] p-4 rounded-xl text-center bg-white/50 space-y-2">
            <label className="block text-sm font-medium text-[#2C221E]">
              Joindre des photos ou documents d'archives
            </label>
            <input 
              type="file" 
              multiple 
              accept="image/*,.pdf,.doc,.docx"
              className="text-sm text-[#7A6B5D] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#8C4327] file:text-white hover:file:bg-[#73351E] cursor-pointer"
            />
            <p className="text-xs text-[#7A6B5D]">
              Formats acceptés : JPG, PNG, PDF, DOCX (Clichés in situ, scans de notes historiques, croquis)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description & Notes historiques</label>
            <textarea rows={4} placeholder="Dimensions, état de conservation, transcription, notes de recherche..." className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white" />
          </div>

          <button type="submit" className="w-full bg-[#8C4327] hover:bg-[#73351E] text-white py-3 rounded-lg font-medium shadow-sm transition-colors">
            Enregistrer le relevé et les fichiers
          </button>
        </form>
      </div>
    </div>
  )
}
