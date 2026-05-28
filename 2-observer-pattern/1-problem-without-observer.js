class WeatherStation{
    constructor() {
        this.temperature = 0 ;
        // Hardcoded displays. If we want to add a 4th display later, we have to change this core class.
        this.phoneDisplay = new PhoneDisplay() ; 
        this.dashboardDisplay = new DashboardDisplay();
    }   


    setTemperature(newTemp){
        console.log(`\n--- Weather Station: New temperature data received: ${newTemp}°C ---`);
        this.temperature = newTemp ;

        // The core logic is forced to know about and manually call every single display system.
        this.phoneDisplay.update(this.temperature) ; 
        this.dashboardDisplay.update(this.temperature) ; 
    }
}

class PhoneDisplay{
    update(temp){
        console.log(`Phone UI: Displaying updated temp -> ${temp}°C`) ;
    }
}


class DashboardDisplay{
    update(temp){
        console.log(`Dashboard Screen: Rendering modern chart with temp -> ${temp}°C`);
    }
}

const station = new WeatherStation() ; 
station.setTemperature(25) ; 
station.setTemperature(29) ; 