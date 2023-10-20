import React, { useEffect } from 'react';

const LiveAgentGF = () => {
  useEffect(() => {
    // Tu script JavaScript aquí
    (function(d, src, c) {
      var t = d.scripts[d.scripts.length - 1],
        s = d.createElement('script');
      s.id = 'la_x2s6df8d';
      s.defer = true;
      s.src = src;
      s.onload = s.onreadystatechange = function() {
        var rs = this.readyState;
        if (rs && (rs !== 'complete') && (rs !== 'loaded')) {
          return;
        }
        c(this);
      };
      t.parentElement.insertBefore(s, t.nextSibling);
    })(document, 'https://goldfarb.ladesk.com/scripts/track.js', function(e) {
      LiveAgent.createButton('467lagv1', e);
    });
  }, []);

  return (
    <div>
      {/* El contenido de tu componente React aquí */}
    </div>
  );
};

export default LiveAgentGF;