const { connect, disconnect, saveUser, findUser } = require("./dbConfig");
const User = require("../models/userModels");
const mongoose = require("mongoose");

// describe, test(), expect()

jest.mock("./dbConfig");

beforeAll(async () => {
  return await connect();
});

describe("User Test Suite", () => {
  test("As a user I want to save user to the database", async () => {
    const newUser = new User({
      // _id: mongoose.Types.ObjectId(),
      _id: new mongoose.Types.ObjectId(),
      firstName: "Eddy",
      lastName: "Mouity",
      address: "123 Bonodong",
      city: "Ansan-City",
      state: "Gyonggido",
      zipCode: "15555",
      email: "eg@email.com",
      password: "eg123456",
    });
    const user = await saveUser(newUser);
    expect(user.firstName).toEqual("Eddy");
    expect(user.lastName).toEqual("Mouity");
    expect(user.address).toEqual("123 Bonodong");
    expect(user.city).toEqual("Ansan-City");
    expect(user.state).toEqual("Gyonggido");
    expect(user.zipCode).toEqual("15555");
    expect(user.email).toEqual("eg@email.com");
    expect(user.password).toEqual("eg123456");
  });
  test("As user I want to find a user by any property", async () => {
    const obj = { email: "eg@email.com" };

    // await findUser(obj).then((user) => {
    //     expect(user.firstName).toBe('Eddy')
    // }).catch(err =>{
    //     console.log("Error", err.message);
    // });

    await findUser(obj)
    .then((user) => {
      expect(user.firstName).toEqual("Eddy");
      expect(user.lastName).toEqual("Mouity");
      expect(user.address).toEqual("123 Bonodong");
      expect(user.city).toEqual("Ansan-City");
      expect(user.state).toEqual("Gyonggido");
      expect(user.zipCode).toEqual("15555");
      expect(user.email).toEqual("eg@email.com");
      expect(user.password).toEqual("eg123456");
    });
  });
});

afterAll(async () => {
  return await disconnect();
});
