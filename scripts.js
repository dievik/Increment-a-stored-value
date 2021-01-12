let number = localStorage.save;
document.getElementById("num").innerHTML = number===undefined?"0 - Boost my Mood! :)":localStorage.save;

function time(id, param1, param2) {
    disable = setTimeout(function(){document.getElementById(id).disabled = true;}, param1)
    enable =  setTimeout(function(){document.getElementById(id).disabled = false;}, param2)
}

function up() {
    if (number===undefined) {
        number = 1;
        localStorage.save = number;
        document.getElementById("num").innerHTML = localStorage.save + " - more... MORE!";
        time("up", 0, 3000);
    } else {
        number = Number(number)*2;
        localStorage.save = number;
        document.getElementById("num").innerHTML = localStorage.save  + " - more... MORE!";
        time("up", 0, 3000);
    }
}

function del() {
    if (document.getElementById("num").innerHTML>0 + "") {
        number = 0.5;
        localStorage.clear();
        document.getElementById("num").innerHTML = "0 - Boost my Mood! :)"
        time("del", 0, 3000);
    }
}
