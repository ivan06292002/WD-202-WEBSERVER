const books = Vue.createApp({
    data(){
        return{
            showBooks: false,
            btitle: 'The Ledger',
            bauthor: 'Carl Ivan Dayrit',
            year: 2008
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});
books.mount('#books')