import { TestBed } from '@angular/core/testing';

import { DockerFileService } from './docker-file.service';

describe('DockerFileService', () => {
  let service: DockerFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockerFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
