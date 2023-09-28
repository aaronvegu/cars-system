const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Create a storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination directory where uploaded images will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Define the filename for the uploaded image
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Sample cars data (replace with a database)
let cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2022, price: 22000 },
  // ... other cars
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Get all cars
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Get a specific car by ID
app.get('/api/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id);
  const car = cars.find((c) => c.id === carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

// Endpoint for creating a new car with an image upload
app.post('/api/cars/create', upload.single('image'), (req, res) => {
  try {
    // Access the uploaded image using req.file
    const { make, model, year, price } = req.body;
    const imagePath = req.file.path; // The path to the uploaded image

    // Create a new car object
    const newCar = {
      id: Date.now(), // Generate a unique ID (replace with your preferred ID generation)
      make,
      model,
      year,
      price,
      image: imagePath, // Store the image path
    };

    // Save the new car to your data store (e.g., database)
    cars.push(newCar);

    // Respond with the newly created car
    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error creating car:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update an existing car by ID
app.put('/api/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id);
  const updatedCar = req.body; // Assuming the request body contains updated car data
  const carIndex = cars.findIndex((c) => c.id === carId);
  if (carIndex !== -1) {
    cars[carIndex] = { ...cars[carIndex], ...updatedCar };
    res.json(cars[carIndex]);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

// Delete a car by ID
app.delete('/api/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id);
  const carIndex = cars.findIndex((c) => c.id === carId);
  if (carIndex !== -1) {
    cars.splice(carIndex, 1);
    res.status(204).send(); // No content
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});
