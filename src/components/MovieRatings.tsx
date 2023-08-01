import { Container, Title, Table } from "@mantine/core";
import '../styles/MovieRatings.scss';

export const MovieRatings = (props: MovieRatings) => {
    const ratings = props.ratings;

    // PREPARE ROWS FOR THE RATINGS TABLE WHEN RENDERED
    const ratingRows = ratings.map((element: any) => (
        <tr class="ratingrow" key={element.Source}>
            <td class="ratingdata">{element.Source}</td>
            <td class="ratingdata">{element.Value}</td>
        </tr>
    ));

    // RETURN ELEMENT
    return (
        <Container id="movieratings_container" mb={12}>
            <Title id="movieratings_header" order={3} color="white" mb={7}>Ratings:</Title>

            <Table id="movieratings_table" mt={17} withBorder withColumnBorders>
                <thead id="movieratings_tableheader">
                    <tr>
                        <th style={{ color: 'white' }}>Source</th>
                        <th style={{ color: 'white' }}>Rating</th>
                    </tr>
                </thead>

                <tbody id="movieratings_tablebody">{ratingRows}</tbody>
            </Table>
        </Container>
    )
}
