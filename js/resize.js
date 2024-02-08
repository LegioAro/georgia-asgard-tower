function isResize(
  elem,
  elemParent,
  elemWhere,
  width,
  positionParent = 'last',
  positionWhere = 'last',
) {
  const block = document.querySelector(elem);
  const blockParent = document.querySelector(elemParent);
  const blockWhere = document.querySelector(elemWhere);
  const windowWidth = document.documentElement.clientWidth;

  if (block && blockParent && blockWhere) {
    if (windowWidth <= width) {
      positionWhere === 'first' ? blockWhere.prepend(block) : '';
      positionWhere === 'last' ? blockWhere.append(block) : '';
    } else {
      positionParent === 'first' ? blockParent.prepend(block) : '';
      positionParent === 'last' ? blockParent.append(block) : '';
    }
  }
}
// isResize('.block-resize', '.block-1', '.block-2', 768, 'first');

// window.addEventListener('resize', () => {
//   isResize('.block-resize', '.block-1', '.block-2', 768, 'first');
// });
