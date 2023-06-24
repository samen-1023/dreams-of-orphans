import { BaseEntity } from "./base-entity";

type TFeatureType = 'creature' | 'city' | 'location';

export class Feature extends BaseEntity {
  type: TFeatureType;

  name: string;

  description: string;
}
