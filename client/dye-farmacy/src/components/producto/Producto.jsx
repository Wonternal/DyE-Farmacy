import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";

const Producto = () => {
    const { id } = useParams();

    const [producto, setProducto] = useState();
    /**
     * With the useEffect we check if the _id has a value, if so, enter the if and with the getActor function of 
     * ActorServices it returns the actor data and we save it in actorData, and through the setCurrentActor we save it in currentActor.
     */
    useEffect(() => {
        if (id) {
            async function retriveProduct() {
                try {
                    const productData = await ProductoServices.getProductById(id)
                    setProducto(productData);
                } catch (error) {
                    console.log(error);
                }
            }
            retriveProduct();
        }
    }, [id])

    return(
        <>
        <div>
            <p>
                {producto?.nombre}
            </p>
            <p>
                {producto?.idProducto}
            </p>
            <p>
                {producto?.descripcion}
            </p>
            <p>
                {producto?.precio}
            </p>
        </div>
        </>
    )
};

export default Producto;
