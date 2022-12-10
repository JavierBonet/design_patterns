# Singleton

## Purpose
The singleton pattern that allows to have a single instance for a specific class so that the whole system access the same instance and not many of them.

## Structure
This pattern is structured as follows:

### Singleton class

Should define a class with the following elements:

- instance: this represents the only existing instance for the class. At the begenning, would be undefined
- getInstance(): this is the method that returns the unique instance for the class

## Applicability
Use this pattern when you want to have only one instance of a specific class. This way you have more control over the global instances the system handles.

## Pros and cons
| Pros :white_check_mark: | Cons :x: |
|--- |--- |
| You can be sure that a specific class has only one instance | In an environment with multiple threads, this pattern needs a special treatment |
| There is a single global access point for the instance |  |
