//function copyEmail() {
//  /* Get the text field */
//  var copyText = "document.getElementById("myInput")";
//
//  /* Select the text field */
//  copyText.select();
//  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
//
//  /* Copy the text inside the text field */
//  document.execCommand("copy");
//
//  /* Alert the copied text */
//  alert("You've just copied my email address: " + copyText.value + " – Let's talk soon :-)");
//}


function copyEmail() {
  var copyText = document.getElementById("myInput");

  /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999);

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Good News! My email address " + copyText.value + " has been copied to your clipboard. I look forward to hearing from you soon!");
}