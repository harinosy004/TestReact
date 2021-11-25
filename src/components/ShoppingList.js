import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react/cjs/react.development'
import React from 'react'

function ShoppingList({cart, updateCart}) {
	const [activeCategory, setActiveCategory] = useState('');

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)

		if (currentPlantAdded) {
			const cartFilteredCurrentPlan = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlan, 
				{ name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart, {name, price, amount: 1}])
		}
	}

	return (
		<div className="lmj-shopping-list">
			<Categories setActiveCategory={setActiveCategory} categories={categories}/>

			<ul className="lmj-plant-list">
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					<div key={id}>
						{(activeCategory === category || activeCategory === '') && (<React.Fragment>
						<PlantItem cover={cover} name={name} water={water} light={light} />
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</React.Fragment>)}
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
