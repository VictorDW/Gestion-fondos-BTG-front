
export enum PathImages {
    LOGO = 'assets/images/logo.png',
    IMG_USER = 'assets/images/user.png'
}

export const Constants = {
  CATEGORY: 'Categoria:',
  CATEGORY_FILTER: 'Por categoria:',
  AMOUNT_FILTER: 'Por monto maximo',
  SYMBOL_PESOS: '$',
  NULL_VALUE: null,
  NULL_VALUE_STRING: 'null',
  QUESTION_MARK: '?',
  EMPTY_STRING:"",
  MESSAGE_WELCOME: "Bienvenid@, ",
  COP: 'COP',
  OPENING_SUB: 'Apertura'
}

export const Numbers = {
  NUM_ZERO: 0,
  NUM_TWO: 2,
  NUM_ONE: 1,
  NUM_THREE: 3,
};

export const DecimalPointConstants = {
  SELECTOR: 'decimal',
  AN_EMPTY_SPACE: ' ',
  EMPTY_SPACE: '',
  DECIMAL_ZERO: Numbers.NUM_ZERO,
  DECIMAL_ONE: Numbers.NUM_ONE,
  DECIMAL_TWO: Numbers.NUM_TWO,
  DECIMAL_THREE: Numbers.NUM_THREE,
  POSITION_NUMBER_INITIAL: Numbers.NUM_ZERO,
  POSITION_NUMBER_SECOND: Numbers.NUM_ONE,
  DOT: '.',
  COMMA: ',',
};

export const Direction = {
  ASC: {
    icon: 'fa-solid fa-arrow-up-wide-short',
    text: 'ASC'
  },
  DESC: {
    icon: 'fa-solid fa-arrow-down-wide-short',
    text: 'DESC'
  }
}

export const FILTER_AND_ORDER_DEFAULT = {
  category: Constants.NULL_VALUE,
  maxAmount: Constants.NULL_VALUE,
  direction: Direction.ASC.text
}

export enum Filters {
  CATEGORY = 'category',
  MAX_AMOUNT = 'maxAmount',
}

export const StyleButton = {
  SUBSCRITION: {
    showIcon: true,
    icon: 'fa-solid fa-plus',
    text: 'Suscribirme'
  },
  SUSSESS: {
    showIcon: false,
    text: 'Aceptar'
  },
}

export const DataForm = {
  title_form: 'Suscribirse',
  label_select: 'Seleccione un fondo de inversión',
  label_input: 'Monto',
  placeholder: 'Monto de inversión',
  controle_amount: 'investmentAmount'
}

export enum Pattern{
  AMOUNT = '^[0-9]+$',
}

export const MessagesModal = {
  SUSSESS: {
    icon: 'fa-circle-check',
    text: 'Suscrición exitosa'
  },  
  ERROR: {
    icon: 'fa-circle-xmark',
  }
}