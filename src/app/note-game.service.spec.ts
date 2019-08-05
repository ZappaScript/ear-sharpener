import { TestBed } from '@angular/core/testing';

import { NoteGameService } from './note-game.service';

describe('NoteGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteGameService = TestBed.get(NoteGameService);
    expect(service).toBeTruthy();
  });
});
