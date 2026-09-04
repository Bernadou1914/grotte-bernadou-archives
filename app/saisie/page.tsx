"use client"

import { useState } from "react"
import Link from "next/link"

export default function SaisiePage() {
  const [tab, setTab] = useState<"graffiti" | "panneau">("graffiti")
  const googleDriveFolderUrl = "https://drive.google.com/drive/folders/12UC8Uo3hQouGtZAjpN5641R_gXHtCuSP?usp=sharing"

  return (
    <div className="min-h-screen bg-[#F3F0E6] p-4 md:p-8 text-[#2C221E]">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-black/5 rounded-lg text-xl font-bold">
              ←
            </Link>
            <h1 className="text-2xl font-bold text-[#2C221E]">Relevé Spéléo-Épigraphique</h1>
          </div>
          
          <a 
            href={googleDriveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#2C221E] text-white text-xs rounded-lg hover:bg-black transition-colors flex items-center gap-1"
          >
            📁 Mon Drive Google
          </a>
        </div>

        {/* Sélecteur strict : Graffiti vs Panneau */}
        <div className="flex border-b border-[#D8C7B3] gap-2">
          <button
            onClick={() => setTab("graffiti")}
            className={`py-2 px-4 font-semibold text-sm rounded-t-lg transition-colors ${
              tab === "graffiti"
                ? "bg-[#FAF7F0] text-[#8C4327] border-t border-x border-[#E3D7C5]"
                : "text-[#7A6B5D] hover:text-[#2C221E]"
            }`}
          >
            Fiche Graffiti 
          </button>
          <button
            onClick={() => setTab("panneau")}
            className={`py-2 px-4 font-semibold text-sm rounded-t-lg transition-colors ${
              tab === "panneau"
                ? "bg-[#FAF7F0] text-[#8C4327] border-t border-x border-[#E3D7C5]"
                : "text-[#7A6B5D] hover:text-[#2C221E]"
            }`}
          >
            Fiche Panneau
          </button>
        </div>

        {/* FORMULAIRE GRAFFITI */}
        {tab === "graffiti" && (
          <form onSubmit={(e) => e.preventDefault()} className="bg-[#FAF7F0] p-6 rounded-b-xl border border-[#E3D7C5] space-y-5 shadow-sm">
            <h2 className="text-lg font-bold border-b border-[#D8C7B3] pb-2 text-[#8C4327]">Identificateurs & Relevé</h2>
            
            <div>
              <label className="block text-xs font-semibold mb-1">Cavité / Grotte *</label>
              <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm font-medium">
                <option value="bernadou">Grotte de Bernadou</option>
                <option value="mayriere">Grotte de Mayrière</option>
                <option value="anglais">Grotte des Anglais</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">N° du graffiti *</label>
                <input type="text" placeholder="ex: GRAF-01" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">N° du panneau rattachement</label>
                <input type="text" placeholder="ex: PAN-02" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Date du relevé *</label>
                <input type="date" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Graf. lisibles sur zone</label>
                <input type="number" defaultValue="0" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Graf. illisibles sur zone</label>
                <input type="number" defaultValue="0" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Nom sur la paroi</label>
                <input type="text" placeholder="ex: DUPUY" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Prénom sur la paroi</label>
                <input type="text" placeholder="ex: Jean-Baptiste" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Releveur(s)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs bg-white p-3 rounded-md border border-[#D8C7B3]">
                <label className="flex items-center gap-1.5"><input type="checkbox" /> Fillatre Delphine</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" /> Danielle Sanhard</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" /> Michel Sanhard</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" /> Magali Coustillères-Guais</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" /> Rémy Soulier</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" /> Camille Giquel</label>
                <label className="flex items-center gap-1.5 col-span-2">
                  <input type="checkbox" />
                  <span>Autre :</span>
                  <input 
                    type="text" 
                    placeholder="Nom Prénom" 
                    className="ml-1 p-1 border border-[#D8C7B3] rounded text-xs w-full focus:outline-none focus:border-[#8C4327]" 
                  />
                </label>
              </div>
            </div>

            <h2 className="text-lg font-bold border-b border-[#D8C7B3] pb-2 text-[#8C4327] pt-2">Paroi & Technique d'exécution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Couleur paroi</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Noire (fine couche)</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Calcaire (blanc)</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Ocre (argile)</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Mixte</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Composite</label>                
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Aspect paroi</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Régulière</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Irrégulière</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Technique</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Gravé</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Flamme / Charbon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Crayon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Stylo</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Abrasion</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Profondeur tracé (mm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Largeur tracé (mm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Hauteur par rapport au sol (m)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Localisation</label>
                <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm">
                  <option>Isolée</option>
                  <option>Groupée</option>
                </select>
              </div>
            </div>

            <h2 className="text-lg font-bold border-b border-[#D8C7B3] pb-2 text-[#8C4327] pt-2">Analyse Graphique</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">État de l'écriture</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Lisible</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Illisible</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Effacée</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Palimpseste</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Dessin</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Typologie des caractères</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Majuscule / Scripte</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Cursive</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Lettre manquante ou inversée</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Qualité / Main de l'auteur</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Calligraphique</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Appliquée</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Tremblante</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Cartouche</label>
                <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm"><option>non</option><option>oui</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Cartouche fond noir</label>
                <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm"><option>non</option><option>oui</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Hauteur graffiti (cm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Largeur graffiti (cm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Message / Texte transcrit</label>
              <textarea rows={2} placeholder="Transcription littérale du texte inscrit sur la paroi..." className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Photo prise ?</label>
                <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm"><option>oui</option><option>non</option><option>refaire</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">N° ou Réf. Photo</label>
                <input type="text" placeholder="ex: IMG_2026_01" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Nombre de lignes</label>
                <input type="number" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Commentaires de terrain</label>
              <textarea rows={2} placeholder="Observations sur la lisibilité, croisements ou anomalies..." className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
            </div>

            <button type="submit" className="w-full bg-[#8C4327] hover:bg-[#73351E] text-white py-3 rounded-lg font-bold shadow-sm transition-colors">
              Enregistrer le graffiti
            </button>
          </form>
        )}

        {/* FORMULAIRE PANNEAU */}
        {tab === "panneau" && (
          <form onSubmit={(e) => e.preventDefault()} className="bg-[#FAF7F0] p-6 rounded-b-xl border border-[#E3D7C5] space-y-5 shadow-sm">
            <h2 className="text-lg font-bold border-b border-[#D8C7B3] pb-2 text-[#8C4327]">Propriétés du Panneau</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Orientation *</label>
                <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm">
                  <option>paire (GAUCHE, entrée dans le dos)</option>
                  <option>impaire (DROIT, entrée dans le dos)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Numéro panneau *</label>
                <input type="text" placeholder="ex: PAN-01" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Date relevé *</label>
                <input type="date" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Auteur(s) *</label>
                <div className="space-y-1 text-xs bg-white p-3 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Delphine Fillatre</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Danielle Sanhard</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Michel Sanhard</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Magali Coustillères-Guais</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">État de la paroi *</label>
                <div className="grid grid-cols-2 gap-1 text-xs bg-white p-3 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Blanche</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Noire</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Ocre</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Mixte</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Calcitée</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Calcaire</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Argile</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Aspect de la paroi *</label>
                <div className="space-y-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Lisse</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Aspérité</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Choux-fleurs</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Technique d'exécution observée *</label>
                <div className="grid grid-cols-2 gap-1 text-xs bg-white p-2 rounded-md border border-[#D8C7B3]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Crayon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Gravé</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Abrasion</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Flamme / Charbon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> À l'argile</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" /> Peint</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Nombre de graffitis</label>
                <input type="number" defaultValue="0" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Traces d'eau *</label>
                <select className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm"><option>non</option><option>oui</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Hauteur marque d'eau (m)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Dimensions (H x L m) *</label>
                <div className="flex gap-1">
                  <input type="number" step="0.01" placeholder="H" className="w-1/2 p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
                  <input type="number" step="0.01" placeholder="L" className="w-1/2 p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Commence / Se termine par</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Début panneau" className="w-1/2 p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
                  <input type="text" placeholder="Fin panneau" className="w-1/2 p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Référence Photo Panneau</label>
                <input type="text" placeholder="ex: PAN_01_OVERVIEW" className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Commentaires sur l'état et l'aspect</label>
              <textarea rows={2} placeholder="Remarques géologiques, concrétionnement, altération..." className="w-full p-2 border border-[#D8C7B3] rounded-md bg-white text-sm" />
            </div>

            <button type="submit" className="w-full bg-[#8C4327] hover:bg-[#73351E] text-white py-3 rounded-lg font-bold shadow-sm transition-colors">
              Enregistrer le panneau
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
