document.querySelectorAll('.link').forEach(element => {
    element.addEventListener('click', e => {
        for(let item of element.children){
            if(item.getAttribute('href') != undefined){
                window.location.href = item.getAttribute('href');
            }
        }
    });
});
