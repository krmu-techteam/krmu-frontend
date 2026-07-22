import Image from "next/image";

type Props = {
  imgUrl: string;
  AuthName: string;
  AuthDesg: string;
  AuthAbout: string;
};

const AuthorHero = ({ imgUrl, AuthName, AuthDesg, AuthAbout }: Props) => {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/10"
      style={{
        background:
          "linear-gradient(310.55deg, #132737 72.13%, rgba(225, 31, 35, 0.15) 96.47%)",
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url(/blogs/auth-bg.jpg)] bg-cover bg-center opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/20 ring-4 ring-white/10 shadow-xl">
            {imgUrl ? (
              <Image
                src={imgUrl}
                width={112}
                height={112}
                alt={AuthName || "Author"}
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/40 text-3xl font-bold">
                {AuthName?.charAt(0) || "A"}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-poppins tracking-tight">
              {AuthName || "Author"}
            </h1>
            <Image
              src="/blogs/verified.svg"
              width={22}
              height={22}
              alt="Verified"
              className="object-cover flex-shrink-0"
            />
          </div>

          {AuthDesg && (
            <p className="text-[#E7C268] text-sm font-medium font-poppins mb-3 tracking-wide">
              {AuthDesg}
            </p>
          )}

          {AuthAbout && (
            <p className="text-white/70 text-sm leading-relaxed font-poppins max-w-xl">
              {AuthAbout}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorHero;
