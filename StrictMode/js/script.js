"use strict";
x = 3.14;   //  This will cause an error because x is not declared

myfunc();
function myfunc(){
    y = 3.14; // This will cause an error because y is not declared
}
//////////////////////////////////////////////////////////////////////


x = 3.14;   //  This will not cause an error
myfunc();
function myfunc(){
    "use strict";
    y = 3.14; // This will cause an error because y is not declared
}

//  Deleting a variable(or object), function is not allowed
"use strict";
let x = 3.14;
delete x;   //  This will cause an error

"use strict";
function myFunc(p1,p2){};
delete myFunc; // This will cause an error

//  Duplicating a parameter name is not allowed
"use strict";
function myFunc(p1,p1){};

//  Octal escape chars are not allowed

//  Writing to a read-only property is not allowed
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;   //  This will cause an error

//  Writing to a get-only property is not allowed
"use strict";
const obj = {get x() {return 0}};
obj.x = 3.14; // This will cause an error

// The words eval, arguments can't be used as a variable and statement 'with' is not allowed