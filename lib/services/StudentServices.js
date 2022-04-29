class StudentServices {

    static getAllStudents(students){
        return students
    }

    static getStudentEmailByCertifiedStatus(students, status){
        const string2Bool = string => string === "true"
        const studentsWithSelectedStatus = students.filter((student) => student.haveCertification == string2Bool(status))
        return studentsWithSelectedStatus.map((student) => student.email)
    }

    static getStudentsAboveCredits(students, credits){
        return students.filter((student) => student.credits > credits)
    }
}

module.exports = StudentServices