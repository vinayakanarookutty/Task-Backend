import { Test, TestingModule } from '@nestjs/testing';
import { ProfileuserviewService } from './profileuserview.service';

describe('ProfileuserviewService', () => {
  let service: ProfileuserviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileuserviewService],
    }).compile();

    service = module.get<ProfileuserviewService>(ProfileuserviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
