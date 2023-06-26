interface IMovieExternalId {
  imdb: string;
}
export interface IMovieProperties {
  docs: IMovie | undefined;
}
export interface IMoviePoster {
  url: string;
  previewUrl: string;
}

export interface IFact {
  hasSpoiler: boolean;
  type: string;
  value: string;
}

interface IMovieLogo {
  url: string;
}

interface IMovieBackdrop {
  url: string;
}

interface IMovieVotes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IMovieTrailer {
  url: string;
  name: string;
  site: string;
  embedUrl?: string;
}

export interface IMovieVideos {
  trailers: IMovieTrailer[];
  teasers: string[];
}

export interface IMovieRating {
  _id: string;
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface IMovieBudget {
  value: number;
  currency: string;
}

interface IMovieFees {
  usa: { value: number };
  world: { value: number };
}

interface IMoviePremiere {
  country: string;
  world: string;
}

interface IMovieCountry {
  name?: string;
}

export interface IMovieGenre {
  name: string;
}

interface IMovieName {
  name: string;
}

interface IMovieSeasonsInfo {
  number: number;
  episodesCount: number;
}

interface IMovieTechnology {
  hasImax: boolean;
  has3D: boolean;
}

interface IMovieImagesInfo {
  framesCount: number;
}

export interface IMoviePerson {
  id: number;
  name: string;
  enName: string;
  description: string;
  enProfession:
    | 'director'
    | 'actor'
    | 'design'
    | 'producer'
    | 'composer'
    | 'editor';
  photo: string;
}

export interface IMovieSimilar {
  alternativeName: string;
  enName: string;
  id: number;
  name: string;
  poster: IMoviePoster;
}

export interface IMovie {
  externalId?: IMovieExternalId;
  logo?: IMovieLogo;
  poster?: IMoviePoster;
  backdrop?: IMovieBackdrop;
  rating?: IMovieRating;
  votes?: IMovieVotes;
  videos?: IMovieVideos;
  budget?: IMovieBudget;
  fees?: IMovieFees;
  premiere?: IMoviePremiere;
  collections?: string[];
  updateDates?: string[];
  id?: number;
  alternativeName?: string;
  countries?: IMovieCountry[];
  createdAt?: Date;
  description?: string;
  enName?: string;
  facts?: IFact[];
  genres?: IMovieGenre[];
  movieLength?: number;
  name?: string;
  names?: IMovieName[];
  persons?: IMoviePerson[];
  productionCompanies?: string[];
  ratingMpaa?: string;
  seasonsInfo?: IMovieSeasonsInfo[];
  sequelsAndPrequels?: IMovie[];
  shortDescription?: string;
  similarMovies?: IMovieSimilar[];
  isGeneral?: boolean;
  slogan?: string;
  spokenLanguages?: string[];
  technology?: IMovieTechnology;
  isTicketsOnSale?: boolean;
  type?: string;
  typeNumber?: number;
  updatedAt?: Date;
  year?: number;
  imagesInfo?: IMovieImagesInfo;
  ageRating?: number;
  lists?: string[];
  createDate?: Date;
}
