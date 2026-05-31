import app from './index.js';

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default server;
