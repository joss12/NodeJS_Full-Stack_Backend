const connect = async () => {
  console.log("->MongoDb Mocked Connection");
};

const disconnect = async () => {
  console.log("Mocked Disconnection");
};

const findUser = async (obj) => {
  return Promise.resolve({
    firstName: "Eddy",
    lastName: "Mouity",
    address: "123 Bonodong",
    city: "Ansan-City",
    state: "Gyonggido",
    zipCode: "15555",
    email: "eg@email.com",
    password: "eg123456",
  });
};

const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: "Eddy",
    lastName: "Mouity",
    address: "123 Bonodong",
    city: "Ansan-City",
    state: "Gyonggido",
    zipCode: "15555",
    email: "eg@email.com",
    password: "eg123456",
  });
};

module.exports = {
  connect,
  disconnect,
  findUser,
  saveUser,
};
