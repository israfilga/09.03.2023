let boxes = document.querySelectorAll(".box");
// console.log(boxes.childNodes);
boxes.forEach(box => {
     box.children[0].addEventListener("click",()=>{
        box.children[0].classList.toggle("text_onclick")
        box.children[1].classList.toggle("text_desc_onclick")
     })
});