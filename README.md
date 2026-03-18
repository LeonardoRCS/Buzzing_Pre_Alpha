# Buzzing - Public Transport Monitoring (Pre-Alpha)

A minimal MVP for monitoring public transport bus trips using Wasp Framework and React.

## Features

- Entity: BusTrip with lineName, scheduledTime, status
- Query: getBusTrips to fetch all trips
- UI: Simple list display of bus trips

## Setup

1. Install Wasp CLI: `npm install -g wasp`
2. Navigate to project: `cd Buzzing_Pre_Alpha`
3. Initialize: `wasp start`
4. The app will run on localhost with auto-generated DB and UI.

## Notes

- Uses PostgreSQL for DB (configured in main.wasp)
- Client uses React (Wasp default). For Preact, additional configuration needed.
- Minimal design for live demo validation.