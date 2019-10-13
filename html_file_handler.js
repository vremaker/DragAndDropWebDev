function deleteFile(input_array, file_name){
	$.ajax({
    url:'delete.php',
    data: {'file' : "<?php echo dirname(_FILE_) . '/uploads/'?>" + file_name },
    success: function (response) {
      writeHTML(input_array, file_name);
    }
    error: function () {
    	writeHTML(input_array, file_name);
  }
  });

}

var elem1, elem2;

function writeHTML(input_array, out_file_name){
  arr_len = input_array.length
  var i;



  //The function to create a file needs the data so I'm going to implement it below this
  //Data will be the String name we use for the creation of the new file


  var file = new Blob([data], {html: html});
  if(window.navigator.msSaveOrOpenBlob)
  	window.navigator.msSaveOrOpenBlob(file, file_name);
  else{

  }
}

//This is code for opening our file in a new window after we write the file
//var win = window.open(url, '_blank');
//  win.focus();
