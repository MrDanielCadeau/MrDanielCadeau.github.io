let cursor = document.getElementById('cursor');

document.onmousemove = function (e) {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.display = 'block';
    cursor.style.left = `${x + 10}px`;
    cursor.style.top = `${y + 15}px`;
}