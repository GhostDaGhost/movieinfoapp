interface MovieSearchBox {
    value: string;
    onInput: Function;
    onKeypress: Function;
}

interface SearchMovieButton {
    isloading: boolean;
    onclick: Function;
}

interface MoviePosterAndName {
    poster: string;
    title: string;
    rated: string;
    year: string;
    runtime: string;
}

interface MoviePlot {
    plot: string;
}

interface MovieCast {
    cast: string;
}

interface MovieRatings {
    ratings: object[];
}

interface MovieGenre {
    genre: string[];
}

interface MovieWriters {
    writers: string;
}

interface MovieDirector {
    director: string;
}

interface MovieAwards {
    awards: string;
}

interface ErrorAlert {
    setErrorData: Function;
    message: string;
}

interface MovieBoxOffice {
    boxOffice: string;
}
