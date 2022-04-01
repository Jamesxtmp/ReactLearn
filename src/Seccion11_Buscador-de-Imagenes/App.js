import "./app.css"
import { useState } from "react"
import { Formik, Form, Field } from "formik"
import { createApi } from 'unsplash-js';


const unsplashApi = createApi({
    accessKey: 'eLdKHKg0gCJRR9FfeISKufWk1A1n4zbaxLbmOHUanho',
});

const App = () => {
    const [ images, setImages ] = useState([])
    console.log( images )
    return(
        <div className="wrap-app" >
            <header>
                <Formik
                initialValues={{
                    search: ''
                }}
                onSubmit={ async ( values ) => {
                    const respuesta = unsplashApi.search.getPhotos({
                        query: values.search,
                        page: 1,
                        perPage: 15
                    });
                    const images = ( await respuesta ).response.results
                    setImages( images )
                }}
                >
                    <Form>
                        <Field
                            name="search"
                        ></Field>
                    </Form>
                </Formik>
            </header>
            <div className="wrap-images" >
                {
                    images.map( image => 
                        <div key={image.id} className="target" >
                            <img src={ image.urls.regular } ></img>
                            <span>{ `Por: ${ image.user.name }` }</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default App