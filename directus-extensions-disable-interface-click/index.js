
	export default ({ embed }) => {
		embed('body', `<script>
			const disableRelationalInterfaceClicks = () => {
          const observer = new MutationObserver(() => {
            const selectors = '.one-to-many, .many-to-many'; // split in case we want to add m2a
            const interfaces = document.querySelectorAll(selectors); // get all interfaces

            interfaces.forEach((container) => {
              const items = container.querySelectorAll('ul.v-list>li.v-list-item:has(.item-link)'); // get all items that has the go to link

              items.forEach((item) => {
                if (!item.classList.contains('drawer-click-disabled')) { // check if the drawer already has the class
                  item.addEventListener('click', (e) => {
                    const isRemove = e.target.closest('.item-actions>.has-click'); // The delete icon
                    const isLink = e.target.closest('.item-actions>.item-link'); // The go to link icon

                    if (!isLink && !isRemove) {
                      e.stopPropagation();
                      e.preventDefault();
                    }
                  }, true);

                  item.classList.add('drawer-click-disabled'); // add the class when done
                }
              });
            });
          });

		  // observe the body
          observer.observe(document.body, {
            childList: true,
            subtree: true,
          });
        };

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', disableRelationalDrawerClicks);
        } else {
          disableRelationalInterfaceClicks();
        }
		</script>
		`);
		}