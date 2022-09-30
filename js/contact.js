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

  //contact
  $("#email").keyup(function(){
    if($.trim($(this).val()) !== ""){
        $('[type=submit]').removeAttr('disabled');
    }else{
        $('[type=submit]').attr('disabled',true);
    }
  });

  //footer
  let utc = new Date().getUTCFullYear();
  document.querySelector('#year').textContent = utc;