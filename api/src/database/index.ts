import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source connected 📚");
  })
  .catch((error) => console.log(error));
