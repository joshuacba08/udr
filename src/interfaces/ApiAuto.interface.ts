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

export interface Car_Rates_H8_Rate_data_Inclusions {
  name: string[];
  description: string[];
}

export interface Car_Rates_H8_Rate_data {
  name: string;
  net_rate: boolean;
  rate_type: string;
  inclusions: Car_Rates_H8_Rate_data_Inclusions;
  step_one: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Um {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Ldwc {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Tplc {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_As {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Lstax {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Fad {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Safetysecure {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Basic_rsn {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta_Mod {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_H8_Inclusions_meta {
  um: Car_Rates_H8_Inclusions_meta_Um;
  ldwc: Car_Rates_H8_Inclusions_meta_Ldwc;
  tplc: Car_Rates_H8_Inclusions_meta_Tplc;
  as: Car_Rates_H8_Inclusions_meta_As;
  lstax: Car_Rates_H8_Inclusions_meta_Lstax;
  fad: Car_Rates_H8_Inclusions_meta_Fad;
  safetysecure: Car_Rates_H8_Inclusions_meta_Safetysecure;
  basic_rsn: Car_Rates_H8_Inclusions_meta_Basic_rsn;
  mod: Car_Rates_H8_Inclusions_meta_Mod;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge_Base_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge_Base_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_H8_Pricing_Usd_Total_charge_Base_Pp;
  pd: Car_Rates_H8_Pricing_Usd_Total_charge_Base_Pd;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge_Total_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge_Total_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge_Total {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_H8_Pricing_Usd_Total_charge_Total_Pp;
  pd: Car_Rates_H8_Pricing_Usd_Total_charge_Total_Pd;
}

export interface Car_Rates_H8_Pricing_Usd_Total_charge {
  base: Car_Rates_H8_Pricing_Usd_Total_charge_Base;
  discounts?: null | number;
  total: Car_Rates_H8_Pricing_Usd_Total_charge_Total;
}

export interface Car_Rates_H8_Pricing_Usd {
  total_charge: Car_Rates_H8_Pricing_Usd_Total_charge;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge_Base_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge_Base_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_H8_Pricing_Cop_Total_charge_Base_Pp;
  pd: Car_Rates_H8_Pricing_Cop_Total_charge_Base_Pd;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge_Total_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge_Total_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge_Total {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_H8_Pricing_Cop_Total_charge_Total_Pp;
  pd: Car_Rates_H8_Pricing_Cop_Total_charge_Total_Pd;
}

export interface Car_Rates_H8_Pricing_Cop_Total_charge {
  base: Car_Rates_H8_Pricing_Cop_Total_charge_Base;
  discounts?: null | number;
  total: Car_Rates_H8_Pricing_Cop_Total_charge_Total;
}

export interface Car_Rates_H8_Pricing_Cop {
  total_charge: Car_Rates_H8_Pricing_Cop_Total_charge;
}

export interface Car_Rates_H8_Pricing {
  USD: Car_Rates_H8_Pricing_Usd;
  COP: Car_Rates_H8_Pricing_Cop;
}

export interface Car_Rates_H8_Tags {
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

export interface Car_Rates_H8 {
  rate_data: Car_Rates_H8_Rate_data;
  inclusions_meta: Car_Rates_H8_Inclusions_meta;
  discount_numbers?: null | number;
  pricing: Car_Rates_H8_Pricing;
  tags: Car_Rates_H8_Tags[];
  id: number;
}

export interface Car_Rates_F2_Rate_data_Inclusions {
  name: string[];
  description: string[];
}

export interface Car_Rates_F2_Rate_data {
  name: string;
  net_rate: boolean;
  rate_type: string;
  inclusions: Car_Rates_F2_Rate_data_Inclusions;
  step_one: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Um {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Ldwc {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Tplc {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_As {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Lstax {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Tog {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Fad {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Safetysecure {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Basic_rsn {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta_Mod {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_F2_Inclusions_meta {
  um: Car_Rates_F2_Inclusions_meta_Um;
  ldwc: Car_Rates_F2_Inclusions_meta_Ldwc;
  tplc: Car_Rates_F2_Inclusions_meta_Tplc;
  as: Car_Rates_F2_Inclusions_meta_As;
  lstax: Car_Rates_F2_Inclusions_meta_Lstax;
  tog: Car_Rates_F2_Inclusions_meta_Tog;
  fad: Car_Rates_F2_Inclusions_meta_Fad;
  safetysecure: Car_Rates_F2_Inclusions_meta_Safetysecure;
  basic_rsn: Car_Rates_F2_Inclusions_meta_Basic_rsn;
  mod: Car_Rates_F2_Inclusions_meta_Mod;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge_Base_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge_Base_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_F2_Pricing_Usd_Total_charge_Base_Pp;
  pd: Car_Rates_F2_Pricing_Usd_Total_charge_Base_Pd;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge_Total_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge_Total_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge_Total {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_F2_Pricing_Usd_Total_charge_Total_Pp;
  pd: Car_Rates_F2_Pricing_Usd_Total_charge_Total_Pd;
}

export interface Car_Rates_F2_Pricing_Usd_Total_charge {
  base: Car_Rates_F2_Pricing_Usd_Total_charge_Base;
  discounts?: null | number;
  total: Car_Rates_F2_Pricing_Usd_Total_charge_Total;
}

export interface Car_Rates_F2_Pricing_Usd {
  total_charge: Car_Rates_F2_Pricing_Usd_Total_charge;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge_Base_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge_Base_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_F2_Pricing_Cop_Total_charge_Base_Pp;
  pd: Car_Rates_F2_Pricing_Cop_Total_charge_Base_Pd;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge_Total_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge_Total_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge_Total {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_F2_Pricing_Cop_Total_charge_Total_Pp;
  pd: Car_Rates_F2_Pricing_Cop_Total_charge_Total_Pd;
}

export interface Car_Rates_F2_Pricing_Cop_Total_charge {
  base: Car_Rates_F2_Pricing_Cop_Total_charge_Base;
  discounts?: null | number;
  total: Car_Rates_F2_Pricing_Cop_Total_charge_Total;
}

export interface Car_Rates_F2_Pricing_Cop {
  total_charge: Car_Rates_F2_Pricing_Cop_Total_charge;
}

export interface Car_Rates_F2_Pricing {
  USD: Car_Rates_F2_Pricing_Usd;
  COP: Car_Rates_F2_Pricing_Cop;
}

export interface Car_Rates_F2_Tags {
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

export interface Car_Rates_F2 {
  rate_data: Car_Rates_F2_Rate_data;
  inclusions_meta: Car_Rates_F2_Inclusions_meta;
  discount_numbers?: null | number;
  pricing: Car_Rates_F2_Pricing;
  tags: Car_Rates_F2_Tags[];
  id: number;
}

export interface Car_Rates_Cl_Rate_data_Inclusions {
  name: string[];
  description: string[];
}

export interface Car_Rates_Cl_Rate_data {
  name: string;
  net_rate: boolean;
  rate_type: string;
  inclusions: Car_Rates_Cl_Rate_data_Inclusions;
  step_one: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Um {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Ldwc {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Lstax {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Fad {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Safetysecure {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Basic_rsn {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta_Mod {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Car_Rates_Cl_Inclusions_meta {
  um: Car_Rates_Cl_Inclusions_meta_Um;
  ldwc: Car_Rates_Cl_Inclusions_meta_Ldwc;
  lstax: Car_Rates_Cl_Inclusions_meta_Lstax;
  fad: Car_Rates_Cl_Inclusions_meta_Fad;
  safetysecure: Car_Rates_Cl_Inclusions_meta_Safetysecure;
  basic_rsn: Car_Rates_Cl_Inclusions_meta_Basic_rsn;
  mod: Car_Rates_Cl_Inclusions_meta_Mod;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge_Base_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge_Base_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_Cl_Pricing_Usd_Total_charge_Base_Pp;
  pd: Car_Rates_Cl_Pricing_Usd_Total_charge_Base_Pd;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge_Total_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge_Total_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge_Total {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_Cl_Pricing_Usd_Total_charge_Total_Pp;
  pd: Car_Rates_Cl_Pricing_Usd_Total_charge_Total_Pd;
}

export interface Car_Rates_Cl_Pricing_Usd_Total_charge {
  base: Car_Rates_Cl_Pricing_Usd_Total_charge_Base;
  discounts?: null | number;
  total: Car_Rates_Cl_Pricing_Usd_Total_charge_Total;
}

export interface Car_Rates_Cl_Pricing_Usd {
  total_charge: Car_Rates_Cl_Pricing_Usd_Total_charge;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge_Base_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge_Base_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge_Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_Cl_Pricing_Cop_Total_charge_Base_Pp;
  pd: Car_Rates_Cl_Pricing_Cop_Total_charge_Base_Pd;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge_Total_Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge_Total_Pd {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge_Total {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Car_Rates_Cl_Pricing_Cop_Total_charge_Total_Pp;
  pd: Car_Rates_Cl_Pricing_Cop_Total_charge_Total_Pd;
}

export interface Car_Rates_Cl_Pricing_Cop_Total_charge {
  base: Car_Rates_Cl_Pricing_Cop_Total_charge_Base;
  discounts?: null | number;
  total: Car_Rates_Cl_Pricing_Cop_Total_charge_Total;
}

export interface Car_Rates_Cl_Pricing_Cop {
  total_charge: Car_Rates_Cl_Pricing_Cop_Total_charge;
}

export interface Car_Rates_Cl_Pricing {
  USD: Car_Rates_Cl_Pricing_Usd;
  COP: Car_Rates_Cl_Pricing_Cop;
}

export interface Car_Rates_Cl_Tags {
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

export interface Car_Rates_Cl {
  rate_data: Car_Rates_Cl_Rate_data;
  inclusions_meta: Car_Rates_Cl_Inclusions_meta;
  discount_numbers?: null | number;
  pricing: Car_Rates_Cl_Pricing;
  tags: Car_Rates_Cl_Tags[];
  id: number;
}

export interface Car_Rates {
  H8: Car_Rates_H8;
  F2: Car_Rates_F2;
  CL: Car_Rates_Cl;
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
  tags: Tags[];
  rates: Car_Rates;
}

export interface Tags {
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
