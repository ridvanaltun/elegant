function adblock_check() {
  if (typeof adblock === 'undefined') {
    return true;
  } else {
    return false;
  }
}