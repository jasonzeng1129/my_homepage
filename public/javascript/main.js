setTimeout(addHide, 2000);
function addHide(){
  $(".description").addClass("hide");
}
setTimeout(showBubble, 2000);
function showBubble(){
  $(".bubble--hide").removeClass("bubble--hide");
}
