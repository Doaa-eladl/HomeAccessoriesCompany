const a = document.querySelectorAll("li>a");

const prevbtn = document.getElementsByClassName("prevbtn")[0];
const nextbtn = document.getElementsByClassName("nextbtn")[0];
const productsimg = [...document.querySelectorAll('.products>section>section>img')]
//use it to know when i stop
let clicknum = 0;
//use it to accumelate shift destance
let shift = 0;


const controlbtn = document.getElementsByClassName("controlbtn");

function onloadhomepage(){
    a[0].classList.add("listitemactive");
}


function onloadproductspage(){    
    a[1].classList.add("listitemactive");
    prevbtn.classList.add('diactivate');
    controlbtn[0].classList.add('active');
}

function onloadcomapanypage(){    
    a[2].classList.add("listitemactive");
}

function onloadcontactuspage(){
    a[3].classList.add("listitemactive");
}


//hambourger menu event
document.querySelector('body>button').addEventListener('click' , ()=>{
    if(document.querySelector('header').style.display=='flex'){
        //close
        document.querySelector('header').style.display = 'none';
        document.querySelector('body>button').style.left = '0';
    }
    else if(document.querySelector('header').style.display!='flex' & window.matchMedia("(max-width: 638px").matches){
        //open less 638px
        document.querySelector('header').style.display = 'flex';
        document.querySelector('body>button').style.left = '42vw';
    }
    else{
        //open  less 990px
       document.querySelector('header').style.display = 'flex';
       document.querySelector('body>button').style.left = '37vw'; 
    }
})

