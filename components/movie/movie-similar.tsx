import styles from '@/styles/movie-common-list.module.css';
import {getSimilar} from "@/service/movieService";
import {ISimilar} from "@/types/movie";
import MovieListCard from "@/components/movie/movie-list-card";

export default async function MovieSimilar({ id }: { id: string }) {
    const similar: ISimilar[] = await getSimilar(id);
    return (
        <div className={styles.container}>
            {similar?.map(item => {
                const checkMax = Math.floor(item.vote_average) > 5 ? 5 : Math.floor(item.vote_average);
                const vote_average = Array(checkMax).fill().map(()=> '⭐️');
                return (
                    <MovieListCard
                        keyId={item.id}
                        id={item.id}
                        title={item.title}
                        subTitle={item.release_date}
                        src={item.poster_path}
                        alt={item.title}
                    >
                        <p>
                            {vote_average.map(v => v)}
                        </p>
                    </MovieListCard>
                )
            })}
        </div>
    );
 };
