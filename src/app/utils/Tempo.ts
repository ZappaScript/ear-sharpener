// export const enum Tempo {
//   Andante = 92 , Moderato = 114, Allegro = 138, Vivace = 166, Presto = 184, Custom = -1
// }

export class Tempi {

  public static get Andante(): Tempo {
    return new Andante();
  }

  public static get Allegro(): Tempo {
    return new Allegro();
  }

  public static get Vivace(): Tempo {
    return new Vivace();
  }

  public static get Presto(): Tempo {
    return new Presto();
  }

  public static get Moderato(): Tempo {
    return new Moderato();
  }

  public static get Custom(): Tempo {
    return new Custom();
  }
}

export abstract class Tempo {
  abstract beatsPerMinute(): number;
  abstract isInRange(tempo: number);
}

export class Andante implements Tempo {
  beatsPerMinute(): number {
    return 92;
  }

  isInRange(tempo: number) {
    return tempo <= 108 && tempo > 76;
  }
}

export class Moderato implements Tempo {
  beatsPerMinute(): number {
    return 114;
  }

  isInRange(tempo: number) {

    return tempo <= 120 && tempo > 108;
  }
}

export class Allegro implements Tempo {
  beatsPerMinute(): number {
    return 138;
  }

  isInRange(tempo: number) {

    return tempo <= 156 && tempo > 120;
  }
}

export class Vivace implements Tempo {
  beatsPerMinute(): number {
    return 166;
  }

  isInRange(tempo: number) {

    return tempo <= 176 && tempo > 156;
  }
}

export class Custom implements Tempo {
  beatsPerMinute(): number {
    return 0;
  }

  isInRange(tempo: number) {
    return tempo > 200 || tempo <= 76;
  }
}

export class Presto implements Tempo {
  beatsPerMinute(): number {
    return 184;
  }

  isInRange(tempo: number) {

    return tempo <= 200 && tempo > 176;
  }
}
