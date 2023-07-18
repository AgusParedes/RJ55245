import ProductosDATA from '../DATA/ProductosDATA.json'

export const PedirDatos = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(ProductosDATA);
      }, 1000);
   });
};