import { Container, Title } from "@mantine/core"
import '../styles/Header.scss';

export const Header = () => {
    return (
        <Container id="headertext_container">
            <Title order={2} color="white" align="center">Movie Info</Title>
            <Title order={5} color="gray" align="center">Created by Alexander Arizola</Title>
        </Container>
    )
}
