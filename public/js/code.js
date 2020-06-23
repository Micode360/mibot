const network = 'https://hngmicodechatbot.herokuapp.com/botdata/data';

        //PART 1
        const status = response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            }
            return Promise.reject(new Error(response.statusText))
        }

        //PART 2
        const json = response => response.json()

        //PART 3
        fetch(network)
            .then(status)
            .then(json)
            .then(data => {
                //console.log(data);
                myFile(data)
            })
            .catch(error => {
                console.log('Request failed', error)
            }).catch(err => {
                console.log('err');
            });


            const myFile = (data) => {
                const obj = data;

                obj[0].question.forEach(item=>{
                    trigger.push(item);
                    item.forEach(item=>{
                        tipsTags(item);
                    });
                })

                obj[0].question.forEach(item=>{
                    tips.push(item);
                })

                obj[0].answer.forEach(item=>{
                    reply.push(item);
                })
            }


            //Haburger
            const burger = document.querySelector('.right-burger');
            const ul = document.querySelector('.ul');

            burger.addEventListener("click", ()=>{
                ul.classList.toggle("ul-out");
            });

//function for tips: STILL ONPROGRESS.

var tips = [];
console.log(tips);

const tipsTags = (quest) => {
    const li = document.createElement('li');
    li.className = "tips-content";
    li.textContent = quest;
    document.querySelector(".ul").appendChild(li);

}




//Json in trigger
var trigger = [];

//Json in reply
var reply = [];


var alternative = ["Come again", "I don't get it. Please reply again"]
document.querySelector('#input').addEventListener("keypress", function(e){  
        var key = e.which || e.keyCode;
        if(key === 13){
            var input = document.getElementById("input").value;
            document.getElementById('user').innerHTML = input;
            output(input); 
        }
});


const output = (input) => {   
    try{
        var product =  eval(input);
    } catch(e){
        var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
        text= text.replace(/ a /g, " ").replace(/ i feel /g, "").replace(/ whats /g, "what is").replace(/ please /g, "").replace(/ please /g, "");
        if(compare(trigger, reply, text)){
            var product = compare(trigger, reply, text);
        }else{
            var product = alternative[Math.floor(Math.random()*alternative.length)];
        }
    }
        setTimeout(() => {
            document.getElementById('chatbot').innerHTML = product; 
        }, 2000);
        document.getElementById("input").value = "";
}
function compare(arr, array, string){
    var item;
    for(var x = 0; x < arr.length; x++){
        for(var y=0; y < array.length; y++){
            if(arr[x][y] === string){
                items = array[x];
                item = items[Math.floor(Math.random()*items.length)];
            }
        }
    }
    return item;
}












 
  
