# Real-time Chat App (Socket.io + React + Node.js + Kubernetes)

## 🚀 Project Overview
This project is a **Real-time Chat Application** built using **React (Frontend)** and **Node.js with Socket.io (Backend)**. The app allows users to **chat in real-time**, store messages, and is **fully deployed on Kubernetes** for scalability and fault tolerance.

---

## 📌 Features
- **Real-time messaging** using **WebSockets (Socket.io)**
- **Modern UI with responsive design**
- **User authentication (Enter Name before chat)**
- **Kubernetes Deployment** using Docker & Helm
- **Scalable backend with Kubernetes LoadBalancer**
- **Frontend served via Nginx inside a container**

---

## 🛠️ Tech Stack
**Frontend:** React, Socket.io-client, Nginx  
**Backend:** Node.js, Express, Socket.io  
**Deployment:** Docker, Kubernetes (K3s), Helm  
**Version Control:** Git & GitHub  

---

## 📁 Project Structure
```
chat-app/
│── client/               # Frontend (React)
│── server/               # Backend (Node.js + Socket.io)
│── k8s/                  # Kubernetes Manifests
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│── Dockerfile (Frontend & Backend)
│── README.md
```

---

## 🏗️ Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app
```

### **2️⃣ Backend Setup**
```sh
cd server
npm install
node server.js
```
Server runs on: **http://localhost:3001**

### **3️⃣ Frontend Setup**
```sh
cd ../client
npm install
npm run dev
```
App runs on: **http://localhost:5173**

---

## 📦 Containerization & Deployment

### **1️⃣ Build & Push Docker Images**
```sh
# Backend
cd server
docker build -t your-dockerhub-username/chat-backend .
docker push your-dockerhub-username/chat-backend

# Frontend
cd ../client
docker build -t your-dockerhub-username/chat-frontend .
docker push your-dockerhub-username/chat-frontend
```

### **2️⃣ Deploy to Kubernetes**
```sh
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl get pods
kubectl get svc
```

Access the app via **LoadBalancer IP** or **Ingress**.

---

## 🎯 Future Enhancements
✅ Add **MongoDB** for chat history storage  
✅ Implement **User Authentication (Google/GitHub Login)**  
✅ Set up **CI/CD Pipeline (GitHub Actions + Kubernetes)**  

---

## 🤝 Contributing
Feel free to **fork** this repo, create a new branch, and submit a **pull request**! 🎉

---

## 📝 License
This project is licensed under the **MIT License**.

