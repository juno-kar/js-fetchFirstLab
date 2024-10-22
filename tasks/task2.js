"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function createUser({ name, email }) {
  // Ваш код
  try {
   const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email
          })
  });
  
  const data = await response.json();
  return data;
  } catch (error) {
    console.error("Помилка при створенні користувача:", error);
  }
  }
  
  const url = "https://jsonplaceholder.typicode.com/users";
  console.log(createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" }));
  
  module.exports = createUser;
  
