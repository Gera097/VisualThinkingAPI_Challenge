const ConsultStudentsInfo = require("./../../lib/controllers/ConsultStudentsInfo")

describe("Unit test for ConsultStudentInfo class", () => {
    
    test("get all students", () => {
        const result = ConsultStudentsInfo.getAllStudents()
        expect(result.length).toBe(51)
    })
})
