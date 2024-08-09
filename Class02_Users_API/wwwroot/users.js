let getAllUsersButton = document.getElementById("getAllUsers");
let userIdText = document.getElementById("userIdText");
let getUserByIdButton = document.getElementById("getUserById");
let getRandomUserButton = document.getElementById("getRandomUser");
let list = document.getElementById("list");

let port = 7060;

let getAllUsers = async () => {
    let url = "https://localhost:" + port + "/api/users";
    let response = await fetch(url);

    let allUsersList = await response.json();
    console.log(allUsersList);

    list.innerHTML = '';

    for (i = 0; i < allUsersList.length; i++) {
        list.innerHTML += `${allUsersList[i]}<br/>`;
    }
}

let getUserById = async () => {
    let id = document.getElementById("userIdText").value;
    console.log(id);

    if (parseInt(id)) {
        let url = "https://localhost:" + port + `/api/users/id/${id}`;
        let response = await fetch(url);
        let user = await response.text();
        list.innerHTML = user


    } else {
        list.innerHTML = `<p>${id} is invalid entry. Please enter an integer.</p>`;
    }

}

let getRandomUser = async () => {
    let url = "https://localhost:" + port + `/api/users`;
    let response = await fetch(url);
    let usersList = await response.json();
    let randomNumber = Math.floor(Math.random() * usersList.length) + 1;
    console.log(randomNumber);

    let getUserUrl = "https://localhost:" + port + `/api/users/id/${randomNumber}`;
    let userResponse = await fetch(getUserUrl);
    let user = await userResponse.text();
    console.log(user);

    list.innerHTML = '';
    list.innerHTML = `<p>${user}</p>`;
}

getAllUsersButton.addEventListener("click", getAllUsers);
getUserByIdButton.addEventListener("click", getUserById);
getRandomUserButton.addEventListener("click", getRandomUser);