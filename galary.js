const a = document.querySelectorAll("li>a");


function onloadhomepage(){
    a[0].classList.add("listitemactive");
}

function onloadproductspage(){    
    a[1].classList.add("listitemactive");
    arrowicons[0].classList.add('diactivate');
}

function onloadcomapanypage(){    
    a[2].classList.add("listitemactive");
}

function onloadcontactuspage(){
    a[3].classList.add("listitemactive");
}


//hambourger menu event
document.querySelector('body>button').addEventListener('click' , ()=>{
    document.querySelector('body>button').classList.toggle('show');
})

//resize
window.addEventListener("resize", ()=>{
    if (window.matchMedia("(min-width: 992px").matches) {
        //large
        slider.initialization()
    }
    else{
        //small
    }
});


//gallary


/*ركزي ايه الي بيتشفت السيكش الي جوه الجالري الي فيه الصور بس من غير الازرار*/
galary = document.querySelector('.galary>section')
galaryimg = document.querySelectorAll('.galary img')
firstimgwidth = galaryimg[0].clientWidth + 11
arrowicons = document.querySelectorAll('.galary button')

function slider(){
    let controlbtn;
    let activebutton;

    function createcontrolbtn(){
        if(window.matchMedia("(min-width: 992px").matches){
            //large
            for(let i =0 ; i<galaryimg.length/2;i++){
                let button = document.createElement('button')
                button.classList.add('controlbtn')
                document.querySelector('.products>section:nth-child(2)').appendChild(button)
            }
        }
        else if(window.matchMedia("(min-width: 640px").matches){
            //small
            for(let i =0 ;i<galaryimg.length-1;i++){
                let button = document.createElement('button')
                button.classList.add('controlbtn')
                document.querySelector('.products>section:nth-child(2)').appendChild(button)
            }
        }
        else if(window.matchMedia("(min-width: 320px").matches){
            //very small
            for(let i =0 ;i<galaryimg.length;i++){
                let button = document.createElement('button')
                button.classList.add('controlbtn')
                document.querySelector('.products>section:nth-child(2)').appendChild(button)
            }
        }
        controlbtn = document.querySelectorAll(".products>section:nth-child(2)>button");
    }
    
    function initialization(){
        activebutton = controlbtn[0].classList.add('active') || document.querySelector('.active');
    }

    function movebyarrow(){
        arrowicons.forEach(icon => {
            icon.addEventListener('click' , ()=>{
                removeclass()
                galary.scrollLeft += icon.classList[0] == "prevbtn" ? -firstimgwidth : firstimgwidth
                if(window.matchMedia("(min-width: 992px").matches){
                    //بيتحرك خطوتين ف ضربت ف اتنين
                    galary.scrollLeft += icon.classList[0] == "prevbtn" ? -firstimgwidth*2 : firstimgwidth*2
                    if(icon.classList[0] == "prevbtn" && galary.scrollLeft<=firstimgwidth){
                        arrowicons[0].classList.add('diactivate')
                    }
                    else{
                        arrowicons[0].classList.remove('diactivate')
                    }
                    if(galary.scrollLeft==firstimgwidth*(galaryimg.length-4)){
                        arrowicons[1].classList.add('diactivate')
                    }
                    else{
                        arrowicons[1].classList.remove('diactivate')
                    }
                }
                else if(window.matchMedia("(min-width: 640px").matches){
                    if(icon.classList[0] == "prevbtn" && galary.scrollLeft<firstimgwidth){
                        arrowicons[0].classList.add('diactivate')
                    }
                    else{
                        arrowicons[0].classList.remove('diactivate')
                    }
                    if(galary.scrollLeft==firstimgwidth*(galaryimg.length-3)){
                        arrowicons[1].classList.add('diactivate')
                    }
                    else{
                        arrowicons[1].classList.remove('diactivate')
                    }
                }
                else if(window.matchMedia("(min-width: 320px").matches){
                    if(icon.classList[0] == "prevbtn" && galary.scrollLeft==firstimgwidth){
                        arrowicons[0].classList.add('diactivate')
                    }
                    else{
                        arrowicons[0].classList.remove('diactivate')
                    }
                    if(galary.scrollLeft==firstimgwidth*(galaryimg.length-2)){
                        arrowicons[1].classList.add('diactivate')
                    }
                    else{
                        arrowicons[1].classList.remove('diactivate')
                    }
                }
                if(icon.classList[0] == "nextbtn"){
                    activebutton = activebutton.nextElementSibling;
                }
                else{
                    activebutton = activebutton.previousElementSibling;
                }
                addclass()
            })
        })
    }

    createcontrolbtn()

    function removeclass(){
        controlbtn.forEach(btn =>{
            btn.classList.remove('active')
       })
    }

    function addclass(){
        //add active class to active btn
        activebutton.classList.add('active')
    }

    function movebycontrolbtn(index){
        if(window.matchMedia("(max-width: 992px").matches){
            //small
            galary.scrollLeft = firstimgwidth*index
            if(index==galaryimg.length-1 && window.matchMedia("(min-width: 320px").matches){
                arrowicons[1].classList.add('diactivate')
            }
            else{
                arrowicons[1].classList.remove('diactivate')
            }
            if(index==galaryimg.length-2 && window.matchMedia("(min-width: 640px").matches){
                arrowicons[1].classList.add('diactivate')
            }
            else{
                arrowicons[1].classList.remove('diactivate')
            }
            if(index==0){
                arrowicons[0].classList.add('diactivate')
            }
            else{
                arrowicons[0].classList.remove('diactivate')
            }
        }
        else{
            //large
            galary.scrollLeft = firstimgwidth*(index*2)
            if(index==galaryimg.length-4){
                arrowicons[1].classList.add('diactivate')
            }
            else{
                arrowicons[1].classList.remove('diactivate')
            }
            if(index==0){
                arrowicons[0].classList.add('diactivate')
            }
            else{
                arrowicons[0].classList.remove('diactivate')
            }
        }
    }

    controlbtn.forEach((btn,index) =>{
        btn.addEventListener('click',()=>{
            removeclass()
            activebutton = btn
            addclass()
            movebycontrolbtn(index)
        })
    })

    initialization()
    movebyarrow()
}

