const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }

function getRandomNumer(num) {
    return Math.floor(Math.random() * num);
}


function printNow(){
    for (let item in collectiveWisdom){
        const num = collectiveWisdom[item].length
        // console.log(collectiveWisdom[item])
        // console.log(num)
        function outputFormat(item){
            if (item === "signInfo"){
                console.log("Your sign right now is a " + collectiveWisdom[item][getRandomNumer(num)]);
            } else if (item === "fortuneOutput"){
                console.log("You are having: " + collectiveWisdom[item][getRandomNumer(num)]);
            } else if (item === "advice"){
                console.log("You should: " + collectiveWisdom[item][getRandomNumer(num)]);
            } else {
                console.log("Nothing!");
            }
        }
        outputFormat(item);
    }
    
}

printNow()



// Your sign right now is a "comet".
// You are having: "ok luck".
// You should: "trust no one".