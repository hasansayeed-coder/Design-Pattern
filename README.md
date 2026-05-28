# JavaScript Design Patterns Laboratory 🚀

Welcome to my software architecture laboratory! This repository is dedicated to exploring and implementing classic software design patterns using modern JavaScript (ES6+). 

Instead of just writing theoretical code, every single pattern in this repository is structured into a side-by-side comparison:
1. **The Problem:** A flawed, tightly coupled, or vulnerable implementation showing why standard approaches break at scale.
2. **The Solution:** A decoupled, robust, and highly maintainable version utilizing the specific design pattern.

---

## 📂 Project Directory Structure

* 📦 **[1-module-pattern](./1-module-pattern)** - Capsulates states using IIFEs and closures to secure business data from global scope manipulation.
* 📡 **[2-observer-pattern](./2-observer-pattern)** - Implements decoupled event broadcasting architectures (Publisher-Subscriber relationships).
* 🏭 **[3-factory-pattern](./3-factory-pattern)** - Centralizes object creation routines to decouple clients from direct structural dependencies.
* 👤 **[4-singleton-pattern](./4-singleton-pattern)** - Controls instantiation limits to coordinate a singular immutable global source of truth.
* 🎯 **[5-strategy-pattern](./5-strategy-pattern)** - Abstracts mathematical algorithms into swappable execution layers at runtime.
* 🎀 **[6-decorator-pattern](./6-decorator-pattern)** - Chains operational extensions onto live objects cleanly without encountering class explosion.
* 🎛️ **[7-mediator-pattern](./7-mediator-pattern)** - Channels multi-component traffic through a singular router hub to simplify chaotic mesh networks.
* 📜 **[8-command-pattern](./8-command-pattern)** - Packages requests as standalone variables to manage event undo histories and execution queues.
* 🔌 **[9-adapter-pattern](./9-adapter-pattern)** - Constructs middleware translation envelopes to sync up structurally mismatched third-party APIs.

---

## 🛠️ Global Execution Quickstart

To play with any of the comparative architectures locally, ensure you have [Node.js](https://nodejs.org/) configured, clone this repository, and execute via the terminal terminal console:

```bash
# Example: Testing the secure Module Pattern
node 1-module-pattern/2-solution-with-module.js

# Example: Testing the dynamic Strategy Pattern
node 5-strategy-pattern/2-solution-with-strategy.js