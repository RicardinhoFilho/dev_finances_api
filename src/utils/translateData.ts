export function translateData(brazilizanData: string){

    let newDate:Date | String;

    brazilizanData == null?
     (newDate = new Date())
    : (newDate = brazilizanData.split("/").reverse().join("-"));

    return newDate;

}