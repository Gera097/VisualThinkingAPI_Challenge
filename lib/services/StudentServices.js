class StudentServices {

    static getAllStudents(students){
        return students
    }

    static getStudentEmailByCertifiedStatus(students, status){
        const studentsWithSelectedStatus = students.filter((student) => student.haveCertification === status)
        return studentsWithSelectedStatus.map((student) => student.email)
    }

    static getStudentsWithAtLeastNCredits(students, credits){
        return students.filter((student) => student.credits > credits)
    }
}

module.exports = StudentServices