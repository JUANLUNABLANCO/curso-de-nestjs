import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService],
    }).compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    const result = 'Fizz';
    jest.spyOn(service, 'fizzbuzz').mockImplementation(() => result);
    expect(controller).toBeDefined();
  });
});
