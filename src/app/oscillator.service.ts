import { Injectable } from '@angular/core';
import { MiscService } from './misc.service';

@Injectable({
  providedIn: 'root'
})
export class OscillatorService {


  context: AudioContext;
  compressorNode: DynamicsCompressorNode;
  osc = []




  constructor(private miscService: MiscService) {

    this.context = new window['AudioContext']();
    this.compressorNode = this.context.createDynamicsCompressor();
    
    this.compressorNode.connect(this.context.destination);
    Array.from({length:10}).forEach((_,i)=>{
      console.log(i);
      this.osc.push(this.context.createOscillator());
      this.osc[this.osc.length - 1].start(this.context.currentTime);
    });
    
    



  }
  async wait(ms) {
    return new Promise(resolve => {

      setTimeout(() => { resolve() }, ms);

    });
  }
  async playChord(Chord, stop){
    Chord.forEach((Note,i)=> {
      this.osc[i].connect(this.compressorNode);
      this.osc[i].frequency.value = this.miscService.notes(Note);
    })
    await this.wait(stop * 1000);
    Chord.forEach((_, i) => {

      this.osc[i].disconnect(this.compressorNode);
    } )

  }
  async playNote(Note, stop) {
    
    this.osc[0].connect(this.compressorNode)
    this.osc[0].frequency.value = this.miscService.notes(Note)
    await this.wait(stop * 1000);
    //this.osc[0].disconnect(this.compressorNode);
    
    this.osc[0].disconnect(this.compressorNode);

  }

  async playSequence(sequence: any[][], tempo: number) {
    const length = 60 / tempo;

    for (const val of sequence) {
      Array.isArray(val) ? await this.playChord(val, length): ( val ==='rest' ? await this.wait(length*1000) :  await this.playNote(val, length) );
      
    }
  }
}
