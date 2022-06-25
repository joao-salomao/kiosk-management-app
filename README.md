# Kiosk Management App

### Running app with Docker Compose
- Execute the following command:
  ```
  docker-compose up -d
  ```
- Wait until the services start up.
- Access the URL http://localhost:3000 on your browser to use the App interface or the URL http://localhost:3001 to the API.


### Running app locally
- Requirements:
  - Node.js
  - PostgreSQL

- Install the front-end and API dependencies running the following command on each project folder (app, api):
  ```
  npm install
  ```

- Setup the API environment variables with the credentials of your local database changing the variables defined on the file `api/.env`.
  ```
  DB_HOST=localhost
  DB_PORT=5432
  DB_USER=test
  DB_PASSWORD=test
  DB_DATABASE=test
  ```

- Setup the database structure running the following command on the API root folder:
  ```
  npm install db:migrate
  ```

- Start up the API running the following command on the API root folder:
  ```
  npm start
  ```

- Start up the front-end running the following command on the App root folder:
  ```
  npm start
  ```
- Access the URL http://localhost:3000 on your browser to use the App interface or the URL http://localhost:3001 to the API.

### Running the front-end tests
#### With Docker-compose:
Considering that you are already running the app, execute the following command:
```
docker-compose exec app npm test
```

#### Locally:
Execute the following command on the front-end root folder:
```
npm test
```