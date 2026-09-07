"use client"

import { useState } from "react"
import Link from "next/link"

export default function SaisiePage() {
  const [tab, setTab] = useState<"graffiti" | "panneau">("graffiti")
  const googleDriveFolderUrl = "https://drive.google.com/drive/folders/12UC8Uo3hQouGtZAjpN5641R_gXHtCuSP?usp=sharing"

  return (
    <div className="min-h-screen bg-[#F0F4F8] p-4 md:p-8 text-[#5D5C61] font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-[#557A95]/10 rounded-lg text-xl font-bold text-[#557A95]">
              ←
            </Link>
            <h1 className="text-2xl font-bold text-[#557A95]">Relevé Spéléo-Épigraphique</h1>
          </div>
          
          <a 
            href={googleDriveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#557A95] text-white text-xs rounded-lg hover:bg-[#7395AE] transition-colors flex items-center gap-1 shadow-sm"
          >
            📁 Mon Drive Google
          </a>
        </div>

        {/* Sélecteur strict : Graffiti vs Panneau */}
        <div className="flex border-b border-[#7395AE]/30 gap-2">
          <button
            onClick={() => setTab("graffiti")}
            className={`py-2 px-4 font-semibold text-sm rounded-t-lg transition-colors ${
              tab === "graffiti"
                ? "bg-white text-[#379683] border-t-2 border-x border-[#379683] shadow-sm"
                : "text-[#5D5C61] hover:text-[#557A95]"
            }`}
          >
            Fiche Graffiti 
          </button>
          <button
            onClick={() => setTab("panneau")}
            className={`py-2 px-4 font-semibold text-sm rounded-t-lg transition-colors ${
              tab === "panneau"
                ? "bg-white text-[#379683] border-t-2 border-x border-[#379683] shadow-sm"
                : "text-[#5D5C61] hover:text-[#557A95]"
            }`}
          >
            Fiche Panneau
          </button>
        </div>

        {/* FORMULAIRE GRAFFITI */}
        {tab === "graffiti" && (
          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded-b-xl border border-[#7395AE]/30 space-y-5 shadow-sm">
            <h2 className="text-lg font-bold border-b border-[#7395AE]/20 pb-2 text-[#557A95]">Identificateurs & Relevé</h2>
            
            <div>
              <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Cavité / Grotte *</label>
              <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm font-medium text-[#5D5C61] focus:outline-none focus:border-[#379683]">
                <option value="bernadou">Grotte de Bernadou</option>
                <option value="mayriere">Grotte de Mayrière</option>
                <option value="anglais">Grotte des Anglais</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">N° du graffiti *</label>
                <input type="text" placeholder="ex: GRAF-01" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">N° du panneau rattachement</label>
                <input type="text" placeholder="ex: PAN-02" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Date du relevé *</label>
                <input type="date" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Graf. lisibles sur zone</label>
                <input type="number" defaultValue="0" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Graf. illisibles sur zone</label>
                <input type="number" defaultValue="0" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
            </div>

            {/* BLOCS AUTEURS MULTIPLES SUR LA PAROI (Jusqu'à 4) */}
            <div className="p-4 bg-[#F0F4F8]/50 rounded-md border border-[#7395AE]/30 space-y-3">
              <label className="block text-xs font-bold text-[#557A95]">Auteurs / Inscriptions sur la paroi (jusqu'à 4)</label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-2 bg-white rounded border border-[#7395AE]/30 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#557A95] block mb-1">Nom & Prénom n°1</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Nom 1" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                    <input type="text" placeholder="Prénom 1" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                  </div>
                </div>

                <div className="p-2 bg-white rounded border border-[#7395AE]/30 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#557A95] block mb-1">Nom & Prénom n°2</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Nom 2" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                    <input type="text" placeholder="Prénom 2" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                  </div>
                </div>

                <div className="p-2 bg-white rounded border border-[#7395AE]/30 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#557A95] block mb-1">Nom & Prénom n°3</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Nom 3" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                    <input type="text" placeholder="Prénom 3" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                  </div>
                </div>

                <div className="p-2 bg-white rounded border border-[#7395AE]/30 shadow-2xs">
                  <span className="text-[10px] font-bold text-[#557A95] block mb-1">Nom & Prénom n°4</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Nom 4" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                    <input type="text" placeholder="Prénom 4" className="p-1.5 border border-[#7395AE]/40 rounded bg-white text-xs text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                  </div>
                </div>
              </div>
            </div>

            {/* DATE SAISIE LIBRE SUR LA PAROI */}
            <div>
              <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Date inscrite sur la paroi (texte libre)</label>
              <input type="text" placeholder="ex: 4 août 1928 ou 1928" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Releveur(s)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs bg-[#F0F4F8]/50 p-3 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Fillatre Delphine</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Danielle Sanhard</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Michel Sanhard</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Magali Coustillères-Guais</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Rémy Soulier</label>
                <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Camille Giquel</label>
                <label className="flex items-center gap-1.5 col-span-2">
                  <input type="checkbox" className="accent-[#379683]" />
                  <span>Autre :</span>
                  <input 
                    type="text" 
                    placeholder="Nom Prénom" 
                    className="ml-1 p-1 border border-[#7395AE]/40 rounded text-xs w-full bg-white focus:outline-none focus:border-[#379683]" 
                  />
                </label>
              </div>
            </div>

            <h2 className="text-lg font-bold border-b border-[#7395AE]/20 pb-2 text-[#557A95] pt-2">Paroi & Technique d'exécution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Couleur paroi</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Noire (fine couche)</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Calcaire (blanc)</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Ocre (argile)</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Mixte</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Composite</label>                
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Aspect paroi</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Régulière</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Irrégulière</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Technique</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Gravé</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Flamme / Charbon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Crayon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Stylo</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Abrasion</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Profondeur tracé (mm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Largeur tracé (mm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Hauteur par rapport au sol (m)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Localisation</label>
                <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]">
                  <option>Isolée</option>
                  <option>Groupée</option>
                </select>
              </div>
            </div>

            <h2 className="text-lg font-bold border-b border-[#7395AE]/20 pb-2 text-[#557A95] pt-2">Analyse Graphique</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">État de l'écriture</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Lisible</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Illisible</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Effacée</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Palimpseste</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Dessin</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Typologie des caractères</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Majuscule / Scripte</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Cursive</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Lettre manquante ou inversée</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Qualité / Main de l'auteur</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Calligraphique</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Appliquée</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Tremblante</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Cartouche</label>
                <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]"><option>non</option><option>oui</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Cartouche fond noir</label>
                <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]"><option>non</option><option>oui</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Hauteur graffiti (cm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Largeur graffiti (cm)</label>
                <input type="number" step="0.1" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Message / Texte transcrit</label>
              <textarea rows={2} placeholder="Transcription littérale du texte inscrit sur la paroi..." className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Photo prise ?</label>
                <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]"><option>oui</option><option>non</option><option>refaire</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">N° ou Réf. Photo</label>
                <input type="text" placeholder="ex: IMG_2026_01" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Nombre de lignes</label>
                <input type="number" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Commentaires de terrain</label>
              <textarea rows={2} placeholder="Observations sur la lisibilité, croisements ou anomalies..." className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
            </div>

            <button type="submit" className="w-full bg-[#379683] hover:bg-[#2e7d6d] text-white py-3 rounded-lg font-bold shadow-sm transition-colors">
              Enregistrer le graffiti
            </button>
          </form>
        )}

        {/* FORMULAIRE PANNEAU */}
        {tab === "panneau" && (
          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded-b-xl border border-[#7395AE]/30 space-y-5 shadow-sm">
            <h2 className="text-lg font-bold border-b border-[#7395AE]/20 pb-2 text-[#557A95]">Propriétés du Panneau</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Orientation *</label>
                <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]">
                  <option>paire (GAUCHE, entrée dans le dos)</option>
                  <option>impaire (DROIT, entrée dans le dos)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Numéro panneau *</label>
                <input type="text" placeholder="ex: PAN-01" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Date relevé *</label>
                <input type="date" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Auteur(s) *</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-3 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Delphine Fillatre</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Danielle Sanhard</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Michel Sanhard</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Magali Coustillères-Guais</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">État de la paroi *</label>
                <div className="grid grid-cols-2 gap-1 text-xs bg-[#F0F4F8]/50 p-3 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Blanche</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Noire</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Ocre</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Mixte</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Calcitée</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Calcaire</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Argile</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Aspect de la paroi *</label>
                <div className="space-y-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Lisse</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Aspérité</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Choux-fleurs</label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Technique d'exécution observée *</label>
                <div className="grid grid-cols-2 gap-1 text-xs bg-[#F0F4F8]/50 p-2 rounded-md border border-[#7395AE]/30 text-[#5D5C61]">
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Crayon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Gravé</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Abrasion</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Flamme / Charbon</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> À l'argile</label>
                  <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#379683]" /> Peint</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Nombre de graffitis</label>
                <input type="number" defaultValue="0" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Traces d'eau *</label>
                <select className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]"><option>non</option><option>oui</option></select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Hauteur marque d'eau (m)</label>
                <input type="number" step="0.01" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Dimensions (H x L m) *</label>
                <div className="flex gap-1">
                  <input type="number" step="0.01" placeholder="H" className="w-1/2 p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                  <input type="number" step="0.01" placeholder="L" className="w-1/2 p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Commence / Se termine par</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Début panneau" className="w-1/2 p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                  <input type="text" placeholder="Fin panneau" className="w-1/2 p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Référence Photo Panneau</label>
                <input type="text" placeholder="ex: PAN_01_OVERVIEW" className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-[#5D5C61]">Commentaires sur l'état et l'aspect</label>
              <textarea rows={2} placeholder="Remarques géologiques, concrétionnement, altération..." className="w-full p-2 border border-[#7395AE]/40 rounded-md bg-white text-sm text-[#5D5C61] focus:outline-none focus:border-[#379683]" />
            </div>

            <button type="submit" className="w-full bg-[#379683] hover:bg-[#2e7d6d] text-white py-3 rounded-lg font-bold shadow-sm transition-colors">
              Enregistrer le panneau
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
