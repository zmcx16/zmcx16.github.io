var smq = require('sort-media-queries');
smq(['screen and (min-width:900px)', 'screen and (min-width:1000px)']);
smq([{media:'screen and (min-width:900px)'},{media:'screen and (min-width:1000px)'}],'media');
