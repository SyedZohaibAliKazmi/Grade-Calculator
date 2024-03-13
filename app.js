//    Function is use for to calculate a vale

function enter() {
  //    element by Id means to use html id
  let free = document.getElementById("free").value;

  // Given value is identify by 'free'

  let marks = free;
  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    let Grade = "";

    if (marks >= 80) {
      Grade = "A+";
    } else if (marks >= 70) {
      Grade = "A";
    } else if (marks >= 60) {
      Grade = "B";
    } else if (marks >= 50) {
      Grade = "C";
    } else if (marks >= 40) {
      Grade = "D";
    } else if (marks >= 33) {
      Grade = "E";
    } else if (marks >= 32) {
      Grade = "F";
    } else {
      Grade = "F";
    }
    //   answer show in web page

    document.getElementById("Ans").innerHTML = "Your grade is: " + Grade;
  }
}
