import {
  $host
} from "./index";

export const fetchTests = async ( model: { date: Date, name: string, count: number, distance: number }, page = 1, limit = 5 ) => {
  const {
    data
  } = await $host.get( 'api/room', {
    params: {
      date: model.date,
      name: model.name,
      count: model.count,
      distance: model.distance,
      page: page,
      limit: limit
    }
  } )
  return data
}