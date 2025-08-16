const words = ["fernanda MilitÃO da SILVA MaChArEtE", "MaChaRetE da SILVa DorIVAL AlveS JuNIOR ", "marCIA Cristina MachaRETE"];
const uppercase = words.map(word => word.toUpperCase());
alert(uppercase);

alert('A senhora encontrou o Easter Egg, ganhou um incrível parabéns!')

let functionResult6 = document.getElementById("result");
functionResult6.innerHTML = `
    <h3>Function exercise 6 - All words to upperCase</h3>
    <pre>
       const words = ["fernanda MilitÃO da SILVA MaChArEtE", "MaChaRetE da SILVa DorIVAL AlveS JuNIOR ", "marCIA Cristina MachaRETE"];
       const uppercase = words.map(word => word.toUpperCase());
       alert(uppercase);
    </pre>`;