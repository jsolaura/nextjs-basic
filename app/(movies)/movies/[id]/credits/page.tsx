import {IParams} from "@/types/common";
import MovieCredits from "@/components/movie/movie-credits";
import React, {Suspense} from "react";

export default function Page({ params: {id} }: IParams) {
    return (
        <Suspense fallback={<h1 className='center'>Loading movie credits</h1>}>
            <MovieCredits id={id} />
        </Suspense>
    );
 };
