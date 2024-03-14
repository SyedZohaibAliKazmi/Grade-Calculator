//    Function is use for to calculate a vale

function enter() {
  //    element by Id means to use html id
  let free = document.getElementById("free").value;

  // Given value is identify by 'free'

  let marks = free;

  {
    if (marks >= 80) {
      Grade = " ( A+ &nbspPass )";
    } else if (marks >= 70) {
      Grade = "( A &nbspPass )";
    } else if (marks >= 60) {
      Grade = "( B &nbspPass )";
    } else if (marks >= 50) {
      Grade = "( C &nbspPass )";
    } else if (marks >= 40) {
      Grade = "( D &nbspPass )";
    } else if (marks >= 33) {
      Grade = "( E &nbspPass )";
    } else if (marks >= 32) {
      Grade = "( F &nbspFail )";
    } else {
      Grade = "( F &nbspFail )";
    }
    //   answer show in web page

    document.getElementById("Ans").innerHTML = "Your grade is: " + Grade;
  }
}
