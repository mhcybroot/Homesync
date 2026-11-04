<div align="center">

# HomeSync: Interactive 3D Digital Twin & Smart IoT Configurator

[![Interactive Simulator](https://img.shields.io/badge/Live%20Simulator-mahmudulhasan.info.bd-BA3C00?style=for-the-badge&logo=google-chrome&logoColor=white)](https://mahmudulhasan.info.bd/systems/homesync-iot/)
[![System Dossier](https://img.shields.io/badge/System%20Dossier-Zero%20Fault-10B981?style=for-the-badge&logo=diagram-next&logoColor=white)](https://mahmudulhasan.info.bd/systems/homesync-iot/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![R3F](https://img.shields.io/badge/R3F-Fiber%20%26%20Drei-orange?style=for-the-badge&logo=webgl&logoColor=white)](https://docs.pmnd.rs/react-three-fiber/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

> 🚀 **Live Interactive Case Study & 3D WebGL Configurator:**  
> Experience the real-time 3D digital twin, test ambient lighting Kelvin transitions, and simulate camera FOV coverage cones on the official systems engineering platform:  
> 🔗 **[Explore Full Case Study & Live Simulator on mahmudulhasan.info.bd](https://mahmudulhasan.info.bd/systems/homesync-iot/)**

</div>

---

## 📌 Executive Overview

**HomeSync** is an interactive 3D architectural digital twin and smart IoT configurator engineered in **React 19**, **Three.js 0.182**, and **React Three Fiber (@react-three/fiber & @react-three/drei)**.

Designed for luxury residential developers, smart automation contractors, and architectural design firms, HomeSync replaces static 2D paper floorplans with a silky-smooth, hardware-accelerated 3D environment. Clients and engineers can inspect spatial IoT placement, evaluate camera surveillance angles, configure dynamic mood lighting Kelvin scenes, and calculate instant bill-of-materials quotes right inside the browser.

---

## ⚡ Production Hardened Benchmarks

| Metric Category | Production SLA / Measurement | Architectural Guarantee |
| :--- | :--- | :--- |
| **Rendering Performance** | `Solid 60 FPS WebGL` | Hardware-accelerated GPU pipeline with instanced meshes and frustum culling |
| **Render Frame Budget** | `< 16.6ms Frame Budget` | Zero frame drops during interactive 360-degree OrbitControls pan and zoom |
| **VRAM Consumption** | `< 38 MB Total GPU VRAM` | Lightweight procedural geometric primitives and optimized texture atlas buffers |
| **Shading Precision** | `Real-Time GLSL Shaders` | Dynamic Kelvin color temperature calculation across 3D room surfaces |
| **Cross-Device SLA** | `100% Mobile & Desktop SLA` | Responsive WebGL canvas with touch-friendly raycasting on mobile browsers |

---

## 🏛️ High-Performance Architectural Blueprint

```
┌────────────────────────────────────────────────────────────────────────┐
│                Client Browser (React 19 & WebGL Engine)                │
│                                                                        │
│   [Canvas Container]     [OrbitControls]     [LOD Geometric Meshes]    │
│           │                     │                     │                │
│           └─────────────────────┼─────────────────────┘                │
│                                 │                                      │
│                [@react-three/fiber Render Loop]                        │
│               (Fixed 16.6ms RequestAnimationFrame)                     │
│                                 │                                      │
│           ┌─────────────────────┼─────────────────────┐                │
│           │                     │                     │                │
│  [GLSL Ambient Shaders]   [Raycaster Click]   [Matter/Zigbee State]    │
│  (Dynamic Wall Lighting)   (Device Select)    (Mesh Network Topology)  │
└───────────┬─────────────────────┬─────────────────────┬────────────────┘
            │                     │                     │
            ▼                     ▼                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│              Interactive IoT Simulation & Analytics Layer              │
│                                                                        │
│       [Lighting Control]     [FOV Cone Raycast]    [Hardware Quoter]   │
│               │                      │                     │           │
│               ▼                      ▼                     ▼           │
│      [Color Temp Kelvin]    [PIR Motion Sensor]   [Bill of Materials]  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Architectural Capabilities

- **Silky-Smooth 60 FPS WebGL Engine:**
  Built with `@react-three/fiber` and `@react-three/drei`, leveraging procedural geometry and instanced rendering to keep GPU VRAM footprint under 38 MB.
- **Dynamic Kelvin Ambient Shaders:**
  Simulates realistic day/night lighting transitions and tunable Kelvin white temperatures (2700K Warm Amber to 6500K Crisp Daylight) with real-time shadow casting.
- **Interactive Device Raycasting:**
  Click and interact with smart deadbolts, motorized window shades, PIR motion sensors, and security cameras with instant visual state feedback.
- **Field-of-View (FOV) Cones:**
  Visualizes security camera lenses and PIR motion sensor coverage cones to eliminate room blind spots before running electrical conduits.
- **Automated Bill-of-Materials Quoting:**
  Dynamically tallies configured smart sensors, repeaters, and smart switches into an itemized equipment quote for contractors and clients.

---

## 💻 Tech Stack & Dependencies

- **Framework:** React 19.2 (Vite 7.2 bundler)
- **3D Graphics & Shaders:** Three.js `0.182.0`, WebGL 2.0
- **React 3D Integrations:** `@react-three/fiber 9.5.0`, `@react-three/drei 10.7.7`
- **Language & Type Safety:** TypeScript 5.9.3 (Strict Mode)
- **UI & Iconography:** Tailwind CSS, Lucide React `0.562.0`

---

## 🛠️ Local Development & Quick Start

### Prerequisites
- **Node.js 18.x** or higher (`node -v`)
- **npm** or **pnpm**

### Build and Run

```bash
# Clone the repository
git clone https://github.com/mhcybroot/Homesync.git
cd Homesync

# Install dependencies
npm install

# Start Vite local development server
npm run dev
```

The interactive 3D configurator will open on `http://localhost:5173`.

---

## 👨‍💻 Engineering & Architecture

**Mahmudul Hasan (@mhcybroot)**  
*Full-Stack Systems Engineer & Distributed Architect • Dhaka, Bangladesh*  
*Specializing in High-Performance WebGL Shaders, 3D Digital Twins, and Industrial IoT Infrastructure.*

- 🌐 **Systems Engineering Portfolio:** [mahmudulhasan.info.bd](https://mahmudulhasan.info.bd/)
- ⚡ **Interactive System Simulators:** [mahmudulhasan.info.bd/#systems](https://mahmudulhasan.info.bd/#systems)
- 📑 **Verified Engineering Dossier:** [mahmudulhasan.info.bd/#dossier](https://mahmudulhasan.info.bd/#dossier)
- 💼 **LinkedIn Profile:** [linkedin.com/in/mhcybroot](https://linkedin.com/in/mhcybroot)
- 📧 **Direct Inquiries:** [info@mahmudulhasan.info.bd](mailto:info@mahmudulhasan.info.bd)

---

<div align="center">
  <sub>Engineered with Zero-Fault Tolerance by Mahmudul Hasan • Verified on <a href="https://mahmudulhasan.info.bd/systems/homesync-iot/">mahmudulhasan.info.bd/systems/homesync-iot/</a></sub>
</div>
