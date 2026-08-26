const btAddUser = document.getElementById("addUser");

btAddUser?.addEventListener("click", (e) => {
    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex");
    btAddUser.classList.add("hidden");
});
const btClose = document.getElementById("btClose");
btClose?.addEventListener("click", (e) => {
    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    btAddUser.classList.remove("hidden");
});