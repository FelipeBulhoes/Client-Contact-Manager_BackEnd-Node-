# Client-Contact-Manager_BackEnd-Node-
A simple FullStack project to register clients and his contacts. This repository holds the backend Node.js application.

## Running locally

Clone the project into your machine
```
git clone git@github.com:FelipeBulhoes/Client-Contact-Manager_BackEnd-Node-.git
```

Go into the project directory
```
cd Client-Contact-Manager_BackEnd-Node-
```

Install project dependencies
```
npm install || yarn
```

##Connect to the database
Create a postgreSQL database in your psql terminal.
```
CREATE DATABASE <database_name>;
```
Create a .env file based on the .envexample file

On the field DATABASE_URL write the following line changing marked data to your database data
```
postgres://<db_user>:<db_password>@localhost:5432/<db_name>
```
Choose SECRET_KEY and PORT as you wish

Then run already existant migrations with
```
npm run typeorm migration:run -- -d ./src/data-source
```
 
Run server
```
npm run dev || yarn dev 
```
### Tech Stack
Backend: Node, Express and PostgreSQL
