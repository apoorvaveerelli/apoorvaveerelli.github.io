//Load HTTP module
const http = require("http");
const { RecipeSearchClient } = require('edamam-node');
const hostname = '127.0.0.1';
const port = 3000;

const cors = require('cors');


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // router.get('/', function(req, res) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    // res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    //
    // res.send('cors problem fixed:)');
    // });


    res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const accountSid = 'AC3f59ac6954fd1f306c93232b245d6c1d';
const authToken = 'beaede553d1e025aa7782b79e7627e43';

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Good morning! Hope you had a restful sleep! Don\'t forget to do your morning stretches! Hope these stretches help you get ready for the day! https://www.prevention.com/fitness/g20490060/do-these-stretches-before-getting-out-of-bed/',
        from: '+13055478770',
        mediaUrl: ['https://media.giphy.com/media/l1LcgG7BBU5jAgdlm/giphy.gif'],
        to: '+14088069023'
    })
    .then(message => console.log(message.sid));



function validate() { 
    var meat = document.querySelectorAll("[name=meat]"); 
    var count = 0, meatIngredient = []; 
    for (var i = 0; i < meat.length; i++) { 
         if (meat[i].checked) { 
              count++; 
              meatIngredient.push(meat[i].value); 
         } 
    }  
    var vegetable = document.querySelectorAll("[name=vegetable]");
    var vcount = 0, vegIngredient = []; 
    for (var i = 0; i < vegetable.length; i++) { 
         if (vegetable[i].checked) { 
              vcount++; 
              vegIngredient.push(vegetable[i].value); 
         } 
    } 

    var vegan = document.querySelectorAll("[name=vegan]");
    var vgcount = 0, veganIngredient = []; 
    for (var i = 0; i < vegan.length; i++) { 
         if (vegan[i].checked) { 
              vgcount++; 
              veganIngredient.push(vegan[i].value); 
         } 
    } 

    // console.log(meatIngredient)
    // console.log(vegIngredient)
    // console.log(veganIngredient)

    var final_ingredients = meatIngredient.concat(vegIngredient, veganIngredient)
//     var final_ingredients = final_ingredients.concat(meatIngredient, vegIngredient, veganIngredient)
//     console.log(final_ingredients.join())

    return final_ingredients.join();
}

// console.log(validate())

var YOUR_APP_ID = 'a73c8a00'
var YOUR_APP_KEY = 'ab67f388765266bb260ce11257bf6ff2'

// var YOUR_APP_ID = 'application_4796256'
// var YOUR_APP_KEY = '5305581944mshffd3f789f98d110p1781e0jsn69271f5ca1a2'
// document.getElementById("recipeTitle").value = recipes()


 async function recipes() {
     // var recipeTitle = document.getElementById("recipeTitle")
     document.getElementById('recipeGive').style.display = "block";
     var YOUR_APP_ID = 'a73c8a00'
     var YOUR_APP_KEY = 'ab67f388765266bb260ce11257bf6ff2'
     console.log("hellooooo")
     var list = validate()
     console.log(list)
      var result = await fetch(`https://api.edamam.com/search?q=${list}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=5&calories=591-722`)
      .then(response => response.json())
      console.log("result", result)

      var recipeIng = []


      

      var recipeTitle = document.getElementById("recipeTitle")
      recipeTitle.innerHTML = result.hits[0].recipe.label
      var recipeImage = document.getElementById("recipeImage")
      recipeImage.src = result.hits[0].recipe.image
      var recipeIngredients = document.getElementById("recipeIngredients")
      for(i = 0; i < result.hits[0].recipe.ingredients.length; i++) {
           console.log(result.hits[0].recipe.ingredients[i]["text"])
           
           recipeIng.push("— " + result.hits[0].recipe.ingredients[i]["text"])


           
      }
      recipeIngredients.innerHTML = recipeIng.join().split(",").join("<br/>")

      var recipeUrl = document.getElementById("recipeUrl")
      recipeUrl.innerHTML = result.hits[0].recipe.url
      console.log(result.hits[0].recipe.url)
     
 }


 async function getNewRecipe(x) {
     // var recipeTitle = document.getElementById("recipeTitle")
     var list = validate()
     console.log(list)
      var result = await fetch(`https://api.edamam.com/search?q=${list}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=6&calories=591-722`)
      .then(response => response.json())
      console.log(result)

      var recipeIng = []


      var x = Math.floor((Math.random() * result.hits.length) + 0)

      console.log(x)
      console.log(result.hits[x])


      var recipeTitle = document.getElementById("recipeTitle")
      recipeTitle.innerHTML = result.hits[x].recipe.label
      var recipeImage = document.getElementById("recipeImage")
      recipeImage.src = result.hits[x].recipe.image
      var recipeIngredients = document.getElementById("recipeIngredients")
      for(i = 0; i < result.hits[x].recipe.ingredients.length; i++) {
           console.log(result.hits[x].recipe.ingredients[i]["text"])
           
           recipeIng.push("— " + result.hits[x].recipe.ingredients[i]["text"])


           
      }
      recipeIngredients.innerHTML = recipeIng.join().split(",").join("<br/>")

      var recipeUrl = document.getElementById("recipeUrl")
      recipeUrl.innerHTML = result.hits[x].recipe.url
      console.log(result.hits[x].recipe.url)

     // var recipeButton = document.getElementById("recipeButton")
     //  var link = document.getElementById("link")
     //  var recipeDiv = document.getElementById("recipeDiv")
     // if(x == 1) {
     //      recipeButton.style.visibility = 'visible'
     //      link.style.display = 'visible'
     //      recipeDiv.style.display = 'visible'
     // }
     
 }

//  function makeVisible(x) {
//      //  var recipeButton = document.getElementById("recipeButton")
//      //  var link = document.getElementById("link")
//       var recipeDiv = document.getElementById("recipeDiv")
//      if(x == 1) {
//           // recipeButton.style.visibility = 'visible'
//           // link.style.display = 'visible'
//           recipeDiv.style.display = 'visible'
//      }
//  }


//  var btn = document.getElementById("magic");
//  var myPopup = document.getElementById("myPopup");
//  var span = document.getElementsByClassName ("close")[0];


//  btn.onclick = function() {
//      myPopup.style.display = "block";
// }

//  span.onclick = function() {
//      myPopup.style.display = "none";
//    }
//    window.onclick = function(event) {
//      if (event.target == myPopup) {
//        myPopup.style.display = "none";
//      }
//    }
   



//  https://api.edamam.com/search?q=chicken&app_id=$%7BYOUR_APP_ID%7D&app_key=$%7BYOUR_APP_KEY%7D&from=0&to=3&calories=591-722&health=alcohol-free
