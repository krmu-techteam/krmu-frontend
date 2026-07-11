type Props = {
  applyContent: string;
};

const ExaminationApplyOnline = ({ applyContent }: Props) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-4xl font-semibold mb-5">
          Apply Online for Degree and Transcripts
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: applyContent,
          }}
          className="apply_online_content_table"
        />
      </div>
    </section>
  );
};

export default ExaminationApplyOnline;
