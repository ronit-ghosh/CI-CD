import { WebSocketServer } from 'ws';
import { prisma } from '@repo/db/client';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async (socket) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7),
        },
    })

    socket.send("Connected!");
});

