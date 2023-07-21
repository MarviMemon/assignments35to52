
//==============Q1================
function hello(){
    // document.write("hello world")
        alert("hello world");
    }

//==============Q2=================
function message(){
    // document.write("hello world")
        alert("Thanks for purchasing a phone from us !");
    }



//=========Q3===========
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

  function setNewImage(){
        document.getElementById("img1").src ="./images/sky1.png.jpg"
  }
  function setOldImage(){
    document.getElementById("img1").src ="./images/night2.png.jpg"
  }

  var i = 0;
  function buttonClick() {
      document.getElementById('inc').value = ++i;
     
  }

  