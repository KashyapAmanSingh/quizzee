

const Qn = [{
    'que':'Which of the following is a Markup Language',
    'a':'Html',
    'b':'css',
    'c':'java',
    'd':'php',
    'correct': 'a'
},

{
    'que':'Which of the following object oriented language',
    'a':'Html',
    'b':'java script',
    'c':'java',
    'd':'Sql',
    'correct': 'c'
},

{
    'que':'Which of the following is best language',
    'a':'Html',
    'b':'css',
    'c':'java',
    'd':'javascript',
    'correct': 'd'
}]

let index=0;
let total =Qn.length;
let right = 0;
let wrong = 0;

let qbox= document.getElementById("qubox");
const optinp = document.querySelectorAll(`.opts`)
const loading = ()=>{
   if(index==total){
    return endquiz();
   }
    reset();
    const data = Qn[index];
          console.log(data);
          qbox.innerText= `${index+1} ${"-"} ${data.que}`
         optinp[0].nextElementSibling.innerText=data.a;
         optinp[1].nextElementSibling.innerText=data.b;
         optinp[2].nextElementSibling.innerText=data.c;
         optinp[3].nextElementSibling.innerText=data.d;
} 
  
 const submtquz =()=>{
    const data = Qn[index];
    const answ = getanswer();
    if(answ === data.correct){
        right++;
    }else{
        wrong++;
    }
  
    index++;
    loading();
    return;
 }
 document.getElementById("btn").addEventListener("click", submtquz)
  
 
 const getanswer =() =>{
    let answer ;
    optinp.forEach((input) =>{if(input.checked){
        answer =input.value
       
    }
    
 })
 return answer;
  }

const reset =()=>{
    optinp.forEach((input) =>{
        input.checked=false;
 })
  }

  const endquiz = () =>{
    document.getElementById("box").innerHTML =`<h3>Thank you for playing </h3>
    <h3>${right}/${total} Are Correct <h3/>`;
    document.getElementById("box").style.fontSize="30px";
    document.getElementById("box").style.textalign="center";
    
  }
    
//initsl call pabge load hote hee call 
loading();










