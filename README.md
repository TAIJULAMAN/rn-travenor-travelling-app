# 🌍 Travenor - Travel Booking App

A beautiful and modern React Native travel booking application built with Expo. Travenor allows users to explore destinations, book trips, and manage their travel experiences with an intuitive and visually stunning interface.

## ✨ Features

### 🏠 Core Features
- **Onboarding Experience**: Smooth multi-screen onboarding with "Next" and "Get Started" buttons
- **Authentication Flow**: Complete sign in, sign up, forgot password, OTP verification, and password reset
- **Home Screen**: Featured destinations, popular places, and personalized recommendations
- **Destination Discovery**: Browse and search destinations with filters and categories
- **Destination Details**: Comprehensive destination information with photo gallery and booking options
- **Search Functionality**: Advanced search with voice input support
- **Messages & Chat**: Real-time messaging with online status indicators and typing notifications
- **User Profile**: Profile management with edit capabilities, bookmarks, and trip history

### 📅 Booking System
- **Interactive Calendar**: Date selection with month navigation
- **Guest Management**: Easy guest counter with +/- controls
- **Checkout Process**: Contact information and special requests
- **Payment Integration**: Multiple payment methods (Credit Card, PayPal, Google Pay)
- **Booking Confirmation**: Success modal with booking details

### 🎨 Design Highlights
- Modern and clean UI with consistent design language
- Orange accent color (#FF6B35) throughout the app
- Smooth animations and transitions
- Responsive layouts for different screen sizes
- Custom icons and illustrations
- Shadow effects and glassmorphism

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TAIJULAMAN/rn-travenor-travelling-app.git
   cd rn-travenor-travelling-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## 📱 App Structure

```
rn-travenor-travelling-app/
├── app/
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── home.tsx         # Home screen
│   │   ├── destination.tsx  # Destinations listing
│   │   ├── search.tsx       # Search screen
│   │   ├── messages.tsx     # Messages list
│   │   └── profile.tsx      # User profile
│   ├── onboarding1.tsx      # Onboarding screens
│   ├── onboarding2.tsx
│   ├── onboarding3.tsx
│   ├── sign-in.tsx          # Authentication screens
│   ├── sign-up.tsx
│   ├── forgot-password.tsx
│   ├── otp-verification.tsx
│   ├── reset-password.tsx
│   ├── destination-details.tsx  # Destination detail page
│   ├── booking.tsx          # Booking calendar
│   ├── checkout.tsx         # Checkout form
│   ├── payment.tsx          # Payment processing
│   ├── chat-detail.tsx      # Chat conversation
│   ├── notification.tsx     # Notifications
│   ├── profile-edit.tsx     # Edit profile
│   ├── bookmarked.tsx       # Saved destinations
│   └── previous-trips.tsx   # Trip history
├── components/
│   ├── BestDestination.tsx  # Destination cards component
│   └── PopularPlaces.tsx    # Popular places component
├── assets/
│   ├── destinations/        # Destination images
│   ├── avatar/             # User avatars
│   └── images/             # App images
└── README.md
```

## 🎯 Key Screens

### Authentication
- **Sign In**: Email/password login with social auth options
- **Sign Up**: Registration with terms acceptance
- **Forgot Password**: Email-based password recovery
- **OTP Verification**: 4-digit code verification
- **Reset Password**: New password creation with requirements

### Main App
- **Home**: Featured destinations and popular places
- **Destinations**: Grid view with search and filters
- **Search**: Advanced search with voice input
- **Messages**: Chat list with online indicators
- **Profile**: User info, stats, and menu options

### Booking Flow
1. **Destination Details**: View destination info and gallery
2. **Booking**: Select date and number of guests
3. **Checkout**: Enter contact details and review booking
4. **Payment**: Choose payment method and complete transaction
5. **Success**: Confirmation modal with booking details

## 🛠️ Technologies Used

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Icons**: @expo/vector-icons (Ionicons)
- **Styling**: StyleSheet API
- **State Management**: React Hooks (useState)

## 🎨 Design System

### Colors
- **Primary**: #FF6B35 (Orange)
- **Secondary**: #24BAEC (Blue)
- **Text Primary**: #1B1E28 (Dark Gray)
- **Text Secondary**: #7D848D (Medium Gray)
- **Background**: #FFFFFF (White)
- **Background Secondary**: #F7F7F9 (Light Gray)
- **Success**: #4CAF50 (Green)
- **Warning**: #FFD700 (Gold)

### Typography
- **Headers**: 700 weight, 20-32px
- **Body**: 400-600 weight, 14-16px
- **Captions**: 400 weight, 12px

## 📦 Available Scripts

```bash
# Start development server
npm start

# Start for web
npm run web

# Start for Android
npm run android

# Start for iOS
npm run ios

# Run tests
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Taijul Aman**
- GitHub: [@TAIJULAMAN](https://github.com/TAIJULAMAN)

## 🙏 Acknowledgments

- Design inspiration from modern travel apps
- Expo team for the amazing framework
- React Native community for continuous support

---

Made with ❤️ using React Native & Expo
