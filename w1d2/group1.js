x=[5,2,7,-3,0,9]


function insert(x){
    let pl=0
    for(i=0;i<x.length;i++){
        if (x[i+1]<x[i]){
            while(x[j]<x[i]){
                pl=x[j-1]
                x[j=1]=x[j]
                x[j]=pl
                j-=1
            }

        }
    }

}