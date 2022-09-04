
grid.addEventListener("scroll",function(e){

    let currDistanceFromTop = e.currentTarget.scrollTop;
    let currDistanceFromLeft = e.currentTarget.scrollLeft;

    rowNumbers.style.transform=`translateY(-${currDistanceFromTop}px)`;
    columnTags.style.transform = `translateX(-${currDistanceFromLeft}px)`;


});


