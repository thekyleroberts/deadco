function hideHeading() {
    $("h3").hide("slow");
}


function randomizeHeadings() {
    $("h3").each(setRandomStyle);
    $("h3.green").hide("slow");
}

function setRandomStyle() {
    $(this).addClass(randomStyle());
}

function randomStyle() {
    var styles = ["red", "yellow", "green"];
    return(randomElement(styles));
}

function randomElement(array) {
    var index = Math.floor(Math.random()*array.length);
    return(array[index]);
}

function revertHeadings() {
    $("h3.green").show("slow");
    $("h3").removeClass("red")
        .removeClass("yellow")
        .removeClass("green");
}

$(function() {
    $("button1").click(randomizeHeadings);
    $("button2").click(revertHeadings);
});