class StudentServices {

    static getAllStudents(students){
        return students
    }

    static getStudentEmailByCertifiedStatus(students, status){
        const studentsWithSelectedStatus = students.filter((student) => student.haveCertification === status)
        return studentsWithSelectedStatus.map((student) => student.email)
    }
}

module.exports = StudentServices