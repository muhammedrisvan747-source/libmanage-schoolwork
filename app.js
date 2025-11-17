/* ==================== LIBRARY MANAGEMENT APP ==================== */

// Application State Management
const AppState = {
  currentUser: {
    name: 'Jane Librarian',
    role: 'Admin',
    email: 'jane@library.com'
  },
  currentPage: 'dashboard',
  isDarkTheme: true,
  searchQuery: '',
  
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0743273565',
      category: 'Fiction',
      rating: 4.8,
      copies: 5,
      available: 3,
      borrows: 245,
      description: 'A classic American novel about the Jazz Age',
      cover: 'linear-gradient(135deg, #2d3e50 0%, #c39c6b 100%)'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '978-0061120084',
      category: 'Fiction',
      rating: 4.9,
      copies: 4,
      available: 2,
      borrows: 312,
      description: 'A gripping tale of racial injustice and moral growth',
      cover: 'linear-gradient(135deg, #8b4513 0%, #daa520 100%)'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0451524935',
      category: 'Fiction',
      rating: 4.7,
      copies: 3,
      available: 1,
      borrows: 198,
      description: 'A dystopian social science fiction novel',
      cover: 'linear-gradient(135deg, #2c3e50 0%, #8b0000 100%)'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '978-0141439518',
      category: 'Fiction',
      rating: 4.6,
      copies: 6,
      available: 4,
      borrows: 267,
      description: 'A romantic novel of manners and social commentary',
      cover: 'linear-gradient(135deg, #c39c6b 0%, #e8a76d 100%)'
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      isbn: '978-0316769174',
      category: 'Fiction',
      rating: 4.3,
      copies: 2,
      available: 1,
      borrows: 156,
      description: 'A story of teenage alienation and rebellion',
      cover: 'linear-gradient(135deg, #556b2f 0%, #daa520 100%)'
    },
    {
      id: 6,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      isbn: '978-0141441146',
      category: 'Fiction',
      rating: 4.7,
      copies: 3,
      available: 2,
      borrows: 189,
      description: 'A romantic and gothic novel of independence',
      cover: 'linear-gradient(135deg, #2f4f4f 0%, #cd853f 100%)'
    }
  ],

  members: [
    { id: 101, name: 'Sarah Johnson', email: 'sarah.j@email.com', joined: '2023-05-15', loans: 2, fines: 0, status: 'active' },
    { id: 102, name: 'Michael Chen', email: 'mchen@email.com', joined: '2023-08-22', loans: 1, fines: 2.50, status: 'active' },
    { id: 103, name: 'Emma Wilson', email: 'emma.w@email.com', joined: '2024-01-10', loans: 3, fines: 0, status: 'active' },
    { id: 104, name: 'David Martinez', email: 'david.m@email.com', joined: '2023-11-03', loans: 0, fines: 5.00, status: 'suspended' },
    { id: 105, name: 'Lisa Anderson', email: 'l.anderson@email.com', joined: '2024-02-14', loans: 2, fines: 0, status: 'active' }
  ],

  transactions: [
    { id: 1, bookId: 1, memberId: 101, bookTitle: 'The Great Gatsby', memberName: 'Sarah Johnson', borrowedDate: '2025-11-05', dueDate: '2025-11-19', returnedDate: null, status: 'active' },
    { id: 2, bookId: 2, memberId: 102, bookTitle: 'To Kill a Mockingbird', memberName: 'Michael Chen', borrowedDate: '2025-11-10', dueDate: '2025-11-24', returnedDate: null, status: 'active' },
    { id: 3, bookId: 3, memberId: 103, bookTitle: '1984', memberName: 'Emma Wilson', borrowedDate: '2025-10-20', dueDate: '2025-11-03', returnedDate: null, status: 'overdue' },
    { id: 4, bookId: 4, memberId: 101, bookTitle: 'Pride and Prejudice', memberName: 'Sarah Johnson', borrowedDate: '2025-11-01', dueDate: '2025-11-15', returnedDate: '2025-11-14', status: 'returned' },
    { id: 5, bookId: 5, memberId: 105, bookTitle: 'The Catcher in the Rye', memberName: 'Lisa Anderson', borrowedDate: '2025-11-08', dueDate: '2025-11-22', returnedDate: null, status: 'active' },
    { id: 6, bookId: 6, memberId: 104, bookTitle: 'Jane Eyre', memberName: 'David Martinez', borrowedDate: '2025-09-15', dueDate: '2025-09-29', returnedDate: null, status: 'overdue' }
  ],
  
  // Notifications system
  notifications: [
    { id: 1, type: 'overdue', message: '1984 is overdue', severity: 'warning', read: false, memberId: 103, timestamp: new Date() },
    { id: 2, type: 'due-soon', message: 'To Kill a Mockingbird due in 2 days', severity: 'info', read: false, memberId: 102, timestamp: new Date() },
    { id: 3, type: 'return-soon', message: 'The Catcher in the Rye being returned today', severity: 'success', read: true, memberId: 105, timestamp: new Date() }
  ],
  
  // Recent search history
  recentSearches: ['Gatsby', 'Fiction', 'Sarah Johnson'],
  
  // Analytics cache
  analyticsData: null
};

