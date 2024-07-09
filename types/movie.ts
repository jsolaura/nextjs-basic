interface IGenre {
    id: number;
    name: string;
}
interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}
interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}
export interface IMovie {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    adult: boolean,
    backdrop_path: string;
    popularity: number;
    release_date: string;
    homepage?: string;

    genre_ids?: number[],
    belongs_to_collection?: null;
    budget?: number;
    genres?: IGenre[];
    imdb_id?: string;
    origin_country?: string[];
    production_companies?: IProductionCompany[];
    production_countries?: IProductionCountry[];
    revenue?: number;
    runtime?: number;
    spoken_languages?: ISpokenLanguage[];
    status?: string;
    tagline?: string;
}
export interface IVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: true,
    published_at: string;
    id: string;
}
