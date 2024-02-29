import { TestBed } from '@angular/core/testing';

import { ClaimSettingService } from './claim-setting.service';

describe('ClaimSettingService', () => {
  let service: ClaimSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
