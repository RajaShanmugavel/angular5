import { TestBed } from '@angular/core/testing';

import { StudentManageService } from './student-manage.service';

describe('StudentManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentManageService = TestBed.get(StudentManageService);
    expect(service).toBeTruthy();
  });
});
