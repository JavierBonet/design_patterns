# Abstract factory
## Purpose
The abstract factory patter is a creational design pattern which allows to create families of related objects without specifying the concrete classes

## Structure
This pattern is structured as follows:

### Interfaces

- AbstractFactory: this is an interface that specifies a creation method for each type of object
- AbstractProductX: this interface represents a type of object. There will be as many of this interfaces as type of objects. For example, if we need to work with products A and B, we will define the interfaces:
  - ProductA
  - ProductB

### Concrete classes

- ConcreteFactoryY: there will be as many of this classes as families of objects. For example, if fakeBrand1 and fakeBrand2 are brands that produce products A and B, we will need to implement:
  - FakeBrand1Factory
  - FakeBrand2Factory 
- ConcreteProductZ: for each of the object families and type of object there will be one of this classes. Using the examples presented, we will need to implement
  - fakeBrand1ProductA
  - fakeBrand1ProductB
  - fakeBrand2ProductA
  - fakeBrand2ProductB

## Applicability
Use this pattern when your code needs to work with several families of related products, but you don't want to depend on their concrete implementations.
This pattern provides an interface to create objects for the same family. If the client code uses this interface, it doesn't have to worry about creating objects that don't combine with the previously created.

## Pros and cons
| Pros :white_check_mark: | Cons :x: |
|--- |--- |
| The products from the same category but created by different factories are compatibles with each other | In some cases, the code could become more complex because of the interfaces and classes the pattern introduces |
| Avoids strong coupling between products and client code |  |
| Unique responsibility principle. Product creation logic is encapsulated in one place |  |
| Open / close principle. Other types of products can be included without altering the client code |  |
