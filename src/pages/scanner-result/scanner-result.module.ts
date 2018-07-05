import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannerResultPage } from './scanner-result';

@NgModule({
  declarations: [
    ScannerResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerResultPage),
  ],
})
export class ScannerResultPageModule {}