// Navigation and Page Management
const PageManager = {
  currentPage: 'dashboard',

  initialize() {
    this.setupEventListeners();
    this.showLoadingScreen();
    setTimeout(() => this.transitionToLogin(), 2000);
  },

  setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => this.handleNavigation(e));
    });

    // Bottom navigation (mobile)
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.addEventListener('click', (e) => this.handleNavigation(e));
    });

    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    // Modal close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => UIManager.closeModal());
    });

    // Search functionality
    const searchInput = document.querySelector('#search-books');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e));
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('change', () => this.toggleTheme());
    }

    // Add book button
    const addBookBtn = document.getElementById('add-book-btn');
    if (addBookBtn) {
      addBookBtn.addEventListener('click', () => UIManager.openAddBookModal());
    }

    // Add book form
    const addBookForm = document.getElementById('add-book-form');
    if (addBookForm) {
      addBookForm.addEventListener('submit', (e) => BookManager.handleAddBook(e));
    }

    // Sort and filter
    const sortBooks = document.getElementById('sort-books');
    if (sortBooks) {
      sortBooks.addEventListener('change', () => BookManager.handleSort());
    }

    // Smart search (Cmd+K or Ctrl+K)
    const smartSearchInput = document.getElementById('smart-search-input');
    if (smartSearchInput) {
      smartSearchInput.addEventListener('input', (e) => SearchManager.handleSmartSearch(e));
    }

    // Notification bell
    const notificationBell = document.getElementById('notification-bell');
    if (notificationBell) {
      notificationBell.addEventListener('click', () => NotificationManager.toggleCenter());
    }

    // Close notifications
    const closeNotifications = document.getElementById('close-notifications');
    if (closeNotifications) {
      closeNotifications.addEventListener('click', () => NotificationManager.closeCenter());
    }

    // Member select for insights
    const memberSelect = document.getElementById('member-select');
    if (memberSelect) {
      memberSelect.addEventListener('change', (e) => MemberInsightsManager.render(e.target.value));
    }

    // Initialize notifications
    NotificationManager.updateNotifications();
  },

  handleNavigation(e) {
    const page = e.currentTarget.dataset.page;
    if (page) {
      this.switchPage(page);
    }
  },

  switchPage(pageId) {
    // Remove active class from all pages and nav items
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Add active class to current page
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add('active');
    }

    // Add active class to navigation items
    document.querySelectorAll(`[data-page="${pageId}"]`).forEach(item => {
      item.classList.add('active');
    });

    this.currentPage = pageId;

    // Refresh page data
    switch (pageId) {
      case 'dashboard':
        DashboardManager.render();
        break;
      case 'books':
        BookManager.render();
        break;
      case 'members':
        MemberManager.render();
        break;
      case 'transactions':
        TransactionManager.render();
        break;
      case 'settings':
        SettingsManager.render();
        break;
      case 'analytics':
        AnalyticsManager.render();
        break;
      case 'member-insights':
        MemberInsightsManager.renderPage();
        break;
    }
  },

  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      UIManager.showToast('Welcome, ' + email.split('@')[0] + '!');
      this.transitionToDashboard();
    }
  },

  handleLogout() {
    if (confirm('Are you sure you want to sign out?')) {
      this.showLoadingScreen();
    }
  },

  handleSearch(e) {
    AppState.searchQuery = e.target.value.toLowerCase();
    if (this.currentPage === 'books') {
      BookManager.render();
    } else if (this.currentPage === 'members') {
      MemberManager.render();
    }
  },

  toggleTheme() {
    AppState.isDarkTheme = !AppState.isDarkTheme;
    document.body.classList.toggle('light-theme');
    UIManager.showToast('Theme toggled');
  },

  showLoadingScreen() {
    document.getElementById('loading-screen').classList.remove('hidden');
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-container').classList.add('hidden');
  },

  transitionToLogin() {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('app-container').classList.add('hidden');
  },

  transitionToDashboard() {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-container').classList.remove('hidden');
    this.switchPage('dashboard');
  }
};

