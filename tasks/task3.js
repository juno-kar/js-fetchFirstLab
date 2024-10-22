"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function updateUser(id, updatedData) {
    // Ваш код
        const url = "https://jsonplaceholder.typicode.com/users/" + id;
        
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Не вийшло оновити користувача');
            }
            return response.json();
        })
        .then(data => {
            console.log('Оновлені дані:', data);
            return data;
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
    }    
    
console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
