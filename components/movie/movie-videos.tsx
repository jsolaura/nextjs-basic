import styles from '@/styles/movie-videos.module.css';
import {getVideos} from "@/service/movieService";
import {IVideo} from "@/types/movie";

export default async function MovieVideos({ id }: { id: string }) {
    const videos: IVideo[] = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map(video => (
                <iframe
                    key={video.id}
                    title={video.name}
                    src={`https://youtube.com/embed/${video.key}`}
                />
            ))}
        </div>
    );
 };
