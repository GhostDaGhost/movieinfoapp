import { Center, Button, Loader } from "@mantine/core";

export const SearchMovieButton = (props: SearchMovieButton) => {
    return (
        <Center id="searchmoviebutton_container" mt={20} mb={8}>
            <Button
                id="searchmoviebutton"
                variant="outline"
                color="yellow"
                aria-label="Search"
                onClick={props.onclick}
                sx={{ transition: '.1s' }}
            >
                Search
            </Button>

            {props.isloading && <Loader color="yellow" ml={30} />}
        </Center>
    )
}
