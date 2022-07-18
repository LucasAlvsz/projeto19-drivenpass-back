<p align="center">
  <img  src="https://i.ibb.co/tBC6CgV/2525754.png"
    width="200px" height="200px" >
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Drivenpass simulates a password manager. You can create an account and save your website passwords, card data etc.

</br>

## Features

-   Create an account
-   Save credentials
-   Save private notes
-   Save card data
-   Save data from a WiFi network

</br>

## API Reference

#### SignUp

```http
POST /signup
```

#### Request:

| Body              | Type     | Description                    |
| :---------------- | :------- | :----------------------------- |
| `name`            | `string` | **Required**. user full name   |
| `email`           | `string` | **Required**. valid email      |
| `password`        | `string` | **Required**. password         |
| `confirmPassword` | `string` | **Required**. confirm password |

`Password min length: "10"`

#

### SignIn

```http
POST /signin
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

</br>

#### Response:

```json
{
	"token": "jsonwebtoken"
}
```

<br/>

# Credentials

#### Create a new credential

```http
POST /credential
```

#### Request:

| Body       | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `url`      | `string` | **Required**. valid url                 |
| `username` | `string` | **Required**. user name                 |
| `title`    | `string` | **Required**. identifier for credential |
| `password` | `string` | **Required**. password                  |

</br>

#### Response:

```json
{
	"id": 4,
	"title": "bumpy-hexagon.net",
	"url": "https://alienated-pregnancy.name",
	"username": "MissWilbertWilliamson83",
	"password": "8B0fdl1YHxyBWda",
	"createdAt": "2022-07-18T07:18:05.209Z"
}
```

#

#### Get all credentials associated with the user

```http
GET /credential
```

#### Response:

```json
[
	{
		"id": 4,
		"title": "bumpy-hexagon.net",
		"url": "https://alienated-pregnancy.name",
		"username": "MissWilbertWilliamson83",
		"password": "8B0fdl1YHxyBWda",
		"createdAt": "2022-07-18T07:18:05.209Z"
	},
	{
		"id": 3,
		"title": "outrageous-counterterrorism.net",
		"url": "http://bad-recollection.br",
		"username": "EdSchultz.Martins",
		"password": "n16LwCO1vjhB_3A",
		"createdAt": "2022-07-17T16:42:17.806Z"
	}
]
```

#

#### Get a credential by identifier

```http
GET /credential/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 4,
	"title": "bumpy-hexagon.net",
	"url": "https://alienated-pregnancy.name",
	"username": "MissWilbertWilliamson83",
	"password": "8B0fdl1YHxyBWda",
	"createdAt": "2022-07-18T07:18:05.209Z"
}
```

#

#### Delete a credential by identifier

```http
DELETE /credential/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Notes

# Create a new note

```http
POST /note
```

#### Request:

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. Identifier for note |
| `content` | `string` | **Required**. Note content        |

`Title max length: 50`

`Content max length: 1000`

</br>

#### Response:

```json
{
	"id": 4,
	"title": "dolores officia perspiciatis",
	"content": "Neque dicta ut nulla. Rem reiciendis expedita dolores doloremque molestiae eos. Et molestias et repellendus expedita vel occaecati qui quia. Animi et qui ullam alias id. Quas voluptatem ut. Quisquam est in aliquam atque possimus enim voluptates culpa.",
	"createdAt": "2022-07-18T07:18:16.322Z"
}
```

#

### Get all notes associated with the user

```http
GET /note
```

#### Response:

```json
[
	{
		"id": 3,
		"title": "labore et ea",
		"content": "Dignissimos architecto eos. Rerum quos consequatur vel doloremque consequatur. Velit voluptates qui voluptatum eum officiis illo dolorum consequatur. Cupiditate aut illo nobis. Explicabo officiis fuga.",
		"createdAt": "2022-07-17T18:27:40.732Z"
	},
	{
		"id": 4,
		"title": "inventore dolorem id",
		"content": "Rerum aut aut accusantium qui quis non. Dolores culpa voluptate iure exercitationem hic. Voluptatem et amet ipsum et ut qui id aliquid.",
		"createdAt": "2022-07-17T18:28:08.076Z"
	}
]
```

#

### Get a note by identifier

```http
GET /note/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 4,
	"title": "inventore dolorem id",
	"content": "Rerum aut aut accusantium qui quis non. Dolores culpa voluptate iure exercitationem hic. Voluptatem et amet ipsum et ut qui id aliquid.",
	"createdAt": "2022-07-17T18:28:08.076Z"
}
```

