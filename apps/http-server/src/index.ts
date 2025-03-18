import express from 'express';
import { prisma } from '@repo/db/client';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/signup', async (req, res) => {
    try {
        const response = await prisma.user.create({
            data: {
                username: req.body.username,
                password: req.body.password,
            },
        });
        res.json({
            msg: "User created successfully",
            userId: response.id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const response = await prisma.user.findMany();
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});