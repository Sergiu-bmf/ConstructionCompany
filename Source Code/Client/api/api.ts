export * from './buildings.service';
import { BuildingsService } from './buildings.service';
export * from './buyers.service';
import { BuyersService } from './buyers.service';
export * from './material.service';
import { MaterialService } from './material.service';
export const APIS = [BuildingsService, BuyersService, MaterialService];
