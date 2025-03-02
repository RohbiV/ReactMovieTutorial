// movie-card component
import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/movieContext';

function MovieCard({movie}) {
    const {isFavorite, addToFavorite, removeFromFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if(favorite) removeFromFavorite(movie.id);
        else addToFavorite(movie);
        // alert("You marked it as favorite!");
    }


    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className="favorite-btn" onClick={onFavoriteClick}>
                            ❤️
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard                   //default export

