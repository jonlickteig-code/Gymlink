import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Home, Map, PlusSquare, BarChart3, User, Bell } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-background min-h-screen relative pb-[68px]">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-background/98 backdrop-blur-xl border-b border-white/[0.03]">
          <div className="flex items-center justify-between px-4 py-3.5">
            <h1 className="text-[22px] font-bold text-foreground tracking-tight">
              GymLink
            </h1>
            <button className="text-foreground hover:text-muted-foreground transition-colors duration-200 relative">
              <Bell className="w-[24px] h-[24px]" strokeWidth={2} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 pb-6">
          <div className="px-4 mb-8">
            <article className="bg-gradient-to-br from-card to-secondary/60 rounded-xl border border-white/[0.04] p-6">
              <h2 className="text-lg font-bold text-foreground mb-2">Welcome to GymLink!</h2>
              <p className="text-muted-foreground">
                Your premium fitness social network. Connect with gyms, track your progress, and compete on leaderboards.
              </p>
            </article>
          </div>

          <div className="px-4 mb-8">
            <div className="aspect-[4/5] bg-gradient-to-br from-secondary/60 to-secondary/40 rounded-lg overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
                alt="Gym"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-5">
                <button className="text-foreground hover:text-red-500 transition-colors">
                  <Heart className="w-[26px] h-[26px]" strokeWidth={1.8} />
                </button>
                <button className="text-foreground hover:text-muted-foreground/80 transition-colors">
                  <MessageCircle className="w-[26px] h-[26px]" strokeWidth={1.8} />
                </button>
              </div>
              <button className="text-foreground hover:text-primary transition-colors">
                <Bookmark className="w-[26px] h-[26px]" strokeWidth={1.8} />
              </button>
            </div>
            <div className="text-sm font-bold text-foreground mb-1">247 likes</div>
            <p className="text-[15px] text-foreground/95">
              <span className="font-bold">Sarah Chen</span> New deadlift PR! 315lbs x 5 reps 💪
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/98 backdrop-blur-2xl border-t border-white/[0.06] z-20">
          <div className="max-w-md mx-auto px-1">
            <div className="flex items-center justify-around py-1">
              {[
                { icon: Home, label: 'Home', id: 'home' },
                { icon: Map, label: 'Explore', id: 'explore' },
                { icon: PlusSquare, label: 'Post', id: 'post' },
                { icon: BarChart3, label: 'Leaderboards', id: 'ranks' },
                { icon: User, label: 'Profile', id: 'profile' }
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex flex-col items-center gap-1 px-3 py-2 transition-all duration-200 ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <item.icon className="w-[23px] h-[23px]" strokeWidth={isActive ? 2.5 : 2} />
                    {isActive && (
                      <>
                        <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
