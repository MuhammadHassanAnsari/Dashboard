let tasks = [
    {
        task: "Follow up with TechCorp",
        assigner: "Hassan",
        priority: "High",
        status: "Pending",
        duedate: "Aug 30, 2024"
    },

    {
        task: "Prepare Proposal for DesignCo",
        assigner: "Sara",
        priority: "Medium",
        status: "In Progress",
        duedate: "Aug 31, 2024"
    },

    {
        task: "Update contract with SoftTech",
        assigner: "Usman",
        priority: "High",
        status: "Pending",
        duedate: "Oct 3, 2024"
    },

    {
        task: "Send Invoice to Nova Ltd",
        assigner: "Hassan",
        priority: "Low",
        status: "Complete",
        duedate: "Aug 2, 2024"
    },

    {
        task: "Client meeting with CreativeHub",
        assigner: "Sara",
        priority: "Medium",
        status: "In Progress",
        duedate: "Sep 2, 2024"
    }
];


let inputbtn = document.querySelector(".input-recent");
let body = document.querySelector("body");
let addbtn = document.querySelector(".top-btn");
let formPopup = document.querySelector(".form-Popup");

let addcusbtn = document.getElementById("add-customer");
let closecusbtn = document.getElementById("close-customer");

let taskinput = document.getElementById("customer-name");
let assignerinput = document.getElementById("customer-company");
let priorityinput = document.getElementById("customer-email");
let statusinput = document.getElementById("customer-status");
let duedateinput = document.getElementById("customer-joined");

let tablebody = document.querySelector("tbody");

let option = document.querySelector("#status-option");
let option2 = document.querySelector("#company-option");



let popupdiv = document.createElement("div");

popupdiv.classList.add("customer-popup");

let headingtask = document.createElement("h3");
let headingassigner = document.createElement("h5");
let headingpriority = document.createElement("h5");
let headingstatus = document.createElement("h5");
let headingduedate = document.createElement("h5");
let closebtn = document.createElement("button");

popupdiv.appendChild(headingtask);
popupdiv.appendChild(headingassigner);
popupdiv.appendChild(headingpriority);
popupdiv.appendChild(headingstatus);
popupdiv.appendChild(headingduedate);
popupdiv.appendChild(closebtn);

body.appendChild(popupdiv);

popupdiv.style.display = "none";


closebtn.addEventListener("click", function () {
    popupdiv.style.display = "none";
});


inputbtn.addEventListener("input", function () {

    let search = inputbtn.value.trim();

    let result = tasks.find(function (element) {
        return search.toLowerCase() === element.task.toLowerCase();
    });

    if (result) {

        popupdiv.style.display = "block";

        headingtask.innerText = result.task;
        headingassigner.innerText = "Assigner: " + result.assigner;
        headingpriority.innerText = "Priority: " + result.priority;
        headingstatus.innerText = "Status: " + result.status;
        headingduedate.innerText = "Due Date: " + result.duedate;

        closebtn.innerText = "Close";
    }
});


addbtn.addEventListener("click", function () {
    formPopup.style.display = "flex";
});



addcusbtn.addEventListener("click", function () {

    let taskofinput = taskinput.value;
    let assignerofinput = assignerinput.value;
    let priorityofinput = priorityinput.value;
    let statusofinput = statusinput.value;
    let duedateofinput = duedateinput.value;


    let newtaskobject = {
        task: taskofinput,
        assigner: assignerofinput,
        priority: priorityofinput,
        status: statusofinput,
        duedate: duedateofinput
    };


    tasks.push(newtaskobject);



    let newtr = document.createElement("tr");

    let tasktd = document.createElement("td");
    let assignertd = document.createElement("td");
    let prioritytd = document.createElement("td");
    let statustd = document.createElement("td");
    let duedatetd = document.createElement("td");



    let crossspan = document.createElement("span");

    crossspan.classList.add("cross");
    crossspan.textContent = "❌";



    let statusspan = document.createElement("span");

    statusspan.textContent = newtaskobject.status;



    tasktd.textContent = newtaskobject.task;
    tasktd.prepend(crossspan);
    assignertd.textContent = newtaskobject.assigner;

    prioritytd.textContent = newtaskobject.priority;

    duedatetd.textContent = newtaskobject.duedate;



    if (newtaskobject.priority === "High") {

        prioritytd.classList.add("piority-high");

    } else if (newtaskobject.priority === "Medium") {

        prioritytd.classList.add("piority-medium");

    } else if (newtaskobject.priority === "Low") {

        prioritytd.classList.add("piority-low");
    }



    if (newtaskobject.status === "Pending") {

        statusspan.classList.add("piority-medium");

    } else if (newtaskobject.status === "In Progress") {

        statusspan.classList.add("status-active");

    } else if (newtaskobject.status === "Complete") {

        statusspan.classList.add("piority-low");
    }



    statustd.appendChild(statusspan);



    newtr.appendChild(tasktd);
    newtr.appendChild(assignertd);
    newtr.appendChild(prioritytd);
    newtr.appendChild(statustd);
    newtr.appendChild(duedatetd);



    tablebody.appendChild(newtr);


    taskinput.value = "";
    assignerinput.value = "";
    priorityinput.value = "";
    statusinput.value = "";
    duedateinput.value = "";



    formPopup.style.display = "none";
});



tablebody.addEventListener("click", function (e) {

    if (e.target.classList.contains("cross")) {

        let td = e.target.parentElement;
        let tr = td.parentElement;

        tr.remove();
    }
});



closecusbtn.addEventListener("click", function () {

    formPopup.style.display = "none";
});

option.addEventListener("change", function () {

    let optionvalue = option.value;

    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(function (row) {

        let selectedrow = row.querySelector("td:nth-child(3)");

        let valueofselectedrow = selectedrow.innerText.trim();


        if (optionvalue === "All") {

            row.style.display = "";

        } else if (optionvalue === valueofselectedrow) {

            row.style.display = "";

        } else {

            row.style.display = "none";
        }
    });
});


// ================= STATUS FILTER =================

option2.addEventListener("change", function () {

    let optionvalue2 = option2.value;

    let rows = document.querySelectorAll("tbody tr");


    rows.forEach(function (row) {

        let selectedrow2 = row.querySelector("td:nth-child(4)");

        let selectedrowvalue = selectedrow2.innerText.trim();


        if (optionvalue2 === "All") {

            row.style.display = "";

        } else if (optionvalue2 === selectedrowvalue) {

            row.style.display = "";

        } else {

            row.style.display = "none";
        }
    });
});