/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.handlers,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        let profile = listData.profileArray[0];

        // Designs
        if (charadex.tools.checkArray(profile.masterlist)) {
          let designs = await charadex.initialize.page(
            profile.masterlist,
            charadex.page.inventory.relatedData['handler'],
          );
        }

        // Logs
        if (charadex.tools.checkArray(profile.inventorylog)) {
          let logs = await charadex.initialize.page(
            profile.inventorylog,
            charadex.page.inventory.relatedData['inventory log'],
          );
        }


      }
    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
