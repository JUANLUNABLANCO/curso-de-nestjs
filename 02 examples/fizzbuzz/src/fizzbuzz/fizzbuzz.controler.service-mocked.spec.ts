import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;
  let service: FizzbuzzService;

  const mockedFizzBuzzValue = 'Buzz';
  const mockFizzBuzzService = {
    fizzbuzz: () => mockedFizzBuzzValue,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService],
    })
      .overrideProvider(FizzbuzzService)
      .useValue(mockFizzBuzzService)
      .compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should return the correct Fizz Buzz word according the introduced number (Using spyOn)', () => {
    const result = 'Fizz';

    const fizzbuzzSpy = jest.spyOn(service, 'fizzbuzz');
    fizzbuzzSpy.mockImplementation(() => result);

    expect(controller.fizzbuzz(3)).toBe(result);

    fizzbuzzSpy.mockRestore();
  });

  it('should return the correct Fizz Buzz word according the introduced number (Using mocking de servicios)', () => {
    expect(controller.fizzbuzz(5)).toBe(mockedFizzBuzzValue);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
