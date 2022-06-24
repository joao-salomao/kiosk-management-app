import { AppDataSource } from "./data-source";
import { User } from "./entities/User";

AppDataSource.initialize()
  .then(async () => {
    console.info("Data Source connected 📚");

    const repository = AppDataSource.getRepository(User);

    console.info("Checking if the default user exists");

    const user = await repository.findOne({
      where: {
        name: "João Salomão",
      },
    });

    if (!user) {
      console.info("Default user not found, creating...");

      await repository.insert({
        name: "João Salomão",
        email: "joao@email.com",
      });

      console.log("Default user created.");
    }
  })
  .catch((error) => console.log(error));
