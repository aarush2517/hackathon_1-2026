const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/enterpriseDB')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ DB Error:', err));

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    branch: String
});
const User = mongoose.model('User', userSchema);

// JWT Secret Key
const JWT_SECRET = 'my_super_secret_key_123';

// 1. SIGNUP
app.post('/signup', async (req, res) => {
    const { username, email, password, branch } = req.body;
    try {
        const newUser = new User({ username, email, password, branch });
        await newUser.save();
        res.json({ message: "Account created!" });
    } catch (e) {
        res.status(400).json({ message: "Email already exists" });
    }
});

// 2. SIGNIN
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ name: user.username, branch: user.branch }, JWT_SECRET);
        res.json({ message: "Success", token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// 3. API DATA (For Dashboard)
app.get('/api/data', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send();
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ name: decoded.name, company: "Spectre Analytics" });
    } catch (e) {
        res.status(403).send();
    }
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));