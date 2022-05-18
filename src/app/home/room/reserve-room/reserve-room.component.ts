import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, Observable } from 'rxjs';
import { RoomService } from '../room.service';
import { Room } from '../../../room';

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.css']
})
export class ReserveRoomComponent {
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  room$: Observable<Room> = this.id$.pipe(
    switchMap((id) => this.roomService.getRoom(id))
  )


  reservationForm = new FormGroup({
    check_in_date: new FormControl('', Validators.required),
    check_out_date: new FormControl('', Validators.required),
  });


  constructor(private roomService: RoomService, private route: ActivatedRoute) { }

  reserve(id: number) {
    const reservationDates = this.reservationForm.value;
    this.roomService.reserveRoom(id, reservationDates).subscribe(
      () => console.log('Reservation successful'),
    );
  }

}
