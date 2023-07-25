 let kilo=Number(prompt("lütfen kilonuzu giriniz?"));
 let boy= prompt("lütfen boyunuzu metre cinsinden giriniz?");
let sonuc= kilo/(boy*2);

if(sonuc<18.5)
{
     window.alert("ideal kilonun altındasınız");
     console.log(" ideal kilonun altındasınız");
}
else if(sonuc>=18 && sonuc<=24,9)
{
    window.alert("ideal kilodasınız");
    console.log(" ideal kilodasınız");
}

else if(sonuc<=25 && sonuc<=29.9)
{
    window.alert("ideal kilonun üstünde");
    console.log(" ideal kilonun üstünde");
}


else if(sonuc<=30 && sonuc<=39.9)
{
    window.alert("ideal kilonun  çok üstünde");
    console.log(" ideal kilonun  çok üstünde(obez)");
}

else if(sonuc>=40)
{
    window.alert("ideal kilonun  çok üstünde");
    console.log(" ideal kilonun  çok üstünde(morbid obez)");
    
}
