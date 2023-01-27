export interface berkas_model {
    code: number;
    message: string;
    data: BerkasDatum;
}

export interface BerkasDatum {
    NO_PELAYANAN: string;
    NOP: string;
    JNS_PELAYANAN: string;
    TGL_LOKET: string;
    TARGET_TGL_SELESAI: string;
    TGL_SERAH: string;
    TGL_ARSIP: string;
    KET_ARSIP: string;
}