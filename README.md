# libproxy-chrome

A simple chrome extension to change the current tab's url to an Aalto LibProxy equivalent. Using LibProxy unlocks the content through Aalto, assuming you have valid credentials.

For example:

> https://ieeexplore.ieee.org/document/7298573

turns into

> https://ieeexplore-ieee-org.libproxy.aalto.fi/document/7298573

## Installation

1. Clone the repository to your computer
2. Go to `chrome://extensions` and enable `Developer mode`
3. Click `Load unpacked` and select the `libproxy-chrome` folder
4. Pin the extension to your toolbar by clicking the extensions icon in top right corner and clicking the pin next to the "Aalto LibProxy wrapper plugin".

## Usage

1. Navigate to the article you want to read
2. Click on the blue LP icon in your extensions toolbar
3. Click "LibProxy this!"
4. Input your Aalto credentials if you haven't already logged in
5. In the unlikely case of a 404 or other error you can return with the "Go back..." button