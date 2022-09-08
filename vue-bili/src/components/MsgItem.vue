<script setup lang="ts">
defineProps<{
    username: string
    content: string
}>()
</script>
    
<template>
    <div class="msg-item">
        <div class="usershow">
            <dl>
                <dt>{{username}}</dt>
                <dd>lv2</dd>
                <dd>v3</dd>
            </dl>
        </div>
        <div class="content">
            {{content}} 123
        </div>
    </div>
</template>
    
<style scoped>
.msg-item {
    background-color: azure;
}

.msg-item>.usershow {
    font-size: 14px;
    border-bottom: 1px #ccc solid;
}
</style>
    