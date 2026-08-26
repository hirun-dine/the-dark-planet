/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.masterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].masterlistlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].masterlistlog,
            charadex.page.masterlist.relatedData['masterlist log']
          );
		  let backgroundElement = $('.cd-import-background');
			if (listData.type == 'profile') {
			  backgroundElement.attr('style', `background-image: url(${listData.profileArray[0].bgurl})`);
			} else {
			  backgroundElement.each(function(i) {
				const bgurl = listData.array[i]?.bgurl;
				$(this).attr('style', `background-image: url(${bgurl})`);
			  });
			}
        }
		
      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
