 function ImageSwitch() {
    let x = 0;
    let heroSection = document.querySelector(".mainImage");
    let dots = document.querySelectorAll(".dot");
    let intervalId; // Variable to hold setInterval 

   const images = [
        "images/hero1.webp", "images/hero2.webp",
        "images/hero3.webp", "images/hero4.webp",
        "images/hero5.webp", "images/hero6.webp",
        "images/hero7.webp", "images/hero8.webp"
    ];

    function switchImage() {
        if (x < images.length - 1) {
            x++;
        } else {
            x = 0;
        }

        heroSection.src =images[x];
        heroSection.style.transition = "1s";
        // for dost movement
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === x ? "white" : "black";
            dot.style.transition = "1s";
        });
    }

    // Start the setInterval and store time value
    intervalId = setInterval(switchImage, 1200);

    heroSection.addEventListener("mouseover", () => {
        clearInterval(intervalId); // Pause the interval
    });

    heroSection.addEventListener("mouseout", () => {
        intervalId = setInterval(switchImage, 1200); // Resume the interval
    });
}
ImageSwitch();



function Buttons(){
    //next button
function nextButton(nextbtn,songscontainer){
    let next =document.querySelector(nextbtn);
    let songsContents =document.querySelector(songscontainer);
   
    
    next.addEventListener("click",()=>{
        songsContents.scrollBy(600,0);
       
    })
}
nextButton(".next",".songsContents",);
nextButton(".trendingnext",".trindingSongsContainer",);
nextButton(".oldnext",".oldSongsContainer",);
// previous song
function previousButton(prevbtn,songscontainer){
    let previous =document.querySelector(prevbtn);
    let songsContents =document.querySelector(songscontainer);
    previous.addEventListener("click",()=>{
        songsContents.scrollBy(-600,0);
    })
}
previousButton(".previous",".songsContents",);
previousButton(".trendingprevious",".trindingSongsContainer");
previousButton(".oldprevious",".oldSongsContainer",);
 }

 Buttons();
function navButton(){
    const btn = document.querySelector(".menu");
    const menu = document.querySelector(".mobile-menu");
    const cross = document.querySelector(".cross");

    btn.addEventListener("click", () => {
      menu.classList.remove("-translate-x-full");
     
    })
    cross.addEventListener("click",()=>{
        menu.classList.add("-translate-x-full");
    })
};
navButton();

function searchButton(){
    const btn = document.querySelector(".search");
    const menu = document.querySelector(".mobile-menu-search");
    const cross = document.querySelector(".crossSign");

    btn.addEventListener("click", () => {
      menu.classList.remove("-translate-y-full");
     
    })
    cross.addEventListener("click",()=>{
        menu.classList.add("-translate-y-full");
        
    })
};

navButton();

searchButton();

