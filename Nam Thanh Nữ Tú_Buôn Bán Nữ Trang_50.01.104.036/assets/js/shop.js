function searchUser() {
    let valueSearchInput = document.getElementById("search").value
    let userSearch = users.filter(value => {
        return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    renderUser(userSearch)
}