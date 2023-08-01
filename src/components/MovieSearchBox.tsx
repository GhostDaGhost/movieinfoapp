import { Container, TextInput } from "@mantine/core"
import '../styles/MovieSearchBox.scss';

export const MovieSearchBox = (props: MovieSearchBox) => {
    const OnKeypress = (event: any) => {
        if (event && event.key === 'Enter') {
            event.preventDefault();
            props.onKeypress();
        }
    }

    // RETURN ELEMENT
    return (
        <Container id="searchbox_container" mt={20}>
            <TextInput
                id="searchbox"
                label="Enter movie name"
                placeholder="Enter movie name"
                value={props.value}
                onChange={(event: any) => props.onInput(event.currentTarget.value)}
                onKeypress={OnKeypress}
                aria-label="Enter movie name"
                withAsterisk
            />
        </Container>
    )
}
