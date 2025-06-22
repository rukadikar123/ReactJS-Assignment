# ReactJS Assignment Backend

This is the backend for the ReactJS Assignment project. It provides RESTful APIs for managing items with image uploads using Cloudinary and file handling with Multer.


## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (file uploads)
- Cloudinary (image hosting)
- dotenv (environment variables)
- CORS

---

## API Endpoints

### 1. Add Item

- **URL:** `/api/item/add`
- **Method:** `POST`
- **Description:** Add a new item with a cover image and up to 5 additional images.
- **Request Type:** `multipart/form-data`
- **Body Parameters:**
  - `name` (string, required)
  - `description` (string, required)
  - `type` (string, required; one of: "Shirt", "Pant", "Shoes", "Sports Gear", "Other")
  - `coverImage` (file, required)
  - `additionalImages` (file[], optional, max 5)
- **Success Response:**
  ```json
  {
    "success": true,
    "message": "Item added successfully",
    "item": { ... }
  }
  ```

  ### 2. Get All Items

- **URL:** `/api/item/all`
- **Method:** `GET`
- **Description:** Retrieve all items.
- **Success Response:**
  ```json
  {
    "success": true,
    "message": "All items retrieved",
    "items": [
      {
        "_id": "string",
        "name": "string",
        "description": "string",
        "type": "string",
        "coverImage": "string",
        "additionalImages": ["string"],
        "createdAt": "string",
        "updatedAt": "string"
      }
      // ...more items
    ]
  }
  ```