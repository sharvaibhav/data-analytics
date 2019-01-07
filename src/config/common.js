export const periodSorter = (periods) =>{
    let newList = periods.sort((a,b)=>{
        let yeara = a.split(" ").pop();
        let yearb = b.split(" ").pop();
        if(yeara> yearb) return 1;
            else if(yeara === yearb){
            let qa = a.split(" ").shift().split("").pop();
            let qb = b.split(" ").shift().split("").pop();
                if(qa>qb) return 1;
                    else if(qa<qb) return -1
                    else return 0;
            }else
            return -1;
        });
    return newList;
}