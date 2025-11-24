# 🔍 all-true-property-validator

A lightweight utility for validating whether **all objects in an array contain a specific property with a truthy value**. Perfect for JavaScript learners, interview preparation, or real-world form/data validation scenarios.  

This project demonstrates a foundational concept in JavaScript and frontend engineering: **truthiness**. Knowing how to differentiate between *truthy* and *falsy* values is essential when validating nested data, filtering objects, or enforcing input constraints.

---

## ✨ Features

- ✔️ Simple, readable implementation  
- ✔️ Checks any property dynamically  
- ✔️ Works with arrays of any object structure  
- ✔️ Supports nested structures and diverse value types  
- ✔️ Includes tests demonstrating expected behavior  
- ✔️ Ideal practice for JavaScript beginners learning logical evaluation

---

## 🧠 What This Project Teaches You

### 1. **Truthiness in JavaScript**
JavaScript evaluates values in boolean contexts using the concepts of **truthy** and **falsy**. This project reinforces understanding of:

- Truthy values (e.g. `"hello"`, `1`, `{}`, `[]`, non-empty strings)
- Falsy values (e.g. `false`, `0`, `""`, `null`, `undefined`, `NaN`)

This validator helps developers *see truthiness applied inside loops, conditionals, and object inspection* — a vital muscle for frontend logic.

---

### 2. **Dynamic Property Access**
By passing a property name as a string, learners get familiar with:

```js
object[propertyName]
```
This ability is crucial for:

- Rendering dynamic UI fields

- Working with API responses

- Handling user-generated object keys

- Writing reusable validator functions

### 3. Array & Object Manipulation

The code uses:

- `Array.map()` to extract values

- `for`...`of` loops for iteration

- Early returns for short-circuit performance

- Clean, functional structure

These are core techniques used constantly in frontend work: **form validation**, **dynamic table rendering**, **filtering** lists, and more.


## 🚀 Usage
Import or copy the `truthCheck` function into your project to validate that a particular property is truthy across all objects in an array.

This is especially useful for:

- Ensuring API data consistency

- Validating form submissions

- Checking configuration objects

- Filtering datasets

- Detecting missing or invalid values

## 🎓 Educational Value
This project is commonly based on an exercise from `**freeCodeCamp**` — designed to build confidence in:

- Logical operators

- Array methods

- Property inspection

- Falsy value detection

- Defensive programming

It’s perfect for beginners strengthening JavaScript fundamentals, or experienced developers needing a quick reference utility.


## 🧪 Running the Tests
Since all test cases are already included inside `source.js`, simply run:

```bash 
node source.js
```
on a console. You'll see each check printed in the console.


## 📜 License
This project is licensed under the MIT License, meaning you're free to use, modify, and distribute it.


