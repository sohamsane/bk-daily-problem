var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();

function randomProb(maxLimit = 25) {
  const randomnum = Math.floor(Math.random() * maxLimit);
  var image = document.getElementById("problem-image").src = "Images/" + randomnum + ".jpg"

}
