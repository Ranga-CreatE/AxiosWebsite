import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = ({ activePage, onPageChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'practices', label: 'Practices' },
    { id: 'framework', label: 'Framework' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onPageChange('home')}>
            <div className="text-2xl font-black tracking-wider text-white">Axios</div>
            <div className="text-xs font-black tracking-widest gold-gradient-text">Unlimited</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 ml-24">
            <div className="flex space-x-10">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="cta-button">
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left nav-link py-2"
              >
                {item.label}
              </button>
            ))}
            <button className="cta-button w-full">
              Schedule Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
