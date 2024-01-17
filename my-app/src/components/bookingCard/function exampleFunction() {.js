function exampleFunction() {
    if (true) {
      let blockScopedVar = "I'm block-scoped";
      var functionScopedVar = "I'm function-scoped";
    }
  
    console.log(blockScopedVar); // Error: blockScopedVar is not defined
    console.log(functionScopedVar); // Outputs: "I'm function-scoped"
  }