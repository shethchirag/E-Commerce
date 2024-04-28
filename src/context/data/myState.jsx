import { useEffect, useState } from "react";
import myContext from "./MyContext";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

const initialProducts = {
  title: null,
  price: null,
  imageUrl: null,
  category: null,
  description: null,
  time: Timestamp.now(),
  date: new Date().toDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }),
};

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const addProducts = async () => {
    let allFieldsFilled = true;
    for (const key in products) {
      if (products[key] === null) {
        toast.error(
          `Please Fill the ${key.charAt(0).toUpperCase() + key.slice(1)} Field`
        );
        allFieldsFilled = false;
      }
    }
    if (!allFieldsFilled) {
      return; // Stop execution if any field is empty
    }

    try {
      setLoading(true);
      const productsRef = collection(fireDB, "products");
      await addDoc(productsRef, products);
      toast.success("Product added successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductsData();
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);
  const getProductsData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  const userProfile = {
    profile_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6uqtQ-JqOGQD_VrjhSnpfz58NZUV1XyUp2bF2QpCVA&s",
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#01223c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <myContext.Provider
      value={{
        mode,
        toggleMode,
        userProfile,
        loading,
        setLoading,
        addProducts,
        products,
        setProducts,
        product,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default MyState;
