import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner'
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner : BarcodeScanner) {
  }

  ionViewDidLoad() {  

      this.barcodeScanner.scan().then(data=>{
  
       
        console.log('Barcode Data : ' + data);
        this.navCtrl.push('ScannerResultPage', {
          item: data}
    
      )}).catch(err=>{
        
        console.log('Error : ' + err);
        this.navCtrl.push('ScannerResultPage', {
          item: err}
           )})
    console.log('ionViewDidLoad ScannerPage');
  

}
}
