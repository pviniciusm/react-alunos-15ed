import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material";
import { useState } from "react";

function Content() {
    return (
        <>
            <h1>Recomendações</h1>
            <Grid container>
                <Grid xs={3}>
                    <p>Teste</p>
                </Grid>
                <Grid xs={3}>
                    <p>Teste</p>
                </Grid>
                <Grid xs={3}>
                    <p>Teste</p>
                </Grid>
                <Grid xs={3}>
                    <p>Teste</p>
                </Grid>
                <Grid xs={3}>
                    <p>Teste</p>
                </Grid>
            </Grid>
        </>
    );
}

export function NovoPerfil() {
    const [rec, setRec] = useState<any[]>([]);

    return (
        <Box display={"flex"} flexDirection={"column"} height={"100%"}>
            <AppBar position="relative">
                <Toolbar>
                    <p>Home</p>
                </Toolbar>
            </AppBar>
            <Container sx={{ flex: 1 }}>
                <Content />
            </Container>
        </Box>
    );
}
