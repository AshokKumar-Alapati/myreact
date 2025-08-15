import fileImg from './assets/file.jpg'; // Image in assets folder one level up

function App() {
  return (
    <div className="min-h-screen max-w-[85%] mx-auto flex flex-col">
      
      {/* Header with margin-top */}
      <header className="bg-yellow-100 p-4 text-center mt-6">
        <div className="inline-flex items-end justify-center mx-auto">
          <h1 className="font-bold text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Ankamma Talli Devastanam
          </h1>
          <span className="text-sm font-normal text-gray-700 ml-4 mt-4">
            Rudrakota
          </span>
        </div>
      </header>

      {/* Page Content - Flex row without margin */}
      <div className="flex flex-1 w-full mt-6">
        
        {/* Side Nav */}
        <nav className="w-48 bg-gray-100 p-4 rounded-md shadow-md">
          <ul className="space-y-4 text-gray-700 font-semibold">
            <li><a href="#home" className="hover:text-red-600">Home</a></li>
            <li><a href="#services" className="hover:text-red-600">Services</a></li>
            <li><a href="#about" className="hover:text-red-600">About</a></li>
            <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
          </ul>
        </nav>
        
        {/* Main Section with Background Image and Centered Content */}
        <main
          className="flex-1 ml-6 rounded-md shadow-md text-gray-800 bg-cover bg-center flex items-center justify-center min-h-[300px] sm:min-h-[400px]"
          style={{
            backgroundImage: `url(${fileImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="bg-white bg-opacity-70 p-6 rounded-lg text-center max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to Ankamma Talli Devastanam</h2>
            <p>
              This is the main content area where you can add paragraphs, images, or any other content.
              The site is styled using Tailwind CSS and laid out with a responsive design in mind.
            </p>
          </div>
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
