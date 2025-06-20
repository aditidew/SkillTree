# 🌳 SkillTree – Personal Skill Tracker

SkillTree is a simple and efficient API-based application to help individuals track their learning progress across various skills. Built with Node.js, Express, and MongoDB, it allows users to add, update, view, and delete skills along with their descriptions and proficiency levels.

---

## 🚀 Features

- 📌 Add new skills with descriptions and progress level
- 📖 View all stored skills
- ✏️ Update progress level for a specific skill
- ❌ Delete a skill
- 🌐 Optional frontend interface (HTML + JS + CSS)
- 🧠 MongoDB Atlas integrated for real-time data persistence

---

## 🛠️ Technologies Used

- Node.js + Express
- MongoDB Atlas
- Mongoose (ODM)
- HTML, CSS, JavaScript (Frontend)
- cURL / Postman for API Testing

## 📘 API Documentation

### Base URL:
http://localhost:5000/api/skills

yaml
Copy
Edit

---

### 1. 🟢 Create a New Skill

**Endpoint:** `POST /api/skills`  
**Description:** Adds a new skill to the database.

**Headers:**
Content-Type: application/json

css
Copy
Edit

**Request Body:**
```json
{
  "name": "React",
  "description": "Frontend library",
  "level": 40
}
Response:

json
Copy
Edit
{
  "_id": "...",
  "name": "React",
  "description": "Frontend library",
  "level": 40
}
2. 🔵 Get All Skills
Endpoint: GET /api/skills
Description: Fetches all stored skills.

Response:

json
Copy
Edit
[
  {
    "_id": "...",
    "name": "React",
    "description": "Frontend library",
    "level": 40
  }
]
3. 🟡 Update a Skill
Endpoint: PUT /api/skills/:id
Description: Updates level or other properties of a skill.

Request Body:

json
Copy
Edit
{
  "level": 85
}
Response:

json
Copy
Edit
{
  "_id": "...",
  "name": "React",
  "description": "Frontend library",
  "level": 85
}
4. 🔴 Delete a Skill
Endpoint: DELETE /api/skills/:id
Description: Deletes a skill by ID.

Response:

json
Copy
Edit
{
  "message": "Skill deleted successfully"
}

