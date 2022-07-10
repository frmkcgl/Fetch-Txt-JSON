const btnTextGetir=document.getElementById('btn-text-getir');
const btnJsonGetir=document.getElementById('btn-json-getir');
btnTextGetir.addEventListener('click',getText);
btnJsonGetir.addEventListener('click',getJson);

const sonucDiv=document.getElementById('sonuc');

function getJson(e){
    e.preventDefault();

    fetch('ogrenciler.json')
        .then(response=>response.json())
        .then(sonuc=>{
            let cikti='';
            sonuc.forEach(ogr=>{
                cikti+=`ogrenci adi ${ogr.ad} id:${ogr.id} \n`; 
            })
            sonucDiv.innerText=cikti;
        })
}



function getText(e){
    e.preventDefault();
//Uzun Hali
    /* const fetchSonuc=fetch('deneme.txt');
    fetchSonuc.then((response)=>{
        const responseText=response.text();
        responseText.then(sonuc=>{
            console.log(sonuc);
        })
    }); */

    //console.log(fetchSonuc);

//Kısa Hali
    fetch('deneme.txt')
        .then(response=>response.text())
        .then(sonuc=>sonucDiv.innerText=sonuc);


}



