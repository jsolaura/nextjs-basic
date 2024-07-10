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
                <h5>{movie.release_date}</h5>
                <h4><span>🕐{movie.runtime} mins</span>⭐️ {movie.vote_average.toFixed(1)}</h4>
                <p>{movie.overview}</p>
                <div className={styles.genres}>
                    {movie.genres.map(genre => (
                        <span key={genre.id}>#{genre.name}</span>
                    ))}
                </div>
                <Link href={movie.homepage} target='_blank'>More Detail &rarr;</Link>
            </div>
        </div>
    );
}