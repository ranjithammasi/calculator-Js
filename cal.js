function displayvalue(val){
    document.getElementById("display").value = document.getElementById("display").value + val

} 
function clearDisplay(){
    document.getElementById('display').value = "";
}
function caculate(){
  var userInput =  document.getElementById('display').value;
  var result = eval(userInput);
  document.getElementById ('display').value=result;

}