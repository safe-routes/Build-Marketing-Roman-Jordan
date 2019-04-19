


class MapData{
    constructor(obj,target){
      this.obj = obj;
      this.target = target;
      this.target.addEventListener('click', () => {
       this.selected();
      })
    }

    selected(){
      
        this.obj.forEach(element =>{
          element.classList.remove('active');
        })
        
        this.target.classList.toggle('active');
    }

    getCrashData(){
    //CrashData
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'fars.php', true);

        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(xhr.response);
            }
        }
        xhr.send();
    }
}// Sets Active State

  let states = document.querySelectorAll('path');
  states.forEach(state => {
    new MapData(states,state);
  })

