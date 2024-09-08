const searchButton=document.getElementById("search");
searchButton.addEventListener("focus",function(){
    document.getElementById("search").style.outline="none";
    document.getElementById("bi-search-hide").style.display="none";
    document.getElementById("bi-arrow-left-show").style.display="inline-block";
});

searchButton.addEventListener("blur",function(){    
    document.getElementById("bi-search-hide").style.display="inline-block";
    document.getElementById("bi-arrow-left-show").style.display="none";
});

const biSearchHide=document.getElementById("bi-search-hide");
const biArrowLeftShow=document.getElementById("bi-arrow-left-show");
biSearchHide.addEventListener("click",function(){
    document.getElementById("bi-search-hide").style.display="none";
    document.getElementById("bi-arrow-left-show").style.display="inline-block";
});

biArrowLeftShow.addEventListener("click",function(){
    document.getElementById("bi-search-hide").style.display="none";
    document.getElementById("bi-arrow-left-show").style.display="inline-block";
});

const getChats=document.getElementById("getChats");
getChats.addEventListener("click",function(){
    document.getElementById("chats").display="block"
});

const getStatus=document.getElementById("getStatus");
getStatus.addEventListener("click",function(){

});

const getChannels=document.getElementById("getChannels");
getChannels.addEventListener("click",function(){

});

const getCommunities=document.getElementById("getCommunities");
getCommunities.addEventListener("click",function(){

});
