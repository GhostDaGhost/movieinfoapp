import { Container, Title, Text } from "@mantine/core";

export const MoviePlot = (props: MoviePlot) => {
    return (
        <Container id="movieplot_container" mb={12}>
            <Title id="movieplot_header" order={3} color="white" mb={7}>Plot:</Title>
            <Text id="movieplot" color="gray">{props.plot}</Text>
        </Container>
    )
}
