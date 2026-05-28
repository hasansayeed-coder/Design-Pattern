# 6. The Decorator Pattern 🎀

This folder demonstrates the **Decorator Pattern** in JavaScript, showing how to attach runtime responsibilities to objects dynamically without bloating codebase inheritance lines.

---

## 🧐 The Core Problem (Without the Decorator Pattern)

Extending object capabilities via traditional class inheritance (`extends`) happens strictly at compile time. 

In our coffee configurations scenario (`1-problem-without-decorator.js`):
* Trying to support every unique combination of custom options creates a structural breakdown known as **Class Explosion**.
* Codebases quickly become choked with excessively specific, unmaintainable hybrid classes (`CoffeeWithMilkAndSugarAndCaramel`).
* It prevents the application from modifying an object's behavior after it has been instantiated.

## 🚀 The Solution (With the Decorator Pattern)

The **Decorator Pattern** relies on composition rather than inheritance. It wraps target objects inside nested functional layers to enhance their operational values.

In our nested wrapper scenario (`2-solution-with-decorator.js`):
* **Dynamic Customization:** Behaviors are aggregated flexibly at runtime based on real-time application states or user choices.
* **Single Responsibility:** Each wrapper handles exactly one single modification aspect (e.g., adding only the cost of milk).
* **Infinite Permutations:** You can endlessly chain or order decorators together without modifying the core blueprint components.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Run the Class Explosion Script
```bash
node 6-decorator-pattern/1-problem-without-decorator.js


2. Run the Flexible Decorator Script

node 6-decorator-pattern/2-solution-with-decorator.js