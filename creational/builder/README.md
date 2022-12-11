# Builder
## Purpose
The builder pattern is a creational design pattern that allows creating complex instances step by step avoiding huge constructor methods or the definition of a great number of sub-classes inheriting from a common parent class.

## Structure
This pattern is structured as follows:

### Interfaces

- Builder: this interface specifies the methods needed to build a product

### Concrete classes

- ConcreteBuilderA: implements the methods needed to build products
- Director: this is an optional class in which to hide the steps to follow in order to create an specific product. If this class is not defined, the steps will be inside the client code

## Applicability
Use this pattern when you want to be able to create different representations of a product. As the builder defines all the possible steps to perform, many combinations are available in order to obtain the wanted variations of the products. Also, the concrete builders contain the specifics for the different variations, allowing to build the same abstract products that will only vary in the details

## Pros and cons
| Pros :white_check_mark: | Cons :x: |
|--- |--- |
| Allow constructing objects step by step, choosing the steps to execute and run steps recursively | The pattern requires the definition of many new interfaces and classes, so the complexity of the code base will grow |
| Multiple representations for a product can share the same building steps |  |
| The building logic gets isolated in a single place |  |
