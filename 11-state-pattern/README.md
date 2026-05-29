# 11. The State Pattern 🔄📋

This folder demonstrates the **State Pattern** in JavaScript, showing how to replace sprawling conditional execution blocks by mapping states to isolated, interchangeable objects.

---

## 🧐 The Core Problem (Without the State Pattern)

When an object's response to an event depends entirely on its active setting, tier, or status flag, applications rely heavily on conditional chains.

In our subscription plan scenario (`1-problem-without-state.js`):
* Adding new business access parameters or feature configurations requires modifying existing operational methods across core user controller modules.
* Code blocks grow increasingly complex, making debugging distinct plan behaviors error-prone.
* This ruins extensibility and directly violates the SOLID Open-Closed Principle.

## 🚀 The Solution (With the State Pattern)

The **State Pattern** converts explicit conditional states into dedicated, decoupled class modules that share a common behavioral interface.

In our structured setup (`2-solution-with-state.js`):
* **State Encapsulation:** The functional rules of a subscription tier (e.g., `FreeState` vs. `SilverState`) are fully isolated inside independent files.
* **Dynamic Behavior Delegation:** The main controller (`UserAccount`) strips away condition matching routines completely, forwarding requests to the embedded state reference via polymorphic invocation (`this.state.upload()`).
* **Seamless Scalability:** Expanding the platform architecture to feature a brand new `DiamondState` tier requires zero modification of legacy application handlers—simply instantiate the state object and plug it right in.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Observe the Messy Multi-Condition Output
```bash
node 11-state-pattern/1-problem-without-state.js


2. Verify Clean Polymorphic State Traversal

node 11-state-pattern/2-solution-with-state.js