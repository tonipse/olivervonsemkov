$(document).ready(function () {
   $(".prod, .bigprod, .logo").click(function () {
      window.location = $(this).find("a").attr("href");
   });
});
