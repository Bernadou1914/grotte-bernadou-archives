'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialisation de Supabase (utilise tes propres clés ou variables d'environnement)
const SUPABASE_URL = "https://lsiibyjyodjkuiptbdmz.supabase.co";
// Note: Pour une application en production, il est recommandé d'utiliser une clé anonyme (anon key) 
// et de configurer les politiques RLS (Row Level Security) sur Supabase pour la lecture publique.
const SUPABASE_ANON_KEY = "TA_CLE_ANON_OU_SERVICE_ROLE"; 
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function Home() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [resultats, setResultats] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [rechercheFaite, setRechercheFaite] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRechercheFaite(true);

    try {
      let query = supabase.from('archives_cazals').select('*');

      if (nom.trim() !== '') {
        query = query.ilike('Nom', `%${nom.trim()}%`);
      }
      if (prenom.trim() !== '') {
        query = query.ilike('Prénom', `%${prenom.trim()}%`);
      }

      const { data, error } = await query.limit(50);

      if (error) {
        console.error('Erreur lors de la recherche:', error);
      } else {
        setResultats(data || []);
      }
    } catch (err) {
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Archives de Cazals</h1>
          <p className="mt-2 text-gray-600">Recherchez un ancêtre ou un habitant dans les recensements historiques.</p>
        </div>

        {/* Formulaire de recherche */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                placeholder="Ex: Bernadou"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input
                type="text"
                placeholder="Ex: Jean"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end mt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? 'Recherche en cours...' : 'Rechercher'}
              </button>
            </div>
          </form>
        </div>

        {/* Résultats */}
        {rechercheFaite && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Résultats de la recherche ({resultats.length})
              </h2>
            </div>
            {resultats.length === 0 ? (
              <div className="p-6 text-center text-gray-500">Aucun résultat trouvé.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left font-medium">Nom</th>
                      <th className="px-6 py-3 text-left font-medium">Prénom</th>
                      <th className="px-6 py-3 text-left font-medium">Année</th>
                      <th className="px-6 py-3 text-left font-medium">Lieu de naissance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-600">
                    {resultats.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.Nom || '-'}</td>
                        <td className="px-6 py-4">{row.Prénom || '-'}</td>
                        <td className="px-6 py-4">{row.Année || '-'}</td>
                        <td className="px-6 py-4">{row.lieu_naissance || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
