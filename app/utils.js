const isMobile = () => {
	const is_mobile = (window.innerWidth <= 780) ? true : false;
	return is_mobile;
}

const serialize = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

const isOnScreen = (elm, offset, threshold, mode) => {
  offset = offset || 0;
  threshold = threshold || 0;
  mode = mode || 'visible';

  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight) - offset;
  const above = rect.bottom - threshold < 0;
  const below = rect.top - viewHeight + threshold >= 0;

  return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

const debounceEvent = (callback, time) => {
  let interval;
  return () => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;

      // eslint-disable-next-line
      callback(arguments);
    }, time);
  };
}

module.exports = {
  isMobile,
  serialize,
  isOnScreen,
  debounceEvent,
}