class Employee {
  constructor(name, role, id, email) {
    //Throw error if there's no input
    if (!name) {
      throw new Error("Please enter valid name.");
    }
    if (!role) {
      throw new Error("Please enter valid role.");
    }
    if (!id) {
      throw new Error("Please enter valid id.");
    }
    if (!email) {
      throw new Error("Please enter valid email address.");
    }
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
  }
}
module.exports = Employee;