import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="container mx-auto px-6 py-6 text-center text-stone-500 dark:text-stone-400">
        <p>&copy; {new Date().getFullYear()} NutriBar. Made by students. Made for everyone.</p>
      </div>
    </footer>
  );
};

export default Footer;