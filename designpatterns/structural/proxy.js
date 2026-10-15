// The actual service doing heavy work
class WeatherAPI {
  async fetchWeather(city) {
    console.log(`📡 Fetching live data for ${city}...`);
    // Simulating API latency
    return new Promise(resolve => setTimeout(() => resolve(`22°C in ${city}`), 500));
  }
}

// The Proxy layer controlling access and caching results
class CachedWeatherProxy {
  constructor(apiService) {
    this.apiService = apiService;
    this.cache = new Map();
  }

  async fetchWeather(city) {
    if (this.cache.has(city)) {
      console.log(`📦 Returning cached data for ${city}`);
      return this.cache.get(city);
    }

    const data = await this.apiService.fetchWeather(city);
    this.cache.set(city, data);
    return data;
  }
}

// Usage
(async () => {
  const realApi = new WeatherAPI();
  const proxy = new CachedWeatherProxy(realApi);

  await proxy.fetchWeather("Warsaw"); // Hits the network API
  await proxy.fetchWeather("Warsaw"); // Served instantly from the cache proxy
})();
