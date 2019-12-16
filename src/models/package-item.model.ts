export default interface PackageItemModel {
  id: string;
  type: string;
  thickness?: number;
  width?: number;
  height?: number;
  weight: number;
  addressFrom: string;
  addressTo: string;
  picture: string;
  postOffice: number;
}
