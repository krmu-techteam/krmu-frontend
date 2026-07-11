export type Instructor = {
  id: number;
  name: string;
  designation: string;
  subtitle: string;
  image: string;
};

export const instructorsData: Instructor[] = [
  {
    id: 1,
    name: "Prof. (Dr.) Amit Chawla",
    designation: "Dean, SEMCE",
    subtitle: "School of Engineering",
    image: "/images/instructors/amit.png",
  },
  {
    id: 2,
    name: "Prof. Yashika Khandelwal",
    designation: "Associate Professor",
    subtitle: "Management Studies",
    image: "/images/instructors/yashika.png",
  },
  {
    id: 3,
    name: "Prof. Trilok Singh",
    designation: "Assistant Professor",
    subtitle: "Computer Science",
    image: "/images/instructors/trilok.png",
  },
];