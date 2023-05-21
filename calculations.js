
var multipliers = [105, 102, 113, .79, 1100, 4400, 184, 166]
var dataValues = document.getElementById("data");

sessionStorage.setItem('total', 88);


dataValues.addEventListener("submit", (e) => {
    e.preventDefault();
    var values = dataValues.elements;
    var total = 0;

    for (var i = 0; i < values.length-3; i++){
        var currVal = values[i].value;
        total += currVal * multipliers[i];
        
        // if (currVal != null){
        //     total += currVal * multipliers[i];
        // }
    }

    for (var i = values.length-3; i < values.length-1; i++){
        var currVal = values[i].value;

        if (currVal){
            total += multipliers[i];
        }
    }
    alert(total);
    sessionStorage.setItem('total', total);
    window.location.href = "/results.html"
    // var finalText = document.getElementById("total");
    // finalText.innerHTML = "Total: " + total;

    
    //alert("Yee haw")

});