// main function to handle api events
  const  main =   async ()=> {
        const url = "songs.json";
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
           

         function newRelease(){
            let slideOne=document.querySelector(".songsContents");
           
           
         let add="";
         
        
            for(let i=0;i<=12 ;i++){
                add+=`<div  class="partOne h-full text-center p-1  px-2 ">
                    <div id=${i} class=" songsList  md:w-60 md:h-full h-full w-52 rounded-lg flex justify-center items-center bg-no-repeat bg-cover cursor-pointer" style="background-image: url(${data.songs.newsongs[i].image});border-radius:15px;  ">
                    <div id="${i}" class="playButton cursor-pointer w-12 h-12 rounded-full bg-black  hidden justify-center items-center text-center  md:flex ">
                    <i class="text-3xl ri-play-circle-fill"></i>
                    </div>
                    </div>
                    <div class="songName  w-full h-8  font-semibold p-1 text-xs md:text-xl"><p class="text-left">${data.songs.newsongs[i].song_title}</p></div>
                 </div>`
               
        
            }
            
            slideOne.innerHTML =add;
        
          
        }
        newRelease(); 
        function trandingSong(){
            let slideOne=document.querySelector(".trindingSongsContainer");
           
           
            let add="";
            
           
               for(let i=0;i<=14 ;i++){
                   add+=`<div  class="partTwo h-full  gap-4 text-center p-1  px-2 ">
                       <div id=${i} class=" songsList  md:w-60 md:h-full h-full  w-52 flex justify-center items-center bg-no-repeat bg-cover cursor-pointer" style="background-image: url(${data.songs.trending[i].image});border-radius:15px;  ">
                       <div id="${i}" class="playButton cursor-pointer w-12 h-12 rounded-full bg-black hidden justify-center items-center text-center md:flex ">
                       <i class="text-3xl ri-play-circle-fill"></i>
                       </div>
                       </div>
                       <div class="songName  w-full h-8  p-1 font-semibold text-xs md:text-xl"><p class="text-left">${data.songs.trending[i].song_title}</p></div>
                    </div>`
                  
           
               }
               
               slideOne.innerHTML =add;
           
            
        }
        trandingSong();

        function oldSongs(){
            let slideOne=document.querySelector(".oldSongsContainer");
           
           
            let add="";
            
           
               for(let i=0;i<=12 ;i++){
                   add+=`<div  class="partThree h-full  gap-4 text-center p-1 px-2 ">
                       <div id=${i} class=" songsList  md:w-60 md:h-full h-full  w-52 flex justify-center items-center bg-no-repeat bg-cover cursor-pointer " style="background-image: url(${data.songs.oldsongs[i].image});border-radius:15px;  ">
                       <div id="${i}" class="playButton cursor-pointer w-12 h-12 rounded-full bg-black  hidden justify-center items-center text-center  md:flex ">
                       <i class="text-3xl ri-play-circle-fill"></i>
                       </div>
                       </div>
                        <div class="songName  w-full h-8   p-1 font-semibold text-xs md:text-xl"><p class="text-end">${data.songs.oldsongs[i].song_title}</p></div>
                    </div>`
                  
           
               }
               
               slideOne.innerHTML =add;
           
        }
        oldSongs();
        function topAlbum(){
            let slideOne=document.querySelector(".ablums");
           
           
            let add="";
            
           
               for(let i=6;i<=12 ;i++){
                   add+=`<div  class="partFour h-full  gap-4 text-center p-1  px-2 ">
                       <div id=${i} class=" songsList  md:w-60 md:h-full h-full  w-52 flex justify-center items-center bg-no-repeat bg-cover cursor-pointer" style="background-image: url(${data.songs.trending[i].image});border-radius:20px;  ">
                       <div id="${i}" class="playButton cursor-pointer w-12 h-12 rounded-full bg-black  justify-center items-center text-center hidden md:flex ">
                       <i class="text-3xl ri-play-circle-fill"></i>
                       </div>
                       </div>
                    </div>`
                  
           
               }
               
               slideOne.innerHTML =add;
        }
        topAlbum();

        function topArtist(){
            let add=""
            let artist =document.querySelector(".topArtistContainer");
            for(let i=0;i<data.songs.Artist.length;i++){
                // console.log(data.songs.Artist[i].name)
                // console.log(data.songs.Artist[i].image)
               add+=`<div class=" partFive w-full h-full  md:px-6 px-4">
              <div class=" artistImage md:w-44 md:h-44 w-56 h-56 rounded-full cursor-pointer  bg-no-repeat bg-cover" style="background-image: url(${data.songs.Artist[i].image}); ">
              </div>
              <div class="w-full  felx justify-center items-center md:text-xl text-sm">
              <h4 class="text-center">${data.songs.Artist[i].name}
              </h4>
              </div>
               </div>`;
            }
           
            artist.innerHTML=add;
        }
        topArtist();
        

        document.querySelectorAll(".songsList").forEach((items) => {
            items.addEventListener("mouseover", () => {
                const playButton = items.querySelector(".playButton");
                items.style.filter="brightness(50%)";
                
               
                if (playButton) {
                    playButton.style.opacity = "1";
                    playButton.style.visibility = "visible";;
                   
                }
            });
           
        
            items.addEventListener("mouseout", () => {
                const playButton = items.querySelector(".playButton");
                 items.style.filter="brightness(100%)";
                
               
                if (playButton) {
                    playButton.style.opacity = "0";
                    playButton.style.visibility = "hidden";
                   
                }
            });
        });
        
let currentAudio = null;
let isPlaying = false;

let seekBar =document.querySelector(".seekBar");
let fullScreenSeekBar =document.querySelector(".fullSeekBar");
// Function to initialize audio element
function initAudio(audioLink) {
    currentAudio = new Audio(audioLink);
    showLoader();

    currentAudio.addEventListener('canplaythrough',()=>{
        hideLoader();
        playAudio();
        
    })
    currentAudio.addEventListener('ended', () => {
        isPlaying = false;
        document.querySelector(".play").style.display = "block";
        document.querySelector(".pause").style.display = "none";
        document.querySelector(".fullPlay").style.display = "block";
        document.querySelector(".fullPause").style.display = "none";
    });
    
}

// Function to play audio
function playAudio() {
    if (currentAudio && currentAudio.paused) {
        currentAudio.play();
        isPlaying = true;
        document.querySelector(".play").style.display = "none";
        document.querySelector(".pause").style.display = "block";
        document.querySelector(".fullPlay").style.display = "none";
        document.querySelector(".fullPause").style.display = "block";
        currentAudio.addEventListener("timeupdate",currentTime);
        currentAudio.addEventListener("timeupdate",updateProgressBar);
        currentAudio.addEventListener("loadedmetadata",totalTime);
        
        function updateProgressBar(){
        seekBar.value=currentAudio.currentTime;
        fullScreenSeekBar.value =currentAudio.currentTime;

        }   
        currentAudio.addEventListener("ended",playNextSong)
    }
}
// seekBar of a songs
seekBar.addEventListener("input",()=>{
    currentAudio.currentTime =seekBar.value;
    })
fullScreenSeekBar.addEventListener("input",()=>{
        currentAudio.currentTime =fullScreenSeekBar.value;
        })
function showLoader() {
    document.querySelector(".loader").style.display = "block";
    document.querySelector(".playPause").style.display="none";
    document.querySelector(".fullLoader").style.display = "block";
    document.querySelector(".fullPlayPause").style.display="none";
}

// Function to hide the loader
function hideLoader() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".playPause").style.display="block";
    document.querySelector(".fullLoader").style.display = "none";
    document.querySelector(".fullPlayPause").style.display="block";
}


 function totalTime(){
    let totalDurationDisplay=document.getElementById("total-duration");
    let fullScreenTotalDurationDisplay =document.getElementById("full-total-duration")
    const totalDuration = formatTime(currentAudio.duration);
    const fullScreenDuration =formatTime(currentAudio.duration);
    totalDurationDisplay.textContent = totalDuration;
    fullScreenTotalDurationDisplay.textContent = fullScreenDuration;
    seekBar.max=currentAudio.duration;
    fullScreenSeekBar.max =currentAudio.duration;

    // console.log(totalDuration);
 }
