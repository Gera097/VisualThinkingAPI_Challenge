const Reader = require("./../utils/Reader")
const StudentServices = require("./../services/StudentServices")

class ConsultStudentsInfo {
    static getAllStudents(){
        const students = Reader.readJsonFile("db.json")

        return StudentServices.getAllStudents(students)
    }

    static getStudentsEmailByCertifiedStatus(haveCertification){
        const students = Reader.readJsonFile("db.json")
        return StudentServices.getStudentEmailByCertifiedStatus(students,haveCertification)
    }

    static getStudentsAboveCredits(credits){
        const students = Reader.readJsonFile("db.json")
        return StudentServices.getStudentsAboveCredits(students, credits)
    }
}

module.exports = ConsultStudentsInfo