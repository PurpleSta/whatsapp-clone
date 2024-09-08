const all=document.getElementById("all");
all.addEventListener("click",function(){
    document.getElementById("all").style.backgroundColor="rgb(0, 38, 0)";
    document.getElementById("all").style.color="green";
    document.getElementById("unread").style.backgroundColor="rgb(73, 72, 72)";
    document.getElementById("unread").style.color="grey";
    document.getElementById("groups").style.backgroundColor="rgb(73, 72, 72)";
    document.getElementById("groups").style.color="grey";
})
const unread=document.getElementById("unread");
unread.addEventListener("click",function(){
    document.getElementById("all").style.backgroundColor="rgb(73, 72, 72)";
    document.getElementById("all").style.color="grey";
    document.getElementById("unread").style.backgroundColor="rgb(0, 38, 0)";
    document.getElementById("unread").style.color="green";
    document.getElementById("groups").style.backgroundColor="rgb(73, 72, 72)";
    document.getElementById("groups").style.color="grey";
})
const groups=document.getElementById("groups");
groups.addEventListener("click",function(){
    document.getElementById("all").style.backgroundColor="rgb(73, 72, 72)";
    document.getElementById("all").style.color="grey";
    document.getElementById("groups").style.backgroundColor="rgb(0, 38, 0)";
    document.getElementById("groups").style.color="green";
    document.getElementById("unread").style.backgroundColor="rgb(73, 72, 72)";
    document.getElementById("unread").style.color="grey";
})