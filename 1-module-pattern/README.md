# 1. The Module Pattern 📦

This folder demonstrates the **Module Pattern** in JavaScript, contrasting a highly vulnerable global-scope implementation against a secure, encapsulated solution.

---

## 🧐 The Core Problem (Without the Module Pattern)

In standard JavaScript, variables declared in the global scope are accessible by any other script or third-party library running on the page. 

In our banking scenario (`1-problem-without-module.js`):
* The core application data (`let balance`) is completely exposed to the public window.
* External or malicious code can easily bypass business rules (like checking for sufficient funds) and manipulate data directly (`balance = 999999`).
* This breaks **data integrity** and makes the application incredibly fragile and insecure.

## 🚀 The Solution (With the Module Pattern)

The **Module Pattern** solves this by leveraging an **Immediately Invoked Function Expression (IIFE)** and JavaScript **closures** to create private data scopes.

In our secure scenario (`2-solution-with-module.js`):
* **Encapsulation:** The `balance` variable is locked inside the function block. It cannot be read or written to from the outside world directly.
* **Public API:** We explicitly choose what to return to the user (`deposit`, `withdraw`, `getBalance`). 
* **Data Protection:** Any attempt to explicitly alter `BankAccount.balance = 999999` fails silently because it only creates a detached property on the wrapper object, leaving the actual internal state completely safe and sound.

---

## 🛠️ How to Run and Test

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. Open your terminal, navigate to the project root directory, and execute the files below:

### 1. View the Vulnerable System
```bash
node 1-module-pattern/1-problem-without-module.js

Observe how easily the balance is hijacked and tampered with in the console logs.

2. View the Secure Module Solution

```bash
node 1-module-pattern/2-solution-with-module.js

Observe how the malicious code fails to alter the actual internal account balance, keeping your program's business logic perfectly intact.

💡 Key Takeaways for Production
Data Privacy: Keep internal states hidden unless they absolutely must be exposed.

Namespace Safety: Reduces global namespace pollution, avoiding naming collisions across large scale engineering teams.