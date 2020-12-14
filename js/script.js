/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // let promoAdv = document.querySelector('.promo__adv').children  ;
    
    // promoAdv = [...promoAdv];
    // promoAdv.forEach(element => {element.remove();});
    
    const adv = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg");
    const genere = poster.querySelector(".promo__genre");
    const interactiveList = document.querySelector('.promo__interactive-list');     
    const interactiveItem = document.querySelectorAll('.promo__interactive-item');
    const battonConfirm = document.querySelector('.add button');
    let elementsDeliteFilm = document.querySelectorAll('.promo__interactive-item .delete');
    
  
    
    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };
    
    
    const makeChenges = () => {
        genere.textContent = 'Драма';
    
    
    
    
        poster.style.backgroundImage = 'url("./img/bg.jpg")';
        
        
    };
    
    
    const sortArrStr = (arr) => {
        arr.sort((a, b) => {
            if (a.toLowerCase() > b.toLowerCase()) {
                
                return 1;
                
    
            } 
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            } else { 
                return 0;
            }
        });
    };

    function createMovieList(parent, muvies) {
        parent.innerHTML = '';
       sortArrStr(muvies);
        muvies.forEach( (item,i) => {
        
            parent.innerHTML += `
                    <li class="promo__interactive-item">${i+1}. ${item}
                            <div class="delete"></div>
                    </li>`;
        } );    
        elementsDeliteFilm = document.querySelectorAll('.promo__interactive-item .delete');
        elementsDeliteFilm.forEach((elem, i) => {
            elem.addEventListener('click', () => {
     
            muvies.splice(i,1);
            createMovieList(parent, muvies);
        });
        
        });
    }
    
  
    
    /*практика 30*/
    /* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
    
    function addNameFilm(e) {
        e.preventDefault();
        let addingInputValue = document.querySelector('.adding__input').value;
        if (addingInputValue.length > 21) {
            addingInputValue = addingInputValue.slice(0, 21) + '...';
        }
        if(!addingInputValue){
            return;
        }
        
        movieDB.movies.push(addingInputValue);
        if (document.querySelector('input[type="checkbox"]').checked){
            console.log('Добавляем любимый фильм');
        }
        document.querySelector('.adding__input').value = '';
        createMovieList(interactiveList, movieDB.movies);
    
    }
    
    battonConfirm.addEventListener('click', addNameFilm);
    
    
    
    
    
    
    

    
    deleteAdv(adv);
    makeChenges();  
    createMovieList(interactiveList, movieDB.movies);

    

});


/*песочнца*/

// movieDB.movies.forEach( (item,i) => {
    
//     interactiveList.insertAdjacentHTML('beforeend', `
//             <li class="promo__interactive-item">${i+1}. ${item}
//                     <div class="delete"></div>
//             </li>`);
// } );    




// movieDB.movies.sort();

// for (let i = 0; i<movieDB.movies.length; i++ ) {
//     interactiveItem[i].textContent = movieDB.movies[i];
// }



const btns = document.querySelectorAll('.promo__menu-item');
// const btnPromo = document.querySelector('.promo__menu');
// btn.onclick = function() {
//     alert('click')
// };
let i = 0;
const deleteElement = (e) => {
   e.preventDefault();
   
//    if (i < 1) {
//     btn.removeEventListener('click', deleteElement);
//    }
//    ++i;
   };



btns.forEach(btn => btn.addEventListener('click', deleteElement, {once: true}));
// btnPromo.addEventListener('click', (e) => {
//     e.preventDefault();
//  //    if (i < 1) {
//  //     btn.removeEventListener('click', deleteElement);
//  //    }
//  //    ++i;
//     });

