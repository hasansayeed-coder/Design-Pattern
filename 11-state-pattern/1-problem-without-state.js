// PROBLEM: Conditional explosion based on object status/tier flags

class UserAccount{
    constructor(name , plan = "Free"){
        this.name = name ; 
        this.plan = plan ; // "Free", "Silver", or "Gold"
    }

    // Every single operational method gets choked with repetitive if/else logic
    uploadFile(FileSizeMB){
        console.log(`\n[Request]: ${this.name} attempts to upload a ${fileSizeMB}MB file...`);

        if(this.plan === 'Free'){
            if(FileSizeMB > 5){
                console.log("❌ Upload Denied: Free tier is restricted to 5MB max file limits.");
            }else{
                console.log("✅ File Uploaded successfully to Free storage cloud.");
            }
        }
        else if(this.plan === 'Silver'){
            if(FileSizeMB > 50){
                console.log("❌ Upload Denied: Silver tier is restricted to 50MB max file limits.");
            }else{
                console.log("✅ File Uploaded successfully to Premium Silver servers.");
            }
        }
        else if(this.plan === 'Gold'){
            console.log("✅ File Uploaded successfully! Unlimited file limits applied for Gold member.");
        }
    }

    upgradePlan(newPlan){
        this.plan = newPlan ; 
        console.log(`\n🔄 System: ${this.name} changed subscription to [${newPlan}]`);
    }
}

// --- Running the Application ---
const user = new UserAccount('Hasan' , 'Free') ; 
user.uploadFile(4) ; // Works
user.uploadFile(20) ; // Fails

user.upgradePlan('Silver') ; 
user.uploadFile(20) ; // works now!

// CRITICAL FLAWS:
// 1. Violates Open-Closed Principle: Adding a "Diamond" tier requires rewriting the inside of `uploadFile`.
// 2. High Rigidity: If "Silver" limits change from 50MB to 100MB, you have to hunt through messy condition blocks to change hardcoded limits.

