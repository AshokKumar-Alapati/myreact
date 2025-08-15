import { useState } from 'react';
import fileImg from './assets/file.jpg'; // Image in assets folder one level up

function App() {
  const [showLocation, setShowLocation] = useState(false);

  const toggleLocation = (show:boolean) => {
    setShowLocation(show);
  };

  return (
    <div className="min-h-screen max-w-[85%] mx-auto flex flex-col">

      {/* Header with margin-top */}
      <header className="bg-yellow-100 p-4 text-center mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto">
          <h1 className="font-bold text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Ankamma Talli Devastanam
          </h1>
          <span className="text-sm font-normal text-gray-700 mt-2 sm:mt-0 sm:ml-4">
            Rudrakota
          </span>
        </div>
      </header>

      {/* Mobile Navigation below header */}
      <nav className="bg-gray-100 p-4 shadow-md rounded-md mt-4 sm:hidden flex justify-around text-gray-700 font-semibold">
        <button
          onClick={() => toggleLocation(false)}
          className="hover:text-red-600 focus:outline-none"
        >
          Home
        </button>
        <a href="#services" className="hover:text-red-600">Services</a>
        <a href="#about" className="hover:text-red-600">About</a>
        <a href="#contact" className="hover:text-red-600">Contact</a>
        <button
          onClick={() => toggleLocation(true)}
          className="hover:text-red-600 focus:outline-none"
        >
          Location
        </button>
      </nav>

      {/* Desktop Sidebar Nav */}
      <div className="flex flex-1 w-full mt-6">
        <nav className="hidden sm:block w-48 bg-gray-100 p-4 rounded-md shadow-md">
          <ul className="space-y-4 text-gray-700 font-semibold">
            <li>
              <button
                onClick={() => toggleLocation(false)}
                className="hover:text-red-600 focus:outline-none"
              >
                Home
              </button>
            </li>
            <li><a href="#services" className="hover:text-red-600">Services</a></li>
            <li><a href="#about" className="hover:text-red-600">About</a></li>
            <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
            <li>
              <button
                onClick={() => toggleLocation(true)}
                className="hover:text-red-600 focus:outline-none"
              >
                Location
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Section or Location Map */}
        <main
          className="flex-1 ml-6 rounded-md shadow-md flex items-center justify-center min-h-[200px] sm:min-h-[400px] text-gray-800"
          style={{
            backgroundImage: showLocation ? 'none' : `url(${fileImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {showLocation ? (
            <div className="w-full h-full rounded-md overflow-hidden">
              <iframe
                title="Ankamma Talli Devastanam Location"
                src="https://www.google.com/maps?q=14.972284464601913,80.0116906288358&z=15&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ) : (
            <div className="hidden sm:block bg-white bg-opacity-40 sm:bg-opacity-70 p-4 sm:p-6 rounded-lg text-center max-w-lg">
              <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-3 sm:mb-4">
                Welcome to Ankamma Talli Devastanam
              </h2>
              <p className="text-xs sm:text-sm md:text-base">
                This is the main content area where you can add paragraphs, images, or any other content.
                The site is styled using Tailwind CSS and laid out with a responsive design in mind.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Footer with margin-bottom */}
      <footer className="bg-yellow-100 text-center p-4 mt-6 mb-6 border-t border-gray-300">
        <p className="text-gray-600 text-sm">All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
