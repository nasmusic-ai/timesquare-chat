/**
 * ============================================
 * TIMESQUARE - Main JavaScript
 * ============================================ */

// Sample posts data
const postsData = [
  {
    id: 1,
    author: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    time: '11h',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
    likes: 74,
    comments: 12,
    shares: 3
  },
  {
    id: 2,
    author: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    time: '5h',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    likes: 128,
    comments: 24,
    shares: 8
  },
  {
    id: 3,
    author: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200',
    time: '2h',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    likes: 256,
    comments: 45,
    shares: 12
  }
];

// State
let currentTab = 'home';
let likedPosts = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPosts();
  initActionButtons();
});

/**
 * Initialize Navigation
 */
function initNavigation() {
  // Top nav items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      
      const tab = item.dataset.tab;
      handleTabChange(tab);
    });
  });
  
  // Sub nav items
  const subNavItems = document.querySelectorAll('.sub-nav-item');
  subNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      subNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  // Bottom nav
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      bottomNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/**
 * Handle Tab Change
 */
function handleTabChange(tab) {
  currentTab = tab;
  
  switch(tab) {
    case 'home':
      showHome();
      break;
    case 'friends':
      showToast('Friends feature coming soon!');
      break;
    case 'watch':
      showToast('Watch feature coming soon!');
      break;
    case 'notifications':
      showToast('Notifications feature coming soon!');
      break;
    case 'menu':
      showToast('Menu feature coming soon!');
      break;
  }
}

/**
 * Show Home Feed
 */
function showHome() {
  const container = document.getElementById('posts-container');
  if (!container) return;
  
  container.innerHTML = postsData.slice(1).map(post => createPostHTML(post)).join('');
  initActionButtons();
}

/**
 * Initialize Posts
 */
function initPosts() {
  const container = document.getElementById('posts-container');
  if (!container) return;
  
  // Load more posts (excluding the first one which is already in HTML)
  container.innerHTML = postsData.slice(1).map(post => createPostHTML(post)).join('');
}

/**
 * Create Post HTML
 */
function createPostHTML(post) {
  const isLiked = likedPosts.has(post.id);
  
  return `
    <article class="post-card" data-post-id="${post.id}">
      <div class="post-header">
        <div class="post-author">
          <img src="${post.avatar}" alt="${post.author}" class="author-avatar">
          <div class="author-info">
            <h3 class="author-name">${post.author}</h3>
            <div class="post-meta">
              <span class="post-time">${post.time}</span>
              <span class="privacy-icon">🌐</span>
            </div>
          </div>
        </div>
        <button class="more-btn">⋯</button>
      </div>

      <div class="post-image-container">
        <img src="${post.image}" alt="Post" class="post-image" loading="lazy">
      </div>

      <div class="reactions-bar">
        <div class="reaction-icons">
          <span class="reaction-icon like">👍</span>
          <span class="reaction-icon love">❤️</span>
        </div>
        <span class="reaction-count">${post.likes}</span>
      </div>

      <div class="action-buttons">
        <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
          <svg viewBox="0 0 24 24" fill="${isLiked ? '#1877f2' : 'none'}" stroke="${isLiked ? '#1877f2' : 'currentColor'}" stroke-width="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
          </svg>
          <span style="color: ${isLiked ? '#1877f2' : 'inherit'}">Like</span>
        </button>
        <button class="action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span>Comment</span>
        </button>
        <button class="action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </article>
  `;
}

/**
 * Initialize Action Buttons
 */
function initActionButtons() {
  // Like buttons
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const postId = parseInt(btn.dataset.postId);
      toggleLike(postId, btn);
    });
  });
  
  // First post like button
  const firstLikeBtn = document.querySelector('.post-card:not([data-post-id]) .action-btn');
  if (firstLikeBtn) {
    firstLikeBtn.addEventListener('click', () => {
      firstLikeBtn.classList.toggle('liked');
      const isLiked = firstLikeBtn.classList.contains('liked');
      const svg = firstLikeBtn.querySelector('svg');
      const span = firstLikeBtn.querySelector('span');
      
      if (isLiked) {
        svg.setAttribute('fill', '#1877f2');
        svg.setAttribute('stroke', '#1877f2');
        span.style.color = '#1877f2';
      } else {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        span.style.color = 'inherit';
      }
    });
  }
}

/**
 * Toggle Like
 */
function toggleLike(postId, btn) {
  const isLiked = likedPosts.has(postId);
  
  if (isLiked) {
    likedPosts.delete(postId);
  } else {
    likedPosts.add(postId);
  }
  
  // Update button appearance
  const svg = btn.querySelector('svg');
  const span = btn.querySelector('span');
  
  if (!isLiked) {
    svg.setAttribute('fill', '#1877f2');
    svg.setAttribute('stroke', '#1877f2');
    span.style.color = '#1877f2';
    btn.classList.add('liked');
  } else {
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    span.style.color = 'inherit';
    btn.classList.remove('liked');
  }
  
  // Update like count
  const postCard = btn.closest('.post-card');
  const countEl = postCard.querySelector('.reaction-count');
  let count = parseInt(countEl.textContent);
  countEl.textContent = isLiked ? count - 1 : count + 1;
}

/**
 * Show Toast Notification
 */
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  
  // Create toast
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 12px 24px;
    border-radius: 20px;
    font-size: 14px;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes fadeOut {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(10px); }
  }
`;
document.head.appendChild(style);