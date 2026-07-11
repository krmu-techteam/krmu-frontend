const HowToReach = () => {
  return (
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl"
    >
      <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-8">
        <h3 className="text-2xl mb-6 text-gray-800">How to Reach</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-car w-6 h-6 text-white"
                aria-hidden="true"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
            </div>
            <div>
              <h4 className="text-gray-800">By Car</h4>
              <p className="text-sm text-gray-600">
                25 mins from Delhi via NH-48, Free parking available
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-tram-front w-6 h-6 text-white"
                aria-hidden="true"
              >
                <rect width="16" height="16" x="4" y="3" rx="2"></rect>
                <path d="M4 11h16"></path>
                <path d="M12 3v8"></path>
                <path d="m8 19-2 3"></path>
                <path d="m18 22-2-3"></path>
                <path d="M8 15h.01"></path>
                <path d="M16 15h.01"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-gray-800">By Metro</h4>
              <p className="text-sm text-gray-600">
                Huda City Centre Metro + 20 mins bus ride
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-university-red rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bus w-6 h-6 text-white"
                aria-hidden="true"
              >
                <path d="M8 6v6"></path>
                <path d="M15 6v6"></path>
                <path d="M2 12h19.6"></path>
                <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
                <circle cx="7" cy="18" r="2"></circle>
                <path d="M9 18h5"></path>
                <circle cx="16" cy="18" r="2"></circle>
              </svg>
            </div>
            <div>
              <h4 className="text-gray-800">By Bus</h4>
              <p className="text-sm text-gray-600">
                Regular bus service from ISBT Gurugram
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToReach;
