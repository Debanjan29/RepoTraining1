var name = "John";            // Can be redeclared & updated
        let age = 25;                 // Can be updated, but not redeclared in same scope
        const country = "India";      // Cannot be updated or redeclared

        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Country:", country);

        
        // Primitive Types
        let str = "Hello";            // String
        let num = 10;                 // Number
        let isOnline = true;          // Boolean
        let nothing = null;           // Null
        let notDefined;               // Undefined


        // Non-primitive Types
        let arr = [1, 2, 3];          // Array (object)
        let person = {                // Object
            firstName: "Alice",
            lastName: "Smith"
        };

        console.log("String:", str);
        console.log("Number:", num);
        console.log("Boolean:", isOnline);
        console.log("Null:", nothing);
        console.log("Undefined:", notDefined);
        console.log("Array:", arr);
        console.log("Object:", person);

        // 6. Operators
        let a = 10;
        let b = 3;

        // Arithmetic Operators
        console.log("Addition:", a + b);
        console.log("Subtraction:", a - b);
        console.log("Multiplication:", a * b);
        console.log("Division:", a / b);
        console.log("Modulus:", a % b);

        
        let x = 5;
        x += 2;
        console.log("Assignment (+=):", x);

        // Comparison Operators
        console.log("Is a > b?", a > b);
        console.log("Is a == b?", a == b);
        console.log("Is a === b?", a === b);

        // Logical Operators
        console.log("a > 5 && b < 5:", a > 5 && b < 5);
        console.log("a > 5 || b > 5:", a > 5 || b > 5);
        console.log("!(a < b):", !(a < b));

        const input= require("prompt-sync")();
        let name1 = input("What's your name ");
        console.log("Name is",name1);