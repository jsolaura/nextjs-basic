import {MovieType} from "../../types/Movie";
import Link from "next/link";

export const metadata = {
    title: 'Home',
}

async function getMovies() {
    // await new Promise((resolve => setTimeout(resolve, 1000)));
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
    return await response.json();
}
export default async function Home() {
    const movies: MovieType[] = await getMovies();
    return (
        <div>
            Home! <br/>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>

            ))}
        </div>
    )
}