const cat1= document.getElementById('cat1');
// console.log(cat1)
cat1.style.position = 'absolute';
cat1.style.left = '-400px';
const vase = document.getElementById('vase')
vase.style.postion = 'absolute';
vase.style.left='700px';
vase.style.top='130px';
vase.style.transform = 'rotate(0deg)';
let max = 7
const hand = document.getElementById('hand');
hand.style.postion = 'absolute';
hand.style.left='880px';
hand.style.top='620px';


function catWalk(){
    let catOldPos= parseInt(cat1.style.left);
    // console.log(catOldPos,cat1.style.left, cat1)
    let catNewPos = catOldPos+7;
    cat1.style.left=catNewPos+'px'
    if(catNewPos===496){
        vaseCount = setInterval(vaseRockForward, 50);
    }
    if(catNewPos===867){
        clearInterval(catCount);
        cat1.src='imgs/cat2.png'
        setTimeout(turnAround,2000)
        return
    }
};

function vaseRockForward(){
    // console.log('max', max)
    if (max===0){
        clearInterval(vaseCount)
        return;
    }
    let vaseAllAngle = vase.style.transform;
    if(vaseAllAngle.length===12){
        var vaseOldAngle = vaseAllAngle[7]
    }else{
        var vaseOldAngle = vaseAllAngle.slice(7,9)
        // console.log(vaseOldAngle)
    }    
//    console.log(vaseAllAngle.length)
    let vaseNewAngle = Number(vaseOldAngle) + 1;
    vase.style.transform = `rotate(${vaseNewAngle}deg)`
    if(vaseNewAngle===max){
        // console.log('stop')
        clearInterval(vaseCount)
        vaseCount = setInterval(vaseRockBackward,50);
    } ;
}

function vaseRockBackward(){
    let vaseAllAngle = vase.style.transform;
    if(vaseAllAngle.length===12){
        var vaseOldAngle = vaseAllAngle[7]
    }else{
        var vaseOldAngle = vaseAllAngle.slice(7,9)
        // console.log(vaseOldAngle)
    } 
    // console.log(vaseOldAngle)
    let vaseNewAngle = Number(vaseOldAngle) - 1;
    vase.style.transform = `rotate(${vaseNewAngle}deg)`
    if(vaseNewAngle===-Math.abs(max)){
        // console.log('stop')
        clearInterval(vaseCount)
        max=max-1
        vaseCount = setInterval(vaseRockForward,50);
    } ;
}

function turnAround(){
    // console.log('turn')
    cat1.className = 'mirror';
    setTimeout(callLunge,3500);
}

function callLunge(){
    catCount = setInterval(catLunge,40)
}

function catLunge(){
    let catOldPos= parseInt(cat1.style.left);
    // console.log(catOldPos,cat1.style.left, cat1)
    let catNewPos = catOldPos-15;
    cat1.style.left=catNewPos+'px'
    if(catNewPos===807){
        clearInterval(catCount)
        vaseCount= setInterval(vaseFall,40)
        return;
    }
}

function vaseFall(){
    let vaseAllAngle = vase.style.transform;
    if(vaseAllAngle.length===12){
        var vaseOldAngle = vaseAllAngle[7]
    }else if (vaseAllAngle.length===13){
        var vaseOldAngle = vaseAllAngle.slice(7,9)
        // console.log(vaseOldAngle)
    }else if (vaseAllAngle.length===14){
        var vaseOldAngle = vaseAllAngle.slice(7,10)
        // console.log(vaseOldAngle)
    }else{
        var vaseOldAngle = vaseAllAngle.slice(7,11)
    } 
    let vaseNewAngle = Number(vaseOldAngle) - 2;
    vase.style.transform = `rotate(${vaseNewAngle}deg)`
    let vaseOldLeft= parseInt(vase.style.left);
    let vaseNewLeft = vaseOldLeft-8;
    vase.style.left=vaseNewLeft+'px'
    let vaseOldTop= parseInt(vase.style.top);
    let vaseNewTop = vaseOldTop+15;
    vase.style.top=vaseNewTop+'px'
    if(vaseNewTop===355){
        handCount = setInterval(catchVase,40)
    }
    if(vaseNewTop===820){
        clearInterval(vaseCount)
        vase.src="imgs/brokenPot.png"
        return
    }
}

function catchVase(){
    hand.className=''
    let handOldPos= parseInt(hand.style.left);
    // console.log(handOldPos,hand.style.left, hand)
    let handNewPos = handOldPos-20;
    hand.style.left=handNewPos+'px'
    if(handNewPos===580){
        clearInterval(handCount);

        setTimeout(finger, 2000)
        return
    }
}

function finger(){
    hand.src = "imgs/finger.png"
}

let catCount= setInterval(catWalk,40)
//let vaseCount = setInterval(vaseRockForward, 50);
// vaseRockForward()

