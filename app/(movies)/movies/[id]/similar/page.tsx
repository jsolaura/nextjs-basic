import MovieSimilar from "@/components/movie/movie-similar";
import {IParams} from "@/types/common";
import React, {Suspense} from "react";

export default function Page({ params: {id} }: IParams) {
    return (
        <Suspense fallback={<h1 className='center'>Loading movie similar</h1>}>
            <MovieSimilar id={id} />
        </Suspense>
    );
 };
