
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
    let nameinput = document.getElementById("customer-name");
    let companynameinput = document.getElementById("customer-company");
    let emailinput = document.getElementById("customer-email");
    let statusinput = document.getElementById("customer-status");
    let valueinput = document.getElementById("customer-value");
    let joineddateinput = document.getElementById("customer-joined");
    let dateinput = document.getElementById("customer-date");
    let crosstext = document.querySelector(".cross");
    let tablebody = document.querySelector("tbody");


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


    addbtn.addEventListener("click", function () {
        formPopup.style.display = "flex";
    });

    addcusbtn.addEventListener("click", function () {

        let nameofinput = nameinput.value;
        let companynameofinput = companynameinput.value;
        let emailofinput = emailinput.value;
        let valueofinput = valueinput.value;
        let valueofstatus = statusinput.value;
        let valueofjoineddate = joineddateinput.value;
        let valueofdate = dateinput.value;
    

        let spantag = document.createElement("span");
        let crossspan = document.createElement("span");
        crossspan.classList.add("cross");

        spantag.textContent = valueofstatus;
        crossspan.textContent = "❌";
        
        if(valueofstatus === "Active") {
            spantag.classList.add("status-active");
        } else if (valueofstatus === "Inactive"){
            spantag.classList.add("status-inactive");
        } else if (valueofstatus === "Pending"){
            spantag.classList.add("status-pending");
        } 



        

        

        let newcustomerobject = {
            name: nameofinput,
            company: companynameofinput,
            email: emailofinput,
            value: valueofinput,
            status: valueofstatus,
            joineddate: valueofjoineddate,
            date: valueofdate
        }

        customer.push(newcustomerobject);



        let newtr = document.createElement("tr");
        let newtd = document.createElement("td");
        let newtdcompany = document.createElement("td");
        let newtdemail = document.createElement("td");
        let newtdvalue = document.createElement("td");
        let newtdstatus = document.createElement("td");
        let newtdjoineddate = document.createElement("td");
        let newtddate = document.createElement("td");
        


        tablebody.appendChild(newtr);
        newtr.appendChild(newtd);

        newtd.textContent = newcustomerobject.name;
        newtd.prepend(crossspan);
        newtr.appendChild(newtd);

        newtdcompany.textContent = newcustomerobject.company;
        newtr.appendChild(newtdcompany);

        newtdemail.textContent = newcustomerobject.email;
        newtr.appendChild(newtdemail);


        newtdstatus.appendChild(spantag);
        newtr.appendChild(newtdstatus);

        newtdvalue.textContent = newcustomerobject.value;
        newtr.appendChild(newtdvalue);


        newtdjoineddate.textContent = newcustomerobject.joineddate;
        newtr.appendChild(newtdjoineddate);

        newtddate.textContent = newcustomerobject.date;
        newtr.appendChild(newtddate);


    })


    tablebody.addEventListener("click", function(e){
            if(e.target.classList.contains("cross")){
                let td = e.target.parentElement;
                let tr = td.parentElement;

                tr.remove();
            }       
    })

    closecusbtn.addEventListener("click", function () {
        formPopup.style.display = "none";
    });




