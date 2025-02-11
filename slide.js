document.addEventListener('DOMContentLoaded' , function()
{
    let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const images = slides.querySelectorAll('img');
    function showSlide(index)
    {
        if(index >= images.length)
            {
                slideIndex = 0;
            }
        else if(index<0)
            {
                slideIndex = images.length-1;
            }
        else
        {
            slideIndex = index;
        }
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
   document.querySelector('.prev').addEventListener('mouseenter' , () => showSlide(slideIndex-1));
   document.querySelector('.next').addEventListener('mouseenter' , () => showSlide(slideIndex+1));

    function autoSlide()
    {
        showSlide(slideIndex + 1);
    }
    let autoSlideInterval = setInterval(autoSlide, 5000);
    const carouselContainer = document.querySelector('.carouel-container');
    carouselContainer.addEventListener('mouseenter' , () => clearInterval(autoSlideInterval));
    carouselContainer.addEventListener('mouseleave', () => autoSlideInterval(autoSlide, 5000));

    showSlide(slideIndex);


});
