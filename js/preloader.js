  let time_delay;

  let preloaderDelay = () => {
    time_delay = setTimeout(showInitialPage,1000);
    //PARTICLE JS
    //window_size= $(window).height();
    //$('.banner').css("height", window.size);

  };

  let showInitialPage = () => {
    let startPage = document.querySelector(".page_wrapper");
    let pre_loader = document.querySelector(".preloader");
    pre_loader.style.display = "none";
    startPage.style.display = "block";
    //PARTICLE JS
    //window.dispatchEvent(new Event('resize'));
  };
  window.onload = preloaderDelay;
