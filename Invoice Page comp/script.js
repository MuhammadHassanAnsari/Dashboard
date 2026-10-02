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
let option = document.querySelector("#status-option");
let option2 = document.querySelector("#company-option");

let rows = document.querySelectorAll("tbody tr")




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



option.addEventListener("change", () => {
    let optionvalue = option.value;

    rows.forEach((row) => {
        let selectedrow = row.querySelector("td:nth-child(4)");
        let selectedrowvalue = selectedrow.innerText.trim();

        console.log(selectedrowvalue);

        if(optionvalue === "All"){
            row.style.display = "";

        }
        else if(optionvalue === selectedrowvalue){
            row.style.display = "";
        } else{
            row.style.display = "none";

        }
    })

})


option2.addEventListener("change", () => {
    let optionvalue2 = option2.value;

    rows.forEach((row) => {
        let selectedrow2 = row.querySelector("td:nth-child(2)");
        let selectedrowvalue = selectedrow2.innerText.trim();

        if (optionvalue2 === "All") {
            row.style.display = "";
        }
        else if (optionvalue2 === selectedrowvalue) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
});