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
    if(t.length==0){
        a.style.display="none";
    }else{
        a.style.display="inline-block";
    }
}
setInterval(tt1,10);

function cc1(){
    var c = document.getElementById("password");
    c.value = "";
}
function ch(){
    var small = document.getElementById("password-login");
    var big = document.getElementById("login");
	small.style.transform='scale(0)';
	small.style.opacity='0';
    small.style.transitionDuration='1s';
    
    big.style.transform='scale(1)';
	big.style.opacity='1';
    big.style.transitionDuration='1s';
}
function gopass(){
    var small = document.getElementById("login");
    var big = document.getElementById("password-login");
    small.style.transform='scale(0)';
	small.style.opacity='0';
    small.style.transitionDuration='1s';

    big.style.transform='scale(1)';
	big.style.opacity='1';
	big.style.transitionDuration='1s';
}