import Link from "next/link";
import styles from '@/styles/movie-info.module.css';
import {getMovie} from "@/service/movieService";
import {IMovie} from "@/types/movie";

export default async function MovieInfo({ id }: { id: string }) {
    const movie: IMovie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <Link href={movie.homepage} target='_blank'>HomePage &rarr;</Link>
            </div>
        </div>
    );
}