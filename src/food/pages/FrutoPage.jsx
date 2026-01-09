import {FoodCategoryList, SideCart} from "../components";

import {useCart} from "../context/UseCart";

export const FrutoPage = () => {
    const {addToCart} = useCart();
    return (
        <>

            <h1 className="text-center mt-5 pt-5">Frutos</h1>
            <hr />
            <FoodCategoryList category='frutos' addCart={addToCart} />
        </>
    );
}