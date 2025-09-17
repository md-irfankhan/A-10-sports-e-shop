import { Card ,Tooltip} from "flowbite-react";               
import { Link } from "react-router";

const ProductCard = ({product}) => {
  const {_id,category,photoUrl,productColor,productDescription,productName,supplierEmail,supplierName}=product;
    return (
        <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={photoUrl}
      
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productName}
        </h5>
      </a>
      <div className="mb-2 flex flex-wrap gap-1.5">
          <span className="bg-blue-100  text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
           {category}
          </span>
          
        </div>
      <div className="mb-5 mt-2.5 flex items-center">
       
       
       <span className="font-medium">By_</span>
       <Tooltip content={supplierEmail}>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {supplierName}
        </span>
      
       </Tooltip>
     
        
      </div>
      <div className="flex items-center justify-between">
        {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}
         <button
            className="border border-white/30 text-cyan-700 bg-white bg-opacity-20 backdrop-blur-sm px-5 py-2.5 text-center text-sm font-medium rounded-lg hover:bg-white hover:bg-opacity-30 hover:text-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50 dark:border-cyan-400 dark:border-opacity-30 dark:text-cyan-400 dark:bg-gray-800 dark:bg-opacity-20 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 dark:hover:text-cyan-300 dark:focus:ring-cyan-800 transition-all duration-300 shadow-lg"
          >
            <Link to={`/details/${_id}`}>View Details</Link>
          </button>
      </div>
    </Card>
    );
};

export default ProductCard;