import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Ofertas da Net
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",

          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "900px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <img
            src="./logo-sem-fundo.png"
            alt="Logo Ofertas da Net"
            style={{ width: "100px" }}
          />

          <Container maxWidth="sm">
            <Typography variant="body1">Ofertas da Net</Typography>
            <Copyright />
          </Container>
        </div>
      </Box>
    </Box>
  );
}
