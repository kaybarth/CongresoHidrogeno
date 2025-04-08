<template>
  <div class="under-construction">
    <h1>Oops! This page is under construction.</h1>
    <p>We're working hard to bring you this feature soon.</p>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction'
}
</script>

<style scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #e74c3c;
}

p {
  font-size: 1.2rem;
  color: #34495e;
}
</style>
