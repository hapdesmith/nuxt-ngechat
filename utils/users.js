class UsersDB {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users = [...this.users, user];
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  removeUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

module.exports = () => {
  return new UsersDB();
};
