import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = 3800;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'school_management_system',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.send('Welcome to the School Management System API');
});

app.get('/students', (req, res) => {
    const query = "SELECT * FROM students";
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

app.post('/students', (req, res) => {
    const { name, age, grade } = req.body;
    const query = "INSERT INTO students (name, age, grade) VALUES (?, ?, ?)";
    db.query(query, [name, age, grade], (err, results) => {
        if (err) {
            console.error('Error adding student:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(201).json({ id: results.insertId, name, age, grade });
    });
});

app.get('/students/:id', (req, res) => {
    const studentId = req.params.id;
    const query = "SELECT * FROM students WHERE id = ?";
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error('Error fetching student:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Student not found');
            return;
        }
        res.json(results[0]);
    });
});

app.put('/students/:id', (req, res) => {
    const studentId = req.params.id;
    const { name, age, grade } = req.body;
    const query = "UPDATE students SET name = ?, age = ?, grade = ? WHERE id =?";
    db.query(query, [name, age, grade, studentId], (err, results)=> {
        if (err) {
            console.error('Error updating student:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('Student not found');
            return;
        }
        res.json({ id: studentId, name, age, grade });
    }
    );
});

app.delete('/students/:id', (req, res) => {
    const studentId = req.params.id;
    const query = "DELETE FROM students WHERE id = ?";
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error('Error deleting student:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('Student not found');
            return;
        }
        res.status(204).send();
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



