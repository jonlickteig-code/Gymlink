import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Home, Map, PlusSquare, BarChart3, User, Bell, MapPin } from 'lucide-react';

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
            <button className="text-foreground hover:text-muted-foreground transition-colors duration-200 active:scale-95 relative">
              <Bell className="w-[24px] h-[24px]" strokeWidth={2} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-background shadow-[0_0_8px_rgba(255,107,53,0.6)]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 pb-6">
          <PostCard
            userName="Sarah Chen"
            userAvatar="https://i.pravatar.cc/150?img=5"
            timestamp="2h ago"
            gym="Iron Temple Gym"
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
            caption="New deadlift PR! 315lbs x 5 reps. Feeling strong today 💪"
            initialLikes={247}
          />

          <AchievementCard
            title="Iron Warrior"
            description="Completed 100 strength training sessions"
            xp={500}
          />

          <PostCard
            userName="Marcus Johnson"
            userAvatar="https://i.pravatar.cc/150?img=12"
            timestamp="4h ago"
            gym="Apex Fitness Center"
            image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
            caption="Leg day crushing it. No excuses."
            initialLikes={189}
          />
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/98 backdrop-blur-2xl border-t border-white/[0.06] z-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
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
                    className={`group relative flex flex-col items-center gap-1 px-3 py-2 transition-all duration-200 ease-out active:scale-95 ${
                      isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground/80'
                    }`}
                  >
                    <div className="relative mb-0.5">
                      <item.icon
                        className="w-[23px] h-[23px] transition-transform duration-200"
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      {isActive && (
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_6px_rgba(255,107,53,0.7)] animate-scale-in" />
                      )}
                    </div>
                    {isActive && (
                      <span className="text-[10px] font-bold tracking-wide leading-none">
                        {item.label}
                      </span>
                    )}
                    <span className="absolute inset-0 opacity-0 active:opacity-5 bg-primary transition-opacity duration-150 rounded-lg" />
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

function PostCard({ userName, userAvatar, timestamp, gym, image, caption, initialLikes }: any) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikeCount(prev => newLikedState ? prev + 1 : prev - 1);
    
    if (newLikedState) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <article className="px-4 mb-8 pb-6 border-b border-white/[0.02] animate-fade-in">
      {/* Post Header */}
      <div className="flex items-center justify-between py-2.5 mb-2">
        <div className="flex items-center gap-3">
          <button className="relative active:scale-95 transition-transform duration-200">
            <img
              src={userAvatar}
              alt={userName}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/5" />
          </button>
          <div className="flex-1">
            <button className="text-sm font-bold text-foreground leading-none active:opacity-70 transition-opacity duration-200 mb-1 block">
              {userName}
            </button>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 bg-secondary/60 hover:bg-secondary/80 px-2 py-0.5 rounded-md transition-all duration-200 active:scale-95 group">
                <MapPin className="w-2.5 h-2.5 text-muted-foreground/90 group-hover:text-foreground transition-colors" strokeWidth={2.5} />
                <span className="text-xs font-medium text-muted-foreground/90 group-hover:text-foreground transition-colors">{gym}</span>
              </button>
              <span className="text-xs text-muted-foreground/70">• {timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Image */}
      <button className="w-full aspect-[4/5] bg-gradient-to-br from-secondary/40 to-secondary/60 overflow-hidden mb-2.5 active:opacity-90 transition-opacity duration-200 rounded-sm">
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Post Actions */}
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-5">
            <button
              onClick={handleLike}
              className={`transition-all duration-200 active:scale-95 transform ${
                isLiked ? 'text-red-500' : 'text-foreground hover:text-muted-foreground/80'
              } ${isAnimating ? 'like-btn' : ''}`}
              aria-pressed={isLiked}
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <Heart
                className="w-[26px] h-[26px]"
                strokeWidth={1.8}
                fill={isLiked ? 'currentColor' : 'none'}
              />
            </button>
            <button className="text-foreground hover:text-muted-foreground/80 transition-colors duration-200 active:scale-95 transform">
              <MessageCircle className="w-[26px] h-[26px]" strokeWidth={1.8} />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`transition-all duration-200 active:scale-95 transform ${
              isSaved ? 'text-primary bookmark-btn' : 'text-foreground hover:text-muted-foreground/80'
            }`}
            aria-pressed={isSaved}
            aria-label={isSaved ? 'Unsave' : 'Save'}
          >
            <Bookmark
              className="w-[26px] h-[26px]"
              strokeWidth={1.8}
              fill={isSaved ? 'currentColor' : 'none'}
            />
          </button>
        </div>

        <div className="text-sm font-bold text-foreground leading-none">
          {likeCount.toLocaleString()} likes
        </div>

        <div className="text-[15px] leading-[1.5] pt-0.5">
          <span className="font-bold text-foreground mr-1.5">{userName}</span>
          <span className="text-foreground/95">{caption}</span>
        </div>
      </div>
    </article>
  );
}

function AchievementCard({ title, description, xp }: any) {
  return (
    <div className="px-4 mb-8 mt-2 animate-fade-in">
      <div className="relative bg-gradient-to-br from-[#1a1a1a] via-card to-[#181818] rounded-[20px] p-6 border border-primary/25 shadow-[0_12px_40px_rgba(255,107,53,0.15),0_0_0_0.5px_rgba(255,107,53,0.08)] overflow-hidden">
        {/* Multi-layer premium glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />

        <div className="relative flex items-start gap-4">
          {/* Icon container */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/14 to-primary/8 flex items-center justify-center flex-shrink-0 border border-primary/30 shadow-[0_8px_24px_rgba(255,107,53,0.2)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rounded-2xl" />
            <div className="text-3xl relative z-10">🏆</div>
          </div>

          <div className="flex-1 pt-1">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-[17px] text-foreground leading-snug tracking-tight">{title}</h3>
              <div className="flex items-center gap-1.5 bg-gradient-to-br from-primary/18 via-primary/12 to-primary/8 px-3 py-1.5 rounded-xl flex-shrink-0 border border-primary/25 shadow-[0_4px_16px_rgba(255,107,53,0.18)] relative overflow-hidden animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
                <span className="text-xl relative z-10">⚡</span>
                <span className="text-xs font-extrabold text-primary tracking-wide relative z-10">+{xp}</span>
              </div>
            </div>
            <p className="text-[15px] text-muted-foreground/95 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
