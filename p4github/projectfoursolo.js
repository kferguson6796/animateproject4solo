(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"projectfoursolo_atlas_1", frames: [[0,227,133,121],[134,0,133,121],[135,123,133,121],[269,0,161,98],[270,100,148,98],[135,246,161,98],[298,200,148,98],[420,100,41,62],[0,0,132,225]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Clickhere = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo_animate = function() {
	this.initialize(ss["projectfoursolo_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo_animate();
	this.instance.setTransform(-16,-27.3,0.2429,0.2429);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-27.3,32.1,54.7);


(lib.clickhere_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-33.3,-30.1,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#F3ED13","#FEF965"],[0,0.969],0,0,0,0,0,28.6).ss(1,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzg");
	this.shape.setTransform(-2.089,-0.0284,0.7755,0.7755);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F3DABF","#FEF037"],[0,0.969],0,0,0,0,0,28.1).s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");
	this.shape_1.setTransform(-2.089,-0.0284,0.7755,0.7755);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F3ED13","#FEF965"],[0,0.969],0,0,0,0,0,41.5).s().p("AgSEtIg2hUQgKgQAAgTQAAgUAKgQQAPgXAagGQAagFAWAOQAXAPAGAaQAFAbgOAXIg1BUIgBAAIgBAAgAkVDgIgBgBIBFh2QAKgSAQgHIgEACQgZAHgXgNIhgg2IAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIBgg1QAfgQAfAQQAXANAHAYQAHAZgNAXQgLATgTAIIAIgCQAYgGAVANQAVANAGAYQAFAYgNAVQgNAWgYAFIiEAfgABxC1QgYgHgMgWQgMgWAHgYQAIgXAVgMQAWgLAYAHQAYAHALAWIBBB6IAAABIgBABgACZArQgXgJgJgWQgKgWAJgWQAJgXAXgKQAWgKAXAJICIA2IAAABIAAABIiIA1QgLAEgLAAQgLAAgLgEgAi4hBQgYgHgMgVIhDh4IAAgBIACgBICEAjQAZAHAMAWQAMAWgHAXQgHAYgVAMQgOAIgOAAQgJAAgIgDgABLhZQgYgKgJgYQgKgXALgYQAKgXAYgKIBugrIAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgdBzQgIAfgdALQgLAFgMAAQgMAAgMgGgAhFh9QgXgOgFgbQgGgaAOgXIA2hVIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIA1BVQAKAQAAATQABATgLAQQgOAXgaAGIgOACQgSAAgRgLg");
	this.shape_2.setTransform(-0.0125,0.0125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#F38213","#FED200"],[0,0.969],0,0,0,0,0,28.1).s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");
	this.shape_3.setTransform(-2.089,-0.0284,0.7755,0.7755);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC515").s().p("AgSEtIg2hUQgKgQAAgTQAAgUAKgQQAPgXAagGQAagFAWAOQAXAPAGAaQAFAbgOAXIg1BUIgBAAIgBAAgAkVDgIgBgBIBFh2QAKgSAQgHIgEACQgZAHgXgNIhgg2IAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIBgg1QAfgQAfAQQAXANAHAYQAHAZgNAXQgLATgTAIIAIgCQAYgGAVANQAVANAGAYQAFAYgNAVQgNAWgYAFIiEAfgABxC1QgYgHgMgWQgMgWAHgYQAIgXAVgMQAWgLAYAHQAYAHALAWIBBB6IAAABIgBABgACZArQgXgJgJgWQgKgWAJgWQAJgXAXgKQAWgKAXAJICIA2IAAABIAAABIiIA1QgLAEgLAAQgLAAgLgEgAi4hBQgYgHgMgVIhDh4IAAgBIACgBICEAjQAZAHAMAWQAMAWgHAXQgHAYgVAMQgOAIgOAAQgJAAgIgDgABLhZQgYgKgJgYQgKgXALgYQAKgXAYgKIBugrIAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgdBzQgIAfgdALQgLAFgMAAQgMAAgMgGgAhFh9QgXgOgFgbQgGgaAOgXIA2hVIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIA1BVQAKAQAAATQABATgLAQQgOAXgaAGIgOACQgSAAgRgLg");
	this.shape_4.setTransform(-0.0125,0.0125);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-33.3,-30.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-30.1,66.6,60.5);


// stage content:
(lib.projectfoursolo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://project-four-solo-kf.glitch.me/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.text = new cjs.Text("Click Here", "normal 400 17px 'tk-adorn-condensed-sans'", "#FF33CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 37;
	this.text.parent = this;
	this.text.setTransform(410.25,88.9);
	if(!lib.properties.webfonts['tk-adorn-condensed-sans']) {
		lib.webFontTxtInst['tk-adorn-condensed-sans'] = lib.webFontTxtInst['tk-adorn-condensed-sans'] || [];
		lib.webFontTxtInst['tk-adorn-condensed-sans'].push(this.text);
	}

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(378.9,84.3,0.5,0.5);

	this.instance_1 = new lib.Clickhere();
	this.instance_1.setTransform(389,2);

	this.btn = new lib.clickhere_btn();
	this.btn.name = "btn";
	this.btn.setTransform(411.3,29.8);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.clickhere_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.btn},{t:this.instance_1}]},59).wait(1));

	// Logo
	this.instance_2 = new lib.Logo("synched",0);
	this.instance_2.setTransform(-24.25,31.05);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:32.95,y:30.3},15).wait(36));

	// Society_2
	this.instance_3 = new lib.Bitmap4();
	this.instance_3.setTransform(226,71);

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["projectfoursolo_atlas_1"],6);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1,0,0,1,-74,-49)).s().p("ArjHqIAAvTIXHAAIAAPTg")
	}.bind(this);
	this.shape.setTransform(303,120);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape}]},39).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({_off:false},0).wait(1).to({x:302.9,y:115.75},0).wait(1).to({x:302.8,y:111.55},0).wait(1).to({x:302.7,y:107.3},0).wait(1).to({x:302.6,y:103.1},0).wait(1).to({x:302.5,y:98.85},0).wait(1).to({x:302.4,y:94.6},0).wait(1).to({x:302.3,y:90.4},0).wait(1).to({x:302.2,y:86.15},0).wait(1).to({x:302.1,y:81.95},0).wait(1).to({x:302,y:77.7},0).wait(1).to({x:301.9,y:73.45},0).wait(1).to({x:301.8,y:69.25},0).wait(1).to({x:301.7,y:65},0).wait(1).to({x:301.6,y:60.8},0).wait(1).to({x:301.5,y:56.55},0).wait(1).to({x:301.4,y:52.3},0).wait(1).to({x:301.3,y:48.1},0).wait(1).to({x:301.2,y:43.85},0).wait(1).to({x:301.1,y:39.65},0).wait(1).to({x:301,y:35.4},0).wait(1));

	// Smoothie_2
	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["projectfoursolo_atlas_1"],3);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(1,0,0,1,-80.5,-49)).s().p("AskHqIAAvTIZJAAIAAPTg")
	}.bind(this);
	this.shape_1.setTransform(150.5,-39);

	this.shape_2 = new cjs.Shape();
	var sprImg_shape_2 = cjs.SpriteSheetUtils.extractFrame(ss["projectfoursolo_atlas_1"],5);
	sprImg_shape_2.onload = function(){
		this.shape_2.graphics.bf(sprImg_shape_2, null, new cjs.Matrix2D(1,0,0,1,-80.5,-49)).s().p("AskHqIAAvTIZJAAIAAPTg")
	}.bind(this);
	this.shape_2.setTransform(150.5,-39);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},24).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24).to({_off:false},0).wait(1).to({y:-33.95},0).wait(1).to({y:-28.95},0).wait(1).to({y:-23.9},0).wait(1).to({y:-18.9},0).wait(1).to({y:-13.85},0).wait(1).to({y:-8.85},0).wait(1).to({y:-3.8},0).wait(1).to({y:1.2},0).wait(1).to({y:6.25},0).wait(1).to({y:11.25},0).wait(1).to({y:16.3},0).wait(1).to({y:21.3},0).wait(1).to({y:26.35},0).wait(1).to({y:31.35},0).wait(1).to({y:36.4},0).wait(21));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5FFFF").s().p("EgktAExIAAphMBJbAAAIAAJhg");
	this.shape_3.setTransform(234.975,29.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(193.8,-58,276.2,227);
// library properties:
lib.properties = {
	id: '0E5F909DF1474EE2962B5A2E61A4D10F',
	width: 468,
	height: 60,
	fps: 24,
	color: "#C5FFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/projectfoursolo_atlas_1.png?1619458269712", id:"projectfoursolo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0E5F909DF1474EE2962B5A2E61A4D10F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;