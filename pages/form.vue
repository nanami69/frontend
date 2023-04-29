<template>
    <div>
        <form @submit.prevent="submitForm">
            <label>
                映画館の名前:
                <input type="text" v-model="name" v-on:input="checkName" required>
                <div v-if="nameError" style="color:red;">{{ nameError }}</div>
            </label>
            <label>
                映画館の住所:
                <input type="text" v-model="address" v-on:input="checkAddress" required>
                <div v-if="addressError" style="color:red;">{{ addressError }}</div>
            </label>
            <label>
                写真登録:
                <input type="file" v-on:change="onFileChange">
            </label>
            <label>
                コメント:
                <textarea v-model="comment" v-on:input="checkComment"></textarea>
                <div v-if="commentError" style="color:red;">{{ commentError }}</div>
            </label>
            <button type="submit" :disabled="hasErrors">送信</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            address: '',
            photo: null,
            comment: '',
            nameError: '',
            addressError: '',
            commentError: '',
        }
    },
    computed: {
        hasErrors() {
            return !!this.nameError || !!this.addressError || !!this.commentError;
        }
    },
    methods: {
        submitForm() {
            const instance = axios.create({
                baseURL: 'http://localhost:8080',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('address', this.address);
            formData.append('photo', this.photo);
            formData.append('comment', this.comment);
            // バックエンドにフォームの内容を送信する
            instance.post('/register-cinema', formData)
            .then((response) => {
                console.log(response.data.lat)
                console.log(response.data.lng)
                // console.log(response.data.photo)
                // aboutページにリダイレクトしつつ、パラメータとしてlatとlngを渡す
                this.$router.push({
                    name: 'about',
                    params: {
                        lat: response.data.lat,
                        lng: response.data.lng,
                        name: response.data.name,
                        photo: response.data.photo,
                        comment: response.data.comment
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            });
            console.log('submit form', this.name, this.address, this.photo, this.comment);
            // 送信後にフォームを初期化する
            this.name = '';
            this.address = '';
            this.photo = null;
            this.comment = '';
        },
        onFileChange(e) {
            this.photo = e.target.files[0];
        },
        checkName() {
            if (this.name.length > 20) {
                this.nameError = "20文字以内で入力してください";
            } else {
                this.nameError = "";
            }
        },
        checkAddress() {
            if (this.address.length > 100) {
                this.addressError = "100文字以内で入力してください";
            } else {
                this.addressError = "";
            }
        },
        checkComment() {
            if (this.comment.length > 200) {
                this.commentError = "200文字以内で入力してください";
            } else {
                this.commentError = "";
            }
        }
    }
}
</script>
