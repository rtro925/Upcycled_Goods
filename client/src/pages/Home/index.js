// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { GetProducts } from "../../apicalls/products";
// import { SetLoader } from "../../redux/loadersSlice";
// import { message } from "antd";
// import Divider from "../../components/Divider";
// import { useNavigate } from "react-router-dom";
// import Filters from "./Filters";
// import moment from "moment";

// function Home() {
//   const [showFilters, setShowFilters] = React.useState(true);
//   const [products, setProducts] = React.useState([]);
//   const [filters, setFilters] = React.useState({
//     status: "approved",
//     category: [],
//     age: [],
//   });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.users);
//   // const getData = async () => {
//   //   try {
//   //     dispatch(SetLoader(true));
//   //     const response = await GetProducts(filters);
//   //     console.log(response)
//   //     dispatch(SetLoader(false));
//   //     if (response.success) {
//   //       setProducts(response.data);
//   //     }
//   //   } catch (error) {
//   //     dispatch(SetLoader(false));
//   //     message.error(error.message);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getData();
//   // }, [filters]);

//   const getData = async () => {
//     try {
//       dispatch(SetLoader(true));
//       const response = await GetProducts(filters);
//       dispatch(SetLoader(false));
//       if (response.success) {
//         setProducts(response.data);
//         console.log(response.data.map((item) => item.name));     }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [filters]);


//   return (
//     <div className="flex gap-5">
//       {showFilters && (
//         <Filters
//           showFilters={showFilters}
//           setShowFilters={setShowFilters}
//           filters={filters}
//           setFilters={setFilters}
//         />
//       )}
//       <div className="flex flex-col gap-5 w-full">
//         <div className="flex gap-5 items-center">
//           {!showFilters && (
//             <i
//               className="ri-equalizer-line text-xl cursor-pointer"
//               onClick={() => setShowFilters(!showFilters)}
//             ></i>
//           )}
//           <input
//             type="text"
//             placeholder="Search Products  here..."
//             className="border border-gray-300 rounded border-solid px-2 py-1 h-14 w-full"
//           />
//         </div>
//         <div
//           className={`
//         grid gap-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}
//       `}
//         >
//           {products?.map((product) => {
//             return (
//               <div
//                 className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
//                 key={product._id}
//                 onClick={() => navigate(`/product/${product._id}`)}
//               >
//                 <img
//                   src={product.images[0]}
//                   className="w-full h-52 p-2 rounded-md object-cover"
//                   alt=""
//                 />
//                 <div className="px-2 flex flex-col">
//                   <h1 className="text-lg font-semibold">{product.name}</h1>
//                   <p className="text-sm">
//                     {product.age} {' '}
//                     {product.age === 1 ? " year" : " years"} {' '}
//                     old
//                   </p>
//                   <Divider />
//                   <span className="text-xl font-semibold text-red-700">
//                     ₹ {product.price}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { GetProducts } from "../../apicalls/products";
// import { SetLoader } from "../../redux/loadersSlice";
// import { message } from "antd";
// import Divider from "../../components/Divider";
// import { useNavigate } from "react-router-dom";
// import Filters from "./Filters";
// import moment from "moment";

// function Home() {
//   const [showFilters, setShowFilters] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     status: "approved",
//     category: [],
//     age: [],
//   });
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.users);

//   const getData = async () => {
//     try {
//       dispatch(SetLoader(true));
//       const response = await GetProducts(filters);
//       dispatch(SetLoader(false));
//       if (response.success) {
//         setProducts(response.data);
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [filters]);

//   const handleSearch = () => {
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setProducts(filteredProducts);
//   };

//   const handleSearchButtonClick = () => {
//     handleSearch();
//   };

//   return (
//     <div className="flex gap-5">
//       {showFilters && (
//         <Filters
//           showFilters={showFilters}
//           setShowFilters={setShowFilters}
//           filters={filters}
//           setFilters={setFilters}
//         />
//       )}
//       <div className="flex flex-col gap-5 w-full">
//         <div className="flex gap-5 ">
//           {!showFilters && (
//             <i
//               className="ri-equalizer-line text-xl cursor-pointer"
//               onClick={() => setShowFilters(!showFilters)}
//             ></i>
//           )}
//           <input
//             type="text"
//             placeholder="Search Products here..."
//             className="border border-gray-300 rounded-xl border-solid px-2 py-1 h-[25px] w-full"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onBlur={handleSearch}
//             onKeyPress={(e) => {
//               if (e.key === "Enter") {
//                 handleSearch();
//               }
//             }}
//           />
//           <button
//             className="bg-primary hover:bg-primary h-[25px] w-[75px] text-white  font-bold  rounded-xl"
//             onClick={handleSearchButtonClick}
//           >
//             Search
//           </button>
//         </div>
//         <div
//           className={`
//         grid gap-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}
//       `}
//         >
//           {products?.map((product) => {
//             return (
//               <div
//                 className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
//                 key={product._id}
//                 onClick={() => navigate(`/product/${product._id}`)}

//               >
//                 <img
//                   src={product.images[0]}
//                   className="w-full h-52 p-2 rounded-md object-cover"
//                   alt=""
//                 />
//                 <div className="px-2 flex flex-col">
//                   <h1 className="text-lg font-semibold">{product.name}</h1>
//                   <p className="text-sm">
//                     {product.age}{" "}
//                     {product.age === 1 ? "year" : "years"} old
//                   </p>
//                   <Divider />
//                   <span className="text-xl font-semibold text-red-700">
//                     ₹ {product.price}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../../apicalls/products";
import { SetLoader } from "../../redux/loadersSlice";
import { message } from "antd";
import Divider from "../../components/Divider";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
import moment from "moment";

function Home() {
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    status: "approved",
    category: [],
    age: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      
      getData();
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  return (
    <div className="flex gap-5">
      {showFilters && (
        <Filters
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5 ">
          {!showFilters && (
            <i
              className="ri-equalizer-line text-xl cursor-pointer"
              onClick={() => setShowFilters(!showFilters)}
            ></i>
          )}
          <input
            type="text"
            placeholder="Search Products here..."
            className="border border-gray-300 rounded-xl border-solid px-2 py-1 h-[25px] w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={handleSearch}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="bg-primary hover:bg-primary h-[25px] w-[75px] text-white  font-bold  rounded-xl"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>
        <div
          className={`
        grid gap-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}
      `}
        >
          {products?.map((product) => {
            return (
              <div
                className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}

              >
                <img
                  src={product.images[0]}
                  className="w-full h-52 p-2 rounded-md object-cover"
                  alt=""
                />
                <div className="px-2 flex flex-col">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <p className="text-sm">
                    {product.age}{" "}
                    {product.age === 1 ? "year" : "years"} old
                  </p>
                  <Divider />
                  <span className="text-xl font-semibold text-red-700">
                    ₹ {product.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;