import { Container, Grid, Image, Text, rem } from "@mantine/core";

export const MoviePosterAndName = (props: MoviePosterAndName) => {
    return (
        <Grid justify="space-around" mb={17}>
            <Grid.Col id="movieposter_container" span={3} style={{ minHeight: rem(80) }}>
                <Image id="movieposter" maw={240} mx="auto" src={props.poster} alt="movie poster" />
            </Grid.Col>

            <Grid.Col span={5} style={{ minHeight: rem(120) }}>
                <Container>
                    <Text id="movietitle" align="center" fz="xl" fw={700} color="white" mb={4}>{props.title}</Text>

                    <Text id="moviedetails" align="center" fz="md" color="gray">
                        {props.rated} | {props.year} | {props.runtime}
                    </Text>
                </Container>
            </Grid.Col>
        </Grid>
    )
}
