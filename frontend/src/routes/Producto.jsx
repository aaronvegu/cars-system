import React from 'react';
import { useParams } from 'react-router-dom'; // for dynamic product IDs
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Container, Typography, Card } from '@mui/material';

const defaultTheme = createTheme();

function Producto() {
  // Use React Router's useParams to get the product ID from the URL
  const { productId } = useParams();

  // You can fetch product details from your backend API based on the productId

  // For this example, we'll create dummy product data
  const product = {
    id: productId,
    name: 'Mazda 3',
    description:
      'Primer modelo que adopta una version evolucionada del diseño KODO e incorpora una expresión dinámica.',
    price: '$374,900.00',
    imageURL:
      'https://www.mazda.mx/siteassets/mazda-mx/mycos-2023/mazda3-sedan/vlp/versiones/mazda-3-sedan-2023-vlp-versiones-i-sport-mhev-v2.png',
  };

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
          <Button href='ingresar' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
            Ingresar
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md' sx={{ paddingTop: 4 }}>
        <Card elevation={3}>
          <CardMedia
            component='img'
            alt={product.name}
            height='600'
            image={product.imageURL}
            title={product.name}
          />
          <CardContent>
            <Typography variant='h4' component='div' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {product.description}
            </Typography>
            <Typography variant='h6' color='primary'>
              Desde: {product.price}
            </Typography>
            {/* Add more product details as needed */}
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default Producto;
