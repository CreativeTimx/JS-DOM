function genBtn(){
    const container = document.getElementById('content');
    const el = document.createElement('div');
    el.innerHTML = Math.random();
    el.style.color = "red";
    container.appendChild(el);
    el.className = "gen"

    console.log(container);
}
function delBtn(){
    const del = document.querySelector(".gen:last-child");
    del.remove();
}

// -------------------------------------------------

function onBtn(){
    const icon = document.getElementById('icon');

    icon.src = "vex.jpg";
}
function offBtn(){
    const icon = document.getElementById('icon');

    icon.src = "smile.jpg";
}