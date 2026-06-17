# 🩺 DocAppoint – Smart Doctor Appointment and Healthcare Management System

DocAppoint is a modern, responsive, and dynamic web application built with Next.js to simplify the process of booking doctor appointments. It bridges the gap between doctors and patients by providing real-time scheduling, profile management, and a seamless healthcare experience.

🔗 **Live Site URL:** [https://doc-appoint-ecru.vercel.app]

---

## ✨ Key Features & Functionalities

Here is what makes DocAppoint an efficient healthcare platform:

*   **Smart Dynamic Booking System:** Patients can seamlessly book, update, and manage appointments. The application handles time-slot conflicts dynamically, ensuring no double-booking occurs for any doctor.
*   **Top-Rated Doctor Highlights:** Features an advanced filtering and sorting mechanism on the home page that showcases the top 3 highest-rated medical specialists using real-time database aggregation.
*   **Intuitive Client-Side Forms with HeroUI:** Integrated with `@heroui/react` to provide polished, interactive modal forms for smooth appointment modifications and flawless profile updates.
*   **Robust Backend & Secure Data Handling:** Built with a Node.js/Express.js backend and MongoDB, utilizing specific data types (like Int32 for fees and floating numbers for ratings) to guarantee precise search queries and data integrity.
*   **Real-time UI Syncing & Clean Navigation:** Utilizes Next.js App Router capabilities (`router.refresh()`) to instantly update UI states upon data modifications (such as updating or deleting an appointment) without full page reloads, accompanied by absolute path routing for broken-link prevention.

---

## 🛠️ Tech Stack Used

*   **Frontend:** Next.js (App Router), React, Tailwind CSS, `@heroui/react`, React Icons
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Authentication:** Better Auth / authClient

---
