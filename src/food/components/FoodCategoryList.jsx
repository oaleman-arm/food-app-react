import {useFilteredFood} from "../hooks/useFilteredFood";
import {FoodItem,SearchInput} from "./index";

export const FoodCategoryList = ({category, addCart}) => {
    const { filteredFood, name, setName, isLoading } = useFilteredFood(category);

    return (
            <div className="container">
                <div className="col-6 text-center mx-auto mb-3 mt-3">
                    <SearchInput value={name} onChange={setName} />
                </div>
                {
                    isLoading && (<h2 className="text-center mt-3">Loading...</h2>)
                }
                {
                    (filteredFood.length === 0 && !isLoading)
                    && (<h3 className="text-center mt-3">No se encontro producto "{name}"</h3>)
                }
                <div className="row row-cols-1 row-cols-md-4 g-3">
                    {
                        filteredFood.map( (food) => (
                            <FoodItem key={food.id} { ...food } addCart={addCart}   />
                        ))
                    }
                </div>
            </div>
    );
}