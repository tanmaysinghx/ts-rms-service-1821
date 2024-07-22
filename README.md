# ts-rms-service-1821

## Overview

This project is an role management system service built using Node.js, Express, TypeScript and Prisma. It handles role crud and userRole crud.

## Prerequisites

- Node.js (v18.x or later)
- PostgreSQL (or another supported SQL database)
- Prisma CLI

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tanmaysinghx/ts-rms-service-1821.git
cd ts-rms-service-1821

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment Variables

- Rename ".env.example" to ".env"
- Create a DB cluster in mongo DB or your preferred DB

```bash
DATABASE_URL=your_database_connection_string
PORT=your_port_number

```

### 4. Run Database Migrations

```bash
npx prisma migrate deploy

```

### 5. Start the Application

```bash
npm run dev

```

## API Endpoints

### 1. Create Role

- Endpoint: POST /roles
- Request Body:

```bash
{
  "name": "SUPER_USER"
}


```

- Response Body:
  
```bash
{
    "id": "669e949fd758750b2a9d68b4",
    "name": "SUPER_USER"
}

```

### 2. Update Role

- Endpoint: PUT roles/:id

- Response Body:
  
```bash
{
    "id": "669e949fd758750b2a9d68b4",
    "name": "Super Admin"
}

```

### 3. Get Roles

- Endpoint: GET /roles

- Response Body:
  
```bash
[
    {
        "id": "669e90044f2fbc882be572f9",
        "name": "Test Role"
    },
    {
        "id": "669e949fd758750b2a9d68b4",
        "name": "Super Admin"
    }
]

```

### 4. Delete Roles

- Endpoint: DELETE /roles/:id

- Response Body:
- 
```bash
{
    "Role deletd succesfully"
}

```
