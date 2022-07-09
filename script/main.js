// modal window

document.querySelector('.lang-choice-btn').onclick = function(){
    document.querySelector('.languages').classList.toggle('hide')
    
}

// 
let nav = document.querySelector('.nav');
let navBtn = document.querySelector('#nav-btn');
let navBtnImage = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImage.src = '/images/header/nav-close.svg'
    } else {
        navBtnImage.src = '/images/header/nav-open.svg'
    }
}



// slider
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