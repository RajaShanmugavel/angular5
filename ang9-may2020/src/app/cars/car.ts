import { Engine } from './engine';
import { Gearbox } from './gearbox';

export class Car {
  id: number;
  make: string;
  model: string;
  engine: Engine;
  doors: string;
  drive: string;
  gearbox: Gearbox;
}
