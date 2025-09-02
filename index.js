const express=require("express")
const mongoose=require("mongoose")
const app=express()
mongoose.connect("mongodb://127.0.0.1:27017/expensetrackerdata")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("DB Connection Error:", err));
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    rollNo: String
});
const Student = mongoose.model("Student", studentSchema);
app.post('/insert',insertdata)
async function insertdata(req, res) {
    const { name, age, department, rollNo } = req.body;
    const newStudent = new Student({ name, age, department, rollNo });
    try {
        await newStudent.save();
        res.status(201).send("Student inserted");
    } catch (error) {
        res.status(400).send("Error inserting student");
    }
}