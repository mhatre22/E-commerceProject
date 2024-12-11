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
      company: string,
      product: string,
      password :number
      Confirmpassword: number

}
export interface product{
    id:number,
    productName:string,
    category:string,
    color:string,
    price:number,
    description:string,
    image:string
}
