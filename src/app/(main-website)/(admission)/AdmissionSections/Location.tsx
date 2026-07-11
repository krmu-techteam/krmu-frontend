import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Bus,
  Train,
  Building2,
  Trees,
  Activity,
} from "lucide-react";
import InteractiveMaps from "./InteractiveMaps";

type LocationProp = {
  badge: string;
  highlight: string;
  beforehighlightext: string;
  desc: string;
};

export default function Location({
  badge,
  highlight,
  beforehighlightext,
  desc,
}: LocationProp) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md mb-6">
            <span className="text-university-blue text-sm uppercase tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
            {beforehighlightext}{" "}
            <span className="text-university-red">{highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start break-all">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-3.5 xl:pt-[32px] xl:pr-[32px] xl:pb-[50px] xl:pl-[32px]">
                <h3 className="text-2xl mb-6 text-gray-800">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-gray-800">Campus Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        K.R. Mangalam University
                        <br />
                        Sohna Road, Gurugram
                        <br />
                        Haryana - 122103, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-gray-800">Phone Numbers</h4>
                      <p className="text-gray-600">
                        Main: 01148884888
                        <br />
                        Mobile: 8800697010 – 15
                        <br />
                        Support: 8192888444
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-gray-800">Email Addresses</h4>
                      <p className="text-gray-600">
                        admissions@krmangalam.edu.in
                        <br />
                        info@krmangalam.edu.in
                        <br />
                        placement@krmangalam.edu.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-gray-800">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-3.5 xl:pt-[32px] xl:pr-[32px] xl:pb-[50px] xl:pl-[32px]">
                <h3 className="text-2xl mb-6 text-gray-800">How to Reach</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg mt-[0px] mr-[0px] mb-[50px] ml-[0px]">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-800">By Car</h4>
                      <p className="text-sm text-gray-600">
                        25 mins from Delhi via NH-48, Free parking available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg mt-[0px] mr-[0px] mb-[50px] ml-[0px]">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <Train className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-800">By Metro</h4>
                      <p className="text-sm text-gray-600">
                        Huda City Centre Metro + 20 mins bus ride
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg mx-[0px] my-[40px]">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
                      <Bus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-800">By Bus</h4>
                      <p className="text-sm text-gray-600">
                        Regular bus service from ISBT Gurugram
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Google Maps & Campus View */}
          <div className="space-y-8">
            {/* Interactive Google Maps */}
            <InteractiveMaps />

            {/* Campus Highlights */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-4 lg:p-8">
                <h3 className="text-2xl mb-6 text-gray-800">
                  Campus Highlights
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm text-gray-800">Modern Buildings</h4>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
                      <Trees className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm text-gray-800">Green Campus</h4>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm text-gray-800">Free Parking</h4>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm text-gray-800">Sports Complex</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Virtual Tour */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-university-blue to-university-red text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl mb-4">Virtual Campus Tour</h3>
                <p className="mb-6 text-blue-100">
                  {`Can't visit in person? Take our interactive virtual tour and
                  explore our beautiful campus from anywhere.`}
                </p>
                <button className="bg-white text-university-blue hover:bg-gray-100 px-8 py-3 rounded-full transition-colors duration-300">
                  Start Virtual Tour
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-800 mb-2 font-bold">
              Why Our Location Matters
            </h3>
            <p className="text-gray-600">
              Strategic advantages of our Gurugram campus
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-university-blue mb-2 font-bold">
                40 min
              </div>
              <p className="text-gray-600 text-sm">From Delhi Airport</p>
            </div>
            <div>
              <div className="text-3xl text-university-red mb-2 font-bold">
                500+
              </div>
              <p className="text-gray-600 text-sm">IT Companies Nearby</p>
            </div>
            <div>
              <div className="text-3xl text-university-blue mb-2 font-bold">
                36 Min
              </div>
              <p className="text-gray-600 text-sm">From Metro </p>
            </div>
            <div>
              <div className="text-3xl text-university-red mb-2 font-bold">
                100+
              </div>
              <p className="text-gray-600 text-sm">MNC Offices in 20km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
