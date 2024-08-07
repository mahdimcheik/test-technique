import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { mapResolver } from './map.resolver';

describe('mapResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => mapResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
