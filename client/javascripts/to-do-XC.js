  //jshint esversion: 6


let controller = function() {

let deleteComments = function(){
    localStorage.setItem("toDoList", "<p><b>2do List</b></p><p>Get started on P4 early.</p><p>Start Reviewing for the Final</p><p>Summer is Soon!</p>");
    $(".comments").html(localStorage.getItem("toDoList"));
    console.log("yeet");
  };

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

  $(".button2").on("click", function(event) {
    deleteComments();
  });


if (window.localStorage !== null && window.localStorage.toDoList !== null) {
  $(".comments").html(localStorage.getItem("toDoList"));
}
else {
  localStorage.setItem("toDoList", "");
  return;
}};


$(document).ready(controller);
