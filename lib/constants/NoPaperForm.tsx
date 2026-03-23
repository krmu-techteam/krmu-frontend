"use client";

type NoPaperFormProps = {
  formId?: string; // this is the data-w value
  height?: string;
};
 
const NoPaperForm = ({ formId, height = "475px" }: NoPaperFormProps) => {
  return (
    <div
      className="npf_wgts"
      data-height={height}
      data-w={formId}
    ></div>
  );
};

export default NoPaperForm;
