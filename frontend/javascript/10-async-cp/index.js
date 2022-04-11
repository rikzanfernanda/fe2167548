// lakukan call pada API ini https://jsonplaceholder.typicode.com/todos/1
// dan console.log hasilnya menggunakan async await
// console log error apabila terjadi error

// karena ini adalah environtment node-js, fetch tidak bisa digunakan
// tuliskan program kalian dibawah, dan test kode tersebut di
// https://playcode.io/new/

const callApi = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

callApi();
