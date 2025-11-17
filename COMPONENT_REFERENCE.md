# Component Reference Guide

## Quick Start
1. Open `bygithub.html` in your browser
2. Login with any email/password (demo mode)
3. Navigate using sidebar (desktop) or bottom nav (mobile)

## File Overview

### bygithub.html (Main Entry Point)
Complete HTML structure with all pages:
- Loading screen with animated logo
- Login screen with form
- Dashboard with hero card & stats
- Books catalog with grid view
- Members management table
- Transactions history
- Settings panel
- Member detail side panel
- Add book modal

### styles.css (Design System)
1800+ lines of production-ready CSS:
- Design tokens (colors, typography, spacing)
- Component styles (buttons, cards, modals, tables)
- Responsive layouts (mobile, tablet, desktop)
- Animations and transitions
- Accessibility features
- Dark/light theme support

### app.js (Application Logic)
Complete JavaScript application:
- **AppState:** Central state management for books, members, transactions
- **PageManager:** Navigation and page switching
- **DashboardManager:** Dashboard rendering and statistics
- **BookManager:** Book grid, search, sort, detail view
- **MemberManager:** Member table and detail panel
- **TransactionManager:** Transaction table with filtering
- **SettingsManager:** Settings page population
- **UIManager:** Modal and toast notifications

## Usage Examples

### Switch to a Page
```javascript
PageManager.switchPage('books');
```

### Add a Book (Demo)
```javascript
AppState.books.push({
  id: 7,
  title: 'New Book',
  author: 'Author Name',
  rating: 4.5,
  copies: 3,
  ...
});
BookManager.render();
```

### Show Toast Notification
```javascript
UIManager.showToast('Book added successfully!');
```

### Access Current Data
```javascript
console.log(AppState.books);
console.log(AppState.members);
console.log(AppState.transactions);
```

## CSS Class Reference

### Layout
- `.app-container` - Main layout grid (sidebar + content)
- `.sidebar` - Left navigation sidebar
- `.main-content` - Right main content area
- `.page` - Page container (display toggled)
- `.page.active` - Currently visible page

### Components
- `.btn` - Base button
- `.btn-primary` - Primary action button (gold)
- `.btn-secondary` - Secondary action (outlined)
- `.btn-ghost` - Ghost button (transparent)
- `.btn-icon` - Icon-only button
- `.btn-large` - Large padded button

- `.card` - Glass-morphism card
- `.stat-card` - Statistics card with icon
- `.hero-card` - Large featured card
- `.modal` - Modal dialog
- `.modal.active` - Visible modal
- `.side-panel` - Side detail panel
- `.side-panel.active` - Open side panel

### Form Elements
- `.form-group` - Form field wrapper
- `.input` - Text input
- `.select` - Dropdown select
- `.search-box` - Search input with icon
- `.settings-toggle` - Checkbox toggle

### Tables
- `.members-table` - Member list table
- `.transactions-table` - Transaction history table
- `table thead` - Table header
- `table tbody tr:hover` - Hoverable rows

### Status Indicators
- `.chip` - Badge/chip component
- `.chip-success` - Green (returned)
- `.chip-active` - Blue (active)
- `.chip-warning` - Orange (overdue)

### Utilities
- `.hidden` - Display none
- `.mobile-only` - Show on mobile only
- `.desktop-only` - Hide on mobile
- `.active` - Active/selected state

## Responsive Classes

```html
<!-- Hide on mobile, show on desktop -->
<span class="desktop-only">Desktop text</span>

<!-- Show on mobile, hide on desktop -->
<span class="mobile-only">Mobile text</span>
```

## Data Structure

### Book Object
```javascript
{
  id: 1,
  title: 'Book Title',
  author: 'Author Name',
  isbn: '978-0-1234567-89',
  category: 'Fiction',
  rating: 4.8,
  copies: 5,
  available: 3,
  borrows: 245,
  description: 'Description...',
  cover: 'linear-gradient(...)'
}
```

### Member Object
```javascript
{
  id: 101,
  name: 'John Doe',
  email: 'john@email.com',
  joined: '2023-05-15',
  loans: 2,
  fines: 2.50,
  status: 'active' // or 'suspended'
}
```

### Transaction Object
```javascript
{
  id: 1,
  bookId: 1,
  memberId: 101,
  bookTitle: 'Book Title',
  memberName: 'John Doe',
  borrowedDate: '2025-11-05',
  dueDate: '2025-11-19',
  returnedDate: null,
  status: 'active' // or 'returned', 'overdue'
}
```

## Event Listeners

### Navigation
- Click `.nav-item` → Switch page
- Click `.bottom-nav-item` → Switch page (mobile)

### Forms
- Submit `#login-form` → Handle login
- Submit `#add-book-form` → Add new book
- Change `#sort-books` → Sort books
- Change `#filter-status` → Filter transactions
- Input `#search-books` → Search books
- Input `#search-members` → Search members

### Modals
- Click `[data-close-modal]` → Close modal
- Press `Escape` → Close modal/panel

### Other
- Click `#logout-btn` → Sign out
- Change `#theme-toggle` → Toggle theme

## Color Usage Guide

| Color | Usage |
|-------|-------|
| `--color-accent-gold` | Primary buttons, headings, active states |
| `--color-semantic-success` | Success states, active loans |
| `--color-semantic-warning` | Warnings, overdue items, suspended |
| `--color-semantic-error` | Errors, critical alerts |
| `--color-semantic-info` | Info messages, member count |

## Mobile Considerations

- Minimum touch target: 40px × 40px
- Bottom navigation for primary navigation
- Single-column layouts
- Full-width inputs and buttons
- Collapsed sidebar navigation
- Simplified table views
- Side panel slides from right

## Desktop Enhancements

- Permanent sidebar navigation
- Multi-column layouts
- Hover effects on interactive elements
- Side panels for details
- Full table views with all columns
- Keyboard shortcuts (Escape, Ctrl+K)

## Accessibility Features

- Semantic HTML (`<h1>`, `<nav>`, `<main>`, etc.)
- `aria-hidden` attributes on decorative elements
- Focus indicators on interactive elements
- ARIA labels on buttons and form fields
- Color not the only indicator (icons + text)
- Keyboard navigation support
- Sufficient color contrast ratios

---

**Need Help?**
- Review demo data in `app.js` for structure examples
- Check CSS custom properties in `styles.css` for token values
- Examine modal/form HTML in `bygithub.html` for patterns
