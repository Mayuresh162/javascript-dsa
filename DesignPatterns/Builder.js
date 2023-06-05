// The Builder design pattern is a creational design pattern that is used to construct complex objects step by step. 
// It allows you to create different representations of an object while using the same construction process.

// The main idea behind the Builder pattern is to separate the construction of an object from its representation. 
// This separation enables you to create different variations or configurations of an object by using the same construction process.

// Here's how the Builder pattern typically works:

// 1. Define a product class: This is the class that you want to construct using the Builder pattern. 
// It should have all the properties and attributes that you want to set during the construction process.

// 2. Create a builder class: The builder class provides methods for setting the different properties of the product. 
// It has a reference to the product and a chain of setter methods to set the values of the properties.

// 3. Implement the builder methods: Each method in the builder class sets a specific property of the product and returns the builder object itself. 
// This allows for method chaining and a fluent interface.

// 4. Create a director class (optional): The director class defines the high-level construction steps and uses the builder to build the product. 
// It hides the details of the construction process from the client code.

// 5. Use the builder to construct the object: In the client code, create an instance of the builder and use its methods to set the desired properties of the product. 
// Finally, call a build method on the builder to obtain the constructed object.

class Product {
    constructor() {
        this.name = '';
        this.price = 0;
        this.category = '';
    }

    display() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }
}

class ProductBuilder {
    constructor() {
        this.product = new Product();
    }

    setName(name) {
        this.product.name = name;
        return this;
    }

    setPrice(price) {
        this.product.price = price;
        return this;
    }

    setCategory(category) {
        this.product.category = category;
        return this;
    }

    build() {
        return this.product;
    }
}

// Usage
const builder = new ProductBuilder();
const product = builder.setName('Laptop')
    .setPrice(1500)
    .setCategory('Electronics')
    .build();

product.display(); // Output: Product: Laptop, Price: 1500, Category: Electronics

// In the example above, the Product class represents the complex object that we want to construct. 
// The ProductBuilder class provides methods (setName, setPrice, setCategory) to set different attributes of the product step by step. 
// The build method returns the constructed Product object.

// By using the Builder Design Pattern, the client code (in the "Usage" section) can create a Product object by chaining the builder methods in a fluent interface. 
// This approach provides a clear and readable way to construct complex objects, especially when there are multiple optional or configurable attributes.

// The Builder pattern allows you to create different configurations of the same object by adding additional methods to the builder class. 
// It also makes the construction process more flexible, as you can easily modify or extend the builder class to accommodate new construction requirements.