slider()


//open img modal
galaryimg.forEach( (img,index) =>{
    img.addEventListener('click',(e)=>{
        document.getElementsByClassName('showimg')[0].classList.add('open');
        document.querySelector('.showimg>section>img').src=e.target.src;
        index++;
        document.querySelector('.showimg>p').innerHTML = `${index} of 6`;

        //move photos by click on img itself
        document.querySelector(".showimg>section img").addEventListener('click',()=>{
            if(index==galaryimg.length){
                //the end start new raund
                index=1;
                document.querySelector(".showimg>section img").src=galaryimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
            else{
                document.querySelector(".showimg>section img").src=galaryimg[index].src;
                index++;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
        })

        //move photos by click on next btn
        document.querySelectorAll(".showimg>section>button")[1].addEventListener('click',()=>{
            if(index==galaryimg.length){
                //the end start new raund
                index=1;
                document.querySelector(".showimg>section img").src=galaryimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
            else{
                document.querySelector(".showimg>section img").src=galaryimg[index].src;
                index++;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
        })

        //move photos by click on previous btn
        document.querySelectorAll(".showimg>section>button")[0].addEventListener('click',()=>{
            console.log(index)
            if(index==1){
                //the end start new raund
                index=galaryimg.length;
                document.querySelector(".showimg>section img").src=galaryimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
            else{
                index--;
                document.querySelector(".showimg>section img").src=galaryimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
        })
    })
})

//close open modal
document.querySelector('.showimg').addEventListener('click' , (e)=>{
    if(e.target.closest('.showimg>button')|| (!e.target.closest('.showimg>section>img')&!e.target.closest('.showimg>section i'))){
        document.getElementsByClassName('showimg')[0].classList.remove('open')
    }
})
