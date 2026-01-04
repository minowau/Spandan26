import { Trophy, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12 border-t-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Star className="w-8 h-8 text-yellow-400 animate-olympic-pulse" />
            <Trophy className="w-8 h-8 text-yellow-400 animate-bounce-slow" />
            <Star className="w-8 h-8 text-yellow-400 animate-olympic-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            SPANDAN 2026
          </h3>

          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>

          <p className="text-gray-300 font-bold text-lg mb-2">
            IIIT Bangalore Intra-College Championship
          </p>

          <p className="text-gray-400 mb-6">
            Where Champions Rise • Legends Are Born • Glory Awaits
          </p>

          <p className="text-gray-500 text-sm">
            &copy; 2026 SPANDAN - IIIT Bangalore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
