import { DecimalPointPipe } from './decimal-point.pipe';

describe('DecimalPointPipe', () => {
  let pipe: DecimalPointPipe;

  beforeEach(() => {
    pipe = new DecimalPointPipe();
  });

  it('should return an empty string if value is null', () => {
    const result = pipe.transform(null);
    expect(result).toEqual('0');
  });

  it('should correctly handle values without an empty space', () => {
    const value = '1231';
    const result = pipe.transform(value);
    expect(result).toEqual('1.231');
  });

  it('should correctly handle values with an empty space and additional text', () => {
    const value = '123 COP';
    const result = pipe.transform(value);
    expect(result).toEqual('123 COP');
  });
});
