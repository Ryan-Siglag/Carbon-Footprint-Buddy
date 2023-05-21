
var multipliers = [1, 2, 3]
var dataValues = document.getElementById("data");

dataValues.addEventListener("submit", (e) => {
    e.preventDefault();
    // var firstName = document.getElementById("fname");
    // var finalText = document.getElementById("total");
    // finalText.innerHTML = "Total: " + firstName.value;
    //alert(firstName.value);
    var values = dataValues.elements
    var total = 0;

    for (var i = 0; i < values.length-1; i++){
        total += values[i].value * multipliers[i];
        alert(total);
    }

    var finalText = document.getElementById("total");
    finalText.innerHTML = "Total: " + total;

    // alert(dataValues.elements[0].value);
});

// var finalText = document.getElementById("total");
// finalText.innerHTML = "Total: " + firstName.value;