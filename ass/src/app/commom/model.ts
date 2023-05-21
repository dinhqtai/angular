import * as Yup from "yup"
export const SignUp = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    resetPassword: Yup.string().oneOf([Yup.ref("password")])
})
export type Signup = Yup.InferType<typeof SignUp>

export const Product = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    description: Yup.string().required()
})
export type IProduct = Yup.InferType<typeof Product>