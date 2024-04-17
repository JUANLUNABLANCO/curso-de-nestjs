import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
  fizzbuzz(number): any {
    if (number < 1 || number > 100) {
      return;
    }

    if (number % 15 === 0) {
      return 'FizzBuzz';
    }

    if (number % 3 === 0) {
      return 'Fizz';
    }

    if (number % 5 === 0) {
      return 'Buzz';
    }

    return number;
  }
}