function currentTime(){
    let currentDurationDisplay=document.querySelector("#current-time");
    let fullScreenCurrentDurationDisplay =document.getElementById("full-current-time");
    const currentDuration = formatTime(currentAudio.currentTime);
    const fullScreenCurrentDuration =formatTime(currentAudio.currentTime);
    currentDurationDisplay.textContent = currentDuration;
    fullScreenCurrentDurationDisplay.textContent = fullScreenCurrentDuration;
    // console.log(currentDuration);
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  }

// Function to pause audio
function pauseAudio() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        isPlaying = false;
        document.querySelector(".play").style.display = "block";
        document.querySelector(".pause").style.display = "none";
        document.querySelector(".fullPlay").style.display = "block";
        document.querySelector(".fullPause").style.display = "none";
    }
}

// Event listener for song click
function onSongClick(songsContainer){
  const container=  document.querySelector(songsContainer)
  container.addEventListener("click", (e) => {
        try{
            let songData = null;
        if(songsContainer ===".songsContents"){
           songData=data.songs.newsongs[e.target.id]
        }
        else if(songsContainer ===".trindingSongsContainer"){
            songData=data.songs.trending[e.target.id]
        }
        else{
            songData=data.songs.oldsongs[e.target.id] 
        }
        if (songData) {
            const { link, image, song_title, artist } = songData;
            if (currentAudio) {
                currentAudio.pause();
            }
            initAudio(link);
            document.querySelector(".image").src = image;
            document.querySelector(".trackName h4").innerText = song_title;
            document.querySelector(".trackName h6").innerText = artist;
            document.querySelector(".songsTrack ").style.display="block";
            // fullScreen
            document.querySelector(".fullTrackImage img").src = image;
            document.querySelector(".fullTrackName h4").innerText = song_title;
            document.querySelector(".fullTrackName h6").innerText = artist;
            document.querySelector(".fullSongsTrack").style.backgroundImage =`url("${image}")`
            // like songs
            const isLiked = likeSongs.some(song => song.song_title === songData.song_title);
            const likeIcon = document.querySelector(".like i");
            if (isLiked) {
                likeIcon.style.color = "#F33A6A"; // Liked song color
            } else {
                likeIcon.style.color = "white"; // Default color
            }
            playAudio();
        }
    }
    catch(e){
        console.log(e);
    }
    });
}
onSongClick(".songsContents");
onSongClick(".trindingSongsContainer");
onSongClick(".oldSongsContainer");



