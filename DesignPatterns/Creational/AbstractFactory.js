// The Abstract Factory design pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying 
// their concrete classes. It allows you to create objects that follow a common theme or have a consistent interface, but belong to different product families.

// The main idea behind the Abstract Factory pattern is to encapsulate the creation of multiple related objects into a single interface or abstract class. 
// This interface or abstract class serves as the type for the factory, which is responsible for creating the objects.

// Here's how the Abstract Factory pattern typically works:

// 1. Define abstract product interfaces or abstract classes: These interfaces or abstract classes declare the common methods that the products in a family must implement. 
// Each abstract product represents a different kind of object in the product family.

// 2. Create concrete product classes: Implement concrete classes that implement the abstract product interfaces or inherit from the abstract product classes. 
// Each concrete product represents a specific type of object in the product family.

// 3. Define an abstract factory interface or abstract class: This interface or abstract class declares the methods for creating the abstract products. 
// Each method corresponds to a product in the family.

// 4. Create concrete factory classes: Implement concrete factory classes that implement the abstract factory interface or inherit from the abstract factory class. 
// Each concrete factory is responsible for creating objects from a specific product family.

// 5. Use the abstract factory to create objects: In the client code, use the abstract factory to create objects. 
// The client code interacts with the factory through the abstract factory interface or abstract class, without needing to know the concrete classes of the products.

// Abstract Product: Laptop
class Laptop {
    display() {
        console.log("Laptop");
    }
}

// Abstract Product: Smartphone
class Smartphone {
    display() {
        console.log("Smartphone");
    }
}

// Concrete Product: Dell Laptop
class DellLaptop extends Laptop {
    display() {
        console.log("Dell Laptop");
    }
}

// Concrete Product: Apple Laptop
class AppleLaptop extends Laptop {
    display() {
        console.log("Apple Laptop");
    }
}

// Concrete Product: Samsung Smartphone
class SamsungSmartphone extends Smartphone {
    display() {
        console.log("Samsung Smartphone");
    }
}

// Concrete Product: Apple Smartphone
class AppleSmartphone extends Smartphone {
    display() {
        console.log("Apple Smartphone");
    }
}

// Abstract Factory
class ElectronicFactory {
    createLaptop() {
        throw new Error("Method createLaptop() must be implemented.");
    }

    createSmartphone() {
        throw new Error("Method createSmartphone() must be implemented.");
    }
}

// Concrete Factory: Dell Electronics
class DellFactory extends ElectronicFactory {
    createLaptop() {
        return new DellLaptop();
    }

    createSmartphone() {
        return new SamsungSmartphone();
    }
}

// Concrete Factory: Apple Electronics
class AppleFactory extends ElectronicFactory {
    createLaptop() {
        return new AppleLaptop();
    }

    createSmartphone() {
        return new AppleSmartphone();
    }
}

// Usage
const dellFactory = new DellFactory();
const dellLaptop = dellFactory.createLaptop();
const dellSmartphone = dellFactory.createSmartphone();

dellLaptop.display(); // Output: Dell Laptop
dellSmartphone.display(); // Output: Samsung Smartphone

const appleFactory = new AppleFactory();
const appleLaptop = appleFactory.createLaptop();
const appleSmartphone = appleFactory.createSmartphone();

appleLaptop.display(); // Output: Apple Laptop
appleSmartphone.display(); // Output: Apple Smartphone
