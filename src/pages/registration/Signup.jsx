import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/MyContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

function Signup() {
  const [name, setSetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading } = useContext(myContext);

  const signUpHandler = async (e) => {
    if (name === "" || email === "" || password === "") {
      return toast.error("Please fill all the fields");
    }
    try {
      setLoading(true);
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);
      const user = {
        name: name,
        vid: users.user.uid,
        email: users.user.email,
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      setSetName("");
      setEmail("");
      setPassword("");
      toast.success("Account created successfully");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="name"
            name="Name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
            value={name}
            onChange={(e) => setSetName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signUpHandler}
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
