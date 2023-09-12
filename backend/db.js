const sqlite3 = require('sqlite3').verbose(); // Import the sqlite3 package

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('cars-system.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.serialize(() => {
  // Create the 'cars' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS cars (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        make TEXT,
        model TEXT,
        year INTEGER,
        price DECIMAL,
        description TEXT,
        imageURL TEXT,
        status TEXT
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Cars table created successfully.');
      }
    }
  );

  // Create the 'inventory' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS inventory (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        carId INTEGER,
        quantity INTEGER,
        location TEXT,
        lastUpdated DATETIME,
        FOREIGN KEY (carId) REFERENCES cars (_id)
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Inventory table created successfully.');
      }
    }
  );

  // Create the 'sales' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS sales (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        carId INTEGER,
        buyerId INTEGER,
        saleDate DATETIME,
        quantity INTEGER,
        totalPrice DECIMAL,
        paymentMethod TEXT,
        salespersonId INTEGER,
        FOREIGN KEY (carId) REFERENCES cars (_id),
        FOREIGN KEY (buyerId) REFERENCES clients (_id),
        FOREIGN KEY (salespersonId) REFERENCES users (_id)
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Sales table created successfully.');
      }
    }
  );

  // Create the 'invoices' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS invoices (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        saleId INTEGER,
        invoiceNumber TEXT,
        totalAmount DECIMAL,
        dueDate DATE,
        status TEXT,
        FOREIGN KEY (saleId) REFERENCES sales (_id)
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Invoices table created successfully.');
      }
    }
  );

  // Create the 'users' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS users (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        passwordHash TEXT,
        role TEXT,
        photoURL TEXT,
        status TEXT
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Users table created successfully.');
      }
    }
  );

  // Create the 'clients' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS clients (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        contactInfo TEXT,
        address TEXT,
        salesperson TEXT,
        photoURL TEXT,
        status TEXT,
        FOREIGN KEY (salesperson) REFERENCES users (username)
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Clients table created successfully.');
      }
    }
  );

  // Create the 'payments' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS payments (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        invoiceId INTEGER,
        paymentDate DATETIME,
        amount DECIMAL,
        FOREIGN KEY (invoiceId) REFERENCES invoices (_id)
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Payments table created successfully.');
      }
    }
  );

  // Create the 'comments' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS comments (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        relatedId INTEGER,
        comment TEXT,
        createdBy TEXT,
        createdAt DATETIME,
        FOREIGN KEY (createdBy) REFERENCES users (username)
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Comments table created successfully.');
      }
    }
  );

  // Create the 'images' table
  db.run(
    `
      CREATE TABLE IF NOT EXISTS images (
        _id INTEGER PRIMARY KEY AUTOINCREMENT,
        linkURL TEXT
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Images table created successfully.');
      }
    }
  );
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Closed the database connection.');
  }
});
