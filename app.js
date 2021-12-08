



var ol = document.getElementById("li")

ol.style.fontSize="25px"
ol.style.color="white"


function add(){
    var add1 = document.getElementById("inpt")
    // console.log(add1.value)


    
    
if(inpt.value.length > 3){
    
    var li = document.createElement("li")
    var txt = document.createTextNode(inpt.value)
    li.appendChild(txt)
    // console.log(li)
   li.style.border="1px solid orange"
   li.style.listStylePosition ="inside" 
   li.style.paddingTop="10px"
   li.style.marginTop="10px"
   li.style.height="40px"
   li.style.marginRight="30px"
   li.style.borderRadius="50px"
   li.style.paddingLeft="10px"
   li.style.backgroundColor="#78a4d68e"
    
    var dlt = document.createElement("span")
     dlt.setAttribute("onclick","dlist(this)")
     dlt.className="far fa-times-circle"
    dlt.style.color="#78ffd6"
    dlt.style.marginLeft="10px"
    
    
    var dlt1 = document.createElement("span")
    dlt1.setAttribute("onclick","dlist1(this)")
    dlt1.className="fas fa-edit"
    dlt1.style.color="#FFAF7B"
    dlt1.style.marginLeft="120px"
     
    
    
    li.appendChild(dlt1)
    li.appendChild(dlt)
    ol.appendChild(li)
    inpt.value= ""

}
    else{
        alert("write something more than 3 words")
    }
    }

function Delete(){
ol.innerHTML =" "
}

function dlist(e){
    e.parentNode.remove()
    
}

function dlist1(e){
var pro = prompt("enter edit value" ,e.parentNode.firstChild.nodeValue)

if(pro.length <=3 ){
     alert("invalid")
     
    
}
else{
    e.parentNode.firstChild.nodeValue=pro
}
}
var sd=document.getElementById("ad")
sd.className="far fa-file-plus"
sd.style.fontSize="40px"
sd.style.color="#73C8A9"

sd.style.marginTop="10px"
sd.style.marginLeft="35px"

var dt =document.getElementById("dl")
dt.className= "fas fa-trash-alt"
dt.style.fontSize="40px"
dt.style.color="#ffcc33"
dt.style.marginLeft="10px"

