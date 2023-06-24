interface ICommonInput {
  AIData: any;
  masterInput: string;
  stableData: any;
}

/**
 * Буквально фабрика игровых событий
 */
export class EventGenerator {
  constructor({
    AIData,
    masterInput,
    stableData,
  }: ICommonInput) {}

  imagineCreature() {}

  imagineEvent() {}

  imagineSurroundings() {}

  imagineFeatures() {}

  /** Генерит курьезы */
  imagineOddity() {}

  /** Генерит приказы высших чинов/врагов/преследующих */
  inventOrder() {}

  /** Предустановка религиозной свиты */
  presetReligiousRetinue() {}
}