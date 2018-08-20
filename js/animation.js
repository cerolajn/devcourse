$(function () {
  let list_element = $('#pills-tab > li.nav-item');

  list_element.click(function(){
   list_element.removeClass('active_tab');
    $(this).addClass('active_tab');
  });
});