console.log('hello');

// let video = new videos('Namit Malhotra s Ramayana_ The Introduction _ Nitesh Tiwari _ Ranbir, Yash, Hans Zimmer & AR Rahman.mp4');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
// let masterSongName = document.getElementById('masterSongName');
let thumbnail = document.getElementById('mainThumbImg');
let video = document.getElementById('main-thumbnail-video');

let videos = [
    { videoName: "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman", filePath: "Namit Malhotra s Ramayana_ The Introduction _ Nitesh Tiwari _ Ranbir, Yash, Hans Zimmer & AR Rahman.mp4", coverPath: "main-thumbnail-img.jpg" },
    { videoName: "Shri Bhairav Tandav | Shri Dhananjay Tiwari | Vidhan Gangwal | Sadashiv", filePath: "Shri Bhairav Tandav.mp4", coverPath: "Shri Bhairav Tandav.jpg" },
    { videoName: "Mahavatar Narsimha Official Hindi Trailer | July 25th Grand Release | Hombale Films", filePath: "Mahavatar Narsimha Official Hindi Trailer _ July 25th Grand Release _ Hombale Films.mp4", coverPath: "Mahavatar Narsimha Official Hindi Trailer.jpg" },
    { videoName: "Anupam Kher About Lord Shree Krishna | Karthikeya 2 Hindi | Nikhil Anupama | Chandoo Mondeti", filePath: "Anupam Kher About Lord Shree Krishna.mp4", coverPath: "Anupam Kher About Lord Shree Krishna  Karthikeya 2 Hindi  Nikhil  Anupama  Chandoo Mondeti" },

]
// play video and paused
// console.log(videos);
masterPlay.addEventListener('click', () => {
    if (video.paused || video.currentTime <= 0) {
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        thumbnail.style.display = 'none'
        video.style.display = 'block';
        video.style.borderRadius = '20px'
        video.play();

    }
    else {
        video.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})


// progress bar
video.addEventListener('timeupdate', () => {
    let progress = parseInt((video.currentTime / video.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});


// full screen
let fullScreenBtn = document.getElementById('fullScreenBtn');
let fullScreen = document.getElementById('main-thumbnail-video');

// fullScreenBtn.addEventListener('click' , ()=>{
//     if(fullScreen.requestFullScreen){
//         fullScreenBtn.requestFullscreen();
//     }
// })

fullScreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        fullScreen.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// volume control
let volumeControl = document.getElementById('volumeControl');
let mainVideo = document.getElementById('main-thumbnail-video');

volumeControl.addEventListener('click', () => {
    mainVideo.muted = !mainVideo.muted
    if (video.muted) {
        volumeControl.classList.remove('fa-volume-high');
        volumeControl.classList.add('fa-volume-xmark');
    }
    else {
        volumeControl.classList.add('fa-volume-high');
        volumeControl.classList.remove('fa-volume-xmark');
    }

})

// next video 
let nextBtn = document.getElementById('nextBtn');
let videoElement = document.getElementById('main-thumbnail-video')
let currentVideoIndex = 0;
let videoTitles = document.querySelector('.title')
// console.log(videoTitles);

nextBtn.addEventListener('click' , ()=>{
    currentVideoIndex++;
    if(currentVideoIndex >= videos.length){
        currentVideoIndex = 0;
        
    }
    videoElement.src = videos[currentVideoIndex].filePath;
    // videoElement.load()
    videoElement.play();
    videoTitles.innerHTML = videos[currentVideoIndex].videoName;
})

// individual video play
let thumbnails = document.querySelectorAll('.thumbnail-video');
let mainVideoContainer = document.getElementById('main-thumbnail-video');
let mainVideoTitle = document.querySelector('.title'); // A span/div where main video title will be shown
let mainThumbImg = document.getElementById('mainThumbImg')

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        let videoPath = thumbnail.dataset.src;
        let videoTitle = thumbnail.dataset.title;

        mainVideoContainer.src = videoPath;
        mainVideoContainer.play();

        if (mainVideoTitle) {
            mainVideoTitle.textContent = videoTitle;
        }
        if(mainThumbImg){
            mainThumbImg.style.display = 'none'
            mainVideo.style.display = 'block'
            mainVideo.style.borderRadius = '20px'
        }
    });
});

// autoplay
mainVideo.addEventListener('ended', () => {
    currentVideoIndex++;
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; // Loop back
    }
    mainVideoTitle.textContent = videos[currentVideoIndex].videoName
    mainVideo.src = videos[currentVideoIndex].filePath;
    mainVideo.load();
    mainVideo.play();
});





