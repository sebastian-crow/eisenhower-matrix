<template>
    <footer>
        <a href="/about">
          <div class="about"></div>
        </a>
        <a href="/copyright">
          <div class="copyright "></div>
        </a>
        <br>
    </footer>
</template>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}

.about{
  display: inline-block;
  background-image: url('../assets/about.svg');
  background-repeat: no-repeat;
  position: relative;
  width: 10%;
  height: 2.5rem;
  left: 40%;
  top: 50%;
}

.copyright {
  display: inline-block;
  background-image: url('../assets/copyright.svg');
  background-repeat: no-repeat;
  position: relative;
  width: 10%;
  height: 2.5rem;
  top: 50%;
  left: 43%;
  
}

</style>