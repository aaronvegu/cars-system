import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import Copyright from './Copyright';

const footers = [
  {
    title: 'Sobre nosotros',
    description: ['El Equipo', 'Historia', 'Contacto', 'Sucursales'],
  },
  {
    title: 'Recursos',
    description: [
      'Bolsa de Trabajo',
      'Politica de Privacidad',
      'Uso de tus datos personales',
    ],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            Agencia de Autos
          </Typography>
          <nav>
            <Link
              variant='button'
              color='text.primary'
              href='catalogo'
              sx={{ my: 1, mx: 1.5 }}
            >
              Autos
            </Link>
          </nav>
          <Button href='ingresar' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
            Ingresar
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            Elige más que un auto
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            paragraph
          >
            Porque tu automovil es más que una herramienta, es una extensión de
            tu día a día. Toma la decisión correcta con toda la información que
            necesitas, en la pantalla de tu celular.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Button variant='contained'>Quiero más info</Button>
            <Button href='catalogo' variant='outlined'>
              Ver Catálogo
            </Button>
          </Stack>
        </Container>
      </Box>
      {/* Footer */}
      <Container
        maxWidth='md'
        component='footer'
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent='space-evenly'>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href='#' variant='subtitle1' color='text.secondary'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}
