let graphImage = document.getElementById("graph-image");
let dropdown = document.querySelector(".year");

dropdown.addEventListener("change", function (e) {
    let check = e.target.value;

    if (check === "This Year") {
        graphImage.src = "../Image/Line_graph-removebg-preview.png";
    }

    else if (check === "This Week") {
        graphImage.src = "../Image/week.png";
    }

    else if (check === "This Month") {
        graphImage.src = "../Image/month.png"
    }

    else if (check === "Last Year") {
        graphImage.src = "../Image/lastyear.png";
    }
})





