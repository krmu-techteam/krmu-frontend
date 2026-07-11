
import { ADecadeRightCol, HomeStatType } from "../types";

export const getAboutStats = (
  bottomContent: ADecadeRightCol
): HomeStatType[] => [
  {
    number: bottomContent.counter1text,
    label: bottomContent.counter1content,
  },
  {
    number: bottomContent.counter2text,
    label: bottomContent.counter2content,
  },
  {
    number: bottomContent.counter3text,
    label: bottomContent.counter3content,
  },
  {
    number: bottomContent.counter4text,
    label: bottomContent.counter4content,
  },
];