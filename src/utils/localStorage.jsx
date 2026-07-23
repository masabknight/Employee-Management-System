const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage",
                "taskDescription": "Create the homepage UI in React.",
                "taskDate": "2026-07-24",
                "taskCategory": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Build Navbar",
                "taskDescription": "Create a responsive navigation bar.",
                "taskDate": "2026-07-25",
                "taskCategory": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Setup Git Repository",
                "taskDescription": "Initialize the project and push to GitHub.",
                "taskDate": "2026-07-20",
                "taskCategory": "Development"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Login Page",
                "taskDescription": "Develop the login page with validation.",
                "taskDate": "2026-07-24",
                "taskCategory": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Install Dependencies",
                "taskDescription": "Install React Router and Axios.",
                "taskDate": "2026-07-21",
                "taskCategory": "Setup"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Connect Login API",
                "taskDescription": "Connect frontend with authentication API.",
                "taskDate": "2026-07-22",
                "taskCategory": "Backend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Add Remember Me",
                "taskDescription": "Implement Remember Me functionality.",
                "taskDate": "2026-07-26",
                "taskCategory": "Feature"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Dashboard",
                "taskDescription": "Build the employee dashboard.",
                "taskDate": "2026-07-24",
                "taskCategory": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Profile Page",
                "taskDescription": "Allow users to edit profile information.",
                "taskDate": "2026-07-25",
                "taskCategory": "UI"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Footer",
                "taskDescription": "Develop a reusable footer component.",
                "taskDate": "2026-07-19",
                "taskCategory": "Component"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Optimize Images",
                "taskDescription": "Reduce image sizes for faster loading.",
                "taskDate": "2026-07-18",
                "taskCategory": "Optimization"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Build Contact Form",
                "taskDescription": "Create a contact form with validation.",
                "taskDate": "2026-07-27",
                "taskCategory": "Form"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Sidebar",
                "taskDescription": "Build a responsive sidebar menu.",
                "taskDate": "2026-07-24",
                "taskCategory": "UI"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Button Styles",
                "taskDescription": "Correct button colors and spacing.",
                "taskDate": "2026-07-21",
                "taskCategory": "CSS"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Notification System",
                "taskDescription": "Create a reusable notification component.",
                "taskDate": "2026-07-26",
                "taskCategory": "Feature"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Search Functionality",
                "taskDescription": "Implement search with filtering.",
                "taskDate": "2026-07-20",
                "taskCategory": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Settings Page",
                "taskDescription": "Design and implement settings page.",
                "taskDate": "2026-07-28",
                "taskCategory": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Cleanup",
                "taskDescription": "Remove unused files and variables.",
                "taskDate": "2026-07-22",
                "taskCategory": "Maintenance"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Reports Dashboard",
                "taskDescription": "Create reports dashboard for managers.",
                "taskDate": "2026-07-25",
                "taskCategory": "Dashboard"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Database Design",
                "taskDescription": "Prepare initial database schema.",
                "taskDate": "2026-07-18",
                "taskCategory": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Employee API",
                "taskDescription": "Develop REST APIs for employee data.",
                "taskDate": "2026-07-27",
                "taskCategory": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the application to production.",
                "taskDate": "2026-07-22",
                "taskCategory": "Deployment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Write unit tests for React components.",
                "taskDate": "2026-07-29",
                "taskCategory": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Update API and project documentation.",
                "taskDate": "2026-07-21",
                "taskCategory": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Performance Optimization",
                "taskDescription": "Improve application loading speed.",
                "taskDate": "2026-07-30",
                "taskCategory": "Optimization"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
}