let image = document.querySelector('i');
let para = document.querySelector('p');
image.addEventListener("click",()=>{
    para.style.border = "0.5px solid black"
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit, culpa recusandae optio architecto minus non deleniti nisi, dignissimos eveniet exercitationem porro ducimus debitis, quo est et cupiditate laudantium repudiandae."
})