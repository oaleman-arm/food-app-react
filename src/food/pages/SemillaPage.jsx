import {FoodCategoryList} from "../components";

import {useCart} from "../context/UseCart";

export const SemillaPage = () => {
    const {addToCart} = useCart();
    return (
        <>

            <h1 className="text-center mt-5 pt-5">Semillas</h1>
            <hr />
            <FoodCategoryList category='semillas' addCart={addToCart} />
        </>
    );
}