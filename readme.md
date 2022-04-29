# VisualThinkingAPI_Challenge

## Dependencias
- Jest "^26.0.0" - Realización de pruebas unitarias
- Express "^4.18.0" - Levantar el servidor
- ESLinter "^8.14.0" - Formateo de código

## Diseño de componentes

## Uso de API

### Endpoints

<table> 
<tr>
    <td>Enpoint</td>
    <td>Response</td>
    <td>Description</td>
</tr>
<tr>
    <td>http://localhost:3000 </td>
    <td>{"message":"Visual Thinking Api welcome!"}</td>
    <td>Bienvenida a la API</td>
    
</tr>
<tr>
    <td>http://localhost:3000/v1/students</td>
    <td>[{"id":"6264d5d89f1df827eb84bb23","name":"Warren","email":"Todd@visualpartnership.xyz","credits":508,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":1,"haveCertification":true},{"id":"6264d5d85cf81c496446b67f","name":"Lucinda","email":"Sexton@visualpartnership.xyz","credits":677,"enrollments":["Visual Thinking Avanzado"],"previousCourses":6,"haveCertification":true},{"id":"6264d5d8cda17de0d2e9f236","name":"Fuentes","email":"Sharlene@visualpartnership.xyz","credits":210,"enrollments":["Visual Thinking Avanzado"],"previousCourses":10,"haveCertification":true}]
    </td>
    <td>Lista de todos los estudiantes</td>
    
</tr>
<tr>
    <td>http://localhost:3000/v1/students/certified/:haveCertification</td>
    <td>["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz","Sharlene@visualpartnership.xyz", ...]</td>
    <td>Lista de los emails de los estudiantes que tienen (true) o no (false) certificación, indicándolo en el parámetro :haveCertification</td>
</tr>
<tr>
    <td>http://localhost:3000/v1/students/credits_above/:credits</td>
    <td>[{"id":"6264d5d8dd1a0be4e249c662","name":"Phillips","email":"Camacho@visualpartnership.xyz","credits":973,"enrollments":["Visual Thinking Intermedio"],"previousCourses":8,"haveCertification":false},{"id":"6264d5d89d03e25451f124e5","name":"Mindy","email":"Alfreda@visualpartnership.xyz","credits":830,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":9,"haveCertification":false}, ...]</td>
    <td>Lista de estudiantes que tienen más de los créditos ingresados en el parámetro :credits</td>
</tr>
</table>