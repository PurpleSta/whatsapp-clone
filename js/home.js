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
    document.getElementById("chats").style.display="block";
    document.getElementById("status").style.display="none";
    document.getElementById("channel").style.display="none";
    document.getElementById("communities").style.display="none";
    document.getElementById("settings").style.display="none";
    document.getElementById("profile").style.display="none";
});

const getStatus=document.getElementById("getStatus");
getStatus.addEventListener("click",function(){
    document.getElementById("chats").style.display="none";
    document.getElementById("status").style.display="block";
    document.getElementById("channel").style.display="none";
    document.getElementById("communities").style.display="none";
    document.getElementById("settings").style.display="none";
    document.getElementById("profile").style.display="none";
});

const getChannels=document.getElementById("getChannels");
getChannels.addEventListener("click",function(){
    document.getElementById("chats").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("channel").style.display="block";
    document.getElementById("communities").style.display="none";
    document.getElementById("settings").style.display="none";
    document.getElementById("profile").style.display="none";

});

const getCommunities=document.getElementById("getCommunities");
getCommunities.addEventListener("click",function(){
    document.getElementById("chats").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("channel").style.display="none";
    document.getElementById("communities").style.display="block";
    document.getElementById("settings").style.display="none";
    document.getElementById("profile").style.display="none";
});

const getSettings=document.getElementById("getSettings");
getSettings.addEventListener("click",function(){
    document.getElementById("chats").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("channel").style.display="none";
    document.getElementById("communities").style.display="none";
    document.getElementById("settings").style.display="block";
    document.getElementById("profile").style.display="none";

});

const getProfile=document.getElementById("getProfile");
getProfile.addEventListener("click",function(){
    document.getElementById("chats").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("channel").style.display="none";
    document.getElementById("communities").style.display="none";
    document.getElementById("profile").style.display="block";
    document.getElementById("settings").style.display="none";
    
})


