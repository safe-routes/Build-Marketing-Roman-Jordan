class Active{
        constructor(obj,target){
          this.obj = obj;
          this.target = target;
          this.target.addEventListener('click', () => {
           this.selected();
          })
        }
        selected(){
          if(!this.target.classList.contains('barWrapper')){
            this.obj.forEach(element =>{
              element.classList.remove('active');
            })
          }else{
            this.target.parentNode.classList.toggle('active');
          }
          this.target.classList.toggle('active');
        }
      }// Sets Active State

      let navBrand = document.querySelectorAll('.navLink');
      navBrand.forEach(link => {
        new Active(navBrand,link);
      })

      let navToggle = document.querySelectorAll('.barWrapper');
      navToggle.forEach(link => {
        new Active(navToggle,link);
      })