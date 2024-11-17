# Contact Management - Mini Feature of a CRM

### Description

Project Name is a web application designed to [briefly explain the main purpose of the project]. The project is built using [technologies used: React, Node.js, MongoDB, etc.], and it enables users to [mention key features like managing contacts, shopping cart, etc.]. The app is designed to be scalable, responsive, and easy to maintain, making it suitable for [target audience or use case].

## Major Technical Decisions

### Tech Stack:

<i><b>Frontend:</i></b> React (with hooks and functional components) for a modern, efficient, and scalable UI.
<i><b>Backend:</i></b> Node.js with Express.js for API development, ensuring fast, non-blocking I/O operations.
<i><b>Database:</i></b> MongoDB for flexible and scalable document-based storage.
<i><b>Styling:</i></b> Tailwind CSS for utility-first, responsive design and Material UI for certain UI components.

# Challenges and Solutions
## 1. Material UI (MUI) Integration
### Challenge:
When I first started working with Material UI (MUI), it was a bit challenging to figure out how the framework works, especially when trying to modify the default styles. The MUI components come with their own pre-defined styles, which made it difficult to override them and apply custom styling.

### Solution:
After reading the documentation and experimenting with different methods, I found that I could use the sx prop and styled utility to customize MUI components. Additionally, I used inline styles and the style prop to handle specific styling like hover effects. Understanding how to use these tools helped me adjust the components to better fit the design requirements. For example, for buttons, I initially struggled with changing the default background colors, but after exploring MUI’s sx and style props, I was able to customize them and add smooth transitions. This made the UI elements more responsive and visually appealing.

## 2. Hover Effects on Buttons
### Challenge:
Implementing hover effects for buttons that change colors dynamically was something new for me. I had to ensure that the buttons would smoothly transition between colors when hovered, and also maintain the correct state once the mouse leaves.

### Solution:
I implemented the hover effects by using React's useState hook to track the hover state. By creating separate state variables (isHoveredEdit and isHoveredDelete) for the Edit and Delete buttons, I could dynamically change their styles based on whether they were being hovered or not. To create smooth transitions, I used inline styles with the transition property to animate the color changes. This gave me full control over how the buttons looked before and after hovering, providing a better user experience.

# Setup Instructions

## 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/RyomenDev/Contact-Management.git
cd CRM
```

## 2. Install Backend Dependencies

Navigate to the backend folder and install the required dependencies:

```
cd server
npm install
```

### 3. Install Frontend Dependencies

Now, navigate to the frontend folder and install the required dependencies:

```
cd client
npm install
```

### 4. Set Up Environment Variables

Create a .env file in both the backend and frontend directories with the following variables:

Backend .env file:

```
MONGO_URI=your-mongo-database-uri
PORT=5000
```

### 5. Running the Project

#### 1. Start the Backend:

In the backend directory, run the following command:

```
cd backend
npm start
```

#### 2. Start the Frontend:

In the frontend directory, run the following command:

```
cd frontend
npm start
```

The application will be available at http://localhost:5173 (Frontend) and the API will be available at http://localhost:5000 (Backend).
