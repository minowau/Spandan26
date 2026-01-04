import { ExternalLink, Users, Trophy, Medal, Flame, Star, Target } from 'lucide-react';
import { sportsData } from '../data/sportsData';

const Sports = () => {
  const medalColors = [
    'from-yellow-400 to-yellow-600',
    'from-gray-300 to-gray-500',
    'from-orange-400 to-orange-600',
    'from-blue-400 to-blue-600',
    'from-green-400 to-green-600',
    'from-red-400 to-red-600',
    'from-purple-400 to-purple-600',
    'from-cyan-400 to-cyan-600',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-4 mb-8">
            <Medal className="w-16 h-16 text-yellow-400 animate-bounce-slow" />
            <Flame className="w-16 h-16 text-orange-500 animate-float" />
            <Star className="w-16 h-16 text-blue-400 animate-bounce-slow" style={{ animationDelay: '1s' }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
            CHAMPIONSHIP EVENTS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-bold">
            Choose your discipline and claim your victory
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16 perspective-1000">
          {sportsData.map((sport, index) => (
            <div
              key={sport.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden card-3d-hover border-2 border-gray-700 hover:border-yellow-400 transition-all animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 p-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${medalColors[index % medalColors.length]} flex items-center justify-center shadow-xl animate-olympic-pulse`}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="md:flex">
                <div className={`md:w-1/3 bg-gradient-to-br ${medalColors[index % medalColors.length]} flex items-center justify-center p-12 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="object-contain h-48 w-48 rounded-2xl shadow-2xl bg-white p-4 animate-float relative z-10"
                  />
                </div>

                <div className="md:w-2/3 p-8 md:p-12">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
                    {sport.name.toUpperCase()}
                    <Star className="w-8 h-8 text-yellow-400" />
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {sport.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="glass-morphism rounded-xl p-6 border-2 border-blue-500/30 hover:border-blue-500 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-black text-xl text-blue-400">TEAM SIZE</h3>
                      </div>
                      <p className="text-white text-lg font-bold">{sport.teamSize}</p>
                    </div>

                    <div className="glass-morphism rounded-xl p-6 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-yellow-500 rounded-lg">
                          <Trophy className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="font-black text-xl text-yellow-400">FORMAT</h3>
                      </div>
                      <p className="text-white text-lg font-bold">{sport.format}</p>
                    </div>
                  </div>

                  <div className="mb-8 glass-morphism rounded-xl p-6 border-2 border-gray-600">
                    <h3 className="font-black text-white mb-4 text-2xl flex items-center gap-2">
                      <Target className="w-6 h-6 text-orange-500" />
                      COMPETITION RULES
                    </h3>
                    <ul className="space-y-3">
                      {sport.rules.map((rule, ruleIndex) => (
                        <li
                          key={ruleIndex}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-yellow-400 font-black text-xl mt-1">▸</span>
                          <span className="leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={sport.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 olympic-gold text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all transform shadow-2xl neon-glow"
                  >
                    <Trophy className="w-6 h-6" />
                    REGISTER FOR GLORY
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-yellow-600 to-red-600 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="relative z-10 p-12 text-white text-center">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-yellow-300 animate-bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ARE YOU READY TO BECOME A CHAMPION?
            </h2>
            <p className="text-2xl mb-8 font-bold">
              Register for your discipline and write your legacy at SPANDAN 2026
            </p>
            <p className="text-lg opacity-90 font-semibold">
              Questions? Contact the Sports Secretary at sports@iiitb.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
