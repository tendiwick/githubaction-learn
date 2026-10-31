
import express from 'express';

const app = express();

const port = 3000;

// Home route
app.get('/', (req, res) => {
    res.send("Hi this is running ON Vercel Mode");
});

// HTML route
app.get('/home', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
            <h1>Welcome to My Express App!</h1>
            <p>This is my home page.</p>
            <a href="/about">Go to About Page</a>
        </body>
        </html>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About Page</title>
        </head>
        <body>
            <h1>About Us</h1>
            <p>Learning Express.js with GitHub Actions and Vercel.</p>
            <a href="/home">Go to Home Page</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