// Event listener for play/pause button
document.querySelector(".playPause").addEventListener("click", () => {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
});
document.querySelector(".fullPlayPause").addEventListener("click", () => {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
});

let currentSongIndex=0;
// next song
function playNextSong(){
    currentSongIndex++;
    if( currentSongIndex>=data.songs.newsongs.length ){
        currentSongIndex=0
    }
    else if(currentSongIndex>=data.songs.trending.length ){
        currentSongIndex=0
    }
    // console.log(currentSongIndex)
    // like.style.color="white";
    playSelectedSong(currentSongIndex);
}

// previous song
function playPreviousSong(){
    currentSongIndex--;
    if( currentSongIndex<=0){
        currentSongIndex=data.songs.newsongs.length-1;
       
    }
    //  like.style.color="white";
    
    playSelectedSong(currentSongIndex);
   
}

// main function to play next and previous songs
function playSelectedSong(index) {
    const songData = data.songs.newsongs[index];
    if (songData) {
        const { link, image, song_title, artist } = songData;
        if (currentAudio) {
            currentAudio.pause();
        }
        initAudio(link);
        document.querySelector(".image").src = image;
        document.querySelector(".trackName h4").innerText = song_title;
        document.querySelector(".trackName h6").innerText = artist;
          // fullScreen
        document.querySelector(".fullTrackImage img").src = image;
        document.querySelector(".fullTrackName h4").innerText = song_title;
        document.querySelector(".fullTrackName h6").innerText = artist;
        document.querySelector(".fullSongsTrack").style.backgroundImage =`url("${image}")`
        // likeSongs
        const isLiked = likeSongs.some(song => song.song_title === songData.song_title);
        const likeIcon = document.querySelector(".like i");
        if (isLiked) {
            likeIcon.style.color = "#F33A6A"; // Liked song color
        } else {
            likeIcon.style.color = "white"; // Default color
        }
      
        playAudio();
    } else {
        console.error("Song data is undefined for index:", index);
    }
}

// play previous song
document.querySelector(".previousPlayButton").addEventListener("click",()=>{
    playPreviousSong()  
})
document.querySelector(".fullPreviousPlayButton").addEventListener("click",()=>{
    playPreviousSong()  
})
// play next song
document.querySelector(".nextPlayButton").addEventListener("click",()=>{
    playNextSong()  
})
document.querySelector(".fullNextPlayButton").addEventListener("click",()=>{
    playNextSong()  
})

