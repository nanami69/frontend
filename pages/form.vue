<template>
    <div>
      <form @submit.prevent="submitForm">
        <label>
          映画館の名前:
          <input type="text" v-model="name" required>
        </label>
        <label>
          映画館の住所:
          <input type="text" v-model="address" required>
        </label>
        <label>
          写真登録:
          <input type="file" v-on:change="onFileChange">
        </label>
        <label>
          コメント:
          <textarea v-model="comment"></textarea>
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  </template>
  
  <script>
    export default {
        data() {
            return {
                name: '',
                address: '',
                photo: null,
                comment: '',
            }
        },
        methods: {
            submitForm() {
                // フォームの送信処理
                // axiosなどを使ってバックエンドにフォームの内容を送信する
                console.log('submit form', this.name, this.address, this.photo, this.comment);
                // 送信後にフォームを初期化する
                this.name = '';
                this.address = '';
                this.photo = null;
                this.comment = '';
            },
            onFileChange(e) {
                this.photo = e.target.files[0];
            }
        }
    }
  </script>
  