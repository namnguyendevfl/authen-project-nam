const { PORT = 4000 } = process.env;

const app = require("./app");

const listener = () => console.log(`Listening on the PORT ${PORT}!`);

app.listen(PORT, listener);