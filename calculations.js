
var multipliers = [105, 102, 113, .79, 1100, 4400, -184, -166]
var dataValues = document.getElementById("data");

dataValues.addEventListener("submit", (e) => {
    e.preventDefault();
    var values = dataValues.elements
    var total = 0;

    for (var i = 0; i < values.length-1; i++){
        var currVal = values[i].value
        
        if (currVal > 0){
            total += currVal * multipliers[i];
        } else {
            total += currVal + -multipliers[i];
        }

        //alert(total);
    }

    var finalText = document.getElementById("total");
    finalText.innerHTML = "Total: " + total;

    // alert(dataValues.elements[0].value);
});

// var finalText = document.getElementById("total");
// finalText.innerHTML = "Total: " + firstName.value;