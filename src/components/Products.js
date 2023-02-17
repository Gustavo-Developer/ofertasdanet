import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme();

export default function Products() {
  const [data, setData] = useState([]);
  const url = "https://lime-alligator-boot.cyclic.app/";
  //const url = "http://localhost:3001";

  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

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
          pb: 4,
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
        <Grid>
          <Box
            sx={{
              bgcolor: "background.paper",
              pb: 6,
            }}
          >
            <TextField
              fullWidth
              label="Procure seu produto pelo código ou nome"
              id="fullWidth"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "24px",
                  height: "50px",
                },
                endAdornment: <IconButton></IconButton>,
              }}
            />
          </Box>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center !important",
          }}
        >
          {data
            .filter((product) =>
              product.title.toLowerCase().includes(lowerSearch)
            )
            .map((data) => (
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
                    image={data.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      Cód: {data.id.toString()}
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
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href={data.url}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Ver no Site
                      </a>
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
