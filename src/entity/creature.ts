import { Entity } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Feature } from "./feature";

@Entity()
export class Creature extends BaseEntity {
  /**
   * Сила
   * Сколько наносит урона
   * Насколько много может поднять
   * Насколько вероятнее всего может вырвать что-то
  */
  strength: number;
  /**
   * Атлетика
   * Насколько хорошо двигается - взбирается, бегает, прыгает и т.д. 
  */
  athletics: number;
  /**
   * Уклонение
   * Насколько хорошо уклоняется от ударов
  */
  dodge: number;
  /**
   * Прочность
   * Отражает ударный урон
  */
  endurance: number;
  /**
   * Скрытность
   * Позволяет скрываться
  */
  stealth: number;
  /**
   * Урон страхом
   * При виде него есть шанс испугаться и получить урон стремлению
  */
  fearDamage: number;
  /**
   * Обман
   * Насколько хорошо убеждает в своей правоте
  */
  scam: number;
  /**
   * Эмпатия
   * Насколько хорошо распознает ложь игрока
  */ 
  empathy: number;
  /**
   * Сквернословие
   * Насколько дерзко и изощренно оскорбляет игрока
   * Скорее всего понадобится мастер-ввод
  */
  swearing: number;
  /**
   * Храбрость
   * Насколько уверен в себе, чтобы преодалеть страх
  */
  bravery: number;
  /**
   * Внимательность
   * Вероятность того, что заметит кого-то в скрытности или попытку схитрить
  */
  sensitivity: number;
  /**
   * Особенности
   * Модификаторы существа
   * Необходимы, только в случае, если существо важно для повествования
  */
  features?: Feature[];
}