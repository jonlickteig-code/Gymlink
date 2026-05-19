import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Home, Map, PlusSquare, BarChart3, User, Bell, MapPin, Camera, Image as ImageIcon, TrendingUp, Flame, Trophy, Award } from 'lucide-react';

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

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div style={{ paddingTop: '16px', paddingBottom: '24px' }}>
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
        )}

        {/* EXPLORE TAB */}
        {activeTab === 'explore' && (
          <div style={{ paddingTop: '16px', paddingBottom: '24px' }}>
            <div style={{ padding: '0 16px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Nearby Gyms</h2>
              <p style={{ fontSize: '14px', color: 'rgba(163, 163, 163, 0.9)' }}>Discover gyms in your area</p>
            </div>

            <GymCard
              name="Iron Temple Gym"
              image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
              distance="0.5 mi"
              followers={1234}
              members={450}
            />

            <GymCard
              name="Apex Fitness Center"
              image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
              distance="1.2 mi"
              followers={890}
              members={320}
            />

            <GymCard
              name="PowerHouse Athletics"
              image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800"
              distance="2.1 mi"
              followers={567}
              members={210}
            />

            <GymCard
              name="Summit Strength Lab"
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
              distance="3.5 mi"
              followers={2100}
              members={780}
            />
          </div>
        )}

        {/* POST TAB */}
        {activeTab === 'post' && (
          <div style={{ paddingTop: '24px', paddingBottom: '24px' }}>
            <div style={{ padding: '0 16px', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Create Post</h2>
              <p style={{ fontSize: '14px', color: 'rgba(163, 163, 163, 0.9)' }}>Share your workout with the community</p>
            </div>

            <div style={{ padding: '0 16px', marginBottom: '24px' }}>
              <div style={{
                width: '100%',
                aspectRatio: '4 / 5',
                background: 'linear-gradient(135deg, rgba(36, 36, 36, 0.4), rgba(36, 36, 36, 0.6))',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                border: '2px dashed rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <Camera style={{ width: '48px', height: '48px', color: 'rgba(163, 163, 163, 0.6)' }} strokeWidth={1.5} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#fafafa', marginBottom: '4px' }}>Add Photo</p>
                  <p style={{ fontSize: '13px', color: 'rgba(163, 163, 163, 0.8)' }}>Tap to upload</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '0 16px', marginBottom: '16px' }}>
              <textarea
                placeholder="Write a caption..."
                style={{
                  width: '100%',
                  minHeight: '100px',
                  backgroundColor: 'rgba(36, 36, 36, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '12px',
                  color: '#fafafa',
                  fontSize: '15px',
                  resize: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ padding: '0 16px', marginBottom: '16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(36, 36, 36, 0.6)',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <MapPin style={{ width: '20px', height: '20px', color: 'rgba(163, 163, 163, 0.9)' }} strokeWidth={2} />
                <span style={{ fontSize: '14px', color: 'rgba(163, 163, 163, 0.9)' }}>Add location</span>
              </div>
            </div>

            <div style={{ padding: '0 16px' }}>
              <button style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#ff6b35',
                border: 'none',
                borderRadius: '12px',
                color: '#fafafa',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                Share Post
              </button>
            </div>
          </div>
        )}

        {/* LEADERBOARDS TAB */}
        {activeTab === 'ranks' && (
          <div style={{ paddingTop: '16px', paddingBottom: '24px' }}>
            <div style={{ padding: '0 16px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>Top Performers</h2>
              <p style={{ fontSize: '14px', color: 'rgba(163, 163, 163, 0.9)' }}>This week's rankings</p>
            </div>

            <LeaderboardItem
              rank={1}
              avatar="https://i.pravatar.cc/150?img=33"
              name="Alex Rivera"
              xp={12450}
              isTop={true}
            />

            <LeaderboardItem
              rank={2}
              avatar="https://i.pravatar.cc/150?img=5"
              name="Sarah Chen"
              xp={11230}
              isTop={true}
            />

            <LeaderboardItem
              rank={3}
              avatar="https://i.pravatar.cc/150?img=12"
              name="Marcus Johnson"
              xp={10890}
              isTop={true}
            />

            <LeaderboardItem
              rank={4}
              avatar="https://i.pravatar.cc/150?img=27"
              name="Emma Davis"
              xp={9670}
              isTop={false}
            />

            <LeaderboardItem
              rank={5}
              avatar="https://i.pravatar.cc/150?img=14"
              name="James Wilson"
              xp={8920}
              isTop={false}
            />

            <LeaderboardItem
              rank={6}
              avatar="https://i.pravatar.cc/150?img=32"
              name="Olivia Martinez"
              xp={8450}
              isTop={false}
            />

            <LeaderboardItem
              rank={7}
              avatar="https://i.pravatar.cc/150?img=58"
              name="Chris Taylor"
              xp={7890}
              isTop={false}
            />

            <LeaderboardItem
              rank={8}
              avatar="https://i.pravatar.cc/150?img=47"
              name="Sofia Anderson"
              xp={7320}
              isTop={false}
            />
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div style={{ paddingTop: '24px', paddingBottom: '24px' }}>
            <div style={{ padding: '0 16px', marginBottom: '24px', textAlign: 'center' }}>
              <img
                src="https://i.pravatar.cc/150?img=68"
                alt="Profile"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 12px',
                  border: '3px solid rgba(255, 107, 53, 0.3)'
                }}
              />
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fafafa', marginBottom: '4px' }}>Jordan Smith</h2>
              <p style={{ fontSize: '14px', color: 'rgba(163, 163, 163, 0.9)', marginBottom: '16px' }}>@jordansmith</p>

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{
                  backgroundColor: 'rgba(36, 36, 36, 0.6)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#fafafa', marginBottom: '2px' }}>127</p>
                  <p style={{ fontSize: '11px', color: 'rgba(163, 163, 163, 0.8)' }}>Posts</p>
                </div>
                <div style={{
                  backgroundColor: 'rgba(36, 36, 36, 0.6)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#fafafa', marginBottom: '2px' }}>2.4k</p>
                  <p style={{ fontSize: '11px', color: 'rgba(163, 163, 163, 0.8)' }}>Followers</p>
                </div>
                <div style={{
                  backgroundColor: 'rgba(36, 36, 36, 0.6)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#fafafa', marginBottom: '2px' }}>890</p>
                  <p style={{ fontSize: '11px', color: 'rgba(163, 163, 163, 0.8)' }}>Following</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '0 16px', marginBottom: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <StatCard icon={Flame} label="Streak" value="12 days" />
                <StatCard icon={TrendingUp} label="XP" value="8,920" />
                <StatCard icon={Trophy} label="Rank" value="#5" />
                <StatCard icon={Award} label="Badges" value="24" />
              </div>
            </div>

            <div style={{ padding: '0 16px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#fafafa', marginBottom: '12px' }}>Recent Posts</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px' }}>
                <ProfilePost image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" />
                <ProfilePost image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400" />
                <ProfilePost image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400" />
                <ProfilePost image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400" />
                <ProfilePost image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400" />
                <ProfilePost image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400" />
              </div>
            </div>
          </div>
        )}

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

function GymCard({ name, image, distance, followers, members }: any) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{ padding: '0 16px', marginBottom: '16px' }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'rgba(23, 23, 23, 0.6)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '160px' }}>
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(8px)',
            padding: '4px 10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#fafafa',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {distance}
          </div>
        </div>

        <div style={{ padding: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#fafafa', marginBottom: '8px' }}>{name}</h3>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
            <div>
              <p style={{ fontSize: '12px', color: 'rgba(163, 163, 163, 0.8)', marginBottom: '2px' }}>Followers</p>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#fafafa' }}>{followers.toLocaleString()}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: 'rgba(163, 163, 163, 0.8)', marginBottom: '2px' }}>Members</p>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#fafafa' }}>{members}</p>
            </div>
          </div>

          <button
            onClick={() => setIsFollowing(!isFollowing)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: isFollowing ? 'rgba(36, 36, 36, 0.8)' : '#ff6b35',
              border: 'none',
              borderRadius: '10px',
              color: '#fafafa',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
}

function LeaderboardItem({ rank, avatar, name, xp, isTop }: any) {
  return (
    <div style={{
      padding: '12px 16px',
      marginBottom: '8px',
      backgroundColor: isTop ? 'rgba(255, 107, 53, 0.05)' : 'transparent',
      borderLeft: isTop ? '3px solid #ff6b35' : 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          color: isTop ? '#ff6b35' : 'rgba(163, 163, 163, 0.8)'
        }}>
          {rank <= 3 ? (rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉') : rank}
        </div>
        <img
          src={avatar}
          alt={name}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: isTop ? '2px solid rgba(255, 107, 53, 0.3)' : 'none'
          }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#fafafa', marginBottom: '2px' }}>{name}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '14px', color: '#ff6b35', fontWeight: 'bold' }}>{xp.toLocaleString()}</span>
            <span style={{ fontSize: '12px', color: 'rgba(163, 163, 163, 0.8)' }}>XP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: any) {
  return (
    <div style={{
      backgroundColor: 'rgba(36, 36, 36, 0.6)',
      padding: '16px',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <Icon style={{ width: '20px', height: '20px', color: '#ff6b35', marginBottom: '8px' }} strokeWidth={2} />
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#fafafa', marginBottom: '2px' }}>{value}</p>
      <p style={{ fontSize: '12px', color: 'rgba(163, 163, 163, 0.8)' }}>{label}</p>
    </div>
  );
}

function ProfilePost({ image }: any) {
  return (
    <div style={{
      aspectRatio: '1',
      backgroundColor: 'rgba(36, 36, 36, 0.6)',
      overflow: 'hidden',
      cursor: 'pointer'
    }}>
      <img
        src={image}
        alt="Post"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
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
