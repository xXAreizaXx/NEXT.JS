// Yup
import * as yup from 'yup'

export const smsSchema = yup.object().shape({
    phone: yup
        .string()
        .required('El número de teléfono es requerido'),
    message: yup
        .string()
        .required('El mensaje es requerido')
})