import { ComentariosService } from './comentarios.service';
import { TestBed } from '@angular/core/testing';

describe('ComantariosService', () => {
  let service: ComentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
