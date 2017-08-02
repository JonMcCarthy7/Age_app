
$(document).ready(function(){
  $('#getAge').on('click', function(){
    var userAge = parseInt($('#userAge').val(), 10);
    if (isNaN(userAge)) {
      $('#results').html("It looks like you didn't put in a number...");
    } else if (userAge < 18) {
      $('#results').html("You are " + userAge + " Years old, go home kid...");
    } else if (userAge > 18 && userAge < 21) {
      $('#results').html("You are " + userAge + " Years old. " + "You are an adult, good for you.");
    } else if (userAge > 12 && userAge < 100) {
      $('#results').html("You are " + userAge + " Years old. " + "You are over 21! Let's Party!");
    } else if (userAge >= 100) {
      $('#results').html("You are " + userAge + " Years old. " + "How are you still alive?");
    } else {
      $('#results').html("IDK what happend...");
    }
  });
});


  // $(document).ready(function() {
  //   $("#getMessage").on("click", function(){
  //     // Only change code below this line.
  //     $(".message").html("Here is the message");
  //     // Only change code above this line.
  //   });
  // });
