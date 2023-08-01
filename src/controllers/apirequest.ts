import axios from "axios";

// API KEY
const apiKey: string = 'aa4e7da5';

/**
    * A function that is triggered when the user begins a search of a movie to receive information about.
    * @param searchValue `string` - The title of the movie to query for.
    * @param setMovieData `Function` - The function to update the movie data state.
    * @param setLoadingState `Function` - The function to enable or disable the loading spinner from displaying during API request wait.
    * @param setErrorData `Function` - The function to trigger an error alert, should an error occur.
    * @returns `void` - This returns nothing.
*/
export const SearchForMovie = async (searchValue: string, setMovieData: Function, setLoadingState: Function, setErrorData: Function) => {
    setErrorData({}); // RESET ERROR ALERT STATE
    setMovieData({}); // RESET MOVIE DATA STATE

    // SEARCH VALUE CHECK
    if (!searchValue || searchValue === '') {
        setErrorData({ message: 'You need to enter a title!' });
        return;
    }

    // ENABLE LOAD SPINNER
    setLoadingState(true);

    // GET MOVIE DATA THROUGH API REQUEST
    await axios.get(`https://www.omdbapi.com/?t=${searchValue}&apikey=${apiKey}`).then(response => {
        //console.log(response);

        // CHECK RESPONSE FOR SUCCESS OR ERROR
        const returnData = response.data;
        if (returnData.Response === 'True') {
            setMovieData({
                title: returnData.Title,
                poster: returnData.Poster,
                actors: returnData.Actors,
                awards: returnData.Awards,
                director: returnData.Director,
                rated: returnData.Rated,
                ratings: returnData.Ratings,
                year: returnData.Year,
                runtime: returnData.Runtime,
                plot: returnData.Plot,
                genre: returnData.Genre ? returnData.Genre.split(", ") : '',
                writers: returnData.Writer,
                boxOffice: returnData.BoxOffice
            });
        } else {
            setErrorData({ message: returnData.Error });
        }
    }).catch(_error => {
        //console.log(error);
        setErrorData({ message: 'Unknown API Error!' });
    });

    // DISABLE LOAD SPINNER
    setLoadingState(false);
}
