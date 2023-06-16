// The Singleton design pattern is a creational design pattern that ensures a class has only one instance, and provides a global point of access to that instance. 
// It is commonly used in situations where having multiple instances of a class would be unnecessary or counterproductive.

// The main idea behind the Singleton pattern is to provide a single, globally accessible instance of a class, while preventing any other code from creating additional instances. 
// This can be useful in scenarios where you need to coordinate access to a shared resource, or when you want to ensure that a certain class has a single point of control.

// Here are the steps that explain how the Singleton pattern works:

// 1. Private constructor: The Singleton class has a private constructor, which means that it cannot be instantiated directly from outside the class.

// 2. Static instance variable: The Singleton class contains a static (class-level) variable that holds the single instance of the class. 
// This variable is typically named instance or similar.

// 3. Access method: The Singleton class provides a static method that allows access to the single instance of the class. This method is often named getInstance() or similar.

// 4. Lazy initialization: The first time the getInstance() method is called, it checks if the instance variable is null. 
// If it is, it creates a new instance of the class and assigns it to the instance variable. If the instance variable is already set, it simply returns the existing instance.

// 5. Global access: Once the instance is created, it can be accessed globally throughout the application by calling the getInstance() method.

// 6. Thread safety (optional): In a multithreaded environment, additional steps may be needed to ensure thread safety. 
// One common approach is to use synchronization mechanisms, such as locking or double-checked locking, to prevent multiple threads from simultaneously creating separate instances of the Singleton.

class ElectronicStore {
    constructor() {
        if (!ElectronicStore.instance) {
            this.inventory = {};
            ElectronicStore.instance = this;
        }
        return ElectronicStore.instance;
    }

    addProduct(product) {
        this.inventory[product.name] = product;
    }

    getProduct(name) {
        return this.inventory[name];
    }
}

// Laptop class
class Laptop {
    constructor(name) {
        this.name = name;
    }
}

// Smartphone class
class Smartphone {
    constructor(name) {
        this.name = name;
    }
}

// Usage
const store1 = new ElectronicStore();
const laptop1 = new Laptop('Dell XPS');
store1.addProduct(laptop1);

const store2 = new ElectronicStore();
const laptop2 = new Laptop('Apple MacBook');
store2.addProduct(laptop2);

const store3 = new ElectronicStore();
const smartphone1 = new Smartphone('Samsung Galaxy');
store3.addProduct(smartphone1);

console.log(store1.getProduct('Dell XPS')); // Output: Laptop { name: 'Dell XPS' }
console.log(store2.getProduct('Apple MacBook')); // Output: Laptop { name: 'Apple MacBook' }
console.log(store3.getProduct('Samsung Galaxy')); // Output: Smartphone { name: 'Samsung Galaxy' }
