const video = document.getElementById('video');
let currentLinkIndex = 0;

// 初始化播放器
video.src = m3u8Links[currentLinkIndex];

function playPause() {
    if (video.paused) {
        video.play().catch(error => console.error("Play error: ", error));
    } else {
        video.pause();
    }
}

function muteUnmute() {
    video.muted = !video.muted;
}

function rewind() {
    video.currentTime -= 10; // 快退10秒
}

function fastForward() {
    video.currentTime += 10; // 快进10秒
}

function prevEpisode() {
    if (currentLinkIndex > 0) {
        currentLinkIndex--;
        video.src = m3u8Links[currentLinkIndex];
        video.play();
    } else {
        alert('已经是第一集了！');
    }
}

function nextEpisode() {
    if (currentLinkIndex < m3u8Links.length - 1) {
        currentLinkIndex++;
        video.src = m3u8Links[currentLinkIndex];
        video.play();
    } else {
        alert('已经是最后一集了！');
    }
}