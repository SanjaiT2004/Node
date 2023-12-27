/**
 Modules: 
        It is an encapsulated and reusable chunck of code that has its own context.
        In node.js each file treated as modules.
        Types:
            Local modules
            Built-in modules
            Third party modules
 */
console.log("I'm now in Module module");
const im_in = require('./4.ModuleExport')
console.log(im_in());
console.log("I'm back to Module module");
