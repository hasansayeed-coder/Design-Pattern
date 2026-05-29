# 10. The Proxy Pattern 👤💳

This folder demonstrates the **Proxy Pattern** in JavaScript, showing how to create an intermediary structural wrapper to intercept, cache, and control access to resource-intensive background operations.

---

## 🧐 The Core Problem (Without the Proxy Pattern)

Directly querying heavy components, database queries, or third-party web endpoints every single time data is requested introduces structural vulnerabilities.

In our cryptocurrency lookup scenario (`1-problem-without-proxy.js`):
* Duplicate requests for static or slowly changing assets result in redundant, expensive network overhead.
* The system is exposed to rate-limiting blocks or ballooning transaction costs from external providers.
* Modifying the core API handler class to support performance caching mechanisms violates the Single Responsibility Principle.

## 🚀 The Solution (With the Proxy Pattern)

The **Proxy Pattern** introduces a substitute placeholder class that mirrors the interface of the original component while implementing localized control access middleware.

In our proxy-wrapped scenario (`2-solution-with-proxy.js`):
* **Request Interception (Caching):** The proxy evaluates incoming params against an internal dictionary cache (`this.cache`), bypassing expensive computation layers completely upon a cache hit.
* **Lazy Initialization:** The proxy delays the initialization of heavy network resources or database pools until a client actually makes their very first functional call.
* **Security & Validation Wrapper:** Beyond caching, proxies are highly leveraged in enterprise JavaScript to log user requests, validate incoming security authentication tokens, or throttle brute-force execution loops seamlessly.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Observe the Redundant Network Logs
```bash
node 10-proxy-pattern/1-problem-without-proxy.js



2. Verify the Intercepted Cache Optimizations

node 10-proxy-pattern/2-solution-with-proxy.js