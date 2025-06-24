import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const expressHtml = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express</title>
            <link rel="stylesheet" href="/styles.css">
            <style>
                body {
                    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
                    padding: 50px;
                }
                a {
                    color: #00B7FF;
                }
              </style>
        </head>
        <body>
            <h1>Express</h1>
            <p>Welcome to Espress</p>
        </body>
      </html>
  `;

    res.send(expressHtml);
  });

router.get('/health', (req, res) => res.status(200).send('OK'));

export default router;
