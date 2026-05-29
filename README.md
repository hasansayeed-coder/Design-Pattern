# JavaScript Design Patterns Laboratory 🚀

Welcome to my software architecture laboratory! This repository is dedicated to exploring, implementing, and mastering classic software design patterns using modern JavaScript (ES6+). 

Instead of just writing theoretical code, every single pattern in this repository is structured into an intentional, side-by-side comparison:
1. **The Problem:** A flawed, tightly coupled, or vulnerable implementation showing why standard approaches break or fail at enterprise scale.
2. **The Solution:** A decoupled, robust, and highly maintainable version utilizing the specific design pattern to achieve clean architecture.

---

## 📂 Project Directory Structure

### 🏗️ Creational Patterns
* 🏭 **[3-factory-pattern](./3-factory-pattern)** - Centralizes object creation routines to decouple client logic from direct structural dependencies.
* 👤 **[4-singleton-pattern](./4-singleton-pattern)** - Controls instantiation limits to coordinate a singular, synchronized global source of truth.

### 🔌 Structural Patterns
* 🎀 **[6-decorator-pattern](./6-decorator-pattern)** - Chains operational extensions onto live objects dynamically without encountering subclass explosion.
* 🔌 **[9-adapter-pattern](./9-adapter-pattern)** - Constructs middleware translation envelopes to seamlessly bridge structurally mismatched APIs.
* 💳 **[10-proxy-pattern](./10-proxy-pattern)** - Intercepts, caches, and throttles access requests to protect resource-intensive background operations.
* 🗄️ **[12-facade-pattern](./12-facade-pattern)** - Consolidates complex nested sub-systems behind a single, high-level execution entry point.

### 🎯 Behavioral Patterns
* 📡 **[2-observer-pattern](./2-observer-pattern)** - Implements a flexible, decoupled event broadcasting architecture (Publisher-Subscriber model).
* 🎯 **[5-strategy-pattern](./5-strategy-pattern)** - Extracts variations of internal mathematical algorithms into swappable, runtime-interchangeable layers.
* 🎛️ **[7-mediator-pattern](./7-mediator-pattern)** - Channels multi-component traffic through a singular router hub to untangle chaotic mesh networks.
* 📜 **[8-command-pattern](./8-command-pattern)** - Packages requests as standalone variables to manage event execution queues and transaction histories.
* 🔄 **[11-state-pattern](./11-state-pattern)** - Converts explicit condition flags into dedicated state objects to handle complex contextual transitions cleanly.

### 🔒 Module Pattern
* 📦 **[1-module-pattern](./1-module-pattern)** - Encapsulates private states using closures and IIFEs to secure business data from global scope manipulation.

---

## 🛠️ Global Execution Quickstart

To explore any of these comparative architectures locally, ensure you have [Node.js](https://nodejs.org/) installed, clone this repository, and execute via your terminal console:

```bash
# Example: Testing the optimized Proxy Pattern caching layer
node 10-proxy-pattern/2-solution-with-proxy.js

# Example: Testing the decoupled State Pattern
node 11-state-pattern/2-solution-with-state.js