import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

 export class MiscService {
    // tslint:disable-next-line:max-line-length
    frequencies = [ 130.8127826503, 138.5913154884, 146.8323839587, 155.5634918610, 164.8137784564, 174.6141157165, 184.9972113558, 195.9977179909, 207.6523487900, 220.0000000000, 233.0818807590, 246.9416506281 ]
  
    TempoValues = {
    'Lento':60,'Adagio':80,'Andante':100, 'Moderato':120,'Allegro':140,'Presto':160
  }

  notesToKeys = {
      'a':0, 's':2, 'd':4, 'f':5, 'g':7, 'h':9, 'j':11, 'w':1, 'e':3, 't':6, 'y':8, 'u':10
  }

  notesToName = {
    0:'Do', 2:'Re', 4:'Mi', 5:'Fa', 7:'Sol', 9:'La', 11:'Ti', 1:'Do#', 3:'Re#', 6:'Fa#', 8:'Sol#', 10:'La#'
};

  
 

  keyToNote = {
    '65':0, '83':2, '68':4, '70':5, '71':7, '72':9, '74':11, '87':1, '69':3, '84':6, '89':8, '85':10
  }

  

  constructor() { }
  notes(note: number) {
    console.log(this.frequencies[note % 12] * (Math.floor(note / 12 ) + 1))
    return this.frequencies[note % 12] * (Math.floor(note / 12 ) + 1)
  }
}
