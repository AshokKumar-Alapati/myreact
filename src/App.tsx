import { useState } from 'react';
import fileImg from './assets/file.jpg'; // Background image
import headingImage from './assets/heading_image.jpg'; // Heading section image
import headerBackground from './assets/header_background.jpg'; // Header background image
import { useTranslation } from 'react-i18next';
import HeaderLanguage from './header/HeaderLanguage';
import i18n from './i18n';

function App() {
  const [showLocation, setShowLocation] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'te' | 'hi'>('en');
  const { t } = useTranslation();

  const toggleLocation = (show: boolean) => {
    setShowLocation(show);
  };

  const changeLanguage = (lng: string) => {
    setSelectedLanguage(lng as 'en' | 'te' | 'hi');
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen max-w-[85%] mx-auto flex flex-col">
      {/* Header: image left, heading text next to it with max width, language absolute top-right */}
      <header
        className="relative px-2 sm:px-2 py-2 mt-2 shadow-sm"
        style={{
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center space-x-2 pl-0">
          {/* Heading Image with reduced left margin */}
          <img
            src={headingImage}
            alt="Heading"
            className="w-16 h-16 rounded-lg shadow-md object-cover flex-shrink-0 ml-0 sm:-ml-4"
          />

          {/* Heading text container with padding-right on mobile only */}
          <div className="text-left max-w-xs flex-shrink pr-12 sm:pr-0">
            <h1 className="font-bold text-red-600 text-lg sm:text-xl md:text-2xl leading-snug m-0 p-0 break-words">
              {t('welcome_message')}
            </h1>
            <span className="text-gray-700 text-xs sm:text-sm font-medium block">
              {t('welcome_subtitle')}
            </span>
          </div>
        </div>

        {/* Language selector absolutely positioned */}
        <div className="absolute top-2 right-4">
          <HeaderLanguage
            setLanguage={changeLanguage}
            selectedLanguage={selectedLanguage}
          />
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="bg-gray-100 p-3 shadow-md rounded-md mt-3 sm:hidden flex justify-around text-gray-700 font-semibold text-sm">
        <button onClick={() => toggleLocation(false)} className="hover:text-red-600 focus:outline-none">
          Home
        </button>
        <a href="#services" className="hover:text-red-600">
          Services
        </a>
        <a href="#about" className="hover:text-red-600">
          About
        </a>
        <a href="#contact" className="hover:text-red-600">
          Contact
        </a>
        <button onClick={() => toggleLocation(true)} className="hover:text-red-600 focus:outline-none">
          Location
        </button>
      </nav>

      {/* Desktop Sidebar Nav */}
      <div className="flex flex-1 w-full mt-4">
        <nav className="hidden sm:block w-40 bg-gray-100 p-4 rounded-md shadow-md text-sm" role="navigation" aria-label="Primary Navigation">
          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>
              <button onClick={() => toggleLocation(false)} className="hover:text-red-600 focus:outline-none" aria-label="Home">
                Home
              </button>
            </li>
            <li>
              <a href="#services" className="hover:text-red-600" aria-label="Services">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-600" aria-label="About">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-600" aria-label="Contact">
                Contact
              </a>
            </li>
            <li>
              <button onClick={() => toggleLocation(true)} className="hover:text-red-600 focus:outline-none" aria-label="Location">
                Location
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Section */}
        <main
          className="flex-1 ml-4 rounded-md shadow-md flex items-center justify-center min-h-[200px] sm:min-h-[400px] text-gray-800"
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
            <div className="bg-white bg-opacity-50 sm:bg-opacity-70 p-4 sm:p-6 rounded-lg text-center max-w-lg mx-auto">
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">
                Welcome to Ankamma Talli Devastanam
              </h2>
              <p className="text-xs sm:text-sm md:text-base">
                This is the main content area where you can add paragraphs, images, or any other content. The site is styled using Tailwind CSS and laid out with a responsive design in mind.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-yellow-100 text-center p-3 mt-4 mb-4 border-t border-gray-300 text-xs sm:text-sm">
        <p className="text-gray-600">All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
