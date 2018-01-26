var decodeBits = function(bits){
var lengths = []
var currentLength = 0
var firstOne = 0
var lastOne = bits.length-1

var MORSE_CODE = {
       '.-':'A',     '-...':'B',    '-.-.':'C',      '-..':'D',
        '.':'E',     '..-.':'F',      '--.':'G',     '....':'H',
       '..':'I',     '.---':'J',      '-.-':'K',     '.-..':'L',
       '--':'M',       '-.':'N',      '---':'O',     '.--.':'P',
     '--.-':'Q',      '.-.':'R',      '...':'S',        '-':'T',
      '..-':'U',      '...-':'V',     '.--':'W',     '-..-':'X',
     '-.--':'Y',     '--..':'Z',    '.----':'1',    '..---':'2',
    '...--':'3',    '....-':'4',    '.....':'5',    '-....':'6',
    '--...':'7',    '---..':'8',    '----.':'9',    '-----':'0',
    '':' ', '.-.-.-':'.'};

for (i=0; i<bits.length; i++){
  if (bits[i]==="0"){ firstOne++ }else{break}
}

for (i=bits.length-1; i>=0; i--){
  if (bits[i]==="0"){ lastOne-- }else{break}
}

for (i = firstOne; i<=lastOne; i++) {
  if(bits[i]==="1") {
    lengths.push(currentLength)
    currentLength = 0
  } else {currentLength++}
} lengths.push(currentLength)

for (i = firstOne; i<=lastOne; i++) {
  if(bits[i]==="0") {
    lengths.push(currentLength)
    currentLength = 0
  } else {currentLength++}
} lengths.push(currentLength)

var timeUnit = lengths.reduce(function(a,b){
  if ((b<a&&b!==0)||a===0) {return b}
  else {return a}
})

var bitsAdj = ""
for (i=0; i<bits.length; i+=(timeUnit?timeUnit:1)) {
  bitsAdj += bits[i]
}
var dash = /111/gi
var space = /000/gi
var dot = /1/gi
var naught = /0/gi
   return(bitsAdj.replace(dash, '-').replace(space, ' ').replace(dot, '.').replace(naught, ''))
}

var decodeMorse = function(morseCode){
     var result = []
  morseCode.trim().split(" ").forEach(function(element, index){
    if ( element !== "") {result.push(MORSE_CODE[element])}
      else { if(morseCode.trim().split(" ")[index-1]!=="") result.push(" ")
      }
    })
  return result.join("")
}
