//1.Kullanıcıdan bir cümle alalım.
//2.Cümledeki sesli harfleri bulan bir fonksiyon yapalım.
//3.Console bölümüne kullanıcıdan aldığımız cümleyi, cümle içinde geçen
// sesli harfleri ve sesli harf sayılarını yazdıralım.
// P.S.: Cümlede birden fazla aynı sesli harf var ise sadece bir tanesini yazdırmak zorunda...

function countVowel(str){
    let vowels = 'aeiouAEIOU'; 
    let count = 0;
    str.split("").forEach(el => {
        if(vowels.indexOf(el) !== -1){
            count ++
        }   
    }
    )
    return count
}

console.log(countVowel('nur kevser kadiroglu'));