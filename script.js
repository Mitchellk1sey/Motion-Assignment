const cavemanData = {
    arrImgs: [
        "running ne0000.bmp","running ne0001.bmp","running ne0002.bmp","running ne0003.bmp",
        "running ne0004.bmp","running ne0005.bmp","running ne0006.bmp","running ne0007.bmp"
    ],
    pose: 0,
    elem: document.querySelector("#caveman"),
    x: 0,
    y: 300,
    timer: null,
    folder: "Caveman/"
};

const vladData = {
    arrImgs: [
        "running sw0000.bmp","running sw0001.bmp","running sw0002.bmp","running sw0003.bmp",
        "running sw0004.bmp","running sw0005.bmp","running sw0006.bmp","running sw0007.bmp"
    ],
    pose: 0,
    elem: document.querySelector("#vlad"),
    x: 900,
    y: 300,
    timer: null,
    folder: "Vlad/"
};

function move() {
    cavemanData.timer = setInterval(() => frameRight(cavemanData), 120);
    vladData.timer = setInterval(() => frameLeft(vladData), 120);
}

function frameRight(data) {
    data.x += 5;
    data.elem.style.top = data.y + "px";
    data.elem.style.left = data.x + "px";
    data.elem.src = data.folder + data.arrImgs[data.pose];
    data.pose = (data.pose + 1) % 8;
}

function frameLeft(data) {
    data.x -= 5;
    data.elem.style.top = data.y + "px";
    data.elem.style.left = data.x + "px";
    data.elem.src = data.folder + data.arrImgs[data.pose];
    data.pose = (data.pose + 1) % 8;
}
