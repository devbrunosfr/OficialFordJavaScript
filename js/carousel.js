

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

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;
            Carousel.Next(); 
            Carousel.ResetTimer();
            Carousel.InitButtons(); 
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static ResetTimer() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function () {
            Carousel.Next();
        }, 2000);
    }

    static Next() {
        if (!Carousel._arr || Carousel._size === 0) return;

        let imagemAtual = Carousel._arr[Carousel._sequence];
        let imagemSeguimento = document.getElementById("carousel");
        let imagemTitulo = document.getElementById("carousel-title");

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

    static Prev() {
        if (!Carousel._arr || Carousel._size === 0) return;

        
        Carousel._sequence = (Carousel._sequence - 2 + Carousel._size) % Carousel._size;

        Carousel.Next();
        Carousel.ResetTimer();
    }

    static InitButtons() {
        const btnEsquerda = document.querySelector('.btesquerda');
        const btnDireita = document.querySelector('.btdireita');

        if (btnEsquerda) {
            btnEsquerda.addEventListener('click', () => Carousel.Prev());
        }

        if (btnDireita) {
            btnDireita.addEventListener('click', () => {
                Carousel.Next();
                Carousel.ResetTimer();
            });
        }
    }
}
