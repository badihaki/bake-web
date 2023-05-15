# Bake Web (Tentative Title) Readme
A baking social media web and mobile app by B.H. Martin

# Bake Web Concept & Purpose
Bake web is a baking social media web and mobile app developed by Badi-Haki Martin. It uses a Ruby on Rails backend and React for it's web-based front-end and React native for it's mobile-based front-end.

# How to use
!! Make sure Postgresql server has started
$ sudo service postgresql start

* Run the rails server with ' rails s '
* Run the mobile version by going into './bake-web-mobile' and use:
    - npm run android
    - npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
    - npm run web
    or just use 'npx expo start --tunnel' for a quick and dirty launch
