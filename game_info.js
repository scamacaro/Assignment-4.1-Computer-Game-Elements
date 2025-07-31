function processPlayerInfo() {
  // get the player username
  let txtName = document.getElementById("txtName");

  // get the weapon selection
  let txtWeapon = document.getElementById("txtWeapon");

  // get the health value
  let txtHealth = document.getElementById("txtHealth");

  // get the damage value
  let txtDamage = document.getElementById("txtDamage");

  // get the point total
  let txtPoints = document.getElementById("txtPoints");

  // divOutput
  let divOutput = document.getElementById("divOutput");

  // divPlayerInfo
  let divPlayerInfo = document.getElementById("divPlayerInfo");

  // display the player info on the page
  divPlayerInfo.innerHTML = "Username: " + txtName.value +
    "<br>Weapons: " + txtWeapon.value +
    "<br>Health: " + txtHealth.value +
    "<br>Damage: " + txtDamage.value +
    "<br>Point Total: " + txtPoints.value;

  // change the style back to block so the div contents will be visible
  divOutput.style.display = "block";

  // set the textboxes to blank values
  txtName.value = "";
  txtWeapon.value = "";
  txtHealth.value = "";
  txtDamage.value = "";
  txtPoints.value = "";
}
