const app = new Vue({

    el: "#appContainer",
    data: {
        imgSource: "img/illustration__0004_14_fox.jpg",
        illustrations: [
            {
                indice: 1,
                imgSource: "img/illustration__0004_14_fox.jpg"
            },
            {
                indice: 2,
                imgSource: "img/illustration__0005_11_Bones-snake.jpg"
            },
            {
                indice: 3,
                imgSource: "img/illustration__0006_10_Artist.jpg"
            },
            {
                indice: 4,
                imgSource: "img/illustration__lantern.jpg"
            },
            {
                indice: 5,
                imgSource: "img/illustration__0000_sophia-lowres.jpg"
            },
            {
                indice: 6,
                imgSource: "img/illustration__0001_July_.jpg"
            },
            {
                indice: 7,
                imgSource: "img/illustration__0002_Black-Lady_fullcolor-min.jpg"
            },
        ],



    },
    methods: {
        onDotClick(event) {
            this.imgSource = event.imgSource;
        }
    },
});