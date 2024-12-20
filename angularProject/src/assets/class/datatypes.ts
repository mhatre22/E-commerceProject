export interface sellerLogin{
    email  : string,
    password :number
}
export interface sellersignup{
  id: string,
      username: string
      email  : string,
      contact: number,
      address: string,
      password :number
      Confirmpassword: number

}
export interface product{
    id:number,
    productName:string,
    category:string,
    color1: string;
    color2: string;
    price:number,
    description:string,
    image:string,
    quantity:undefined |number,
    userId: number;
    productId:undefined|number

}
export interface userLogin{
    email  : string,
    password :number
}
export interface userSignup{
        id: string,
      username: string
      email  : string,
      contact: number,
      address: string,
      password :number
      Confirmpassword: number

}
export interface cart{
    userId: number;
    productId: number;
    id: number;
    productName: string;
    category: string;
    color1: string;
    color2: string;
    price: number;
    description: string;
    image: string;
    quantity: undefined | number;
}
export interface priceSummary{
    price:number,
    tax:number,
    discount:number,
    delivery:number,
    total:number
}