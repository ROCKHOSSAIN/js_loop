const a=[1,2,4,5,6]
let i=0;
while(i!=a.length){
    if(a[i]===4){
        i++
        continue;
    }
    console.log(a[i]);
    i++;
}