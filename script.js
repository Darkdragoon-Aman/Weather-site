let i = 1
const API_KEY = "49ac5ab8fc36fd1a725867e85f753a0e"
// https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}

const images = [
    "url('Images/1.jpg')",
    "url('Images/2.jpg')",
    "url('Images/3.jpg')",
    "url('Images/4.jpg')",
    "url('Images/5.jpg')",
    "url('Images/6.jpg')",
    "url('Images/7.jpg')",
    "url('Images/8.jpg')",
    "url('Images/9.jpg')",
]

const icons = [
    'icon/1.png',
    'icon/2.png',
    'icon/3.png',
    'icon/4.png',
    'icon/5.png',
    'icon/6.png',
    'icon/7.png',
    'icon/8.png',
    'icon/9.png',
]

setInterval(wct, 15000)
function wct(){
    if(i  < 10){
        g = i++
    }
    else{
        i = 1
    }
    document.body.style.backgroundImage = images[g];
    console.log("wallpaper working...   ")    
}

function search(ele) {
    if(event.key === 'Enter') {
        console.log(ele.value)   
    myFunction()
    
    async function myFunction() {
        const op = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&appid=${API_KEY}&units=metric`)
        const data = await op.json()
        console.log(data) 
        
        switch(data.weather[0].main){
            case "Haze":
                document.getElementById('cloudy1').src= 'icon/9.png';
                break
            case "Rain":
                document.getElementById('cloudy1').src= 'icon/6.png';
                break
            case "Clouds":
                document.getElementById('cloudy1').src= 'icon/3.png';
                break
            case "Clear":
                document.getElementById('cloudy1').src= 'icon/2.png';
                break
            case "Clear":
                document.getElementById('cloudy1').src= 'icon/8.png';
                break
        }

        showWeather(data)
        function showWeather(){
            document.getElementById('sw').innerHTML= `${data.main.temp}℃`;
            document.getElementById('sa').innerHTML= `${data.weather[0].main}`;
            

        }
      }
    }
}

// Kill me 