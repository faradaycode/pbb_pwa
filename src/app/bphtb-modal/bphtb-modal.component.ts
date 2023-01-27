import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatumBphtb } from '../models/bphtb_model';


@Component({
  selector: 'app-bphtb-modal',
  templateUrl: './bphtb-modal.component.html',
  styleUrls: ['./bphtb-modal.component.scss'],
})
export class BphtbModalComponent implements OnInit {

  @Input("datum") datum: any;

  public jenis_pelayanan?: string;
  public no_booking?: string;
  public tgl_booking?: string;
  public nop?: string;
  public nama_wp?: string;
  public no_pelayanan?: string;
  public thn_pelayanan?: string;
  public tgl_retrieve?: string;
  public tgl_terima_berkas?: string;
  public tgl_validasi?: string;
  public tgl_diserahkan?: string;
  public tgl_approve_bpn?: string;
  public tgl_selesai_bpn?: string;
  public keterangan?: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const antum: DatumBphtb = this.datum
    this.jenis_pelayanan = antum.jenis_pelayanan
    this.no_booking = antum.no_booking
    this.tgl_booking = antum.tgl_booking
    this.nop = antum.nop
    this.nama_wp = antum.nama_wp
    this.no_pelayanan = antum.no_pelayanan
    this.thn_pelayanan = antum.thn_pelayanan
    this.tgl_retrieve = antum.tgl_retrieve
    this.tgl_terima_berkas = antum.tgl_terima_berkas
    this.tgl_validasi = antum.tgl_validasi
    this.tgl_diserahkan = antum.tgl_diserahkan
    this.tgl_approve_bpn = antum.tgl_approve_bpn
    this.tgl_selesai_bpn = antum.tgl_selesai_bpn
    this.keterangan = antum.keterangan
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
