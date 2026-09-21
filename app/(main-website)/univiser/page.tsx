import { Metadata } from "next";
import UniviserIframe from "./UniviserIframe";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Connect with Our Student Ambassadors | KRMU",

    description:
      "Get real student insights on academics, placements, events, and hostel life to make informed decisions about your future career.",

    alternates: {
      canonical: "https://www.krmangalam.edu.in/univiser",
    },
  };
}
export default function Page() {
  return (
    <div>
      <UniviserIframe />
    </div>
  );
}
