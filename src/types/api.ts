export interface GenericApiResult<T>{
    status:boolean,
    data:T
}

export interface Episode {
    number: number;
    title: string;
    poster: string;
}

export interface Series {
    id: number;
    title_fa: string;
    title_en: string;
    year: number;
    imdb: number;
    rotten: number;
    metacritic: number;
    user_rating: number;
    poster: string;
    episodes: Episode[];
}
export interface VideoData {
    video_url:string,
    subtitle:string
}
export interface Rating{
    success:boolean,
    new_rating:number
}