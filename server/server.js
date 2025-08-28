const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const ConnectDB = require('./config/db')

dotenv.config()
ConnectDB()

const app = express();

app.use(cors({
  origin: "https://task-manager-d8yb.vercel.app",
  credentials: true
})))
app.use(express.json())

app.use('/api/tasks', require('./routes/taskRoutes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

