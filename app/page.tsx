"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] p-4 md:p-12 text-[#5D5C61] font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* En-tête du projet */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#7395AE]/30 shadow-sm space-y-3">
          <div className="inline-block px-3 py-1 bg-[#379683]/10 text-[#379683] text-xs font-bold rounded-full uppercase tracking-wider">
            Archive Spéléo-Épigraphique
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#557A95]">
            Grottes de Bernadou, Mayrière & des Anglais
          </h1>
          <p className="text-sm md:text-base text-[#5D5C61]">
            Système centralisé de relevé des graffitis, des panneaux et de prosopographie historique. 
            Transition numérique pour l'inventaire et la recherche patrimoniale.
          </p>
        </div>

        {/* Grille des actions principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Carte Saisie Terrain */}
          <div className="bg-white p-6 rounded-xl border border-[#7395AE]/30 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#379683] transition-colors">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#379683]/10 text-[#379683] flex items-center justify-center font-bold text-lg">
                ✍️
              </div>
              <h2 className="text-xl font-bold text-[#557A95]">Saisie sur le terrain</h2>
              <p className="text-xs text-[#5D5C61]">
                Accéder aux fiches de saisie duales : Fiches Graffiti (avec multi-auteurs et date libre) et Fiches Panneau pour les différentes cavités.
              </p>
            </div>
            <Link 
              href="/saisie" 
              className="w-full text-center py-2.5 px-4 bg-[#379683] hover:bg-[#2e7d6d] text-white text-sm font-bold rounded-lg transition-colors shadow-2xs"
            >
              Ouvrir le formulaire de saisie →
            </Link>
          </div>

          {/* Carte Archives / Base (prochaine étape) */}
          <div className="bg-white p-6 rounded-xl border border-[#7395AE]/30 shadow-sm flex flex-col justify-between space-y-4 opacity-90">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#557A95]/10 text-[#557A95] flex items-center justify-center font-bold text-lg">
                📂
              </div>
              <h2 className="text-xl font-bold text-[#557A95]">Documents & Individus</h2>
              <p className="text-xs text-[#5D5C61]">
                Section dédiée à la prosopographie : liaison entre les signatures pariétales et les archives historiques (bientôt disponible).
              </p>
            </div>
            <div className="w-full text-center py-2.5 px-4 bg-[#F0F4F8] text-[#5D5C61] text-sm font-semibold rounded-lg border border-[#7395AE]/20 cursor-not-allowed">
              Prochaine étape de développement
            </div>
          </div>

        </div>

        {/* Pied de page informatif */}
        <div className="text-center text-xs text-[#5D5C61]/70 pt-4 border-t border-[#7395AE]/20">
          Application sécurisée sur Vercel & Supabase — Données synchronisées en temps réel.
        </div>

      </div>
    </div>
  )
}
