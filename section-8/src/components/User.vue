<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User, {{name}}!</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :username="name"
                @usernameReset="name=$event"
                :resetNameFn="resetNameFn"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name: 'Ken'
                // name: undefined
            }
        },
        methods: {
            changeName(){
                this.name = 'Max'
            },
            resetNameFn(){
                this.name = "Ken"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
