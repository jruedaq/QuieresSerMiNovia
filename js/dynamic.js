function invert(hoverBtn) {
    let question = document.getElementById("question")
    let btn1 = document.getElementById("btn-1")
    let btn2 = document.getElementById("btn-2")

    question.innerHTML = "¿Quieres ser mi novia? 😍"
    if (hoverBtn.innerHTML === "No" && btn1.id === hoverBtn.id) {
        btn1.classList.add("btn-success")
        btn1.classList.remove("btn-danger")
        btn1.innerHTML = "Sí"

        btn2.classList.add("btn-danger")
        btn2.classList.remove("btn-success")
        btn2.innerHTML = "No"
    } else if (hoverBtn.innerHTML === "No" && btn2.id === hoverBtn.id) {
        btn1.classList.add("btn-danger")
        btn1.classList.remove("btn-success")
        btn1.innerHTML = "No"

        btn2.classList.add("btn-success")
        btn2.classList.remove("btn-danger")
        btn2.innerHTML = "Sí"
    }
}

function returnTitle() {
    let question = document.getElementById("question")
    question.innerHTML = "¿Quieres ser mi novia? 😁"
}