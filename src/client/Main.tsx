import { useQuery, getBusTrips } from "wasp/client/operations";
import { type BusTrip } from "wasp/entities";
import "./Main.css";

export const Main = () => {
  const { data: busTrips, isLoading, error, refetch } = useQuery(getBusTrips);

  if (isLoading) return <div className="loading">Loading bus data...</div>;
  if (error) return <div className="error">Error: {error instanceof Error ? error.message : 'An unknown error occurred'}</div>;

  return (
    <div className="container">
      <header className="main-header">
        <h1>Buzzing - Public Transport Monitoring 🐝</h1>
        <div className="header-meta">
          <p className="last-updated">Last Updated: {new Date().toLocaleTimeString()}</p>
          <button className="refresh-button" onClick={() => refetch()}>
            🔄 Refresh
          </button>
        </div>
      </header>
      <main>
        <div className="grid">
          {busTrips?.map((trip: BusTrip) => (
            <div key={trip.id} className="card">
              <div className="card-header">
                <h3>{trip.lineName}</h3>
                <span className={`status ${trip.status === 'On Time' ? 'on-time' : 'delayed'}`}>
                  {trip.status}
                </span>
              </div>
              <p className="time">
                <strong>Scheduled:</strong> {new Date(trip.scheduledTime).toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
