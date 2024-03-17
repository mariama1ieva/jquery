// "use strict";


// let sideBar = document.querySelector(".sidebar");
// let open = document.querySelector(".open");
// let close = document.querySelector(".close")
// let text = document.querySelectorAll(".menu ul li a")
// let icons = document.querySelectorAll(".menu ul  i")



// open.addEventListener("click", function () {
//     sideBar.classList.remove("move-sidebar");
//     this.classList.add("d-none");
//     this.nextElementSibling.classList.remove("d-none")
//     // icons.classList.add(".fa-flip-horizontal")
//     icons.forEach(icon => {
//         icon.style.position = "relative"
//         icon.style.left = "0px";
//         icon.style.marginTop = "17px"

//     });

// })
// close.addEventListener("click", function () {
//     sideBar.classList.add("move-sidebar");
//     this.classList.add("d-none");
//     this.previousElementSibling.classList.remove("d-none")
//     icons.forEach(icon => {
//         icon.style.position = "absolute"
//         icon.style.right = "20px";
//         icon.style.marginTop = "17px"

//     });
// })
// let openTab = document.querySelector(".open-tab");
// let closeTab = document.querySelector(".close-tab");
// let tabMenu = document.querySelector(".tab-menu")


// openTab.addEventListener("click", function () {
//     tabMenu.classList.remove("move-tab")
//     this.classList.add("d-none")
//     this.nextElementSibling.classList.remove("d-none")
// })

// closeTab.addEventListener("click", function () {
//     tabMenu.classList.add("move-tab")
//     this.classList.add("d-none")
//     this.previousElementSibling.classList.remove("d-none")
//     allContent.forEach(content => {
//         content.classList.remove("active")
//     });
// allContent[i].classList.add("active")
// })
// let btns = document.querySelectorAll(".btn");
// let allContent = document.querySelectorAll(".tabcontent")





// btns.forEach((btn ,i)=> {
//     btn.addEventListener("click", function () {
//         btns.forEach(btn => {
//             btn.classList.remove("active")
//         });
//         btn.classList.add("active");
//         allContent.forEach(content => {
//             content.classList.remove("active")
//         });
//     allContent[i].classList.add("active")
        
//     })
// });




$(".open").click(function(){
    $(".sidebar").removeClass("move-sidebar");
    $(".open").addClass("d-none");
    $(".open").next().removeClass("d-none");

    
  }); 
  $(".close").click(function(){
    $(".sidebar").addClass("move-sidebar");
    $(".close").addClass("d-none");
    $(".open").removeClass("d-none");

  }); 
  


  $(".open-tab").click(function(){
    $(".tab-menu").removeClass("move-tab");
    $(".open-tab").addClass("d-none");
    $(".open-tab").next().removeClass("d-none");
  })


  $(".close-tab").click(function(){
    $(".tab-menu").addClass("move-tab");
    $(".close-tab").addClass("d-none");
    $(".close-tab").prev().removeClass("d-none");
    $(".tabcontent").removeClass("active");
  })
  


  $(".btn-cat").click(function(){
    $("#cat").addClass("active");
    $("#dog").removeClass("active");
    $("#other").removeClass("active");

  })
  
  $(".btn-dog").click(function(){
    $("#dog").addClass("active");
    $("#cat").removeClass("active");
    $("#other").removeClass("active");
  })
  
  $(".btn-other").click(function(){
    $("#other").addClass("active");
    $("#cat").removeClass("active");
    $("#dog").removeClass("active");

  })
  
  $(".left-icon").click(function(){
    $(".active-img").prev().addClass("active-img");
    $(".active-img").parent().siblings().addClass("active-img");

  })
  
  $(".right-icon").click(function(){
    $(".active-img").next().addClass("active-img");
    $(".active-img").parent().siblings().addClass("active-img");

  })
 


  
 




