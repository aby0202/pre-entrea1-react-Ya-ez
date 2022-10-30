
import { Formik, Form, Field, ErrorMessage } from 'formik'
import "./Form.css"
import { alertConfirm } from '../../SweetAlert/SweetAlert'


const Formulario = ({createOrder}) => {

    const alert= () => {
        alertConfirm(`La compra se  realizo correctamente`)
    }

    const usuario = (valores, {resetForm}) => {
        console.log(valores);
        resetForm();
        createOrder(valores)
        }
    

    return(
        <>
            <Formik 
            initialValues={{
                nombre: '',
                correo: '',
                telefono: '',
                date: '' ,
            }}
            validate={(valores) => {
                let errores = {};

                if(!valores.nombre){
                    errores.nombre=('Por favor ingresa un nombre')
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre = 'el nombre solo puede contener letras y espacios'
                }

                if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
					}

                if(!valores.telefono){
                    errores.telefono=('Por favor ingresa un numero de telefono')
                }else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(valores.telefono)){
                    errores.telefono= 'el telefono puede contener 10 digitos'
                }

                if(!valores.date){
                    errores.date=('Por favor ingresa la fecha actual')
                }else if (!/^\d{4}-\d{2}-\d{2}$/.test(valores.date)){
                    errores.date= 'Ingrese la fecha correctamente con numeros'
                }

                return errores
            }}
                onSubmit={usuario}>

                {( { errors }) => (
                <Form className="formulario">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Agustina Yañez" 
                    />
                    <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)}/>
                </div>
                <div>
                    <label htmlFor="correo">Correo</label>
                    <Field
                    type="text" 
                    id="correo" 
                    name="correo" 
                    placeholder="yanez@gmail.com" />
                    <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)}/>
                </div>
                <div>
                    <label htmlFor="date">Fecha</label>
                    <Field
                    type="text" 
                    id="date" 
                    name="date" 
                    placeholder="2001-11-20" 
                    />
                    <ErrorMessage name="date" component={() => (<div className="error">{errors.date}</div>)}/>
                </div>
                <div>
                    <label htmlFor="telefono">Telefono</label>
                    <Field
                    type="number" 
                    id="telefono" 
                    name="telefono" 
                    placeholder="1198569876" />
                    <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)}/>
                </div>
                <button type="submit" className="buttonCart btnForm" onClick={alert}>Listo!</button>
            </Form>
                )}
            </Formik>
        </>
    )
}

export default Formulario