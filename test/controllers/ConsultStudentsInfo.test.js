const ConsultStudentsInfo = require("./../../lib/controllers/ConsultStudentsInfo");

describe("Unit test for ConsultStudentInfo class", () => {

    test("get all students", () => {
        const result = ConsultStudentsInfo.getAllStudents();
        expect(result.length).toBe(51);
    });

    test("get a list of emails of students depending on their certified status", () => {
        let haveCertification = true;
        const emailRegex = [expect.stringMatching(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)];
        const result = ConsultStudentsInfo.getStudentsEmailByCertifiedStatus(haveCertification);
        expect(result).toEqual(expect.arrayContaining(emailRegex));
    });

    test("get the list of students that have more than the specified credits", () => {
        let credits = 500;
        const result = ConsultStudentsInfo.getStudentsAboveCredits(credits);
        const studentCredits = result.map((student) => student.credits);
        expect(Math.min(...studentCredits)).toBeGreaterThan(credits);
    });
});
