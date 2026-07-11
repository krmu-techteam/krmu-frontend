"use client";

import { TabScrollSection } from "@/lib/api/student-welfare";
import Image from "next/image";
import Link from "next/link";
import useStudentWelfareTabs from "./useStudentWelfareTabs";

const TabScroll = () => {
  const { containerRef } = useStudentWelfareTabs();

  return (
    <>
      <section className="py-[50px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="student_welfare-tab-scroll">
            <div className="student_welfare-sidebar">
              <div className="student_welfare-sidebar_menu">
                <ul className="student_welfare-sidebar__list">
                  <li
                    className="student_welfare-sidebar__item"
                    data-target="#tab1"
                  >
                    Clubs and Societies
                  </li>
                  <li
                    className="student_welfare-sidebar__item"
                    data-target="#tab2"
                  >
                    Grievance Handling and Anti Ragging
                  </li>

                  <li
                    className="student_welfare-sidebar__item"
                    data-target="#tab3"
                  >
                    Student Council
                  </li>
                  <li
                    className="student_welfare-sidebar__item active"
                    data-target="#tab4"
                  >
                    Counseling
                  </li>

                  {/* <li
                    className="student_welfare-sidebar__item"
                    data-target="#tab5"
                  >
                    Cultural Club
                  </li>
                  <li
                    className="student_welfare-sidebar__item"
                    data-target="#tab6"
                  >
                    Sports Club
                  </li> */}
                </ul>
              </div>
            </div>
            <div ref={containerRef} className="student_welfare-tab-content">
              <div id="tab1" className="student_welfare-tab-content__container">
                <h2 className="student_welfare-tab-content__title">
                  Clubs and Societies
                </h2>

                <div className="student_welfare-tab-content__image-wrapper">
                  <Image
                    className="student_welfare-tab-content__image w-full"
                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/clubsoci_bdf21197ac.jpg"
                    width={1040}
                    height={300}
                    alt=""
                  />
                </div>

                <div className="student_welfare-tab-content__text-wrapper">
                  <p className="student_welfare-tab-content__text">
                    KRMU offers a vibrant campus life to the students and the
                    faculty. From cultural events to scientific experiments,
                    from robotic developments to artistic strokes, apprentices
                    at KRMU keep their enthusiasm high and deliver impeccable
                    participation in all activities. The University supports
                    more than thirteen clubs/societies which are primarily run
                    by the students. These clubs/societies offer students a
                    platform to showcase their talents and acquire new traits
                    that can be learned while thinking out of the box. Various
                    activities are organized so that students can learn new
                    skills and hone their skills and hobbies.
                  </p>

                  <Link
                    href="https://www.krmangalam.edu.in/clubs-and-societies/"
                    className="student_welfare-blink-effect"
                    style={{ color: "red" }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div id="tab2" className="student_welfare-tab-content__container">
                <h2 className="student_welfare-tab-content__title">
                  Grievance Handling and Anti Ragging
                </h2>

                <div className="student_welfare-tab-content__image-wrapper">
                  <Image
                    className="student_welfare-tab-content__image"
                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/griev_7f117c02ca.webp"
                    width={1040}
                    height={300}
                    alt=""
                  />
                </div>

                <div className="student_welfare-tab-content__text-wrapper mt-5">
                  <p className="student_welfare-tab-content__text">
                    K.R. Mangalam University has created a mechanism for the
                    redressal of grievances of students, faculty, and staff by
                    adhering to the principles of natural justice in its
                    proceedings and disposing of all grievances as expeditiously
                    as possible. The University shall furnish, prominently, on
                    its website and in its admission prospectus, all relevant
                    information in respect of the Grievance Redressal Committee.
                    The ANTI Ragging Committee ensures that there shall be no
                    incidence of ragging on the campus as well as in the
                    University Hostels. The main objective of this committee is
                    to receive complaints (either oral or written) and to take
                    appropriate disciplinary action against the erring students.
                  </p>
                </div>
              </div>
              <div id="tab3" className="student_welfare-tab-content__container">
                <h2 className="student_welfare-tab-content__title">
                  Student Council
                </h2>

                <div className="student_welfare-tab-content__image-wrapper">
                  <Image
                    className="student_welfare-tab-content__image"
                    src="/student-welfare/council.jpeg"
                    alt=""
                    width={1040}
                    height={300}
                  />
                </div>

                <div className="student_welfare-tab-content__text-wrapper mt-5">
                  <p className="student_welfare-tab-content__text">
                    The K.R. Mangalam University Student Council is a
                    representative body that upholds student interests and
                    enriches campus life for all stakeholders. The Council works
                    in close collaboration with the Student Affairs Advisory
                    Body and the University Administration to formulate
                    solutions to issues faced by students, organize meaningful
                    initiatives, and foster leadership, inclusivity, and
                    democratic values on campus.
                  </p>
                </div>
              </div>
              <div
                id="tab4"
                className="student_welfare-tab-content__container active"
              >
                <div className="student_welfare-tab-content__text-wrapper">
                  <h2 className="student_welfare-tab-content__title">
                    Counseling
                  </h2>

                  <p className="student_welfare-tab-content__text">
                    Unbiased guidance from experienced thought leaders is
                    paramount to navigate students efficiently to achieve what
                    they want. Mentors at KRMU indulge with the mentee to
                    identify their aspirations, learning requirements, and
                    interests individually. The system strengthens the bond
                    between teachers and students while helping them teach and
                    learn at their own pace. The training from the mentors helps
                    the students to choose a career path that can suit their
                    skills and interests. Effective mentoring begins with the
                    faculty and depends on the healthy relationship between
                    faculty and students.
                  </p>
                </div>
              </div>
              {/* <div id="tab5" className="student_welfare-tab-content__container">
                <h2 className="student_welfare-tab-content__title">
                  Cultural Club
                </h2>

                <div className="student_welfare-tab-content__image-wrapper student_welfare-col-img-container">
                  <Image
                    className="student_welfare-tab-content__image"
                    src="https://www.krmangalam.edu.in/wp-content/uploads/2024/10/Picture1.webp"
                    alt=""
                    width={515}
                    height={300}
                  />
                  <Image
                    className="student_welfare-tab-content__image"
                    src="https://www.krmangalam.edu.in/wp-content/uploads/2024/10/Picture2.webp"
                    alt=""
                    width={515}
                    height={300}
                  />
                </div>

                <div className="student_welfare-tab-content__text-wrapper">
                  <p className="student_welfare-tab-content__text">
                    The cultural club promotes the celebration of diversity and
                    heritage through a range of events that emphasize cultural
                    awareness and gender sensitivity. With a focus on fostering
                    unity and respect for different backgrounds, the club also
                    organizes patriotic events, inspiring a sense of national
                    pride. Talented students can showcase their skills in
                    various auditions, joining specialized groups like the dance
                    troupe "Labyrinths" or the music ensemble "Avantra." These
                    groups provide platforms for artistic expression, blending
                    traditional and modern performances, while the club as a
                    whole fosters an inclusive environment that values every
                    individual’s contribution to the cultural mosaic. The team
                    members have poured in hours of practice and achieved
                    various positions in different types of competitions held at
                    various government, state-aided, private colleges. The team
                    has participated in solo competitions, instrumental
                    competitions, rap competitions, duet competitions and so on.
                  </p>
                </div>
              </div> */}
              {/* <div id="tab6" className="student_welfare-tab-content__container">
                <h2 className="student_welfare-tab-content__title">
                  Sports Club
                </h2>


                <div className="student_welfare-tab-content__text-wrapper">
                  <strong>Outdoor Sports:</strong>
                  <ul>
                    <li>Volleyball 1 Court (162 Sq m)</li>
                    <li>Basketball 1 Court (420 Sq m)</li>
                    <li>Cricket 1 Ground (6942.57 Sq m)</li>
                    <li>Football 1 Ground (10800 Sq m)</li>
                    <li>Badminton 1 Courts (84 Sq m)</li>
                    <li>Lawn Tennis 2 Court (260.65 Sq m)</li>
                    <li>Kabaddi 1 Ground (130 Sq m)</li>
                    <li>Athletics 1 Grounds (200 mtr 8 lanes)</li>
                    <li>Futsal 84 (Sq m)</li>
                  </ul>

                  <br />

                  <strong>Indoor Sports:</strong>
                  <ul>
                    <li>Table tennis - 6 Tables</li>
                    <li>Chess - 6 Chess Board Sets</li>
                    <li>Carrom - 6 Carrom Board Sets</li>
                    <li>Billiard Table - 3 Tables</li>
                    <li>Foosball – 8 Tables</li>
                  </ul>

                  <br />

                  <strong>
                    Gymnasium and Fitness Centre - 1 (238.83 Sq m)
                  </strong>
                  <br />

                  
                  <div className="student_welfare-sports_club student_welfare-cards">
                  
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/game.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Athletics Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            An Athlete is an all-round sportsperson with skills
                            for cricket, football, tennis and has immense
                            control of his body and senses. Athletics is
                            considered to be mother of all games and is in fact
                            the way of living and not just a sport. Athletics
                            not only builds you physically but it helps in body
                            coordination and gives you mental stiffness.
                            Athletics is an exclusive collection of sporting
                            events that involve competitive running, jumping,
                            throwing, and walking. The most common types of
                            athletics competitions are track and field, road
                            running, cross country running, and race.
                          </p>
                        </div>
                      </div>
                    </div>

                    
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/billiards.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Billiards Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Billiards is a game of precision, focus, and
                            finesse. It involves striking balls on a rectangular
                            table using a cue stick, aiming to pocket them with
                            skill and strategy. A billiards player must master
                            angles, spins, and the right amount of force to
                            excel in this sport. It sharpens the mind and
                            enhances hand-eye coordination, requiring intense
                            concentration and steady hands. Billiards is more
                            than just a game; it’s a test of patience,
                            calculation, and technique. It promotes strategic
                            thinking, spatial awareness, and mental discipline.
                            The club provides an opportunity to develop a keen
                            sense of anticipation and sharpen one's cognitive
                            skills while enjoying a relaxing yet competitive
                            sport.
                          </p>
                        </div>
                      </div>
                    </div>

                    
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/Group-6346047.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Badminton Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Badminton is one of the most enjoyable racket games
                            that can be played by males & females. It is a
                            beautiful game which requires fast reaction and
                            strength. It can be played between two people or
                            between two teams of doubles. Playing badminton is
                            the best to remain physically fit and active.
                          </p>
                        </div>
                      </div>
                    </div>

                   
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/basket-ball.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Basketball Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            The basketball club regroups both athletes’ Male and
                            Female, We have 1 outdoor court and many other
                            opportunities to athletes by competing with many
                            others colleges and participate in State level,
                            National level, Intercollege level. The facilities
                            provided by the K.R.Mangalam University is under the
                            norm of BFI and FIBA regulations and rules.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                  
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/cricket.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Cricket Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Cricket is one of the favourites and well-played
                            game. This club offers proper ground with all
                            international rules and norms. Sharda university
                            organises cricket tournament every year. Our present
                            cricket team is one of the best team we have ever
                            had. Our cricket team expecting more participation
                            next time and we expect favourable results from
                            them.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/chess.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Chess & Carrom Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            The Chess & Carrom Club caters to those who love
                            mental challenges and strategic games. Chess is
                            often called the “Game of Kings,” demanding
                            concentration, foresight, and problem-solving
                            abilities. It sharpens the mind and enhances memory.
                            Meanwhile, Carrom is a popular indoor sport
                            requiring finesse, control, and precision. It tests
                            a player’s aim, focus, and skill in maneuvering
                            discs into pockets. Both games promote patience and
                            a sharp, analytical mind. This club is perfect for
                            those who enjoy tactical thinking and honing their
                            mental faculties.
                          </p>
                        </div>
                      </div>
                    </div>

                  
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/football.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Football Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Football is one of the most entertaining games of
                            the world. It is played by the youths in various
                            countries with full interest. It has two big
                            aspects; one is health and other is financial. It
                            makes a person physically, mentally and financially
                            strong as this game has lots of health benefits with
                            a nice career. Earlier, it was played in the western
                            countries however, later it spread to all over the
                            world. Football is a round shape rubber bladder
                            (made inside with leather) tightly filled with air.
                          </p>
                        </div>
                      </div>
                    </div>

                   
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <img
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/game.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Kho-Kho Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            The Origin of kho-kho is difficult to trace, but
                            many historians believe, that it is a modified form
                            of “Run & Chase”, which in its simple form involves
                            Chasing and touching a person. Like all Indian
                            games, it is simple inexpensive and enjoyable. It
                            does, however, demand physical fitness, strength,
                            speed and stamina, and a certain amount of ability.
                            Dodging, feinting and bursts of controlled speed
                            make this game quite thrilling to catch by the
                            pursuit-to chase, rather than just run is the
                            capstone of kho-kho.
                          </p>
                        </div>
                      </div>
                    </div>

                
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/pickle-ball.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Pickleball Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Pickleball is an engaging paddle sport that combines
                            elements of tennis, badminton, and table tennis. It
                            is a sport that requires hand-eye coordination,
                            quick reflexes, and strategic placement of shots. A
                            pickleball player needs to be adaptable and aware of
                            their surroundings, making tactical decisions on
                            where to place the ball. The game encourages social
                            interaction and sportsmanship. It’s a great way to
                            improve fitness, agility, and mental sharpness while
                            enjoying an inclusive and fun environment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/table-tennis.svg"
                              alt=""
                              width={50}
                              height={60}
                            />
                            <h4>Table Tennis Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Table Tennis is often referred to as a game of
                            precision and speed. It demands quick reflexes, fine
                            motor control, and strategic thinking. A table
                            tennis player must master timing, spin control, and
                            shot placement to outplay their opponent. The game
                            improves hand-eye coordination, sharpens focus, and
                            enhances mental agility. It requires a combination
                            of physical finesse and mental toughness. Table
                            Tennis is not just an indoor sport but a test of
                            quick decision-making and execution under pressure.
                          </p>
                        </div>
                      </div>
                    </div>

                    
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/badminton.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Tennis Club</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Tennis is a sport of finesse, power, and endurance.
                            It demands a well-rounded skill set, combining
                            agility, balance, coordination, and mental
                            resilience. A tennis player must have a keen sense
                            of timing, control over strokes, and the ability to
                            strategize against an opponent’s strengths and
                            weaknesses. Tennis teaches discipline, patience, and
                            the importance of maintaining physical and mental
                            balance. It is a sport that builds cardiovascular
                            fitness, enhances reflexes, and fosters an
                            analytical mind.
                          </p>
                        </div>
                      </div>
                    </div>

                    
                    <div className="student_welfare-card">
                      <div className="student_welfare-card-inner">
                        <div className="student_welfare-card-front">
                          <div className="student_welfare-sports-icon">
                            <Image
                              src="https://www.krmangalam.edu.in/wp-content/uploads/2024/11/volleyball.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h4>Volleyball</h4>
                          </div>
                        </div>
                        <div className="student_welfare-card-back">
                          <p>
                            Volleyball is played by two teams in a rectangular
                            court, divided into two equal halves across the
                            length by a net tightly stretched between two poles
                            fixed at either side of the court. It is one of most
                            popular games and is today widely played across the
                            world. Various tournaments are conducted in many
                            countries. People like to watch and play this game.
                            The game has spread to other surrounding countries
                            and Europe. The game is simple, quick, entertaining
                            and does not require much equipment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabScroll;
