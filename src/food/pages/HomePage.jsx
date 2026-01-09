import {HomeSlider, HomeSectionOne, HomeMostSeller} from "../components";

import {useCart} from "../context/UseCart.jsx";

export const HomePage = () => {
    const {addToCart} = useCart();
    return (
        <>
           <HomeSlider />
           <HomeSectionOne />
           <HomeMostSeller category= "all" addCart={addToCart} />
        </>
    );
}