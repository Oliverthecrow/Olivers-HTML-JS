document.addEventListener('mousemove', (event) => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 500);
});