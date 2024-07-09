let input=document.querySelector("#inputvol");
document.addEventListener('DOMContentLoaded',()=>{
    let playbtn=document.querySelector("#playicon")
    const audioPlayer=document.querySelector("audio");
    let nowplaying=false;
    const playSongs=(songurl)=>{
audioPlayer.src=songurl;
audioPlayer.play();
    }
     let currentSongIndex=0;
    function playNextSong() {
        currentSongIndex++;
        if (currentSongIndex >= document.querySelectorAll(".card").length) {
            currentSongIndex = 0;
        }
        const nextSongUrl = document.querySelectorAll(".card")[currentSongIndex].getAttribute('data-song-url');
        playSongs(nextSongUrl);
    }
    function playprevsong(){
        currentSongIndex--;
        if(currentSongIndex<0){
            currentSongIndex=document.querySelectorAll(".card").length-1;
        }
        const prevsongs=document.querySelectorAll(".card")[currentSongIndex].getAttribute('data-song-url');
        playSongs(prevsongs)
    }
    
    document.querySelector("#playprevicon").addEventListener("click",playprevsong)
    document.querySelector('#playnexticon').addEventListener('click',playNextSong)
    document.querySelectorAll(".card").forEach(cards=>{
cards.addEventListener('click',function(){
if(!nowplaying){
    playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-play");
    nowplaying=true;
    audioPlayer.muted=false;
 

}
else{
    playbtn.classList.add("fa-play");
   playbtn.classList.remove("fa-pause");
    nowplaying=false; 
    audioPlayer.muted=true;
}
const songurl=cards.getAttribute('data-song-url');
playSongs(songurl)
});

    });  
    let artist=document.querySelectorAll('.bpraak');
artist.forEach(artist=>{
artist.addEventListener('click',()=>{
    if(!nowplaying){
    playbtn.classList.add("fa-pause");
    playbtn.classList.remove("fa-play");
nowplaying=true;
audioPlayer.muted=false;
}
else{
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
     nowplaying=false; 
     audioPlayer.muted=true;
}
const songurl=artist.getAttribute('data-song-url');
playSongs(songurl);

});
});
});
input.addEventListener("input",()=>{
    audioPlayer.volume=input.value/100;
});
let bar=document.querySelector("#bar");
audioPlayer.addEventListener("timeupdate",()=>{
    const currentTime=audioPlayer.currentTime;
    const duration=audioPlayer.duration;
    const progress=(currentTime/duration)*100;
    bar.value=progress; 
});
let volumeicon=document.querySelector("#volumeicon");
volumeicon.addEventListener('click',()=>{
    if(audioPlayer.muted){
    volumeicon.classList.add("fa-volume-up");
    volumeicon.classList.remove("fa-volume-off");
    audioPlayer.muted=false;
    }
    else{
        volumeicon.classList.add("fa-volume-off");
        volumeicon.classList.remove("fa-volume-up");
        audioPlayer.muted=true;
    }
    console.log(volumeicon)
});
let playbtn=document.querySelector("#playicon")
let isplaying=false;
playbtn.addEventListener('click',function(){
    if(!isplaying){
    playbtn.classList.add('fa-pause')
    playbtn.classList.remove('fa-play')
    audioPlayer.play();
    isplaying=true;
    }
    else{
        playbtn.classList.add('fa-play');
        playbtn.classList.remove('fa-pause')
        isplaying=false;
        audioPlayer.pause();

    }
console.log(isplaying)
});
 function updatebar (e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const duration=audioPlayer.duration;
    audioPlayer.currentTime=(clickX/width)*duration;
 }
 bar.addEventListener('click',updatebar);
  









