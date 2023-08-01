import { Container, Title, Text } from "@mantine/core";

export const MovieBoxOffice = (props: MovieBoxOffice) => {
    return (
        <Container id="movieboxoffice_container" mb={15}>
            <Title id="movieboxoffice_header" order={3} color="white" mb={7}>Box Office:</Title>
            <Text id="movieboxoffice" color="gray">{props.boxOffice}</Text>
        </Container>
    )
}
