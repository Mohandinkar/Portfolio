import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 text-muted-foreground py-6 px-4">
      <div className="container mx-auto max-w-5xl text-center space-y-4">
        
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/mohan-dinkar-1639b1272" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/Mohan_2502" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://github.com/Mohandinkar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={24} />
          </a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Mohan Dinkar. All rights reserved.</p>

        <div className="text-xs">
          Built with React and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
