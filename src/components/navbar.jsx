export default function SimplePage() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Website</h1>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="flex-1 container mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to My Website</h2>
          <p className="text-gray-700">This is a simple page layout using Tailwind CSS with React.</p>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-6">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  