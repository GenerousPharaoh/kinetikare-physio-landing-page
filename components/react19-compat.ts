/**
 * React 19 Compatibility Patch
 * 
 * This file adds compatibility for libraries that haven't been updated to support React 19's
 * breaking changes. Import this file in your client component wrappers or top-level client files.
 */

// Import the Ant Design React 19 patch
import '@ant-design/v5-patch-for-react-19';

// Add custom patches for any other libraries if needed
// For example, if another library uses element.ref directly

// This is a no-op export so the file can be imported
export default function ReactCompat() {
  return null;
} 