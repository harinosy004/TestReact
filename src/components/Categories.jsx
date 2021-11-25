function Categories({setActiveCategory, categories}) {
    return (
        <div className="lmj-categories">
            <select onChange={(e) => setActiveCategory(e.target.value)}>
                <option value="">---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories;
