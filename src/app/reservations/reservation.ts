import { Room } from '../room';

export interface Reservation {
  id: number;
  room: Room;
  check_in_date: Date;
  check_out_date: Date;
}
