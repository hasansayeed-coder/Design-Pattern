// PROBLEM: Incompatible Third-Party/Legacy Interface

// Our modern target interface that the application expects

class ModernDesktop{
    renderProfile(jsonProvider){
        console.log("📊 Dashboard: Fetching data from provider...");
        const jsonString = jsonProvider.fetch.JSON() ; 
        const data = JSON.parse(jsonString) ; 
        console.log(`[UI Render]: User Profile -> Name: ${data.name}, Role: ${data.role}\n`);
    }
}

// An existing provider that works perfectly out of the box
class StandardUserProvider{
    fetchJSON(){
        return JSON.stringify({
            name : 'Alex' , 
            role : "Software Engineer"
        }) ; 
    }
}

// The Legacy/Third-Party Vendor Service (Incompatible Interface)
class LegacyXMLVendorService{
    // Completely different method name and data structure!
    getXMLData(){
        return "<user><name>Sarah Connor</name><role>Security Chief</role></user>";
    }
}

// --- Running the Application ---
const dashboard = new ModernDesktop() ; 

const standardProvider = new StandardUserProvider() ;
dashboard.renderProfile(standardProvider) // Works beautifully!


const legacyService = new LegacyXMLVendorService() ;

// dashboard.renderProfile(legacyService); 
// ❌ CRITICAL FLAW: This crashes the app! 
// The dashboard will try to call legacyService.fetchJSON(), which doesn't exist.

