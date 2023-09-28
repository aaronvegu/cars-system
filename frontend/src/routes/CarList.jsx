import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

function CarList({ cars, onEdit, onDelete }) {
  return (
    <Grid container spacing={2}>
      {cars.map((car) => (
        <Grid item key={car.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                {car.make} {car.model}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Año: {car.year}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Precio: ${car.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                color='primary'
                onClick={() => onEdit(car.id)}
              >
                Editar
              </Button>
              <Button
                size='small'
                color='secondary'
                onClick={() => onDelete(car.id)}
              >
                Eliminar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CarList;
