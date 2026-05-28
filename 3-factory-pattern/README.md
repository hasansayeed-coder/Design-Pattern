# 3. The Factory Pattern 🏭

This folder demonstrates the **Factory Pattern** in JavaScript, highlighting how abstracting object creation simplifies future system expansions.

---

## 🧐 The Core Problem (Without the Factory Pattern)

In standard object-oriented development, directly using the `new` keyword inside your business logic couples your application to specific classes.

In our logistics scenario (`1-problem-without-factory.js`):
* The system is heavily dependent on specific instances (`new Truck()`, `new Ship()`).
* If you need to introduce a new transport mechanism (like an `Airplane`), you have to search through your code and manually modify complex conditional blocks.
* This makes the architecture rigid and error-prone.

## 🚀 The Solution (With the Factory Pattern)

The **Factory Pattern** replaces direct object construction calls with a centralized creation interface.

In our structured scenario (`2-solution-with-factory.js`):
* **Decoupling:** The client application logic does not know or care about internal product definitions. It talks exclusively to `VehicleFactory`.
* **Single Responsibility:** All object instantiation logic is safely isolated inside one single switch block. If a creation rule changes, you change it in exactly one place.
* **Scalability:** Adding an `Airplane` module takes seconds and requires zero modifications to the core order-processing ecosystem.

---

## 🛠️ How to Run and Test

Run the scripts using Node.js inside your terminal:

### 1. Run the Rigid Implementation
```bash
node 3-factory-pattern/1-problem-without-factory.js


2. Run the Factory Pattern Implementation

node 3-factory-pattern/2-solution-with-factory.js