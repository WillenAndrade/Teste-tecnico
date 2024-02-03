const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password") 

form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleLogin()
})

const handleLogin = () => {
    window.alert(`        Email: ${email.value}
        Senha: ${password.value}`)
}
