import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations.component';
import { IsLoggedInGuard } from '../login/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'reservations',
    component: ReservationsComponent,
    canActivate: [IsLoggedInGuard],
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
