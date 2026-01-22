# UNAVO App - Component Enhancements

## New Components Added

### 1. ErrorBoundary Component
- Location: `src/components/ErrorBoundary.jsx`
- Purpose: Catches React errors and displays a friendly error page
- Features: Smooth animations, reload functionality

### 2. LoadingSpinner Component
- Location: `src/components/LoadingSpinner.jsx`
- Purpose: Reusable loading indicator for async operations
- Features: Configurable size (sm, md, lg), custom text

### 3. Toast Notification System
- Location: `src/components/Toast.jsx`
- Purpose: Display user notifications (success, error, warning, info)
- Features: Auto-dismiss, multiple toasts, smooth animations

### 4. Enhanced Package Scripts
- Added `lint` and `format` commands
- Added `clean` command to clear build cache
- Added `android:run` and `ios:run` for quick mobile deployment

## Usage Examples

### ErrorBoundary
```jsx
import ErrorBoundary from './components/ErrorBoundary';

<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### LoadingSpinner
```jsx
import LoadingSpinner from './components/LoadingSpinner';

<LoadingSpinner size="lg" text="Processing..." />
```

### Toast
```jsx
import { ToastProvider, useToast } from './components/Toast';

// In your root component
<ToastProvider>
  <App />
</ToastProvider>

// In any component
const { addToast } = useToast();
addToast('Order placed!', 'success');
```
