$(document).ready(function(){
    // console.log('hi');
    //menubuttons
    $(".menubuttons").click(function(){
        $(this).toggleClass('crossxs');
    })

    //onscroll
    $(window).scroll(function(){
      let getscrolltop = $(this).scrollTop();
      // console.log(getscrolltop);
     
      if(getscrolltop >= 300){
        $('nav').addClass('navboxs');
      }else{
        $('nav').removeClass('navboxs');
      }

      if(getscrolltop === 2900){
          //skill number
    let number = document.querySelector("#number");
    let counter = 0;
    setInterval(()=>{
      if(counter === 90){
        clearInterval();
      }else{
        counter += 1;
        number.textContent = counter + "%";
      }
    },18);
   

    let numberapp = document.querySelector('#numberapp');
    let count = 0;

    setInterval(()=>{
      if(count === 75){
        clearInterval();
      }else{
        count += 1;
        numberapp.textContent = count + "%";
      }
    },21);

  };

    
     
    });

    //background color
    $(".color1").click(function(){
      $("body,nav").addClass('darkgrays').removeClass('gradients darks');
    });

    $(".color2").click(function(){
      $("body,nav").addClass('darks').removeClass('gradients darkgrays');
    });

    $(".color3").click(function(){
      $('body,nav').addClass("gradients").removeClass('darks darkgrays');
    });
    
    });



     //box show
     let box = document.querySelector('.box');
     let menubutton= document.querySelector('.menubuttons');
     menubutton.addEventListener('click',function(){
        box.classList.toggle("active");
     })

     //cursor
     let mousecursor =  document.querySelector('.cursor');
     window.addEventListener('mousemove',cursor);
     function cursor(e){
        // console.log(e)
        mousecursor.style.left = e.pageX + "px";
        mousecursor.style.top = e.pageY + "px";
     }

     //swiper
     var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
      });



   

   //getyear
   let utcyear = new Date().getUTCFullYear();
   document.querySelector('#year').textContent = utcyear;

   //Start Progress
  

  $(document).ready(function(){
     $(window).scroll(function(){
      let getscrolltop = $(this).scrollTop();
      // console.log(getscrolltop);
      let getprogress = $("#progress");
      let getscrollheight = $(document).height();
      let getclientheight = $(window).height();
      let getcalcheight = getscrollheight - getclientheight;
      let getfinalheight = Math.floor((getscrolltop * 100) / getcalcheight);

      getprogress.css({
        background:`conic-gradient(cyan ${getfinalheight}%,transparent ${getfinalheight}%)`
      })

      if(getscrolltop >= 200){
        $("#progress").show('fade','slow');
      }else{
        $("#progress").hide("bounce","slow")
      }


     });
  });


   //End Progress

     
