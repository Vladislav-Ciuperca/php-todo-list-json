const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',

            students:[],
            done: "done"
        }
    },
    methods: {

    },
    created() {

    },
    mounted() {

        console.log("Recupero i datio dal server");

        axios.get("server.php").then(results => {
            console.log(results.data);

            this.students = results.data
        })

    }
}).mount('#app')