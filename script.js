const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

//sidebar
open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".main,.math-info,.math-info1,.overview,.toggle,.mainBG,.header,.list1,.list2,.search,.btn,.answer,.button,.button1,a"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

//Home Page reveal
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
}
  
//Sticky Navbar
window.addEventListener("scroll" ,function() {
  let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//TRIGO
function function_trigo() {
  var strexpr = document.querySelector('#search-trigo').value

  if(strexpr === "")
    return
  
  try{
    var expr = strexpr.toString()
    var answer = nerdamer(expr).evaluate()
    document.querySelector('#answer-trigo').innerHTML = answer.toString()
  }
  catch(error){
    document.querySelector('#answer-trigo').innerHTML = error.message
  }
}


//CALCULUS
//differentiation
function function_diff() {
  var strexpr = document.querySelector('#search-diff').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer.diff(expr,'x')
  document.querySelector('#answer-diff').innerHTML = answer.toString()

}
//integration
function function_integ() {
  var strexpr = document.querySelector('#search-integ').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer.integrate(expr,'x')
  document.querySelector('#answer-integ').innerHTML = answer.toString()

}
//limit
function function_limit() {
  var strexpr1 = document.querySelector('#search-expr').value
  var strexpr2 = document.querySelector('#search-limit').value

  if(strexpr1 === "" || strexpr2 ==="")
    return

  var expr1 = strexpr1.toString()
  var expr2 = strexpr2.toString()
  var answer = nerdamer.limit(expr1,'x',expr2)
  document.querySelector('#answer-limit').innerHTML = answer.toString()

}


//ALGEBRA
//divide
function function_divide() {
  var strexpr = document.querySelector('#search-divide').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer(expr)
  document.querySelector('#answer-divide').innerHTML = answer.toString()
}
//factor
function function_factor() {
  var strexpr = document.querySelector('#search-factor').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer.factor(expr)
  document.querySelector('#answer-factor').innerHTML = answer.toString()
}
//lcm
function function_lcm() {
  var strexpr = document.querySelector('#search-lcm').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer(expr)
  document.querySelector('#answer-lcm').innerHTML = answer.toString()
}
//gcd
function function_gcd() {
  var strexpr = document.querySelector('#search-gcd').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer(expr)
  document.querySelector('#answer-gcd').innerHTML = answer.toString()
}
//roots
function function_root() {
  var strexpr = document.querySelector('#search-root').value

  if(strexpr === "")
    return

  var expr = strexpr.toString()
  var answer = nerdamer.roots(expr)
  document.querySelector('#answer-root').innerHTML = answer.toString()
}


//MATRIX
//Cross Product
function function_crossProd() {

  var strexpr = document.querySelector('#search-crossProd').value

  if(strexpr === "")
    return
  
  var expr = strexpr.toString()
  var answer = nerdamer(expr).evaluate()
  document.querySelector('#answer-crossProd').innerHTML = answer.toString() 

}
//Dot Product
function function_dotProd() {

  var strexpr = document.querySelector('#search-dotProd').value

  if(strexpr === "")
    return
  
  var expr = strexpr.toString()
  var answer = nerdamer(expr).evaluate()
  document.querySelector('#answer-dotProd').innerHTML = answer.toString() 

}
//determinant
function function_determinant() {

  var strexpr = document.querySelector('#search-determinant').value

  if(strexpr === "")
    return
  
  var expr = strexpr.toString()
  var answer = nerdamer.determinant(expr)

  console.log(answer.toString())
  document.querySelector('#answer-determinant').innerHTML = answer.toString() 

}
//inverse
function function_inverse() {

  var strexpr = document.querySelector('#search-inverse').value

  if(strexpr === "")
    return
  
  var expr = strexpr.toString()
  var answer = nerdamer.invert(expr).toString()
  //console.log(answer.replace('matrix',''))
  document.querySelector('#answer-inverse').innerHTML = answer.replace('matrix','')

}
//transpose
function function_transpose() {

  var strexpr = document.querySelector('#search-transpose').value

  if(strexpr === "")
    return
  
  var expr = strexpr.toString()
  var answer = nerdamer.transpose(expr).toString()
  //console.log(answer.replace('matrix',''))
  document.querySelector('#answer-transpose').innerHTML = answer.replace('matrix','')

}


//MATHFUNCTION
function function_math() {

  var strexpr = document.querySelector('#search-mathfun').value

  if(strexpr === "")
    return 
  
  var expr = strexpr.toString()
  console.log(expr)
  var answer = nerdamer(expr).evaluate()
  document.querySelector('#answer-mathfun').innerHTML = answer.toString()

}