let graphImage = document.getElementById("graph-image");
let dropdown = document.querySelector(".year");
let form = document.querySelector(".form-Popup");
let addbtn = document.querySelector(".top-btn");
let addcusbtn = document.getElementById("add-customer");
let closecubtn = document.getElementById("close-customer");
let nameinput = document.getElementById("customer-name");
let companyinput = document.getElementById("customer-company");
let emailinput = document.getElementById("customer-email");
let statusinput = document.getElementById("customer-status");
let valueinput = document.getElementById("customer-value");
let joineddateinput = document.getElementById("customer-joined");
let dateinput = document.getElementById("customer-date");
let tablebody = document.querySelector("tbody");



let customer = [
    {
        name: "Ali Khan",
        company: "TechCorp",
        email: "alikhan23@gmail.com",
        status: "active",
        value: "$2,400		",
        joineddate: "Aug 30, 2024",
        date: "Aug 30",
        img: "../Image/ali.jpg"
    },


    {
        name: "Ahmed Raza",
        company: "Nova Ltd",
        email: "razaahmed@gmail.com",
        status: "Pending",
        value: "$1,200		",
        joineddate: "May 21, 2024",
        date: "Aug 29",
        img: "../Image/ahmed.jpg"

    },


    {
        name: "Sara Ahmed",
        company: "DesignCo",
        email: "saraahemd11@gmail.com",
        status: "Active",
        value: "$3,500",
        joineddate: "Aug 10, 2023",
        date: "Aug 28",
        img: "../Image/sara.jpg"

    },



    {
        name: "Usman Khan",
        company: "SoftTech",
        email: "khanusmanmuhammad@gmail.com",
        status: "Inactive",
        value: "$800",
        joineddate: "Sep 1, 2026",
        date: "Aug 28",
        img: "../Image/usman.jpg"

    },


    {
        name: "Rafay Khan",
        company: "PixelWorld",
        email: "rafaykhan233@gmail.com",
        status: "Active",
        value: "$800",
        joineddate: "Sep 1, 2026",
        date: "Aug 28",
        img: "../Image/rafay.jpg"

    },


]

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





addbtn.addEventListener("click", function () {
    form.style.display = "flex";
})

closecubtn.addEventListener("click", function () {
    form.style.display = "none";
})

addcusbtn.addEventListener("click", () => {
    let nameofinput = nameinput.value;
    let nameofcompany = companyinput.value;
    let nameofstatus = statusinput.value;
    let nameofvalue = valueinput.value;
    let nameofdate = dateinput.value;


    let spantag = document.createElement("span");
    spantag.textContent = nameofstatus;

    if (nameofstatus === "Active") {
        spantag.classList.add("status-active");
    } else if (nameofstatus === "Inactive") {
        spantag.classList.add("status-inactive");
    } else if (nameofstatus === "Pending") {
        spantag.classList.add("status-pending");
    }


    let newcustomerobj = {
        name: nameofinput,
        company: nameofcompany,

        status: nameofstatus,
        value: nameofvalue,
        date: nameofdate

    }

    customer.push(newcustomerobj);


    let newtr = document.createElement("tr");

    let nametd = document.createElement("td");
    let companytd = document.createElement("td");
    let statustd = document.createElement("td");
    let valuetd = document.createElement("td");
    let datetd = document.createElement("td");



    nametd.textContent = newcustomerobj.name;
    newtr.appendChild(nametd);


    companytd.textContent = newcustomerobj.company;
    newtr.appendChild(companytd);


    statustd.appendChild(spantag);
    newtr.appendChild(statustd);

    valuetd.textContent = newcustomerobj.value;
    newtr.appendChild(valuetd);

    datetd.textContent = newcustomerobj.date;
    newtr.appendChild(datetd);


    tablebody.appendChild(newtr);
    statustd.appendChild(spantag);



    nameinput.value = "";
    companyinput.value = "";
    statusinput.value = "";
    valueinput.value = "";
    dateinput.value = "";

})
