<template>
  <div class="music-player">
    <button @click="prevSong">上一首</button>
    <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
    <button @click="nextSong">下一首</button>

    <span class="song-title">{{ currentSong.title }}</span>

    <div class="progress-container">
      <input type="range" 
             v-model="progress" 
             :max="totalDuration" 
             @input="onProgressChange" 
             class="progress-bar" />
      <span class="progress-time">{{ formatTime(progress) }} / {{ formatTime(totalDuration) }}</span>
    </div>

    <span>倍速: </span>
    <select v-model="playbackRate" @change="changePlaybackRate">
      <option value="1">1x</option>
      <option value="1.5">1.5x</option>
      <option value="2">2x</option>
    </select>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  name: 'MusicPlayer',
  setup() {
    // Song data and state management
    const songs = [
      { title: 'Song 1', url: 'https://www.example.com/song1.mp3' },
      { title: 'Song 2', url: 'https://www.example.com/song2.mp3' },
      { title: 'Song 3', url: 'https://www.example.com/song3.mp3' },
    ];
    const currentSongIndex = ref(0);
    const currentSong = ref(songs[currentSongIndex.value]);
    const audio = new Audio(currentSong.value.url);
    
    const isPlaying = ref(false);
    const progress = ref(0);  // Current progress in seconds
    const totalDuration = ref(0); // Total duration of the song in seconds
    const playbackRate = ref(1); // Playback speed

    // Format time in MM:SS
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
    };

    // Play or pause song
  
    const togglePlay = () => {
      if (isPlaying.value) {
        audio.pause();
      } else {
        audio.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    // Switch to previous song
    const prevSong = () => {
      currentSongIndex.value = (currentSongIndex.value - 1 + songs.length) % songs.length;
      currentSong.value = songs[currentSongIndex.value];
      audio.src = currentSong.value.url;
      if (isPlaying.value) audio.play();
    };

    // Switch to next song
    const nextSong = () => {
      currentSongIndex.value = (currentSongIndex.value + 1) % songs.length;
      currentSong.value = songs[currentSongIndex.value];
      audio.src = currentSong.value.url;
      if (isPlaying.value) audio.play();
    };

    // Handle progress change by dragging the progress bar
    const onProgressChange = () => {
      audio.currentTime = progress.value;
    };

    // Handle audio progress
    const updateProgress = () => {
      progress.value = audio.currentTime;
    };

    // Update the total duration of the current song
    const updateDuration = () => {
      totalDuration.value = audio.duration;
    };

    // Change playback rate
    const changePlaybackRate = () => {
      audio.playbackRate = playbackRate.value;
    };

    // Event listeners for audio
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadeddata', updateDuration);

    // Clean up the event listeners when component is destroyed
    watchEffect(() => {
      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('loadeddata', updateDuration);
      };
    });

    // Return all reactive variables and methods to template
    return {
      songs,
      currentSong,
      isPlaying,
      progress,
      totalDuration,
      playbackRate,
      togglePlay,
      prevSong,
      nextSong,
      formatTime,
      onProgressChange,
      changePlaybackRate,
    };
  }
};
</script>
<style scoped>
.music-player {
  /* background-color:rgba(red, green, blue, 0); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  opacity: 0;
  /* transition: opacity 0.3s ease; */
}
/* .music-player :hover  {
  opacity: 1;
} */
button {
  margin-right: 10px;
}

.song-title {
  flex-grow: 1;
  text-align: center;
}

.progress-container {
  display: flex;
  align-items: center;
}

.progress-bar {
  width: 200px;
  margin-right: 10px;
}

select {
  margin-left: 10px;
}
</style>
