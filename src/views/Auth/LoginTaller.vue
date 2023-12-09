<template>
<div class="container mt-10">
    <div class="columns">
        <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Iniciar Sesión 🐧</h3><hr> 
            <form action="#" @submit.prevent="LoginTaller">
                <div class="field">
                    <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g Alex Smith" v-model="name">
                        </div>
                </div>
                <div class="field">
                    <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="password">
                        </div>
                </div>
                <button type="submit" class="button is-primary"><a href="/dashboard">Ingresar</a></button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            /*error: ''*/
        }
    }
    /*name: 'LoginTaller',
    methods: {
        LoginTaller() {
            
        }
    }*/
}
</script>