
const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstName": "Aarav",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for task 1",
        "date": "2024-11-01",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for task 2",
        "date": "2024-11-02",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for task 3",
        "date": "2024-11-03",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Vivaan",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for task 1",
        "date": "2024-11-01",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for task 2",
        "date": "2024-11-02",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for task 3",
        "date": "2024-11-03",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 2
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Reyansh",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for task 1",
        "date": "2024-11-01",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for task 2",
        "date": "2024-11-02",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for task 3",
        "date": "2024-11-03",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Saanvi",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for task 1",
        "date": "2024-11-01",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for task 2",
        "date": "2024-11-02",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for task 3",
        "date": "2024-11-03",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Kiara",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for task 1",
        "date": "2024-11-01",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description for task 2",
        "date": "2024-11-02",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description for task 3",
        "date": "2024-11-03",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  }
];

const admin = [{
  "id": 1,
  "email": "admin@gmail.com",
  "password": "123",
}];

  
export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
return {employees,admin}
  
}
  