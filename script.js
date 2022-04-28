const APOSTROPHE = "'";
      MESSAGE_HEADER = 'UNH',
      BEGINNING_MESSAGE = 'BGM';

function splitString(stringToSplit, separator) {
  let arrayOfStrings = stringToSplit.split(separator);

  //console.log('A string original é: "' + stringToSplit + '"');
  console.log('O separador é: "' + separator + '"');
  console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join('\n'));
  console.log(arrayOfStrings.length);
  
  for(let i = 0; i < arrayOfStrings.length; i++) {
    if(arrayOfStrings[i].includes('UNH')) {
        console.log("Message header:", arrayOfStrings[i]);
    }
    if(arrayOfStrings[i].includes('BGM')) {
      console.log("Beginning of message:", arrayOfStrings[i]);
    }
    if(arrayOfStrings[i].includes('FTX')) {
      console.log("Free text:", arrayOfStrings[i]);
    }
    if(arrayOfStrings[i].includes('RFF')) {
      console.log("Reference:", arrayOfStrings[i]);
    }
    if(arrayOfStrings[i].includes('TDT')) {
      console.log("Details of transport:", arrayOfStrings[i]);
    }
    splitSegment(arrayOfStrings[i]);
  }
}

function splitSegment(segmentToSplit) {
    let counter = 0;
    let arraySegments = segmentToSplit.split('+');
    arraySegments.join("\n");
    for(let i = 1; i < arraySegments.length; i++) {
        console.log('Pos:', counter+= 10, '=', arraySegments[i]);
    }
}

function unhSegment(counterPosition){
    switch(counterPosition) {
        case 10: console.log('Message reference number');
        case 20: console.log('MESSAGE IDENTIFIER');
        case 30: console.log('Common access reference');
        case 40: console.log('STATUS OF THE TRANSFER');
        default: console.log('ERROR NOT FOUND SEGMENT!');
    }
}

//splitString(monthString, comma);