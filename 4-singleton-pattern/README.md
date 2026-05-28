# 4. The Singleton Pattern 👤

This folder demonstrates the **Singleton Pattern** in JavaScript, showing how to restrict object instantiation to a single shared instance across an ecosystem.

---

## 🧐 The Core Problem (Without the Singleton Pattern)

Certain objects in software must serve as a single, coordinated source of truth.

In our settings configuration scenario (`1-problem-without-singleton.js`):
* Instantiating components across different files accidentally creates disconnected clones of state data.
* Changes made to a theme or system variable by one component do not propagate to other components because they refer to entirely distinct memory addresses.
* This causes desynchronized application states and wastes system RAM.

## 🚀 The Solution (With the Singleton Pattern)

The **Singleton Pattern** guarantees that a class exposes exactly one global reference point to an immutable instance structure.

In our coordinated scenario (`2-solution-with-singleton.js`):
* **State Synchronization:** Any component modifying a variable updates the *only* existing instance. Changes are instantly visible across the entire app.
* **Controlled Access:** The class intercepts initialization logic (`new`) and returns the previously cached reference if it already exists.
* **Resource Preservation:** Bypasses expensive duplicate setup steps for heavy objects like database or caching connection clients.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Run the Broken State Script
```bash
node 4-singleton-pattern/1-problem-without-singleton.js


2. Run the Coordinated Singleton Script

node 4-singleton-pattern/2-solution-with-singleton.js