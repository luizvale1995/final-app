
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();


 var url = "final-app/src/components/Photos/Photo/jsonFile/Photos.json";
  xmlhttp.onreadystatechange = function() {
       if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { 
           var myArray = JSON.parse(xmlhttp.responseText); 
           console.log(myArray)
         } 
        };

    xmlhttp.open("GET", url, true);
     console.log(xmlhttp.send())

      function myFunction(array) { 
          var out = ""; var j;
           for(j = 0; j < array.length; j++) 
           { out += '<a href="' + arr[i].url + '">' + array[j].display + '</a><br>'; } 
           document.getElementById("id01").innerHTML = out; }