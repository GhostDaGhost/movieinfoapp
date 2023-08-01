import { Container, Title, Text } from "@mantine/core";

export const MovieAwards = (props: MovieAwards) => {
    return (
        <Container id="movieawards_container" mb={12}>
            <Title id="movieawards_header" order={3} color="white" mb={7}>Awards:</Title>
            <Text id="movieawards" color="gray">{props.awards}</Text>
        </Container>
    )
}
