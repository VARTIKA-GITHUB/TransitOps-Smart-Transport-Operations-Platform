
# 🚛 TransitOps – Smart Transport Operations Platform

> A centralized fleet and transport management platform built to streamline vehicle operations, driver management, dispatching, maintenance tracking, fuel monitoring, and business analytics.**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![Express](https://img.shields.io/badge/Framework-Express-000000)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)

---

# 📌 Problem Statement

Many logistics companies still depend on spreadsheets and manual processes to manage their fleet operations. This often results in:

* Vehicle scheduling conflicts
* Underutilized fleet resources
* Missed maintenance schedules
* Expired driver licenses
* Poor fuel and expense tracking
* Limited operational visibility

**TransitOps** digitizes the complete transport lifecycle by providing a single platform for fleet managers, drivers, safety officers, and financial analysts.

---

# 🚀 Features

## 🔐 Authentication & Authorization

* Secure Login
* JWT Authentication
* Role-Based Access Control (RBAC)
* Protected Routes

---

## 📊 Dashboard

Displays real-time operational KPIs:

* Active Vehicles
* Available Vehicles
* Vehicles in Maintenance
* Active Trips
* Pending Trips
* Drivers on Duty
* Fleet Utilization

Includes filtering by:

* Vehicle Type
* Region
* Status

---

## 🚚 Vehicle Registry

Manage complete fleet information.

### Vehicle Details

* Registration Number
* Vehicle Model
* Vehicle Type
* Load Capacity
* Odometer
* Acquisition Cost
* Current Status

Supported Status:

* Available
* On Trip
* In Shop
* Retired

---

## 👨‍✈️ Driver Management

Maintain complete driver profiles.

### Driver Information

* Name
* License Number
* License Category
* License Expiry
* Contact Number
* Safety Score
* Status

Driver Status:

* Available
* On Trip
* Off Duty
* Suspended

---

## 📦 Trip Management

Create and monitor trips from dispatch to completion.

Each trip contains:

* Source
* Destination
* Assigned Driver
* Assigned Vehicle
* Cargo Weight
* Planned Distance

Trip Lifecycle:

Draft → Dispatched → Completed → Cancelled

---

## 🛠 Maintenance Management

Track maintenance records for every vehicle.

Features include:

* Create Maintenance Log
* Vehicle Status Updates
* Automatic Dispatch Restriction
* Maintenance History

---

## ⛽ Fuel & Expense Tracking

Record:

* Fuel Consumption
* Fuel Cost
* Toll Expenses
* Maintenance Cost

Automatically calculates:

* Total Operational Cost
* Vehicle Running Cost

---

## 📈 Reports & Analytics

Interactive analytics dashboard showing:

* Fleet Utilization
* Fuel Efficiency
* Vehicle ROI
* Operational Cost
* Maintenance Cost Trends

Supports:

* CSV Export

---

# ✅ Business Rules Implemented

✔ Unique Vehicle Registration Numbers

✔ Retired vehicles cannot be dispatched

✔ Vehicles under maintenance cannot be dispatched

✔ Drivers with expired licenses cannot be assigned

✔ Suspended drivers cannot be assigned

✔ Vehicle cannot be assigned to multiple trips

✔ Driver cannot be assigned to multiple trips

✔ Cargo weight validation against vehicle capacity

✔ Automatic vehicle status updates

✔ Automatic driver status updates

✔ Maintenance automatically blocks dispatch

✔ Completing maintenance restores vehicle availability

---

# 👥 User Roles

### 🚛 Fleet Manager

* Manage Vehicles
* Manage Maintenance
* Monitor Fleet Utilization

---

### 👨‍✈️ Dispatcher

* Create Trips
* Assign Drivers
* Assign Vehicles
* Monitor Deliveries

---

### 🛡 Safety Officer

* Verify Driver Licenses
* Track Safety Scores
* Monitor Compliance

---

### 💰 Financial Analyst

* Expense Tracking
* Fuel Analytics
* Profitability Reports
* ROI Analysis

---

# 🏗 Tech Stack

### Frontend

* React.js
* Tailwind CSS / Bootstrap
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT
* bcrypt

### Charts

* Chart.js / Recharts

### Export

* CSV
* PDF

---

# 📂 Project Structure

```
TransitOps/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── screenshots/
├── README.md
└── package.json
```

---

# 🔄 Workflow

1. Register Vehicle
2. Register Driver
3. Create Trip
4. Validate Cargo Capacity
5. Dispatch Trip
6. Update Driver & Vehicle Status
7. Complete Trip
8. Record Fuel Usage
9. Generate Reports
10. Schedule Maintenance

---


# 🔮 Future Improvements

* GPS Vehicle Tracking
* Live Map Integration
* Route Optimization
* Predictive Maintenance using AI
* Fuel Theft Detection
* Driver Performance Analytics
* Push Notifications
* Mobile Application

---

# 💡 Why TransitOps?

TransitOps transforms traditional fleet management into a smart, data-driven platform by automating dispatching, maintenance scheduling, compliance checks, and operational analytics. It minimizes manual effort, improves fleet utilization, reduces operational costs, and enables better decision-making through real-time insights.

---

# 👨‍💻 Team

@VARTIKA-GITHUB
@heyimtanya
@Vartika-Mishra13
@Tanmay390

Developed with ❤️ to simplify transport operations through modern web technologies.

---

# ⭐ If you found this project useful

Give this repository a ⭐ and support the project!
