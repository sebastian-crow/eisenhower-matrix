<template>
    <div class="back"></div>
  <p>
    Eisenhower Matrix. Eisenhower says: “I have two kinds of problems, the
    urgent and the important. The urgent are not important, and the important
    are never urgent.”
  </p>

  <h2 class="urgent">Urgent</h2>
  <h2 class="not-urgent">Not-Urgent</h2>
  <h3 class="important">Important</h3>
  <h3 class="not_important">Not important</h3>

  <div class="do_it">
    <h1>Do it</h1>
  </div>

  <div class="schedule_it">
    <h1>Schedule it</h1>
  </div>

  <div class="delegate_it">
    <h1>Delegate it</h1>
  </div>

  <div class="delete_it">
    <h1>Delete it</h1>
  </div>

</template>

<script>
export default {
  name: "About",
  inheritAttrs: false, // Disable: 'non-props' warning
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:wght@400;700&display=swap");

p {
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.18em;
  position: relative;
  left: 2%;
}

h2 {
  font-family: Fira Code;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
}

.urgent {
  display: inline-block;
  position: relative;
  top: 2rem;
  left: 20%;
  width: 20%;
}

.not-urgent {
  display: inline-block;
  position: relative;
  top: 2rem;
  left: 40%;
  width: 30%;
}

.important {
  display: inline-block;
  position: relative;
  width: 98px;
  height: 24px;
  left: -16rem;
  top: 7rem;

  font-family: Fira Code;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;

  transform: rotate(-90deg);
}

.not_important {
  display: inline-block;
  position: relative;
  width: 141px;
  height: 24px;
  left: -3.7rem;
  top: 15rem;

  font-family: Fira Code;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;

  transform: rotate(-90deg);
}

.do_it {
  display: inline-block;
  position: relative;
  width: 158.74px;
  height: 119.16px;
  left: -6rem;
  top: 3rem;

  background: #d05454;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.do_it h1 {
  position: relative;
  width: 47px;
  height: 26px;
  top: 35%;
  left: 32%;

  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.schedule_it {
  display: inline-block;
  position: relative;
  width: 158.74px;
  height: 119.16px;
  left: 15rem;
  top: -4.4rem;

  background: #eab15d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.schedule_it h1 {
  position: relative;
  width: 112px;
  height: 26px;
  top: 35%;
  left: 15%;

  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.delegate_it {
  display: inline-block;
  position: relative;
  width: 158.74px;
  height: 119.16px;
  left: -7rem;
  top: 5rem;

  background: #eeefa6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.delegate_it h1 {
  position: relative;
  width: 108px;
  height: 26px;
  top: 35%;
  left: 15%;

  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.delete_it {
  display: inline-block;
  position: relative;
  width: 158.74px;
  height: 119.16px;
  left: 15rem;
  top: -2.5rem;

  background: #c3c3c3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.delete_it h1 {
  position: relative;
  width: 85px;
  height: 26px;
  top: 35%;
  left: 23%;

  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.back {
    background-image: url('../assets/back_button.svg');
    display: inline-block;
    position: relative;
    top: 10%;
    width: 200px;
    height: 60%;
}
</style>
