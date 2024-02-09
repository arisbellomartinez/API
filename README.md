API Documentation
Users
Get All Users

    Method: GET
    Endpoint: /tasks
    Description: Retrieves all users.
    Parameters: None
    Successful Response (200):

    json

[
    {
        "id": 1,
        "name": "Aris",
        "age": 25,
        "status": "Active"
    },
    {
        "id": 2,
        "name": "Bello",
        "age": 30,
        "status": "Inactive"
    },
    {
        "id": 3,
        "name": "Martinez",
        "age": 35,
        "status": "Active"
    }
]

Error Response (404):

json

    {
        "message": "No users found"
    }

Get User by ID

    Method: GET
    Endpoint: /tasks/:id
    Description: Retrieves a user by their ID.
    Parameters:
        id: ID of the user to retrieve.
    Successful Response (200):

    json

{
    "id": 1,
    "name": "Aris",
    "age": 25,
    "status": "Active"
}

Error Response (404):

json

    {
        "message": "User not found"
    }

Create New User

    Method: POST
    Endpoint: /tasks
    Description: Creates a new user.
    Request Body:

    json

{
    "name": "New User",
    "age": 40,
    "status": "Active"
}

Successful Response (200):

json

{
    "id": 4,
    "name": "New User",
    "age": 40,
    "status": "Active"
}

Error Response (400):

json

    {
        "message": "Error creating user"
    }

Update User by ID

    Method: PUT
    Endpoint: /tasks/:id
    Description: Updates an existing user by their ID.
    Parameters:
        id: ID of the user to update.
    Request Body:

    json

{
    "name": "Updated User",
    "age": 45,
    "status": "Inactive"
}

Successful Response (200):

json

{
    "message": "User updated successfully"
}

Error Response (404):

json

    {
        "message": "User not found"
    }

Delete User by ID

    Method: DELETE
    Endpoint: /tasks/:id
    Description: Deletes a user by their ID.
    Parameters:
        id: ID of the user to delete.
    Successful Response (204):

    json

{
    "message": "User deleted successfully"
}

Error Response (404):

json

    {
        "message": "User not found"
    }

Authentication
Sign In

    Method: POST
    Endpoint: /signin
    Description: Signs in a user.
    Request Body:

    json

{
    "username": "user_name",
    "password": "password"
}

Successful Response (200):

json

{
    "token": "jwt_token"
}

Error Response (401):

json

    {
        "message": "Invalid credentials"
    }

Sign Up

    Method: POST
    Endpoint: /signup
    Description: Signs up a new user.
    Request Body:

    json

{
    "username": "user_name",
    "password": "password"
}

Successful Response (200):

json

{
    "token": "jwt_token"
}

Error Response (400):

json

{
    "message": "Error signing up user"
}
