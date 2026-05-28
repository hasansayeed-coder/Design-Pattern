# 7. The Mediator Pattern 🎛️

This folder demonstrates the **Mediator Pattern** in JavaScript, showing how to untangle messy many-to-many object interactions by shifting communication duties to a centralized hub.

---

## 🧐 The Core Problem (Without the Mediator Pattern)

As applications grow, independent components frequently need to pass data back and forth, resulting in sprawling cross-dependencies.

In our chat scenario (`1-problem-without-mediator.js`):
* Every single user object must carry direct references to every other user object to communicate.
* If a module changes, drops out, or needs to be added, multiple entities must be manually reconfigured.
* The system morphs into tightly coupled "spaghetti code" that is incredibly difficult to modify or test.

## 🚀 The Solution (With the Mediator Pattern)

The **Mediator Pattern** cuts out direct interactions between individual components, forcing them to communicate indirectly through a solitary point of coordination.

In our centralized hub scenario (`2-solution-with-mediator.js`):
* **Decoupling:** Objects (`User`) have zero direct dependencies on each other. They interact entirely by notifying the `ChatRoom`.
* **Centralized Routing Control:** The mediator manages message destinations, making it trivial to change system behavior (like logging records or filtering messages) inside one class.
* **Maintainability:** Components become completely independent and modular, making them easily reusable across completely different portions of the codebase.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Run the Inter-Coupled Network Script
```bash
node 7-mediator-pattern/1-problem-without-mediator.js

2. Run the Centralized Mediator Script
node 7-mediator-pattern/2-solution-with-mediator.js