window.addEventListener("load", function () {

    var counter = Math.floor(Math.random() * 10);
    var musicFiles = ["coco.mp3",
                      "music1.mp3",
                     "Other Side Of The Game.mp3",
                     "answer - Tyler, The Creator.mp3",
                     "10. Smoke Again .mp3",
                     "Fetty Wap  - Trap Queen .mp3",
                     "Caress Your Soul.mp3",
                     "Rimshot .mp3",
                     "Erykah Badu - Certainly.mp3"];

    var imageNames = ["1.png",
                     "2.jpg",
                     "mom.jpg",
                     "Tyler.gif",
                     "download.jpg",
                     "trap.jpg",
                     "stifi.jpg",
                     "mom.jpg"];
    var albums = [];

    var player = document.getElementById('player');
    var albumThumbs = document.getElementById('albumThumbs');
    var albumDisplay = document.getElementById('albumDisplay');

    for (var i = 0; i < imageNames.length; i++) {
        var thumb = new Image();
        thumb.src = "/small/" + imageNames[i];
        thumb.width = 120;
        thumb.height = 120;
        thumb.id = i;
        thumb.style.border = "2px outset #ebb07a";
        thumb.className = "thumb"
        albumThumbs.appendChild(thumb);
        thumb.addEventListener('mouseover', function (e) {
            e.target.style.border = "2px outset red";
            e.target.style.cursor = "pointer";
        });
        thumb.addEventListener('mouseout', function (e) {
            e.target.style.border = "2px outset #ebb07a";

            e.target.style.cursor = "default";
        });

        thumb.addEventListener('click', function (e) {
            albumDisplay.src = "/big/" + imageNames[e.target.id];
            player.src = "/muziek/" + musicFiles[e.target.id];
            player.play();
        });
    }

    player.src = "/muziek/" + musicFiles[1];
    player.style.backgroundColor = "gray";
    player.style.width = "500px";

    player.addEventListener('ended', function () {
        console.log('einde');
        albumDisplay.src = "/big/4.jpg";
    });
})