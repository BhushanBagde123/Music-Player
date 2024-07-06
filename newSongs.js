const  main =   async ()=> {
    const url = "songs.json";
    try {
        const response = await fetch(url);
        const data = await response.json();
        function newSongs(){
            let newReleaseSongs =document.querySelector(".songs");
            let add='';
            for(let i=0;i<data.songs.newsongs.length;i++){
                add+= ` <div id="${i}" class="newSongList inline-block cursor-pointer  md:m-10  md:w-64 md:h-64 w-40 h-40 p-3  " style=" position: relative; border-radius:20px;">
                     <span id="${i}" class="hidden playButton w-12 h-12 bg-black text-white absolute rounded-full md:flex items-center justify-center text-center" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                        <i class="text-3xl ri-play-circle-fill"></i>
                     </span>
                    <img class="w-full h-full " src="${data.songs.newsongs[i].image}" alt="images">
                    <h6 class="w-full h-6 text-md font-bold text-white">${data.songs.newsongs[i].song_title} </h6>
                    </div>`;
            }
           
            newReleaseSongs.innerHTML =add;
        }
        newSongs();

        function songsHover(){
        document.querySelectorAll(".newSongList").forEach((items) => {
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
    }
    songsHover();

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


    }

    catch (error) {
        console.log(error);

                }

            }
            main();