/* start module: game_model */
$pyjs['loaded_modules']['game_model'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game_model']['__was_initialized__']) return $pyjs['loaded_modules']['game_model'];
	var $m = $pyjs['loaded_modules']['game_model'];
	$m['__repr__'] = function() { return '<module: game_model>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game_model';
	$m['__name__'] = __mod_name__;
	var $div2,$div1;

	$m['math'] = $p['___import___']('math', null);
	$m['random'] = $p['___import___']('random', null);
	$m['NUM_ASTEROIDS'] = 2;
	$m['FPS'] = 30;
	$m['FRICTION'] = 0.05;
	$m['THRUST'] = 0.2;
	$m['ROTATE_SPEED_PER_SEC'] = $p['getattr']((typeof Math == "undefined"?$m['Math']:Math), 'PI');
	$m['ROTATE_SPEED'] = (typeof ($div1=$m['ROTATE_SPEED_PER_SEC'])==typeof ($div2=$m['FPS']) && typeof $div1=='number' && $div2 !== 0?
		$div1/$div2:
		$p['op_div']($div1,$div2));
	$m['MAX_ASTEROID_SPEED'] = 2.0;
	$m['SHOT_LIFESPAN'] = 60;
	$m['SHOT_SPEED'] = 8.0;
	$m['SHOT_DELAY'] = 10;
	$m['ASTEROID_SIZE'] = 180.0;
	$m['ASTEROID_SIZES'] = $p['list']([90.0, 45.0, 22.0, 11.0]);
	$m['randfloat'] = function(absval) {
		var $sub2,$sub1,$mul4,$mul3,$mul2,$mul1;
		return $p['__op_sub']($sub1=(typeof ($mul3=$m['random']['random']())==typeof ($mul4=(typeof ($mul1=2)==typeof ($mul2=absval) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2))) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)),$sub2=absval);
	};
	$m['randfloat']['__name__'] = 'randfloat';

	$m['randfloat']['__bind_type__'] = 0;
	$m['randfloat']['__args__'] = [null,null,['absval']];
	$m['distsq'] = function(x1, y1, x2, y2) {
		var $mul7,$add1,$sub8,$sub10,$add2,$sub9,$sub3,$mul8,$mul6,$mul5,$sub7,$sub6,$sub5,$sub4;
		return $p['__op_add']($add1=(typeof ($mul5=$p['__op_sub']($sub3=x1,$sub4=x2))==typeof ($mul6=$p['__op_sub']($sub5=x1,$sub6=x2)) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6)),$add2=(typeof ($mul7=$p['__op_sub']($sub7=y1,$sub8=y2))==typeof ($mul8=$p['__op_sub']($sub9=y1,$sub10=y2)) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8)));
	};
	$m['distsq']['__name__'] = 'distsq';

	$m['distsq']['__bind_type__'] = 0;
	$m['distsq']['__args__'] = [null,null,['x1'],['y1'],['x2'],['y2']];
	$m['Asteroid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'game_model';
		$method = $pyjs__bind_method2('__init__', function(model, x, y, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				model = arguments[1];
				x = arguments[2];
				y = arguments[3];
				size = arguments[4];
			}
			if (typeof x == 'undefined') x=arguments['callee']['__args__'][4][1];
			if (typeof y == 'undefined') y=arguments['callee']['__args__'][5][1];
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][6][1];
			var $div10,$div11,$div12,$mul20,$or1,$or2,$sub13,$sub12,$sub11,$sub14,$div8,$div9,$mul9,$div3,$div6,$div7,$div4,$div5,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,$mul19,$mul18;
			self['model'] = model;
			if ($p['bool'](($p['bool']($or1=(x === null))?$or1:(y === null)))) {
				self['x'] = (typeof ($div3=$p['getattr'](model, 'x'))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4));
				self['y'] = (typeof ($div5=$p['getattr'](model, 'y'))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				while ($p['bool'](($p['cmp']($m['distsq']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), (typeof ($div7=$p['getattr'](model, 'x'))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)), (typeof ($div9=$p['getattr'](model, 'y'))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))), (typeof ($mul9=180)==typeof ($mul10=180) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))) == -1))) {
					self['x'] = $m['random']['randint'](0, $p['getattr'](model, 'x'));
					self['y'] = $m['random']['randint'](0, $p['getattr'](model, 'y'));
				}
			}
			else {
				self['x'] = x;
				self['y'] = y;
			}
			self['dx'] = $m['randfloat']($m['MAX_ASTEROID_SPEED']);
			self['dy'] = $m['randfloat']($m['MAX_ASTEROID_SPEED']);
			self['rot'] = $p['__op_sub']($sub11=(typeof ($mul13=$m['random']['random']())==typeof ($mul14=(typeof ($mul11=2)==typeof ($mul12=$p['getattr']($m['math'], 'pi')) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12))) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$sub12=$p['getattr']($m['math'], 'pi'));
			self['rotspeed'] = $p['__op_sub']($sub13=(typeof ($mul15=$m['random']['random']())==typeof ($mul16=0.1) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)),$sub14=0.05);
			self['size'] = size;
			self['radius'] = $m['ASTEROID_SIZES']['__getitem__']($p['getattr'](self, 'size'));
			self['radius2'] = (typeof ($mul17=$p['getattr'](self, 'radius'))==typeof ($mul18=$p['getattr'](self, 'radius')) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18));
			self['scale'] = (typeof ($mul19=(typeof ($div11=$p['getattr'](self, 'radius'))==typeof ($div12=$m['ASTEROID_SIZE']) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)))==typeof ($mul20=2) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20));
			return null;
		}
	, 1, [null,null,['self'],['model'],['x', null],['y', null],['size', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update_dim', function(pos, d_dim, max_dim) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				d_dim = arguments[2];
				max_dim = arguments[3];
			}
			var $sub15,$sub16,$add3,$add4,$mul22,$mul21;
			pos = $p['__op_add']($add3=pos,$add4=d_dim);
			if ($p['bool'](($p['cmp'](d_dim, 0) == -1))) {
				if ($p['bool'](($p['cmp'](pos, 0) < 1))) {
					pos = (typeof ($usub1=pos)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
					d_dim = (typeof ($usub2=d_dim)=='number'?
						-$usub2:
						$p['op_usub']($usub2));
				}
			}
			else {
				if ($p['bool'](((($p['cmp'](pos, max_dim))|1) == 1))) {
					d_dim = (typeof ($usub3=d_dim)=='number'?
						-$usub3:
						$p['op_usub']($usub3));
					pos = $p['__op_sub']($sub15=(typeof ($mul21=2)==typeof ($mul22=max_dim) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22)),$sub16=pos);
				}
			}
			return $p['tuple']([pos, d_dim]);
		}
	, 1, [null,null,['self'],['pos'],['d_dim'],['max_dim']]);
		$cls_definition['update_dim'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add6,$add5;
			var $tupleassign1 = $p['__ass_unpack'](self['update_dim']($p['getattr'](self, 'x'), $p['getattr'](self, 'dx'), $p['getattr']($p['getattr'](self, 'model'), 'x')), 2, null);
			self['x'] = $tupleassign1[0];
			self['dx'] = $tupleassign1[1];
			var $tupleassign2 = $p['__ass_unpack'](self['update_dim']($p['getattr'](self, 'y'), $p['getattr'](self, 'dy'), $p['getattr']($p['getattr'](self, 'model'), 'y')), 2, null);
			self['y'] = $tupleassign2[0];
			self['dy'] = $tupleassign2[1];
			self['rot'] = $p['__op_add']($add5=$p['getattr'](self, 'rot'),$add6=$p['getattr'](self, 'rotspeed'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Asteroid', $p['tuple']($bases), $data);
	})();
	$m['Shot'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'game_model';
		$method = $pyjs__bind_method2('__init__', function(model, ship) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				model = arguments[1];
				ship = arguments[2];
			}

			self['model'] = model;
			self['x'] = $p['getattr'](ship, 'x');
			self['y'] = $p['getattr'](ship, 'y');
			self['dx'] = $p['getattr'](ship, 'dx');
			self['dy'] = $p['getattr'](ship, 'dy');
			self['dir'] = $p['getattr'](ship, 'rot');
			self['lifespan'] = $m['SHOT_LIFESPAN'];
			return null;
		}
	, 1, [null,null,['self'],['model'],['ship']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub20,$iter1_iter,$iter1_array,$mul26,$mul24,$mul25,$mul23,$add7,$sub19,$sub18,$iter1_nextval,$sub17,$add10,$add11,$add12,a,$iter1_type,i,$iter1_idx,$add8,$add9;
			self['lifespan'] = $p['__op_sub']($sub17=$p['getattr'](self, 'lifespan'),$sub18=1);
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'lifespan'), 0) < 1))) {
				return false;
			}
			self['x'] = $p['__op_add']($add9=$p['__op_add']($add7=$p['getattr'](self, 'x'),$add8=$p['getattr'](self, 'dx')),$add10=(typeof ($mul23=$m['SHOT_SPEED'])==typeof ($mul24=$m['math']['sin']($p['getattr'](self, 'dir'))) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24)));
			self['y'] = $p['__op_sub']($sub19=$p['__op_add']($add11=$p['getattr'](self, 'y'),$add12=$p['getattr'](self, 'dy')),$sub20=(typeof ($mul25=$m['SHOT_SPEED'])==typeof ($mul26=$m['math']['cos']($p['getattr'](self, 'dir'))) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26)));
			$iter1_iter = $p['range']($p['len']($p['getattr']($p['getattr'](self, 'model'), 'asteroids')));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				a = $p['getattr']($p['getattr'](self, 'model'), 'asteroids')['__getitem__'](i);
				if ($p['bool'](($p['cmp']($m['distsq']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](a, 'x'), $p['getattr'](a, 'y')), $p['getattr'](a, 'radius2')) == -1))) {
					self['model']['split_asteroid'](i);
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Shot', $p['tuple']($bases), $data);
	})();
	$m['Ship'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'game_model';
		$method = $pyjs__bind_method2('__init__', function(cx, cy) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cx = arguments[1];
				cy = arguments[2];
			}

			self['cx'] = cx;
			self['cy'] = cy;
			self['reset']();
			return null;
		}
	, 1, [null,null,['self'],['cx'],['cy']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('rotate_ship', function(drot) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				drot = arguments[1];
			}
			var $sub22,$sub23,$sub21,$sub24,$mul29,$add14,$add15,$add16,$mul28,$add13,$mul27,$mul30;
			self['rot'] = $p['__op_add']($add13=$p['getattr'](self, 'rot'),$add14=drot);
			if ($p['bool'](($p['cmp'](drot, $p['__op_sub']($sub21=0,$sub22=$p['getattr']($m['math'], 'pi'))) == -1))) {
				drot = $p['__op_add']($add15=drot,$add16=(typeof ($mul27=2)==typeof ($mul28=$p['getattr']($m['math'], 'pi')) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)));
			}
			else if ($p['bool'](($p['cmp'](drot, $p['getattr']($m['math'], 'pi')) == 1))) {
				drot = $p['__op_sub']($sub23=drot,$sub24=(typeof ($mul29=2)==typeof ($mul30=$p['getattr']($m['math'], 'pi')) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)));
			}
			return null;
		}
	, 1, [null,null,['self'],['drot']]);
		$cls_definition['rotate_ship'] = $method;
		$method = $pyjs__bind_method2('thrust', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub26,$sub25,$mul31,$add17,$mul34,$add18,$mul33,$mul32;
			self['dx'] = $p['__op_add']($add17=$p['getattr'](self, 'dx'),$add18=(typeof ($mul31=$m['THRUST'])==typeof ($mul32=$m['math']['sin']($p['getattr'](self, 'rot'))) && typeof $mul31=='number'?
				$mul31*$mul32:
				$p['op_mul']($mul31,$mul32)));
			self['dy'] = $p['__op_sub']($sub25=$p['getattr'](self, 'dy'),$sub26=(typeof ($mul33=$m['THRUST'])==typeof ($mul34=$m['math']['cos']($p['getattr'](self, 'rot'))) && typeof $mul33=='number'?
				$mul33*$mul34:
				$p['op_mul']($mul33,$mul34)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['thrust'] = $method;
		$method = $pyjs__bind_method2('friction', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub30,$sub28,$sub27,$and1,$sub29,$mul38,$mul35,$mul37,$mul36,$and2,dir;
			if ($p['bool'](($p['bool']($and1=($p['cmp']($m['math']['fabs']($p['getattr'](self, 'dx')), 0.001) == -1))?($p['cmp']($m['math']['fabs']($p['getattr'](self, 'dy')), 0.001) == -1):$and1))) {
				self['dx'] = 0;
				self['dy'] = 0;
			}
			else {
				dir = $m['math']['atan2']($p['getattr'](self, 'dx'), $p['getattr'](self, 'dy'));
				self['dx'] = $p['__op_sub']($sub27=$p['getattr'](self, 'dx'),$sub28=(typeof ($mul35=$m['FRICTION'])==typeof ($mul36=$m['math']['sin'](dir)) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)));
				self['dy'] = $p['__op_sub']($sub29=$p['getattr'](self, 'dy'),$sub30=(typeof ($mul37=$m['FRICTION'])==typeof ($mul38=$m['math']['cos'](dir)) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38)));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['friction'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,$add21,$add20,$add22,$add25,$add24,$add26,$sub31,$and9,$sub33,$sub32,$sub35,$sub34,$sub36,$and3,$and4,$and5,$and6,$and7,$and10,$add19,$add23;
			self['shot_delay'] = $p['__op_sub']($sub31=$p['getattr'](self, 'shot_delay'),$sub32=1);
			self['x'] = $p['__op_add']($add19=$p['getattr'](self, 'x'),$add20=$p['getattr'](self, 'dx'));
			self['y'] = $p['__op_add']($add21=$p['getattr'](self, 'y'),$add22=$p['getattr'](self, 'dy'));
			if ($p['bool'](($p['bool']($and3=($p['cmp']($p['getattr'](self, 'dx'), 0) == 1))?((($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](self, 'cx')))|1) == 1):$and3))) {
				self['x'] = $p['__op_sub']($sub33=$p['getattr'](self, 'x'),$sub34=$p['getattr'](self, 'cx'));
			}
			else if ($p['bool'](($p['bool']($and5=($p['cmp']($p['getattr'](self, 'dx'), 0) == -1))?($p['cmp']($p['getattr'](self, 'x'), 0) == -1):$and5))) {
				self['x'] = $p['__op_add']($add23=$p['getattr'](self, 'x'),$add24=$p['getattr'](self, 'cx'));
			}
			if ($p['bool'](($p['bool']($and7=($p['cmp']($p['getattr'](self, 'y'), 0) == 1))?((($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](self, 'cy')))|1) == 1):$and7))) {
				self['y'] = $p['__op_sub']($sub35=$p['getattr'](self, 'y'),$sub36=$p['getattr'](self, 'cy'));
			}
			else if ($p['bool'](($p['bool']($and9=($p['cmp']($p['getattr'](self, 'dy'), 0) == -1))?($p['cmp']($p['getattr'](self, 'y'), 0) == -1):$and9))) {
				self['y'] = $p['__op_add']($add25=$p['getattr'](self, 'y'),$add26=$p['getattr'](self, 'cy'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div14,$div15,$div16,$div13;
			self['x'] = (typeof ($div13=$p['getattr'](self, 'cx'))==typeof ($div14=2) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14));
			self['y'] = (typeof ($div15=$p['getattr'](self, 'cy'))==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
				$div15/$div16:
				$p['op_div']($div15,$div16));
			self['dx'] = 0;
			self['dy'] = 0;
			self['rot'] = 0;
			self['shot_delay'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Ship', $p['tuple']($bases), $data);
	})();
	$m['Model'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'game_model';
		$method = $pyjs__bind_method2('__init__', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['x'] = x;
			self['y'] = y;
			self['num_asteroids'] = $m['NUM_ASTEROIDS'];
			self['ship'] = $m['Ship'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start_game', function(view) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				view = arguments[1];
			}

			self['view'] = view;
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
			var a,$iter2_nextval,$iter2_type,$iter2_iter,i,$iter3_array,$iter2_idx,$iter3_idx,$iter3_iter,$iter3_type,$iter3_nextval,$iter2_array;
			$iter2_iter = $p['getattr'](self, 'asteroids');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				a = $iter2_nextval['$nextval'];
				a['move']();
				if ($p['bool'](($p['cmp']($m['distsq']($p['getattr']($p['getattr'](self, 'ship'), 'x'), $p['getattr']($p['getattr'](self, 'ship'), 'y'), $p['getattr'](a, 'x'), $p['getattr'](a, 'y')), $p['getattr'](a, 'radius2')) == -1))) {
					self['destroyShip']();
					return null;
				}
			}
			$iter3_iter = $p['reversed']($p['range']($p['len']($p['getattr'](self, 'shots'))));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'shots')['__getitem__'](i)['move']()))) {
					self['shots']['pop'](i);
					if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, 'asteroids')), 0))) {
						self['start_next_level']();
						return null;
					}
				}
			}
			self['ship']['move']();
			self['view']['draw']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('start_next_level', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add28,$add27;
			self['num_asteroids'] = $p['__op_add']($add27=$p['getattr'](self, 'num_asteroids'),$add28=1);
			self['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start_next_level'] = $method;
		$method = $pyjs__bind_method2('destroyShip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['num_asteroids'] = $m['NUM_ASTEROIDS'];
			self['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['destroyShip'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['shots'] = $p['list']([]);
			self['asteroids'] = function(){
				var i,$iter4_nextval,$collcomp1,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp1 = $p['list']();
			$iter4_iter = $p['range']($p['getattr'](self, 'num_asteroids'));
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				i = $iter4_nextval['$nextval'];
				$collcomp1['append']($m['Asteroid'](self));
			}

	return $collcomp1;}();
			self['ship']['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('trigger_fire', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'ship'), 'shot_delay'), 0) == 1))) {
				return null;
			}
			else {
				self['shots']['append']($m['Shot'](self, $p['getattr'](self, 'ship')));
				$p['getattr'](self, 'ship')['shot_delay'] = $m['SHOT_DELAY'];
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['trigger_fire'] = $method;
		$method = $pyjs__bind_method2('split_asteroid', function(i) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
			}
			var a,$iter5_nextval,$iter5_idx,$sub37,$sub38,j,$add29,$iter5_iter,$iter5_array,$iter5_type,$add30;
			a = $p['getattr'](self, 'asteroids')['__getitem__'](i);
			if ($p['bool'](($p['cmp']($p['getattr'](a, 'size'), $p['__op_sub']($sub37=$p['len']($m['ASTEROID_SIZES']),$sub38=1)) == -1))) {
				$iter5_iter = $p['range'](2);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					j = $iter5_nextval['$nextval'];
					self['asteroids']['append']($m['Asteroid'](self, $p['getattr'](a, 'x'), $p['getattr'](a, 'y'), $p['__op_add']($add29=$p['getattr'](a, 'size'),$add30=1)));
				}
			}
			self['asteroids']['pop'](i);
			return null;
		}
	, 1, [null,null,['self'],['i']]);
		$cls_definition['split_asteroid'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Model', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end game_model */


/* end module: game_model */


/*
PYJS_DEPS: ['math', 'random']
*/
