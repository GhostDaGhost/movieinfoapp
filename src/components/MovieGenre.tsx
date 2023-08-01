import { Container, Title, Chip, Group } from "@mantine/core";

export const MovieGenre = (props: MovieGenre) => {
    const genreChips = props.genre.map((genre: string) => (
        <Chip class="moviegenre" variant="outline" color="yellow" disabled readonly>{genre}</Chip>
    ));

    // RETURN ELEMENT
    return (
        <Container id="moviegenre_container" mb={12}>
            <Title id="moviegenre_header" order={3} color="white" mb={20}>Genre:</Title>
            <Chip.Group>
                <Group position="left">
                    {genreChips}
                </Group>
            </Chip.Group>
        </Container>
    )
}
