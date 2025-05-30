export interface Car_Picture_url {
  normal: string;
  featured: string;
}

export interface Car_Features {
  doors: string;
  seats: string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: number;
  small_suitcase: number;
  thumb: string;
  fleet_group_id: number;
  fleet_category_id: number;
  fleet_original_category_id: number;
  category: string;
}

// Base interfaces for common structures
export interface Rate_data_Inclusions {
  name: string[];
  description: string[];
}

export interface Rate_data {
  name: string;
  net_rate: boolean;
  rate_type: string;
  inclusions: Rate_data_Inclusions;
  step_one: boolean;
}

export interface Inclusion_meta_Item {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Base_Inclusions_meta {
  um: Inclusion_meta_Item;
  ldwc: Inclusion_meta_Item;
  lstax: Inclusion_meta_Item;
  fad: Inclusion_meta_Item;
  safetysecure: Inclusion_meta_Item;
  "basic-rsn": Inclusion_meta_Item;
  mod: Inclusion_meta_Item;
}

export interface H8_Inclusions_meta extends Base_Inclusions_meta {
  tplc: Inclusion_meta_Item;
  as: Inclusion_meta_Item;
}

export interface F2_Inclusions_meta extends Base_Inclusions_meta {
  tplc: Inclusion_meta_Item;
  as: Inclusion_meta_Item;
  tog: Inclusion_meta_Item;
}

export interface Payment_Details {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Payment_Details;
  pd: Payment_Details;
}

export interface Total_charge {
  base: Charge_Base;
  discounts?: null | number;
  total: Charge_Base;
}

export interface Currency_Pricing {
  total_charge: Total_charge;
}

export interface Pricing {
  USD: Currency_Pricing;
  COP: Currency_Pricing;
}

export interface Tag {
  id: number;
  name_filter: string;
  visible: boolean;
  name: string;
  icon: string;
  color: string;
  remote_url?: null | string;
  placeholder: string;
  priority: number;
}

export interface Car_Rate {
  rate_data: Rate_data;
  inclusions_meta:
    | Base_Inclusions_meta
    | H8_Inclusions_meta
    | F2_Inclusions_meta;
  discount_numbers?: null | number;
  pricing: Pricing;
  tags: Tag[];
  id: number;
}

// More flexible rates structure to handle different rate codes
export interface Car_Rates {
  [key: string]: Car_Rate;
}

export interface Car {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type?: null | string;
  drive_type?: null | string;
  door_count?: null | number;
  picture_url: Car_Picture_url;
  stars: number;
  features: Car_Features;
  tags: Tag[];
  rates: Car_Rates;
}

export interface Days_Calculation {
  days: number;
  calculation: {
    hours: number;
    minutes: number;
  };
}

export interface CarsResponse {
  cars: {
    [brand: string]: Car[];
  };
  days_calculation: Days_Calculation;
}

// Legacy type aliases for backward compatibility (can be removed if not needed)
export type Tags = Tag;
export type Car_Rates_H8_Rate_data_Inclusions = Rate_data_Inclusions;
export type Car_Rates_F2_Rate_data_Inclusions = Rate_data_Inclusions;
export type Car_Rates_Cl_Rate_data_Inclusions = Rate_data_Inclusions;
export type Car_Rates_H8_Rate_data = Rate_data;
export type Car_Rates_F2_Rate_data = Rate_data;
export type Car_Rates_Cl_Rate_data = Rate_data;
export type Car_Rates_H8 = Car_Rate;
export type Car_Rates_F2 = Car_Rate;
export type Car_Rates_Cl = Car_Rate;
