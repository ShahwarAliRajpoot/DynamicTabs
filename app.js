function tabActive(e){
    // alert(e.innerHTML);
    var allDivs = document.getElementsByClassName('content');
    for(var i = 0 ; i < allDivs.length ; i++){
        allDivs[i].classList.remove("active");
    }
     var activeOne = document.getElementById(e.innerHTML);
     activeOne.classList.add("active");
}