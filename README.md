# Bible Threads — Native App Project

This is a real Expo/React Native app project for the Bible Threads resource. It is not a mobile browser wrapper.

## Fastest way to test on iPhone or Android

1. Install **Expo Go** from the App Store or Google Play.
2. On your computer, unzip this folder.
3. Open Terminal in the folder.
4. Run:

```bash
npm install
npx expo start
```

5. Scan the QR code with Expo Go.

## To make an installable app file

Expo uses EAS Build:

```bash
npm install -g eas-cli
eas login
eas build --platform ios
# or
 eas build --platform android
```

For iPhone App Store/TestFlight builds, Apple requires an Apple Developer account.
For Android, EAS can produce an APK/AAB depending on settings.

## What is included

- Full thread data from the v22 Bible Threads file
- Phone-native navigation
- Thread home screen
- Overview screen
- Segment reader
- Verse anchors that expand on tap
- Study lens questions
- Reading path sections
- Search across threads, segments, and verse anchors

## What this deliberately avoids

- No WebView
- No horizontal desktop layout
- No browser-only service worker issues
- No fragile DOM click handlers
