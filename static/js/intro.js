var dis=false;
function turnon(){
    if(dis==false) document.getElementById('navbar').style.display="block",dis=true;
    else document.getElementById('navbar').style.display="none",dis=false;
}
document.write('<script src="js/api.js"></script>');
document.addEventListener("DOMContentLoaded", () => {
    HC.init().then(() => {
      console.log(HC.user.IsloggedIn);
      if(!HC.user.IsloggedIn) {
        document.getElementById('log1').style.display="none";
        document.getElementById('log2').style.display="none";
    }
      const w=document.body.clientWidth;
      if(w>800){
          document.getElementById('dis-big').style.display="block";
          document.getElementById('dis-small').style.display="none";
      } else {
          document.getElementById('dis-big').style.display="none";
          document.getElementById('dis-small').style.display="block";
          document.getElementById('navbar').style.display="none";
      }
    });
    
  });
  function logout(){
    HC.user.logout().then(()=>{
        alert('登出成功');
      window.location.href="index.html";
    })
  }
