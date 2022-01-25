let youssfi1=document.getElementById('walid1');
let youssfi2=document.getElementById('walid2');
let youssfi3=document.getElementById('walid3');
let youssfi4=document.getElementById('walid4');
let youssfi5=document.getElementById('walid5');
let youssfi6=document.getElementById('walid6');
let walidyoussfi=document.querySelector('.walidyoussfi');
window.onscroll=function(){
    let value = scrollY;
    youssfi1.style.left = value + 'px';
    youssfi2.style.top = value * 4 + 'px';
    youssfi3.style.top = value * 2 + 'px';
    youssfi4.style.top = value * 1.5 + 'px';
    youssfi5.style.top = value  + 'px';
    youssfi6.style.top = value  + 'px';
    youssfi6.style.left = value * 3 + 'px';
    walidyoussfi.style.fontSize = value  + 'px';
        if(scrollY>=50){
            walidyoussfi.style.fontSize = 50 + 'px';
            walidyoussfi.style.position = 'fixed';
            if(scrollY >= 411){
                walidyoussfi.style.display = 'none'; 
            }else{
                walidyoussfi.style.display = 'block';   
            }
            if(scrollY>=97){
                document.querySelector('.Youssf').style.background = 'linear-gradient(rgb(78 156 169),#240125)'
            }else{
                document.querySelector('.Youssf').style.background = 'linear-gradient(rgb(95, 2, 90),#240125)'
            }
        }

}


