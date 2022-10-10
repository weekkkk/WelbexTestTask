import { ITest } from "../interfaces";
/**
 * Тест
 */
export default class TestModel implements ITest {
  /**
   * Уникальный ключ
   */
  Id: number = 0;
  /**
   * Дата
   */
  Date: Date = new Date();
  /**
   * Название
   */
  Name: string = "";
  /**
   * Количество
   */
  Count: number = 0;
  /**
   * Расстояние
   */
  Distance: number = 0;
  constructor ( obj?: Partial<TestModel> ) {
    if ( obj ) Object.assign( this, obj );
  }
  /**
   * Дата в формате строки
   */
  get DateString(): string {
    return this.Date.toLocaleDateString();
  }
  /**
   * Количество формате строки
   */
  get CountString(): string {
    return `${ this.Count } шт.`;
  }
  /**
   * Расстояние формате строки
   */
  get DistanceString(): string {
    return `${ this.Distance } м`;
  }
}
