function resolve(num1, operation, num2) {
  var result;

  switch (operation) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return "";
  }
}

$(document).ready(function() {
  var num1;
  var op;
  var num2;
  var newValue = true;

  $(".operation").on("click", function(event) {
    if ($(this).attr("id") === "substract" && ($("#screen").val() === "" || newValue)) {
      $("#screen").val("-");
      newValue = false;
    } else {
      op = $(this).attr("id");
      num1 = Number($("#screen").val());
      newValue = true;
    }
  });

  $("#clear").on("click", function(event) {
    $("#screen").val("");
  });

  $("#result").on("click", function(event) {
    num2 = Number($("#screen").val());
    $("#screen").val(resolve(num1, op, num2));
  });

  $(".number").on("click", function(event) {
    if (newValue) {
      $("#screen").val("");
      newValue = false;
    }
    var oldValue = $("#screen").val();
    $("#screen").val(oldValue + $(this).text());
  })

  $("#screen").on("keydown", function(event) {
    if (event.which == 106) {
      event.preventDefault();
      $("#multiply").triggerHandler("click");
    } else if (event.which == 107) {
      event.preventDefault();
      $("#add").triggerHandler("click");
    } else if (event.which == 109) {
      event.preventDefault();
      $("#substract").triggerHandler("click");
    } else if (event.which == 111) {
      event.preventDefault();
      $("#divide").triggerHandler("click");
    } else if (event.which == 13) {
      event.preventDefault();
      $("#result").triggerHandler("click");
    } else if (event.which >= 96 && event.which <= 111) {
      if (newValue) {
        $("#screen").val("");
        newValue = false;
      }
    }
  })
});
