import {translateData} from './translateData'

export function verifyUpdates(updatedTransaction:any): object{
    if(updatedTransaction._date){
        updatedTransaction._date = translateData(updatedTransaction._date);
    }
    if(updatedTransaction._value){
        updatedTransaction._value = parseFloat(updatedTransaction._value);
    }

    return(updatedTransaction);
}