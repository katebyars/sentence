$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var fearExclamationInput = $("input#fear_exclamation").val();
    var adjInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();
    var otherNounInput = $("input#other_noun").val();
    var weaponInput = $("input#weapon").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".fear_exclamation").text(fearExclamationInput);
    $(".adjective").text(adjInput);
    $(".noun").text(nounInput);
    $(".other_noun").text(otherNounInput);
    $(".weapon").text(weaponInput);

    $("#story").show();

    event.preventDefault();
  });
});
