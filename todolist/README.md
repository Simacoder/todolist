
# Angular Todo List Application

## Table of Contents

- [Angular Todo List Application](#angular-todo-list-application)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [License](#license)
- [AUTHOR](#author)

## Overview

The Angular Todo List Application is a simple task management tool that allows users to create, update, and delete tasks. It includes user authentication and registration, ensuring that each user's tasks are private and secure. Users can set task priorities, deadlines, and mark tasks as completed. The app highlights overdue tasks for easy tracking.

## Features

- **User Authentication**: Login and registration functionality with email and password.
- **Protected Routes**: Ensure that only authenticated users can access the todo list.
- **Task Management**: Create, update, and delete tasks.
- **Priority Levels**: Set priorities (High, Medium, Low) with different color indicators.
- **Due Date Management**: Select due dates for tasks, with overdue tasks highlighted.
- **Persistent Data Storage**: Store user details and tasks in the browser's local storage.
  
## Technologies Used

- **Angular**: Frontend framework for building the app.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **HTML & CSS**: For creating user interfaces.
- **JSON Server** (optional): For simulating a backend if needed for data storage.

## Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **Angular CLI**: Install using the command:

  ```bash
  npm install -g @angular/cli
    ```

# Setup

1. **Clone the Repository:**
   
   ```bash
        git clone https://github.com/simacoder/todo-app.git
        cd todo-app
    ```
2. **Install Dependencies:**
   
   ```bash
        npm install
    ```
3. **Start the Development Server:**
   
   ```bash
        ng serve
    ```
    The app will run on `http://localhost:4200`.
4. **Run JSON Server**
   
   ```bash
        json-server --watch db.json
    ```
    This will simulate a backend server running on `http://localhost:3000`.


# Usage

1. **Registration:**

   - Open the app in your browser and navigate to the registration page.
   - Enter your name, email, and password to create a new account

2. **Login:**

    - After registration, use the login page to authenticate with your email and password.

3. **Managing Tasks:**

    - Create new tasks by filling out the task form.
    - Set a title, priority, and due date for each task.
    - Edit or delete tasks as needed.
    -Mark tasks as completed when done.

4. **Highlighting Overdue Tasks:**

    - Any task past its due date will be highlighted in red.
  
# Project Structure

```bash
    todo-app/
│
├── src/
│   ├── app/
│   │   ├── login/             # Login component
│   │   ├── signup/          # Registration component
│   │   ├── todo/              # Todo list component
│   │   ├── auth.guard.ts      # Auth guard for protecting routes
│   │   ├── app-routing.module.ts # App routing configuration
│   │   └── ...                # Other Angular files (services, models, etc.)
│   ├── assets/                # Static assets (images, icons)
│   └── environments/          # Environment configuration
│
├── db.json                    # JSON server data (if using JSON server)
├── angular.json               # Angular configuration
├── package.json               # NPM dependencies and scripts
└── README.md                  # Readme file


```

# Contributing

1. **Fork the Repository**
2. **Create a New Branch:**

    ```bash
        git checkout -b feature/your-feature-name

    ```

# License

- This project is licensed under the MIT License.
  
# AUTHOR

- Simanga Mchunu
