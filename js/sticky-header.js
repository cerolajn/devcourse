let page_header = document.querySelector('.header');
let header_position = 30;

let stickyHeader = () =>{
  if (window.pageYOffset >= header_position){
    page_header.classList.add('fixed-top');
  }else{
    page_header.classList.remove('fixed-top');
  }
};
window.onscroll = stickyHeader;