// Dashboard Manager
const DashboardManager = {
  render() {
    this.renderStatCards();
    this.renderHeroCard();
    this.renderRecentTransactions();
  },

  renderStatCards() {
    const container = document.querySelector('.cards-grid');
    const totalBooks = AppState.books.reduce((sum, b) => sum + b.copies, 0);
    const booksOnLoan = AppState.transactions.filter(t => t.status === 'active').length;
    const overdueBooks = AppState.transactions.filter(t => t.status === 'overdue').length;

    container.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon total-books">
          <i class="fas fa-book"></i>
        </div>
        <div class="stat-content">
          <p class="stat-label">Total Books</p>
          <h3>${totalBooks}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon active-members">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <p class="stat-label">Active Members</p>
          <h3>${AppState.members.filter(m => m.status === 'active').length}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon active-loans">
          <i class="fas fa-hand-holding-heart"></i>
        </div>
        <div class="stat-content">
          <p class="stat-label">Books on Loan</p>
          <h3>${booksOnLoan}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon overdue">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div class="stat-content">
          <p class="stat-label">Overdue Books</p>
          <h3>${overdueBooks}</h3>
        </div>
      </div>
    `;
  },

  renderHeroCard() {
    const topBook = AppState.books.sort((a, b) => b.borrows - a.borrows)[0];
    const heroCard = document.querySelector('.hero-card');

    heroCard.innerHTML = `
      <div class="hero-content">
        <h2>Featured Collection</h2>
        <p class="hero-subtitle">Most borrowed this month</p>
        <div class="hero-book">
          <div class="book-cover" style="background: ${topBook.cover}; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-book" style="font-size: 48px; color: rgba(255,255,255,0.3);"></i>
          </div>
          <div class="hero-book-info">
            <h3>${topBook.title}</h3>
            <p>${topBook.author}</p>
            <div class="rating">
              <span class="stars">${'★'.repeat(Math.floor(topBook.rating))}${'☆'.repeat(5 - Math.floor(topBook.rating))}</span>
              <span class="rating-value">${topBook.rating}</span>
            </div>
            <p class="availability">${topBook.borrows} times borrowed</p>
          </div>
        </div>
      </div>
    `;
  },

  renderRecentTransactions() {
    const container = document.querySelector('.transaction-list');
    const recent = AppState.transactions.slice(0, 3);

    container.innerHTML = recent.map(tx => `
      <div class="transaction-item">
        <div class="transaction-info">
          <p class="transaction-title">${tx.bookTitle}</p>
          <p class="transaction-meta">${tx.memberName} • ${this.formatDate(tx.borrowedDate)}</p>
        </div>
        <span class="chip chip-${this.getStatusClass(tx.status)}">${tx.status}</span>
      </div>
    `).join('');
  },

  formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;
    return date.toLocaleDateString();
  },

  getStatusClass(status) {
    switch (status) {
      case 'returned': return 'success';
      case 'active': return 'active';
      case 'overdue': return 'warning';
      default: return 'active';
    }
  }
};

// Book Manager
const BookManager = {
  filteredBooks: [],

  render() {
    this.filteredBooks = this.getFilteredBooks();
    this.renderBooksGrid();
  },

  getFilteredBooks() {
    let books = [...AppState.books];

    if (AppState.searchQuery) {
      books = books.filter(b =>
        b.title.toLowerCase().includes(AppState.searchQuery) ||
        b.author.toLowerCase().includes(AppState.searchQuery)
      );
    }

    const sort = document.getElementById('sort-books')?.value;
    switch (sort) {
      case 'popular':
        books.sort((a, b) => b.borrows - a.borrows);
        break;
      case 'title':
        books.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        books.sort((a, b) => b.rating - a.rating);
        break;
      default:
        books.sort((a, b) => b.id - a.id);
    }

    return books;
  },

  renderBooksGrid() {
    const container = document.getElementById('books-grid');
    
    if (this.filteredBooks.length === 0) {
      container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-neutral-muted);">No books found</p>';
      return;
    }

    container.innerHTML = this.filteredBooks.map(book => `
      <div class="book-item" onclick="BookManager.openBookDetail(${book.id})">
        <div class="book-item-cover" style="background: ${book.cover}">
          ${book.title}
        </div>
        <div class="book-item-title">${book.title}</div>
        <div class="book-item-author">${book.author}</div>
        <div class="book-item-meta">
          <span>${book.rating} ★</span>
          <span>${book.available}/${book.copies}</span>
        </div>
      </div>
    `).join('');
  },

  handleSort() {
    this.render();
  },

  openBookDetail(bookId) {
    const book = AppState.books.find(b => b.id === bookId);
    if (!book) return;

    const detail = document.getElementById('book-detail');
    detail.classList.add('active');

    const content = document.getElementById('book-detail-content');
    const relatedTx = AppState.transactions.filter(t => t.bookId === bookId);

    content.innerHTML = `
      <div class="book-detail-container">
        <div class="book-detail-cover" style="background: ${book.cover}"></div>
        <div class="book-detail-info">
          <h2>${book.title}</h2>
          <p>${book.author}</p>
          <div class="rating" style="margin: 1rem 0;">
            <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
            <span class="rating-value">${book.rating}</span>
          </div>
          <p><strong>ISBN:</strong> ${book.isbn}</p>
          <p><strong>Category:</strong> ${book.category}</p>
          <p><strong>Available:</strong> <span style="color: var(--color-semantic-success)">${book.available}/${book.copies}</span></p>
          <p><strong>Times Borrowed:</strong> ${book.borrows}</p>
          <p style="margin-top: 1.5rem; line-height: 1.6;">${book.description}</p>

          <h3 style="margin-top: 2rem; color: var(--color-accent-gold);">Loan History</h3>
          ${relatedTx.length > 0 ? `
            <ul style="list-style: none; padding: 0;">
              ${relatedTx.map(tx => `
                <li style="padding: 0.5rem 0; color: var(--color-neutral-muted); font-size: var(--font-size-body-sm);">
                  ${tx.memberName} - ${tx.borrowedDate} to ${tx.dueDate}
                  <span class="chip chip-${DashboardManager.getStatusClass(tx.status)}" style="margin-left: 0.5rem;">${tx.status}</span>
                </li>
              `).join('')}
            </ul>
          ` : '<p style="color: var(--color-neutral-muted);">No loans yet</p>'}

          <div class="book-detail-actions">
            <button class="btn btn-primary">
              <i class="fas fa-download"></i> Checkout
            </button>
            <button class="btn btn-secondary">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
      </div>
    `;
  },

  handleAddBook(e) {
    e.preventDefault();
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const isbn = document.getElementById('book-isbn').value;
    const category = document.getElementById('book-category').value;
    const copies = parseInt(document.getElementById('book-copies').value);

    const newBook = {
      id: Math.max(...AppState.books.map(b => b.id)) + 1,
      title,
      author,
      isbn,
      category,
      copies,
      available: copies,
      rating: 4.0,
      borrows: 0,
      description: 'New addition to the library',
      cover: 'linear-gradient(135deg, #c39c6b 0%, #e8a76d 100%)'
    };

    AppState.books.push(newBook);
    UIManager.closeAddBookModal();
    this.render();
    UIManager.showToast('Book added successfully!');
  }
};

// Member Manager
const MemberManager = {
  render() {
    this.renderMembersTable();
  },

  renderMembersTable() {
    const tbody = document.getElementById('members-table-body');
    
    let members = AppState.members;
    if (AppState.searchQuery) {
      members = members.filter(m =>
        m.name.toLowerCase().includes(AppState.searchQuery) ||
        m.email.toLowerCase().includes(AppState.searchQuery)
      );
    }

    tbody.innerHTML = members.map((member, idx) => `
      <tr onclick="MemberManager.openMemberDetail(${member.id})">
        <td>${idx + 1}</td>
        <td><strong>${member.name}</strong></td>
        <td>${member.email}</td>
        <td class="desktop-only">${member.joined}</td>
        <td>${member.loans}</td>
        <td class="desktop-only">£${member.fines.toFixed(2)}</td>
        <td style="text-align: right;">
          <button class="btn btn-ghost btn-icon" title="View">
            <i class="fas fa-eye"></i>
          </button>
        </td>
      </tr>
    `).join('');
  },

  openMemberDetail(memberId) {
    const member = AppState.members.find(m => m.id === memberId);
    if (!member) return;

    const panel = document.getElementById('member-detail');
    panel.classList.add('active');

    const content = document.getElementById('member-detail-content');
    const memberLoans = AppState.transactions.filter(t => t.memberId === memberId);

    content.innerHTML = `
      <h2 style="color: var(--color-accent-gold); margin-bottom: 1rem;">${member.name}</h2>
      
      <div style="background: rgba(195, 156, 107, 0.05); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
        <p style="margin: 0.5rem 0;"><strong>Email:</strong> ${member.email}</p>
        <p style="margin: 0.5rem 0;"><strong>Member ID:</strong> ${member.id}</p>
        <p style="margin: 0.5rem 0;"><strong>Joined:</strong> ${member.joined}</p>
        <p style="margin: 0.5rem 0;"><strong>Status:</strong> <span style="color: ${member.status === 'active' ? 'var(--color-semantic-success)' : 'var(--color-semantic-warning)'}; text-transform: uppercase; font-weight: bold;">${member.status}</span></p>
      </div>

      <h3 style="color: var(--color-accent-gold); margin-bottom: 1rem;">Current Loans (${member.loans})</h3>
      ${memberLoans.filter(t => t.status === 'active').length > 0 ? `
        <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
          ${memberLoans.filter(t => t.status === 'active').map(loan => `
            <li style="padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 0.5rem; margin-bottom: 0.5rem;">
              <p style="margin: 0; font-weight: bold;">${loan.bookTitle}</p>
              <p style="margin: 0.25rem 0; font-size: var(--font-size-body-sm); color: var(--color-neutral-muted);">Due: ${loan.dueDate}</p>
            </li>
          `).join('')}
        </ul>
      ` : '<p style="color: var(--color-neutral-muted);">No active loans</p>'}

      <h3 style="color: var(--color-accent-gold); margin-bottom: 1rem;">Fines & Fees</h3>
      <div style="background: ${member.fines > 0 ? 'rgba(230, 123, 92, 0.1)' : 'rgba(98, 185, 131, 0.1)'}; padding: 1rem; border-radius: 0.5rem;">
        <p style="margin: 0; font-size: var(--font-size-h3); font-weight: bold; color: ${member.fines > 0 ? 'var(--color-semantic-warning)' : 'var(--color-semantic-success)'};">£${member.fines.toFixed(2)}</p>
        <p style="margin: 0.5rem 0 0 0; color: var(--color-neutral-muted); font-size: var(--font-size-body-sm);">${member.fines > 0 ? 'Outstanding balance' : 'No outstanding fees'}</p>
      </div>

      <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem;">
        <button class="btn btn-primary" onclick="MemberManager.closeMemberDetail()">Close</button>
      </div>
    `;
  },

  closeMemberDetail() {
    document.getElementById('member-detail').classList.remove('active');
  }
};

// Transaction Manager
const TransactionManager = {
  render() {
    this.renderTransactionsTable();
  },

  renderTransactionsTable() {
    const tbody = document.getElementById('transactions-table-body');
    
    let transactions = AppState.transactions;
    const statusFilter = document.getElementById('filter-status')?.value;
    
    if (statusFilter) {
      transactions = transactions.filter(t => t.status === statusFilter);
    }

    tbody.innerHTML = transactions.map(tx => `
      <tr>
        <td><strong>${tx.bookTitle}</strong></td>
        <td class="desktop-only">${tx.memberName}</td>
        <td>${tx.borrowedDate}</td>
        <td class="desktop-only">${tx.dueDate}</td>
        <td class="desktop-only">${tx.returnedDate || '—'}</td>
        <td><span class="chip chip-${DashboardManager.getStatusClass(tx.status)}">${tx.status}</span></td>
      </tr>
    `).join('');
  }
};

// Settings Manager
const SettingsManager = {
  render() {
    this.populateSettings();
  },

  populateSettings() {
    const libraryName = document.getElementById('library-name');
    const libraryLocation = document.getElementById('library-location');
    const libraryEmail = document.getElementById('library-email');

    if (libraryName) libraryName.value = 'Central Public Library';
    if (libraryLocation) libraryLocation.value = '123 Main Street, City';
    if (libraryEmail) libraryEmail.value = 'info@library.local';
  }
};

// UI Manager
const UIManager = {
  openSmartSearch() {
    const modal = document.getElementById('smart-search-modal');
    modal.classList.add('active');
    const input = document.getElementById('smart-search-input');
    input.focus();
    input.value = '';
  },

  openAddBookModal() {
    const modal = document.getElementById('add-book-modal');
    modal.classList.add('active');
    document.getElementById('book-title').focus();
  },

  closeAddBookModal() {
    const modal = document.getElementById('add-book-modal');
    modal.classList.remove('active');
    document.getElementById('add-book-form').reset();
  },

  closeModal() {
    document.querySelectorAll('.modal.active').forEach(modal => {
      modal.classList.remove('active');
    });
  },

  showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
};

// Smart Search Manager
const SearchManager = {
  handleSmartSearch(e) {
    const query = e.target.value.trim().toLowerCase();
    const resultsContainer = document.getElementById('search-results');

    if (!query) {
      // Show recent searches
      this.showRecentSearches(resultsContainer);
      return;
    }

    let results = [];

    // Search books
    const bookMatches = AppState.books.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query)
    ).map(b => ({
      type: 'book',
      title: b.title,
      subtitle: b.author,
      id: b.id,
      icon: 'fas fa-book'
    }));

    // Search members
    const memberMatches = AppState.members.filter(m =>
      m.name.toLowerCase().includes(query) ||
      m.email.toLowerCase().includes(query)
    ).map(m => ({
      type: 'member',
      title: m.name,
      subtitle: m.email,
      id: m.id,
      icon: 'fas fa-user'
    }));

    results = [...bookMatches, ...memberMatches];

    // Add quick actions
    if (query.length > 0) {
      results.push({
        type: 'action',
        title: '+ Add New Book',
        subtitle: 'Create a new book entry',
        icon: 'fas fa-plus',
        action: 'add-book'
      });
    }

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }

    resultsContainer.innerHTML = results.map((result, idx) => `
      <div class="search-result" onclick="SearchManager.handleResultClick('${result.type}', ${result.id || 'null'}, '${result.action || ''}')">
        <i class="${result.icon}"></i>
        <div class="search-result-info">
          <p class="search-result-title">${result.title}</p>
          <p class="search-result-subtitle">${result.subtitle}</p>
        </div>
        ${result.type === 'book' ? '<span class="search-result-badge">Book</span>' : result.type === 'member' ? '<span class="search-result-badge">Member</span>' : '<span class="search-result-badge">Action</span>'}
      </div>
    `).join('');
  },

  showRecentSearches(container) {
    container.innerHTML = `
      <div class="search-recents">
        <p class="search-recents-title">Recent Searches</p>
        ${AppState.recentSearches.map(search => `
          <div class="search-result" onclick="SearchManager.selectRecent('${search}')">
            <i class="fas fa-history"></i>
            <div class="search-result-info">
              <p class="search-result-title">${search}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  handleResultClick(type, id, action) {
    UIManager.closeModal();
    
    if (type === 'book') {
      BookManager.openBookDetail(id);
    } else if (type === 'member') {
      MemberManager.openMemberDetail(id);
    } else if (action === 'add-book') {
      UIManager.openAddBookModal();
    }
  },

  selectRecent(search) {
    document.getElementById('smart-search-input').value = search;
    this.handleSmartSearch({ target: { value: search } });
  }
};

// Analytics Manager
const AnalyticsManager = {
  render() {
    this.renderMostBorrowedChart();
    this.renderCirculationChart();
    this.renderOverdueChart();
    this.renderGrowthChart();
    this.renderGenreHeatmap();
    this.renderGenreChart();
  },

  renderMostBorrowedChart() {
    const container = document.getElementById('most-borrowed-chart');
    const sorted = AppState.books.sort((a, b) => b.borrows - a.borrows).slice(0, 5);
    
    container.innerHTML = sorted.map(book => `
      <div class="chart-bar">
        <div class="chart-bar-label">${book.title.substring(0, 15)}</div>
        <div class="chart-bar-container">
          <div class="chart-bar-fill" style="width: ${(book.borrows / sorted[0].borrows) * 100}%"></div>
        </div>
        <div class="chart-bar-value">${book.borrows}</div>
      </div>
    `).join('');
  },

  renderCirculationChart() {
    const container = document.getElementById('circulation-chart');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Nov'];
    const data = [45, 52, 38, 65, 72, 89];
    
    container.innerHTML = `
      <div class="line-chart">
        ${data.map((val, idx) => `
          <div class="line-chart-point" style="height: ${(val / 100) * 200}px;" title="${months[idx]}: ${val} borrows">
            <span class="line-chart-label">${months[idx]}</span>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderOverdueChart() {
    const container = document.getElementById('overdue-chart');
    const overdueCount = AppState.transactions.filter(t => t.status === 'overdue').length;
    const activeCount = AppState.transactions.filter(t => t.status === 'active').length;
    
    container.innerHTML = `
      <div class="gauge-chart">
        <div class="gauge">
          <div class="gauge-fill" style="width: ${(overdueCount / (overdueCount + activeCount)) * 100}%"></div>
        </div>
        <p class="gauge-label">${overdueCount} overdue books</p>
      </div>
    `;
  },

  renderGrowthChart() {
    const container = document.getElementById('growth-chart');
    const growth = [12, 18, 21, 25, 30, AppState.members.length];
    const months = ['6m ago', '5m ago', '4m ago', '3m ago', '2m ago', 'Now'];
    
    container.innerHTML = `
      <div class="area-chart">
        ${growth.map((val, idx) => `
          <div class="area-chart-point" style="height: ${(val / Math.max(...growth)) * 200}px;" title="${months[idx]}: ${val} members"></div>
        `).join('')}
      </div>
    `;
  },

  renderGenreHeatmap() {
    const container = document.getElementById('genre-heatmap');
    const genres = ['Fiction', 'Non-Fiction', 'Biography', 'History', 'Science'];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    let heatmapHTML = '<div class="heatmap">';
    heatmapHTML += '<div class="heatmap-row header">';
    heatmapHTML += '<div class="heatmap-cell"></div>';
    days.forEach(day => {
      heatmapHTML += `<div class="heatmap-cell header">${day}</div>`;
    });
    heatmapHTML += '</div>';
    
    genres.forEach(genre => {
      heatmapHTML += '<div class="heatmap-row">';
      heatmapHTML += `<div class="heatmap-cell header">${genre}</div>`;
      for (let i = 0; i < 7; i++) {
        const intensity = Math.floor(Math.random() * 5);
        heatmapHTML += `<div class="heatmap-cell" style="opacity: ${0.3 + (intensity * 0.14)};" title="${genre} - ${day}"></div>`;
      }
      heatmapHTML += '</div>';
    });
    heatmapHTML += '</div>';
    
    container.innerHTML = heatmapHTML;
  },

  renderGenreChart() {
    const container = document.getElementById('genre-chart');
    const genres = { Fiction: 245, 'Non-Fiction': 156, Biography: 89, History: 76, Science: 54 };
    const maxValue = Math.max(...Object.values(genres));
    
    container.innerHTML = Object.entries(genres).map(([genre, count]) => `
      <div class="chart-item">
        <div class="chart-item-bar" style="width: ${(count / maxValue) * 100}%">
          <span class="chart-item-value">${count}</span>
        </div>
        <div class="chart-item-label">${genre}</div>
      </div>
    `).join('');
  }
};

// Member Insights Manager
const MemberInsightsManager = {
  currentMemberId: null,

  renderPage() {
    const select = document.getElementById('member-select');
    select.innerHTML = '<option value="">Select a member...</option>' + 
      AppState.members.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  },

  render(memberId) {
    if (!memberId) {
      document.getElementById('member-insights-content').innerHTML = '<p style="text-align: center; color: var(--color-neutral-muted); padding: 2rem;">Select a member to view insights</p>';
      return;
    }

    this.currentMemberId = parseInt(memberId);
    const member = AppState.members.find(m => m.id === this.currentMemberId);
    const memberTransactions = AppState.transactions.filter(t => t.memberId === this.currentMemberId);
    
    const activityScore = Math.min(100, Math.floor((memberTransactions.length / 6) * 100));
    const borrowingFreq = memberTransactions.length > 0 ? 'Regular' : 'Inactive';
    const favoriteGenres = this.getFavoriteGenres(memberTransactions);
    
    const content = document.getElementById('member-insights-content');
    content.innerHTML = `
      <div class="insights-grid">
        <!-- Member Health Score -->
        <div class="insight-card">
          <h3>Member Health Score</h3>
          <div class="health-score">
            <div class="score-circle" style="background: conic-gradient(#c39c6b ${activityScore * 3.6}deg, rgba(195,156,107,0.1) 0deg)">
              <span class="score-value">${activityScore}</span>
            </div>
            <p class="score-label">${activityScore > 70 ? 'Excellent' : activityScore > 40 ? 'Good' : 'Needs Engagement'}</p>
          </div>
        </div>

        <!-- Activity Timeline -->
        <div class="insight-card">
          <h3>Activity Timeline</h3>
          <div class="timeline">
            ${memberTransactions.slice(0, 5).map((tx, idx) => `
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <p class="timeline-title">${tx.bookTitle}</p>
                  <p class="timeline-date">${tx.borrowedDate}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Borrowing Pattern -->
        <div class="insight-card">
          <h3>Borrowing Pattern</h3>
          <div class="pattern-stats">
            <div class="pattern-stat">
              <span class="pattern-value">${memberTransactions.length}</span>
              <span class="pattern-label">Total Borrows</span>
            </div>
            <div class="pattern-stat">
              <span class="pattern-value">${memberTransactions.filter(t => t.status === 'active').length}</span>
              <span class="pattern-label">Active Loans</span>
            </div>
            <div class="pattern-stat">
              <span class="pattern-value">${borrowingFreq}</span>
              <span class="pattern-label">Frequency</span>
            </div>
          </div>
        </div>

        <!-- Favorite Genres -->
        <div class="insight-card">
          <h3>Favorite Genres</h3>
          <div class="favorite-genres">
            ${favoriteGenres.length > 0 ? favoriteGenres.map(genre => `
              <span class="genre-tag">${genre}</span>
            `).join('') : '<p style="color: var(--color-neutral-muted);">No borrowing history</p>'}
          </div>
        </div>

        <!-- Overdue Status -->
        <div class="insight-card ${memberTransactions.filter(t => t.status === 'overdue').length > 0 ? 'warning' : 'success'}">
          <h3>Overdue Status</h3>
          <div class="status-badge">
            <p class="status-value">${memberTransactions.filter(t => t.status === 'overdue').length}</p>
            <p class="status-label">Overdue Books</p>
          </div>
        </div>

        <!-- Fine Summary -->
        <div class="insight-card">
          <h3>Fine Summary</h3>
          <div class="fine-summary">
            <p class="fine-amount">£${member.fines.toFixed(2)}</p>
            <p class="fine-status">${member.fines > 0 ? 'Outstanding' : 'No outstanding fines'}</p>
          </div>
        </div>
      </div>
    `;
  },

  getFavoriteGenres(transactions) {
    const genres = {};
    transactions.forEach(tx => {
      const book = AppState.books.find(b => b.id === tx.bookId);
      if (book) {
        genres[book.category] = (genres[book.category] || 0) + 1;
      }
    });
    
    return Object.entries(genres)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(entry => entry[0]);
  }
};

// Notification Manager
const NotificationManager = {
  updateNotifications() {
    const count = AppState.notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notification-count');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'block' : 'none';
    }
    this.checkOverdueAlerts();
  },

  checkOverdueAlerts() {
    const overdue = AppState.transactions.filter(t => t.status === 'overdue');
    overdue.forEach(tx => {
      if (!AppState.notifications.some(n => n.id === `overdue-${tx.id}`)) {
        AppState.notifications.unshift({
          id: `overdue-${tx.id}`,
          type: 'overdue',
          message: `${tx.bookTitle} is overdue from ${tx.memberName}`,
          severity: 'warning',
          read: false,
          memberId: tx.memberId,
          timestamp: new Date()
        });
      }
    });
  },

  toggleCenter() {
    const center = document.getElementById('notification-center');
    center.classList.toggle('active');
    if (center.classList.contains('active')) {
      this.renderNotifications();
    }
  },

  closeCenter() {
    document.getElementById('notification-center').classList.remove('active');
  },

  renderNotifications() {
    const container = document.getElementById('notifications-list');
    
    if (AppState.notifications.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--color-neutral-muted); padding: 2rem;">No notifications</p>';
      return;
    }

    container.innerHTML = AppState.notifications.map(notif => `
      <div class="notification-item notification-${notif.severity}">
        <i class="fas fa-${this.getSeverityIcon(notif.severity)}"></i>
        <div class="notification-content">
          <p class="notification-message">${notif.message}</p>
          <p class="notification-time">${this.formatTime(notif.timestamp)}</p>
        </div>
        <button class="btn btn-icon btn-sm" onclick="NotificationManager.markAsRead('${notif.id}')">
          <i class="fas fa-check"></i>
        </button>
      </div>
    `).join('');
  },

  getSeverityIcon(severity) {
    switch (severity) {
      case 'warning': return 'exclamation-circle';
      case 'error': return 'times-circle';
      case 'success': return 'check-circle';
      default: return 'info-circle';
    }
  },

  formatTime(timestamp) {
    const now = new Date();
    const diff = Math.floor((now - timestamp) / 1000);
    
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  },

  markAsRead(notifId) {
    const notif = AppState.notifications.find(n => n.id === notifId);
    if (notif) {
      notif.read = true;
      this.updateNotifications();
      this.renderNotifications();
    }
  }
};

// Keyboard shortcuts enhancement
document.addEventListener('keydown', (e) => {
  // Cmd+K / Ctrl+K for smart search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    UIManager.openSmartSearch();
  }
});

// Update notification bell with 3D tilt effect for book covers
function addTiltEffect() {
  const bookCovers = document.querySelectorAll('.book-item-cover');
  bookCovers.forEach(cover => {
    cover.addEventListener('mousemove', (e) => {
      const rect = cover.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const x = (e.clientX - rect.left - centerX) / 10;
      const y = (e.clientY - rect.top - centerY) / 10;
      
      cover.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    
    cover.addEventListener('mouseleave', () => {
      cover.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });
}

// Enhanced table interactions manager
const TableManager = {
  selectedRows: new Set(),
  tableDensity: 'comfortable',

  initializeTableEnhancements() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      // Make header sticky
      table.style.borderCollapse = 'collapse';
      const thead = table.querySelector('thead');
      if (thead) {
        thead.style.position = 'sticky';
        thead.style.top = '0';
        thead.style.zIndex = '10';
      }

      // Add multi-select checkboxes
      this.addMultiSelectCheckboxes(table);
      
      // Add row selection
      const tbody = table.querySelector('tbody');
      if (tbody) {
        tbody.querySelectorAll('tr').forEach((row, idx) => {
          row.addEventListener('click', (e) => {
            if (e.target.type !== 'checkbox') {
              this.toggleRowSelection(row);
            }
          });
        });
      }
    });
  },

  addMultiSelectCheckboxes(table) {
    const thead = table.querySelector('thead tr');
    if (!thead) return;

    // Add checkbox header
    const checkboxTh = document.createElement('th');
    checkboxTh.style.width = '40px';
    checkboxTh.style.paddingLeft = '0';
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.addEventListener('change', () => this.selectAllRows(table, selectAllCheckbox.checked));
    checkboxTh.appendChild(selectAllCheckbox);
    thead.insertBefore(checkboxTh, thead.firstChild);

    // Add checkboxes to rows
    const tbody = table.querySelector('tbody');
    if (tbody) {
      tbody.querySelectorAll('tr').forEach((row, idx) => {
        const checkboxTd = document.createElement('td');
        checkboxTd.style.paddingLeft = '0';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => this.updateSelectAllCheckbox(table));
        checkboxTd.appendChild(checkbox);
        row.insertBefore(checkboxTd, row.firstChild);
      });
    }
  },

  toggleRowSelection(row) {
    row.classList.toggle('selected');
    if (row.classList.contains('selected')) {
      this.selectedRows.add(row);
    } else {
      this.selectedRows.delete(row);
    }
  },

  selectAllRows(table, selectAll) {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      if (selectAll) {
        row.classList.add('selected');
        this.selectedRows.add(row);
      } else {
        row.classList.remove('selected');
        this.selectedRows.delete(row);
      }
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.checked = selectAll;
    });
  },

  updateSelectAllCheckbox(table) {
    const allCheckboxes = table.querySelectorAll('tbody tr input[type="checkbox"]');
    const checkedCount = Array.from(allCheckboxes).filter(cb => cb.checked).length;
    const headerCheckbox = table.querySelector('thead input[type="checkbox"]');
    if (headerCheckbox) {
      headerCheckbox.checked = checkedCount === allCheckboxes.length && allCheckboxes.length > 0;
    }
  },

  setTableDensity(density) {
    this.tableDensity = density;
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const cells = table.querySelectorAll('th, td');
      if (density === 'compact') {
        cells.forEach(cell => {
          cell.style.padding = '8px 12px';
        });
      } else {
        cells.forEach(cell => {
          cell.style.padding = 'var(--spacing-lg)';
        });
      }
    });
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  PageManager.initialize();
  TableManager.initializeTableEnhancements();
  addTiltEffect();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // ESC to close modals
  if (e.key === 'Escape') {
    UIManager.closeModal();
    MemberManager.closeMemberDetail();
    NotificationManager.closeCenter();
  }

  // Ctrl+K to focus search
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.querySelector('#search-books');
    if (searchInput) searchInput.focus();
  }
});
