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
    quantity:undefined |number
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
    userId: any;
    productId: number;
    id?: number | undefined;
    productName?: string | undefined;
    category?: string | undefined;
    color1?: string | undefined;
    color2?: string | undefined;
    price?: number | undefined;
    description?: string | undefined;
    image?: string | undefined;
    quantity?: undefined | number;
    userName?:string|undefined
}