import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, InfiniteScrollCustomEvent, InputCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public formNop: FormGroup;

  constructor(
    public builder: FormBuilder,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public api: ApiService,
    private loadingCtrl: LoadingController,
    public nav: NavController
  ) {
    this.formNop = this.builder.group({
      kd_prop: ['', Validators.required],
      kd_dati: ['', Validators.required],
      kd_kec: ['', Validators.required],
      kd_kel: ['', Validators.required],
      kd_blok: ['', Validators.required],
      no_urut: ['', Validators.required],
      kd_jns_op: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  cariNop() {
    var formData: any = new FormData();
    let kd_prop = this.formNop.get('kd_prop')?.value;
    let kd_dati = this.formNop.get('kd_dati')?.value;
    let kd_kec = this.formNop.get('kd_kec')?.value;
    let kd_kel = this.formNop.get('kd_kel')?.value;
    let kd_blok = this.formNop.get('kd_blok')?.value;
    let no_urut = this.formNop.get('no_urut')?.value;
    let kd_jns_op = this.formNop.get('kd_jns_op')?.value;

    formData.append('nop', (kd_prop + kd_dati + kd_kec + kd_kel + kd_blok + no_urut + kd_jns_op));

    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();

      this.api.getPbb(formData).subscribe({
        next: (v) => {
          if (v.code == 200) {
            this.nav.navigateForward(['/hasil-pbb'], { state: v.data });
          } else {
            this.presentAlert(v.code + ": " + v.message)
          }
        },
        error: (e) => {
          this.presentAlert(e.code + ": " + e.message)
        },
        complete: () => response.dismiss()
      });
    });
  }

  async presentAlert(messages: string) {
    const alert = await this.alertController.create({
      message: messages,
      buttons: [
        {
          text: 'OK',
          role: 'confirm'
        }
      ]
    });
    await alert.present();
  }
}
