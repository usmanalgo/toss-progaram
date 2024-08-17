
var image2 = document.querySelector('#img2');
var image = document.querySelector('#img');
var h1 = document.querySelector('h1');

function toss(user) {
    var randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber === 0){
        image.src = 'https://www.sbp.org.pk/events/2021/PCDR/images/GuruNanakCoin-Head.png'
    }else{
        image.src = 'https://leyjao.pk/images/detailed/302/WhatsApp_Image_2023-01-29_at_23.44.12-removebg-preview.png'
    }

    if(user === 'chand' && randomNumber === 0 || user === 'masjid' && randomNumber === 1 ){
        h1.innerHTML = 'hurry you won the toss';


    }else{
        h1.innerHTML = 'bad luck you lost the toss';
    }
}

