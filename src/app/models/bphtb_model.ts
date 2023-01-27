export interface DatumBphtb {
    jenis_pelayanan: string;
    no_booking: string;
    tgl_booking: string;
    nop: string;
    nama_wp: string;
    no_pelayanan: string;
    thn_pelayanan: string;
    tgl_retrieve: string;
    tgl_terima_berkas: string;
    tgl_validasi: string;
    tgl_diserahkan: string;
    tgl_approve_bpn: string;
    tgl_selesai_bpn: string;
    keterangan: string;
}

export interface bphtb_model {
    code: number;
    message: string;
    data: DatumBphtb;
}

