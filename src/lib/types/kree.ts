export interface KREEResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    kree_enrol: KREEEnrollAcc[];
    kree_apply_online: kree_apply_online;
  };
  meta: Record<string, unknown>; // or MetaType if you have a defined structure
}

export interface KREEEnrollAcc {
  id: number;
  heading: string;
  kree_enrol_html: string;
}

export interface kree_apply_online {
  id: number;
  apply_btn: {
    id: number;
    btn_text: string;
    btn_class: string;
    btn_link: string;
  };
}
