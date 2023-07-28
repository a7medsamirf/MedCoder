// api/posts.js
const fs = require('fs');

export default function (req, res) {
  const data = JSON.parse(fs.readFileSync('./api/posts.json', 'utf-8'));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
