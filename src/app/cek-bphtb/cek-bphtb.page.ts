import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { BphtbModalComponent } from '../bphtb-modal/bphtb-modal.component';

@Component({
  selector: 'app-cek-bphtb',
  templateUrl: './cek-bphtb.page.html',
  styleUrls: ['./cek-bphtb.page.scss'],
})
export class CekBphtbPage implements OnInit {
  public formNop: FormGroup;

  constructor(
    public builder: FormBuilder,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public api: ApiService,
    private modalCtrl: ModalController,
    public nav: NavController
  ) {
    this.formNop = this.builder.group({
      tahun: ['', Validators.required],
      nopel: ['', Validators.required],
    });
  }
  ngOnInit(): void {

  }

  cariBphtb() {
    var formData: any = new FormData();

    let tahun = this.formNop.get('tahun')?.value;
    let nopel = this.formNop.get('nopel')?.value;

    formData.append('noply', (tahun + nopel));

    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();

      this.api.getBphtb(formData).subscribe({
        next: (v) => {
          if (v.code == 200) {
            // this.nav.navigateForward(['/hasil-pbb'], { state: v.data });
            this.openModal(v.data); 
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

  async openModal(props: any) {
    const modo =  await this.modalCtrl.create({
      component: BphtbModalComponent,
      componentProps: {datum: props}
    });

    modo.present();
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
