"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin, Navigation2 } from "lucide-react";

const InteractiveMaps = () => {
  return (
    <Card className="border-0 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-university-blue to-university-red p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <h3 className="text-xl">Interactive Campus Map</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/NQwCyLcRSVWU4JWU7",
                  "_blank"
                )
              }
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              title="Open in Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://maps.google.com/maps/dir//K.R.+Mangalam+University,+Sohna+Road,+Gurugram,+Haryana",
                  "_blank"
                )
              }
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              title="Get Directions"
            >
              <Navigation2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8746543652856!2d77.01956731455068!3d28.450686982470885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b8cb7f7b7%3A0x3c5e8b1b2b0d6c24!2sK.R.%20Mangalam%20University!5e0!3m2!1sen!2sin!4v1679123456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="K.R. Mangalam University Location"
          className="w-full h-full"
        ></iframe>

        {/* Map overlay with quick info */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-gray-800">K.R. Mangalam University</h4>
              <p className="text-sm text-gray-600">
                Sohna Road, Gurugram, Haryana
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>122103</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg text-gray-800">Navigate to Campus</h4>
            <p className="text-sm text-gray-600">
              Get real-time directions and explore nearby amenities
            </p>
          </div>
          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/NQwCyLcRSVWU4JWU7", "_blank")
            }
            className="bg-university-red hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300 flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Open Maps
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMaps;
