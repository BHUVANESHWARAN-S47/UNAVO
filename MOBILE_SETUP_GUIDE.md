# 📱 Mobile App Development Setup Guide

## Setting Up Android Emulator for UNAVO

### Step 1: Install Android Studio

1. **Download Android Studio**
   - Go to: https://developer.android.com/studio
   - Click "Download Android Studio"
   - Run the installer

2. **During Installation**
   - ✅ Check "Android SDK"
   - ✅ Check "Android SDK Platform"
   - ✅ Check "Android Virtual Device"
   - Click Next and Install

3. **First Launch Setup**
   - Choose "Standard" installation
   - Select theme (Light/Dark)
   - Click "Finish" and wait for downloads

---

### Step 2: Set Up Android SDK

1. **Open Android Studio**
2. Click "More Actions" → "SDK Manager"
3. **Install Required SDK Packages**:
   
   **SDK Platforms Tab:**
   - ✅ Android 13.0 (Tiramisu) - API Level 33
   - ✅ Android 12.0 (S) - API Level 31
   - ✅ Android 11.0 (R) - API Level 30

   **SDK Tools Tab:**
   - ✅ Android SDK Build-Tools
   - ✅ Android SDK Command-line Tools
   - ✅ Android Emulator
   - ✅ Android SDK Platform-Tools
   - ✅ Intel x86 Emulator Accelerator (HAXM installer)

4. **Click "Apply"** and wait for downloads

---

### Step 3: Create Android Virtual Device (AVD)

1. In Android Studio, click "More Actions" → "Virtual Device Manager"
2. Click "Create Device"
3. **Select Hardware**:
   - Choose "Pixel 5" or "Pixel 6" (recommended)
   - Click "Next"
4. **Select System Image**:
   - Choose "Tiramisu" (Android 13, API 33)
   - Click "Download" if not downloaded
   - Click "Next"
5. **Verify Configuration**:
   - Name: "Pixel_5_API_33"
   - Startup orientation: Portrait
   - Click "Finish"

---

### Step 4: Configure Environment Variables

1. **Open System Environment Variables**:
   ```powershell
   # Run in PowerShell as Administrator
   rundll32 sysdm.cpl,EditEnvironmentVariables
   ```

2. **Add ANDROID_HOME**:
   - Click "New" under System variables
   - Variable name: `ANDROID_HOME`
   - Variable value: `C:\Users\hyper\AppData\Local\Android\Sdk`
   - Click OK

3. **Update PATH**:
   - Select "Path" → Click "Edit"
   - Click "New" and add:
     - `%ANDROID_HOME%\platform-tools`
     - `%ANDROID_HOME%\emulator`
     - `%ANDROID_HOME%\tools`
     - `%ANDROID_HOME%\tools\bin`
   - Click OK

4. **Restart VS Code** for changes to take effect

---

### Step 5: Install Required Dependencies

Run these commands in VS Code terminal:

```powershell
# Install Capacitor CLI globally
npm install -g @capacitor/cli

# Install project dependencies (if not already done)
npm install

# Add Android platform
npx cap add android

# Sync web assets with native project
npx cap sync android
```

---

### Step 6: Configure Gradle (if needed)

1. Open `android/gradle.properties`
2. Add these lines if not present:
   ```properties
   android.useAndroidX=true
   android.enableJetifier=true
   ```

---

### Step 7: Start the Emulator

**Option 1: From Android Studio**
1. Open Android Studio
2. Click "Device Manager"
3. Click ▶️ (Play button) next to your AVD
4. Wait for emulator to boot

**Option 2: From Command Line**
```powershell
# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_5_API_33
```

---

### Step 8: Run UNAVO App on Emulator

```powershell
# Build the web app
npm run build

# Sync with Android
npx cap sync android

# Open in Android Studio
npx cap open android

# Then click Run (▶️) in Android Studio
```

**OR directly run:**
```powershell
npm run build:mobile
npm run android:open
```

---

### Step 9: Live Reload Development

For faster development with live reload:

1. **Start Vite dev server**:
   ```powershell
   npm run dev
   ```
   Note the URL (usually `http://localhost:5173`)

2. **Update capacitor.config.json**:
   ```json
   {
     "server": {
       "url": "http://10.0.2.2:5173",
       "cleartext": true
     }
   }
   ```
   Note: `10.0.2.2` is the special IP for localhost on Android emulator

3. **Sync and run**:
   ```powershell
   npx cap sync android
   npx cap open android
   ```

4. **Run the app** in Android Studio
5. **Make changes** in VS Code - app will auto-reload!

---

### Alternative: Use Chrome DevTools for Testing

For quick testing without emulator:

1. **Run dev server**:
   ```powershell
   npm run dev
   ```

2. **Open Chrome DevTools**:
   - Press `F12`
   - Click device toggle button (📱)
   - Select mobile device (Pixel 5, iPhone, etc.)
   - Navigate to `http://localhost:5173`

3. **Test mobile features**:
   - Responsive design
   - Touch gestures
   - Mobile UI

---

### Troubleshooting

#### Emulator not starting:
```powershell
# Check if HAXM is installed
sc query intelhaxm

# If not, install from:
# Android Studio → SDK Manager → SDK Tools → Intel HAXM
```

#### ADB not recognized:
```powershell
# Restart PowerShell after setting environment variables
# Or temporarily add to PATH:
$env:PATH += ";C:\Users\hyper\AppData\Local\Android\Sdk\platform-tools"
```

#### Port already in use:
```powershell
# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F
```

#### Gradle build fails:
```powershell
# Clear Gradle cache
cd android
./gradlew clean

# Or in PowerShell:
cd android
.\gradlew.bat clean
```

---

### VS Code Extensions (Recommended)

Install these extensions for better mobile development:

1. **Android iOS Emulator** (by DiemasMichiels)
   - Run emulators directly from VS Code

2. **React Native Tools** (by Microsoft)
   - Debugging support

3. **ES7+ React/Redux/React-Native snippets**
   - Code snippets

4. **Tailwind CSS IntelliSense**
   - CSS autocomplete

---

### Quick Commands Reference

```powershell
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run build:mobile          # Build and sync to mobile

# Capacitor
npx cap add android           # Add Android platform
npx cap sync android          # Sync web to Android
npx cap open android          # Open in Android Studio
npx cap run android           # Build and run on device

# Emulator
emulator -list-avds           # List emulators
emulator -avd <name>          # Start emulator
adb devices                   # List connected devices
adb logcat                    # View Android logs
```

---

### Next Steps After Setup

1. ✅ Test app on emulator
2. ✅ Test GPS/location features
3. ✅ Test camera/photo upload
4. ✅ Test QR code scanning
5. ✅ Optimize performance
6. ✅ Build release APK
7. ✅ Deploy to Play Store

---

### Building Release APK

```powershell
# Generate release APK
cd android
.\gradlew.bat assembleRelease

# APK location:
# android/app/build/outputs/apk/release/app-release-unsigned.apk
```

---

### Resources

- **Android Studio**: https://developer.android.com/studio
- **Capacitor Docs**: https://capacitorjs.com/docs
- **Android Emulator Guide**: https://developer.android.com/studio/run/emulator
- **Capacitor Android**: https://capacitorjs.com/docs/android

---

*Setup guide for UNAVO mobile development*  
*Last updated: January 14, 2026*
