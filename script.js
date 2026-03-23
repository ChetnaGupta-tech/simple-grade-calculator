let calculateResult = document.querySelector("#calculateResult");
let inputBox = document.querySelectorAll("input");

calculateResult.addEventListener("click", function(){
    let subject1 = Number(document.getElementById("subject1").value);
    let subject2 = Number(document.getElementById("subject2").value);
    let subject3 = Number(document.getElementById("subject3").value);
    let subject4 = Number(document.getElementById("subject4").value);

    let total = subject1+subject2+subject3+subject4;
    let average =total/4;
    let grade;

    if(average>=90)
        grade = "A";
    else if(average >=75)
        grade = "B";
    else if(average>=50)
        grade = "C";
    else 
        grade = "D";

    // inputBox.style.borderColor="red";
    document.querySelector("h3").innerText= `Total = ${total} | Average = ${average} | Grade = ${grade}`

    if(!subject1 || !subject2 || !subject3 || !subject4){
    document.querySelector("#result").innerText="Please Enter marks for all subjects";
}
});
