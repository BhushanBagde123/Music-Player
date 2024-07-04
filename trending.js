const  main =   async ()=> {
    const url = "songs.json";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.songs.trending.length);
        function trendingSongs(){
            let trendingSongs =document.querySelector(".songs");
            let add="";
            for(let i=0;i<data.songs.trending.length;i++){
                add+= ` <div id="${i}" class="newSongList inline-block cursor-pointer  m-10  md:w-60 md:h-60 w-40 h-40 rounded-xl" style=" position: relative;">
                     <span id="${i}" class="hidden playButton w-12 h-12 bg-black text-white absolute rounded-full md:flex items-center justify-center text-center" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                        <i class="text-3xl ri-play-circle-fill"></i>
                     </span>
                    <img class="w-full h-full" src="${data.songs.trending[i].image}" alt="images">
                    </div>`;
            }
           
            trendingSongs.innerHTML =add;
        }
        trendingSongs();

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