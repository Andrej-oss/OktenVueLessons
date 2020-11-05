export const frameworkMixin = {
    data(){
        return{
            tittle: 'Frameworks List',
            frameworks: [
                {
                    "tittle": "Vue",
                    "completed": false,
                    "difficult": "easy"
                },
                {
                    "tittle": "React",
                    "completed": true,
                    "difficult": "medium"
                },
                {
                    "tittle": "Angular",
                    "completed": true,
                    "difficult": "hard"
                },
        ]
        }
    },
    methods:{
        onChange(event){
            console.log("change");
            this.tittle = event;
        }
    }
};
