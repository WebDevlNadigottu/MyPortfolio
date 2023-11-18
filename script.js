/*
let Edu = document.getElementById('Edu');
let Exp = document.getElementById('Exp');
let SubEdu = document.getElementById('SubEdu');
let SubExp = document.getElementById('SubExp');
let isShow = true;
Edu.addEventListener('click', ()=>{
    if(isShow){
        SubEdu.classList.add('active');
        isShow = false;
    }else{
        SubEdu.classList.remove('active')
        isShow = true;
    }
})
*/
let EduShow = true;
$(document).ready(function(){
    $('#SubEdu').hide(function(){
        $('.EduHide').text("view")
    });
    $('#Edu').click(function(){
        $('#SubEdu').toggle(400, function(){
            if(EduShow){
                $('#EduHide').text("hide");
                EduShow = false;
            }else{
                $('#EduHide').text("view")
                EduShow = true;
            }
        });
    })
})

let ExpShow = true;
$(document).ready(function(){
    $('#SubExp').hide(function(){
        $('#ExpHide').text("view")
    });
    $('#Exp').click(function(){
        $('#SubExp').toggle(400, function(){
            if(ExpShow){
                $('#ExpHide').text("hide");
                ExpShow = false;
            }else{
                $('#ExpHide').text("view");
                ExpShow = true;
            }
        });
    })
})