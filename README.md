# native_ecommerce_server
# Node.js Server

This is a Node.js server for a user login and product management system.

## Prerequisites

Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your system. If you don't have them installed, you can follow the instructions below:

### Installing Node.js

You can download and install Node.js from the official Node.js website: https://nodejs.org/

### Installing npm

npm (Node Package Manager) comes with Node.js by default. Once you have Node.js installed, you'll also have npm installed on your system.

## Endpoints

### User Sign In

- URL: `/user/signin`
- Method: `POST`
- Description: Sign in a user with their credentials.

### User Sign Up

- URL: `/user/signup`
- Method: `POST`
- Description: Sign up a new user with their credentials.

### Get All Products

- URL: `/product/get/all`
- Method: `GET`
- Description: Get all products from the database.

### Add Product

- URL: `/product/add`
- Method: `POST`
- Description: Add a new product to the database.

### Upload Image for Product

- URL: `/product/upload/image`
- Method: `POST`
- Description: Upload an image for a product.

## Installation

To install the dependencies for this Node.js server, you can run the following command in the project directory:


This will install all the necessary dependencies listed in the `package.json` file.

## .env Configuration

Create a `.env` file in the root of the project directory and add the following keys with their corresponding values:

MONGODB_URL=
JWT_SECRET=
PORT=
