const app = new Vue({

    el: "#appContainer",
    data: {

        illustrations: [
            {
                title: "Kitsune Witch",
                imgSource: "img/illustration__0004_14_fox.jpg",
                created: "1 ottobre 2020",
            },
            {
                title: "Bones Witch",
                imgSource: "img/illustration__0005_11_Bones-snake.jpg",
                created: "31 ottobre 2020",
            },
            {
                title: "Artist Witch",
                imgSource: "img/illustration__0006_10_Artist.jpg",
                created: "14 ottobre 2020",
            },
            {
                title: "Lumus Witch",
                imgSource: "img/illustration__lantern.jpg",
                created: "24 ottobre 2020",
            },
            {
                title: "Pink universe",
                imgSource: "img/illustration__0000_sophia-lowres.jpg",
                created: "04 aprile 2020",
            },
            {
                title: "Casual portrait",
                imgSource: "img/illustration__0001_July_.jpg",
                created: "19 luglio 2020",
            },
            {
                title: "Black Lady",
                imgSource: "img/illustration__0002_Black-Lady_fullcolor-min.jpg",
                created: "30 agosto 2020",
            },
        ],

        activeImg: 0,

    },
    methods: {
        onDotClick(index) {

            this.activeImg = index;
        
        },
        nextImg() {
            const arrayLength = this.illustrations.length-1;
            
            if (this.activeImg < arrayLength && this.activeImg >= 0) {
                this.activeImg++;

            } else if (this.activeImg === arrayLength) {
                this.activeImg = 0;
            }

           
            console.log(this.activeImg)
        },
        prevImg() {
            const arrayLength = this.illustrations.length-1;

            if (this.activeImg <= arrayLength && this.activeImg > 0) {
                this.activeImg--;

            } else if (this.activeImg === 0) {
                this.activeImg = arrayLength;
            }
            console.log(this.activeImg)
        },
        dotIsActive(index) {
            if (this.activeImg === index) {
                return true;
            }
        }

    },

});