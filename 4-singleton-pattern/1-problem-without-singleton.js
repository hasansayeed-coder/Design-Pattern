// PROBLEM: Duplicate instances consuming memory and desynchronizing data

class SettingsConfig{
    constructor(){
        this.settings = {
            theme : 'dark' , 
            apiUrl : "https://api.v1.com" , 
        } ; 
        console.log("⚙️ New Settings Instance Created in Memory!");
    }

    set(key , value) {
        this.settings[key] = value ; 
    }

    get(key){
        return this.settings[key] ;
    }
}

// --- Component A (e.g., Theme Switcher) ---
const configInstanceA = new SettingsConfig() ; 
configInstanceA.set("theme" , 'light') ; // Changes theme to light
console.log(`Component A Theme: ${configInstanceA.get("theme")}`); // "light"

// --- Component B (e.g., Sidebar Component) ---
const configInstanceB = new SettingsConfig() ;// Accidentally creates a fresh instance!
console.log(`Component B Theme: ${configInstanceB.get("theme")}`); // "dark"

// CRITICAL FLAWS:
// 1. Memory Waste: We have two identical config blocks taking up memory.
// 2. Data Desynchronization: Component B did not get the updated "light" theme because it's looking at a completely different object!
console.log(`Are they the same instance? ${configInstanceA === configInstanceB}`); // false