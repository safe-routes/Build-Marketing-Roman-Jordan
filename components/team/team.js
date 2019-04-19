const people =[
    {name : 'Roman Jordan', 'roll':'','GitHandle': 'https://www.github.com/roman-jordan', 'img' : '', 'gender': 'man'},
    {name : 'Simon Davis', 'roll':'', 'GitHandle': 'https://github.com/Skidragon', 'img' : '', 'gender': 'man'},
    {name : 'Trista Paul', 'roll':'', 'GitHandle': 'https://github.com/trista-paul', 'img' : '', 'gender': 'woman'},
    {name : 'Ed Chin', 'roll':'', 'GitHandle': 'https://github.com/ed-chin-git', 'img' : '', 'gender': 'man'},
    {name : 'David Barrios', 'roll':'', 'GitHandle': 'https://github.com/dbarrios13', 'img' : '', 'gender': 'man'},
    {name : 'Jeff Lapp', 'roll':'', 'GitHandle': 'https://github.com/lappjeff', 'img' : '', 'gender': 'man'},
    {name : 'Carlos Gutierrez', 'roll':'', 'GitHandle': 'https://github.com/carlos-gutier', 'img' : '', 'gender': 'man'},
    {name : 'Brian Illes', 'roll':'Back-end Architect', 'GitHandle': 'https://github.com/brilles', 'img' : '', 'gender': 'man'}
  ];

  class MemberCard{
    constructor(obj,memberObj){
      //Component  
      this.obj = obj;
      
      //MemberDetails
      this.memberName = memberObj.name;
      this.memberRoll = memberObj.name;
      this.memberGit = memberObj.name;
      this.memberImg = memberObj.name;
      this.memberGender = memberObj.gender;
      this.memberNumber = Math.floor((Math.random() * 10) + 1)
      
      //Create The Card
      let html = document.createRange().createContextualFragment(`<div class="member-card"> <div class="memberAvatar"><img src="img/avatars/${this.memberGender} (${this.memberNumber}).png"><svg height="35.067mm" version="1.1" viewBox="0 0 120.39 35.067" xmlns="http://www.w3.org/2000/svg"><defs>    <filter id="filter1800" x="-.23925" y="-.8972" width="1.4785" height="2.7944" color-interpolation-filters="sRGB">     <feGaussianBlur stdDeviation="8.4779873"/>    </filter>   </defs>   <g transform="translate(-30.617 -94.674)" stroke="#999">    <ellipse transform="matrix(.95744 0 0 .33625 13.909 71.201)" cx="80.32" cy="142.41" rx="42.522" ry="11.339" fill="#808080" filter="url(#filter1800)" opacity=".33" stroke-width=".2" style="paint-order:stroke fill markers"/>    <rect x="49.13" y="94.757" width="85.437" height="20.822" ry="6.2465" fill="#e9993d" stroke-width=".16598" style="paint-order:stroke fill markers"/>    <path d="m49.26 100.5 0.2202 9.5833-11.273-9.0556z" fill="#e9993d" stroke-width=".048312" style="paint-order:stroke fill markers"/>   </g>   <text x="27.977957" y="13.44767" fill="#000000" font-family="sans-serif" font-size="10.583px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px" style="line-height:1.25" xml:space="preserve"><tspan x="27.977957" y="13.44767" stroke-width=".26458">Click on Me</tspan></text>  </svg>  </div><div class="avatar">  <h3>${this.memberName}</h3>  <p>Simon ... Bio. Here you will find a good amount of stuff concerning simon. His likes, dislikes, pets etc. This should be a short paragraph, not to exceed 300Chars. If bios are not provided, they will be made;  </p></div></div>`);
      this.obj.appendChild(html);

    }
  }

  class ChatBubble{
    constructor(avatar,chatBubble){
      this.chatBubble = chatBubble;
      this.avatar = avatar;
      
      window.addEventListener('scroll',scroll =>{
        this.avatarPosition = this.avatar.getBoundingClientRect();
        if(this.avatarPosition.top > 100 ){
          this.chatBubble.style.display = 'none';
        }else{
          this.chatBubble.style.display = 'block';
        }
      })
      

    }
  }//Chat Bubble

  
  

  let component = document.querySelectorAll('.team-content');
  component.forEach(compObj =>{
    people.forEach(personObj => {
        new MemberCard(compObj,personObj)
    })
  })

  let avatars = document.querySelectorAll('.memberAvatar');
  avatars.forEach(avatar =>{
    let chatBubble = avatar.querySelector('svg');
    new ChatBubble(avatar,chatBubble);
  })