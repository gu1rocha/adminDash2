let toggleMenu = () =>{
    let toggle = document.querySelector('.toggle');
    let aside = document.querySelector('aside');
    let main = document.querySelector('main');
    toggle.classList.toggle('active');
    aside.classList.toggle('active');
    main.classList.toggle('active');
}