#

### Delete a note by identifier

```http
DELETE /note/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Cards

# Create a new card

```http
POST /card
```

#### Request:

| Body         | Type      | Description                        |
| :----------- | :-------- | :--------------------------------- |
| `title`      | `string`  | **Required**. identifier for card  |
| `number`     | `string`  | **Required**. card number          |
| `holderName` | `string`  | **Required**. card holder name     |
| `pass`       | `string`  | **Required**. card password        |
| `cvv`        | `string`  | **Required**. card cvv             |
| `expiryDate` | `string`  | **Required**. card expiration date |
| `isVirtual`  | `boolean` | **Required**. card number          |
| `type`       | `string`  | **Required**. card type            |

`Date format: MM/YY`

`Valid types: ["credit", "debit", "credit_debit"]`

</br>

#### Response:

```json
{
	"id": 4,
	"title": "quod possimus earum",
	"number": "5020-9349-7552-0573",
	"holderName": "Eddie Wintheiser",
	"cvv": "155",
	"expiryDate": "08/27",
	"password": "LkGCjBIxUW7khpz",
	"isVirtual": false,
	"type": "credit",
	"createdAt": "2022-07-18T07:18:29.704Z"
}
```

#

### Get all cards associated with the user

```http
GET /card
```

#### Response:

```json
[
	{
		"id": 2,
		"title": "unde in sit",
		"number": "6377-5066-7282-1608",
		"holderName": "Rudy McKenzie",
		"cvv": "098",
		"expiryDate": "11/24",
		"password": "dYOvimvMKm_A_D9",
		"isVirtual": true,
		"type": "credit",
		"createdAt": "2022-07-17T19:52:55.216Z"
	},
	{
		"id": 3,
		"title": "aut non aliquam",
		"number": "6767-1605-9187-2170-94",
		"holderName": "Beulah Grimes",
		"cvv": "450",
		"expiryDate": "10/24",
		"password": "7gi3_q6oUGOvGcd",
		"isVirtual": true,
		"type": "credit",
		"createdAt": "2022-07-17T19:53:34.436Z"
	}
]
```

#

### Get a card by identifier

```http
GET /card/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 2,
	"title": "unde in sit",
	"number": "6377-5066-7282-1608",
	"holderName": "Rudy McKenzie",
	"cvv": "098",
	"expiryDate": "11/24",
	"password": "dYOvimvMKm_A_D9",
	"isVirtual": true,
	"type": "credit",
	"createdAt": "2022-07-17T19:52:55.216Z"
}
```

#

### Delete a card by identifier

```http
DELETE /card/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Wifi

# Create data from a new wifi network

```http
POST /note
```

#### Request:

| Params     | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `title`    | `string` | **Required**. identifier for network |
| `name`     | `string` | **Required**. network name           |
| `password` | `string` | **Required**. network password       |

</br>

#### Response:

```json
{
	"id": 5,
	"title": "quo maxime voluptas",
	"name": "wifi16",
	"password": "2sMyieEERuKVeVD",
	"createdAt": "2022-07-18T07:18:41.556Z"
}
```

#

### Get all networks associated with the user

```http
GET /wifi
```

#### Response:

```json
[
	{
		"id": 2,
		"title": "autem odit consequatur",
		"name": "wifi.Carvalho16",
		"password": "23gv1TeAPQsBmS1",
		"createdAt": "2022-07-17T20:26:13.599Z"
	},
	{
		"id": 3,
		"title": "et adipisci eum",
		"name": "wifi.Moreira",
		"password": "_srN8tU7DVxEsxT",
		"createdAt": "2022-07-17T20:26:54.440Z"
	}
]
```

#

### Get a network by identifier

```http
GET /wifi/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 2,
	"title": "autem odit consequatur",
	"name": "wifi.Carvalho16",
	"password": "23gv1TeAPQsBmS1",
	"createdAt": "2022-07-17T20:26:13.599Z"
}
```

#

### Delete a network by identifier

```http
DELETE /wifi/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`SECRET_KEY = any string`

`JWT_SECRET = "any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/LucasAlvsz/projeto19-drivenpass-back
```

Go to the project directory

```bash
  cd projeto18-valex/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate reset
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   [@LucasAlvsz](https://www.github.com/LucasAlvsz) 🪐

<br/>
<br/>
<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
