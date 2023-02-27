# REST API hospital application

## requirements

    express morgan Sequelize pg ph-store nodemon @hapi/boom bcrypt joi jsonwebtoken nodemailer pdfkit 
   
## Create a database

    Create a database and configure your connection (Database/Connection.js)

## Run the app 
    npm run start


# REST API
	Usuarios


## Crear un nuevo usuario

### Request

`POST /signup/`

   http://localhost:8000/Api/users/signup

### Body

    {
	"Identification": 10300, 
	"Email": "carlos@gmail.com",
	"Phone": 3108272293, 
	"Password": "carlos", 
	"Role": "P"
}

### Response

    {
	"Messsage": "New user created",
	"User": {
		"Verification": false,
		"Identification": 10300,
		"Email": "carlos@gmail.com",
		"Phone": "3108272293",
		"Password": "$2b$10$PgFxz0hnoeGXqtEQYEwDmeb72rOGTj5cKLq.KdkWHbnJ1pzOBGrrm",
		"Role": "P",
		"updatedAt": "2023-02-27T15:03:16.982Z",
		"createdAt": "2023-02-27T15:03:16.982Z"
	}
}

## Confirmar cuenta nueva 

### Request

`GET /confirm/`

   http:/localhost:8000/Api/users/confirm?Email=

### Response

    {
	"message": "Usuario verfificado"
     }

## Login 

### Request

`POST /login`

     http://localhost:8000/Api/users/login
     
### Body

    {
	"Identification": 10300, 
	"Password": "carlos"
}


### Response

    {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZGVudGlmaWNhdGlvbiI6MTAzMDAsImlhdCI6MTY3NzUxNTA0MywiZXhwIjoxNjc3NTE4NjQzfQ.wSgynkSrXKcv7WeuFj51hmXd0xaTjh-SzyabOXd5AuE"
}

# Pacientes 
## Completar perfil
### Request

`POST /register/`

    http://localhost:8000/Api/patients/register

### Body 
	{
		"Name": "Jaime", 
		"Adress": "La Ceja", 
		"Birthday": "2005-02-24", 
		"User_Identification": 10300
	}

### Response

    {
	"Message": "Patient created successfully",
	"Patient": {
		"Id": 5,
		"Name": "Jaime",
		"Adress": "La Ceja",
		"Birthday": "2005-02-24T00:00:00.000Z",
		"User_Identification": 10300,
		"updatedAt": "2023-02-27T15:46:03.209Z",
		"createdAt": "2023-02-27T15:46:03.209Z"
	}
}

## Obtener sus reportes 

### Request

`GET /reports/:patient`

    http://localhost:8000/Api/patients/reports/1040732036

### Response

    [
	{
		"Id": 2,
		"Observation": "Usuario con diabetes",
		"Speciality": "Cardiología",
		"HealthCondition": "Estable",
		"createdAt": "2023-02-26T19:17:36.036Z",
		"updatedAt": "2023-02-26T19:17:36.036Z",
		"Doctor_Id": 1,
		"Patient_Id": 1
	},
	{
		"Id": 3,
		"Observation": "Usuario con diabetes",
		"Speciality": "Cardiología",
		"HealthCondition": "Estable",
		"createdAt": "2023-02-26T19:19:09.062Z",
		"updatedAt": "2023-02-26T19:19:09.062Z",
		"Doctor_Id": 1,
		"Patient_Id": 1
	}
	]
    
# Hospital    
## Completar perfil 

### Request

`POST /register/`

   http://localhost:8000/Api/hospital/register
### Body 

	{
		"Name": "Somer 2.0", 
		"Adress": "Rionegro", 
		"MedicalServices": "Cardiologia", 
		"User_Identification": 10300
	}

### Response

	   {
		"Message": "Hospital created successfully",
		"Hospital": {
			"Id": 15,
			"Name": "Somer 2.0",
			"Adress": "Rionegro",
			"MedicalServices": "Cardiologia",
			"User_Identification": 10100,
			"updatedAt": "2023-02-26T23:13:30.896Z",
			"createdAt": "2023-02-26T23:13:30.896Z"
		}
	}

