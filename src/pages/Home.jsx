import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, Sort, Product, PizzaLoader } from '../components/index';
import { setSortBy, setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux//actions/pizzas';
import { addPizza } from '../redux//actions/cart';
// import cart from '../redux/reducers/cart';

const categoryList = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'Популярности', type: 'popular', order: 'desc' },
    { name: 'Цена', type: 'price', order: 'desc' },
    { name: 'Алфавиту', type: 'name', order: 'asc' },
]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items,);
    const cartItems = useSelector(({ cart }) => cart.items,);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded,);
    const { sortBy, category } = useSelector(({ filters }) => filters,);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category, dispatch]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);

    const onSelectSort = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const addPizzaToCart = obj => {
        dispatch(addPizza(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryList}
                />
                <Sort
                    activeSort={sortBy.type}
                    items={sortItems}
                    onClickSort={onSelectSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((obj) =>
                    <Product
                        onAddPizza={addPizzaToCart}
                        key={obj.id}
                        cartCount={cartItems[obj.id] && cartItems[obj.id].items.length} {...obj}
                    />) : Array(12).fill(0).map((_, i) => <PizzaLoader key={i} />)}
            </div>
        </div>
    );
}

export default Home;
