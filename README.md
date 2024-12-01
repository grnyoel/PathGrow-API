# PathGrow API

Back-End Development for PathGrow Application

## Table of Contents
- [Installation](#installation)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Technologies](#technologies)
- [Author](#author)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (or your preferred database)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/grnyoel/PathGrow-API.git

2. Navigate to the project directory::
    ```bash
    cd PathGrow-API

3. Install the dependencies:
    ```bash
    npm install

4. Set up environment variables:
   - Rename the .env.example file to .env
   - Update the .env file with your database configuration and other secrets.

5. Start the development server:
    ```bash
    npm run dev

The API will be running on http://localhost:5000 (or the port specified in your .env file).

## Endpoints

### Authentication

- #### POST `auth/register`

  Registers new user.

  #### Request body:

  ```json
  {
  "username": "exampleGerent",
  "email": "gerent@example.com",
  "password": "password123"
  }
  ```
  #### Response:
  ```json
  {
  "message": "User registered successfully",
  "user": { "id": 1, "username": "exampleGerent", "email": "gerent@example.com" }
  }
  ```
- #### POST `auth/login`

  Logs in an existing user and return a JWT Token

  #### Request body:
  ```json
  {
  "email": "gerent@example.com",
  "password": "password123"
  }
  ```
  #### Response:
  ```json
  {
  "token": "your-jwt-token"
  }
  ```

### Users

- #### GET`users/me`

  Retrieves the current logged-in user's profile information.

  #### Headers:
  ```bash
  Authorization: Bearer <your-token>
  ```
  #### Response:
  ```json
  {
    "id": 1,
    "username": "exampleGerent",
    "email": "gerent@example.com"
  }
  ```
- #### PUT `users/update`

  Updates the current logged-in user's profile information.

  #### Headers:
  ```bash
  Authorization: Bearer <your-token>
  ```
  #### Request body:
  ```json
  {
    "username": "newUsername",
    "email": "newEmail@example.com"
  }
  ```

  #### Response:
  ```json
  {
  "message": "User updated successfully",
  "user": { "id": 1, "username": "newUsername", "email": "newEmail@example.com" }
  }
  ```

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. After logging in, a token will be returned, which should be included in the Authorization header of all protected routes.

Example:
  ```bash
  Authorization: Bearer <your-token>
  ```

## Technologies 💻
- Node.js
- Express.js
- PostgreSQL (or another database of choice)
- JWT for authentication
- dotenv for environment variables
- bcryptjs for password hashing

## Author 🧑‍💻

[Gerent Yoel Mamahani](https://github.com/grnyoel)