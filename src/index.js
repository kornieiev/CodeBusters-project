
import {getCategories} from '../src/api';


(async function (){
    const response = await getCategories();
    console.log(response);
})();

