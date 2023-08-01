import { Container, Title, Text } from "@mantine/core";

export const MovieWriters = (props: MovieWriters) => {
    return (
        <Container id="moviewriters_container" mb={12}>
            <Title id="moviewriters_header" order={3} color="white" mb={7}>Writers:</Title>
            <Text id="moviewriters" color="gray">{props.writers}</Text>
        </Container>
    )
}
