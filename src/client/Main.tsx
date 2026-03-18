import { getBusTrips } from '@wasp/queries'

const Main = () => {
  const { data: busTrips, isLoading } = getBusTrips()

  if (isLoading) return <div>Loading...</div>

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Buzzing - Public Transport Monitoring</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {busTrips.map((trip) => (
          <li key={trip.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <strong>{trip.lineName}</strong> - Scheduled: {new Date(trip.scheduledTime).toLocaleString()} - Status: {trip.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Main