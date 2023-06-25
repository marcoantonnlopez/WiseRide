export default async function handler(req, res) {
    const apiKey= 'GO8zzjc2B435VvG/j21B7A==KShqZS7sRa1K7HxT';
    const { city } = req.query;
    const apiUrl = `https://api.api-ninjas.com/v1/city?name=${city}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        const cityData = await response.json();

        res.status(200).json(cityData);

    } catch (error) {

        console.error('Error fetching city data:', error);
        res.status(500).json({ error: 'Failed to fetch city data' });

    }
}