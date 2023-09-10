<script setup lang="ts">
import { useUsersList } from '@/store';
const store = useUsersList()
</script>

<template>
  <section v-if="store.selectedUser" class="details">
    <h3>{{ store.selectedUser.name }}</h3>
    <img src="../assets/imgPlaceholder.svg" alt="user image">
    <a :href="'mailto:' + store.selectedUser.email"><span>email: </span>{{ store.selectedUser.email }}</a>
    <a :href="'tel:+' + store.selectedUser.phone"><span>phone: </span>{{ store.selectedUser.phone }}</a>
    <h4>О себе</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
  <div v-else>Выберите сотрудника, чтобы посмотреть его профиль</div>
</template>

<style scoped lang="scss">
%font {
  font: {
    size: 0.875rem;
    weight: 400;
  }
}

section {
  padding: 30px 30px 30px 20px;
  background-color: var(--content-bg);
  box-sizing: border-box;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-column-gap: 60px;
  align-content: start;

  flex: {
    shrink: 0;
    grow: 0;
  }
}

img {
  grid-area: 1 / 1 / 6 / 2;
  width: 100%;
}

h3 {
  grid-area: 1 / 2 / 2 / 3;

  font: {
    size: 1rem;
    weight: 600;
  }
}

a {
  margin-top: 10px;
  text-decoration: none;
  @extend %font;
  color: var(--gray-font-2)
}

span {
  font-weight: 600;
  color: var(--gray-font);
}

h4 {
  @extend h3;
  grid-area: 4 / 2 / 5 / 3;
  margin-top: 20px;
  color: var(--gray-font);
}

p {
  grid-area: 5 / 2 / 6 / 3;
  margin-top: 25px;
  @extend %font;
}

div {
  width: 100%;
  @extend %font;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>