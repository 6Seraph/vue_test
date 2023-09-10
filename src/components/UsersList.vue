<script setup lang="ts">
import { useUsersList } from '@/store';
const store = useUsersList()
</script>

<template>
  <div v-if="!store.getStatus">начните поиск</div>
  <div v-else-if="store.getStatus === 'loading'" class="spiner"></div>
  <ul v-else-if="store.users.length">
    <li v-for="user in store.users" v-bind:key="user.id">
      <a @click="() => store.selectUser(user)">
        <img src="../assets/imgPlaceholder.svg" alt="user avatar">
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
      </a>
    </li>
  </ul>
  <div v-else-if="store.getStatus === 'error'">сервер не отвечает</div>
  <div v-else>ничего не найдено</div>
</template>

<style scoped lang="scss">
ul {
  position: relative;
  right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 10px 20px 10px 30px;
  width: calc(100% + 50px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @supports selector(::-webkit-scrollbar) {
    padding: 10px 20px;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;

      &-thumb {
        background: var(--gray-border)
      }
    }
  }
}

li {
  border-radius: 10px;
  box-shadow: var(--shadow);
  overflow: hidden;
  flex-shrink: 0;
}

a {
  display: grid;
  grid: repeat(2, 35px) / 70px 1fr;
  justify-items: start;
  column-gap: 15px;

  &:hover {
    background-color: var(--gray-border);
    cursor: pointer;
  }
}

img {
  grid-area: 1 / 1 / 3 / 2;
  border-right: 1px solid var(--gray-border);
  box-sizing: border-box;
  background-color: white;
  height: 70px;
  width: 70px;
  object-fit: cover;
}

span {
  font: {
    size: 14px;
    weight: 400;
  }

  align-self: start;


  &:first-of-type {
    font-weight: 600;
    color: var(--gray-font);
    align-self: end;
  }
}

div {
  font: {
    size: 14px;
    weight: 400;
  }

  color: var(--gray-font-2);
  margin-top: 10px;
}

.spiner {
  align-self: center;

  &::before {
    content: '⏳';

    @keyframes spiner {
      from {
        content: '⏳';
      }

      to {
        content: '⌛';
      }
    }

    animation: spiner 0.5s infinite;
  }
}
</style>