const listaUsers = document.getElementById("lista_user");
const users = "https://jsonplaceholder.typicode.com/users";

async function fetchUser(endPoint) {
  const request = await fetch(endPoint);

  if (!request.ok) {
    const message = `Ha sucedido un Error, codigo de Error:  ${request.status}`;
    throw new Error(message);
  }

  const data = await request.json();
  return data;
}

async function completeUser(data) {
  listaUsers.innerHTML = "";
  data.forEach((user) => {
    listaUsers.innerHTML += `
        <tr class="bg-white">
          <td class="border p-2">${user.id}</td>
          <td class="border p-2">${user.name}</td>
          <td class="border p-2">${user.username}</td>
          <td class="border p-2">${user.email}</td>
          <td class="border p-2">${user.address.city}</td>
          <td class="border p-2">${user.phone}</td>
          <td class="border p-2">${user.website}</td>
          <td class="border p-2">${user.company.name}</td>
        </tr>
      `;
  });
}

fetchUser(users)
  .then((data) => {
    completeUser(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
