/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    let binary = n.toString(2).padStart(32, '0');
    // console.log(binary);
    let con_binary = "";
    let value;
    
    for(let i = 0; i < binary.length; i++) {
        if(binary[i] === '0') {
            value='1';
        } else {
            value='0';
        }
        con_binary = con_binary + value;
    }
        con_binary = parseInt(con_binary, 2);
        // console.log(con_binary);
        return con_binary;
}
