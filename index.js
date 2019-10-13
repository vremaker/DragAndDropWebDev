(function () {

    window.addEventListener("load", init);

    function init() {
      id("show").addEventListener("click", readDom);
      //fillHTML();
    // fillBoard();
      
    }

    function readDom() {
        console.log(id("board").childNodes);
        writeHTML(id("board").childNodes, "show.html");
    }

    function id(id) {
      return document.getElementById(id);
    }

    function qs(id) {
      return document.querySelector(id);
    }

    function qsa(id) {
      return document.querySelectorAll(id);
    }

    function writeHTML(input_array, file_name) {
        var text = "<html><head>";
        text += "<title>" + document.getElementById("title").value +  "</title>";
        text += "</head><body>";
        var lists = true;

        for (let i = 1; i < input_array.length; i++) {
            if (input_array[i].id != "img") {
                text += "<" + input_array[i].id + ">" + input_array[i].childNodes[3].value + "</" +
                    input_array[i].id + ">";
            }
            else {
                text += '<img src="' + input_array[i].childNodes[3].value + '"/>';
            }
        }

        text += "</body></html>";


        //The function to create a file needs the data so I'm going to implement it below this
        //Data will be the String name we use for the creation of the new file


        var file = new Blob([text], { type: "html" });
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, file_name);
        else {
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = file_name;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300 || response.status == 0) {
        return response.text();
      } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
      }
    }
})  ()