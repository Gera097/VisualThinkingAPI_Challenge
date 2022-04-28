const Reader = require("./../utils/Reader")
const StudentServices = require("./../services/StudentServices")

class ConsultStudentsInfo {
    static getAllStudents(){
        const students = Reader.readJsonFile("db.json")

        return StudentServices.getAllStudents(students)
    }
}

module.exports = ConsultStudentsInfo