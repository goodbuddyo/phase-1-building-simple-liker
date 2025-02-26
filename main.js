// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART='♡'
const FULL_HEART='♥'

const glyphStates={
  "♡": "♥",
  "♥": "♡"
};

const colorStates={
  "red": "",
  "": "red"
};

// Your JavaScript code goes here!


const articleHearts=document.querySelectorAll(".like-glyph");
const errorModal=document.getElementById("modal");

function likeCallback(e) {
  const heart=e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      //alert("You notified the server!");
      alert(serverMessage);
      heart.innerText=glyphStates[heart.innerText];
      heart.style.color=colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
      document.getElementById("modal").classList.remove('hidden');
      let card=document.createElement('div')
      card.innerHTML=`${error.message}`
      console.log(error.message);
      document.getElementById("modal").appendChild(card)

    });
}

for(const glyph of articleHearts) {
  glyph.addEventListener("click",likeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com",config={}) {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      let isRandomFailure=Math.random()<.2
      if(isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    },100);
  });
}

