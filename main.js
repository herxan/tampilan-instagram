let userlist = document.getElementById('user-list');

fetch('https://dummyjson.com/users')
.then(response => response.json())
.then((res) => {
    let users = res.users;
    let html = "";
    users.forEach(user => {
        console.log(user);
        html += `<div class="card shadow mt-05">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img src="${user.image}" width="175">    
                </div>
                <div class="col-9">
                    <h5>Biodata</h5>
                    <p class="mb-0">Username : ${user.username}</p>
                    <p class="mb-0">Name : ${user.firstName} ${user.lastName}</p>
                    <p class="mb-0">Birthdate : ${user.birthDate}</p>
                    <p class="mb-0">Address : ${user.address.city}</p>
                </div>
            </div>
        </div>
    </div>`;
    })
    userlist.innerHTML = html;
});