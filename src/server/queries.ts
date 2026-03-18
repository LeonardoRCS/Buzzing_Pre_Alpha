import { BusTrip } from '@wasp/entities'

export const getBusTrips = async (args, context) => {
  return context.entities.BusTrip.findMany()
}