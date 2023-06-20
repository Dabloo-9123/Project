
function currentTime()
{
      var date =new Date();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();
      var session ='AM';
      if(hh>12)
      {
            session='PM';
      }
      let time=(`${hh}:${mm}:${ss}-${session}`);
      console.log(time);
      let hr = document.getElementsByClassName('hh');
      hr[0].innerHTML=hh;
// console.log(hr[0].innerHTML);
     let min = document.getElementsByClassName('mm');
     min[0].innerHTML=mm;
      let sec = document.getElementsByClassName('ss');
      sec[0].innerHTML=ss;
      let session1=document.getElementsByClassName('session');
      session1[0].innerHTML=session;

      // ************************
      if(hh>=8 && hh<12 && session=='AM')
      {
            var comment =document.getElementsByClassName('comment');
            comment[0].innerHTML='GRAB SOME HEALTHY BREAKFAST!!!'
      }
      else if(hh>=12 && hh<16 && session=='PM')
      {
            var comment =document.getElementsByClassName('comment');
            comment[0].innerHTML="Let's have some lunch!!!"
      }
      else if(hh>=16 && hh<20 && session=='PM')
      {
            var comment =document.getElementsByClassName('comment');
            comment[0].innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!!!!"
      }
      else if(hh>=20 && hh<23 && session=='PM')
      {
            var comment =document.getElementsByClassName('comment');
            comment[0].innerHTML="CLOSE YOUR EYES AND GO TO SLEEP!!!"
      }
      else if(hh>=1 && hh<8 && session=='AM')
      {
            var comment =document.getElementsByClassName('comment');
            comment[0].innerHTML='CLOSE YOUR EYES AND GO TO SLEEP!!!'
          
     }
} 

setInterval(() => {
      currentTime() 
}, 1000);


function set_timer()
{
      var time =new Date();
      var hh=time.getHours();
      

      var morning=document.getElementById('select2');
      var afternoon=document.getElementById('AFTERNOON');
      var evening=document.getElementById('EVENING');
      var night=document.getElementById('NIGHT');
      //  console.log(afternoon.value);
      var informing_text=document.getElementsByTagName('h3');
      var image = document.querySelector('img');
      // console.log(morning.value)
      // console.log(informing_text[0].innerHTML);
      // console.log(morning.options[morning.selectedIndex].value);
     
      var para=document.getElementsByTagName('p')
      // console.log(para[5].innerHTML);
      para[4].innerHTML=`Wake Up Time : ${morning.options[morning.selectedIndex].innerHTML}`;
      para[5].innerHTML=`lunch Time : ${afternoon.options[afternoon.selectedIndex].innerHTML}`;
      para[6].innerHTML=`Nap Time : ${evening.options[evening.selectedIndex].innerHTML}`;
      para[7].innerHTML=`Night Time : ${night.options[night.selectedIndex].innerHTML}`;

      if(hh===parseInt(morning.value))
      {
       informing_text[0].innerHTML="Good Morning Wake-up Time";
      //  console.log(informing_text)
       image.src="./Component 30 – 1@2x.png"
      }

      else if(hh===parseInt(afternoon.value)){
            var informing_text=document.getElementsByTagName('h3')
            informing_text[0].innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
            image.src="Component 31 – 1.png";
           
      }
      
       else if(hh===parseInt(evening.value))
      {
            var informing_text=document.getElementsByTagName('h3')
            informing_text[0].innerHTML="GOOD EVENING !!";
            image.src="lunch_image.png";
      }
      else if(hh===parseInt(night.value))
      {
            informing_text[0].innerHTML="GOOD NIGHT !!";
            image.src="Component 32 – 1.png";
      }
}
// set_timer()

// console.log(para[5].innerHTML)


