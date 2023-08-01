import { Center, Container, Divider } from "@mantine/core";
import { SearchForMovie } from "./controllers/apirequest";
import { useState } from "preact/hooks";
import './styles/App.scss';

import { Header } from "./components/Header";
import { MovieSearchBox } from "./components/MovieSearchBox";
import { SearchMovieButton } from "./components/SearchMovieButton";
import { MoviePosterAndName } from "./components/MoviePosterAndName";

import { MoviePlot } from "./components/MoviePlot";
import { MovieCast } from "./components/MovieCast";
import { MovieBoxOffice } from "./components/MovieBoxOffice";
import { MovieDirector } from "./components/MovieDirector";

import { MovieRatings } from "./components/MovieRatings";
import { MovieGenre } from "./components/MovieGenre";
import { MovieWriters } from "./components/MovieWriters";
import { MovieAwards } from "./components/MovieAwards";
import { ErrorAlert } from "./components/ErrorAlert";

export const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setLoadingState] = useState(false);

    const [movieData, setMovieData]: any = useState({});
    const [errorData, setErrorData]: any = useState({});

    // SHORTCUT MOVIE SEARCH FUNCTION
    const searchMovie = () => SearchForMovie(searchValue, setMovieData, setLoadingState, setErrorData);

    // RETURN ELEMENT
    return (
        <Center id="outercontainer">
            <Container id="innercontainer" mb={22} p={20} pt={10} pb={10}>
                {errorData?.message &&
                    <ErrorAlert setErrorData={setErrorData} message={errorData.message} />
                }

                <Header />
                <MovieSearchBox
                    value={searchValue}
                    onInput={setSearchValue}
                    onKeypress={searchMovie}
                />

                <SearchMovieButton
                    isloading={isLoading}
                    onclick={searchMovie}
                />

                {movieData?.title && (
                    <>
                        <Divider mt={30} mb={30} opacity="20%" />
                        <MoviePosterAndName
                            poster={movieData.poster}
                            title={movieData.title}
                            rated={movieData.rated}
                            year={movieData.year}
                            runtime={movieData.runtime}
                        />

                        <Divider mt={30} mb={18} opacity="20%" />
                        <MovieGenre genre={movieData.genre} />

                        <Divider mt={30} mb={18} opacity="20%" />
                        <MoviePlot plot={movieData.plot} />

                        <Divider mt={19} mb={18} opacity="20%" />
                        <MovieDirector director={movieData.director} />

                        <Divider mt={16} mb={18} opacity="20%" />
                        <MovieCast cast={movieData.actors} />

                        <Divider mt={16} mb={18} opacity="20%" />
                        <MovieWriters writers={movieData.writers} />

                        <Divider mt={16} mb={18} opacity="20%" />
                        <MovieRatings ratings={movieData.ratings}/>

                        <Divider mt={27} mb={18} opacity="20%" />
                        <MovieBoxOffice boxOffice={movieData.boxOffice} />

                        <Divider mt={16} mb={18} opacity="20%" />
                        <MovieAwards awards={movieData.awards} />
                    </>
                )}
            </Container>
        </Center>
    )
}
