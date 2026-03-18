<div align="center">

# 🐝 Buzzing
### Real-Time Public Transport Monitoring 

![Pre-Alpha](https://img.shields.io/badge/status-pre--alpha-yellow?style=for-the-badge&logo=github)
![Wasp](https://img.shields.io/badge/Wasp-Framework-orange?style=for-the-badge)
![Preact](https://img.shields.io/badge/Preact-673AB7?style=for-the-badge&logo=preact&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-DB-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

> A lightweight MVP for monitoring public transport logistics — architected with **Wasp Framework** and optimized with **Preact**.

</div>

---

## ✨ Core Features

| Feature | Technical Implementation |
|---|---|
| 🚌 **BusTrip Entity** | Schema-driven tracking of `lineName`, `scheduledTime`, and `status`. |
| 🔍 **Reactive Queries** | Optimized `getBusTrips` logic for real-time data fetching. |
| 🖥️ **Minimalist UI** | High-performance interface for seamless trip visualization. |

---

## 🐝 Why Wasp? (Strategic Choices)

In modern web development, the overhead of boilerplate code can often stifle innovation. The choice of **Wasp** for **Buzzing** was a deliberate architectural decision. As a student of Systems Analysis and Development, I aimed for:

* **Declarative Infrastructure:** Leveraging Wasp's DSL to manage auth, routing, and DB schemas, allowing me to focus strictly on the business logic of transport monitoring.
* **Full-stack Cohesion:** Seamless integration between Node.js and Prisma, reducing the "glue code" typically required in traditional stacks.
* **Performance at the Core:** By pairing Wasp's robust backend with **Preact** on the frontend, the application achieves a significantly smaller bundle size and faster TTI (Time to Interactive).

## 🛠️ The Tech Stack

- **Frontend:** **Preact** — chosen for its high performance and React-compatibility.
- **Backend:** **Node.js** — providing a scalable and non-blocking runtime.
- **ORM:** **Prisma** — ensuring type-safe database interactions.
- **Database:** **SQLite** — lightweight and perfect for localized MVP validation.

## 🚀 Development Roadmap

- [ ] **Advanced Schemas:** Implementing relational data for routes and stops.
- [ ] **Logic Enhancement:** Adding server-side validation for trip updates.
- [ ] **UI/UX Polishing:** Implementing a "Weirdcore/Y2K" inspired dashboard (work in progress).

---

## 🏁 Getting Started

**Prerequisites:** Node.js (LTS) and npm.

```bash
# 1. Install Wasp CLI
sudo npm install -g wasp
or
curl -sSL [https://get.wasp-lang.dev/installer.sh](https://get.wasp-lang.dev/installer.sh) | sh

# 2. Navigate to the project
cd your_project_folder

# 2. Launch Development Environment
wasp start

# Note for Windows Users: As Wasp is optimized for Unix-like environments, it is highly recommended to run this project via WSL2 (Windows Subsystem for Linux) for maximum stability.
```

> The app will spin up on `localhost` with an auto-generated database and UI. No extra config needed.

---

## 📝 Notes

- 🗄️ **Database:** SQLite — configured automatically by Wasp
- ⚛️ **Client:** Preact, a fast and lightweight alternative to React
- 🎯 **Scope:** Minimal design intended for live demo validation
---

<div align="center">

Made with 🐝 by [LeonardoRCS](https://github.com/LeonardoRCS)

</div>
