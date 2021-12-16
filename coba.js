(function(global){
	global.$_Tawk_AccountKey='61bb2b3f80b2296cfdd2072e';
	global.$_Tawk_WidgetId='1fn1i1se1';
	global.$_Tawk_Unstable=false;
	global.$_Tawk = global.$_Tawk || {};
	(function (w){
	function l() {
		if (window.$_Tawk.init !== undefined) {
			return;
		}

		window.$_Tawk.init = true;

		var files = [
			'tow.js',
			'har1.js',
			'twk-chunk-vendors.js',
			'hhh1.js',
			'run.js',
			'yo.js'
		];

		if (typeof Promise === 'undefined') {
			files.unshift('kk2.js');
		}

		if (typeof Symbol === 'undefined' || typeof Symbol.iterator === 'undefined') {
			files.unshift('kk3.js');
		}

		if (typeof Object.entries === 'undefined') {
			files.unshift('kk1.js');
		}

		var s0=document.getElementsByTagName('script')[0];

		for (var i = 0; i < files.length; i++) {
			var s1 = document.createElement('script');
			s1.src= files[i];
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
		}
	}
	if (document.readyState === 'complete') {
		l();
	} else if (w.attachEvent) {
		w.attachEvent('onload', l);
	} else {
		w.addEventListener('load', l, false);
	}
})(window);

})(window);