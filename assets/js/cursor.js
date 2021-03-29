document.onmousemove = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    let cursor = document.getElementById('cursor');
    cursor.style.display = 'block';
    cursor.style.left = `${x + 5}px`;
    cursor.style.top = `${y + 5}px`;
}