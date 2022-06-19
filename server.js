const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

db.sequelize.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to student CMS application." });
});

require("./app/routes/student_info_route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
