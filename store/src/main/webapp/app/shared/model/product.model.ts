import { IProductCategory } from 'app/shared/model/product-category.model';
import { Size } from 'app/shared/model/enumerations/size.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  productSize?: Size;
  imageContentType?: string;
  image?: any;
  productCategory?: IProductCategory;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number,
    public productSize?: Size,
    public imageContentType?: string,
    public image?: any,
    public productCategory?: IProductCategory
  ) {}
}
