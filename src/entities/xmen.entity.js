const crypto = require(`node:crypto`);

class xmenclass {
  constructor(parametro) {
    this.id = parametro.id ?? crypto.randomUUID();
    this.character = parametro.character;
    this.skills = parametro.skills;
    this.age = parametro.age;
    this.gender = parametro.gender;
    this.origin = parametro.origin;
  }
  validate() {
    if (!this.id) {
      throw new Error({ message: `informe um id válido` });
    }
    if (!this.character) {
      throw new Error({ message: `informe character válido` });
    }
    if (!this.skills) {
      throw new Error({ message: `informe skill válida` });
    }
    if (!this.age) {
      throw new Error({ message: `informe age válida` });
    }
    if (!this.gender) {
      throw new Error({ message: `informe gender válido` });
    }
    if (!this.origin) {
      throw new Error({ message: `informe origin válida` });
    }
  }
  getXmen() {
    return {
      id: this.id,
      character: this.character,
      skills: this.skills,
      age: this.age,
      gender: this.gender,
      origin: this.origin,
    };
  }
}

module.exports = xmenclass;
