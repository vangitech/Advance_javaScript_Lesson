
// exporting http requests
export const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error){
      console.error ('Error fetching products:', error);
      throw error;
    }
  };
  
  
  
  
//   module.exports = (fetchProduct)