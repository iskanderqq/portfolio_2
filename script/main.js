
document.querySelector('#next').onclick = function next(){
    leftSideWidth = document.querySelector('.left-side').offsetWidth;
    console.log(leftSideWidth)
    document.querySelector('.slider-form').style.marginLeft = `-${leftSideWidth}px`;
};

document.querySelector('#back').onclick = function next(){
    rightSideWidth = document.querySelector('.right-side').offsetWidth;
    console.log(rightSideWidth)
    document.querySelector('.slider-form').style.marginLeft = `0`;
};