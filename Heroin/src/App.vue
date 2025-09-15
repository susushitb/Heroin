<script setup>
import Welcome from './components/Welcome.vue';


</script>

<template>
  <header>
  
  </header>
  <main>
    <Welcome />
  </main>
  <footer></footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double&display=swap');

:root {
  --bg-color: #1e1e2f;
  --text-color: #c9d1d9;
  --border-color: #303030;
  --primary-color: #646cff;
  --secondary-color: #42b883;
  --font-family: 'Bitcount Grid Double', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Bitcount Grid Double', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
