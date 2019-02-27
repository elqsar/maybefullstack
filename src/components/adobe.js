// const Adb = (function(cjs, an) {
//   var p // shortcut to reference prototypes
//   var lib = {}
//   var ss = {}
//   var img = {}
//   lib.ssMetadata = [
//     {
//       name: 'Untitled_8_atlas_',
//       frames: [
//         [360, 632, 336, 168],
//         [360, 379, 358, 251],
//         [0, 379, 358, 314],
//         [0, 695, 63, 63],
//         [373, 0, 358, 377],
//         [0, 0, 371, 377],
//       ],
//     },
//   ]
//
//   // symbols:
//
//   ;(lib.CachedTexturedBitmap_10 = function() {
//     this.initialize(ss['Untitled_8_atlas_'])
//     this.gotoAndStop(0)
//   }).prototype = p = new cjs.Sprite()
//
//   ;(lib.CachedTexturedBitmap_12 = function() {
//     this.initialize(ss['Untitled_8_atlas_'])
//     this.gotoAndStop(1)
//   }).prototype = p = new cjs.Sprite()
//
//   ;(lib.CachedTexturedBitmap_14 = function() {
//     this.initialize(ss['Untitled_8_atlas_'])
//     this.gotoAndStop(2)
//   }).prototype = p = new cjs.Sprite()
//
//   ;(lib.CachedTexturedBitmap_15 = function() {
//     this.initialize(ss['Untitled_8_atlas_'])
//     this.gotoAndStop(3)
//   }).prototype = p = new cjs.Sprite()
//
//   ;(lib.CachedTexturedBitmap_16 = function() {
//     this.initialize(ss['Untitled_8_atlas_'])
//     this.gotoAndStop(4)
//   }).prototype = p = new cjs.Sprite()
//
//   ;(lib.CachedTexturedBitmap_17 = function() {
//     this.initialize(ss['Untitled_8_atlas_'])
//     this.gotoAndStop(5)
//   }).prototype = p = new cjs.Sprite()
//
//   ;(lib.Scene_1_Layer_1 = function(mode, startPosition, loop) {
//     this.initialize(mode, startPosition, loop, {})
//
//     // Layer_1
//     this.instance = new lib.CachedTexturedBitmap_15()
//     this.instance.parent = this
//     this.instance.setTransform(226.75, 168.8, 0.5, 0.5)
//     this.instance._off = true
//
//     this.instance_1 = new lib.CachedTexturedBitmap_10()
//     this.instance_1.parent = this
//     this.instance_1.setTransform(190.5, 168.8, 0.5, 0.5)
//
//     this.instance_2 = new lib.CachedTexturedBitmap_12()
//     this.instance_2.parent = this
//     this.instance_2.setTransform(190.5, 168.8, 0.5, 0.5)
//
//     this.instance_3 = new lib.CachedTexturedBitmap_14()
//     this.instance_3.parent = this
//     this.instance_3.setTransform(190.5, 168.8, 0.5, 0.5)
//
//     this.instance_4 = new lib.CachedTexturedBitmap_16()
//     this.instance_4.parent = this
//     this.instance_4.setTransform(190.5, 168.8, 0.5, 0.5)
//
//     this.instance_5 = new lib.CachedTexturedBitmap_17()
//     this.instance_5.parent = this
//     this.instance_5.setTransform(183.75, 168.8, 0.5, 0.5)
//
//     this.timeline.addTween(
//       cjs.Tween.get({})
//         .to({ state: [] })
//         .to({ state: [{ t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance_2 }, { t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance_3 }, { t: this.instance }] }, 1)
//         .to({ state: [{ t: this.instance_4 }] }, 1)
//         .to({ state: [{ t: this.instance_5 }] }, 1)
//         .wait(1)
//     )
//     this.timeline.addTween(
//       cjs.Tween.get(this.instance)
//         .wait(1)
//         .to({ _off: false }, 0)
//         .wait(1)
//         .to({ x: 263.75, y: 173.05 }, 0)
//         .wait(1)
//         .to({ x: 299.75, y: 189.8 }, 0)
//         .wait(1)
//         .to({ x: 326.75, y: 221.3 }, 0)
//         .wait(1)
//         .to({ x: 337.75, y: 262.8 }, 0)
//         .wait(1)
//         .to({ x: 311.75, y: 294.3 }, 0)
//         .wait(1)
//         .to({ x: 268.25, y: 311.8 }, 0)
//         .to({ _off: true }, 1)
//         .wait(2)
//     )
//   }).prototype = p = new cjs.MovieClip()
//
//   // stage content:
//   ;(lib.Untitled8 = function(mode, startPosition, loop) {
//     this.initialize(mode, startPosition, loop, {})
//
//     this.___GetDepth___ = function(obj) {
//       var depth = obj.depth
//       var cameraObj = this.___camera___instance
//       if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
//         depth += depth + cameraObj.depth
//       }
//       return depth
//     }
//     this.___needSorting___ = function() {
//       for (var i = 0; i < this.getNumChildren() - 1; i++) {
//         var prevDepth = this.___GetDepth___(this.getChildAt(i))
//         var nextDepth = this.___GetDepth___(this.getChildAt(i + 1))
//         if (prevDepth < nextDepth) return true
//       }
//       return false
//     }
//     this.___sortFunction___ = function(obj1, obj2) {
//       return (
//         this.exportRoot.___GetDepth___(obj2) -
//         this.exportRoot.___GetDepth___(obj1)
//       )
//     }
//     this.on('tick', function(event) {
//       var curTimeline = event.currentTarget
//       if (curTimeline.___needSorting___()) {
//         this.sortChildren(curTimeline.___sortFunction___)
//       }
//     })
//
//     // timeline functions:
//     this.frame_9 = function() {
//       this.___loopingOver___ = true
//     }
//
//     // actions tween:
//     this.timeline.addTween(
//       cjs.Tween.get(this)
//         .wait(9)
//         .call(this.frame_9)
//         .wait(1)
//     )
//
//     // Layer_1_obj_
//     this.Layer_1 = new lib.Scene_1_Layer_1()
//     this.Layer_1.name = 'Layer_1'
//     this.Layer_1.parent = this
//     this.Layer_1.setTransform(206.8, 188.8, 1, 1, 0, 0, 0, 206.8, 188.8)
//     this.Layer_1.depth = 0
//     this.Layer_1.isAttachedToCamera = 0
//     this.Layer_1.isAttachedToMask = 0
//     this.Layer_1.layerDepth = 0
//     this.Layer_1.layerIndex = 0
//     this.Layer_1.maskLayerName = 0
//
//     this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(10))
//   }).prototype = p = new cjs.MovieClip()
//   p.nominalBounds = new cjs.Rectangle(
//     695.8,
//     552.8,
//     -326.29999999999995,
//     -195.49999999999994
//   )
//   // library properties:
//   lib.properties = {
//     id: '3F12A23C767E40F192CC6E514E520487',
//     width: 1024,
//     height: 768,
//     fps: 24,
//     color: '#FFFFFF',
//     opacity: 1.0,
//     manifest: [
//       { src: 'images/Untitled_8_atlas_.png', id: 'Untitled_8_atlas_' },
//     ],
//     preloads: [],
//   }
//
//   // bootstrap callback support:
//
//   ;(lib.Stage = function(canvas) {
//     createjs.Stage.call(this, canvas)
//   }).prototype = p = new createjs.Stage()
//
//   p.setAutoPlay = function(autoPlay) {
//     this.tickEnabled = autoPlay
//   }
//   p.play = function() {
//     this.tickEnabled = true
//     this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
//   }
//   p.stop = function(ms) {
//     if (ms) this.seek(ms)
//     this.tickEnabled = false
//   }
//   p.seek = function(ms) {
//     this.tickEnabled = true
//     this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000)
//   }
//   p.getDuration = function() {
//     return this.getChildAt(0).totalFrames / lib.properties.fps * 1000
//   }
//
//   p.getTimelinePosition = function() {
//     return this.getChildAt(0).currentFrame / lib.properties.fps * 1000
//   }
//
//   an.bootcompsLoaded = an.bootcompsLoaded || []
//   if (!an.bootstrapListeners) {
//     an.bootstrapListeners = []
//   }
//
//   an.bootstrapCallback = function(fnCallback) {
//     an.bootstrapListeners.push(fnCallback)
//     if (an.bootcompsLoaded.length > 0) {
//       for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
//         fnCallback(an.bootcompsLoaded[i])
//       }
//     }
//   }
//
//   an.compositions = an.compositions || {}
//   an.compositions['3F12A23C767E40F192CC6E514E520487'] = {
//     getStage: function() {
//       return exportRoot.getStage()
//     },
//     getLibrary: function() {
//       return lib
//     },
//     getSpriteSheet: function() {
//       return ss
//     },
//     getImages: function() {
//       return img
//     },
//   }
//
//   an.compositionLoaded = function(id) {
//     an.bootcompsLoaded.push(id)
//     for (var j = 0; j < an.bootstrapListeners.length; j++) {
//       an.bootstrapListeners[j](id)
//     }
//   }
//
//   an.getComposition = function(id) {
//     return an.compositions[id]
//   }
//
//   // Layer depth API :
//
//   AdobeAn.Layer = new function() {
//     this.getLayerZDepth = function(timeline, layerName) {
//       if (layerName === 'Camera') layerName = '___camera___instance'
//       var script =
//         'if(timeline.' +
//         layerName +
//         ') timeline.' +
//         layerName +
//         '.depth; else 0;'
//       return eval(script)
//     }
//     this.setLayerZDepth = function(timeline, layerName, zDepth) {
//       const MAX_zDepth = 10000
//       const MIN_zDepth = -5000
//       if (zDepth > MAX_zDepth) zDepth = MAX_zDepth
//       else if (zDepth < MIN_zDepth) zDepth = MIN_zDepth
//       if (layerName === 'Camera') layerName = '___camera___instance'
//       var script =
//         'if(timeline.' +
//         layerName +
//         ') timeline.' +
//         layerName +
//         '.depth = ' +
//         zDepth +
//         ';'
//       eval(script)
//     }
//     this.removeLayer = function(timeline, layerName) {
//       if (layerName === 'Camera') layerName = '___camera___instance'
//       var script =
//         'if(timeline.' +
//         layerName +
//         ') timeline.removeChild(timeline.' +
//         layerName +
//         ');'
//       eval(script)
//     }
//     this.addNewLayer = function(timeline, layerName, zDepth) {
//       if (layerName === 'Camera') layerName = '___camera___instance'
//       zDepth = typeof zDepth !== 'undefined' ? zDepth : 0
//       var layer = new createjs.MovieClip()
//       layer.name = layerName
//       layer.depth = zDepth
//       layer.layerIndex = 0
//       timeline.addChild(layer)
//     }
//   }()
// })((createjs = createjs || {}), (AdobeAn = AdobeAn || {}))
// var createjs, AdobeAn
//
// export default Adb
