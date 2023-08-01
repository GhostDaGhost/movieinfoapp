import { Container, Title, Text } from "@mantine/core";

export const MovieDirector = (props: MovieDirector) => {
    return (
        <Container id="moviedirector_container" mb={12}>
            <Title id="moviedirector_header" order={3} color="white" mb={7}>Director:</Title>
            <Text id="moviedirector" color="gray">{props.director}</Text>
        </Container>
    )
}
