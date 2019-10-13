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

function writeHTML(input_array, out_file_name){
  var text = "<body>";

  for(int i = 0; i < input_array.length; i++){
		if(input_array[i].tagName == "UL" && input_array[i].tagName == "OL"){

    }
  }




  //The function to create a file needs the data so I'm going to implement it below this
  //Data will be the String name we use for the creation of the new file


  var file = new Blob([data], {html: html});
  if(window.navigator.msSaveOrOpenBlob)
  	window.navigator.msSaveOrOpenBlob(file, file_name);
  else{
    var a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

//This is code for opening our file in a new window after we write the file
//var win = window.open(url, '_blank');
//  win.focus();
