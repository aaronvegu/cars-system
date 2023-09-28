import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';

function CarEdit({ car, onSave, onCancel }) {
  const [editCar, setEditedCar] = useState(car);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCar({
      ...editCar,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSave = () => {
    // Create a FormData object to send image and other data to the backend
    const formData = new FormData();
    formData.append('image', selectedImage); // 'image' should match your backend's file field name
    formData.append('make', editCar.make);
    formData.append('model', editCar.model);
    formData.append('year', editCar.year);
    formData.append('price', editCar.price);

    onSave(formData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Editar
        </Typography>
        <input type='file' accept='image/*' onChange={handleImageChange} />
        <TextField
          name='make'
          label='Fabricante'
          value={editCar.make}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name='model'
          label='Modelo'
          value={editCar.model}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name='year'
          label='Año'
          value={editCar.year}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name='price'
          label='Precio'
          value={editCar.price}
          onChange={handleInputChange}
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button color='primary' onClick={handleSave}>
          Guardar
        </Button>
        <Button color='secondary' onClick={onCancel}>
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
}

export default CarEdit;
