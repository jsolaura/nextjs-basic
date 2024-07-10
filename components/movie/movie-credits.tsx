import styles from '@/styles/movie-common-list.module.css';
import {getCredits} from "@/service/movieService";
import {ICredit} from "@/types/movie";
import MovieListCard from "@/components/movie/movie-list-card";

export default async function MovieCredits({ id }: { id: string }) {
    const credits: ICredit[] = await getCredits(id);
    return (
        <div className={styles.container}>
            {credits?.map(credit => (
                <MovieListCard
                    keyId={credit.id}
                    id={credit.id}
                    title={credit.character}
                    subTitle={credit.name}
                    src={credit.profile_path}
                />
            ))}
        </div>
    );
 };
