function checkBuzzwords(buzzwords, body) {
  var missingBuzzwords = [];
  var hasBuzzwords = [];
  for (var i = 0; i < buzzwords.length; i++) {
    var word = buzzwords[i].toLowerCase();
    if (body.indexOf(word) === -1) {
      missingBuzzwords.push(word);
    } else {
      hasBuzzwords.push(word);
    }
  }
  return {
    missingBuzzwords: missingBuzzwords,
    hasBuzzwords: hasBuzzwords,
  };
}

$(document).ready(function () {
  // Add a submit event listener to the form
  $("#buzzword-form").submit(function (event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the buzzwords and resume texts
    var buzzwords = $("#buzzwords-text")
      .val()
      .split("\n")
      .map(function (word) {
        return word.trim();
      });
    var body = $("#resume-text").val();

    // Call the buzzword checker function with the buzzwords and resume contents
    var result = checkBuzzwords(buzzwords, body.toLowerCase());
    // Display the result
    $("#result").empty();
    $("#result").append("<h2>Has buzzwords:</h2>");
    result.hasBuzzwords.forEach(function (word) {
      $("#result").append("<p>" + word + "</p>");
    });
    $("#result").append("<h2>Missing buzzwords:</h2>");
    result.missingBuzzwords.forEach(function (word) {
      $("#result").append("<p>" + word + "</p>");
    });
  });
});
