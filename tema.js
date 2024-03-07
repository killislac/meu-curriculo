document.querySelector('#btTroca').addEventListener('click', function trocatema(){
    if(document.documentElement.getAttribute('data-tema') === 'light'){
        document.documentElement.setAttribute('data-tema', 'dark');
    }else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});
