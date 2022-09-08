<script setup lang="ts">
import { getInnerRange } from '@vue/compiler-core';
import MsgItem from '../components/MsgItem.vue'
import BiliService from '../service/biliService'

defineProps<{
  msg: string
}>()


console.log(BiliService.getInstance())

</script>

<template>

  <div class="chat">
    
    <MsgItem username="hello" content="123"></MsgItem>

    <div class="msg-item" v-for="n in 5">
      <div class="usershow">
            <dl>
                <dt>匿名用户 {{n}}</dt>
                <dd>lv2</dd>
                <dd>v3</dd>
            </dl>
      </div>
      <div class="content">
        {{msg}} {{n}}
      </div>
    </div>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.msg-item{
  width: 400px;
  height: 120px;
  background-color: azure;
  margin: 5px;
}

.msg-item > .usershow{
  font-size: 14px;
  border-bottom: 1px #ccc solid;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  .chat{
    align-items: center;
  }

  .chat > div{
    display: block;
  }
}
</style>
