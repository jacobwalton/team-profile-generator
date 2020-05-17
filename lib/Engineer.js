const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super(github);

    this.github = github;
  }
}
module.exports = Engineer;