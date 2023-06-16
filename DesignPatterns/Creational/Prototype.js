// The Prototype design pattern is a creational design pattern that is used to create new objects by cloning existing objects. 
// It allows you to create new objects based on an existing object, known as the prototype, without explicitly invoking their constructors.

// The main idea behind the Prototype pattern is to provide a mechanism for creating new objects by copying an existing object, rather than creating them from scratch. 
// This approach can be useful when creating complex objects that are costly to instantiate or when you want to avoid subclassing to create variations of an object.

// Here's how the Prototype pattern typically works:

// 1. Define a prototype interface or abstract class: This interface or abstract class declares a method that allows cloning of objects. 
// It serves as the type for the prototype objects.

// 2. Create concrete prototype classes: Implement concrete classes that implement the prototype interface or inherit from the prototype abstract class. 
// Each concrete class represents a specific type of object and provides its own cloning implementation.

// 3. Clone the prototype: To create a new object, you create a clone of the prototype object by calling the clone method defined in the prototype interface or abstract class. 
// This cloning operation creates a new object with the same state as the original prototype object.

// 4. Customize the cloned object (optional): After cloning, you can customize the cloned object by modifying its state or properties to suit your needs.

// Prototype object
// const productPrototype = {
//     name: '',
//     price: 0,
//     category: '',
//     display() {
//       console.log(`Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
//     }
// };

// // Create a new object by cloning the prototype
// const product1 = Object.create(productPrototype);
// product1.name = 'Laptop';
// product1.price = 1500;
// product1.category = 'Electronics';

// // Create another object by cloning the prototype
// const product2 = Object.create(productPrototype);
// product2.name = 'Smartphone';
// product2.price = 1000;
// product2.category = 'Electronics';

// product1.display(); // Output: Product: Laptop, Price: 1500, Category: Electronics
// product2.display(); // Output: Product: Smartphone, Price: 1000, Category: Electronics

class Product {
    constructor() {
        this.name = '';
        this.price = 0;
        this.category = '';
    }

    clone() {
        const clone = new Product();
        clone.name = this.name;
        clone.price = this.price;
        clone.category = this.category;
        return clone;
    }

    display() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }
}

// Create a prototype instance
const productPrototype = new Product();
productPrototype.name = 'Prototype Laptop';
productPrototype.price = 2000;
productPrototype.category = 'Electronics';

// Create new objects by cloning the prototype
const product1 = productPrototype.clone();
product1.name = 'Laptop';
product1.price = 1500;

const product2 = productPrototype.clone();
product2.name = 'Smartphone';
product2.price = 1000;
product2.category = 'Electronics';

product1.display(); // Output: Product: Laptop, Price: 1500, Category: Electronics
product2.display(); // Output: Product: Smartphone, Price: 1000, Category: Electronics

