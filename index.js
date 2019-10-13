/*(function() {
    window.addEventListener("load", init);

    function init() {
      fillHTML();
     fillBoard();
      
    }

    function fillBoard() {
      let daddyBoard = document.createElement("div");
      daddyBoard.id = "board";
      //daddyBoard.onDrop = drop(event);
      daddyBoard.ondragover = allowDrop(event);
      qs("body").appendChild(daddyBoard);
//<div id="board" ondrop="drop(event)" ondragover="allowDrop(event)">
  //</div>
    }

    function fillHTML() {
      // p, h1, h2, h3, h4, h5, h6, a, img, br, ul, li
      // ol, hr 
      let holderDiv = document.createElement("div");
      holderDiv.id = "holder_Div";
     // holderDiv.ondrop = drop(event);
      holderDiv.ondragover = allowDrop(event);
      let h1 = document.createElement("div");
      h1.id= "h1";
      h1.classList.add("box");
      let label1 = document.createElement("p");
      let input1 = document.createElement("input");
      label1.textContent = "h1";
      input1.placeholder = "your text here";
      h1.appendChild(label1);
      h1.appendChild(input1);
      h1.draggable =true;
      h1.ondragstart=drag(event);
      holderDiv.appendChild(h1);
      id("tools").appendChild(holderDiv);
    }

    //<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
    //</div>
    function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    /*function drop(ev) {
      ev.preventDefault();
      let data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
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
})  ()} */