import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  const [activePage, setActivePage] = React.useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <div className="pt-32 text-center text-white min-h-screen"><h1 className="text-5xl mt-10">About Page - Coming Soon</h1></div>;
      case 'practices':
        return <div className="pt-32 text-center text-white min-h-screen"><h1 className="text-5xl mt-10">Practices Page - Coming Soon</h1></div>;
      case 'framework':
        return <div className="pt-32 text-center text-white min-h-screen"><h1 className="text-5xl mt-10">Framework Page - Coming Soon</h1></div>;
      case 'insights':
        return <div className="pt-32 text-center text-white min-h-screen"><h1 className="text-5xl mt-10">Insights Page - Coming Soon</h1></div>;
      case 'contact':
        return <div className="pt-32 text-center text-white min-h-screen"><h1 className="text-5xl mt-10">Contact Page - Coming Soon</h1></div>;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation activePage={activePage} onPageChange={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
