<template>
    <div class="v-todos">
        <h1 class="v-todos__title">todos</h1>
      <div class="v-todos-content">
        <input class="v-todos-content__input" type="text"
               v-model="task"
               @keyup.enter="addNewTask(task)"
               placeholder="What needs to be done?"
        >
        <div class="v-todos-content__list">
          <div class="v-todos-content__item"
              v-for="(task, i) in tasksList"
               :key="i"
          >
            {{ task }}
            <span class="destroy" @click="removeTask(task)">
              x
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'v-todos',
  data() {
    return {
      task: '',
      tasksList: [],
    };
  },
  methods: {
    addNewTask(task) {
      this.tasksList.push(task);
      console.log(this.tasksList);
      localStorage.setItem('taskList', JSON.stringify(this.tasksList));
      this.task = '';
    },
    removeTask(task) {
      this.tasksList.splice(this.tasksList.indexOf(task), 1);
      localStorage.setItem('taskList', JSON.stringify(this.tasksList));
    },
  },
  beforeMount() {
    const data = JSON.parse(localStorage.getItem('taskList'));
    if (data !== null) {
      this.tasksList = data;
    } else {
      this.tasksList = [];
    }
  },
};
</script>

<style scoped lang="scss">
  .v-todos {
    &__title  {
      font-size: 60px;
      text-transform: lowercase;
      color: saddlebrown;
      text-align: center;
      font-weight: 300;
      margin: 0 10px;
    }
    &-content {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      box-shadow: -4px 5px 31px -3px rgba(128,128,128,1);
      display: flex;
      flex-direction: column;
      &__input {
        height: 50px;
        border: none;
        padding-left: 50px;
        font-size: 30px;
        outline: none;
      }
      &__list {
      }
      &__item {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 20px 20px 20px 50px;
        font-size: 30px;
        position: relative;
        word-break: break-all;
        & span {
          position: absolute;
          right: 20px;
          cursor: pointer;
        }
      }
    }
  }
</style>
