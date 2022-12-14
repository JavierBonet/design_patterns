# Prototype

## Purpose
The prototype pattern gives the ability to create a brand new object based on an existing one without knowing the concrete class of the instance.

## Structure
This pattern is structured as follows:

### Interfaces

#### Prototype interface

- clone: this method is in charge of creating a new instance based on the current one

### Concrete classes

- ConcreteObject: implements the prototype interface. This class has everything needed to build a new instance based on an existing one

## Applicability
Use this pattern when your code shouldn't depend on the concrete classes of objects that you need to copy.

## Pros and cons
| Pros :white_check_mark: | Cons :x: |
|--- |--- |
| You can clone an object without knowing any details about it | When the object to be cloned can have circular dependencies, the implementation of the cloning process could be complex |
| Repeated initializations can be avoided by cloning the objects | |
