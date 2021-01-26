var fs = require('fs');
var xml2js = require('xml2js');

const FILE_NAME='playlist.xspf';

fs.readFile(FILE_NAME, function(err, data){
  if (err){
    console.error('Error while reading file');
    console.log(err);
    return;
  }
  xml2js.parseString(data, (err, result) => {
    if (err){
      console.error('Error while parsing');
      console.log(err);
      return;
    }
    
    result.playlist.trackList[0].track.forEach(track => {
      track.location = track.info;
    });

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    fs.writeFile(FILE_NAME, xml, function(err, data) {
      if (err) {
        console.error('Error while saving');
        console.log(err);
      }
      else {
        console.log('updated!');
      }
    });
  });
});

