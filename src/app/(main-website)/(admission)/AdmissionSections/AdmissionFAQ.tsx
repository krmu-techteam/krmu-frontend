
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, BookOpen, CreditCard, UserCheck } from "lucide-react";

export default function AdmissionFAQ() {
  const faqCategories = [
    {
      id: "general",
      title: "General",
      icon: HelpCircle,
      faqs: [
        {
          question: "Does K.R. Mangalam University offers Diploma courses?",
          answer: "Yes, K.R. Mangalam University offers diploma courses to cater to diverse interests and career aspirations. We currently have a Diploma in Pharmacy programme structured to provide practical and theoretical knowledge."
        },
        {
          question: "What are the admission office hours at KRMU?",
          answer: "The office is open from 9:00 AM to 4:00 PM"
        },
        {
          question: "Where can I apply for UG, PG, Ph.D. or Diploma programmes?",
          answer: "You can visit https://admissions.krmangalam.edu.in/ to apply for any of our programmes."
        }
      ]
    },
    {
      id: "programmes",
      title: "Programmes",
      icon: BookOpen,
      faqs: [
        {
          question: "How many programmes does K.R. Mangalam University offer?",
          answer: "K.R. Mangalam University offers a wide range of over 100+ programmes in multiple field including computing, engineering, liberal arts, law, and much more."
        },
        {
          question: "Is lateral admission available at K.R. Mangalam University?",
          answer: "Yes, KRMU offers lateral admissions for many programmes. You can learn more about lateral admissions on our programme page."
        },
        {
          question: "Does KRMU offer Ph.D. Programmes?",
          answer: "KRMU offers Ph.D. programmes in multiple fields including liberal arts, education, legal studies, journalism, and more."
        }
      ]
    },
    {
      id: "fees",
      title: "Fees",
      icon: CreditCard,
      faqs: [
        {
          question: "What is the fees of Ph.D. programmes at KRMU?",
          answer: "The fees for all Ph.D. programmes is ₹1,20,000 at K.R. Mangalam University."
        },
        {
          question: "Does K.R. Mangalam University offer any scholarships?",
          answer: "Yes, we offer up to 100% scholarships based on merit, quota, and academic performance to deserving students."
        },
        {
          question: "Can I take an education loan to finance my education fees?",
          answer: "Yes! We have partnered with several banks and financial institutions like IDFC Bank, Axis Bank, ICICI Bank, Propelled, and GrayQuest to offer great loan options to our students."
        }
      ]
    },
    {
      id: "admissions",
      title: "Admissions",
      icon: UserCheck,
      faqs: [
        {
          question: "What is the application fee for admission at K.R. Mangalam University?",
          answer: "An application fee of ₹1,000 must be submitted during the application process."
        },
        {
          question: "What is the admission procedure at KRMU?",
          answer: "To apply at KRMU, you must visit our admission page, fill the registration form, appear for KREE (entrance test), and finally attend the faculty led interview to secure your admission."
        },
        {
          question: "Is there any registration fees before admissions?",
          answer: "Yes, you must pay a registration fee of ₹25,000 upon receiving the admission offer. This fee is later adjusted in the semester fee."
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
            <span className="text-sm uppercase tracking-wide">Support Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
            Frequently Asked <span className="text-university-blue font-bold">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about admissions, programmes, fees, and more
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white shadow-lg rounded-2xl p-2 h-full">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-university-blue data-[state=active]:to-university-red data-[state=active]:text-white transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-university-blue to-university-red p-6">
                  <div className="flex items-center gap-3 text-white">
                    <category.icon className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index} 
                        value={`item-${index}`} 
                        className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl shadow-sm border-0 overflow-hidden group hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-xl group-hover:bg-white/50 transition-colors">
                          <div className="flex items-start gap-3 text-left">
                            <div className="w-2 h-2 bg-university-red rounded-full flex-shrink-0 mt-3"></div>
                            <span className="text-gray-800 leading-relaxed">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="ml-5 pl-3 border-l-2 border-university-blue/20">
                            <p className="text-gray-600 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Contact Support CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-university-blue to-university-red rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our admission counselors are here to help you with personalized guidance and support throughout your application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-university-blue px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                Contact Admission Office
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-university-blue transition-colors">
                Schedule Campus Visit
              </button>
            </div>
            <div className="mt-6 text-blue-100">
              <p className="text-sm">Office Hours: 9:00 AM - 4:00 PM | admissions@krmangalam.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}