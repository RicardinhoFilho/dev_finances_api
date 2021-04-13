import { translateConfirmedData } from "./translateData";

export function defineSearchDateSql(date:string){
   let teste: boolean = false;
   const year = date.substring(0,4);
   const month =  date.substring(5,7);
   const day =  date.substring(8,10);
    for (let i = 0; i < 4; i++) {
        
        if(date[i] != '-'){
            teste = true;
        }else{
            teste = false;
        }
        
    }

    if (!teste){
        date = translateConfirmedData(date);
    }

    if(year != '0000' && month !="00" && day != "00"){
        return `SELECT * FROM finances WHERE _date = '${date}'`;
    }
    else if(year== '0000' && month=="00" ){
        return `SELECT * FROM finances WHERE DAY(_date) = '${day}'`;
    }else if(year == '0000' && day == '00'){
        return `SELECT * FROM finances WHERE MONTH(_date) = '${month}'`;
    }else if(year == '0000'){
        return `SELECT * FROM finances WHERE MONTH(_date) = '${month}' and DAY(_date) = '${day}'`;
    }else if(month == '00' && day == '00'){
        return `SELECT * FROM finances WHERE YEAR(_date) = '${year}'`;
    }else if(month == '00'){
        return `SELECT * FROM finances WHERE YEAR(_date) = '${year}' and DAY(_date) = '${day}'`;
    }else if(day == '00'){
        return `SELECT * FROM finances WHERE MONTH(_date) = '${month}' and YEAR(_date) = '${year}'`;
    }

}