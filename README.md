# Kavach-X: Intelligent Crane Safety System

### Team Mahakumbh
- **Team Leader:** Subrata Dhibar
- **Team Members:** Chandrakanta Jena, Raja Babu Sahu

🔗 **Visit the Website:** [Kavach-X Dashboard](https://team-mahakumbh-kavachx.netlify.app/)

## 🚀 Overview
Kavach-X is an AI-powered, IoT-integrated safety system designed for industrial cranes to prevent accidents by detecting obstacles, ensuring geofencing compliance, and triggering emergency responses. It leverages edge computing, LIDAR, ultrasonic sensors, AI vision models, and IoT connectivity to enhance operational safety and efficiency.

## 🎯 Problem Statement
Industrial cranes pose severe risks to workers and equipment due to blind spots, lack of obstacle awareness, and human errors. Kavach-X provides real-time hazard detection and automated safety mechanisms to minimize accidents and improve workplace safety.

---

## 🛠️ Tech Stack
### **Hardware Components:**
- **LIDAR Sensors:** For high-precision distance measurement.
- **Ultrasonic Sensors:** For short-range obstacle detection.
- **GPS Modules:** To define geofenced hazardous zones.
- **Cameras:** AI-powered video feeds for object detection.
- **Edge Computing Device:** NVIDIA Jetson Nano or Raspberry Pi 4 for real-time processing.
- **Crane Control Interface:** Emergency braking and alert mechanisms.
- **Operator Dashboard:** Web-based interface displaying live safety insights.

### **Software Components:**
- **AI/Computer Vision:** YOLO, Faster R-CNN for hazard detection.
- **IoT Platform:** MQTT, AWS IoT Core for real-time data streaming.
- **Cloud Storage & Analytics:** AWS S3, Google Cloud for storing historical data.
- **Blockchain (Optional):** Secure logging of safety events.
- **AR Integration:** Real-time hazard overlays for operators.
- **Programming Languages:** Python, C++, JavaScript (React, Tailwind CSS).

---

## 🔄 Workflow
1. **Data Collection:** LIDAR, GPS, cameras, and ultrasonic sensors collect environmental data.
2. **Processing:** AI models analyze the data locally on edge devices.
3. **Hazard Detection:** Objects and obstacles are identified, and risk levels are assessed.
4. **Automated Response:** Emergency brakes, audio-visual alarms, and slowdowns are triggered.
5. **Remote Monitoring:** Data is sent to the cloud for live monitoring and analytics.
6. **Operator Assistance:** The dashboard provides real-time alerts and AR guidance.

---

## 📊 Ultimate Dashboard Features
✅ **Real-Time Proximity Monitoring** – Live LIDAR, GPS, and AI-powered detection.
✅ **Geofence Status & Alerts** – Notifications for restricted zone breaches.
✅ **AI-Powered Hazard Detection** – Identification of workers, vehicles, and dynamic objects.
✅ **Automated Safety Actions Log** – Records slowdowns, stoppages, and alerts.
✅ **Operator Assistance Panel** – AR-enhanced guidance and predictive warnings.
✅ **IoT & Cloud Insights** – Historical analytics and compliance tracking.
✅ **Blockchain-Based Data Integrity (Optional)** – Secure logging of safety incidents.

---

## 🏗️ Project Implementation
### **Phase 1: Prototype Development**
- Mounting sensors and setting up the edge device.
- Creating a basic operator dashboard.

### **Phase 2: AI & IoT Integration**
- Training YOLO/Faster R-CNN models for hazard detection.
- Implementing MQTT for real-time data transmission.

### **Phase 3: Full System Deployment**
- Integrating all hardware and software components.
- Testing in industrial environments.

### **Phase 4: Field Testing & Refinement**
- Deploying in real crane operations.
- Gathering feedback and optimizing system performance.

---

## 🏆 How Kavach-X Tackles the Problem
By utilizing advanced AI and IoT technology, Kavach-X ensures **real-time hazard detection**, **proximity monitoring**, and **automated safety measures**. The system minimizes **human error risks**, enhances **crane operation visibility**, and creates a **safer work environment** through predictive analytics and AR-based assistance.

---

## 📌 Installation & Setup
To run this project locally:
```bash
# Clone the repository
git clone https://github.com/team-mahakumbh/kavach-x.git
cd kavach-x

# Install dependencies
npm install  # For frontend (React, Tailwind CSS)

# Start the development server
npm run dev
```
### **Frontend (Completed ✅)**
- **Framework:** Vite + React  
- **Styling:** Tailwind CSS  

### **Backend & AI Model (In Progress 🚧)**
- **Deep Learning:** YOLO, Faster R-CNN (for hazard detection)
- **IoT Sensors:** LIDAR, Ultrasonic, GPS (for real-time monitoring)
- **Edge Computing:** NVIDIA Jetson Nano / Raspberry Pi 4
- **Data Streaming:** MQTT, AWS IoT Core
- **Database & Cloud:** Firebase, AWS S3, Google Cloud
- **Blockchain (Optional):** Secure logging of safety events

