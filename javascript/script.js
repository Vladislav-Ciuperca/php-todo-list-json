const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hellorrrrw Vue!',
            tasks: [],
            newTask: "",

            apiUrl: "server.php",
            postRequestConfig: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        }
    },
    methods: {

        addTask() {
            console.log("aggiunta una taskerella", this.newTask);

            const newOne = {
                task: this.newTask,
                complete: false,
            }

            axios.post(this.apiUrl, newOne, this.postRequestConfig).then(result => {
                console.log("axios ANDATA", result.data);

                this.tasks = result.data

            })

        },

    },
    created() {

    },
    mounted() {

        console.log("Recupero i datio dal server");

        axios.get(this.apiUrl).then(results => {
            console.log(results.data);

            this.tasks = results.data
        })

    }
}).mount('#app')