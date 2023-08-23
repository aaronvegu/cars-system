import React from 'react';

function Listing() {
  const carData = [
    { make: 'Toyota', model: 'Camry', year: 2022 },
    { make: 'Honda', model: 'Civic', year: 2021 },
    { make: 'Ford', model: 'Mustang', year: 2023 },
    // Add more car data
  ];

  return (
    <div>
      <h1>Car Listings</h1>
      <ul>
        {carData.map((car, index) => (
          <li key={index}>{`${car.make} ${car.model} (${car.year})`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listing;
