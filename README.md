<div align="center">

# 🐝 Buzzing
### Public Transport Monitoring

![Pre-Alpha](https://img.shields.io/badge/status-pre--alpha-yellow?style=for-the-badge&logo=github)
![Wasp](https://img.shields.io/badge/Wasp-Framework-orange?style=for-the-badge)
![Preact](https://img.shields.io/badge/Preact-673AB7?style=for-the-badge&logo=preact&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-DB-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

> A minimal MVP for monitoring public transport bus trips — built with **Wasp Framework** and **React**.

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🚌 **BusTrip Entity** | Tracks `lineName`, `scheduledTime`, and `status` |
| 🔍 **getBusTrips Query** | Fetches all trips from the database |
| 🖥️ **Simple UI** | Clean list display of live bus trips |

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
- ⛔ **Limitations** Wasp is a framework designed for Linux subsystems, but it is (in theory) possible to work around this by using the WSL compatibility layer.
---

<div align="center">

Made with 🐝 by [LeonardoRCS](https://github.com/LeonardoRCS)

</div>
