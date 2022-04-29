const ConsultStudentsInfo = require("./controllers/ConsultStudentsInfo");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const students = ConsultStudentsInfo.getAllStudents();
    response.json(students);
});

app.get("/v1/students/certified/:haveCertification", (request, response) => {
    const certified = request.params.haveCertification;
    const students = ConsultStudentsInfo.getStudentsEmailByCertifiedStatus(certified);
    response.json(students);
});

app.get("/v1/students/credits_above/:credits", (request, response) => {
    const credits = request.params.credits;
    const students = ConsultStudentsInfo.getStudentsAboveCredits(credits);
    response.json(students);
});



app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});