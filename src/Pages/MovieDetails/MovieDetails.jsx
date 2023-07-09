import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../Service/api';
import { genresNames } from '../../Service/genres-names';
import { Link } from 'react-router-dom';
import s from './MovieDetails.module.css';


const MovieDetails = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [from, setfrom] = useState(null);
    const [searchBack, setSearchBack] = useState('');

    const { state } = useLocation();

    const navigate = useNavigate();
    const options = { year: '', month: '', day: ''};

    useEffect(() => {
        if (state?.from){
            const {pathname, search} = state.from
            setfrom(pathname);
            setSearchBack(search);
        }
    }, [state?.from])


    useEffect(() => {
        fetchMovieDetails(movieId)
            .then(data => {
                normalizedData(data);
                setMovie(data);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])

    function normalizedData(results) {
        createGenres(genresNames, results.genres);
        
        return results;
    }

    function createGenres(arrayID, genresID) {
        let arrayOfGenres = [];

        return arrayID.map(element => {
            if (genresID.includes(element.id)) {
                arrayOfGenres.push(element.name);
            }

            return arrayOfGenres;
        });
    }

    function goBackHandle() {
        if (from === null) {
            //Go back functionality for first load of page from address bar
            navigate('/', { replace: true });
            return;
        }

        else {
            navigate(`${from}${searchBack}`);
        }
    }

    function timeConvert(time) {
        var duration = time;
        var hours = (duration / 60);
        var roundedHours = Math.floor(hours);
        var minutes = (hours - roundedHours) * 60;
        var roundedMinutes = Math.round(minutes);
        let hoursText = roundedHours === 1 ? `${roundedHours} hour ` : `${roundedHours} hours `;
        let minutesText = roundedMinutes === 1 ? `${roundedMinutes} minute` : `${roundedMinutes} minutes`;

        if (roundedHours === 0) {
            hoursText = '';
        }
        if (roundedMinutes === 0) {
            minutesText = '';
        }

        return hoursText + minutesText;
    }
    return <>
        
                <button onClick={goBackHandle} className={s.go_back}>
                </button>
    {movie &&
    <>
        <div className={s.details}>
            <div className={s.description}>
                <h1>Others</h1>
                <ul className={s.info}>
                    {movie.vote_average !== 0
                        ? <li className={s.info__item}>User Score: <span className={s.info__value}><span className={s.star}><i className="fa fa-star-o"></i></span>&#160;{movie.vote_average}</span></li>
                        : <li className={s.info__item}>User Score: <span className={s.info__value}><span className={s.star}><i className="fa fa-star-o"></i></span>&#160;--</span></li>}
                    {movie.budget !== 0
                        ? <li className={s.info__item}>Budget: <span className={s.info__value}>${movie.budget.toLocaleString()}</span></li>
                        : ''}
                    {movie.revenue !== 0
                        ? <li className={s.info__item}>Revenue: <span className={s.info__value}>${movie.revenue.toLocaleString()}</span></li>
                        : ''}
                    {movie.runtime !== 0
                        ? <li className={s.info__item}>Runtime: <span className={s.info__value}>{timeConvert(movie.runtime)}</span></li>
                        : ''}
                    <li className={s.info__item}>Genres: <ul className={s.genres}>
                        {movie.genres.length>0 
                            ? movie.genres.map(({ id, name }, index) => (
                                <li className={s.genres__item} key={id}>
                                    { (index  ? ', ' : '') + name }
                                </li>
                                ))
                            : <p className={s.genres__item}>Other</p>}
                        </ul>
                    </li>
                </ul>
                

            </div>

            <div className={s.image_wrapper}>
                <div className={s.imagecont}>

                {movie.poster_path
                
                ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className={s.image}/>
                : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={movie.original_title} className={s.image} />
                }
                
                <h2 className={s.title}>{movie.original_title}</h2>
                </div>
                <div className={s.title_wrapper}>
                    <h1 className={s.title}>Sinopsis</h1>
                    <p className={s.overview}>{movie.overview}</p>
                    <br />
                    <h3>Movie Tagline</h3>
                    {movie.tagline !== ""
                        // Checking for dot at the end of a string with tagline
                        ? <p className={s.tagline}>"{movie.tagline}"</p>
                        : ''
                    }
                </div>
            </div>
        </div>
                <div className={s.additional}>
                    <Link to={`/movies/${movieId}/cast`} className={s.additional__button}><button>Cast</button></Link>
                    <Link to={`/movies/${movieId}/reviews`} className={s.additional__button}><button>Reviews</button></Link>
                    <Link to={`/movies/${movieId}/videos`} className={s.additional__button}><button>Trailer</button></Link>
                </div>
        </>
    }
    
    <Outlet/>
</>


}

export default MovieDetails;