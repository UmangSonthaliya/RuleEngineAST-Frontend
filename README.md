# 🎨 Rule Engine AST - Frontend

Welcome to the **Rule Engine AST** frontend! This project is built using **React** and provides an intuitive interface for creating, combining, and evaluating rules. The frontend communicates with the backend via **axios** to manage rule interactions seamlessly.

 <!-- Add the correct path for your image -->

## 📋 Table of Contents
- [✨ Features](#-features)
- [⚙️ Prerequisites](#-prerequisites)
- [🔧 Installation](#-installation)
- [🔑 Configuration](#-configuration)
- [🛠 Running the Application](#-running-the-application)
- [🏗 Building the Application](#-building-the-application)
- [🚀 Deployment](#-deployment)
- [🛠 Tech Stack](#-tech-stack)

## ✨ Features

- 📝 **Create** new rules by entering rule strings.
- 🔗 **Combine** rules using logical operators (AND/OR).
- 📊 **Evaluate** rules based on user data input.
- 📡 **Interact** with the backend via RESTful APIs.

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white) **Node.js** (version 16 or above)
- ![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white) **npm** or ![yarn](https://img.shields.io/badge/-yarn-2C8EBB?logo=yarn&logoColor=white) **yarn** (for managing dependencies)

## 🔧 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/RuleEngineAST-Frontend.git
   cd RuleEngineAST-Frontend

<img width="785" alt="Screenshot 2024-10-20 at 4 29 47 PM" src="https://github.com/user-attachments/assets/40f9a639-49fa-4765-8ff1-5202fc433140">

Install dependencies:


npm install
or if using yarn:


yarn install
🔑 Configuration
The frontend communicates with the backend API. You need to configure the backend URL by setting it in an .env file in the root of your project. The default backend URL is:

env

REACT_APP_API_BASE_URL=https://ruleengineast-backend.onrender.com
Make sure to replace this URL with the appropriate backend URL if needed.

🛠 Running the Application
To start the application in development mode, run:


npm start
or if using yarn:


yarn start
The application will be available at http://localhost:3000 by default.

🏗 Building the Application
To build the application for production, use the following command:


npm run build
or if using yarn:

yarn build
This will create an optimized production build in the build/ directory, ready for deployment.

🚀 Deployment
You can deploy the frontend to services like Netlify, Vercel, or Render. If you're using Render, follow these steps:

Push your code to GitHub or another Git hosting service.
Create a new web service on Render by selecting your repository.
Set the build command:

npm install && npm run build
Set the publish directory to build/.
Deploy your app, and your frontend will be live.
🎨 UI Components
CreateRule: Allows users to create a rule by entering a name, rule string, and parameters.
CombineRules: Allows users to combine two rules using logical operators (AND/OR).
EvaluateRule: Evaluates a created rule against user-provided data.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
