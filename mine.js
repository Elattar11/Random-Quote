
var qouteID = document.getElementById("qouteID");
var authorID = document.getElementById("authorID");

var qoute = ["Be yourself; everyone else is already taken." , 
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , 
"So many books, so little time." ,
"A room without books is like a body without a soul." ,
"You only live once, but if you do it right, once is enough." ,
"If you tell the truth, you don't have to remember anything." ,
"A friend is someone who knows all about you and still loves you." ,
"To live is the rarest thing in the world. Most people exist, that is all." ,
"Always forgive your enemies; nothing annoys them so much." , 
"Live as if you were to die tomorrow. Learn as if you were to live forever."];

var author = ["Oscar Wilde", "Albert Einstein" , "Frank Zappa" ,
 "Marcus Tullius Cicero" ,"Mae West" , "Mark Twain" , "Elbert Hubbard" , "Oscar Wilde" , "Oscar Wilde" , "Mahatma Gandhi"];

var repeatedNumber = [0,1,2,3,4,5,6,7,8,9];
function displayQoute()
{
    var random = Math.round(Math.random() * 10)
    if(random == 10)
    {
        random -= 1;
    }
    
    if(checkRandom(random) == true)
    {
        qouteID.textContent = qoute[random];
        authorID.textContent = author[random];
        console.log(random);
    }
    else
    {
        return;
    }
}

function checkRandom(random)
{
    for(var i =0; i<=repeatedNumber.length; i++)
    {
        if(random == repeatedNumber[i])
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}