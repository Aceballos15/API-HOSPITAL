# REST API example application

This is an example of a simple api using node js + express and postgreSql.

The entire application is built in javascript.


you will find computers and brands that you can create and consult

## Install requirements

    morgan Sequelize pg ph-store nodemon
   
## Create a database

    Create a database and configure your connection (database/connection.js)

## Run the app
    npm i 
    npm run dev


# REST API

The REST API to the example app is described below.

## Get list of Brands

### Request

`GET /Brands/`

   http://localhost:3000/Brands?page=0&size=10

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 2
    [{
      "id": 2,
      "BrandName": "Acer",
      "City": "New orelans",
      "createdAt": "2023-02-23T22:21:16.474Z",
      "updatedAt": "2023-02-23T22:21:16.474Z"
	  }]

## Create a new Brand

### Request

`POST /Brands/`

    http://localhost:3000/Brands/create

### Response

    HTTP/1.1 201 Created
    Date: 	Fri, 24 Feb 2023 00:51:50 GMT
    Status: 200 ok
    Connection: close
    Content-Type: application/json
    Content-Length: 121

    {
	    "id": 4,
	    "BrandName": "Asus",
	    "City": "French",
	    "updatedAt": "2023-02-23T22:28:11.687Z",
	    "createdAt": "2023-02-23T22:28:11.687Z"
   }

## Get a specific Brand

### Request

`GET /thing/id`

     http://localhost:3000/Brands/2

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 126

    {
      "id": 2,
      "BrandName": "Acer",
      "City": "New orelans",
      "createdAt": "2023-02-23T22:21:16.474Z",
      "updatedAt": "2023-02-23T22:21:16.474Z"
    }

## Update a Brand
### Request

`PUT /Brand/update/:id/`

    http://localhost:3000/Brands/update/1

### Response

    HTTP/1.1 200 OK
    Date: 	Fri, 24 Feb 2023 00:51:50 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 162

    	{
        "id": 2,
        "BrandName": "Acer",
        "City": "Los angeles",
        "createdAt": "2023-02-23T22:21:16.474Z",
        "updatedAt": "2023-02-24T01:00:55.908Z"
      }

## Delete a Brand

### Request

`DELETE /Brand/delete/:id`

    http://localhost:3000/Brands/delete/3

### Response

    HTTP/1.1 200Ok
    Date: 	Fri, 24 Feb 2023 00:51:50 GMT
    Status: 200
    
     {
      "message": "Delete Brand succesfully"
    }
    
## Get list of Computers

### Request

`GET /Computers/`

   http://localhost:3000/Computers?page=0&size=10

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 2
    [	{
      "id": 2,
      "CompName": "Acer Nitro 5",
      "model": "Acer INc.",
      "Year": 2023,
      "createdAt": "2023-02-23T23:46:22.704Z",
      "updatedAt": "2023-02-23T23:46:22.704Z",
      "Brand_id": 2
	  }]

## Create a new Computer

### Request

`POST /Computers/create`

    http://localhost:3000/computers/create

### Response

    HTTP/1.1 201 Created
    Date: 	Fri, 24 Feb 2023 00:51:50 GMT
    Status: 200 ok
    Connection: close
    Content-Type: application/json
    Content-Length: 150

    {
      "id": 19,
      "CompName": "Acer",
      "model": "Acer INc.",
      "Year": 2020,
      "Brand_id": 4,
      "updatedAt": "2023-02-24T01:02:53.242Z",
      "createdAt": "2023-02-24T01:02:53.242Z"
    }

## Get a specific Computer

### Request

`GET /Computers/id`

     http://localhost:3000/computers/2

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 126

    {
      "CompName": "Acer", 
      "model": "Acer INc.", 
      "Year": 2020, 
      "Brand_id": 4
    }

## Update a Computer
### Request

`PUT /Computers/update/:id/`

    http://localhost:3000/Computers/update/1

### Response

    HTTP/1.1 200 OK
    Date: 	Fri, 24 Feb 2023 00:51:50 GMT
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 171

    {
      "id": 15,
      "CompName": "Acer",
      "model": "Acer INc.",
      "Year": 2015,
      "createdAt": "2023-02-23T23:53:10.652Z",
      "updatedAt": "2023-02-24T01:05:33.113Z",
      "Brand_id": null
    }

## Delete a computer

### Request

`DELETE /computers/:id`

    http://localhost:3000/Computers/delete/3

### Response

    HTTP/1.1 200Ok
    Date: 	Fri, 24 Feb 2023 00:51:50 GMT
    Status: 200

    {
      "message": "Delete computer sucesfully"
    }


## Get list of Computers of a Brand 

### Request

`GET /Computers/Brand/:id`

   http://localhost:3000/Computers/Brand/2?offset=0&limit=10

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 2
    [	{
      "id": 12,
      "CompName": "Acer",
      "model": "Acer INc.",
      "Year": 2023,
      "createdAt": "2023-02-23T23:52:23.953Z",
      "updatedAt": "2023-02-23T23:52:23.953Z",
      "Brand_id": 2
    }]
