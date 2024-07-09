"use client";
import styles from '@/styles/movie.module.css';
import {useRouter} from "next/navigation";

interface IMovieProps {
    id: number | string;
    poster_path: string;
    title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
    const router = useRouter();
    const goToDetail = () => router.push(`/movies/${id}`);
    return (
        <div className={styles.movie} onClick={goToDetail}>
            <img src={poster_path} alt={title} />
            <p>{title}</p>
        </div>
    );
 };
