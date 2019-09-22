/* Student Name: Tamana Seddiqi
    Student ID : 991528861*/
    var result;
    function celsiusToFahrenheit(){
      result = (document.getElementById("num").value)*(9/5)+32;
      document.getElementById("result").innerHTML = result.toFixed(2) + " F";
    }

    function FahrenheitToCelsius(){
      result = ((document.getElementById("num").value)-32)*(5/9);
      document.getElementById("result").innerHTML = result.toFixed(2) + " C";
    }

    function feetToMeter(){
      result = (document.getElementById("num").value)/3.28;
      document.getElementById("result").innerHTML = result.toFixed(2) + " m";
    }

    function meterToFeet(){
      result = (document.getElementById("num").value)*3.28;
      document.getElementById("result").innerHTML = result.toFixed(2) + " ft";
    }

    function  inchesToCentimeters(){
      result = (document.getElementById("num").value)*2.54;
      document.getElementById("result").innerHTML= result.toFixed(2) + " cm";
    }

    function  centimetersToInches(){
      result = (document.getElementById("num").value)*0.39;
      document.getElementById("result").innerHTML = result.toFixed(2) + " in";
    }

    function poundsToKilograms(){
      result = (document.getElementById("num").value)/2.2;
      document.getElementById("result").innerHTML= result.toFixed(2) + " kg";
    }

    function kilogramsToPounds(){
      result = (document.getElementById("num").value)*2.25;
      document.getElementById("result").innerHTML = result.toFixed(2) + " lb";
    }

    function clearall() {
      document.getElementById("myForm").reset();
      document.getElementById("result").innerHTML=" ";
      document.getElementById("num").focus();

    }

    function mouseOver(over){
      over.style.backgroundColor = "#ffcccc";
      over.style.color = "purple";
    }

    function mouseOut(out) {
      out.style.backgroundColor = "#ffffff";
      out.style.color = "#000000";

    }
