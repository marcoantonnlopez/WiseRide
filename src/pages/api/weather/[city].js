export default async function handler(req, res) {
    const apiKey = '5fd6fc88edf34b06ac822426232406';
    const { city } = req.query;
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=14`;

    try {
        const response = await fetch(apiUrl);
        const forecastData = await response.json();

        const weekForecast = forecastData.forecast.forecastday.map(item => {
        const date = item.date;
        const maxTemp = item.day.maxtemp_c; 
        const minTemp = item.day.mintemp_c;
        const willItRain = item.day.daily_will_it_rain;
        const willItSnow = item.day.daily_will_it_snow;
        const condition = item.day.condition.text;
        return { date, maxTemp, minTemp, willItRain, willItSnow, condition };
        });

        res.status(200).json(weekForecast);

    } catch (error) {

        console.error('Error fetching forecast:', error);
        res.status(500).json({ error: 'Failed to fetch forecast' });

    }
}