import React, {ReactNode, Suspense} from "react";
import MovieInfo from "@/components/movie/movie-info";
import {IParams} from "@/types/common";
import {IMovie} from "@/types/movie";
import {getMovie} from "@/service/movieService";
import MovieFilterCategory from "@/components/movie/movie-filter-category";

export async function generateMetadata({ params: {id} }: IParams) {
    const movie: IMovie = await getMovie(id);
    return {
        title: movie.title,
    }
}

export default function RootLayout({ children, params: {id} }: { children: ReactNode, params: IParams }) {
    return (
        <div>
            <Suspense fallback={<h1 className='center'>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <MovieFilterCategory id={id}/>
            {children}
        </div>
    )
}
