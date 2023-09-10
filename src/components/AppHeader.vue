<template>
  <header>
    <h1>Жилфонд</h1>
    <span>Пользователь</span>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

h1 {
  font: {
    size: 2rem;
    weight: 700;
  }

  color: #E31F24;
  vertical-align: top;
}

span {
  font: {
    size: 1rem;
    weight: 400;
  }

  vertical-align: top;
  color: var(--gray-font);
}
</style>