// The Factory design pattern is a creational design pattern that provides an interface for creating objects, but allows subclasses to decide which class to instantiate.
// It promotes loose coupling between the creator and the product, and provides a way to encapsulate object creation logic.

// Here's how the Factory pattern typically works:

// Define an interface or abstract class: 
// 1.Create an interface or an abstract class that defines the common methods or properties that all the products will have.
// This interface or abstract class serves as the type for the objects that the factory will create.

// 2. Create concrete classes: Implement concrete classes that implement the interface or inherit from the abstract class. 
// Each concrete class represents a specific type of product.

// 3. Create a factory class: Define a factory class that has a method for creating objects of the interface or abstract class type.
// This method usually takes some parameters to determine which type of product to create.

// 4. Implement the factory method: In the factory class, implement the factory method that creates and returns objects of the interface or abstract class type. 
// The factory method can internally decide which concrete class to instantiate based on the parameters passed.

// 5. Use the factory to create objects: In the client code, instead of directly creating objects using the new keyword, use the factory to create objects. 
// The client code interacts with the factory, providing the necessary information, and receives an object of the desired type.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

// Concrete Product classes
class Laptop extends Product {
    constructor(name, price) {
        super(name, price);
    }
}

class Smartphone extends Product {
    constructor(name, price) {
        super(name, price);
    }
}

// Factory class
class ProductFactory {
    createProduct(type, name, price) {
        if (type === 'laptop') {
            return new Laptop(name, price);
        } else if (type === 'smartphone') {
            return new Smartphone(name, price);
        } else {
            throw new Error('Invalid product type.');
        }
    }
}

// Usage
const factory = new ProductFactory();

const laptop = factory.createProduct('laptop', 'Dell XPS 13', 1500);
laptop.display(); // Output: Product: Dell XPS 13, Price: 1500

const smartphone = factory.createProduct('smartphone', 'iPhone 12', 1000);
smartphone.display(); // Output: Product: iPhone 12, Price: 1000

// In the above example, the Product class represents the abstract product, and the Laptop and Smartphone classes are concrete implementations of the product.
// The ProductFactory class is responsible for creating instances of the products based on the type specified.

// By using the Factory Design Pattern, the client code (in the "Usage" section) doesn't need to directly instantiate the concrete product classes. 
// Instead, it interacts with the factory, which creates the appropriate product based on the type provided.

// This pattern allows for easy extensibility by adding new product types without modifying the existing client code.