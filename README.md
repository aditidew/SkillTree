SkillTree
SkillTree is a backend API built using Node.js, Express.js, and MongoDB to help track and manage personal skills.
It allows users to add skills, define their levels, and optionally link them with prerequisite skills to form a learning path.

Features
Add new skills with descriptions and levels

Link skills with prerequisites

Fetch all skills with their prerequisite relationships

Organized and scalable structure for easy extension

Technologies Used
Node.js

Express.js

MongoDB

Mongoose

Project Structure
bash
Copy code
SkillTree/
├── models/           # Mongoose schema for skills
├── routes/           # API route definitions
├── utils/            # Helper functions
├── server.js         # Entry point of the server
├── .gitignore        # Git ignore file
└── README.md         # Project documentation
Getting Started
Prerequisites
Node.js and npm installed

MongoDB running locally or a MongoDB Atlas connection string

Installation
Clone the repository

bash
Copy code
git clone https://github.com/aditidew/SkillTree.git
cd SkillTree
Install dependencies

nginx
Copy code
npm install
Set up environment variables
Create a .env file in the root directory and add:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/skilltree
(Replace with your MongoDB Atlas URI if needed)

Start the server

sql
Copy code
npm start
The API will run at http://localhost:5000 (or the configured PORT)

API Endpoints
Get All Skills
bash
Copy code
GET /api/skills
Add a Skill
bash
Copy code
POST /api/skills
Request body example:

json
Copy code
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
GitHub Profile