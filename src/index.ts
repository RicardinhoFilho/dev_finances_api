import {App} from './app'

async function main(){
    const app = new App(8000);

    await app.listen();
};

main();