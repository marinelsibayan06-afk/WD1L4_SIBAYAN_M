// Stores the names of the enrolled students
const studentNames = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];

// Stores the corresponding grades of the students
const studentGrades = [92, 85, 78, 97, 74];

// Function that determines the grade equivalent based on the student's grade
function getEquivalent(grade) {

  // Checks if the grade is 97 or above
  if (grade >= 97) {
    return "1.0";

  // Checks if the grade is 94 or above
  } else if (grade >= 94) {
    return "1.25";

  // Checks if the grade is 91 or above
  } else if (grade >= 91) {
    return "1.5";

  // Checks if the grade is 88 or above
  } else if (grade >= 88) {
    return "1.75";

  // Checks if the grade is 85 or above
  } else if (grade >= 85) {
    return "2.0";

  // Checks if the grade is 82 or above
  } else if (grade >= 82) {
    return "2.25";

  // Checks if the grade is 79 or above
  } else if (grade >= 79) {
    return "2.5";

  // Checks if the grade is 76 or above
  } else if (grade >= 76) {
    return "2.75";

  // Checks if the grade is 75 or above
  } else if (grade >= 75) {
    return "3.0";

  // Returns Failed if the grade is below 75
  } else {
    return "Failed";
  }
}

// Function that determines whether the student passed or failed
function getRemark(grade) {

  // Returns Passed if the grade is 75 or above; otherwise, Failed
  return grade >= 75 ? "Passed" : "Failed";
}

// Function that identifies the academic leader based on the grade
function getAcademicLeader(grade) {

  // Identifies students with grades of 97 or above
  if (grade >= 97) {
    return "1st Class Academic Leader";

  // Identifies students with grades of 91 to 96
  } else if (grade >= 91) {
    return "2nd Class Academic Leader";

  // Returns a dash if the student does not qualify
  } else {
    return "-";
  }
}

// Main function that displays the grade equivalents when the button is clicked
function showGradeEquivalent() {

  // Creates the heading for the results
  let output = "<h2>Grade Equivalents</h2>";

  // Starts creating the results table
  output += "<table>";

  // Creates the table header row
  output += "<tr>";

  // Adds the column headings
  output += "<th>Student Name</th>";
  output += "<th>Grade</th>";
  output += "<th>Equivalent</th>";
  output += "<th>Remark</th>";
  output += "<th>Academic Leader</th>";

  // Closes the table header row
  output += "</tr>";

  // Loops through all students in the studentNames array
  for (let i = 0; i < studentNames.length; i++) {

    // Gets the grade equivalent of the current student
    let equivalent = getEquivalent(studentGrades[i]);

    // Gets the pass or fail remark of the current student
    let remark = getRemark(studentGrades[i]);

    // Checks if the current student qualifies as an academic leader
    let leader = getAcademicLeader(studentGrades[i]);

    // Starts a new row for the current student
    output += "<tr>";

    // Displays the student's name
    output += "<td>" + studentNames[i] + "</td>";

    // Displays the student's numerical grade
    output += "<td>" + studentGrades[i] + "</td>";

    // Displays the student's grade equivalent
    output += "<td>" + equivalent + "</td>";

    // Displays whether the student passed or failed
    output += "<td>" + remark + "</td>";

    // Displays the student's academic leader classification
    output += "<td>" + leader + "</td>";

    // Closes the current student's table row
    output += "</tr>";
  }

  // Closes the results table
  output += "</table>";

  // Displays the generated table inside the HTML element with the ID "result"
  document.getElementById("result").innerHTML = output;
}