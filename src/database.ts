import {createPool} from 'mysql2/promise';

export async function connect(){
try{


    const connection = await createPool({
        host: 'localhost',
        user:'root',
        password: 'tatu1964',
        database:'dev_finances',
        connectionLimit:10
    });

    return connection;
}catch(err){
    return err;
}
}