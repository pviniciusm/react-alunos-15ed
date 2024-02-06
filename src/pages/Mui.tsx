import { Button, Card, CardActions, CardContent, CardMedia, styled } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const ButtonStyled = styled(Button)(() => ({
    backgroundColor: "red",
    color: "white",
}));

export function Mui() {
    return (
        <div>
            <p>Perfil page</p>

            <div>
                <h1>Buttons</h1>
                <ButtonStyled variant="text">Clique aqui!</ButtonStyled>
                <Button variant="contained">Clique aqui!</Button>
                <Button variant="outlined">Clique aqui!</Button>
            </div>

            <div>
                <h1>Accordion</h1>

                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Daphne!</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel2-content" id="panel2-header">
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                            amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <h1>Card</h1>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                            all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