## Crear un Usuaruio tipo doctor 

### Request

`POST /register/doctor`

    http://localhost:8000/Api/hospital/register/doctor

### Body 

	{
		"Identification": 10200, 
		"Name": "Jose", 
		"Email": "jose@gmail.com",
		"Phone": 310524,
		"Password": "jose", 
		"Role": "D"
	}
### Response

    {
	"Message": "Doctor created successfully",
	"Doctor": {
		"Verification": false,
		"Identification": 10200,
		"Email": "jose@gmail.com",
		"Phone": "310524",
		"Password": "$2b$10$w1O2z/eZF1gRaT54X95ite2/CwMT0Fu78yuKETdof7FHoD6r1HZqS",
		"Role": "D",
		"updatedAt": "2023-02-27T14:43:41.901Z",
		"createdAt": "2023-02-27T14:43:41.901Z"
	}
}

## Descargar todos los reportes de un paciente 

### Request

`GET /reports/download/:patient`

     http://localhost:8000/Api/hospital/reports/download/1040732036

### Response

    Report.pdf

# Doctor 
## Completar perfil 
### Request

`POST /register`

    http://localhost:8000/Api/doctor/register
### Body 

	{
		"Name": "Alexander", 
		"Speciality": "Cirugia",  
		"User_Identification": 10200
	}
### Response

  {
	"Message": "Doctor profile created successfully",
	"Patient": {
		"Id": 3,
		"Name": "Alexander",
		"Speciality": "Cirugia",
		"User_Identification": 10200,
		"updatedAt": "2023-02-27T14:52:53.339Z",
		"createdAt": "2023-02-27T14:52:53.339Z"
	}
}

## Crear un reporte 

### Request

`POST /report/create`

    http://localhost:8000/Api/doctor/report/create
### Body 
	{
		"Observation": "Usuario con diabetes", 
		"HealthCondition" : "Estable", 
		"Speciality": "Cardiología", 
		"Doctor_Id": 10200, 
		"Patient_Id": 1040732036
	}

### Response

   {
	"message": "Report create sucesfully",
	"Report": {
		"Id": 10,
		"Observation": "Usuario con diabetes",
		"HealthCondition": "Estable",
		"Speciality": "Cardiología",
		"Doctor_Id": 3,
		"Patient_Id": 1,
		"updatedAt": "2023-02-27T15:02:21.661Z",
		"createdAt": "2023-02-27T15:02:21.661Z"
	}
}

## Actualizar reporte  

### Request

`PUT /report/update/:id`

   http://localhost:8000/Api/doctor/report/update/1

## Body 
	{
		"Observation": "Sufre de hipertension"
	}
### Response

    {
	"message": "Report Update sucesfully",
	"Report": {
		"Id": 1,
		"Observation": "Sufre de hipertension",
		"Speciality": "Cardiología",
		"HealthCondition": "Estable",
		"createdAt": "2023-02-26T19:17:10.943Z",
		"updatedAt": "2023-02-26T19:32:40.219Z",
		"Doctor_Id": 1,
		"Patient_Id": 1
	}
}

## Obtener los reportes de un medico  

### Request

`GET /reports/:doctor`

   http://localhost:8000/Api/doctor/reports/10200

## Body 
	{
		"Observation": "Sufre de hipertension"
	}
### Response

  {
	"Doctor": "Alexander",
	"Rep": [
		{
			"Id": 10,
			"Observation": "Usuario con diabetes",
			"Speciality": "Cardiología",
			"HealthCondition": "Estable",
			"createdAt": "2023-02-27T15:02:21.661Z",
			"updatedAt": "2023-02-27T15:02:21.661Z",
			"Doctor_Id": 3,
			"Patient_Id": 1
		}
	]
}
