/* start module: game_controller */
$pyjs['loaded_modules']['game_controller'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game_controller']['__was_initialized__']) return $pyjs['loaded_modules']['game_controller'];
	var $m = $pyjs['loaded_modules']['game_controller'];
	$m['__repr__'] = function() { return '<module: game_controller>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game_controller';
	$m['__name__'] = __mod_name__;


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['FPS'] = $p['___import___']('game_model.FPS', null, null, false);
	$m['ROTATE_SPEED'] = $p['___import___']('game_model.ROTATE_SPEED', null, null, false);
	$m['Controller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'game_controller';
		$method = $pyjs__bind_method2('__init__', function(model) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				model = arguments[1];
			}

			self['model'] = model;
			self['key_up'] = false;
			self['key_down'] = false;
			self['key_left'] = false;
			self['key_right'] = false;
			self['key_fire'] = false;
			return null;
		}
	, 1, [null,null,['self'],['model']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start_game', function(view) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				view = arguments[1];
			}
			var $div2,$div1;
			self['view'] = view;
			self['model']['start_game'](view);
			self['model']['reset']();
			self['timer'] = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'update')}]);
			self['timer']['scheduleRepeating']((typeof ($div1=1000)==typeof ($div2=$m['FPS']) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			return null;
		}
	, 1, [null,null,['self'],['view']]);
		$cls_definition['start_game'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['keyboard_updates']();
			self['model']['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('keyboard_updates', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var drot,$add2,$add1,$sub2,$sub1,ship;
			ship = $p['getattr']($p['getattr'](self, 'model'), 'ship');
			drot = 0;
			if ($p['bool']($p['getattr'](self, 'key_left'))) {
				drot = $p['__op_sub']($sub1=drot,$sub2=$m['ROTATE_SPEED']);
			}
			if ($p['bool']($p['getattr'](self, 'key_right'))) {
				drot = $p['__op_add']($add1=drot,$add2=$m['ROTATE_SPEED']);
			}
			if ($p['bool'](drot)) {
				ship['rotate_ship'](drot);
			}
			if ($p['bool']($p['getattr'](self, 'key_up'))) {
				ship['thrust']();
			}
			else {
				ship['friction']();
			}
			if ($p['bool']($p['getattr'](self, 'key_fire'))) {
				self['model']['trigger_fire']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['keyboard_updates'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Controller', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end game_controller */


/* end module: game_controller */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'game_model.FPS', 'game_model', 'game_model.ROTATE_SPEED']
*/
