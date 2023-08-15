/* eslint-disable react/prop-types */

function Product({item, handleAddtoCart, qt, handleChange}) {
  return (
    <div className="bg-white w-[250px] h-[330px] p-2">
        <img className="w-full h-52" src={item.image} alt="not-found"/>
        <div className="font-bold flex justify-between mt-2">
            <p>{item.title}</p>
            <p>${item.price}</p>
        </div>
        <div className="flex justify-center mt-6">
            <button className="text-red-300 bg-white border border-red-300 rounded-l-lg w-20 h-10">
                Interest
            </button>
            <input className=" bg-white border border-gray-400 w-20 h-10 pl-1" type="number" value={qt} onChange={handleChange}/>
            <button onClick={handleAddtoCart} className="text-white bg-[#D5173E] rounded-r-lg w-20 h-10">
                Add
            </button>
        </div>
    </div>
  )
}

export default Product