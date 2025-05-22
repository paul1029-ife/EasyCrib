# 🏠 EasyCrib

**EasyCrib** is a platform designed to help students and individuals easily find and secure accommodation close to their school. The platform streamlines the search and booking process for school-area housing by offering a simple, fast, and user-friendly experience.

---

## 🚀 Features

- Browse available accommodations near schools
- Filter and search based on distance, price, and availability
- Secure bookings and get real-time status updates
- Smooth and responsive interface optimized for performance

---

## 🛠️ Tech Stack

**Frontend:**

- [Next.js](https://nextjs.org/)
- [ShadCN UI](https://ui.shadcn.dev/)
- Tailwind CSS

**Backend:**

- [Spring Boot](https://spring.io/projects/spring-boot)
- MongoDB (or your chosen database)
- REST API

---

## 🗂️ Project Structure

```

easycrib/
├── frontend/   # Next.js + Shadcn frontend
└── backend/    # Spring Boot backend

````

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- Java 17 or later
- Maven
- MongoDB (local or cloud)
- Git

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/easycrib.git
cd easycrib
````

---

### 2. Run the Backend (Spring Boot)

#### Navigate to the backend folder:

```bash
cd backend
```

#### Configure your application:

* Rename `application.example.properties` to `application.properties`
* Set your MongoDB connection and other environment-specific variables.

#### Build and run the app:

```bash
./mvnw spring-boot:run
```

> The backend will run on `http://localhost:8080` by default.

---

### 3. Run the Frontend (Next.js + Shadcn)

#### Navigate to the frontend folder:

```bash
cd ../frontend
```

#### Install dependencies:

```bash
npm install
```

#### Configure environment variables:

* Create a `.env.local` file in the root of the `frontend` directory.
* Add the following (adjust as necessary):

```
NEXT_PUBLIC_API_URL=http://localhost:8080
```

#### Run the development server:

```bash
npm run dev
```

> The frontend will run on `http://localhost:3000`

---

## 🧪 Testing

* Use Postman or any REST client to test the API endpoints (`http://localhost:8080/api/...`)
* Access the frontend at `http://localhost:3000` and browse the UI

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and new features.

---

## 📬 Contact

Built with 💙 by Group 13.
For inquiries or feedback, reach out via \[[group13@gmail.com](mailto:paul.agbogun@gmail.com)] or open an issue.

```

---
