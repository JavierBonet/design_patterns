# Factory method

## Purpose
The factory method pattern allows decoupling concrete product creation from the client code by using a creation class that holds the responsibility of creating the corresponding concrete product instance needed by the client code.

## Structure
This pattern is structured as follows:

### Interfaces

#### Creator interface

Should define a class with the following elements:

- createProduct: this method is in charge of creating the product
- otherAction: the creator interface is not limited to just the createProduct method, it could also include other actions that might be needed

#### Product interface

- doSomething: method that performs the corresponding actions the product must do

This is a very basic representation of the product interface, it could be as complex as the scenario requires

### Concrete classes

- AcmeCreator: implements the creator interface and its goal is to create the corresponding ACME product
- EmcaCreator: implements the creator interface and its goal is to create the corresponding EMCA product

- AcmeProduct: implements the product interface and represents an ACME product
- EmcaProduct: implements the product interface and represents an EMCA product

## Applicability
Use this pattern when you don't know beforehand the types and dependencies your code will work with.

## Pros and cons
| Pros :white_check_mark: | Cons :x: |
|--- |--- |
| You avoid tight coupling between the creator and the concrete products | The code become more complicated as you need to include the creator and the product interfaces and concrete classes |
| By moving the code responsible of the product creation inside a single class you are isolating it and, hence, making it simpler for future possible modifications | |
| New types of products can be included without breaking the existing code | |
