# Firestore 400 Error Troubleshooting Guide

## Issue: 400 Bad Request Error
You're experiencing a 400 Bad Request error when trying to connect to Firestore. This is typically caused by security rules or configuration issues.

## Quick Fix Steps

### 1. Set Up Firestore Security Rules

**Go to Firebase Console:**
1. Navigate to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `mvsitgiant`
3. Go to **Firestore Database** in the left sidebar
4. Click on **Rules** tab
5. Replace the existing rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to contact submissions
    match /contact_submissions/{document} {
      allow read, write: if true;
    }
    
    // Allow read/write access to newsletter subscriptions
    match /newsletter_subscriptions/{document} {
      allow read, write: if true;
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

6. Click **Publish** to save the rules

### 2. Verify Firestore Database is Created

**In Firebase Console:**
1. Go to **Firestore Database**
2. If you see "Create database", click it
3. Choose **Start in production mode** (we'll update rules above)
4. Select a location (choose closest to your users)
5. Click **Done**

### 3. Check Firebase Project Configuration

**Verify your project settings:**
1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Make sure your web app is listed
4. If not, click **Add app** and select **Web** (</>) icon
5. Register your app with a nickname
6. Copy the config object and verify it matches your `firebase.ts`

### 4. Test the Connection

**Create a simple test:**
1. Open your browser's Developer Tools (F12)
2. Go to Console tab
3. Try submitting a contact form or newsletter subscription
4. Check for any error messages in the console

## Common Error Codes and Solutions

### Error: `permission-denied`
**Cause:** Firestore security rules are blocking the request
**Solution:** Update security rules as shown in step 1 above

### Error: `unavailable`
**Cause:** Firestore service is down or network issues
**Solution:** Check Firebase status page, try again later

### Error: `invalid-argument`
**Cause:** Invalid data being sent to Firestore
**Solution:** Check data validation in the service files

### Error: `not-found`
**Cause:** Collection or document doesn't exist
**Solution:** Firestore will create collections automatically, this shouldn't happen

## Advanced Troubleshooting

### 1. Check Network Tab
1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Try submitting a form
4. Look for requests to `firestore.googleapis.com`
5. Check the response status and error details

### 2. Enable Debug Logging
Add this to your browser console to see detailed Firebase logs:
```javascript
localStorage.setItem('firebase:debug', 'true');
```

### 3. Test with Firebase CLI (Optional)
If you have Firebase CLI installed:
```bash
firebase login
firebase use mvsitgiant
firebase firestore:rules:deploy firestore.rules
```

## Security Rules Explanation

The provided rules allow:
- **Read/Write access** to `contact_submissions` collection
- **Read/Write access** to `newsletter_subscriptions` collection
- **Deny access** to all other collections

**For Production:** Consider implementing more restrictive rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow only writes to contact submissions (no reads from client)
    match /contact_submissions/{document} {
      allow write: if true;
      allow read: if false;
    }
    
    // Allow only writes to newsletter subscriptions (no reads from client)
    match /newsletter_subscriptions/{document} {
      allow write: if true;
      allow read: if false;
    }
  }
}
```

## Testing the Fix

### 1. Test Contact Form
1. Go to your contact page
2. Fill out and submit the form
3. Check browser console for success/error messages
4. Check Firebase Console > Firestore Database for new documents

### 2. Test Newsletter Subscription
1. Go to your website footer
2. Enter an email and click Subscribe
3. Check browser console for success/error messages
4. Check Firebase Console > Firestore Database for new documents

## Still Having Issues?

### Check These:
1. **Internet Connection:** Ensure stable internet connection
2. **Browser Console:** Look for JavaScript errors
3. **Firebase Status:** Check [Firebase Status Page](https://status.firebase.google.com/)
4. **Project ID:** Verify `mvsitgiant` is correct in all places
5. **API Key:** Ensure API key is valid and not restricted

### Contact Support:
If issues persist, provide:
1. Browser console error messages
2. Network tab request/response details
3. Firebase project ID and configuration
4. Steps to reproduce the issue

## Prevention for Future

1. **Monitor Firebase Console:** Regularly check for errors
2. **Test Regularly:** Test forms after any changes
3. **Backup Rules:** Keep a copy of working security rules
4. **Use Environment Variables:** Consider using environment variables for sensitive config
5. **Implement Logging:** Add proper error logging for production monitoring
