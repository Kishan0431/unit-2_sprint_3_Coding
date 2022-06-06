// fill in javascript code here

var form = document.querySelector("form").addEventListener("submit",Myform);

function Myform(event){
    event.preventDefault(event);
   
   var name = document.querySelector("#name").value;
   let emplid= document.querySelector("#employeeID").value;
   let dep = document.querySelector("#department").value;
   let exp = document.querySelector("#exp").value;
   let email = document.querySelector("#email").value;
   let mbl = document.querySelector("#mbl").value;
    
   var tr = document.createElement("tr");

   var td1 = document.createElement("td");
   td1.innerText = name;

   var td2 = document.createElement("td");
   td2.innerText = emplid;

   var td3 = document.createElement("td");
   td3.innerText = dep;

   var td4 = document.createElement("td");
   td4.innerText = exp;


   var td5= document.createElement("td");
   td5.innerText = email;

   var td6= document.createElement("td");
   td6.innerText = mbl;

   var td7 = document.createElement("td");

   var E = Number(exp);
   if(E>5){
       td7.innerText = "Senior";
   }
   else if(E>2 && E<5){
       td7.innerText = "Junior";
   }
   else{
       td7.innerText = "Fresher";
   }
   tr.append(td1,td2,td3,td4,td5,td6,td7);
    document.querySelector("tbody").append(tr);
   
   

}
