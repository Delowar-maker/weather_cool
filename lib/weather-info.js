export const getWeatherData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        return data?.weather[0];
    } catch (e) {
        console.error(e.message);
    }
};