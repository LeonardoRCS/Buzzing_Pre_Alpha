<div align="center">

# 🐝 Buzzing
### Public Transport Monitoring

![Pre-Alpha](https://img.shields.io/badge/status-pre--alpha-yellow?style=for-the-badge&logo=github)
![Wasp](https://img.shields.io/badge/Wasp-Framework-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-UI-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-336791?style=for-the-badge&logo=postgresql&logoColor=white)

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
npm install -g wasp

# 2. Navigate to the project
cd Buzzing_Pre_Alpha

# 3. Start the app
wasp start
```

> The app will spin up on `localhost` with an auto-generated database and UI. No extra config needed.

---

## 📝 Notes

- 🗄️ **Database:** PostgreSQL — configured in `main.wasp`
- ⚛️ **Client:** React (Wasp default) — Preact requires additional configuration
- 🎯 **Scope:** Minimal design intended for live demo validation

---

<div align="center">

Made with 🐝 by [LeonardoRCS](https://github.com/LeonardoRCS)

</div>
