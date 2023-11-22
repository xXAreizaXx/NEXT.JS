// Yup
import * as yup from 'yup'

export const uploadFileSchema = yup.object().shape({
    file: yup
        .mixed()
        .required("El archivo es requerido")
  });