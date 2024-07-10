import styles from '/styles/home.module.css';
import Movie from "@/components/movie/movie";
import {getMovies} from "@/service/movieService";
import {IMovie} from "@/types/movie";

export const metadata = {
    title: 'Home',
}

export default async function Home() {
    const movies: IMovie[] = await getMovies();
    
    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    )
}