"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function fetchUsers() {
  // Ваш код
    try {
        const response = await fetch(url);
        const users = await response.json();
        return users.map(user => ({
            id: user.id,
            name: user.name
        }));
    } catch (error) {
        console.error("Помилка отримання даних:", error);
    }
}

const url = "https://jsonplaceholder.typicode.com/users";

console.log(fetchUsers());

module.exports = fetchUsers;