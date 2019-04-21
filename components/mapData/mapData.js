


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
        console.log(this.target.attributes.id)
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

  let states = document.querySelectorAll('.crashData-left path');
  let defs = {"AL": "Alabama","AK": "Alaska","AS": "American Samoa","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FM": "Federated States Of Micronesia","FL": "Florida","GA": "Georgia","GU": "Guam","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MH": "Marshall Islands","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","MP": "Northern Mariana Islands","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PW": "Palau","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VI": "Virgin Islands","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"}
  let defs2 = [{"Def":"Alabama","Id":1},{"Def":"Alaska","Id":2},{"Def":"Arizona","Id":4},{"Def":"Arkansas","Id":5},{"Def":"California","Id":6},{"Def":"Colorado","Id":8},{"Def":"Connecticut","Id":9},{"Def":"Delaware","Id":10},{"Def":"District of Columbia","Id":11},{"Def":"Florida","Id":12},{"Def":"Georgia","Id":13},{"Def":"Hawaii","Id":15},{"Def":"Idaho","Id":16},{"Def":"Illinois","Id":17},{"Def":"Indiana","Id":18},{"Def":"Iowa","Id":19},{"Def":"Kansas","Id":20},{"Def":"Kentucky","Id":21},{"Def":"Louisiana","Id":22},{"Def":"Maine","Id":23},{"Def":"Maryland","Id":24},{"Def":"Massachusetts","Id":25},{"Def":"Michigan","Id":26},{"Def":"Minnesota","Id":27},{"Def":"Mississippi","Id":28},{"Def":"Missouri","Id":29},{"Def":"Montana","Id":30},{"Def":"Nebraska","Id":31},{"Def":"Nevada","Id":32},{"Def":"New Hampshire","Id":33},{"Def":"New Jersey","Id":34},{"Def":"New Mexico","Id":35},{"Def":"New York","Id":36},{"Def":"North Carolina","Id":37},{"Def":"North Dakota","Id":38},{"Def":"Ohio","Id":39},{"Def":"Oklahoma","Id":40},{"Def":"Oregon","Id":41},{"Def":"Pennsylvania","Id":42},{"Def":"Puerto Rico","Id":43},{"Def":"Rhode Island","Id":44},{"Def":"South Carolina","Id":45},{"Def":"South Dakota","Id":46},{"Def":"Tennessee","Id":47},{"Def":"Texas","Id":48},{"Def":"Utah","Id":49},{"Def":"Vermont","Id":50},{"Def":"Virginia","Id":51},{"Def":"Virgin Islands","Id":52},{"Def":"Washington","Id":53},{"Def":"West Virginia","Id":54},{"Def":"Wisconsin","Id":55},{"Def":"Wyoming","Id":56}]

  statesArray = []
  states.forEach(state => {
    if(defs[state.id]){
      let check = defs[state.id];
      console.log(check)
      defs2.forEach(x => {
        let test = (check = x.Def) ? true :false;
        console.log(x.Id,state);
      })
    }
    new MapData(states,state);
  })

  statesArray = statesArray.sort()
  

  
    
