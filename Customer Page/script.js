
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

let inputbtn = document.querySelector(".input-recent");
let body = document.querySelector("body");
let addbtn = document.querySelector(".top-btn");
let formPopup = document.querySelector(".form-Popup");
let addcusbtn = document.getElementById("add-customer");
let closecusbtn = document.getElementById("close-customer");
let 


let popupdiv = document.createElement("div");

popupdiv.classList.add("customer-popup");

let image = document.createElement("img");
let headingnamae = document.createElement("h3");
let headingcompany = document.createElement("h5");
let headingvalue = document.createElement("h5");
let closebtn = document.createElement("button");

popupdiv.appendChild(image);
body.appendChild(popupdiv);
popupdiv.appendChild(headingnamae);
popupdiv.appendChild(headingcompany);
popupdiv.appendChild(headingvalue);
popupdiv.appendChild(closebtn);


closebtn.addEventListener("click", function () {
    popupdiv.style.display = "none";
})

inputbtn.addEventListener("input", function () {
    let search = inputbtn.value;
    let result = customer.find(Element => {
        if (search === Element.name) {
            return Element;

        }
    }
    )
    let customerimage = result.img;
    image.src = customerimage;

    if (result) {
        popupdiv.style.display = "block";
        headingnamae.innerText = result.name;
        headingcompany.innerText = result.company;
        headingvalue.innerText = result.value;
        closebtn.innerText = "Close";

        let customerimage = result.img;
        image.src = customerimage;

        inputbtn.value = " ";
    }
})


addbtn.addEventListener("click", function(){
    formPopup.style.display = "flex";
})


closecusbtn.addEventListener("click", function(){
    formPopup.style.display = "none";
    
})
