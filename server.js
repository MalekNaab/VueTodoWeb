var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://Malman:Malman234@cluster0.icy8crt.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME="ToDoList";
var database;

app.listen(3000,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB connection successful");
    });
})
//For Notes
app.get('/TodoWeb/todolist/GetNotes', (request, response) => {
    const userId = request.query.userId; // Assuming userId is passed as query parameter
    database.collection("Todo").find({ userId: userId }).toArray((error, result) => {
        if (error) {
            console.error("Error fetching tasks:", error);
            response.status(500).json({ success: false, message: "Server error" });
            return;
        }
        response.json(result);
    });
});

app.post('/TodoWeb/todolist/AddNotes', multer().none(), (request, response) => {
    const newNotes = request.body.newNotes;
    const userId = request.body.userId; // Retrieve userId from request body

    database.collection("Todo").countDocuments({}, function(error, numOfDocs) {
        if (error) {
            console.error("Error counting documents:", error);
            response.status(500).json({ success: false, message: "Server error" });
            return;
        }

        database.collection("Todo").insertOne({
            id: (numOfDocs + 1).toString(),
            Task: newNotes,
            userId: userId // Store userId with the task
        }, (err, result) => {
            if (err) {
                console.error("Error adding task:", err);
                response.status(500).json({ success: false, message: "Server error" });
                return;
            }
            response.json("Added Successfully");
        });
    });
});

app.delete('/TodoWeb/todolist/DeleteNotes',(request,response)=>{
    database.collection("Todo").deleteOne({
        id:request.query.id
    });
    response.json("Deleted Successfully");
})

//For Users detail
app.get('/TodoWeb/todolist/GetUsers',(request,response)=>{
    database.collection("User").find({}).toArray((error,result)=>{
        response.send(result);
    });
})

app.post('/TodoWeb/todolist/AddUsers', multer().none(), (request, response) => {
    const newName = request.body.newName;
    const newPhoneNumber = request.body.newPhoneNumber;
    const newEmail = request.body.newEmail;
    const newPassword = request.body.newPassword;

    // Log received data
    console.log("Received data:", { newName, newPhoneNumber, newEmail, newPassword });

    // Validate received data
    if (!newName || !newPhoneNumber || !newEmail || !newPassword) {
        return response.status(400).json({ message: "All fields are required" });
    }

    // Store the user in MongoDB
    database.collection("User").insertOne({
        Name: newName,
        PhoneNumber: newPhoneNumber,
        Email: newEmail,
        Password: newPassword
    }, (err, result) => {
        if (err) {
            console.error("Error adding user:", err);
            return response.status(500).json({ message: "Server error" });
        }
        response.json("User Added Successfully");
    });
});

app.post('/TodoWeb/todolist/Login', multer().none(), (request, response) => {
    const loginEmail = request.body.email;
    const loginPassword = request.body.password;

    database.collection("User").findOne({ Email: loginEmail, Password: loginPassword }, (err, user) => {
        if (err) {
            console.error("Error finding user:", err);
            response.status(500).json({ success: false, message: "Server error" });
            return;
        }

        if (!user) {
            response.json({ success: false, message: "Invalid credentials" });
        } else {
            response.json({ success: true, message: "Login successful", user: user });
        }
    });
})