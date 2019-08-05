import { Injectable } from '@angular/core';
import { MiscService } from './misc.service';

@Injectable({
  providedIn: 'root'
})
export class OscillatorService {

  
  context: AudioContext ;
  gainNode: GainNode ;
  osc = null
  toClear = undefined

    

  constructor(private miscService: MiscService ) { 
    
    this.context = new window['AudioContext']();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    
    
  }

  playNote(Note,stop){
    clearTimeout(this.toClear);
   if (!this.osc) { this.osc = this.context.createOscillator();this.osc.start(this.context.currentTime ) }
   this.osc.connect(this.gainNode)
   this.osc.frequency.value = this.miscService.notes(Note)
   
   this.toClear = setTimeout(()=>{this.osc.disconnect(this.gainNode)},stop*1000)
}
playSequence(sequence: number[], tempo: number){
  const length = 60 / tempo;
  sequence.forEach((val, i) => {
    console.log(i)
    setTimeout(() => { this.playNote(val, length);}, i * length * 1000);

  })

}

  
}
