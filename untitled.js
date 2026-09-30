/***************** 
 * Untitled *
 *****************/

import { core, data, sound, util, visual, hardware } from 'https://lib.pavlovia.org/psychojs-2026.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(HELLORoutineBegin());
flowScheduler.add(HELLORoutineEachFrame());
flowScheduler.add(HELLORoutineEnd());
flowScheduler.add(RULESRoutineBegin());
flowScheduler.add(RULESRoutineEachFrame());
flowScheduler.add(RULESRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(THANKSRoutineBegin());
flowScheduler.add(THANKSRoutineEachFrame());
flowScheduler.add(THANKSRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'assets/img1.jpg', 'path': 'assets/img1.jpg'},
    {'name': 'assets/img2.jpg', 'path': 'assets/img2.jpg'},
    {'name': 'assets/img3.jpg', 'path': 'assets/img3.jpg'},
    {'name': 'assets/img4.jpg', 'path': 'assets/img4.jpg'},
    {'name': 'assets/img5.jpg', 'path': 'assets/img5.jpg'},
    {'name': 'assets/img6.jpg', 'path': 'assets/img6.jpg'},
    {'name': 'assets/img7.jpg', 'path': 'assets/img7.jpg'},
    {'name': 'assets/img8.jpg', 'path': 'assets/img8.jpg'},
    {'name': 'assets/img9.png', 'path': 'assets/img9.png'},
    {'name': 'assets/img10.png', 'path': 'assets/img10.png'},
    {'name': 'assets/img11.png', 'path': 'assets/img11.png'},
    {'name': 'assets/img12.png', 'path': 'assets/img12.png'},
    {'name': 'assets/img13.png', 'path': 'assets/img13.png'},
    {'name': 'assets/img14.png', 'path': 'assets/img14.png'},
    {'name': 'assets/img15.png', 'path': 'assets/img15.png'},
    {'name': 'assets/img16.png', 'path': 'assets/img16.png'},
    {'name': 'assets/setting.png', 'path': 'assets/setting.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var HELLOClock;
var SETTING_IMAGE_1;
var CONTINUE_KEY_1;
var HELLO_TEXT;
var DEMOSTRATION_TEXT;
var RULESClock;
var SETTING_IMAGE_2;
var CONTINUE_KEY_2;
var RULE_TEXT_TITLE;
var RULE_TEXT_1;
var RULE_TEXT_2;
var RULE_TEXT_3;
var RULE_TEXT_4;
var RULE_TEXT_5;
var RULE_TEXT_6;
var RULE_TEXT_7;
var POINTClock;
var SETTIGN_IMAGE_3;
var CONTINUE_KEY_3;
var Point;
var STIMULATEClock;
var SETTING_IMAGE_4;
var CONTINUE_KEY_4;
var STIMULATE_IMAGE;
var RECORDClock;
var SETTING_IMAGE_5;
var TITLE_TEXT;
var INPUT;
var SUBMMIT_KEY;
var THANKSClock;
var THANKS_TEXT;
var THANKS_DETAILED_TEXT;
var CONTINUE_KEY_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "HELLO"
  HELLOClock = new util.Clock();
  SETTING_IMAGE_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SETTING_IMAGE_1', units : 'norm', 
    image : 'assets/setting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : 0.9,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  CONTINUE_KEY_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  HELLO_TEXT = new visual.TextStim({
    win: psychoJS.window,
    name: 'HELLO_TEXT',
    text: '欢迎参加本次实验！',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -2.0 
  });
  
  DEMOSTRATION_TEXT = new visual.TextStim({
    win: psychoJS.window,
    name: 'DEMOSTRATION_TEXT',
    text: '（按下 SPACE 键以了解实验规则）\n\n\n温馨提示：切换英文输入法体验更佳',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-0.4902, -0.5059, -0.4902]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "RULES"
  RULESClock = new util.Clock();
  SETTING_IMAGE_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SETTING_IMAGE_2', units : 'norm', 
    image : 'assets/setting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : 0.9,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  CONTINUE_KEY_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  RULE_TEXT_TITLE = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_TITLE',
    text: '规则',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -0.9922]),  opacity: undefined,
    depth: -2.0 
  });
  
  RULE_TEXT_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_1',
    text: '1. 本次实验分为16个循环，每个循环的流程固定',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), 0.2], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -3.0 ,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  RULE_TEXT_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_2',
    text: '2.循环开始，屏幕中心会出现一个红色小球，你需要盯着这个小球',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), 0.1], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -4.0 ,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  RULE_TEXT_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_3',
    text: '3.小球消失的瞬间，你需要按下空格键',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), 0.0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -5.0 ,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  RULE_TEXT_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_4',
    text: '4.你按下空格键的同时，屏幕上会出现人或物的图片（可能倒立）',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), (- 0.1)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -6.0 ,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  RULE_TEXT_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_5',
    text: '5.你需要在辨认出人/物的瞬间按下SPACE',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -7.0 ,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  RULE_TEXT_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_6',
    text: '6.循环最后你需要写出你刚刚看到的人/物的名字（最好英文）\n（不要求完全正确，如ikun\\caixukun\\kunkun都算对）',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -8.0 ,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  RULE_TEXT_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RULE_TEXT_7',
    text: '7.你需要坐起来做实验，准备好请按下SPACE',
    font: 'Arial',
    units: undefined, 
    pos: [(-0.45), (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -9.0,
    alignHoriz: 'left',
    alignVert: 'center'
  });
  
  // Initialize components for Routine "POINT"
  POINTClock = new util.Clock();
  SETTIGN_IMAGE_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SETTIGN_IMAGE_3', units : 'norm', 
    image : 'assets/setting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : 0.9,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  CONTINUE_KEY_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Point = new visual.Polygon({
    win: psychoJS.window, name: 'Point', 
    edges: 100, size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([1.0000, -1.0000, -1.0000]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "STIMULATE"
  STIMULATEClock = new util.Clock();
  SETTING_IMAGE_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SETTING_IMAGE_4', units : 'norm', 
    image : 'assets/setting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : 0.9,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  CONTINUE_KEY_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  STIMULATE_IMAGE = new visual.ImageStim({
    win : psychoJS.window,
    name : 'STIMULATE_IMAGE', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "RECORD"
  RECORDClock = new util.Clock();
  SETTING_IMAGE_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SETTING_IMAGE_5', units : 'norm', 
    image : 'assets/setting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : 0.9,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  TITLE_TEXT = new visual.TextStim({
    win: psychoJS.window,
    name: 'TITLE_TEXT',
    text: '你刚刚看到了什么？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -1.0 
  });
  
  INPUT = new visual.TextBox({
    win: psychoJS.window,
    name: 'INPUT',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: [-1.0000, -1.0000, -1.0000], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  SUBMMIT_KEY = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "THANKS"
  THANKSClock = new util.Clock();
  THANKS_TEXT = new visual.TextStim({
    win: psychoJS.window,
    name: 'THANKS_TEXT',
    text: '感恩！',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  THANKS_DETAILED_TEXT = new visual.TextStim({
    win: psychoJS.window,
    name: 'THANKS_DETAILED_TEXT',
    text: '王梓能够完成作业离不开你的支持\n\n（按下空格以结束）',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-0.4902, -0.5059, -0.4902]),  opacity: undefined,
    depth: -1.0 
  });
  
  CONTINUE_KEY_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var HELLOMaxDurationReached;
var _CONTINUE_KEY_1_allKeys;
var HELLOMaxDuration;
var HELLOComponents;
function HELLORoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HELLO' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    HELLOClock.reset();
    routineTimer.reset();
    HELLOMaxDurationReached = false;
    // update component parameters for each repeat
    CONTINUE_KEY_1.keys = undefined;
    CONTINUE_KEY_1.rt = undefined;
    _CONTINUE_KEY_1_allKeys = [];
    psychoJS.experiment.addData('HELLO.started', globalClock.getTime());
    HELLOMaxDuration = null
    // keep track of which components have finished
    HELLOComponents = [];
    HELLOComponents.push(SETTING_IMAGE_1);
    HELLOComponents.push(CONTINUE_KEY_1);
    HELLOComponents.push(HELLO_TEXT);
    HELLOComponents.push(DEMOSTRATION_TEXT);
    
    for (const thisComponent of HELLOComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function HELLORoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HELLO' ---
    // get current time
    t = HELLOClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SETTING_IMAGE_1* updates
    if (t >= 0.0 && SETTING_IMAGE_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SETTING_IMAGE_1.tStart = t;  // (not accounting for frame time here)
      SETTING_IMAGE_1.frameNStart = frameN;  // exact frame index
      
      SETTING_IMAGE_1.setAutoDraw(true);
    }
    
    
    // if SETTING_IMAGE_1 is active this frame...
    if (SETTING_IMAGE_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *CONTINUE_KEY_1* updates
    if (t >= 0.0 && CONTINUE_KEY_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CONTINUE_KEY_1.tStart = t;  // (not accounting for frame time here)
      CONTINUE_KEY_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      CONTINUE_KEY_1.clock.reset();
      CONTINUE_KEY_1.start();
    }
    
    // if CONTINUE_KEY_1 is active this frame...
    if (CONTINUE_KEY_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = CONTINUE_KEY_1.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _CONTINUE_KEY_1_allKeys = _CONTINUE_KEY_1_allKeys.concat(theseKeys);
      if (_CONTINUE_KEY_1_allKeys.length > 0) {
        CONTINUE_KEY_1.keys = _CONTINUE_KEY_1_allKeys[_CONTINUE_KEY_1_allKeys.length - 1].name;  // just the last key pressed
        CONTINUE_KEY_1.rt = _CONTINUE_KEY_1_allKeys[_CONTINUE_KEY_1_allKeys.length - 1].rt;
        CONTINUE_KEY_1.duration = _CONTINUE_KEY_1_allKeys[_CONTINUE_KEY_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *HELLO_TEXT* updates
    if (t >= 0.0 && HELLO_TEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HELLO_TEXT.tStart = t;  // (not accounting for frame time here)
      HELLO_TEXT.frameNStart = frameN;  // exact frame index
      
      HELLO_TEXT.setAutoDraw(true);
    }
    
    
    // if HELLO_TEXT is active this frame...
    if (HELLO_TEXT.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *DEMOSTRATION_TEXT* updates
    if (t >= 0.0 && DEMOSTRATION_TEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DEMOSTRATION_TEXT.tStart = t;  // (not accounting for frame time here)
      DEMOSTRATION_TEXT.frameNStart = frameN;  // exact frame index
      
      DEMOSTRATION_TEXT.setAutoDraw(true);
    }
    
    
    // if DEMOSTRATION_TEXT is active this frame...
    if (DEMOSTRATION_TEXT.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HELLOComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HELLORoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HELLO' ---
    for (const thisComponent of HELLOComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('HELLO.stopped', globalClock.getTime());
    CONTINUE_KEY_1.stop();
    // the Routine "HELLO" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RULESMaxDurationReached;
var _CONTINUE_KEY_2_allKeys;

var RULESMaxDuration;
var RULESComponents;
function RULESRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RULES' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    RULESClock.reset();
    routineTimer.reset();
    RULESMaxDurationReached = false;
    // update component parameters for each repeat
    CONTINUE_KEY_2.keys = undefined;
    CONTINUE_KEY_2.rt = undefined;
    _CONTINUE_KEY_2_allKeys = [];
    // Run 'Begin Routine' code from code

    
    psychoJS.experiment.addData('RULES.started', globalClock.getTime());
    RULESMaxDuration = null
    // keep track of which components have finished
    RULESComponents = [];
    RULESComponents.push(SETTING_IMAGE_2);
    RULESComponents.push(CONTINUE_KEY_2);
    RULESComponents.push(RULE_TEXT_TITLE);
    RULESComponents.push(RULE_TEXT_1);
    RULESComponents.push(RULE_TEXT_2);
    RULESComponents.push(RULE_TEXT_3);
    RULESComponents.push(RULE_TEXT_4);
    RULESComponents.push(RULE_TEXT_5);
    RULESComponents.push(RULE_TEXT_6);
    RULESComponents.push(RULE_TEXT_7);
    
    for (const thisComponent of RULESComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RULESRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RULES' ---
    // get current time
    t = RULESClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SETTING_IMAGE_2* updates
    if (t >= 0.0 && SETTING_IMAGE_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SETTING_IMAGE_2.tStart = t;  // (not accounting for frame time here)
      SETTING_IMAGE_2.frameNStart = frameN;  // exact frame index
      
      SETTING_IMAGE_2.setAutoDraw(true);
    }
    
    
    // if SETTING_IMAGE_2 is active this frame...
    if (SETTING_IMAGE_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *CONTINUE_KEY_2* updates
    if (t >= 0.0 && CONTINUE_KEY_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CONTINUE_KEY_2.tStart = t;  // (not accounting for frame time here)
      CONTINUE_KEY_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      CONTINUE_KEY_2.clock.reset();
      CONTINUE_KEY_2.start();
    }
    
    // if CONTINUE_KEY_2 is active this frame...
    if (CONTINUE_KEY_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = CONTINUE_KEY_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _CONTINUE_KEY_2_allKeys = _CONTINUE_KEY_2_allKeys.concat(theseKeys);
      if (_CONTINUE_KEY_2_allKeys.length > 0) {
        CONTINUE_KEY_2.keys = _CONTINUE_KEY_2_allKeys[_CONTINUE_KEY_2_allKeys.length - 1].name;  // just the last key pressed
        CONTINUE_KEY_2.rt = _CONTINUE_KEY_2_allKeys[_CONTINUE_KEY_2_allKeys.length - 1].rt;
        CONTINUE_KEY_2.duration = _CONTINUE_KEY_2_allKeys[_CONTINUE_KEY_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *RULE_TEXT_TITLE* updates
    if (t >= 0.0 && RULE_TEXT_TITLE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_TITLE.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_TITLE.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_TITLE.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_TITLE is active this frame...
    if (RULE_TEXT_TITLE.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_1* updates
    if (t >= 0.0 && RULE_TEXT_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_1.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_1.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_1.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_1 is active this frame...
    if (RULE_TEXT_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_2* updates
    if (t >= 0.0 && RULE_TEXT_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_2.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_2.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_2.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_2 is active this frame...
    if (RULE_TEXT_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_3* updates
    if (t >= 0.0 && RULE_TEXT_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_3.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_3.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_3.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_3 is active this frame...
    if (RULE_TEXT_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_4* updates
    if (t >= 0.0 && RULE_TEXT_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_4.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_4.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_4.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_4 is active this frame...
    if (RULE_TEXT_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_5* updates
    if (t >= 0.0 && RULE_TEXT_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_5.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_5.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_5.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_5 is active this frame...
    if (RULE_TEXT_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_6* updates
    if (t >= 0.0 && RULE_TEXT_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_6.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_6.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_6.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_6 is active this frame...
    if (RULE_TEXT_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *RULE_TEXT_7* updates
    if (t >= 0.0 && RULE_TEXT_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RULE_TEXT_7.tStart = t;  // (not accounting for frame time here)
      RULE_TEXT_7.frameNStart = frameN;  // exact frame index
      
      RULE_TEXT_7.setAutoDraw(true);
    }
    
    
    // if RULE_TEXT_7 is active this frame...
    if (RULE_TEXT_7.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RULESComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RULESRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RULES' ---
    for (const thisComponent of RULESComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RULES.stopped', globalClock.getTime());
    CONTINUE_KEY_2.stop();
    // the Routine "RULES" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(POINTRoutineBegin(snapshot));
      trialsLoopScheduler.add(POINTRoutineEachFrame());
      trialsLoopScheduler.add(POINTRoutineEnd(snapshot));
      trialsLoopScheduler.add(STIMULATERoutineBegin(snapshot));
      trialsLoopScheduler.add(STIMULATERoutineEachFrame());
      trialsLoopScheduler.add(STIMULATERoutineEnd(snapshot));
      trialsLoopScheduler.add(RECORDRoutineBegin(snapshot));
      trialsLoopScheduler.add(RECORDRoutineEachFrame());
      trialsLoopScheduler.add(RECORDRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var POINTMaxDurationReached;
var _CONTINUE_KEY_3_allKeys;
var point_duration;
var POINTMaxDuration;
var POINTComponents;
function POINTRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'POINT' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    POINTClock.reset();
    routineTimer.reset();
    POINTMaxDurationReached = false;
    // update component parameters for each repeat
    CONTINUE_KEY_3.keys = undefined;
    CONTINUE_KEY_3.rt = undefined;
    _CONTINUE_KEY_3_allKeys = [];
    // Run 'Begin Routine' code from code_2
    point_duration = (0.7 + (0.6 * Math.random()));
    
    psychoJS.experiment.addData('POINT.started', globalClock.getTime());
    POINTMaxDuration = null
    // keep track of which components have finished
    POINTComponents = [];
    POINTComponents.push(SETTIGN_IMAGE_3);
    POINTComponents.push(CONTINUE_KEY_3);
    POINTComponents.push(Point);
    
    for (const thisComponent of POINTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function POINTRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'POINT' ---
    // get current time
    t = POINTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SETTIGN_IMAGE_3* updates
    if (t >= 0.0 && SETTIGN_IMAGE_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SETTIGN_IMAGE_3.tStart = t;  // (not accounting for frame time here)
      SETTIGN_IMAGE_3.frameNStart = frameN;  // exact frame index
      
      SETTIGN_IMAGE_3.setAutoDraw(true);
    }
    
    
    // if SETTIGN_IMAGE_3 is active this frame...
    if (SETTIGN_IMAGE_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *CONTINUE_KEY_3* updates
    if (t >= 0.0 && CONTINUE_KEY_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CONTINUE_KEY_3.tStart = t;  // (not accounting for frame time here)
      CONTINUE_KEY_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      CONTINUE_KEY_3.clock.reset();
      CONTINUE_KEY_3.start();
    }
    
    // if CONTINUE_KEY_3 is active this frame...
    if (CONTINUE_KEY_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = CONTINUE_KEY_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _CONTINUE_KEY_3_allKeys = _CONTINUE_KEY_3_allKeys.concat(theseKeys);
      if (_CONTINUE_KEY_3_allKeys.length > 0) {
        CONTINUE_KEY_3.keys = _CONTINUE_KEY_3_allKeys[_CONTINUE_KEY_3_allKeys.length - 1].name;  // just the last key pressed
        CONTINUE_KEY_3.rt = _CONTINUE_KEY_3_allKeys[_CONTINUE_KEY_3_allKeys.length - 1].rt;
        CONTINUE_KEY_3.duration = _CONTINUE_KEY_3_allKeys[_CONTINUE_KEY_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Point* updates
    if (t >= 0.0 && Point.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Point.tStart = t;  // (not accounting for frame time here)
      Point.frameNStart = frameN;  // exact frame index
      
      Point.setAutoDraw(true);
    }
    
    
    // if Point is active this frame...
    if (Point.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + point_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Point.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Point.tStop = t;  // not accounting for scr refresh
      Point.frameNStop = frameN;  // exact frame index
      // update status
      Point.status = PsychoJS.Status.FINISHED;
      Point.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of POINTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function POINTRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'POINT' ---
    for (const thisComponent of POINTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('POINT.stopped', globalClock.getTime());
    CONTINUE_KEY_3.stop();
    // the Routine "POINT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var STIMULATEMaxDurationReached;
var _CONTINUE_KEY_4_allKeys;
var base_condition;
var participant_num;
var actual_condition;
var actual_ori;
var STIMULATEMaxDuration;
var STIMULATEComponents;
function STIMULATERoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'STIMULATE' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    STIMULATEClock.reset();
    routineTimer.reset();
    STIMULATEMaxDurationReached = false;
    // update component parameters for each repeat
    CONTINUE_KEY_4.keys = undefined;
    CONTINUE_KEY_4.rt = undefined;
    _CONTINUE_KEY_4_allKeys = [];
    STIMULATE_IMAGE.setOri(actual_ori);
    console.log("当前刺激图片：", IMAGES, "本轮序号：", trials.thisN);
    STIMULATE_IMAGE.setImage(IMAGES);
    // Run 'Begin Routine' code from code_3
    base_condition = Number.parseInt(UP_SIDE_DOWN);
    participant_num = Number.parseInt(expInfo["participant"]);
    if (((participant_num % 2) === 0)) {
        actual_condition = (1 - base_condition);
    } else {
        actual_condition = base_condition;
    }
    if ((actual_condition === 1)) {
        actual_ori = 180;
    } else {
        actual_ori = 0;
    }
    
    psychoJS.experiment.addData('STIMULATE.started', globalClock.getTime());
    STIMULATEMaxDuration = null
    // keep track of which components have finished
    STIMULATEComponents = [];
    STIMULATEComponents.push(SETTING_IMAGE_4);
    STIMULATEComponents.push(CONTINUE_KEY_4);
    STIMULATEComponents.push(STIMULATE_IMAGE);
    
    for (const thisComponent of STIMULATEComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function STIMULATERoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'STIMULATE' ---
    // get current time
    t = STIMULATEClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SETTING_IMAGE_4* updates
    if (t >= 0.0 && SETTING_IMAGE_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SETTING_IMAGE_4.tStart = t;  // (not accounting for frame time here)
      SETTING_IMAGE_4.frameNStart = frameN;  // exact frame index
      
      SETTING_IMAGE_4.setAutoDraw(true);
    }
    
    
    // if SETTING_IMAGE_4 is active this frame...
    if (SETTING_IMAGE_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *CONTINUE_KEY_4* updates
    if (t >= 0.0 && CONTINUE_KEY_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CONTINUE_KEY_4.tStart = t;  // (not accounting for frame time here)
      CONTINUE_KEY_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { CONTINUE_KEY_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { CONTINUE_KEY_4.start(); }); // start on screen flip
    }
    
    // if CONTINUE_KEY_4 is active this frame...
    if (CONTINUE_KEY_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = CONTINUE_KEY_4.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _CONTINUE_KEY_4_allKeys = _CONTINUE_KEY_4_allKeys.concat(theseKeys);
      if (_CONTINUE_KEY_4_allKeys.length > 0) {
        CONTINUE_KEY_4.keys = _CONTINUE_KEY_4_allKeys[_CONTINUE_KEY_4_allKeys.length - 1].name;  // just the last key pressed
        CONTINUE_KEY_4.rt = _CONTINUE_KEY_4_allKeys[_CONTINUE_KEY_4_allKeys.length - 1].rt;
        CONTINUE_KEY_4.duration = _CONTINUE_KEY_4_allKeys[_CONTINUE_KEY_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *STIMULATE_IMAGE* updates
    if (t >= 0.0 && STIMULATE_IMAGE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STIMULATE_IMAGE.tStart = t;  // (not accounting for frame time here)
      STIMULATE_IMAGE.frameNStart = frameN;  // exact frame index
      
      STIMULATE_IMAGE.setAutoDraw(true);
    }
    
    
    // if STIMULATE_IMAGE is active this frame...
    if (STIMULATE_IMAGE.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of STIMULATEComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function STIMULATERoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'STIMULATE' ---
    for (const thisComponent of STIMULATEComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('STIMULATE.stopped', globalClock.getTime());
    CONTINUE_KEY_4.stop();
    // the Routine "STIMULATE" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RECORDMaxDurationReached;
var _SUBMMIT_KEY_allKeys;
var RECORDMaxDuration;
var RECORDComponents;
function RECORDRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RECORD' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    RECORDClock.reset();
    routineTimer.reset();
    RECORDMaxDurationReached = false;
    // update component parameters for each repeat
    INPUT.setText('');
    INPUT.refresh();
    SUBMMIT_KEY.keys = undefined;
    SUBMMIT_KEY.rt = undefined;
    _SUBMMIT_KEY_allKeys = [];
    psychoJS.experiment.addData('RECORD.started', globalClock.getTime());
    RECORDMaxDuration = null
    // keep track of which components have finished
    RECORDComponents = [];
    RECORDComponents.push(SETTING_IMAGE_5);
    RECORDComponents.push(TITLE_TEXT);
    RECORDComponents.push(INPUT);
    RECORDComponents.push(SUBMMIT_KEY);
    
    for (const thisComponent of RECORDComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RECORDRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RECORD' ---
    // get current time
    t = RECORDClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SETTING_IMAGE_5* updates
    if (t >= 0.0 && SETTING_IMAGE_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SETTING_IMAGE_5.tStart = t;  // (not accounting for frame time here)
      SETTING_IMAGE_5.frameNStart = frameN;  // exact frame index
      
      SETTING_IMAGE_5.setAutoDraw(true);
    }
    
    
    // if SETTING_IMAGE_5 is active this frame...
    if (SETTING_IMAGE_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *TITLE_TEXT* updates
    if (t >= 0.0 && TITLE_TEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TITLE_TEXT.tStart = t;  // (not accounting for frame time here)
      TITLE_TEXT.frameNStart = frameN;  // exact frame index
      
      TITLE_TEXT.setAutoDraw(true);
    }
    
    
    // if TITLE_TEXT is active this frame...
    if (TITLE_TEXT.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *INPUT* updates
    if (t >= 0.0 && INPUT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      INPUT.tStart = t;  // (not accounting for frame time here)
      INPUT.frameNStart = frameN;  // exact frame index
      
      INPUT.setAutoDraw(true);
    }
    
    
    // if INPUT is active this frame...
    if (INPUT.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SUBMMIT_KEY* updates
    if (t >= 0.0 && SUBMMIT_KEY.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SUBMMIT_KEY.tStart = t;  // (not accounting for frame time here)
      SUBMMIT_KEY.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SUBMMIT_KEY.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SUBMMIT_KEY.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SUBMMIT_KEY.clearEvents(); });
    }
    
    // if SUBMMIT_KEY is active this frame...
    if (SUBMMIT_KEY.status === PsychoJS.Status.STARTED) {
      let theseKeys = SUBMMIT_KEY.getKeys({
        keyList: typeof 'return' === 'string' ? ['return'] : 'return', 
        waitRelease: false
      });
      _SUBMMIT_KEY_allKeys = _SUBMMIT_KEY_allKeys.concat(theseKeys);
      if (_SUBMMIT_KEY_allKeys.length > 0) {
        SUBMMIT_KEY.keys = _SUBMMIT_KEY_allKeys[_SUBMMIT_KEY_allKeys.length - 1].name;  // just the last key pressed
        SUBMMIT_KEY.rt = _SUBMMIT_KEY_allKeys[_SUBMMIT_KEY_allKeys.length - 1].rt;
        SUBMMIT_KEY.duration = _SUBMMIT_KEY_allKeys[_SUBMMIT_KEY_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RECORDComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RECORDRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RECORD' ---
    for (const thisComponent of RECORDComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('RECORD.stopped', globalClock.getTime());
    psychoJS.experiment.addData('INPUT.text',INPUT.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SUBMMIT_KEY.corr, level);
    }
    psychoJS.experiment.addData('SUBMMIT_KEY.keys', SUBMMIT_KEY.keys);
    if (typeof SUBMMIT_KEY.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SUBMMIT_KEY.rt', SUBMMIT_KEY.rt);
        psychoJS.experiment.addData('SUBMMIT_KEY.duration', SUBMMIT_KEY.duration);
        routineTimer.reset();
        }
    
    SUBMMIT_KEY.stop();
    // the Routine "RECORD" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var THANKSMaxDurationReached;
var _CONTINUE_KEY_5_allKeys;
var THANKSMaxDuration;
var THANKSComponents;
function THANKSRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'THANKS' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    THANKSClock.reset();
    routineTimer.reset();
    THANKSMaxDurationReached = false;
    // update component parameters for each repeat
    CONTINUE_KEY_5.keys = undefined;
    CONTINUE_KEY_5.rt = undefined;
    _CONTINUE_KEY_5_allKeys = [];
    psychoJS.experiment.addData('THANKS.started', globalClock.getTime());
    THANKSMaxDuration = null
    // keep track of which components have finished
    THANKSComponents = [];
    THANKSComponents.push(THANKS_TEXT);
    THANKSComponents.push(THANKS_DETAILED_TEXT);
    THANKSComponents.push(CONTINUE_KEY_5);
    
    for (const thisComponent of THANKSComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function THANKSRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'THANKS' ---
    // get current time
    t = THANKSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *THANKS_TEXT* updates
    if (t >= 0.0 && THANKS_TEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      THANKS_TEXT.tStart = t;  // (not accounting for frame time here)
      THANKS_TEXT.frameNStart = frameN;  // exact frame index
      
      THANKS_TEXT.setAutoDraw(true);
    }
    
    
    // if THANKS_TEXT is active this frame...
    if (THANKS_TEXT.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *THANKS_DETAILED_TEXT* updates
    if (t >= 0.0 && THANKS_DETAILED_TEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      THANKS_DETAILED_TEXT.tStart = t;  // (not accounting for frame time here)
      THANKS_DETAILED_TEXT.frameNStart = frameN;  // exact frame index
      
      THANKS_DETAILED_TEXT.setAutoDraw(true);
    }
    
    
    // if THANKS_DETAILED_TEXT is active this frame...
    if (THANKS_DETAILED_TEXT.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *CONTINUE_KEY_5* updates
    if (t >= 0.0 && CONTINUE_KEY_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CONTINUE_KEY_5.tStart = t;  // (not accounting for frame time here)
      CONTINUE_KEY_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      CONTINUE_KEY_5.clock.reset();
      CONTINUE_KEY_5.start();
    }
    
    // if CONTINUE_KEY_5 is active this frame...
    if (CONTINUE_KEY_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = CONTINUE_KEY_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _CONTINUE_KEY_5_allKeys = _CONTINUE_KEY_5_allKeys.concat(theseKeys);
      if (_CONTINUE_KEY_5_allKeys.length > 0) {
        CONTINUE_KEY_5.keys = _CONTINUE_KEY_5_allKeys[_CONTINUE_KEY_5_allKeys.length - 1].name;  // just the last key pressed
        CONTINUE_KEY_5.rt = _CONTINUE_KEY_5_allKeys[_CONTINUE_KEY_5_allKeys.length - 1].rt;
        CONTINUE_KEY_5.duration = _CONTINUE_KEY_5_allKeys[_CONTINUE_KEY_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of THANKSComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function THANKSRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'THANKS' ---
    for (const thisComponent of THANKSComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('THANKS.stopped', globalClock.getTime());
    CONTINUE_KEY_5.stop();
    // the Routine "THANKS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
