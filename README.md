# vlc-reset-playlist-links
When you create a playlist in VLC using youtube links, the links will change from https://www.youtube.com/watch?v=dQw4w9WgXcQ to a temporal link like https://r4---sn-xaawerbuxa-cu4.googlevideo.com/videoplayback?expire=1611704698&ei=asdfasdfas...

And this script resets thouse links.


## Usage
```
git clone https://github.com/artolajon/vlc-reset-playlist-links
npm install
```
Edit the file `resetPlaylist.js` and write the path to your playlist in `const FILE_NAME='<playlist_name.xspf>`.
Finally, execute it
```
node resetPlaylist.js
```
You just need to execute the last command, when you save a playlist
