"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function deleteUser(id) {
  // Ваш код
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return {
      status: response.status
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

console.log(deleteUser(1));

module.exports = deleteUser;
