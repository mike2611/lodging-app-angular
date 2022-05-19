import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Reservation } from './reservation';
import { ReservationsService } from './reservations.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit, OnDestroy {

  reservations$ = this.reservationService.reservations$;
  reservationColumns: string[] = ['name', 'price', 'checkInDate', 'checkOutDate', 'actions'];
  elementsTable: Reservation[] = [];
  dataSource!: MatTableDataSource<Reservation>;
  private reservationsSubscription!: Subscription;

  constructor(private reservationService: ReservationsService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

    this.reservationsSubscription = this.reservations$.subscribe({
      next: (reservations) => {
        this.elementsTable = reservations;
        this.dataSource = new MatTableDataSource<Reservation>(this.elementsTable);
      },
      complete: () => {
        this.dataSource.filterPredicate = (data: Reservation, filter: string) => {
          if (filter.match(/\d/)) {
            return data.room.price.toString().toLowerCase().includes(filter);
          } else {
            return data.room.hotel.name.toLocaleLowerCase().includes(filter);
          }
        }
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngOnDestroy(): void {
    this.reservationsSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
