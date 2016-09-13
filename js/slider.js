;(function gallery() {
    // var
    //leftArrow=document.getElementById('left'),
    //rightArrow=document.getElementById('right'),
    var initImgNumber=1;
         maxImgNumber=8;
         
         
         leftArrow.addEventListener('click',moveBackward);
         rightArrow.addEventListener('click', moveForward);
    
    
    function moveBackward(){
        //   var image = document.getElementById('image');
        initImgNumber--;
        if (initImgNumber=0){initImgNumber=maxImgNumber};
        image.setAttribute('src','img/'+initImgNumber+'.jpg');
    };
     function moveForward(){
        //   var image = document.getElementById('image');
        initImgNumber++;
        if (initImgNumber>maxImgNumber){initImgNumber=1};
        image.setAttribute('src','img/'+initImgNumber+'.jpg');
    };
   ) }();
}
