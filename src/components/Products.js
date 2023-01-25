import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme();

export default function Products() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001";

  async function CarregaDados() {
    await axios
      .get(url + "/products")
      .then((response) => setData(response.data));
  }

  useEffect(() => {
    CarregaDados();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Promoções Incríveis
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Ofertas e Achadinhos Shopee 🧡 ❤
            <br />
            Encontre seu produto pelo código
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center !important",
          }}
        >
          {data.map((data) => (
            <Grid
              item
              key={data.id}
              xs={6}
              sm={6}
              md={4}
              sx={{ marginBottom: "20px" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    padding: "20px",
                  }}
                  image={data.url}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Cód: {data.id}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="subtitle2"
                  >
                    {data.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "#E64B2C", width: "100%" }}
                  >
                    Ver no Site
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
