// SOLUTION: Ensuring exactly one global instance

class UltimateSettingsConfig{
    constructor(){
        if(UltimateSettingsConfig.instance){
            return UltimateSettingsConfig.instance ;
        }

        // Initialize data only once
        this.settings = {
            theme : 'dark' , 
            apiUrl : "https://api.v1.com"
        }

        console.log("⚙️ INITIAL BASE INSTANCE CREATED!");

        // Cache the instance on the class constructor itself
        UltimateSettingsConfig.instance = this ; 
    }

    set(key , value) {
        this.settings[key] = value ; 
    }

    get(key){
        return this.settings[key] ;
    }
}

// --- Component A ---
const configA = new UltimateSettingsConfig() ; 
configA.set("theme" , 'light') ; 
console.log(`Component A Theme: ${configA.get("theme")}`); // "light"

// --- Component B ---
const configB = new UltimateSettingsConfig() ; 
console.log(`Component B Theme: ${configB.get("theme")}`); // "light" (Synchronized!)


// --- Validation Check ---
console.log(`Are they the exact same memory instance? ${configA === configB}`); // true

configB.set("apiUrl", "https://api.v2.com");
console.log(`Component A updated API URL automatically: ${configA.get("apiUrl")}`); // "https://api.v2.com"