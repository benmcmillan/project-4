//jshint esversion: 6

let controller = function() {


  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      //log the list of paragraph elements
      localStorage.setItem("toDoList", $(".comments").html());
      console.log($(".comments").html());
    }
  };


  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });

if (window.localStorage != "") {
  return $(".comments").html(localStorage.getItem("toDoList")) ;
}
else {
  return null;

}};

$(document).ready(controller);

/*$(document).ready(() => {
  //call the delete button and assign the click part the onevent handler XCCCC
)};*/
