export interface pbb_model {
    code: number;
    message: string;
    data: PbbDatum[];
}

export interface PbbDatum {
    KD_PROPINSI: string;
    KD_DATI2: string;
    KD_KECAMATAN: string;
    KD_KELURAHAN: string;
    KD_BLOK: string;
    NO_URUT: string;
    KD_JNS_OP: string;
    THN_PAJAK_SPPT: string;
    JML_SPPT_YG_DIBAYAR: string;
    PBB_YG_HARUS_DIBAYAR_SPPT: string;
    POKOK_TERHUTANG: string;
    TGL_JATUH_TEMPO: string;
    PEMBAYARAN_POKOK: string;
    DENDA_TERHUTANG: string;
    STATUS: string;
    DENDA: string;
    TOTAL_YG_HARUS_DIBAYAR: string;
}