import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Home, Map, PlusSquare, BarChart3, User, Bell, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '448px', margin: '0 auto', backgroundColor: '#0a0a0a', minHeight: '100vh', position: 'relative', paddingBottom: '68px' }}>

        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          backgroundColor: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
            <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fafafa', letterSpacing: '-0.025em' }}>
              GymLink
            </h1>
            <button style={{
              color: '#fafafa',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.2s'
            }}>
              <Bell style={{ width: '24px', height: '24px' }} strokeWidth={2} />
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '8px',
                height: '8px',
                backgroundColor: '#ff6b35',
                borderRadius: '50%',
                border: '2px solid #0a0a0a',
                boxShadow: '0 0 8px rgba(255, 107, 53, 0.6)'
              }} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ paddingTop: '16px', paddingBottom: '24px' }}>
          {activeTab === 'home' && (
            <>
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
            </>
          )}

          {activeTab === 'explore' && (
            <div style={{ padding: '80px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Explore Gyms</h2>
              <p style={{ fontSize: '15px', color: 'rgba(163, 163, 163, 0.9)' }}>Discover gyms near you on the map</p>
            </div>
          )}

          {activeTab === 'post' && (
            <div style={{ padding: '80px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Create Post</h2>
              <p style={{ fontSize: '15px', color: 'rgba(163, 163, 163, 0.9)' }}>Share your workout progress</p>
            </div>
          )}

          {activeTab === 'ranks' && (
            <div style={{ padding: '80px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Leaderboards</h2>
              <p style={{ fontSize: '15px', color: 'rgba(163, 163, 163, 0.9)' }}>Compete with other athletes</p>
            </div>
          )}

          {activeTab === 'profile' && (
            <div style={{ padding: '80px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👤</div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Your Profile</h2>
              <p style={{ fontSize: '15px', color: 'rgba(163, 163, 163, 0.9)' }}>View your stats and achievements</p>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

function PostCard({ userName, userAvatar, timestamp, gym, image, caption, initialLikes }: any) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [heartScale, setHeartScale] = useState(1);
  const [bookmarkScale, setBookmarkScale] = useState(1);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikeCount(prev => newLikedState ? prev + 1 : prev - 1);

    if (newLikedState) {
      setHeartScale(1.3);
      setTimeout(() => setHeartScale(1), 100);
      setTimeout(() => setHeartScale(1.3), 200);
      setTimeout(() => setHeartScale(1), 300);
    }
  };

  const handleBookmark = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);

    if (newSavedState) {
      setBookmarkScale(1.2);
      setTimeout(() => setBookmarkScale(1), 200);
    }
  };

  return (
    <article style={{ padding: '0 16px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img
              src={userAvatar}
              alt={userName}
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
            />
          </button>
          <div>
            <button style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#fafafa',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              marginBottom: '4px',
              display: 'block'
            }}>
              {userName}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: 'rgba(36, 36, 36, 0.6)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}>
                <MapPin style={{ width: '10px', height: '10px', color: 'rgba(163, 163, 163, 0.9)' }} strokeWidth={2.5} />
                <span style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(163, 163, 163, 0.9)' }}>{gym}</span>
              </button>
              <span style={{ fontSize: '12px', color: 'rgba(163, 163, 163, 0.7)' }}>• {timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      <button style={{
        width: '100%',
        aspectRatio: '4 / 5',
        background: 'linear-gradient(135deg, rgba(36, 36, 36, 0.4), rgba(36, 36, 36, 0.6))',
        overflow: 'hidden',
        marginBottom: '10px',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        borderRadius: '2px'
      }}>
        <img
          src={image}
          alt="Post"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </button>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={handleLike}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                color: isLiked ? '#ef4444' : '#fafafa',
                transition: 'color 0.2s, transform 0.1s',
                transform: `scale(${heartScale})`
              }}
            >
              <Heart
                style={{ width: '26px', height: '26px' }}
                strokeWidth={1.8}
                fill={isLiked ? 'currentColor' : 'none'}
              />
            </button>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: '#fafafa',
              transition: 'color 0.2s'
            }}>
              <MessageCircle style={{ width: '26px', height: '26px' }} strokeWidth={1.8} />
            </button>
          </div>
          <button
            onClick={handleBookmark}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: isSaved ? '#ff6b35' : '#fafafa',
              transition: 'color 0.2s, transform 0.2s',
              transform: `scale(${bookmarkScale})`
            }}
          >
            <Bookmark
              style={{ width: '26px', height: '26px' }}
              strokeWidth={1.8}
              fill={isSaved ? 'currentColor' : 'none'}
            />
          </button>
        </div>

        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#fafafa', marginBottom: '4px' }}>
          {likeCount.toLocaleString()} likes
        </div>

        <div style={{ fontSize: '15px', lineHeight: '1.5', paddingTop: '2px' }}>
          <span style={{ fontWeight: 'bold', color: '#fafafa', marginRight: '6px' }}>{userName}</span>
          <span style={{ color: 'rgba(250, 250, 250, 0.95)' }}>{caption}</span>
        </div>
      </div>
    </article>
  );
}

function AchievementCard({ title, description, xp }: any) {
  return (
    <div style={{ padding: '0 16px', marginBottom: '32px', marginTop: '8px' }}>
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1a1a1a, #171717, #181818)',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid rgba(255, 107, 53, 0.25)',
        boxShadow: '0 12px 40px rgba(255, 107, 53, 0.15), 0 0 0 0.5px rgba(255, 107, 53, 0.08)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 107, 53, 0.03), transparent)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '192px',
          height: '192px',
          background: 'rgba(255, 107, 53, 0.06)',
          borderRadius: '50%',
          filter: 'blur(48px)',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{
            position: 'relative',
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.14), rgba(255, 107, 53, 0.08))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '1px solid rgba(255, 107, 53, 0.3)',
            boxShadow: '0 8px 24px rgba(255, 107, 53, 0.2)',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent)',
              borderRadius: '16px'
            }} />
            <div style={{ fontSize: '32px', position: 'relative', zIndex: 10 }}>🏆</div>
          </div>

          <div style={{ flex: 1, paddingTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '17px', color: '#fafafa', lineHeight: '1.3', letterSpacing: '-0.025em' }}>{title}</h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.18), rgba(255, 107, 53, 0.12), rgba(255, 107, 53, 0.08))',
                padding: '6px 12px',
                borderRadius: '12px',
                flexShrink: 0,
                border: '1px solid rgba(255, 107, 53, 0.25)',
                boxShadow: '0 4px 16px rgba(255, 107, 53, 0.18)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent)',
                  pointerEvents: 'none'
                }} />
                <span style={{ fontSize: '20px', position: 'relative', zIndex: 10 }}>⚡</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#ff6b35', letterSpacing: '0.05em', position: 'relative', zIndex: 10 }}>+{xp}</span>
              </div>
            </div>
            <p style={{ fontSize: '15px', color: 'rgba(163, 163, 163, 0.95)', lineHeight: '1.6' }}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNav({ activeTab, setActiveTab }: any) {
  const navItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Map, label: 'Explore', id: 'explore' },
    { icon: PlusSquare, label: 'Post', id: 'post' },
    { icon: BarChart3, label: 'Leaderboards', id: 'ranks' },
    { icon: User, label: 'Profile', id: 'profile' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(13, 13, 13, 0.98)',
      backdropFilter: 'blur(32px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      zIndex: 20
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)'
      }} />
      <div style={{ maxWidth: '448px', margin: '0 auto', padding: '0 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '4px 0' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.id)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 12px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isActive ? '#ff6b35' : 'rgba(163, 163, 163, 1)',
                  transition: 'all 0.2s ease-out'
                }}
              >
                <div style={{ position: 'relative', marginBottom: '2px' }}>
                  <item.icon
                    style={{ width: '23px', height: '23px', transition: 'transform 0.2s' }}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#ff6b35',
                      borderRadius: '50%',
                      boxShadow: '0 0 6px rgba(255, 107, 53, 0.7)'
                    }} />
                  )}
                </div>
                {isActive && (
                  <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', lineHeight: 1 }}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
