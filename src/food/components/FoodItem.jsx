import { Link } from 'react-router-dom';
import Barcode from 'react-barcode';
import { useCart } from '../context/UseCart';
export const FoodItem = ({id, name, image, description, stock, tags, brands, packaging, precioProducto,code = () => {}}) => {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ id, name, image, brands, packaging, price: precioProducto, code });
    };

    return (
        <div className="col animate__animated animate__fadeIn">
            <div id="cardFoodItem" className="card">
                    <img src={image} className="bd-placeholder-img card-img-top" alt={ name } />
                        <div className="card-body">
                            <h5 className="card-title text-truncate" title={name}>{name}</h5>
                            <p className="card-text text-truncate"><strong>Stock: </strong>{stock}</p>
                            <p className="card-text text-truncate"><strong>Precio: </strong>$ {precioProducto}</p>
                            <p className="card-text text-truncate"><strong>Tags: </strong>{tags}</p>
                            <p className="card-text text-truncate"><strong>Descripcion: </strong>{description}</p>
                            <p className="card-text"><strong>Codigo: </strong>{id}</p>
                        </div>
                        <div className="card-footer">
                            <input type="button" value="Agregar" className="btn btn-outline-primary" onClick={handleAdd} />
                        </div>
                </div>
            </div>
    );
}