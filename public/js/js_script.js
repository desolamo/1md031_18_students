//js_script.js
    var benderSelectedArray = [];
    var customerInfoArray = [];

function checkFun() {
  // Get the checkbox
  var checkBox1 = document.getElementById("myCheck1");
  var checkBox2 = document.getElementById("myCheck2");
  var checkBox3 = document.getElementById("myCheck3");
  var checkBox4 = document.getElementById("myCheck4");
  var checkBox5 = document.getElementById("myCheck5");

  benderSelectedArray = [];

  // If the checkbox is checked the varuable benderselected gets the value of the latest selected bender
  if (checkBox1.checked){
      benderSelectedArray.push("The Waterbender");
  }
  if (checkBox2.checked){
      benderSelectedArray.push("The Airbender");
  }
    if (checkBox3.checked){
      benderSelectedArray.push("The Earthbender");
  }

  if (checkBox4.checked){
    benderSelectedArray.push("The Firebender");
  }
  if (checkBox5.checked){
    benderSelectedArray.push("Boomerang Guy");
  }
  console.log(benderSelectedArray)

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
/*  var street = document.getElementById("street").value;
  var house = document.getElementById("house").value;*/
  var recipient = document.getElementById("recipient").value;
  //var mood = document.getElementById("mood").value;

           var moodlist = document.getElementsByName('mood');

             for(i = 0; i < moodlist.length; i++) {
                 if(moodlist[i].checked)
                 var mood = moodlist[i].value;
               }

  console.log(mood)

  customerInfoArray = [name, email, recipient, mood];

//  console.log(customerInfoArray)



}
