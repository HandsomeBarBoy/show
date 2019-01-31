function cc(){
    var c = document.getElementById("user");
    c.value = "";
}
function tt(){
    var t = document.getElementById("user").value;
    var a = document.getElementById("clear-user");
    if(t.length==0){
        a.style.display="none";
    }else{
        a.style.display="inline-block";
    }
}
setInterval(tt,10);
function tt1(){
    var t = document.getElementById("password").value;
    var a = document.getElementById("clear-password");
    if(t.value==" "){
        a.style.display="none";
    }else{
        a.style.display="inline-block";
    }
}
setInterval(tt1,10);
