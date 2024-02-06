import { Container, Grid, Hidden } from "@mui/material";
import styled from "styled-components";

import HomeWorkIcon from "@mui/icons-material/HomeWork";

const CardStyled = styled.div`
    background-color: #f2f2f2;
    color: #333;
    padding: 20px;
    margin: 8px;
`;

export function Perfil() {
    return (
        <div>
            <Container maxWidth="md" sx={{ backgroundColor: "#777", height: "100vh" }}>
                <Grid container>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>
                            <HomeWorkIcon />
                            <p>Item 3</p>
                        </CardStyled>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>Item 2</CardStyled>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>Item 2</CardStyled>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>Item 2</CardStyled>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>Item 2</CardStyled>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>Item 2</CardStyled>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <CardStyled>Item 2</CardStyled>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
