import { IOption } from "../interfaces";
/**
 * Опция
 */
export default class OptionModel implements IOption {
  /**
   * Id
   */
  Id: number = 0;
  /**
   * Заголовок
   */
  Title: string = "";
  constructor ( obj?: Partial<OptionModel> ) {
    if ( obj ) Object.assign( this, obj );
  }
}
