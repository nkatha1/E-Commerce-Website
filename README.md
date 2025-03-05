# E-Commerce Backend API

Welcome to the **E-Commerce Backend API**! This is a backend service for an e-commerce website that allows you to manage products and interact with a MongoDB database. Built with **Node.js**, **Express**, and **MongoDB**, this project is designed to help you manage and store product data for an e-commerce platform.

---

## 🚀 Features

- **MongoDB Integration**: Stores product data in a MongoDB database.
- **RESTful API**: Simple and intuitive API routes to interact with the application.
- **Add Products**: Easily add products to the database.
- **View Products**: Fetch all products stored in the database.
- **Error Handling**: Proper error messages for bad requests or server issues.
  
---

## 🔧 Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing product information.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Postman**: For testing the API endpoints.
- **dotenv**: For managing environment variables securely.

---

## 🛠️ Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (for MongoDB URI)

### Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/e-commerce-backend.git
cd e-commerce-backend
Install Dependencies
Navigate to the project directory and install the required dependencies:

bash
Copy
npm install
Set Up MongoDB URI
Create a .env file in the root of the project and add your MongoDB URI as follows:
plaintext
Copy
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
Replace <username> and <password> with your MongoDB Atlas credentials.

Start the Server
Once everything is set up, start the server using:

bash
Copy
npm start
The server will run on http://localhost:5000 by default.

📱 API Endpoints
1. Add Product
URL: /add-product

Method: POST

Body (JSON):

json
Copy
{
  "name": "Product Name",
  "price": 100
}
Response:

json
Copy
{
  "message": "Product added successfully",
  "product": {
    "_id": "some-id",
    "name": "Product Name",
    "price": 100
  }
}
2. Get All Products
URL: /products

Method: GET

Response:

json
Copy
[
  {
    "_id": "some-id",
    "name": "Product 1",
    "price": 100
  },
  {
    "_id": "another-id",
    "name": "Product 2",
    "price": 150
  }
]
3. Test Server
URL: /test

Method: GET

Response:

json
Copy
{
  "message": "MongoDB is connected and the server is running!"
}
🔒 Environment Variables
This project uses environment variables to securely store sensitive information.

MONGO_URI: Your MongoDB Atlas connection URI.
Make sure to add the .env file in the root directory with the proper MongoDB URI.

🧑‍💻 Contributing
If you’d like to contribute to the project, feel free to fork this repository and submit a pull request. Here's how to get started:

Fork the repository.
Clone your fork to your local machine.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push your branch (git push origin feature/your-feature).
Create a new pull request.
🌍 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Contact
