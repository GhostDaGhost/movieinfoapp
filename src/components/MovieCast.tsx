import { Container, Title, Text } from "@mantine/core";

export const MovieCast = (props: MovieCast) => {
    return (
        <Container id="moviecast_container" mb={12}>
            <Title id="moviecast_header" order={3} color="white" mb={7}>Cast:</Title>
            <Text id="moviecast" color="gray">{props.cast}</Text>
        </Container>
    )
}
