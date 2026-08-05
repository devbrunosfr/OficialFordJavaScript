

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    
      
    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ 
                    Carousel.Next(); 
                },2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        if (!Carousel._arr || Carousel._size === 0) return;

        let imagemAtual = Carousel._arr[Carousel._sequence];

        let imagemSeguimento = document.getElementById("carousel");
        let imagemTitulo = document.getElementById("carousel-title")

        if (imagemSeguimento && imagemTitulo) {
            
            imagemSeguimento.innerHTML = `
            <a href="${imagemAtual.Url}">
                <img src="${imagemAtual.Image}"></a>`;

            imagemTitulo.innerHTML = `
            <a href="${imagemAtual.Url}">
                ${imagemAtual.Title}</a>`;

            imagemSeguimento.style.opacity = "0.7";
            setTimeout(() => {
                imagemSeguimento.style.opacity = "1";
            }, 1);
        }
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }

};
