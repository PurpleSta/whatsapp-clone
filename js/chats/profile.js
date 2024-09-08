const hideArrow=document.getElementById("hideArrow");
hideArrow.addEventListener("click",function(){
    const profileArrow=document.getElementById("profileArrow");
    profileArrow.style.display="none"
})

const showArrow=document.getElementById("showArrow");

showArrow.addEventListener("click",function(){
    document.getElementById("profileArrow").style.display="inline-block";
});