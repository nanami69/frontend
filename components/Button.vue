<template>
    <button @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script>
    export default {
        name: 'Button'
    }
  </script>
  
  <style scoped>
  /* CSSのスタイルを記述する */
  </style>
  