import { Customer } from "./customer.model";
import { Image } from "./image.model";
import { Tree } from "./tree.model";

export interface Order {
  id?: number;
  customer?: Customer;
  tree: Tree;
  quantity: number;
  yardSketchImage: string;
  yard_sketch_image: Image;
  created_at: Date;
}
