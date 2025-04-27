# Spring Boot WebSocket Chat App

This is a simple real-time chat application built with **Spring Boot** and **WebSocket** technology.  
It allows multiple users to chat instantly through a live WebSocket connection.

You can checkout the live version of the application at 

![image](https://github.com/user-attachments/assets/1bc9a2c4-cff4-46bf-869f-2322a512a301)

![image](https://github.com/user-attachments/assets/0020fb0f-a3fc-403b-9f18-25d2449e5731)

---

## 🚀 Tech Stack

- **Backend**:  
  - Java 17
  - Spring Boot
  - Spring WebSocket
  - STOMP messaging protocol
- **Frontend**:
  - React.js
  - SockJS (fallback support for WebSocket)
- **Build Tools**:
  - Maven Wrapper (`./mvnw`)
- **Deployment**:
  - Render.com
  - Java `.jar` application

---

## ✨ Features

- Real-time message broadcasting
- Multiple users can join the chat room
- WebSocket + STOMP messaging integration
- Lightweight and fast
- Simple UI to demonstrate WebSocket communication

---


## Requirements

1. Java - 11

2. Maven - 3.x.x

## Steps to Setup

**1. Clone the application**

**2. Build and run the app using maven**

```bash
cd spring-boot-websocket-chat-app
mvn package
java -jar target/websocket-demo-0.0.1-SNAPSHOT.jar
```

Alternatively, you can run the app directly without packaging it like so -

```bash
mvn spring-boot:run
```

