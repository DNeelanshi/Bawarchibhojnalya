import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StafflistPage } from './stafflist';

@NgModule({
  declarations: [
    StafflistPage,
  ],
  imports: [
    IonicPageModule.forChild(StafflistPage),
  ],
})
export class StafflistPageModule {}
