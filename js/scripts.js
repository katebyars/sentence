$(document).ready(function() {

  $("form").submit(function(event) {
    var userInput = $("#userInput").val().split(" ");
    var overThree = userInput.map(function(word) {
      if (word.length>=3) {
        return word;
        }
    });
      var reverse = overThree.reverse();
      var join = reverse.join(" ");
      alert(join);
      event.preventDefault();
    });
  });
