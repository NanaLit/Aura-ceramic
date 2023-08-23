
function getVals(){
    // Get slider values
    const parent = this.parentNode;
    const slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat( slides[0].value );
        let slide2 = parseFloat( slides[1].value );
        
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    // let displayElement = parent.getElementsByClassName("rangeValues")[0];
    
    //     displayElement.innerHTML = slide1 + " ₽ - " + slide2 + "  ₽";
    // }
    let firstEl = document.querySelectorAll('.rangeValues > span')[0];
    let secondEl = document.querySelectorAll('.rangeValues > span')[1];
    firstEl.innerHTML = slide1 + " ₽";
    secondEl.innerHTML = slide2 + " ₽";
}

    
window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
            let sliders = sliderSections[x].getElementsByTagName("input");
            for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
            }
        }
}

const header = document.querySelector('.header');
const catalog = document.querySelector('.catalog');
const sortButton = document.querySelector('.catalog__sort');
const sorter = document.querySelector('.sorter');
const body = document.querySelector('body');
const closeButton = document.querySelector('.sorter__close svg');

sortButton.addEventListener('click', () => {
    header.classList.add('blur');
    catalog.classList.add('blur');
    sorter.classList.add('visible');
    body.classList.add('lock');
});

closeButton.addEventListener('click', () => {
    header.classList.remove('blur');
    catalog.classList.remove('blur');
    sorter.classList.remove('visible');
    body.classList.remove('lock');
});

function toggleFilters(trigger, label) {
    const inputs = document.querySelectorAll(trigger);
    const lables = document.querySelectorAll(label);

    inputs.forEach( (item, i) => {
    
        item.addEventListener('click', () => {
            lables.forEach((label) => {
                label.classList.remove('checked')
                lables[i].classList.add('checked');
            })
        })
    });
}
toggleFilters('.sorter__input--first', '.sorter__label--first');
toggleFilters('.sorter__input--second', '.sorter__label--second');

// toggleFilters('.sorter__wrap--second > .sorter__input');


function toggleContent (btnClass, containerClass) {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
    
    const btn = document.querySelector(btnClass),
    container = document.querySelector(containerClass);

    let toggleBlock = gsap.to(container, {
        height: 'auto',
        paused: true,
        autoAlpha: 1,
        duration: 2,
        ease: 'power1.out'
    })

    btn.addEventListener('click', () => {
        container.classList.toggle('show');
        container.classList.contains('show') ? toggleBlock.play() : toggleBlock.reverse();

        container.classList.contains('show') ? btn.classList.add('hide') : null;
    })
    
    btn.addEventListener('click', () => {
        container.classList.contains('show') ? null :  gsap.to(window, { duration: 2, ease: "power1.out", scrollTo: '.schedule__list' });
    })
}

toggleContent('.catalog__more', '.catalog__wrapper--more');