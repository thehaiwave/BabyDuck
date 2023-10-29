class FuncDir {
  constructor() {
    this.funcs = {};
  }

  insertFunc(name, args, context) {
    if (this.funcs?.[name] !== undefined) {
      throw new Error(`Function name has already been declared.`);
    }

    this.funcs[name] = { args: args, context: context };
  }

  deleteFunc(name) {
    if (this.variables.has(name)) {
      delete this.variables[name];
    } else {
      throw new Error(`Function name not found.`);
    }
  }

  getVariables() {
    return JSON.stringify(this.funcs, null, 2);
  }
}

export default FuncDir;
