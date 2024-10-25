import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPointConstants } from '../../enums/enums';

@Pipe({
  name: DecimalPointConstants.SELECTOR,
})
export class DecimalPointPipe implements PipeTransform {
  transform(value: string | number | null): string {
    if (!value) return DecimalPointConstants.DECIMAL_ZERO.toString();
    let numString = value.toString();
    const isOnlyMoney = numString?.includes(
      DecimalPointConstants.AN_EMPTY_SPACE
    );
    const num = numString
      ? numString?.split(DecimalPointConstants.AN_EMPTY_SPACE)[
          DecimalPointConstants.POSITION_NUMBER_INITIAL
        ]
      : DecimalPointConstants.POSITION_NUMBER_INITIAL;
    const text = numString?.split(DecimalPointConstants.AN_EMPTY_SPACE)[
      DecimalPointConstants.POSITION_NUMBER_SECOND
    ];

    const decimalPart = numString.split(DecimalPointConstants.DOT);
    let numstring = num.toString();
    let result = DecimalPointConstants.EMPTY_SPACE;

    if (decimalPart.length >= DecimalPointConstants.DECIMAL_TWO) {
      result =
        DecimalPointConstants.COMMA +
        decimalPart.at(DecimalPointConstants.DECIMAL_ONE) +
        result;

      numstring = decimalPart.at(DecimalPointConstants.DECIMAL_ZERO) ?? '';
    }

    for (
      let i = numstring.length - DecimalPointConstants.DECIMAL_ONE,
        cont = DecimalPointConstants.DECIMAL_ZERO;
      i >= DecimalPointConstants.DECIMAL_ZERO;
      i--, cont++
    ) {
      result = numstring.charAt(i) + result;
      if (
        cont % DecimalPointConstants.DECIMAL_THREE ===
          DecimalPointConstants.DECIMAL_TWO &&
        i !== DecimalPointConstants.DECIMAL_ZERO
      ) {
        result = DecimalPointConstants.DOT + result;
      }
    }
    return isOnlyMoney ? `${result} ${text}` : result;
  }
}
