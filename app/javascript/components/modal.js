// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
// var img = document.getElementById('myImg2');

// const ids = ['myImg', 'myImgTwo'];

// var img = document.getElementsByClassName('circle');

// document.getElementById('click').addEventListener('click', function(){
//     doStuff();
//   });

//   function doStuff() {
//     for(var i=1; i<=; i++){
//         var el = document.getElementById("myImg" + i);
//         el.style.display = 'none';
//     }
//   }

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
