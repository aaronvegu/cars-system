import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CarList from './CarList';
import CarEdit from './CarEdit';

import axios from 'axios';

function CRUD() {
  const [cars, setCars] = useState([]); // Initialize with your cars data
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editCar, setEditCar] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
  });
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  // Define a function to fetch cars from the backend
  const fetchCars = () => {
    axios
      .get('http://localhost:3001/api/cars') // Adjust the URL to match your backend route
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  };

  useEffect(() => {
    // Fetch cars from the backend when the component mounts
    fetchCars();
  }, []);

  useEffect(() => {
    // Fetch cars from the backend when the component mounts
    axios
      .get('http://localhost:3001/api/cars') // Adjust the URL to match your backend route
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleEdit = (carId) => {
    const carToEdit = cars.find((car) => car.id === carId);
    setEditCar(carToEdit);
    setEditDialogOpen(true);
  };

  const handleDelete = (carId) => {
    const updatedCars = cars.filter((car) => car.id !== carId);
    setCars(updatedCars);
  };

  const handleAddNew = () => {
    setEditCar(null);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSaveCar = () => {
    // Create a FormData object to send image and other data to the backend
    const formData = new FormData();
    formData.append('image', selectedImage); // 'image' should match your backend's file field name
    formData.append('make', editCar.make);
    formData.append('model', editCar.model);
    formData.append('year', editCar.year);
    formData.append('price', editCar.price);

    // Send the FormData object to the backend
    axios
      .post('http://localhost:3001/api/cars/create', formData) // Adjust the URL to match your backend route
      .then((response) => {
        // Handle successful response (e.g., update state)
        // Close the dialog and reset state as needed
        setEditDialogOpen(false);
        setEditCar(null);
        setSelectedImage(null); // Clear the selected image
        fetchCars(); // Fetch updated car list
      })
      .catch((error) => {
        console.error('Error saving car:', error);
        // Handle errors as needed
      });
  };

  return (
    <Container>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleAddNew}
        startIcon={<AddIcon />}
      >
        Agregar Auto
      </Button>
      <CarList cars={cars} onEdit={handleEdit} onDelete={handleDelete} />
      <Dialog
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>{editCar ? 'Editar' : 'Agregar nuevo auto'}</DialogTitle>
        <DialogContent>
          <CarEdit
            car={editCar || {}}
            onSave={handleSaveCar}
            onCancel={handleEditDialogClose}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default CRUD;
