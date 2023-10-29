class VarTable {
  constructor() {
    this.variables = {};
  }

  insertVar(name, type, context) {
    if (this.variables?.[name] !== undefined) {
      throw new Error(`Variable name has already been declared.`);
    }

    this.variables[name] = { type: type, context: context };
  }

  deleteVar(name) {
    if (this.variables.has(name)) {
      delete this.variables[name];
    } else {
      throw new Error(`Variable name not found.`);
    }
  }

  getVariables() {
    return JSON.stringify(this.variables, null, 2);
  }
}

export default VarTable;
