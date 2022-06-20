let Day= document.querySelector('.Days .Content-No').innerHTML;
let Hour=document.querySelector('.Hours .Content-No').innerHTML;
let Min= document.querySelector('.Minutes .Content-No').innerHTML;
let Sec= document.querySelector('.Seconds .Content-No').innerHTML;
let MS=0;
let Time

document.querySelector('.Start').addEventListener('click' , StopTheWatch=()=>
{
    document.querySelector('.Start').classList.add('Noner');
    Time=setInterval(()=> {
        MS++;
        if(MS==100)
        {
            Sec++;
            document.querySelector('.Seconds .Content-No').innerHTML=Sec;
            MS=0;
        }
        if(Sec==59)
        {
            if(MS==99)
            {
                Min++;
                document.querySelector('.Minutes .Content-No').innerHTML=Min;
                Sec=0;
                MS=0;
                document.querySelector('.Seconds .Content-No').innerHTML=Sec;
            }
        }
        if(Min==59)
        {
            if(Sec==59)
            {
                if(MS==99)
                {
                    Hour++;
                    document.querySelector('.Hours .Content-No').innerHTML=Hour;
                    Sec=0;
                    Min=0;
                    MS=0;
                    document.querySelector('.Minutes .Content-No').innerHTML=Min;
                    document.querySelector('.Seconds .Content-No').innerHTML=Sec;
                }
            }
        }
        if(Hour==23)
        {
            if(Min==59)
            {
                if(Sec==59)
                {
                    if(MS==99)
                    {
                        Day++;
                        document.querySelector('.Days .Content-No').innerHTML=Day;
                        Hour=0
                        Min=0;
                        Sec=0;
                        MS=0;
                        document.querySelector('.Hours .Content-No').innerHTML=Hour;
                        document.querySelector('.Minutes .Content-No').innerHTML=Min;
                        document.querySelector('.Seconds .Content-No').innerHTML=Sec;
                    }
                }
            }
        }
    },10);

});
document.querySelector('.Stop').addEventListener('click' , StopTheWatch=()=>
{
    clearInterval(Time);
    document.querySelector('.Start').classList.remove('Noner');
});
document.querySelector('.Reset').addEventListener('click' , StopTheWatch=()=>
{
    clearInterval(Time);
    Day=0 
    document.querySelector('.Days .Content-No').innerHTML=0;
    Hour=0
    document.querySelector('.Hours .Content-No').innerHTML=0;
    Min=0 
    document.querySelector('.Minutes .Content-No').innerHTML=0;
    Sec=0 
    document.querySelector('.Seconds .Content-No').innerHTML=0;
    MS=0;
    document.querySelector('.Start').classList.remove('Noner');
});

let Check=window.matchMedia("(max-width :320px)");
if(Check.matches)
{
    document.querySelector('.Days .Content').innerHTML='Days';
    document.querySelector('.Hours .Content').innerHTML='Hours';
    document.querySelector('.Minutes .Content').innerHTML='Min';
    document.querySelector('.Seconds .Content').innerHTML='Sec';
}   