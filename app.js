const showSearchSongs =() =>{

    const typeSong = document.getElementById("typeSong").value;
    const url = `https://api.lyrics.ovh/suggest/${typeSong}`;

    fetch(url)
    .then(res => res.json())
    .then(data => showAllSong(data.data));
   
}

const showAllSong= songs =>{
    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const containerSongs = document.getElementById("containerSongs");
        const containerSongDetails = document.createElement('div');
         containerSongDetails.innerHTML = `
        
        <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.album.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
    </div>

        `
        containerSongs.appendChild(containerSongDetails);



        console.log(song.album.title);
    }
}
