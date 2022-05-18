import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, Observable } from 'rxjs';
import { RoomService } from './room.service';
import { Room } from '../../room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  room$: Observable<Room> = this.id$.pipe(
    switchMap((id) => this.roomService.getRoom(id))
  )

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) { }

  navigateToReserveRoom(): void {
    this.router.navigate(['reserve'], { relativeTo: this.route });
  }
}
