function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function processFormData()
{
  var name_element = document.getElementById('myMsg');
  var name = trim(name_element.value);
  var error_message = 'The following fields had errors in them: \n\n';
  var error_flag = false;

  if(name == '') {
	  error_message += 'Please enter a message\n';
	  error_flag = true;
  } else {
      document.getElementById('myData').innerHTML += name;
  }
  if(error_flag) {
	  alert(error_message);
  }

}
