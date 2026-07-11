import Image from "next/image";

const KEICWelcomeMessage = () => {
  return (
    <section className="py-[50px] px-4 bg-[url(/keic/keic-gradient-1.webp)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 text-white">
          <h2 className="text-3xl md:text-5xl font-semibold mb-5">
            Welcome Message from the Director
          </h2>
          <div className="keic-dir_msg">
            <p className="mb-5">
              {" "}
              Dear Student Founders and the K.R. Mangalam University Community,
            </p>
            <p className="mb-5">
              Welcome to the K.R. Mangalam Entrepreneurship & Incubation Centre
              (KEIC).
            </p>
            <p className="mb-5">
              KEIC exists for one simple reason: to help you build. Whether your
              idea lives in a notebook, keeps you awake at night, or is already
              taking shape as a startup, this is where it belongs.
            </p>
            <p>
              Startups are not built by waiting for perfect ideas; they are
              built by starting, learning fast, and staying resilient.
            </p>
            <p>
              At KEIC, we don’t expect clarity on Day One. What we do expect is
              curiosity, ownership, and the courage to try. Our role is to
              create a safe yet ambitious environment where you can:
            </p>
            <ol>
              <li>1. Build early, even if it’s messy</li>
              <li>2. Step outside campus and talk to real users</li>
              <li>3. Launch, learn, iterate, and repeat</li>
              <li>
                4. Convert ideas into products, products into revenue, and
                revenue into scalable businesses
              </li>
            </ol>
            <p>
              KEIC is not about buzzwords or endless presentations. It is about
              real startups, real learning, and real outcomes while you are
              still a student.
            </p>
            <p>
              Through KEIC, you will gain access to experienced mentors,
              founders, investors, seed support, tools, and networks that
              accelerate your journey.
            </p>
            <p>
              You will be encouraged to experiment, allowed to fail safely, and
              supported to bounce back stronger. <br />
              Think of KEIC as your startup playground and support system that
              values effort, respects ownership, and rewards action.
            </p>
            <p>
              If you are ready to build, break, learn, and build again, KEIC is
              here for you.
            </p>
            <p>Let’s build something meaningful together.</p>
          </div>
        </div>
        <div className="lg:w-1/3">
          <Image
            src="/keic/dir.jpg"
            width={313}
            height={357}
            alt=""
          />
          <div className="my-5 text-white">
            <p>
              <strong>Rahul Bachhuwan</strong>
            </p>
            <p>
              <strong>Dy. Director, KEIC</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KEICWelcomeMessage;
