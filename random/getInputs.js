function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function processFormData()
{
  var name_element = document.getElementById('myMsg');
  var input = trim(name_element.value);
  var error_flag = false;

  if(input == '') {
    error_message = 'Please enter a number\n';
    error_flag = true;
  } 
  else {
    if(parseInt(input)) {
      var randomnumber=Math.floor(Math.random()*input);
      document.getElementById('myData').innerHTML += randomnumber + 1 + "<br />";
    }
    else {
      error_message = 'Please enter a number greater than zero\n';
      error_flag = true;
    }
  }
  if(error_flag) {
    alert(error_message);
  }
}
