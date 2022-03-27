// JS for music player
id =
   document.getElementById.bind (document)
  
id ('music_player').onclick =
  _ => id ('header_play_button').classList.toggle ('paused')
    && id ('ost').paused ? id ('ost').play () : id ('ost').pause ()
  
id ('ost').onended =
  _ => id ('header_play_button').classList.add ('paused')
  
id ('ost').volume =
  .5

//JS for fullsize 
const figures =
document.getElementsByClassName("thumb_enlarger ");
let i=0; for(;i<figures.length ;i++) {
  figures[i].addEventListener("click", toggleFull)
}

function toggleFull(e) {
  let fig = e.currentTarget;
  let fullsize = fig.querySelector(".fullsize");
  fullsize.classList.toggle("visible");
  fullsize.addEventListener("click", hideFull);
}
