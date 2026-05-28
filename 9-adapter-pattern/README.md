# 9. The Adapter Pattern 🔌

This folder demonstrates the **Adapter Pattern** in JavaScript, showing how to bridge structurally mismatched APIs using middleware encapsulation wrappers.

---

## 🧐 The Core Problem (Without the Adapter Pattern)

When integrating third-party dependencies, open-source plugins, or old legacy components, you often run into mismatched method names or data structures.

In our dashboard analytics scenario (`1-problem-without-adapter.js`):
* The core UI architecture explicitly relies on a data parser method named `fetchJSON()`.
* Introducing a vendor service that exposes data through an incompatible method name (`getXMLData()`) breaks code execution.
* Forcing the core dashboard logic to handle manual parsing conditions for every unique vendor type ruins code maintainability.

## 🚀 The Solution (With the Adapter Pattern)

The **Adapter Pattern** introduces a middleman object that intercepts requests from a client, translates them internally, and interacts safely with an incompatible object.

In our encapsulated setup (`2-solution-with-adapter.js`):
* **Interface Standardization:** The `VendorAdapter` implements the interface expected by the client, allowing mismatched classes to collaborate natively.
* **Separation of Mapping Logic:** Complex parsing, regex pattern searches, or structure manipulations remain isolated entirely within the adapter file.
* **Open-Closed compliance:** New third-party platforms can be adopted seamlessly simply by provisioning a fresh matching adapter layer without risking code breakages in core application layouts.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Identify the Class Mismatch Limitation
```bash
node 9-adapter-pattern/1-problem-without-adapter.js


2. Verify the Seamless Adapter Translation

node 9-adapter-pattern/2-solution-with-adapter.js