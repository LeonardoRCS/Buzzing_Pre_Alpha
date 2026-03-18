<div align="center">

# 🐝 Buzzing
### Public Transport Monitoring

![Pre-Alpha](https://img.shields.io/badge/status-pre--alpha-yellow?style=for-the-badge&logo=github)
![Wasp](https://img.shields.io/badge/Wasp-Framework-orange?style=for-the-badge)
![Preact](https://img.shields.io/badge/Preact-673AB7?style=for-the-badge&logo=preact&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-DB-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

> A minimal MVP for monitoring public transport bus trips — built with **Wasp Framework** and **Preact**.

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🚌 **BusTrip Entity** | Tracks `lineName`, `scheduledTime`, and `status` |
| 🔍 **getBusTrips Query** | Fetches all trips from the database |
| 🖥️ **Simple UI** | Clean list display of live bus trips |

---

## 🐝 Why Wasp? (Motivation and Technical Choices)

Unlike traditional frameworks where the integration between frontend, backend, and database can become a tangled mess of *boilerplates*, the choice of **Wasp** for the development of **Buzzing** was strategic. As an academic in Systems Analysis and Development, I sought a solution that would allow:

- **High-Level Abstraction:** Wasp allows focusing on business logic while managing authentication infrastructure and routes declaratively.

- **Full-stack Efficiency:** The cohesion between React, Node.js, and Prisma drastically reduces friction in development.

- **Native Security:** Robust authentication implementation with reduced effort, allowing greater focus on data security and user experience.

## 🛠️ What comprises the Buzzing ecosystem?

The project is being built on modern development pillars:

- **Frontend:** React for a reactive and dynamic interface.

- **Backend:** Node.js, ensuring performance and scalability.

- **ORM:** Prisma, for typed and secure data manipulation.

- **Language:** TypeScript, ensuring code integrity through static typing.

## 🚀 Project Status: Pre-Alpha

Currently, **Buzzing** is in the early stages of development (*Pre-Alpha*). Upcoming milestones include:

- [ ] Database schema refinement.

- [ ] Implementation of custom CRUD logic.

- [ ] Integration of custom visual styles.

---
*Note: This repository reflects my academic and practical journey in Full-stack Development.*
Enviar feedback
Resultados de tradução disponíveis

---

## 🚀 Getting Started

**Prerequisites:** Node.js and npm installed.

```bash
# 1. Install Wasp CLI
sudo npm install -g wasp

# 2. Navigate to the project
cd Buzzing_Pre_Alpha

# 3. Start the app
wasp start
```

> The app will spin up on `localhost` with an auto-generated database and UI. No extra config needed.

---

## 📝 Notes

- 🗄️ **Database:** SQLite — configured automatically by Wasp
- ⚛️ **Client:** Preact, a fast and lightweight alternative to React
- 🎯 **Scope:** Minimal design intended for live demo validation
- ⛔ **Limitations:** Wasp is a framework designed for Linux subsystems, but it is (in theory) possible to work around this by using the WSL compatibility layer on Windows enviroments.
---

<div align="center">

Made with 🐝 by [LeonardoRCS](https://github.com/LeonardoRCS)

</div>
