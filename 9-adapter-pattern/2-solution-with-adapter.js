// SOLUTION: Creating an Adapter Wrapper to bridge interfaces cleanly

// 1. The Incompatible Legacy Service (Adaptee)

class LegacyXMLVendorService{
    getXMLData(){
        return "<user><name>Sarah Connor</name><role>Security Chief</role></user>";
    }
}

// 2. The Adapter (Translates Legacy XML output into Modern JSON expected format)

class VendorAdapter{
    constructor(LegacyXMLVendorService){
        this.LegacyXMLVendorService = LegacyXMLVendorService ; // Hold reference to the old service
    }

    // Mimic the exact method name the modern application expects

    fetchJSON(){
        // Step A: Call the legacy method
        const xmlData = this.LegacyXMLVendorService.getXMLData() ; 

        // Step B: Translate/Convert XML to a native JS Object (Simplified for demonstration)
        const name = xmlData.match(/<name>(.*?)<\/name>/)[1];
        const role = xmlData.match(/<role>(.*?)<\/role>/)[1];

        // Step C: Return the data structure the modern system expects
        return JSON.stringify({ name: name, role: role });
    }
}

// 3. Modern Client System

class ModernDashboard{
    renderProfile(jsonProvider){
        const jsonString = jsonProvider.fetchJSON() ; 
        const data = JSON.parse(    ) ; 
        console.log(`[UI Render]: User Profile -> Name: ${data.name}, Role: ${data.role}\n`);
    }
}

// --- Running the Flexible Application ---
const dashboard = new ModernDashboard();

// Step 1: Initialize the incompatible service
const legacyService = new LegacyXMLVendorService();

// Step 2: Plug it into the Adapter
const adaptedService = new VendorAdapter(legacyService);

// Step 3: Pass the adapter straight to the dashboard. No crashes, clean execution!
console.log("📊 Dashboard: Processing legacy data via Adapter...");
dashboard.renderProfile(adaptedService);