let wastes = [];
let quantities = [];

function addWaste() {
    let wasteType = document.getElementById("wasteType").value.trim();
    let quantity = parseFloat(document.getElementById("quantity").value);
    if (wasteType !== "" && !isNaN(quantity) && quantity >= 0) {
        wastes.push(wasteType);
        quantities.push(quantity);
        let table = document.getElementById("wasteTable");
        let row = table.insertRow(-1);
        row.insertCell(0).innerHTML = wasteType;
        row.insertCell(1).innerHTML = quantity;
        document.getElementById("wasteType").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("output").innerHTML = "";
        document.getElementById("tips").innerHTML = "";
    } else {
        alert("Please enter a valid waste type and quantity (>= 0).");
    }
}

function calculateYield() {
    if (quantities.length === 0) {
        document.getElementById("output").innerHTML = "No waste data entered. Compost yield cannot be calculated.";
        document.getElementById("tips").innerHTML = "";
        return;
    }
    let total = quantities.reduce((a, b) => a + b, 0);
    let compost = total * 0.3; // Using 30% conversion
    let summary = "<strong>Summary:</strong><br>";
    for (let i = 0; i < wastes.length; i++) {
        summary += wastes[i] + ": " + quantities[i] + " kg<br>";
    }
    summary += "<br><strong>Total Waste Entered:</strong> " + total.toFixed(2) + " kg";
    summary += "<br><strong>Estimated Compost Yield:</strong> " + compost.toFixed(2) + " kg";
    document.getElementById("output").innerHTML = summary;
    document.getElementById("tips").innerHTML = "Tip: Turn and moisten compost regularly for best results!";
}
