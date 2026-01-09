import {FoodCategoryList, SideCart} from "../components";

import {useCart} from "../context/UseCart";

export const VegetalPage = () => {
    const {addToCart} = useCart();
    return (
        <>

            <h1 className="text-center mt-5 pt-5">Vegetales</h1>
            <hr />
            <FoodCategoryList category='vegetales' addCart={addToCart} />
        </>
    );
}