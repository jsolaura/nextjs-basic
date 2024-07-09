import MovieInfo from "@/components/movie/movie-info";
import MovieVideos from "@/components/movie/movie-videos";
import React, { Suspense } from "react";
import {getMovie} from "@/service/movieService";
import {IMovie} from "@/types/movie";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({ params: {id} }: IParams) {
    const movie: IMovie = await getMovie(id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({ params: {id} }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
 };
