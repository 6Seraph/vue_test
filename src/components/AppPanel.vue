<script setup lang="ts">
import { useUsersList } from '@/store';
const store = useUsersList()

let text = ''
let awaitOnInput: number | undefined
function inputHandler() {
  clearInterval(awaitOnInput);
  awaitOnInput = setTimeout(() => store.fetchUsers(text), 900);
}
import UsersList from './UsersList.vue';
</script>

<template>
  <section>
    <h2>Поиск сотрудников</h2>
    <input autocomplete="off" v-model="text" type="text" placeholder="Введите Id или имя" @input="inputHandler">
    <h2>Результаты</h2>
    <UsersList />
  </section>
</template>

<style scoped lang="scss">
section {
  border-right: 1px solid #E0E0E0;
  box-sizing: border-box;
  padding: 30px 30px 0 20px;
  background-color: var(--content-bg);
  width: 30%;
  height: 100%;

  flex: {
    shrink: 0;
    grow: 0;
  }

  display: flex;
  flex-direction: column;
}

h2 {
  font: {
    size: 1rem;
    weight: 600;
  }
}

input {
  margin: 15px 0 30px;
  border: 1px solid var(--gray-border);
  border-radius: 8px;
  padding: 16px 24px;

  font: {
    size: 0.875rem;
    weight: 400;
  }

  &::placeholder {
    color: var(--gray-font-2);
  }
}
</style>