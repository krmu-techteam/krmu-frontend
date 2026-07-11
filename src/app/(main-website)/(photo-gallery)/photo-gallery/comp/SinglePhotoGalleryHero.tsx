type Props = {
  title: string;
};
const SinglePhotoGalleryHero = ({ title }: Props) => {
  return (
    <>
      <section
        className="pt-[150px] pb-[50px] md:py-[10%]"
        style={{
          background: `linear-gradient(280deg, #aa182c 0%,#00074b 82%)`,
        }}
      >
        <div className="max-w-[1664px] mx-auto w-full text-center">
          <h1 className="text-[#fefefe14] text-5xl lg:text-[160px] font-bold">{title}</h1>
        </div>
      </section>
    </>
  );
};

export default SinglePhotoGalleryHero;
