import Link from "next/link";

//
export const ONLINE_PAYMENT_OPTIONS = [
  {
    title: "For new students ",
    subtitle: "(Semester 1)",
    link: "https://payment.collexo.com/user/login/?dest=/pay-fee/kr-mangalam-university-sohna-haryana-43490/",
    btnText: "Pay Through Collexo",
    gradient: "linear-gradient(45deg,#051630,#014d8b)",
  },
  {
    title: "For existing students ",
    subtitle: "(Semester 2 onwards)",
    link: "https://krmu.icloudems.com/",
    btnText: "Pay Through iCloud",
    gradient: "linear-gradient(45deg,#051630,#014d8b)",
  },
];

export const OFFLINE_PAYMENT_OPTIONS = [
  "Debit/Credit Card swipe at Cash counter, Cash at Cash counters located at University Campus reception area, Ground Floor, A Block.",
  "Demand Draft/Cheque – Please draw the DD/Cheque in favour of 'K R Mangalam University'. In case of DD, it should be payable at Gurugram. Please mention your name, application no, programme name and contact number on the backside.",
];

export const PAYMENT_FAQS = [
  {
    value: "item-1",
    question: "What should I do if my payment fails?",
    answer: (
      <p>
        If the amount has been deducted from your account, it will be refunded
        within 2–3 business days. If not received please mail us at{" "}
        <Link href="mailto:accounts@krmangalam.edu.in">
          accounts@krmangalam.edu.in
        </Link>
      </p>
    ),
  },
  {
    value: "item-2",
    question: "How can I check my payment status?",
    answer: (
      <p>
        For 1st Semester, students may login to Collexo and check the status in
        their account. For 2nd Semester onwards visit{" "}
        <Link
          href="https://krmu.icloudems.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://krmu.icloudems.com/
        </Link>
      </p>
    ),
  },
  {
    value: "item-3",
    question: "Is there a refund policy?",
    answer: <p>Yes, we have a refund policy as per UGC guidelines.</p>,
  },
];
