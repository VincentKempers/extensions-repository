
export default ({ embed }) => {
    embed('body', `<script> const disableM2MClick = () => {
        const observer = new MutationObserver(() => {
          const m2mElements = document.querySelectorAll('.one-to-many li.v-list-item:has(.item-link), .many-to-many li.v-list-item:has(.item-link)');

          m2mElements.forEach(el => {
            // Prevent double-binding
            if (!el.classList.contains('m2m-click-disabled')) {
              el.addEventListener('click', e => {
                if (
                    !e.target.closest('.item-actions>.has-click') && // Allow actions buttons - delete
                  !e.target.closest('.item-actions>.item-link') && // Allow actions buttons - go to item
                ) {
                e.stopPropagation(); // stopPropagation
                e.preventDefault(); // preventDefault
                // console.log('M2M click disabled'); // log
                }
              }, true);

              el.classList.add('m2m-click-disabled'); // add class
            }
          });
        });

        // observer
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      };

    // when the doc is loading set the eventlistener could be cleaned up a bit
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', disableM2MClick);
      } else {
        disableM2MClick();
      } </script>
    `);
    }