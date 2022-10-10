/**
 * Тест
 */
export default interface ITest {
  /**
   * Уникальный ключ
   */
  Id: number;
  /**
   * Дата
   */
  Date: Date;
  /**
   * Название
   */
  Name: string;
  /**
   * Количество
   */
  Count: number;
  /**
   * Расстояние
   */
  Distance: number;
  /**
   * Дата в формате строки
   */
  get DateString(): string;

  /**
   * Количество формате строки
   */
  get CountString(): string;
  /**
   * Расстояние формате строки
   */
  get DistanceString(): string;
}
