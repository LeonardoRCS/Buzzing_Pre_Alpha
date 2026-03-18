import { type BusTrip } from "wasp/entities";
import { type GetBusTrips } from "wasp/server/operations";

export const getBusTrips: GetBusTrips<void, BusTrip[]> = async (args, context) => {
  const trips = await context.entities.BusTrip.findMany();

  if (trips.length === 0) {
    const seedData = [
      {
        lineName: "Linha 1",
        scheduledTime: new Date(),
        status: "On Time",
      },
      {
        lineName: "Linha 2",
        scheduledTime: new Date(Date.now() + 15 * 60 * 1000), // 15 mins later
        status: "Delayed",
      },
    ];

    for (const trip of seedData) {
      await context.entities.BusTrip.create({
        data: trip,
      });
    }

    return await context.entities.BusTrip.findMany() as BusTrip[];
  }

  return trips;
};
