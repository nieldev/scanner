import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannerPage } from './scanner';
import { BarcodeScanner} from '@ionic-native/barcode-scanner'

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
  ],
})
export class ScannerPageModule {

  constructor(private barcodeScanner : BarcodeScanner){


    this.barcodeScanner.scan().then(data=>{

      console.log('Barcode Data : ' + data);
  
    }).catch(err=>{
      console.log('Error : ' + err);
    })

  }

 

}
