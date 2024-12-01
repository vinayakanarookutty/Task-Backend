import { Test, TestingModule } from '@nestjs/testing';
import { ProfileuserviewController } from './profileuserview.controller';

describe('ProfileuserviewController', () => {
  let controller: ProfileuserviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileuserviewController],
    }).compile();

    controller = module.get<ProfileuserviewController>(ProfileuserviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
