//like button
var clicks = 14;

document.getElementById("clicks").innerHTML = clicks;

$('.like-counter').click(function() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  $('.like-counter').addClass("liked");
});

//colorpicker code
let colorpicker = document.getElementById('colorpicker');

  setInterval(()=>{
    let color = colorpicker.ariaValueMax;
    document.body.style.backgroundColor = color;
  }, 200);