import bcrypt from "bcrypt";

const users = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "ademolaadewumi01@gmail.com",
    password: bcrypt.hashSync("adewumi", 10),
    isAdmin: true,
  },
  {
    firstName: "Ademola",
    lastName: "Adewumi",
    email: "adexy100@gmail.com",
    password: bcrypt.hashSync("adewumi", 10),
  },
];

export default users;
