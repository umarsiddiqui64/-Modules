function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    students.splice(1, 0, "David");

    console.log(students.includes("Eve"));  

    console.log(students.join(","));
}

manageStudents();

function testManageStudents() {
    
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(0, 0, "Zara");  
    console.log(students);  

    students = ["Alice", "Bob", "Charlie"];
    students.splice(students.length, 0, "Eve");  
    console.log(students);  

    console.log(students.includes("Bob"));  
    console.log(students.includes("John"));  

    console.log(students.join(" | "));
}
testManageStudents();
