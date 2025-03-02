import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css';

// home page component
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                console.log(popularMovies);
                setMovie(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load....")
            } finally {
                setLoading(false)
            }

        }

        loadPopularMovies()
    }, []
    )

    const handleSearch = async (e) => {
        // alert(searchQuery);
        e.preventDefault();

        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);

        try {
            const searchResult = await searchMovies(searchQuery);
            setMovie(searchResult);
            setError(null);
        } catch(err) {
            console.log(err);
            setError("No Result Found!");
        } finally {
            setLoading(false);
        }

        setSearchQuery("");
    };

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for Movies....."
                        className="search-input"
                        value={searchQuery}
                        onChange={
                            (e) => {
                                setSearchQuery(e.target.value);
                            }
                        }
                    />
                </form>
                
                { error && (
                        <div className="error-message">{error}</div>
                    ) 
                }

                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="movies-grid">
                        {
                            movie.map(
                                (movie) =>
                                    movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />)
                            )
                        }
                    </div>
                )
                }


            </div>
        </>
    )

}

export default Home
