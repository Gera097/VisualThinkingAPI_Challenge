const StudentServices = require("./../../lib/services/StudentServices");

describe("Unit test for StudentServices class", () => {

    test("get a list with all the students and all fields", () => {
        const student_list = [{
            "id": "6264d5d8aa87c9330234cbc2",
            "name": "Hollie",
            "email": "Jewell@visualpartnership.xyz",
            "credits": 376,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 5,
            "haveCertification": true
        },{
            "id": "6264d5d82eb0f4917bd0d332",
            "name": "Clare",
            "email": "Hays@visualpartnership.xyz",
            "credits": 227,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 2,
            "haveCertification": true
        }];
        
        const result = StudentServices.getAllStudents(student_list);

        expect(result).toEqual(student_list);
    });

    test("get a list of emails of students depending on their certified status", () => {
        const student_list = [{
            "id": "6264d5d8aa87c9330234cbc2",
            "name": "Hollie",
            "email": "Jewell@visualpartnership.xyz",
            "credits": 376,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 5,
            "haveCertification": true
        },{
            "id": "6264d5d82eb0f4917bd0d332",
            "name": "Clare",
            "email": "Hays@visualpartnership.xyz",
            "credits": 227,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 2,
            "haveCertification": false
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        },
        ];
        const status = "true";
        const result = StudentServices.getStudentEmailByCertifiedStatus(student_list, status);
        expect(result).toEqual(["Jewell@visualpartnership.xyz", "Sharlene@visualpartnership.xyz"]);
    });

    test("get the list of students that have more than the specified credits", () => {
        const student_list = [{
            "id": "6264d5d8aa87c9330234cbc2",
            "name": "Hollie",
            "email": "Jewell@visualpartnership.xyz",
            "credits": 376,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 5,
            "haveCertification": true
        },{
            "id": "6264d5d82eb0f4917bd0d332",
            "name": "Clare",
            "email": "Hays@visualpartnership.xyz",
            "credits": 501,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 2,
            "haveCertification": false
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 750,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        },
        ];
        let credits = 500;
        let result = StudentServices.getStudentsAboveCredits(student_list, credits);

        expect(result).toEqual([{
            "id": "6264d5d82eb0f4917bd0d332",
            "name": "Clare",
            "email": "Hays@visualpartnership.xyz",
            "credits": 501,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Básico"
            ],
            "previousCourses": 2,
            "haveCertification": false
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 750,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        }]);
        result = StudentServices.getStudentsAboveCredits(student_list, 300);
        expect(result).toEqual(student_list);
        
    });

});