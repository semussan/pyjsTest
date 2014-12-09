/* start module: Space */
$pyjs['loaded_modules']['Space'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Space']['__was_initialized__']) return $pyjs['loaded_modules']['Space'];
	var $m = $pyjs['loaded_modules']['Space'];
	$m['__repr__'] = function() { return '<module: Space>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Space';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
	$m['Model'] = $p['___import___']('game_model.Model', null, null, false);
	$m['ASTEROID_SIZE'] = $p['___import___']('game_model.ASTEROID_SIZE', null, null, false);
	$m['Controller'] = $p['___import___']('game_controller.Controller', null, null, false);
	$m['SHOT_COLOR'] = $m['Color']['Color']('#fff');
	$m['GameCanvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'Space';
		$method = $pyjs__bind_method2('__init__', function(w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
				h = arguments[2];
			}
			var images;
			$m['GWTCanvas']['__init__'](self, w, h);
			self['width'] = w;
			self['height'] = h;
			self['model'] = $m['Model'](w, h);
			self['controller'] = $m['Controller']($p['getattr'](self, 'model'));
			images = $p['list'](['./images/ship1.png', './images/ship2.png', './images/asteroid.png']);
			$m['loadImages'](images, self);
			self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
			return null;
		}
	, 1, [null,null,['self'],['w'],['h']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(imagesHandles) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagesHandles = arguments[1];
			}

			self['ship'] = imagesHandles['__getitem__'](0);
			self['ship_thrust'] = imagesHandles['__getitem__'](1);
			self['asteroid'] = imagesHandles['__getitem__'](2);
			self['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['controller']['start_game'](self);
			return null;
		}
	, 1, [null,null,['self'],['imagesHandles']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('addTo', function(panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			panel['add'](self);
			self['top'] = $m['DOM']['getAbsoluteTop'](self['getElement']());
			self['left'] = $m['DOM']['getAbsoluteLeft'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['addTo'] = $method;
		$method = $pyjs__bind_method2('setKey', function(k, set) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
				set = arguments[2];
			}

			$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
			if ($p['bool']($p['op_eq'](k, 38))) {
				$p['getattr'](self, 'controller')['key_up'] = set;
			}
			else if ($p['bool']($p['op_eq'](k, 40))) {
				$p['getattr'](self, 'controller')['key_down'] = set;
			}
			else if ($p['bool']($p['op_eq'](k, 37))) {
				$p['getattr'](self, 'controller')['key_left'] = set;
			}
			else if ($p['bool']($p['op_eq'](k, 39))) {
				$p['getattr'](self, 'controller')['key_right'] = set;
			}
			else if ($p['bool']($p['op_eq'](k, 32))) {
				$p['getattr'](self, 'controller')['key_fire'] = set;
			}
			return null;
		}
	, 1, [null,null,['self'],['k'],['set']]);
		$cls_definition['setKey'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			if (typeof modifiers == 'undefined') modifiers=arguments['callee']['__args__'][5][1];

			self['setKey'](keyCode, true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			if (typeof modifiers == 'undefined') modifiers=arguments['callee']['__args__'][5][1];

			self['setKey'](keyCode, false);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('draw_asteroid', function(asteroid) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				asteroid = arguments[1];
			}
			var $div2,$div3,$div1,$div4;
			self['saveContext']();
			self['translate']($p['getattr'](asteroid, 'x'), $p['getattr'](asteroid, 'y'));
			self['rotate']($p['getattr'](asteroid, 'rot'));
			self['scale']($p['getattr'](asteroid, 'scale'), $p['getattr'](asteroid, 'scale'));
			self['drawImage']($p['getattr'](self, 'asteroid'), (typeof ($usub1=(typeof ($div1=$m['ASTEROID_SIZE'])==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=(typeof ($div3=$m['ASTEROID_SIZE'])==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			self['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['asteroid']]);
		$cls_definition['draw_asteroid'] = $method;
		$method = $pyjs__bind_method2('draw_shot', function(shot) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				shot = arguments[1];
			}
			var $sub3,$sub2,$sub1,$sub4;
			self['setFillStyle']($m['SHOT_COLOR']);
			self['fillRect']($p['float_int']($p['__op_sub']($sub1=$p['getattr'](shot, 'x'),$sub2=1)), $p['float_int']($p['__op_sub']($sub3=$p['getattr'](shot, 'y'),$sub4=1)), 3, 3);
			return null;
		}
	, 1, [null,null,['self'],['shot']]);
		$cls_definition['draw_shot'] = $method;
		$method = $pyjs__bind_method2('draw_ship', function(ship) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ship = arguments[1];
			}
			var img;
			self['saveContext']();
			self['translate']($p['getattr'](ship, 'x'), $p['getattr'](ship, 'y'));
			self['rotate']($p['getattr'](ship, 'rot'));
			if ($p['bool']($p['getattr']($p['getattr'](self, 'controller'), 'key_up'))) {
				img = $p['getattr'](self, 'ship_thrust');
			}
			else {
				img = $p['getattr'](self, 'ship');
			}
			self['drawImage'](img, (typeof ($usub3=15)=='number'?
				-$usub3:
				$p['op_usub']($usub3)), (typeof ($usub4=12)=='number'?
				-$usub4:
				$p['op_usub']($usub4)));
			self['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['ship']]);
		$cls_definition['draw_ship'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,s,$iter1_iter,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
			self['setFillStyle']($m['Color']['Color']('#000'));
			self['fillRect'](0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			$iter1_iter = $p['getattr']($p['getattr'](self, 'model'), 'asteroids');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				a = $iter1_nextval['$nextval'];
				self['draw_asteroid'](a);
			}
			$iter2_iter = $p['getattr']($p['getattr'](self, 'model'), 'shots');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				s = $iter2_nextval['$nextval'];
				self['draw_shot'](s);
			}
			self['draw_ship']($p['getattr']($p['getattr'](self, 'model'), 'ship'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['GWTCanvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GameCanvas', $p['tuple']($bases), $data);
	})();
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'Space';
		$method = $pyjs__bind_method2('__init__', function(Parent) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				Parent = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Parent != 'undefined') {
					if (Parent !== null && typeof Parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Parent;
						Parent = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['Parent'] = Parent;
			self['focussed'] = false;
			$pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
			$m['ClickHandler']['__init__'](self);
			$m['KeyboardHandler']['__init__'](self);
			self['addClickListener'](self);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(Sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				Sender = arguments[1];
			}

			self['focussed'] = !$p['bool']($p['getattr'](self, 'focussed'));
			self['Parent']['setFocus']($p['getattr'](self, 'focussed'));
			return null;
		}
	, 1, [null,null,['self'],['Sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('public/Space.html');
		$m['c'] = $m['GameCanvas'](800, 600);
		$m['panel'] = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':$m['c']}]);
		$m['RootPanel']()['add']($m['panel']);
		$m['panel']['addKeyboardListener']($m['c']);
		$m['panel']['setFocus'](true);
		$m['RootPanel']()['add']($m['HTML']('\n<hr/>\nLeft/Right arrows turn, Up key thrusts, Space bar fires<br/>\n<a href="http://rumsey.org/blog/?p=215">About Space Game</a> by <a href="http://rumsey.org/blog/">Ogre</a><br/>\nWritten entirely in Python, using <a href="http://pyjs.org/">Pyjamas</a></br>\nCopyright &copy; 2009 Joe Rumsey\n'));
		$m['pyjd']['run']();
	}
	return this;
}; /* end Space */


/* end module: Space */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'game_model.Model', 'game_model', 'game_model.ASTEROID_SIZE', 'game_controller.Controller', 'game_controller']
*/
