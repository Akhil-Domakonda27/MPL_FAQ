$(document).ready(function(){
    $("#accordion .faq .card-link").click(function(){

      if($(this).find("i.fas").hasClass("fa-chevron-up"))
      {
        $(this).find("i.fas").removeClass("fa-chevron-up");
        $(this).find("i.fas").addClass("fa-chevron-down");
      }
      else if($(this).find("i.fas").hasClass("fa-chevron-down"))
      {
        $(this).find("i.fas").removeClass("fa-chevron-down");
        $(this).find("i.fas").addClass("fa-chevron-up");
      }

      $(this).parents(".faq").siblings().find(".faqQ .card-link i.fas").removeClass("fa-chevron-up");
      $(this).parents(".faq").siblings().find(".faqQ .card-link i.fas").addClass("fa-chevron-down");
    });
  });