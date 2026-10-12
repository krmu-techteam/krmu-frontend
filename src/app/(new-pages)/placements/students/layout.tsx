import { newsreader, poppins } from "@/lib/fonts";
import "./students.css";

export default function Studentslayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="w-full">{children}</div>;
}
