
SkillTree is a backend API built using Node.js and MongoDB to help track and manage personal skills. It allows users to add skills, define their levels, and optionally link them with prerequisite skills to form a learning path.

## Features

- Add new skills with descriptions and levels
- Link skills with prerequisites
- Fetch all skills with their prerequisite relationships
- Organized and scalable structure for easy extension

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

SkillTree/
├── models/ # Mongoose schema for skills
├── routes/ # API route definitions
├── utils/ # Helper functions
├── server.js # Entry point of the server
├── .gitignore # Files and folders to ignore in Git
└── README.md # Project documentation

bash
Copy
Edit

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or connection string for Atlas

### Installation

1. Clone the repository

```bash
git clone https://github.com/aditidew/SkillTree.git
cd SkillTree
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables

Create a .env file and add your MongoDB URI:

bash
Copy
Edit
MONGO_URI=mongodb://localhost:27017/skilltree
Start the server

bash
Copy
Edit
npm start
The API will run at http://localhost:3000.

API Endpoints
Get All Skills
bash
Copy
Edit
GET /api/skills
Add a Skill
bash
Copy
Edit
POST /api/skills
Request body example:

json
Copy
Edit
{
  "name": "JavaScript",
  "description": "A popular scripting language for web development",
  "level": 1,
  "prerequisiteSkill": "<optional_skill_id>"
}
Future Improvements
User authentication and multi-user skill tracking

Frontend dashboard to visualize skill trees

Progress tracking and learning suggestions

Author
Aditi Dewangan
GitHub
