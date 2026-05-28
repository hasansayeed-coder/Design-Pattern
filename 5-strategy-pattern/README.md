# 5. The Strategy Pattern 🎯

This folder demonstrates the **Strategy Pattern** in JavaScript, showing how to separate a class from the specific variations of algorithms it might need to execute.

---

## 🧐 The Core Problem (Without the Strategy Pattern)

When a program needs to execute variations of an operation based on user input or state configuration, developers often fall back on monolithic conditional blocks.

In our shipping scenario (`1-problem-without-strategy.js`):
* Every time a carrier changes its inner corporate pricing formula, the shared, global `ShippingCalculator` class code has to be modified.
* Mixing diverse mathematical algorithms into a single file creates tight coupling, increases code complexity, and makes testing individual calculations extremely messy.

## 🚀 The Solution (With the Strategy Pattern)

The **Strategy Pattern** isolates operations by taking a group of related algorithms and breaking them down into encapsulated, swappable objects.

In our refactored scenario (`2-solution-with-strategy.js`):
* **Separation of Concerns:** The calculation engine (`ShippingOrder`) acts solely as a structural controller. It doesn't need to hold the mathematical formulas for specific third-party APIs.
* **Interchangeability:** Strategies can be injected or swapped actively at runtime (`setStrategy`) based on what a customer selects in the front-end UI.
* **Open-Closed Principle Compliance:** If our company scales and adds drone delivery tomorrow, we can easily create a `DroneStrategy` class without modifying any existing carrier logic.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Run the Fragile Switch Script
```bash
node 5-strategy-pattern/1-problem-without-strategy.js

2. Run the Interchangeable Strategy Script

node 5-strategy-pattern/2-solution-with-strategy.js