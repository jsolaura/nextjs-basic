import MovieVideos from "@/components/movie/movie-videos";
import React, { Suspense } from "react";
import {IParams} from "@/types/common";

export default async function MovieDetail({ params: {id} }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1 className='center'>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
 };
