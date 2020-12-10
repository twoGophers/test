//появление блока с информацией
function t1 () {
    let show = document.querySelector('.information p');
    show.classList.toggle('wishow_info');
    return show.innerHTML;
};

document.querySelector('.images_info').onclick = t1;


//блокировка кнопки
// document.querySelector('.more').addEventListener('click',function(e) {
//     let t = 6;
//     if(t == 5) {
//         e.preventDefault();
//     } else {
//         console.log('hello')
//     }
    
// })