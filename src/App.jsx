

const App = () => {
  let products = [];

  fetch("https://dummyjson.com/products").then((response)=>{
    console.log("data from api", response);
    products = response.data;
    console.log("products", products);
  })

  return <>Hellwo </>
};

export default App;
