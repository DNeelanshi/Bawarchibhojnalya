import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcessingformPage } from './processingform';

@NgModule({
  declarations: [
    ProcessingformPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcessingformPage),
  ],
})
export class ProcessingformPageModule {}