//resize
window.addEventListener("resize", ()=>{
    if (window.matchMedia("(min-width: 990px").matches) {
        //large
        document.querySelector('header').style.display = 'flex';
        //رجعها لمكانها
        document.querySelector('.galary >section').style.transform = "translateX(0%)"
        controlbtn[0].classList.add('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
    }
    else{
        //small
        document.querySelector('header').style.display = 'none';
        document.querySelector('body>button').style.left = '0';
    }
});

//gallary

controlbtn[0].addEventListener('click',()=>{
    if (prevbtn.classList.contains("diactivate")) {
        //متعملش حاجه
    }
    else{
        prevbtn.classList.add('diactivate');
        nextbtn.classList.remove('diactivate');
        controlbtn[0].classList.add('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
        controlbtn[3].classList.remove('active');
        controlbtn[4].classList.remove('active');
        controlbtn[5].classList.remove('active');
        document.querySelector('.galary >section').style.overflow = "visible";
        document.querySelector('.galary >section').style.transform = "translateX(0%)"
    }
})

controlbtn[1].addEventListener('click',()=>{
    prevbtn.classList.remove('diactivate');
    nextbtn.classList.remove('diactivate');
    controlbtn[1].classList.add('active');
    controlbtn[0].classList.remove('active');
    controlbtn[2].classList.remove('active');
    controlbtn[3].classList.remove('active');
    controlbtn[4].classList.remove('active');
    controlbtn[5].classList.remove('active');
    document.querySelector('.galary >section').style.overflow = "visible";
    if(window.matchMedia("(min-width: 990px").matches){
        //large
        document.querySelector('.galary >section').style.transform = "translateX(-70%)"
    }
    else if(window.matchMedia("(max-width: 638px").matches){
        //very small
        document.querySelector('.galary >section').style.transform = "translateX(-53vw)"
    }
    else if(window.matchMedia("(max-width: 990px").matches){
        //small
        document.querySelector('.galary >section').style.transform = "translateX(-52%)"
    }
})

controlbtn[2].addEventListener('click',()=>{
    //on large screen mode at the end
    controlbtn[2].classList.add('active');
    controlbtn[1].classList.remove('active');
    controlbtn[0].classList.remove('active');
    controlbtn[3].classList.remove('active');
    controlbtn[4].classList.remove('active');
    controlbtn[5].classList.remove('active');
    prevbtn.classList.remove('diactivate');
    document.querySelector('.galary >section').style.overflow = "visible"; 
    if (nextbtn.classList.contains("diactivate") & window.matchMedia("(min-width: 990px").matches) {
        //متعملش حاجه
    }
    //on large screen mode
    else if(window.matchMedia("(min-width: 990px").matches){
        nextbtn.classList.add('diactivate');
        document.querySelector('.galary >section').style.transform = "translateX(-105%)"
    }
    else if(window.matchMedia("(max-width: 638px").matches){
        //very small
        document.querySelector('.galary >section').style.transform = "translateX(-106vw)"
    }
    else if(window.matchMedia("(max-width: 990px").matches){
        //small screen
        nextbtn.classList.remove('diactivate');   
        document.querySelector('.galary >section').style.transform = "translateX(-105%)"
    }
})

controlbtn[3].addEventListener('click',()=>{
    prevbtn.classList.remove('diactivate');
    nextbtn.classList.remove('diactivate');
    controlbtn[2].classList.remove('active');
    controlbtn[1].classList.remove('active');
    controlbtn[0].classList.remove('active');
    controlbtn[3].classList.add('active');
    controlbtn[4].classList.remove('active');
    controlbtn[5].classList.remove('active');
    document.querySelector('.galary >section').style.overflow = "visible";    
    if(window.matchMedia("(max-width: 638px").matches){
        //very small
        document.querySelector('.galary >section').style.transform = "translateX(-159vw)"
    }
    else if(window.matchMedia("(max-width: 990px").matches){
        //small
        document.querySelector('.galary >section').style.transform = "translateX(-159%)"
    }    
})

controlbtn[4].addEventListener('click',()=>{
    prevbtn.classList.remove('diactivate');
    controlbtn[2].classList.remove('active');
    controlbtn[1].classList.remove('active');
    controlbtn[0].classList.remove('active');
    controlbtn[3].classList.remove('active');
    controlbtn[4].classList.add('active');
    controlbtn[5].classList.remove('active');
    document.querySelector('.galary >section').style.overflow = "visible";  
    //on small screen mode at the end
    if (nextbtn.classList.contains("diactivate") & window.matchMedia("(max-width: 990px").matches) {
        //متعملش حاجه
    }
    //on very small screen mode
    else if(window.matchMedia("(max-width: 638px").matches){
        nextbtn.classList.remove('diactivate');
        controlbtn[5].classList.remove('active');
        document.querySelector('.galary >section').style.transform = "translateX(-451%)"
    }
    //on small screen mode
    else if(window.matchMedia("(max-width: 990px").matches){
        nextbtn.classList.add('diactivate');
        document.querySelector('.galary >section').style.transform = "translateX(-209%)"
    }
})

controlbtn[5].addEventListener('click',()=>{
    prevbtn.classList.remove('diactivate');
    controlbtn[2].classList.remove('active');
    controlbtn[1].classList.remove('active');
    controlbtn[0].classList.remove('active');
    controlbtn[3].classList.remove('active');
    controlbtn[4].classList.remove('active');
    controlbtn[5].classList.add('active');
    document.querySelector('.galary >section').style.overflow = "visible";
    //on small screen mode at the end
    if (nextbtn.classList.contains("diactivate") & window.matchMedia("(max-width: 990px").matches) {
        //متعملش حاجه
    }
    //on very small screen mode at the end
    else if(nextbtn.classList.contains("diactivate") & window.matchMedia("(max-width: 638px").matches){
        //متعملش حاجه
    }
    //on very small screen mode
    else if(window.matchMedia("(max-width: 638px").matches){
        console.log('hhhhh')
        document.querySelector('.galary >section').style.transform = "translateX(-564%)";
        nextbtn.classList.add('diactivate');
    }
})


//شغال علي عدد الصور دي بس و بيبوظ لو زادو ف لسه محتاجه اشتغل اكتر
//another method move section not photo
//previous button movement
prevbtn.addEventListener('click',()=>{
    document.querySelector('.galary >section').style.overflow = "visible";
    if (prevbtn.classList.contains("diactivate")) {
        //متعملش حاجه
    }
    else if(nextbtn.classList.contains("diactivate") & window.matchMedia("(min-width: 990px").matches){
        //first click move one photo do that at large screem mode only
        document.querySelector('.galary >section').style.transform = "translateX(-70%)"
        nextbtn.classList.remove('diactivate');
        controlbtn[1].classList.add('active');
        controlbtn[0].classList.remove('active');
        controlbtn[2].classList.remove('active');
    }
    else if(window.matchMedia("(min-width: 990px").matches){
        //large screen step two photos
        document.querySelector('.galary >section').style.transform = "translateX(0%)"
        prevbtn.classList.add('diactivate');
        controlbtn[0].classList.add('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
    }
    //very large condition comes first
    else if(window.matchMedia("(max-width: 638px").matches){
        //small screen mode step one photo
        clicknum--
        shift = shift+52;
        nextbtn.classList.remove('diactivate');
        document.querySelector('.galary >section').style.transform = `translateX(${shift}vw)`
        //reset all only active one
        controlbtn[0].classList.remove('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
        controlbtn[3].classList.remove('active');
        controlbtn[4].classList.remove('active');
        controlbtn[5].classList.remove('active');
        controlbtn[clicknum].classList.add('active');
        //stop
        if(clicknum==0){
            console.log('here')
            prevbtn.classList.add('diactivate');
            controlbtn[0].classList.add('active');
            controlbtn[1].classList.remove('active');
            controlbtn[2].classList.remove('active');
            controlbtn[3].classList.remove('active');
            controlbtn[4].classList.remove('active');
            controlbtn[5].classList.remove('active');
        }
    }

    else if(window.matchMedia("(max-width: 990px").matches){
        //small screen mode step one photo
        clicknum--
        shift = shift+52;
        nextbtn.classList.remove('diactivate');
        document.querySelector('.galary >section').style.transform = `translateX(${shift}%)`
        //reset all only active one
        controlbtn[0].classList.remove('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
        controlbtn[3].classList.remove('active');
        controlbtn[4].classList.remove('active');
        controlbtn[clicknum].classList.add('active');
        //stop
        if(clicknum==0){
            console.log('here')
            prevbtn.classList.add('diactivate');
            controlbtn[0].classList.add('active');
            controlbtn[1].classList.remove('active');
            controlbtn[2].classList.remove('active');
            controlbtn[3].classList.remove('active');
            controlbtn[4].classList.remove('active');
        }
    }
})
//another method move section not photo
//next button movement
nextbtn.addEventListener('click',()=>{
    document.querySelector('.galary >section').style.overflow = "visible";
    if (nextbtn.classList.contains("diactivate")) {
        //متعملش حاجه
    }
    else if(prevbtn.classList.contains("diactivate") & window.matchMedia("(min-width: 990px").matches){
        //first click move 2 photos do that at large screem mode only
        document.querySelector('.galary >section').style.transform = "translateX(-67.7%)"
        prevbtn.classList.remove('diactivate');
        controlbtn[1].classList.add('active');
        controlbtn[0].classList.remove('active');
        controlbtn[2].classList.remove('active');
    }
    else if(window.matchMedia("(min-width: 990px").matches){
        //large screen step one photo
        document.querySelector('.galary >section').style.transform = "translateX(-102.3%)"
        nextbtn.classList.add('diactivate');
        controlbtn[2].classList.add('active');
        controlbtn[0].classList.remove('active');
        controlbtn[1].classList.remove('active');
    }
    //very large condition comes first
    else if(window.matchMedia("(max-width: 638px").matches){
        //very small screen mode step one photo
        clicknum++
        shift = shift-52;
        console.log(shift)
        prevbtn.classList.remove('diactivate');
        document.querySelector('.galary >section').style.transform = `translateX(${shift}vw)`
        //reset all only active one
        controlbtn[0].classList.remove('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
        controlbtn[3].classList.remove('active');
        controlbtn[4].classList.remove('active');
        controlbtn[5].classList.remove('active');
        controlbtn[clicknum].classList.add('active');
        //stop
        if(clicknum==productsimg.length-1){
            nextbtn.classList.add('diactivate');
            controlbtn[0].classList.remove('active');
            controlbtn[1].classList.remove('active');
            controlbtn[2].classList.remove('active');
            controlbtn[3].classList.remove('active');
            controlbtn[4].classList.remove('active');
            controlbtn[5].classList.add('active');
        }
    }
    else if(window.matchMedia("(max-width: 990px").matches){
        //small screen mode step one photo
        clicknum++
        shift = shift-52;
        console.log(shift)
        prevbtn.classList.remove('diactivate');
        document.querySelector('.galary >section').style.transform = `translateX(${shift}%)`
        //reset all only active one
        controlbtn[0].classList.remove('active');
        controlbtn[1].classList.remove('active');
        controlbtn[2].classList.remove('active');
        controlbtn[3].classList.remove('active');
        controlbtn[4].classList.remove('active');
        controlbtn[clicknum].classList.add('active');
        //stop
        if(clicknum==productsimg.length-2){
            nextbtn.classList.add('diactivate');
            controlbtn[0].classList.remove('active');
            controlbtn[1].classList.remove('active');
            controlbtn[2].classList.remove('active');
            controlbtn[3].classList.remove('active');
            controlbtn[4].classList.add('active');
        }
    }
})


//open img modal
productsimg.forEach( (img,index) =>{
    img.addEventListener('click',(e)=>{
        document.getElementsByClassName('showimg')[0].classList.add('open');
        document.querySelector('.showimg>section>img').src=e.target.src;
        index++;
        document.querySelector('.showimg>p').innerHTML = `${index} of 6`;

        //move photos by click on img itself
        document.querySelector(".showimg>section img").addEventListener('click',()=>{
            if(index==productsimg.length){
                //the end start new raund
                index=1;
                document.querySelector(".showimg>section img").src=productsimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
            else{
                document.querySelector(".showimg>section img").src=productsimg[index].src;
                index++;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
        })

        //move photos by click on next btn
        document.querySelectorAll(".showimg>section>button")[1].addEventListener('click',()=>{
            if(index==productsimg.length){
                //the end start new raund
                index=1;
                document.querySelector(".showimg>section img").src=productsimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
            else{
                document.querySelector(".showimg>section img").src=productsimg[index].src;
                index++;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
        })

        //move photos by click on previous btn
        document.querySelectorAll(".showimg>section>button")[0].addEventListener('click',()=>{
            console.log(index)
            if(index==1){
                //the end start new raund
                index=productsimg.length;
                document.querySelector(".showimg>section img").src=productsimg[index-1].src;
                document.querySelector('.showimg>p').innerHTML = `${index} of 6`;
            }
            else{
                index--;
                document.querySelector(".showimg>section img").src=productsimg[index-1].src;
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



/*
//move photos by click on mg itself
document.querySelector(".showimg>section img").addEventListener('click',()=>{
    let index=productsimg.indexOf(document.querySelector(".showimg>section img"))
    console.log(index)
    if(index==productsimg.length-1){
        //the end start new raund
        console.log(`if + ${index}`)
        document.querySelector(".showimg>section img").src=productsimg[0].src;
        index=1;
    }
    else{
        index++;
        console.log(`else + ${index}`)
        document.querySelector(".showimg>section img").src=productsimg[index].src;
    }
})*/

//gallary
//next button movement



/*دي طريقه تخليه ماشي مع اي عدد صور  لكن مش هتظبط مع الازرار الي تحت فالحاله دي بس
/*
هحتاج اعرف كونت اب بره وداون واقلل وانقص فالزرارين وانا راحه و جاسه
nextbtn.addEventListener('click',()=>{
    if (nextbtn.classList.contains("diactivate")) {
        //متعملش حاجه
    }
    else if(prevbtn.classList.contains("diactivate")){
        countup++;
        document.querySelector('.galary >section').style.overflow = "visible";
        document.querySelector('.galary >section').style.transform = `translateX(-${countup*67.7}%)`
        prevbtn.classList.remove('diactivate');
        controlbtn[1].classList.add('active');
        controlbtn[0].classList.remove('active');
        controlbtn[2].classList.remove('active');
    }
    else{
        countup++;
        document.querySelector('.galary >section').style.overflow = "visible";
        let shift = -67.7-((countup-1)*35)
        document.querySelector('.galary >section').style.transform = `translateX(${shift}%)`
        console.log(countup)
        controlbtn[2].classList.add('active');
        controlbtn[0].classList.remove('active');
        controlbtn[1].classList.remove('active');
        if((productsimg.length-4)<=countup){
            nextbtn.classList.add('diactivate');
        }
    }
})
*/



/*
nextbtn.addEventListener('click',()=>{
    //ليه ناقص اربعه لاني عاوزه اخفي صورتين واجيب بدالهم صورتين
    if ((productsimg.length-4) > (countup*2)) {
        //حرك صورتين
        //بزود 8عشان الجاب بين الصور
        //خلي الزار الرجوع متاح
        countup++;
        countdown++;

        productsimg[countup-1].style.transform = `translateX(-${countup*100}%)`;
        productsimg[countup].style.transform = `translateX(-${((countup+1)*100)+8}%)`;
        productsimg[countup+1].style.transform = `translateX(-${((countup+1)*100)+8}%)`;
        productsimg[countup+2].style.transform = `translateX(-${((countup+1)*100)+8}%)`;
        productsimg[countup+3].style.transform = `translateX(-${((countup+1)*100)+8}%)`;
        prevbtn.classList.remove('diactivate');
    }
    else if((productsimg.length-4) == (countup*2)){
        //حرك صوره واحده
        //خلي الزرار غير قابل للضغط
        //استخدمت شرطين عشان ميكملش ويظهر فراغ
        countup++;
        countdown++;

        productsimg[countup].style.transform = `translateX(-${((countup+1)*100)+12}%)`;
        productsimg[countup+1].style.transform = `translateX(-${((countup+1)*100)+12}%)`;
        productsimg[countup+2].style.transform = `translateX(-${((countup+1)*100)+12}%)`;
        productsimg[countup+3].style.transform = `translateX(-${((countup+1)*100)+12}%)`;
        nextbtn.classList.add('diactivate');
        //لازم اتشيك عشان اصفر والكود يشتغل من غير ماحمل الصفحه
        /*if((productsimg.length-4) < (countup*2)){
            countdown = 0;
        }
    }
})*/

/*
//previous button movement
prevbtn.addEventListener('click',()=>{
    //ليه ناقص 3 لاني عاوزه اخفي صوره واجيب بدالها صوره
    if ((productsimg.length-3) > (countdown*3)) {
        //حرك صوره
        //بزود 10عشان الجاب بين الصور
        //خلي الزار الرجوع متاح
        countdown++;
        countup--;
        productsimg[countdown+4].style.transform = `translateX(-${((countdown)*100)+10}%)`;
        productsimg[countdown+3].style.transform = `translateX(-${((countdown+1)*100)+10}%)`;
        productsimg[countdown+2].style.transform = `translateX(-${((countdown+1)*100)+10}%)`;
        productsimg[countdown+1].style.transform = `translateX(-${((countdown+1)*100)+10}%)`;
        nextbtn.classList.remove('diactivate');
    }
    else if((productsimg.length-3) == (countdown*3)){
        //حرك صورتين
        //خلي الزرار غير قابل للضغط
        //استخدمت شرطين عشان ميكملش ويظهر فراغ
        countdown++;
        countup--;
        productsimg[countdown+2].style.transform = `translateX(-${((countdown-1)*100)+6}%)`;
        productsimg[countdown+1].style.transform = `translateX(-${((countdown-2)*100)+6}%)`;
        productsimg[countdown].style.transform = `translateX(-${((countdown-2)*100)+6}%)`;
        productsimg[countdown-1].style.transform = `translateX(-${((countdown-2)*100)+6}%)`;
        productsimg[countdown-2].style.transform = `translateX(-${((countdown-2)*100)+6}%)`;
        prevbtn.classList.add('diactivate');
        //لازم اتشيك عشان اصفر والكود يشتغل من غير ماحمل الصفحه
        if((productsimg.length-3) < (countdown*3)){
            countup = 0;
        }
    }
})
*/


/*

controlbtn[2].addEventListener('click',()=>{
        if (nextbtn.classList.contains("diactivate")) {
            //متعملش حاجه
        }
        /*else if(countup==0){
            document.querySelector('.galary >section').style.transform = "translateX(-105%)"
            prevbtn.classList.remove('diactivate');
            nextbtn.classList.add('diactivate');
            controlbtn[2].classList.add('active');
            controlbtn[1].classList.remove('active');
            document.querySelector('.galary >section').style.overflow = "visible";
            controlbtn[0].classList.remove('active');
        }*/
        /*
        else{
            document.querySelector('.galary >section').style.transform = "translateX(-105%)"
            prevbtn.classList.remove('diactivate');
            nextbtn.classList.add('diactivate');
            controlbtn[2].classList.add('active');
            controlbtn[1].classList.remove('active');
            document.querySelector('.galary >section').style.overflow = "visible";
            controlbtn[0].classList.remove('active');   
        }
})


//hover effect i 
/*
a.forEach( (item ) => {
    item.addEventListener('mouseover',()=>{
        item.children[0].classList.add("listitemactive");
    })
})

a.forEach( (item) => {
    item.addEventListener('mouseout',()=>{
        item.children[0].classList.remove("listitemactive");
    })
})


*/