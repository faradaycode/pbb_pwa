import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BerkasDatum } from '../models/berkas-model';

@Component({
  selector: 'app-berkas-modal',
  templateUrl: './berkas-modal.component.html',
  styleUrls: ['./berkas-modal.component.scss'],
})
export class BerkasModalComponent implements OnInit {
  @Input("datum") datum: any;

  public nop?: string
  public tgl_serah?: string
  public tgl_selesai?: string
  public tgl_proses?: string
  public jns_layanan?: string
  public nopel?: string
  public ket?: string

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const antum: BerkasDatum = this.datum
    this.nop = antum.NOP
    this.ket = antum.KET_ARSIP
    this.tgl_proses = antum.TGL_ARSIP
    this.tgl_selesai = antum.TARGET_TGL_SELESAI
    this.tgl_serah = antum.TGL_LOKET
    this.jns_layanan = antum.JNS_PELAYANAN
    this.nopel = antum.NO_PELAYANAN
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