// volumeToggle

 let volumeRange =document.querySelector(".volumeButton");
 volumeRange.addEventListener("input",volumeToggle)
 function volumeToggle(){
    
        currentAudio.volume = volumeRange.value
    
    
 }
let volumeButton =document.querySelector(".soindControl i");
let voumberBar=0;
volumeButton.addEventListener("click",volumeDisplay);
function volumeDisplay(){
    if(voumberBar==0){ volumeRange.style.display ="block";voumberBar=1}
    else{ volumeRange.style.display ="none";voumberBar=0}

    
}
// songTrack fullScreen mode
function songTrackFullScreen(){
    let songTrack =document.querySelector(".trackImage img");
    let fullScreenTrack =document.querySelector(".fullSongsTrack");
    let crossScreenTrack =document.querySelector(".closeIcon");
    songTrack.addEventListener("click",()=>{
        fullScreenTrack.style.display="block";
        document.querySelector("body").style.overflowY="hidden";
    })
    crossScreenTrack.addEventListener("click",()=>{
        fullScreenTrack.style.display="none";
        document.querySelector("body").style.overflowY="auto";
    })
}
songTrackFullScreen();
let likeSongs = []; // Array to store liked songs
const like = document.querySelector(".like i");
function likeDisplay(songData) {
    const { song_title } = songData;
    const likeIcon = document.querySelector(".like i");
    
    const isLiked = likeSongs.some(song => song.song_title === song_title); // Check if the song is already liked
    
    if (!isLiked) {
        likeIcon.style.color = "#F33A6A"; // Change color to indicate liked
        likeSongs.push(songData); // Add the song to the liked songs array
        // console.log("Added to liked songs:", song_title);
       
    } else {
        likeIcon.style.color = "white"; // Change color back to default
        likeSongs = likeSongs.filter(song => song.song_title !== song_title); // Remove the song from liked songs
        // console.log("Removed from liked songs:", song_title);
    }
}

// Call likeDisplay function with songData when like button is clicked
like.addEventListener("click", () => {
    const songData = data.songs.newsongs[currentSongIndex];
    
    likeDisplay(songData);
    
});
// Function for searching the songs

function searchSongs() {
    const templateCards = document.querySelector("[songs-data-template]");
    const songCardsContainer = document.querySelector("[song-data-cards]");
    const search = document.querySelector(".inputSearch");
    songCardsContainer.style.display="none";
    const exitButton =document.querySelector(".exitButton");
    let songs = [];
   
    search.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        songCardsContainer.style.display="block";
        console.log(value);
       
        songs.forEach((fetchSong) => {
            const isVisible =
                fetchSong.image.toLowerCase().includes(value) ||
                fetchSong.song_title.toLowerCase().includes(value) || 
                fetchSong.artist.toLowerCase().includes(value);
                fetchSong.element.classList.toggle("hide", !isVisible);
        });
    });
    exitButton.addEventListener("click",()=>{
        if(search){
            search.value="";
        }
        songCardsContainer.style.display="none"; 
       
    })
    const newSong = data.songs.newsongs;
    const trendingSong =data.songs.trending;
    const oldSong =data.songs.oldsongs
    const songData = [...newSong, ...trendingSong, ...oldSong];
    songs = songData.map((song) => {
        const card = templateCards.content.cloneNode(true).children[0];
        const songImage = card.querySelector("[songs-image]");
        const songName = card.querySelector("[song-name]");
        const artistName = card.querySelector("[artist-name]");
        songImage.src = song.image;
        songName.textContent = song.song_title;
        artistName.textContent = song.artist;
        songCardsContainer.append(card);
        return { image: song.image, song_title: song.song_title, artist: song.artist, element: card };
    }); 
}
searchSongs();


// function fullTrackSongs(){
//     let songTrack =document.querySelector(".songsTrack");
//     let trackImage =document.querySelector(".trackImage");
//     trackImage.addEventListener("cilck",()=>{
//         songTrack.style.height="200px";
//         console.log("click");
//     })
    
// }
// fullTrackSongs();

} catch (error) {
console.log(error);
        }
    
}

main();


