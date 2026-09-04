"use client"

import Link from "next/link"

export default function SaisiePage() {
  // Remplace l'URL ci-dessous par le lien de ton dossier Google Drive
  const googleDriveFolderUrl = "https://drive.google.com/drive/folders/12UC8Uo3hQouGtZAjpN564lR_gXHtCuSP?usp=sharing"

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

          {/* Bloc d'accès direct au Google Drive */}
          <div className="border border-[#D8C7B3] p-4 rounded-xl bg-white space-y-2 text-center">
            <p className="text-sm font-medium text-[#2C221E]">
              Stockage des photos HD & documents d'archives
            </p>
            <p className="text-xs text-[#7A6B5D]">
              Dépose directement tes clichés in situ et scans dans ton espace Google Drive dédié.
            </p>
            <a 
              href={googleDriveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#2C221E] text-white text-sm rounded-lg hover:bg-black transition-colors"
            >
              📁 Ouvrir le dossier Google Drive
            </a>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Lien de la photo / document (optionnel)</label>
            <input type="url" placeholder="Colle le lien Google Drive du fichier ici..." className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description & Notes historiques</label>
            <textarea rows={4} placeholder="Dimensions, état de conservation, transcription, notes de recherche..." className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white" />
          </div>

          <button type="submit" className="w-full bg-[#8C4327] hover:bg-[#73351E] text-white py-3 rounded-lg font-medium shadow-sm transition-colors">
            Enregistrer le relevé
          </button>
        </form>
      </div>
    </div>
  )
}
