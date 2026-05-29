// SOLUTION: Intercepting and controlling resource access via a Caching Proxy

// 1. The Real Subject (The heavy, expensive object)

class ExpensiveCryptoAPI {
    fetchPrice(coin){
        console.log(`📡 [NETWORK CALL] Fetching live data from external servers for: [${coin}]...`);
        return `Price of ${coin}: $65,000`;
    }
}

// 2. The Proxy Object (Intercepts requests and manages a cache)
class CryptoAPIProxy{
    constructor(){
        this.realAPI = new ExpensiveCryptoAPI(); // Lazy-loading the heavy API instance
        this.cache = {} ; // Cache dictionary storage
    }

    // Mimic the exact interface of the real object
    fetchPrice(){
        // Step A: Check if we already have this data stored locally
        if(this.cache[coin]){
            console.log(`📦 [CACHE HIT] Returning saved memory data for: [${coin}]`);
            return this.cache[coin];
        }

        // Step B: If not in cache, forward request to the real API
        const freshPrice = this.realAPI.fetchPrice(coin) ; 

        // Step C: Save it to cache to protect future resource loops
        this.cache[coin] = freshPrice ; 
        return freshPrice ;
    }
}