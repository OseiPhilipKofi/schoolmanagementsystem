import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 4000; // Use 4000 as a fallback if PORT is not defined
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

// Example of using database variables
// db.connect({ host: dbHost, username: dbUser, password: dbPass });
const db = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbName,
});

try {
    db.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err);
            return;
        }
        console.log('Connected to the database');
    });

} catch (error) {
    console.log(error);
    console.log('failed to connect to database');
}

function queryPromise(query, params = []) {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

app.get('/', async(req, res) => {
    res.send('connected');
});

app.get('/founders', async(req, res) => {
    try {
        var sql = "SELECT * FROM founders";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No founders found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/history', async(req, res) => {
    try {
        var sql = "SELECT * FROM history";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No history found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/mission', async(req, res) => {
    try {
        var sql = "SELECT * FROM mission";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No mission found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/ourvalues', async(req, res) => {
    try {
        var sql = "SELECT * FROM ourvalues";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No founders ourvalues' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/team', async(req, res) => {
    try {
        var sql = "SELECT * FROM team";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No team found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/vision', async(req, res) => {
    try {
        var sql = "SELECT * FROM vision";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No vision found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/achievements', async(req, res) => {
    try {
        var sql = "SELECT * FROM achievements";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No achievements found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});
app.get('/history', async(req, res) => {
    try {
        var sql = "SELECT * FROM history";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No history found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
});

app.get('/students', async (req, res) => {
    try {
        var sql = "SELECT * FROM students";
        const results = await queryPromise(sql, []);
        if (results.length === 0) {
            res.status(404).json({ message: 'No student found' });
            return;
        }
        res.status(200).json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'failed to fetch data' });
        return;
    }
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



