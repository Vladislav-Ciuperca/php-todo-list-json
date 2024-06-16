const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hellow Vue!',

            tasks:[],

            newTask: ""
        
        }
    },
    methods: {

        addTask(){
            console.log("aggiunta una taskerella", this.newTask);

            const newOne = {
                    task : this.newTask,
                    complete: false,
            }

            this.tasks.push(newOne)
        }

    },
    created() {

    },
    mounted() {

        console.log("Recupero i datio dal server");

        axios.get("server.php").then(results => {
            console.log(results.data);

            this.tasks = results.data
        })

    }
}).mount('#app')