# TaskManager

## 📌 Project Overview
TaskManager is a full-stack task management application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It allows users to efficiently manage their tasks with features such as creating, updating, deleting, and marking tasks as completed.

## 🛠️ Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **Version Control:** Git & GitHub

## 🚀 Features
- ✅ Create, update, and delete tasks
- ✅ Mark tasks as completed/pending
- ✅ Responsive UI with Material-UI or Tailwind CSS

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/CodeByKiran/To-do_app
cd TaskManager
```

### 2️⃣ Backend Setup (Node.js & Express)
```bash
cd backend
npm install  # Install dependencies
npm start    # Start the backend server
```

### 3️⃣ Frontend Setup (React.js)
```bash
cd frontend
npm install  # Install dependencies
npm start    # Start the frontend
```

### 4️⃣ Environment Variables
Create a `.env` file in the **backend** directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## 📜 API Endpoints (Backend)
```
| Method |      Endpoint    |       Description        |
|--------|------------------|--------------------------|
| GET    | `/api/tasks`     | Get all tasks for a user |
| POST   | `/api/tasks`     | Create a new task        |
| PUT    | `/api/tasks/:id` | Update a task            |
| DELETE | `/api/tasks/:id` | Delete a task            |
```

## 🤝 Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome! 🚀

## 📄 License
This project is licensed under the MIT License.

---
### 💡 Stay Connected
[GitHub](https://github.com/CodeByKiran) | [LinkedIn](www.linkedin.com/in/saikiransalani)

Enjoy coding! 😃

