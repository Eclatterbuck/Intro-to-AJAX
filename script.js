//IIFE

$(()=>{
    let data

    var apiKey = "4c04834ecd8a1f0144f7cd5206b7b6e6"
    //CACHED DOM ELEMENTS
    const $location = $("#location")
    console.log($location)
    const $button = $("#submit")
    // const $outputData = $("#outputData")
    const $city = $("#city")
    const $temperature = $("#temperature")
    const $feelsLike = $("#feelsLike")
    const $weather = $("#weather")

    //EVENT LISTENERS
    $button.on("click", (evt) => {
        evt.preventDefault()
        //grab the information and store in a variable
        let city = $city.val()
        console.log(city);
        
       
        // $location.val("")
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial` 
        }).then((result) => {
            //Handle Success
            //Grab data from result and append to the DOM
            console.log(result)
            data = result
            render()

        }, (error) => {
            //Handle Error
            console.log(error)
        })

            console.log(data)
    });
    function render(){
        console.log($location)
        $location.text(data.name)
        $temperature.text(data.main.temp)
        $feelsLike.text(data.main.feels_like)
        $weather.text(data.weather[0].description)
        
    
    
    }
    

})











