var Candidate =  document.querySelector(".Candidate");
var Amitabh = document.querySelector(".Amitabh");
var h1 = document.querySelector("h1");
var main = document.querySelector(".main");

Amitabh.addEventListener("mouseenter", function(){
     main.style.backgroundColor="pink";
     h1.innerHTML = "🎉🎉🎉🎉✨Ek Crore✨🎉🎉🎉🎉";
     Candidate.setAttribute("src","https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/03/Pictures/_4968cf8a-c6d4-11e8-b5ea-e5f20716953f.JPG");
     Amitabh.setAttribute("src","https://www.scrolldroll.com/wp-content/uploads/2020/08/Ek-crore-kbc-memes.jpg");
})
Amitabh.addEventListener("mouseleave", function(){
    main.style.backgroundImage="url(https://www.thestatesman.com/wp-content/uploads/2018/10/Binita-Jain-1.jpg)";
    main.style.backgroundRepeat="no-repeat"
    main.style.backgroundPosition="center"
    main.style.backgroundSize="cover"
    h1.innerHTML= "Congratulations🎉🏆📃";
    h1.style.color="red"
    h1.style.fontSize="70px"
    Candidate.setAttribute("src","");
    Amitabh.setAttribute("src","");
})