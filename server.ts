import app from './index.js';
import type { Server } from 'http';

const port = process.env.PORT ?? 4000;

const server: Server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default server;
