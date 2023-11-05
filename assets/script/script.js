const misal = document.querySelector(".numbers");
const btn = document.querySelectorAll(".btn");
const deleteAll = document.querySelector(".deleteAll");
const result = document.querySelector(".equal")
const del = document.querySelector(".delete")
//yazdigim deyerlerin her birinin inputda gorunmesi ucun algoritm
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        misal.value += btn[i].value
    })    
}
//butun deyerlerin silinmesi ucun algoritm
deleteAll.addEventListener("click",function () {
    misal.value = " "
})
//misalin cavabini tapmaq ucun alqoritm
result.addEventListener("click",function () {
    misal.value = eval(misal.value)
})
// ededleri 1-1 silmek ucun algoritm
del.addEventListener("click",function () {
    misal.value=misal.value.slice(0,-1)
})