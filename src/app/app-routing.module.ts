import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsLoggedInGuard } from './login/is-logged-in.guard';
import { RoomComponent } from './home/room/room.component';
import { ReserveRoomComponent } from './home/room/reserve-room/reserve-room.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'home/:id',
    component: RoomComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'home/:id/reserve',
    component: ReserveRoomComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
