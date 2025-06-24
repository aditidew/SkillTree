# SkillTree

SkillTree is a project that helps you track your skills and how they are connected. You can add skills, set their levels, and define which skills should be learned before others.

## What it does

- Lets you add new skills with a description and level
- Allows you to link skills as prerequisites
- Shows a list of all skills with details
- Works as a backend API (you can connect it with a frontend later)

## Built with

- Node.js and Express.js for the backend server
- MongoDB and Mongoose for the database

## Folder structure

skilltree-api/
├── models/ # Mongoose schema for skills
├── routes/ # API routes
├── utils/ # Utility functions
├── server.js # Main server file
├── .gitignore
├── README.md

bash
Copy
Edit

## How to run the project

### 1. Clone the repository

```bash
git clone https://github.com/aditidew/SkillTree.git
cd skilltree-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up the environment file
Create a .env file in the root folder and add:

bash
Copy
Edit
MONGO_URI=mongodb://localhost:27017/skilltree
Or replace it with your MongoDB connection string.

4. Start the server
bash
Copy
Edit
npm start
The API will be available at http://localhost:3000.

API usage
Get all skills
bash
Copy
Edit
GET /api/skills
Add a new skill
bash
Copy
Edit
POST /api/skills
Example request body:

json
Copy
Edit
{
  "name": "JavaScript",
  "description": "Basic language for web development",
  "level": 1,
  "prerequisiteSkill": "skill_id_here (optional)"
}
Future features
A web interface to view and manage your skill tree

Login and user-specific skills

Smart suggestions for what to learn next

Author
Aditi Dewangan
GitHub: https://github.com/aditidew

License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

You can now copy this into a file named `README.md` inside your `skilltree-api` folder and commit i