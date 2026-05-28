class WeatherStation{
    constructor() {
        this.temperature = 0 ; 
        this.observers = [] ; 
    }

    // Attach an observer
    addObserver(observer){
        this.observers.push(observer) ;
        console.log(`[System]: Added a new display tracking module.`) ;
    }

    removeObserver(observer){
        this.observers = this.observers.filter(obs => obs != observer) ; 
        console.log(`[System]: Removed a display module.`);
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.update(this.temperature)) ;
    }

    setTemperature(newTemp){
        console.log(`\n--- Weather Station: Broadcaster updated to ${newTemp}°C ---`);
        this.temperature = newTemp ; 
        this.notifyObservers() ;
    }
}

class PhoneDisplay{
    update(temp){
        console.log(`📱 Phone UI Event: Rendering temp -> ${temp}°C`);
    }
}

class DashboardDisplay{
    update(temp){
        console.log(`⌚ Watch Screen Event: Displaying small text -> ${temp}°C`);
    }
}

class SmartWatchDisplay{
    update(temp){
        console.log(`⌚ Watch Screen Event: Displaying small text -> ${temp}°C`);
    }
}

// --- Running the Flexible Application ---
const station = new WeatherStation() ;

const phone = new PhoneDisplay() ; 
const dashboard = new DashboardDisplay() ; 
const watch = new SmartWatchDisplay() ; 

// Dynamic Subscriptions
station.addObserver(phone) ; 
station.addObserver(dashboard) ;

station.setTemperature(22) ; // Notifies Phone and Dashboard

// We can add new features (Smart Watch) dynamically without altering a single line of WeatherStation's core logic!
station.addObserver(watch) ; 
station.setTemperature(26) ; // Notifies Phone, Dashboard, and Watch

// We can also drop modules at runtime safely

station.removeObserver(phone) ; 
station.setTemperature(28) ;
