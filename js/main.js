window.onload = function() {
  var heart = document.getElementsByClassName("shop__img--heart");
  for(var i = 0; i < heart.length; i++) {
    var elem = heart[i];
    elem.addEventListener("click", function(){
        this.parentElement.classList.toggle("red");
    });
  }

  var addToCart = document.getElementsByClassName("shop__item__btn");
  for(var i = 0; i < addToCart.length; i++) {
    var elem1 = addToCart[i];
    elem1.addEventListener("click", function(e){
        e.preventDefault();
        this.parentElement.parentElement.classList.toggle("active-count");
    });
  }

  const btns = document.querySelectorAll('.counter__btn');
  btns.forEach(btn=>{
    btn.addEventListener('click', function(){
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__input');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
        if (currentValue === 1){
          this.parentElement.parentElement.classList.toggle("active-count");
        }
      }
      inp.value = newValue;
    })
  
  });
 

};
  