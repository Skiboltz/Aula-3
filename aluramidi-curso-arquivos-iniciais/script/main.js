function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSom(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentime = 0;
    audio.play();
}