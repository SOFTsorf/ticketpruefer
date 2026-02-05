export default async function handler(req, res) {
  const stopId = "de:07111:400"; // Christuskirche
  try {
    const response = await fetch(`https://v5.db.transport.rest/stops/${stopId}/departures?duration=60&results=10`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Fehler beim Abrufen der Daten" });
  }
}
