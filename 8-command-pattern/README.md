# 8. The Command Pattern 📜

This folder demonstrates the **Command Pattern** in JavaScript, showcasing how abstracting methods into independent execution objects decouples a user interface from its core device logic.

---

## 🧐 The Core Problem (Without the Command Pattern)

In standard object invocation models, UI elements or event trigger routines invoke receiver operations directly by name.

In our remote control scenario (`1-problem-without-command.js`):
* The trigger console (`SimpleRemoteControl`) is locked directly to specific method signatures of internal devices.
* Swapping button actions at runtime requires restructuring hardcoded scripts.
* Building higher-tier event logic—such as tracking a state log or introducing a global "Undo" operations loop—is mathematically impossible because the actions do not leave an object-oriented memory trail.

## 🚀 The Solution (With the Command Pattern)

The **Command Pattern** solves this problem by encapsulating all data needed to run an operation inside a self-contained command object.

In our object-wrapped scenario (`2-solution-with-command.js`):
* **Decoupling:** The caller application layer knows absolutely nothing about receiver code. It only targets a standard `.execute()` interface.
* **Undo/Redo Architecture:** Because commands carry native logic patterns for reversing their actions (`.undo()`), tracking system states over a memory history stack becomes trivial.
* **Queueing and Scheduling:** Commands can be passed as variables, stacked into micro-execution queues, or delayed until specific intervals are reached without risking data corruption.

---

## 🛠️ How to Run and Test

Execute the scripts using Node.js inside your terminal:

### 1. Run the Rigid Automation Script
```bash
node 8-command-pattern/1-problem-without-command.js

2. Run the Flexible Command History Script
node 8-command-pattern/2-solution-with-command.js