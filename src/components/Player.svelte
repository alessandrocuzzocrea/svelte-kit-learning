<script>
  import { onMount } from 'svelte';

  let isPlaying = false;
  let timer = 0;
  function handleToggleClass() {
    isPlaying = !isPlaying;

    if (isPlaying) {
      // Start the timer
      timer = setInterval(() => {
        console.log('Timer tick');
      }, 1000);
    } else {
      // Stop the timer
      clearInterval(timer);
      timer = 0;
    }
  }
</script>

<div class="flex flex-row items-center p-2 justify-between bg-slate-200">
  <input
    type="text"
    class="flex flex-1 border rounded px-2 py-1 mr-2 p-1"
    placeholder="What are you doing?"
  />
  <select class="p-1 mr-2">
    <option>Project 1</option>
    <option />
    <option>Maybe</option>
  </select>
  <p class="mr-2">Project</p>
  <p class="mr-2">00:00:00</p>
  <button
    on:click={handleToggleClass}
    class={`${
      isPlaying ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
    }  text-white font-bold py-2 px-4 rounded p-1`}>Start</button
  >
</div>
