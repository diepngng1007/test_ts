
import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App : React.FC = (() => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  
  const showForm = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
    <ProductList showForm={showForm} />
    <div>
      {isOpenForm && <ProductForm showForm={showForm} />}
    </div>
  </>
  );
})
 
export default App;
