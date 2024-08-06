let input = document.querySelector("input")
let searchBtn = document.querySelector(".searchicon")
let stateName = '';
let temperature = document.querySelector("#temperature")
let windSpeed = document.querySelector("#windSpeed")
let humidityPercent = document.querySelector("#humidityPercent")
let detailsbox = document.querySelector(".detailsbox")
let weatherIcon = document.querySelector("#weatherIcon")

const apiKey = "c632ab9c53adf999131b80e8112b7cd4"
let apiURl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi&appid=${apiKey}`

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        stateName = input.value;
        fetchApi();
    }
})

searchBtn.addEventListener("click",()=>{
    stateName = input.value;
    fetchApi();
})

let fetchApi=()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${stateName}&appid=${apiKey}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        console.log(data.cod)
        tempValue = Math.round(data.main.temp)
        temperature.innerHTML = `${tempValue} <span><sup>o</sup>C</span>`
        humidityPercent.innerText = `${data.main.humidity}%`
        windSpeed.innerText = `${data.wind.speed} Km/h`
        detailsbox.style.display = "block"
        document.querySelector("#tempCondition").innerText = `${data.weather[0].main}`
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/Clouds.png"
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/Clear.png"
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/Mist.png"
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/Drizzle.png"
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/Rain.png"
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "images/Snow.png"
        }
        else{
            weatherIcon.src = "images/notfound.png"
        }

    })
    .catch((error)=>{
        alert("Enter correct name")
        console.log("error nahi aaya")
        console.log(error + ": Error Occured cause API couldn't fetched.")
    })
}

// fetchApi();