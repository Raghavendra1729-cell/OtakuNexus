import React, { useContext, useState } from 'react'
import { FavContext } from '../../App'
import axios from 'axios'

function AnimeCard({ anime }) {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
                src={anime.entry.images?.jpg?.image_url || 'placeholder.jpg'} 
                alt={anime.entry.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h4 className="text-white font-semibold text-lg mb-2">{anime.entry.title}</h4>
                <p className="text-gray-400 text-sm">Votes: {anime.votes}</p>
            </div>
        </div>
    )
}

function AiRecom() {
    const { favAnime } = useContext(FavContext)
    const [recs, setRecs] = useState([])
    const [loading, setLoading] = useState(false)

    const getRecs = () => {
        setRecs([]) 
        setLoading(true)
        const top3 = favAnime.slice(0, 3)
        
        top3.forEach(anime => {
            axios.get(`https://api.jikan.moe/v4/anime/${anime.mal_id}/recommendations`)
            .then(response => {
                setRecs(oldRecs => [...oldRecs, {
                    title: anime.title,
                    recommendations: response.data.data.slice(0, 3)
                }])
                setLoading(false)
            })
        })
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Anime Recommendations</h2>
                <button 
                    onClick={getRecs} 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                    disabled={loading || favAnime.length === 0}
                >
                    {loading ? 'Finding Recommendations...' : 'Get Recommendations'}
                </button>
            </div>

            {loading && (
                <div className="text-white text-center text-xl">
                    <div className="animate-spin inline-block w-8 h-8 border-4 border-t-blue-500 border-white rounded-full mr-2"></div>
                    Loading...
                </div>
            )}

            <div className="space-y-8">
                {recs.map(item => (
                    <div key={item.title} className="bg-gray-900 rounded-xl p-6">
                        <h3 className="text-2xl text-white font-bold mb-4">
                            Because you watched: {item.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {item.recommendations.map(rec => (
                                <AnimeCard key={rec.entry.mal_id} anime={rec} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {favAnime.length === 0 && (
                <div className="text-center text-white mt-8">
                    Add some anime to your favorites to get recommendations!
                </div>
            )}
        </div>
    )
}

export default AiRecom
