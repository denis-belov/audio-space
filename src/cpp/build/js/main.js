
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Module) {
  Module = Module || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};


// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_initGL')) {
        Object.defineProperty(Module['ready'], '_initGL', { configurable: true, get: function() { abort('You are getting _initGL on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_initGL', { configurable: true, set: function() { abort('You are setting _initGL on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setWindowSize')) {
        Object.defineProperty(Module['ready'], '_setWindowSize', { configurable: true, get: function() { abort('You are getting _setWindowSize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_setWindowSize', { configurable: true, set: function() { abort('You are setting _setWindowSize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
        Object.defineProperty(Module['ready'], '_main', { configurable: true, get: function() { abort('You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_main', { configurable: true, set: function() { abort('You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_destroyGL')) {
        Object.defineProperty(Module['ready'], '_destroyGL', { configurable: true, get: function() { abort('You are getting _destroyGL on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_destroyGL', { configurable: true, set: function() { abort('You are setting _destroyGL on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___data_end')) {
        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, get: function() { abort('You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, set: function() { abort('You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, get: function() { abort('You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, set: function() { abort('You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}



// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;


// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {




  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) Object.defineProperty(Module, 'arguments', { configurable: true, get: function() { abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) Object.defineProperty(Module, 'thisProgram', { configurable: true, get: function() { abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) Object.defineProperty(Module, 'quit', { configurable: true, get: function() { abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
if (!Object.getOwnPropertyDescriptor(Module, 'read')) Object.defineProperty(Module, 'read', { configurable: true, get: function() { abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) Object.defineProperty(Module, 'readAsync', { configurable: true, get: function() { abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) Object.defineProperty(Module, 'readBinary', { configurable: true, get: function() { abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) Object.defineProperty(Module, 'setWindowTitle', { configurable: true, get: function() { abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';






// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

function dynamicAlloc(size) {
  assert(DYNAMICTOP_PTR);
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  assert(end <= HEAP8.length, 'failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly');
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}








// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction');
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

function removeFunction(index) {
  removeFunctionWasm(index);
}



var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}







function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

/** @param {Array=} args */
function dynCall(sig, ptr, args) {
  if (args && args.length) {
    // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
    assert(args.length === sig.substring(1).replace(/j/g, '--').length);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    assert(sig.length == 1);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};

function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;





// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) Object.defineProperty(Module, 'wasmBinary', { configurable: true, get: function() { abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) Object.defineProperty(Module, 'noExitRuntime', { configurable: true, get: function() { abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });


if (typeof WebAssembly !== 'object') {
  abort('No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.');
}




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;

// In fastcomp asm.js, we don't need a wasm Table at all.
// In the wasm backend, we polyfill the WebAssembly object,
// so this creates a (non-native-wasm) table for us.
var wasmTable = new WebAssembly.Table({
  'initial': 394,
  'maximum': 394 + 0,
  'element': 'anyfunc'
});


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_DYNAMIC = 2; // Cannot be freed except through sbrk
var ALLOC_NONE = 3; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc,
    stackAlloc,
    dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}




// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STATIC_BASE = 1024,
    STACK_BASE = 5268448,
    STACKTOP = STACK_BASE,
    STACK_MAX = 25568,
    DYNAMIC_BASE = 5268448,
    DYNAMICTOP_PTR = 25408;

assert(STACK_BASE % 16 === 0, 'stack must start aligned');
assert(DYNAMIC_BASE % 16 === 0, 'heap must start aligned');


var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) Object.defineProperty(Module, 'INITIAL_MEMORY', { configurable: true, get: function() { abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');








// In non-standalone/normal mode, we create the memory here.



// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
updateGlobalBufferAndViews(buffer);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;






// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  // The stack grows downwards
  HEAPU32[(STACK_MAX >> 2)+1] = 0x2135467;
  HEAPU32[(STACK_MAX >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  // We don't do this with ASan because ASan does its own checks for this.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  var cookie1 = HEAPU32[(STACK_MAX >> 2)+1];
  var cookie2 = HEAPU32[(STACK_MAX >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  // We don't do this with ASan because ASan does its own checks for this.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}





// Endianness check (note: assumes compiler arch was little-endian)
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
})();

function abortFnPtrError(ptr, sig) {
	abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.");
}



function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback(Module); // Pass the module as the first argument.
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

/** @param {number|boolean=} ignore */
function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
/** @param {number|boolean=} ignore */
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  out(what);
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Throw a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  throw new WebAssembly.RuntimeError(what);
}


var memoryInitializer = null;












function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}



function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABiAVOYAF/AX9gAn9/AGACf38Bf2ABfwBgA39/fwF/YAZ/f39/f38Bf2AAAGAAAX9gBX9/f39/AX9gBn9/f39/fwBgBH9/f38Bf2ADf39/AGAIf39/f39/f38Bf2AEf39/fwBgBX9/f39/AGACf30AYAd/f39/f39/AX9gB39/f39/f38AYAN/f30AYAV/fn5+fgBgAAF+YAV/fX19fQBgBX9/f39+AX9gCn9/f39/f39/f38AYAd/f39/f35+AX9gBH9/f38BfmADf35/AX5gBX9/fn9/AGAEf35+fwBgCn9/f39/f39/f38Bf2AGf39/f35+AX9gBX9/f398AX9gBn98f39/fwF/YAF9AX1gCH9/f39/f39/AGAPf39/f39/f39/f39/f39/AGAGf319fX19AGARf319fX19fX19fX19fX19fX0AYAl/f39/f39/f38Bf2ALf39/f39/f39/f38Bf2AMf39/f39/f39/f39/AX9gAn5/AX9gBH5+fn4Bf2ADf39/AX5gBH9/f34BfmACf38BfWADf39/AX1gAXwBfWACf38BfGADf39/AXxgAXwBfGACfH8BfGAGf39/f399AGAGf39/fn9/AGAEf39/fQBgA39/fgBgBH9/fn0AYAZ/f319fX0AYAd/f319fX19AGASf399fX19fX19fX19fX19fX19AGACf34AYAJ/fABgBH19fX0AYAh/f39/f39+fgF/YAZ/f39/f34Bf2AGf39/f398AX9gB39/fH9/f38Bf2ACf34Bf2AEf35/fwF/YAN+f38Bf2ACfn4Bf2ACfX8Bf2ACf38BfmAEf39+fwF+YAF8AX5gAn5+AX1gAnx/AX1gAn5+AXwC0wgvA2VudhhfX2N4YV9hbGxvY2F0ZV9leGNlcHRpb24AAANlbnYLX19jeGFfdGhyb3cACwNlbnYOZ2xDcmVhdGVTaGFkZXIAAANlbnYOZ2xTaGFkZXJTb3VyY2UADQNlbnYPZ2xDb21waWxlU2hhZGVyAAMDZW52DWdsR2V0U2hhZGVyaXYACwNlbnYSZ2xHZXRTaGFkZXJJbmZvTG9nAA0DZW52CGdsZndJbml0AAcDZW52EGdsZndDcmVhdGVXaW5kb3cACANlbnYNZ2xmd1Rlcm1pbmF0ZQAGA2VudhZnbGZ3TWFrZUNvbnRleHRDdXJyZW50AAMDZW52FGdsZndTZXRFcnJvckNhbGxiYWNrAAADZW52DGdsQ2xlYXJDb2xvcgA+A2VudhFnbGZ3U2V0V2luZG93U2l6ZQALA2VudgpnbFZpZXdwb3J0AA0DZW52EWdsZndEZXN0cm95V2luZG93AAMDZW52GGVtc2NyaXB0ZW5fc2V0X21haW5fbG9vcAALA2VudgxnbEdlbkJ1ZmZlcnMAAQNlbnYMZ2xCaW5kQnVmZmVyAAEDZW52DGdsQnVmZmVyRGF0YQANA2Vudg9nbENyZWF0ZVByb2dyYW0ABwNlbnYOZ2xBdHRhY2hTaGFkZXIAAQNlbnYNZ2xMaW5rUHJvZ3JhbQADA2VudhlnbEVuYWJsZVZlcnRleEF0dHJpYkFycmF5AAMDZW52B2dsQ2xlYXIAAwNlbnYMZ2xVc2VQcm9ncmFtAAMDZW52FGdsR2V0VW5pZm9ybUxvY2F0aW9uAAIDZW52EmdsVW5pZm9ybU1hdHJpeDRmdgANA2VudhVnbFZlcnRleEF0dHJpYlBvaW50ZXIACQNlbnYMZ2xEcmF3QXJyYXlzAAsDZW52DF9fY3hhX2F0ZXhpdAAEFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfY2xvc2UAABZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX3dyaXRlAAoDZW52BWFib3J0AAYWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQdmZF9yZWFkAAoWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MRFlbnZpcm9uX3NpemVzX2dldAACFndhc2lfc25hcHNob3RfcHJldmlldzELZW52aXJvbl9nZXQAAgNlbnYKX19tYXBfZmlsZQACA2VudgxfX3N5c19tdW5tYXAAAgNlbnYKc3RyZnRpbWVfbAAIA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAADZW52FWVtc2NyaXB0ZW5fbWVtY3B5X2JpZwAEA2VudhdfX2hhbmRsZV9zdGFja19vdmVyZmxvdwAGA2VudgtzZXRUZW1wUmV0MAADFndhc2lfc25hcHNob3RfcHJldmlldzEHZmRfc2VlawAIA2VudgZtZW1vcnkCAYACgAIDZW52BXRhYmxlAXAAigMD3QzbDAcGAQMDBhUBDwEPAQ8BDwMDBgEBEhISDw8P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YV9lbmQDARFfX3NldF9zdGFja19saW1pdADmDBBfX2dyb3dXYXNtTWVtb3J5AOcMC2R5bkNhbGxfdmlpAOgMDmR5bkNhbGxfdmlmZmZmAOkMC2R5bkNhbGxfdmlmAOoMDGR5bkNhbGxfdmlpZgDrDBpkeW5DYWxsX3ZpZmZmZmZmZmZmZmZmZmZmZgDsDApkeW5DYWxsX3ZpAO0MD2R5bkNhbGxfdmlmZmZmZgDuDApkeW5DYWxsX2lpAO8MCWR5bkNhbGxfdgDwDA9keW5DYWxsX2lpZGlpaWkA8QwMZHluQ2FsbF9paWlpAPIMDGR5bkNhbGxfamlqaQCCDQ5keW5DYWxsX3ZpaWppaQCDDQ1keW5DYWxsX3ZpaWlpAPUMC2R5bkNhbGxfaWlpAPYMDWR5bkNhbGxfaWlpaWkA9wwOZHluQ2FsbF9paWlpaWkA+AwRZHluQ2FsbF9paWlpaWlpaWkA+QwPZHluQ2FsbF9paWlpaWlpAPoMDmR5bkNhbGxfaWlpaWlqAIQNDmR5bkNhbGxfaWlpaWlkAPwMD2R5bkNhbGxfaWlpaWlqagCFDRBkeW5DYWxsX2lpaWlpaWlpAP4MEGR5bkNhbGxfaWlpaWlpamoAhg0PZHluQ2FsbF92aWlpaWlpAIANDmR5bkNhbGxfdmlpaWlpAIENCfAFAQBBAQuJAzQzNTY3ODk6O0A/QUJDREVGR0hJSktMUVBSU1RVVldYWVpbXF1eqAxrcGiOAY8BlAGWAZUBrQGuAbABsQGyAbQBtQG2AbcBvQG/AcEBwgHDAcQBxQHHAcgByQHKAcsBzAHNAdEB0wHVAdYB1wHZAdsB2gHcAfoB/AH7Af0BkwKVApQClgKbAp0CnAKeAqgBqAKnAaoBqwGsAbsCvAK9AuIC4wLkAuYC6ALpAvAC8QLzAvUC9gL5AvoC+wL9Av4CgAOBA4IDhAOFA6gDtgPNDJQGyQjRCLQJtwm7Cb4JwQnECcYJyAnKCcwJzgnQCdIJ1Am4CL0IzQjkCOUI5gjnCOgI6QjqCOsI7AjtCMkH+Qj6CP0IgAmBCYQJhQmHCaAJoQmkCaYJqAmqCa4JogmjCaUJpwmpCasJrwndA8wI0wjUCNYI1wjYCNkI2wjcCN4I3wjgCOEI4gjuCO8I8AjxCPII8wj0CPcIiAmJCYsJjQmOCY8JkAmSCZMJlAmW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NgIQIAAoAhQhBSADIAI2AhwgAyABNgIYIAMgBSAEayIBNgIUIAEgAmohBkECIQcgA0EQaiEBAkACQAJAAkAgACgCPCADQRBqQQIgA0EMahAgEJcBDQADQCAGIAMoAgwiBEYNAiAEQX9MDQMgASAEIAEoAgQiCEsiBUEDdGoiCSAJKAIAIAQgCEEAIAUbayIIajYCACABQQxBBCAFG2oiCSAJKAIAIAhrNgIAIAYgBGshBiAAKAI8IAFBCGogASAFGyIBIAcgBWsiByADQQxqECAQlwFFDQALCyADQX82AgwgBkF/Rw0BCyAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQIAIhBAwBC0EAIQQgAEEANgIcIABCADcDECAAIAAoAgBBIHI2AgAgB0ECRg0AIAIgASgCBGshBAsCQCADQSBqIgsjAkkEQBAqCyALJAALIAQLFQACQCAADQBBAA8LEHwgADYCAEF/C1MBAX4CQAJAIANBwABxRQ0AIAEgA0FAaq2GIQJCACEBDAELIANFDQAgAUHAACADa62IIAIgA60iBIaEIQIgASAEhiEBCyAAIAE3AwAgACACNwMIC1MBAX4CQAJAIANBwABxRQ0AIAIgA0FAaq2IIQFCACECDAELIANFDQAgAkHAACADa62GIAEgA60iBIiEIQEgAiAEiCECCyAAIAE3AwAgACACNwMIC4gEAgR/An4CQCMAQSBrIgIiBCMCSQRAECoLIAQkAAsCQAJAIAFC////////////AIMiBkKAgICAgIDA/0N8IAZCgICAgICAwIC8f3xaDQAgAEI8iCABQgSGhCEGAkAgAEL//////////w+DIgBCgYCAgICAgIAIVA0AIAZCgYCAgICAgIDAAHwhBwwCCyAGQoCAgICAgICAwAB8IQcgAEKAgICAgICAgAiFQgBSDQEgB0IBgyAHfCEHDAELAkAgAFAgBkKAgICAgIDA//8AVCAGQoCAgICAgMD//wBRGw0AIABCPIggAUIEhoRC/////////wODQoCAgICAgID8/wCEIQcMAQtCgICAgICAgPj/ACEHIAZC////////v//DAFYNAEIAIQcgBkIwiKciA0GR9wBJDQAgAkEQaiAAIAFC////////P4NCgICAgICAwACEIgYgA0H/iH9qEJgBIAIgACAGQYH4ACADaxCZ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KAIANgIAIANBBGohAyABQQRqIQEgAkF/aiICDQALCyAACwgAEKYBQQBKCwUAEMsMCwoAIAAQqAEaIAALPAAgAEH4KzYCACAAQQAQqQEgAEEcahDtAxogACgCIBDNDCAAKAIkEM0MIAAoAjAQzQwgACgCPBDNDCAAC0EBAn8gACgCKCECA0ACQCACDQAPCyABIAAgACgCJCACQX9qIgJBAnQiA2ooAgAgACgCICADaigCABELAAwAAAsACwoAIAAQpwEQ4gsLCgAgABCoARogAAsKACAAEKsBEOILCxUAIABBuCk2AgAgAEEEahDtAxogAAsKACAAEK0BEOILCzAAIABBuCk2AgAgAEEEahDICBogAEEYakIANwIAIABBEGpCADcCACAAQgA3AgggAAsCAAsEACAACwoAIABCfxCzARoLEgAgACABNwMIIABCADcDACAACwoAIABCfxCzARoLBABBAAsEAEEAC+EBAQZ/AkAjAEEQayIDIgcjAkkEQBAqCyAHJAALQQAhBAJAA0AgBCACTg0BAkACQCAAKAIMIgUgACgCECIGTw0AIANB/////wc2AgwgAyAGIAVrNgIIIAMgAiAEazYCBCADQQxqIANBCGogA0EEahC4ARC4ASEFIAEgACgCDCAFKAIAIgUQuQEaIAAgBRC6AQwBCyAAIAAoAgAoAigRAAAiBUF/Rg0CIAEgBRC7AToAAEEBIQULIAEgBWohASAFIARqIQQMAAALAAsCQCADQRBqIggjAkkEQBAqCyAIJAALIAQLCQAgACABELwBCxYAAkAgAkUNACAAIAEgAhDZDBoLIAALDwAgACAAKAIMIAFqNgIMCwoAIABBGHRBGHULRwEEfwJAIwBBEGsiAiIEIwJJBEAQKgsgBCQACyACQQhqIAEgABCuAiEDAkAgAkEQaiIFIwJJBEAQKgsgBSQACyABIAAgAxsLBQAQvgELBABBfws1AQF/AkAgACAAKAIAKAIkEQAAEL4BRw0AEL4BDwsgACAAKAIMIgFBAWo2AgwgASwAABDAAQsIACAAQf8BcQsFABC+AQvcAQEHfwJAIwBBEGsiAyIIIwJJBEAQKgsgCCQAC0EAIQQQvgEhBQJAA0AgBCACTg0BAkAgACgCGCIGIAAoAhwiB0kNACAAIAEsAAAQwAEgACgCACgCNBECACAFRg0CIARBAWoh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IANBgICAgHhxrUIghoQ3AwgCQCACQRBqIgYjAkkEQBAqCyAGJAALC6sBAgR/An4CQCMAQRBrIgIiBCMCSQRAECoLIAQkAAsCQAJAIAENAEIAIQZCACEHDAELIAIgASABQR91IgNqIANzIgOtQgAgA2ciA0HRAGoQmAEgAkEIaikDAEKAgICAgIDAAIVBnoABIANrrUIwhnwgAUGAgICAeHGtQiCGhCEHIAIpAwAhBgsgACAGNwMAIAAgBzcDCAJAIAJBEGoiBSMCSQRAECoLIAUkAAsLiQwCB38PfgJAIwBB4ABrIgUiCiMCSQRAECoLIAokAAsgAUIgiCACQiCGhCEMIANCEYggBEIvhoQhDSADQjGIIARC////////P4MiDkIPhoQhDyAEIAKFQoCAgICAgICAgH+DIRAgAkL///////8/gyIRQiCIIRIgDkIRiCETIARCMIinQf//AXEhBgJAAkACQCACQjCIp0H//wFxIgdBf2pB/f8BSw0AQQAhCCAGQX9qQf7/AUkNAQsCQCABUCACQv///////////wCDIhRCgICAgICAwP//AFQgFEKAgICAgIDA//8AURsNACACQoCAgICAgCCEIRAMAgsCQCADUCAEQv///////////wCDIgJCgICAgICAwP//AFQgAkKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIRAgAyEBDAILAkAgASAUQoCAgICAgMD//wCFhEIAUg0AAkAgAyAChFBFDQBCgICAgICA4P//ACEQQgAhAQwDCyAQQoCAgICAgMD//wCEIRBCACEBDAILAkAgAyACQoCAgICAgMD//wCFhEIAUg0AIAEgFIQhAkIAIQECQCACUEUNAEKAgICAgIDg//8AIRAMAwsgEEKAgICAgIDA//8AhCEQDAILAkAgASAUhEIAUg0AQgAhAQwCCwJAIAMgAoRCAFINAEIAIQEMAgtBACEIAkAgFEL///////8/Vg0AIAVB0ABqIAEgESABIBEgEVAiCBt5IAhBBnStfKciCEFxahCYAUEQIAhrIQggBSkDUCIBQiCIIAVB2ABqKQMAIhFCIIaEIQwgEUIgiCESCyACQv///////z9WDQAgBUHAAGogAyAOIAMgDiAOUCIJG3kgCUEGdK18pyIJQXFqEJgBIAggCWtBEGohCCAFKQNAIgNCMYggBUHIAGopAwAiAkIPhoQhDyADQhGIIAJCL4aEIQ0gAkIRiCETCyANQv////8PgyICIAFC/////w+DIgR+IhUgA0IPhkKAgP7/D4MiASAMQv////8PgyIDfnwiDEIghiIOIAEgBH58Ig0gDlStIAIgA34iFiABIBFC/////w+DIg5+fCIUIA9C/////w+DIhEgBH58Ig8gDEIgiCAMIBVUrUIghoR8IhUgAiAOfiIXIAEgEkKAgASEIgx+fCISIBEgA358IhggE0L/////B4NCgICAgAiEIgEgBH58IhNCIIZ8Ihl8IQQgByAGaiAIakGBgH9qIQYCQAJAIBEgDn4iGiACIAx+fCICIBpUrSACIAEgA358IgMgAlStfCADIBQgFlStIA8gFFStfHwiAiADVK18IAEgDH58IAEgDn4iAyARIAx+fCIBIANUrUIghiABQiCIhHwgAiABQiCGfCIBIAJUrXwgASATQiCIIBIgF1StIBggElStfCATIBhUrXxCIIaEfCIDIAFUrXwgAyAVIA9UrSAZIBVUrXx8IgIgA1StfCIBQoCAgICAgMAAg1ANACAGQQFqIQYMAQsgDUI/iCEDIAFCAYYgAkI/iIQhASAEQj+IIAJCAYaEIQIgDUIBhiENIAMgBEIBhoQhBAsCQCAGQf//AUgNACAQQoCAgICAgMD//wCEIRBCACEBDAELAkACQCAGQQBKDQACQEEBIAZrIgdB/wBLDQAgBUEwaiANIAQgBkH/AGoiBhCYASAFQSBqIAIgASAGEJgBIAVBEGogDSAEIAcQmQEgBSACIAEgBxCZASAFKQMgIAUpAxCEIAUpAzAgBUEwakEIaikDAIRCAFKthCENIAVBIGpBCGopAwAgBUEQakEIaikDAIQhBCAFQQhqKQMAIQEgBSkDACECDAILQgAhAQwCCyAGrUIwhiABQv///////z+DhCEBCyABIBCEIRACQCANUCAEQn9VIARCgICAgICAgICAf1EbDQAgECACQgF8IgEgAlStfCEQDAELAkAgDSAEQoCAgICAgICAgH+FhEIAUQ0AIAIhAQwBCyAQIAIgAkIBg3wiASACVK18IRALIAAgATcDACAAIBA3AwgCQCAFQeAAaiILIwJJBEAQKgsgCyQACwujCgIGfwR+AkAjAEHwAGsiBSIJIwJJBEAQKgsgCSQACyAEQv///////////wCDIQsCQAJAAkAgAUJ/fCIMQn9RIAJC////////////AIMiDSAMIAFUrXxCf3wiDEL///////+///8AViAMQv///////7///wBRGw0AIANCf3wiDEJ/UiALIAwgA1StfEJ/fCIMQv///////7///wBUIAxC////////v///AFEbDQELAkAgAVAgDUKAgICAgIDA//8AVCANQoCAgICAgMD//wBRGw0AIAJCgICAgICAIIQhBCABIQMMAgsCQCADUCALQoCAgICAgMD//wBUIAtCgICAgICAwP//AFEbDQAgBEKAgICAgIAghCEEDAILAkAgASANQoCAgICAgMD//wCFhEIAUg0AQoCAgICAgOD//wAgAiADIAGFIAQgAoVCgICAgICAgICAf4WEUCIGGyEEQgAgASAGGyEDDAILIAMgC0KAgICAgIDA//8AhYRQDQECQCABIA2EQgBSDQAgAyALhEIAUg0CIAMgAYMhAyAEIAKDIQQMAgsgAyALhFBFDQAgASEDIAIhBAwBCyADIAEgAyABViALIA1WIAsgDVEbIgcbIQsgBCACIAcbIg1C////////P4MhDCACIAQgBxsiAkIwiKdB//8BcSEIAkAgDUIwiKdB//8BcSIGDQAgBUHgAGogCyAMIAsgDCAMUCIGG3kgBkEGdK18pyIGQXFqEJgBQRAgBmshBiAFQegAaikDACEMIAUpA2AhCwsgASADIAcbIQMgAkL///////8/gyEBAkAgCA0AIAVB0ABqIAMgASADIAEgAVAiBxt5IAdBBnStfKciB0FxahCYAUEQIAdrIQggBUHYAGopAwAhASAFKQNQIQMLIAFCA4YgA0I9iIRCgICAgICAgASEIQQgDEIDhiALQj2IhCEBIANCA4YhAyANIAKFIQwCQCAGIAhrIgdFDQACQCAHQf8ATQ0AQgAhBEIBIQMMAQsgBUHAAGogAyAEQYABIAdrEJgBIAVBMGogAyAEIAcQmQEgBSkDMCAFKQNAIAVBwABqQQhqKQMAhEIAUq2EIQMgBUEwakEIaikDACEECyABQoCAgICAgIAEhCEOIAtCA4YhAgJAAkAgDEJ/VQ0AAkAgAiADfSIBIA4gBH0gAiADVK19IgOEUEUNAEIAIQNCACEEDAMLIANC/////////wNWDQEgBUEgaiABIAMgASADIANQIgcbeSAHQQZ0rXynQXRqIgcQmAEgBiAHayEGIAVBKGopAwAhAyAFKQMgIQEMAQsgBCAOfCADIAJ8IgEgA1StfCIDQoCAgICAgIAIg1ANACABQgGIIANCP4aEIAFCAYOEIQEgBkEBaiEGIANCAYghAwsgDUKAgICAgICAgIB/gyEEAkAgBkH//wFIDQAgBEKAgICAgIDA//8AhCEEQgAhAwwBC0EAIQcCQAJAIAZBAEwNACAGIQcMAQsgBUEQaiABIAMgBkH/AGoQmAEgBSABIANBASAGaxCZASAFKQMAIAUpAxAgBUEQakEIaikDAIRCAFKthCEBIAVBCGopAwAhAwsgA0IDiEL///////8/gyAEhCAHrUIwhoQgAUIDiCADQj2GhCIEIAGnQQdxIgZBBEutfCIDIARUrXwgA0IBg0IAIAZBBEYbIgEgA3wiAyABVK18IQQLIAAgAzcDACAAIAQ3AwgCQCAFQfAAaiIKIwJJBEAQKgsgCiQACwusAgIEfwN+AkAjAEEQayICIgQjAkkEQBAqCyAEJAALAkACQCABvSIGQv///////////wCDIgdCgICAgICAgHh8Qv/////////v/wBWDQAgB0I8hiEIIAdCBIhCgICAgICAgIA8fCEHDAELAkAgB0KAgICAgICA+P8AVA0AIAZCPIYhCCAGQgSIQoCAgICAgMD//wCEIQcMAQsCQCAHUEUNAEIAIQhCACEHDAELIAIgB0IAIAanZ0EgaiAHQiCIp2cgB0KAgICAEFQbIgNBMWoQmAEgAkEIaikDAEKAgICAgIDAAIVBjPgAIANrrUIwhoQhByACKQMAIQgLIAAgCDcDACAAIAcgBkKAgICAgICAgIB/g4Q3AwgCQCACQRBqIgUjAkkEQBAqCyAFJAALC+ABAgF/An5BASEEAkAgAEIAUiABQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AURsNACACQgBSIANC////////////AIMiBkKAgICAgIDA//8AViAGQoCAgICAgMD//wBRGw0AAkAgAiAAhCAGIAWEhFBFDQBBAA8LAkAgAyABg0IAUw0AQX8hBCAAIAJUIAEgA1MgASADURsNASAAIAKFIAEgA4WEQgBSDwtBfyEEIAAgAlYgASADVSABIANRGw0AIAAgAoUgASADhYRCAFIhBAsgBAvYAQIBfwJ+QX8hBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNAAJAIAIgAIQgBiAFhIRQRQ0AQQAPCwJAIAMgAYNCAFMNACAAIAJUIAEgA1MgASADURsNASAAIAKFIAEgA4WEQgBSDwsgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAECzUAIAAgATcDACAAIARCMIinQYCAAnEgAkIwiKdB//8BcXKtQjCGIAJC////////P4OENwMIC5MBAgN/An4CQCMAQRBrIgIiAyMCSQRAECoLIAMkAAsCQAJAIAENAEIAIQVCACEGDAELIAIgAa1CAEHwACABZ0EfcyIBaxCYASACQQhqKQMAQoCAgICAgMAAhSABQf//AGqtQjCGfCEGIAIpAwAhBQsgACAFNwMAIAAgBjcDCAJAIAJBEGoiBCMCSQRAECoLIAQkAAsLXwEDfwJAIwBBEGsiBSIGIwJJBEAQKgsgBiQACyAFIAEgAiADIARCgICAgICAgICAf4UQjwMgACAFKQMANwMAIAAgBSkDCDcDCAJAIAVBEGoiByMCSQRAECoLIAckAAsLhQMBA38CQCMAQdAAayIEIgUjAkkEQBAqCyAFJAALAkACQCADQYCAAUgNACAEQSBqIAEgAkIAQoCAgICAgID//wAQjgMgBEEgakEIaikDACECIAQpAyAhAQJAIANB//8BTg0AIANBgYB/aiEDDAILIARBEGogASACQgBCgICAgICAgP//ABCOAyADQf3/AiADQf3/AkgbQYKAfmohAyAEQRBqQQhqKQMAIQIgBCkDECEBDAELIANBgYB/Sg0AIARBwABqIAEgAkIAQoCAgICAgMAAEI4DIARBwABqQQhqKQMAIQIgBCkDQCEBAkAgA0GDgH5MDQAgA0H+/wBqIQMMAQsgBEEwaiABIAJCAEKAgICAgIDAABCOAyADQYaAfSADQYaAfUobQfz/AWohAyAEQTBqQQhqKQMAIQIgBCkDMCEBCyAEIAEgAkIAIANB//8Aaq1CMIYQjgMgACAEQQhqKQMANwMIIAAgBCkDADcDAAJAIARB0ABqIgYjAkkEQBAqCyAGJAALC3UBAX4gACAEIAF+IAIgA358IANCIIgiBCABQiCIIgJ+fCADQv////8PgyIDIAFC/////w+DIgF+IgVCIIggAyACfnwiA0IgiHwgA0L/////D4MgBCABfnwiA0IgiHw3AwggACADQiCGIAVC/////w+DhDcDAAvOEgIIfwx+AkAjAEHAAWsiBSIKIwJJBEAQKgsgCiQACyAEQv///////z+DIQ0gAkL///////8/gyEOIAQgAoVCgICAgICAgICAf4MhDyAEQjCIp0H//wFxIQYCQAJAAkACQCACQjCIp0H//wFxIgdBf2pB/f8BSw0AQQAhCCAGQX9qQf7/AUkNAQsCQCABUCACQv///////////wCDIhBCgICAgICAwP//AFQgEEKAgICAgIDA//8AURsNACACQoCAgICAgCCEIQ8MAgsCQCADUCAEQv///////////wCDIgJCgICAgICAwP//AFQgAkKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIQ8gAyEBDAILAkAgASAQQoCAgICAgMD//wCFhEIAUg0AAkAgAyACQoCAgICAgMD//wCFhFBFDQBCACEBQoCAgICAgOD//wAhDwwDCyAPQoCAgICAgMD//wCEIQ9CACEBDAILAkAgAyACQoCAgICAgMD//wCFhEIAUg0AQgAhAQwCCyABIBCEQgBRDQICQCADIAKEQgBSDQAgD0KAgICAgIDA//8AhCEPQgAhAQwCC0EAIQgCQCAQQv///////z9WDQAgBUGwAWogASAOIAEgDiAOUCIIG3kgCEEGdK18pyIIQXFqEJgBQRAgCGshCCAFQbgBaikDACEOIAUpA7ABIQELIAJC////////P1YNACAFQaABaiADIA0gAyANIA1QIgkbeSAJQQZ0rXynIglBcWoQmAEgCSAIakFwaiEIIAVBqAFqKQMAIQ0gBSkDoAEhAwsgBUGQAWogA0IxiCANQoCAgICAgMAAhCIRQg+GhCICQgBChMn5zr/mvIL1ACACfSIEQgAQlwMgBUGAAWpCACAFQZABakEIaikDAH1CACAEQgAQlwMgBUHwAGogBSkDgAFCP4ggBUGAAWpBCGopAwBCAYaEIgRCACACQgAQlwMgBUHgAGogBEIAQgAgBUHwAGpBCGopAwB9QgAQlwMgBUHQAGogBSkDYEI/iCAFQeAAakEIaikDAEIBhoQiBEIAIAJCABCXAyAFQcAAaiAEQgBCACAFQdAAakEIaikDAH1CABCXAyAFQTBqIAUpA0BCP4ggBUHAAGpBCGopAwBCAYaEIgRCACACQgAQlwMgBUEgaiAEQgBCACAFQTBqQQhqKQMAfUIAEJcDIAVBEGogBSkDIEI/iCAFQSBqQQhqKQMAQgGGhCIEQgAgAkIAEJcDIAUgBEIAQgAgBUEQakEIaikDAH1CABCXAyAIIAcgBmtqIQYCQAJAQgAgBSkDAEI/iCAFQQhqKQMAQgGGhEJ/fCIQQv////8PgyIEIAJCIIgiEn4iEyAQQiCIIhAgAkL/////D4MiFH58IgJCIIYiFSAEIBR+fCIUIBVUrSACQiCIIAIgE1StQiCGhCAQIBJ+fHwgFCAEIANCEYhC/////w+DIhJ+IhMgECADQg+GQoCA/v8PgyIVfnwiAkIghiIWIAQgFX58IBZUrSACQiCIIAIgE1StQiCGhCAQIBJ+fHx8IgIgFFStfCACQgBSrXx9IhRC/////w+DIhIgBH4iEyASIBB+IhUgBCAUQiCIIhZ+fCIUQiCGfCISIBNUrSAUQiCIIBQgFVStQiCGhCAQIBZ+fHwgEkIAIAJ9IgJCIIgiFCAEfiITIAJC/////w+DIhUgEH58IgJCIIYiFiAVIAR+fCAWVK0gAkIgiCACIBNUrUIghoQgFCAQfnx8fCICIBJUrXwgAkJ+fCITIAJUrXxCf3wiFEL/////D4MiAiABQj6IIA5CAoaEQv////8PgyIEfiISIAFCHohC/////w+DIhAgFEIgiCIUfnwiFSASVK0gFSATQiCIIhIgDkIeiEL//+//D4NCgIAQhCIOfnwiFiAVVK18IA4gFH58IAIgDn4iFyAEIBR+fCIVIBdUrUIghiAVQiCIhHwgFiAVQiCGfCIVIBZUrXwgFSASIBB+IhcgE0L/////D4MiEyAEfnwiFiAXVK0gFiACIAFCAoZC/P///w+DIhd+fCIYIBZUrXx8IhYgFVStfCAWIBcgFH4iFSATIA5+fCIUIBIgBH58IgQgAiAQfnwiAkIgiCAUIBVUrSAEIBRUrXwgAiAEVK18QiCGhHwiFCAWVK18IBQgGCASIBd+IgQgEyAQfnwiEEIgiCAQIARUrUIghoR8IgQgGFStIAQgAkIghnwgBFStfHwiBCAUVK18IgJC/////////wBWDQAgAUIxhiAEQv////8PgyIBIANC/////w+DIhB+IhRCAFKtfUIAIBR9IhMgBEIgiCIUIBB+IhUgASADQiCIIhJ+fCIOQiCGIhZUrX0gAkL/////D4MgEH4gASANQv////8Pg358IBQgEn58IA5CIIggDiAVVK1CIIaEfCAEIBFCIIh+IAMgAkIgiH58IAIgEn58IBQgDX58QiCGfH0hECATIBZ9IQEgBkF/aiEGDAELIARCIYghEiABQjCGIARCAYggAkI/hoQiBEL/////D4MiASADQv////8PgyIQfiIUQgBSrX1CACAUfSITIAEgA0IgiCIUfiIVIBIgAkIfhoQiFkL/////D4MiDiAQfnwiEkIghiIXVK19IA4gFH4gAkIBiCIOQv////8PgyAQfnwgASANQv////8Pg358IBJCIIggEiAVVK1CIIaEfCAEIBFCIIh+IAMgAkIhiH58IA4gFH58IBYgDX58QiCGfH0hECATIBd9IQEgDiECCwJAIAZBgIABSA0AIA9CgICAgICAwP//AIQhD0IAIQEMAQsgBkH//wBqIQcCQCAGQYGAf0oNAAJAIAcNACACQv///////z+DIAQgAUIBhiADViAQQgGGIAFCP4iEIgEgEVYgASARURutfCIBIARUrXwiA0KAgICAgIDAAINQDQAgAyAPhCEPDAILQgAhAQwBCyAHrUIwhiACQv///////z+DhCAEIAFCAYYgA1ogEEIBhiABQj+IhCIBIBFaIAEgEVEbrXwiASAEVK18IA+EIQ8LIAAgATcDACAAIA83AwgCQCAFQcABaiILIwJJBEAQKgsgCyQACw8LIABCADcDACAAIA9CgICAgICA4P//ACADIAKEQgBSGzcDCAJAIAVBwAFqIgwjAkkEQBAqCyAMJAALCwUAIACZC/0IAgh/An4CQCMAQTBrIgQiCiMCSQRAECoLIAokAAtCACEMAkACQCACQQJLDQAgAUEEaiEFIAJBAnQiAkHsNGooAgAhBiACQeA0aigCACEHA0ACQAJAIAEoAgQiAiABKAJoTw0AIAUgAkEBajYCACACLQAAIQIMAQsgARCLAyECCyACEIkDDQALQQEhCAJAAkAgAkFVag4DAAEAAQtBf0EBIAJBLUYbIQgCQCABKAIEIgIg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ADYCACADQn98IQMMAwsgCyADWA0AEHxBxAA2AgAMAgsgCyAGrCIDhSADfSEDDAELQgAhAyAAQgAQigMLAkAgBEEQaiIKIwJJBEAQKgsgCiQACyADC+IDAgV/AX4CQCMAQSBrIgIiBSMCSQRAECoLIAUkAAsCQAJAIAFC////////////AIMiB0KAgICAgIDAv0B8IAdCgICAgICAwMC/f3xaDQAgAUIZiKchAwJAIABQIAFC////D4MiB0KAgIAIVCAHQoCAgAhRGw0AIANBgYCAgARqIQMMAgsgA0GAgICABGohAyAAIAdCgICACIWEQgBSDQEgA0EBcSADaiEDDAELAkAgAFAgB0KAgICAgIDA//8AVCAHQoCAgICAgMD//wBRGw0AIAFCGYinQf///wFxQYCAgP4HciEDDAELQYCAgPwHIQMgB0L///////+/v8AAVg0AQQAhAyAHQjCIpyIEQZH+AEkNACACQRBqIAAgAUL///////8/g0KAgICAgIDAAIQiByAEQf+Bf2oQmAEgAiAAIAdBgf8AIARrEJkBIAJBCGopAwAiB0IZiKchAwJAIAIpAwAgAikDECACQRBqQQhqKQMAhEIAUq2EIgBQIAdC////D4MiB0KAgIAIVCAHQoCAgAhRGw0AIANBAWohAwwBCyAAIAdCgICACIWEQgBSDQAgA0EBcSADaiEDCwJAIAJBIGoiBiMCSQRAECoLIAYkAAsgAyABQiCIp0GAgICAeHFyvguVAwEIfwJAIwBBEGsiBCIKIwJJBEAQKgsgCiQACyADQZiyASADGyIFKAIAIQMCQAJAAkACQCABDQAgAw0BQQAhBgwDC0F+IQYgAkUNAiAAIARBDGogABshBwJAAkAgA0UNACACIQAMAQsCQCABLQAAIgNBGHRBGHUiAEEASA0AIAcgAzYCACAAQQBHIQYMBAsQoQMoArABKAIAIQMgASwAACEAAkAgAw0AIAcgAEH/vwNxNgIAQQEhBgwECyAAQf8BcUG+fmoiA0EySw0BIANBAnRBkDdqKAIAIQMgAkF/aiIARQ0CIAFBAWohAQsgAS0AACIIQQN2IglBcGogA0EadSAJanJBB0sNAANAIABBf2ohAAJAIAhB/wFxQYB/aiADQQZ0ciIDQQBIDQAgBUEANgIAIAcgAzYCACACIABrIQYMBAsgAEUNAiAB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BiAEaiAFayAEIARBAEEAEIAMCyAAEKkEIARqIQUCQANAIAEgAkYNASAFIAEQrQYgAUEBaiEBIAVBAWohBQwAAAsACyADQQA6AA8gBSADQQ9qEK0GIAAgBiAEahDACwsCQCADQSBqIggjAkkEQBAqCyAIJAALIAALHQAgACABEMYLEMcLGiAAQQRqIAIQuAIQuQIaIAALBwAgABDLCwsLACAAQYizARDyAwsRACAAIAEgASgCACgCLBEBAAsRACAAIAEgASgCACgCIBEBAAsLACAAIAEQjQcgAAsRACAAIAEgASgCACgCHBEBAAsPACAAIAAoAgAoAgwRAAALDwAgACAAKAIAKAIQEQAACxEAIAAgASABKAIAKAIUEQEACxEAIAAgASABKAIAKAIYEQEACw8AIAAgACgCACgCJBEAAAsLACAAQYCzARDyAwsRACAAIAEgASgCACgCLBEBAAsRACAAIAEgASgCACgCIBEBAAsRACAAIAEgASgCACgCHBEBAAsPACAAIAAoAgAoAgwRAAALDwAgACAAKAIAKAIQEQAACxEAIAAgASABKAIAKAIUEQEACxEAIAAgASABKAIAKAIYEQEACw8AIAAgACgCACgCJBEAAAsSACAAIAI2AgQgACABOgAAIAALBwAgACgCAAsNACAAEMoGIAEQyAZGCwcAIAAoAgALmgEBA38CQCMAQSBrIgMiBCMCSQRAECoLIAQkAAsgAyABNgIQIAMgADYCGCADIAI2AggDfwJAAkACQCADQRhqIANBEGoQ4QQNAEEBIQIMAQsgAyADQRhqEOIEIANBCGoQ4gQQzAsNAUEAIQILAkAgA0EgaiIFIwJJBEAQKgsgBSQACyACDwsgA0EYahDjBBogA0EIahDjBBoMAAsLUAEDfwJAIwBBEGsiAiIDIwJJBEAQKgsgAyQACyACIAAoAgA2AgggAkEIaiABEPMJGiACKAIIIQECQCACQRBqIgQjAkkEQBAqCyAEJAALIAELBwAgABD9BAsFABCnCwsaAQF/IAAQ/AQoAgAhASAAEPwEQQA2AgAgAQslACAAIAEQzwYQ+AQgARDNBhC4AigCACEBIAAQ/QQgATYCACAACwcAIAAQyQsLGgEBfyAAEMgLKAIAIQEgABDIC0EANgIAIAELJQAgACABENIGENUGIAEQ0QYQuAIoAgAhASAAEMkL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sgEQjggQjwgLDABBoMABQQEQqQgaCxAAIAAgAUHAswEQjggQjwgLDABBqMABQQEQqggaCxAAIAAgAUHIswEQjggQjwgLFAAgACABNgIEIABB1IoBNgIAIAALWwEDfwJAIwBBEGsiASICIwJJBEAQKgsgAiQACyAAEIwKGiAAQgA3AwAgAUEANgIMIABBEGogAUEMaiABQQhqEI0KGgJAIAFBEGoiAyMCSQRAECoLIAMkAAsgAAtGAQF/AkAgABCOCiABTw0AIAAQkgwACyAAIAAQjwogARCQCiICNgIAIAAgAjYCBCAAEJEKIAIgAUECdGo2AgAgAEEAEJIKC3sBBH8CQCMAQRBrIgIiBCMCSQRAECoLIAQkAAsgAiAAIAEQkwoiASgCBCEDAkADQCADIAEoAghGDQEgABCPCiABKAIEEJQKEJUKIAEgASgCBEEEaiIDNgIEDAAACwALIAEQlgoaAkAgAkEQaiIFIwJJBEAQKgsgBSQACwsQACAAKAIEIAAoAgBrQQJ1CwwAIAAgACgCABDACgszACAAIAAQoAogABCgCiAAEKEKQQJ0aiAAEKAKIAFBAnRqIAAQoAogABCKCEECdGoQogoLAgALaAEDfwJAIwBBIGsiASICIwJJBEAQKgsgAiQACyABQQA2AgwgAUH+ADYCCCABIAEpAwg3AwAgACABQRBqIAEgABDKCBDLCCAAKAIEIQACQCABQSBqIgMjAkkEQBAqCyADJAALIABBf2oLlgEBBH8CQCMAQRBrIgMiBSMCSQRAECoLIAUkAAsgARCtCCADQQhqIAEQsQghBAJAIABBEGoiARCKCCACSw0AIAEgAkEBahC0CAsCQCABIAIQrAgoAgBFDQAgASACEKwIKAIAELUIGgsgBBC2CCEAIAEgAhCsCCAANgIAIAQQsggaAkAgA0EQaiIGIwJJBEAQKgsgBiQACwsVACAAIAEQywcaIABB2OgANgIAIAALFQAgACABEMsHGiAAQfjoADYCACAACzgAIAAgAxDLBxogABDjCBogACACOgAMIAAgATYCCCAAQbTcADYCAAJAIAENACAAENUINgIICyAACxsAIAAgARDLBxogABDjCBogAEHk4AA2AgAgAAsbACAAIAEQywcaIAAQ+AgaIABB+OEANgIAIAALIwAgACABEMsHGiAAEPgIGiAAQejcADYCACAAEKQENgIIIAALGwAgACABEMsHGiAAEPgIGiAAQYzjADYCACAACycAIAAgARDLBxogAEGu2AA7AQggAEGY3QA2AgAgAEEMahCABBogAAsqACAAIAEQywcaIABCroCAgMAFNwIIIABBwN0ANgIAIABBEGoQgAQaIAALFQAgACABEMsHGiAAQZjpADYCACAACxUAIAAgARDLBxogAEGM6wA2AgAgAAsVACAAIAEQywcaIABB4OwANgIAIAALFQAgACABEMsHGiAAQcjuADYCACAACxsAIAAgARDLBxogABDEChogAEGg9gA2AgAgAAsbACAAIAEQywcaIAAQxAoaIABBtPcANgIAIAALGwAgACABEMsHGiAAEMQKGiAAQaj4ADYCACAACxsAIAAgARDLBxogABDEChogAEGc+QA2AgAgAAsbACAAIAEQywcaIAAQxQoaIABBkPoANgIAIAALGwAgACABEMsHGiAAEMYKGiAAQbT7ADYCACAACxsAIAAgARDLBxogABDHChogAEHY/AA2AgAgAAsbACAAIAEQywcaIAAQyAoaIABB/P0ANgIAIAALKAAgACABEMsHGiAAQQhqEMkKIQEgAEGQ8AA2AgAgAUHA8AA2AgAgAAsoACAAIAEQywcaIABBCGoQygohASAAQZjyADYCACABQcjyADYCACAACx4AIAAgARDLBxogAEEIahDLChogAEGE9AA2AgAgAAseACAAIAEQywcaIABBCGoQywoaIABBoPUANgIAIAALGwAgACABEMsHGiAAEMwKGiAAQaD/ADYCACAACxsAIAAgARDLBxogABDMChogAEGYgAE2AgAgAAs4AAJAQQAtAOCzAUEBcQ0AQeCzARCUDEUNABCuCBpBAEHYswE2AtyzAUHgswEQnAwLQQAoAtyzAQsNACAAKAIAIAFBAnRqCwsAIABBBGoQrwgaCxQAEMQIQQBBsMABNgLYswFB2LMBCxUBAX8gACAAKAIAQQFqIgE2AgAgAQsfAAJAIAAgARDBCA0AEMIIAAsgAEEQaiABEMMIKAIAC0sBA38CQCMAQRBrIgIiAyMCSQRAECoLIAMkAAsgAiABNgIMIAAgAkEMaiACQQhqELMIGgJAIAJBEGoiBCMCSQRAECoLIAQkAAsgAAsJACAAELcIIAALFQAgACABEM8KENAKGiACELQCGiAA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ACAAEP4KEP8KQXBqCy0BAX9BASEBAkAgAEECSQ0AIABBAWoQgQsiACAAQX9qIgAgAEECRhshAQsgAQsLACAAIAFBABCCCwsMACAAEIcKIAE2AgALEwAgABCHCiABQYCAgIB4cjYCCAsEACAACwoAIAEgAGtBAnULBwAgABCECwsHACAAEIMLCwcAIAAQhwsLCgAgAEEDakF8cQsgAAJAIAAQhQsgAU8NAEHAiQEQYwALIAFBAnRBBBCnCgsHACAAEIULCwcAIAAQhgsLCABB/////wMLBAAgAAsEACAACwQAIAALCQAgACABEKwCCwoAIAAQ9QkoAgALCgAgABD1CRCMCwsHACAAEI0LCwQAIAALHQAgACABEJELEJILGiAAQQRqIAIQuAIQuQIaIAALBwAgABCTCwsKACAAQQRqELoCCwQAIAALEQAgACABEJELKAIANgIAIAALBAAgAAsJACAAIAEQlQsLEQAgARD4CRCWCxogABD4CRoLBAAgAAsKACABIABrQQJ1CwkAIAAgARCZCwsRACABEIUKEJoLGiAAEIUKGgsEACAACwIACwQAIAALXAEDfwJAIwBBEGsiAiIDIwJJBEAQKgsgAyQACyACIAAQnAsoAgA2AgwgACABEJwLKAIANgIAIAEgAkEMahCcCygCADYCAAJAIAJBEGoiBCMCSQRAECoLIAQkAAsLCgAgASAAa0EMbQsFABCgCwsIAEGAgICAeAsFABCjCwsFABCkCwsNAEKAgICAgICAgIB/Cw0AQv///////////wALBQAQpgsLBgBB//8DCwQAQX8LBQAQqQsLBABCfwsMACAAIAEQpAQQ2QMLDAAgACABEKQEENoDC1IBA38CQCMAQRBrIgMiBCMCSQRAECoLIAQkAAsgAyABIAIQpAQQ2wMgACADKQMANwMAIAAgAykDCDcDCAJAIANBEGoiBSMCSQRAECoLIAUkAAsLCgAgASAAa0EMbQsEACAACxEAIAAgARCuCygCADYCACAACwQAIAALBAAgAAsRACAAIAEQsQsoAgA2AgAgAAsEACAACwkAIAAgARDbBQsJACAAIAEQnQsLCgAgABCCCigCAAsKACAAEIIKELgLCwcAIAAQuQsLBAAgAAt4AQN/AkAjAEEQayIDIgQjAkkEQBAqCyAEJAALIAMgAjYCCAJAA0AgACABRg0BIAAsAAAhAiADQQhqEJcCIAIQmAIaIABBAWohACADQQhqEJkCGgwAAAsACyADKAIIIQACQCADQRBqIgUjAkkEQBAqCyAFJAALIAALeAEDfwJAIwBBEGsiAyIEIwJJBEAQKgsgBCQACyADIAI2AggCQANAIAAgAUYNASAAKAIAIQIgA0EIahCfAiACEKACGiAAQQRqIQAgA0EIahChAhoMAAALAAsgAygCCCEAAkAgA0EQaiIFIwJJBEAQKgsgBSQACyAACwQAIAALCQAgACABEMELCw0AIAEgAE0gACACSXELSgEDfwJAIwBBEGsiBCIFIwJJBEAQKgsgBSQACyAAIARBCGogAxDCCxogACABIAIQwwsCQCAEQRBqIgYjAkkEQBAqCyAGJAALIAALHAACQCAAEKcERQ0AIAAgARCuBg8LIAAgARCwBgsHACABIABrCxsAIAEQtAIaIAAQtQIaIAAgAhDECxDFCxogAAvMAQEGfwJAIwBBEGsiAyIHIwJJBEAQKgsgByQACwJAIAEgAhC9CyIEIAAQrwpLDQACQAJAIARBCksNACAAIAQQsAYgABCvBiEFDAELIAQQswohBSAAIAAQ+AkgBUEBaiIGELUKIgUQtwogACAGELgKIAAgBBCuBgsCQANAIAEgAkYNASAFIAEQrQYgBUEBaiEFIAFBAWohAQwAAAsACyADQQA6AA8gBSADQQ9qEK0GAkAgA0EQaiIIIwJJBEAQKgsgCCQACw8LIAAQ6wsACwQAIAALCgAgARDECxogAAsEACAACxEAIAAgARDGCygCADYCACAACwcAIAAQygsLCgAgAEEEahC6AgsEACAACwQAIAALDQAgAS0AACACLQAARgsEACAACw0AIAEgAE0gACACSXELSgEDfwJAIwBBEGsiBCIFIwJJBEAQKgsgBSQACyAAIARBCGogAxDQCxogACABIAIQ0QsCQCAEQRBqIgYjAkkEQBAqCyAGJAALIAALGwAgARC0AhogABD0ChogACACENILENMLGiAAC8wBAQZ/AkAjAEEQayIDIgcjAkkEQBAqCyAHJAALAkAgASACENUJIgQgABD3CksNAAJAAkAgBEEBSw0AIAAgBBDvBiAAEO4GIQUMAQsgBBD4CiEFIAAgABCFCiAFQQFqIgYQ+QoiBRD6CiAAIAYQ+wogACAEEO0GCwJAA0AgASACRg0BIAUgARDsBiAFQQRqIQUgAUEEaiEBDAAACwALIANBADYCDCAFIANBDGoQ7AYCQCADQRBqIggjAkkEQBAqCyAIJAALDwsgABDrCwALBAAgAAsKACABENILGiAACw0AIAEoAgAgAigCAEYLBAAgAAsEACAACwQAIAALAwAACwcAIAAQ0gwLBwAgABDTDAtuAEHwwQEQ2QsaAkADQCAAKAIAQQFHDQFBjMIBQfDBARDcCxoMAAALAAsCQCAAKAIADQAgABDdC0HwwQEQ2gsaIAEgAhEDAEHwwQEQ2QsaIAAQ3gtB8MEBENoLGkGMwgEQ3wsaDwtB8MEBENoLGgsJACAAIAEQ1AwLCQAgAEEBNgIACwkAIABBfzYCAAsHACAAENUMCwUAECEACzMBAX8gAEEBIAAbIQECQANAIAEQzAwiAA0BAkAQowwiAEUNACAAEQYADAELCxAhAAsgAAsHACAAEM0MCwcAIAAQ4gsLDQAgAEGEjAE2AgAgAAs8AQJ/IAEQ4QwiAkENahDhCyIDQQA2AgggAyACNgIEIAMgAjYCACAAIAMQ5gsgASACQQFqENkMNgIAIAALBwAgAEEMagseACAAEOQLGiAAQbCMATYCACAAQQRqIAEQ5QsaIAALBABBAQssAQF/AkAgAkUNACAAIQMDQCADIAE2AgAgA0EEaiEDIAJBf2oiAg0ACwsgAAtrAQF/AkACQCAAIAFrQQJ1IAJPDQADQCAAIAJBf2oiAkECdCIDaiABIANqKAIANgIAIAINAAwCAAsACyACRQ0AIAAhAwNAIAMgASgCADYCACADQQRqIQMgAUEEaiEBIAJBf2oiAg0ACwsgAAsJAEGEiwEQYwALCgBBhIsBEO0LAAsFABAhAAuRAQEEfwJAIwBBEGsiAiIEIwJJBEAQKgsgBCQACyABELAKEO8LIAAgAkEIaiACEPALIQMCQAJAIAEQpwQNACABEPUJIQEgAxD6CSIDQQhqIAFBCGooAgA2AgAgAyABKQIANwIADAELIAAgARCKCxCkBSABEKoEEPELCwJAIAJBEGoiBSMCSQRAECoLIAUkAAsgAAsHACAAEPILCxsAIAEQtAIaIAAQtQIaIAAgAhDzCxD0CxogAAuvAQEFfwJAIwBBEGsiAyIGIwJJBEAQKgsgBiQACwJAIAAQrwogAkkNAAJAAkAgAkEKSw0AIAAgAhCwBiAAEK8GIQQMAQsgAhCzCiEEIAAgABD4CSAEQQFqIgUQtQoiBBC3CiAAIAUQuAogACACEK4GCyAEELkKIAEgAhC5ARogA0EAOgAPIAQgAmogA0EPahCtBgJAIANBEGoiByMCSQRAECoLIAckAAsPCyAAEOsLAAsCAAsEACAACwoAIAEQ8wsaIAALiAEBA38CQCMAQRBrIgUiBiMCSQRAECoLIAYkAAsgBSADNgIMIAAgBUEIaiAEEMILGgJAIAEQ9wMiBCACTw0AIAAQ7AsACyABEK8EIQEgBSAEIAJrNgIEIAAgASACaiAFQQxqIAVBBGoQ9QgoAgAQ8QsCQCAFQRBqIgcjAkkEQBAqCyAHJAALIAALIQACQCAAEKcERQ0AIAAQ+AkgABCsBiAAEKgEEPYJCyAACyYAAkAgACABRg0AIAAgARD4CyAAIAEQrwQgARD3AxD5CyEACyAACwkAIAAgARD6CwuXAQEFfwJAIwBBEGsiAyIGIwJJBEAQKgsgBiQACwJAAkAgABCBBCIEIAJJDQAgABCpBBC5CiIEIAEgAhD7CxogA0EAOgAPIAQgAmogA0EPahCtBiAAIAIQwAsgACACEJsLDAELIAAgBCACIARrIAAQ9wMiBUEAIAUgAiABEPwLCwJAIANBEGoiByMCSQRAECoLIAckAAsgAAsCAAsWAAJAIAJFDQAgACABIAIQ2wwaCyAAC9cCAQV/AkAjAEEQayIIIgsjAkkEQBAqCyALJAALAkAgABCvCiIJIAFBf3NqIAJJDQAgABCpBCEKAkACQCAJQQF2QXBqIAFNDQAgCCABQQF0NgIIIAggAiABajYCDCAIQQxqIAhBCGoQpgIoAgAQswohAgwBCyAJQX9qIQILIAAQ+AkgAkEBaiIJELUKIQIgABCrBgJAIARFDQAgAhC5CiAKELkKIAQQuQEaCwJAIAZFDQAgAhC5CiAEaiAHIAYQuQEaCwJAIAMgBWsiAyAEayIHRQ0AIAIQuQogBGogBmogChC5CiAEaiAFaiAHELkBGgsCQCABQQFqIgRBC0YNACAAEPgJIAogBBD2CQsgACACELcKIAAgCRC4CiAAIAMgBmoiBBCuBiAIQQA6AAcgAiAEaiAIQQdqEK0GAkAgCEEQaiIMIwJJBEAQKgsgDCQACw8LIAAQ6wsACygBAX8CQCAAEPcDIgMgAU8NACAAIAEgA2sgAhD+CxoPCyAAIAEQ/wsLoAEBBn8CQCMAQRBrIgMiByMCSQRAECoLIAckAAsCQCABRQ0AIAAQgQQhBCAAEPcDIgUgAWohBgJAIAQgBWsgAU8NACAAIAQgBiAEayAFIAVBAEEAEIAMCyAAEKkEIgQQuQogBWogASACEIEMGiAAIAYQwAsgA0EAOgAPIAQgBmogA0EPahCtBgsCQCADQRBqIggjAkkEQBAqCyAIJAALIAALjQEBBH8CQCMAQRBrIgIiBCMCSQRAECoLIAQkAAsCQAJAIAAQpwRFDQAgABCsBiEDIAJBADoADyADIAFqIAJBD2oQrQYgACABEK4GDAELIAAQrwYhAyACQQA6AA4gAyABaiACQQ5qEK0GIAAgARCwBgsgACABEJsLAkAgAkEQaiIFIwJJBEAQKgsgBSQACwuaAgEFfwJAIwBBEGsiByIKIwJJBEAQKgsgCiQACwJAIAAQrwoiCCABayACSQ0AIAAQqQQhCQJAAkAgCEEBdkFwaiABTQ0AIAcgAUEBdDYCCCAHIAIgAWo2AgwgB0EMaiAHQQhqEKYCKAIAELMKIQIMAQsgCEF/aiECCyAAEPgJIAJBAWoiCBC1CiECIAAQqwYCQCAERQ0AIAIQuQogCRC5CiAEELkBGgsCQCADIAVrIARrIgNFDQAgAhC5CiAEaiAGaiAJELkKIARqIAVqIAMQuQEaCwJAIAFBAWoiAUELRg0AIAAQ+AkgCSABEPYJCyAAIAIQtwogACAIELgKAkAgB0EQaiILIwJJBEAQKgsgCyQACw8LIAAQ6wsACxkAAkAgAUUNACAAIAIQwAEgARDaDBoLIAALowEBBX8CQCMAQRBrIgMiBiMCSQRAECoLIAYkAAsCQAJAIAAQgQQiBCAAEPcDIgVrIAJJDQAgAkUNASAAEKkEELkKIgQgBWogASACELkBGiAAIAUgAmoiAhDACyADQQA6AA8gBCACaiADQQ9qEK0GDAELIAAgBCAFIAJqIARrIAUgBUEAIAIgARD8CwsCQCADQRBqIgcjAkkEQBAqCyAHJAALIAAL5QEBBX8CQCMAQRBrIgIiBSMCSQRAECoLIAUkAAsgAiABOgAPAkACQAJAAkACQCAAEKcERQ0AIAAQqAQhASAAEKoEIgMgAUF/aiIERg0BDAMLQQohA0EKIQQgABCrBCIBQQpHDQELIAAgBEEBIAQgBEEAQQAQgAwgAyEBIAAQpwQNAQsgABCvBiEEIAAgAUEBahCwBgwBCyAAEKwGIQQgACADQQFqEK4GIAMhAQsgBCABaiIAIAJBD2oQrQYgAkEAOgAOIABBAWogAkEOahCtBgJAIAJBEGoiBiMCSQRAECoLIAYkAAsLDgAgACABIAEQpQIQ+QsL0wEBBn8CQCMAQRBrIgMiByMCSQRAECoLIAckAAsgAyACNgIMAkAgABD3AyIEIAFJDQACQCACRQ0AIAAQqQQQuQohBSADIAQgAWsiBjYCCCADIANBDGogA0EIahD1CCgCACICNgIMAkAgBiACayIGRQ0AIAUgAWoiASABIAJqIAYQ+wsaIAMoAgwhAgsgACAEIAJrIgEQwAsgACABEJsLIANBADoAByAFIAFqIANBB2oQrQYLAkAgA0EQaiIIIwJJBEAQKgsgCCQACyAADwsgABDsCwALrwEBBX8CQCMAQRBrIgMiBiMCSQRAECoLIAYkAAsCQCAAEK8KIAFJDQACQAJAIAFBCksNACAAIAEQsAYgABCvBiEEDAELIAEQswohBCAAIAAQ+AkgBEEBaiIFELUKIgQQtwogACAFELgKIAAgARCuBgsgBBC5CiABIAIQgQwaIANBADoADyAEIAFqIANBD2oQrQYCQCADQRBqIgcjAkkEQBAqCyAHJAALDwsgABDrCwALsgEBBX8CQCMAQRBrIgMiBiMCSQRAECoLIAYkAAsCQCAAEPcKIAJJDQACQAJAIAJBAUsNACAAIAIQ7wYgABDuBiEEDAELIAIQ+AohBCAAIAAQhQogBEEBaiIFEPkKIgQQ+gogACAFEPsKIAAgAhDtBgsgBBCICyABIAIQzgEaIANBADYCDCAEIAJBAnRqIANBDGoQ7AYCQCADQRBqIgcjAkkEQBAqCyAHJAALDwsgABDrCwALIQACQCAAEMEFRQ0AIAAQhQogABDrBiAAEIgKEIMKCyAAC5oBAQV/AkAjAEEQayIDIgYjAkkEQBAqCyAGJAALAkACQCAAENYJIgQgAkkNACAAEIYFEIgLIgQgASACEIoMGiADQQA2AgwgBCACQQJ0aiADQQxqEOwGIAAgAhDYCSAAIAIQ1wkMAQsgACAEIAIgBGsgABC3BCIFQQAgBSACIAEQiwwLAkAgA0EQaiIHIwJJBEAQKgsgByQACyAACxcAAkAgAkUNACAAIAEgAhDqCyEACyAAC+gCAQV/AkAjAEEQayIIIgsjAkkEQBAqCyALJAALAkAgABD3CiIJIAFBf3NqIAJJDQAgABCGBSEKAkACQCAJQQF2QXBqIAFNDQAgCCABQQF0NgIIIAggAiABajYCDCAIQQxqIAhBCGoQpgIoAgAQ+AohAgwBCyAJQX9qIQILIAAQhQogAkEBaiIJEPkKIQIgABDqBgJAIARFDQAgAhCICyAKEIgLIAQQzgEaCwJAIAZFDQAgAhCICyAEQQJ0aiAHIAYQzgEaCwJAIAMgBWsiAyAEayIHRQ0AIAIQiAsgBEECdCIEaiAGQQJ0aiAKEIgLIARqIAVBAnRqIAcQzgEaCwJAIAFBAWoiAUECRg0AIAAQhQogCiABEIMKCyAAIAIQ+gogACAJEPsKIAAgAyAGaiIBEO0GIAhBADYCBCACIAFBAnRqIAhBBGoQ7AYCQCAIQRBqIgwjAkkEQBAqCyAMJAALDwsgABDrCwALpQIBBX8CQCMAQRBrIgciCiMCSQRAECoLIAokAAsCQCAAEPcKIgggAWsgAkkNACAAEIYFIQkCQAJAIAhBAXZBcGogAU0NACAHIAFBAXQ2AgggByACIAFqNgIMIAdBDGogB0EIahCmAigCABD4CiECDAELIAhBf2ohAgsgABCFCiACQQFqIggQ+QohAiAAEOoGAkAgBEUNACACEIgLIAkQiAsgBBDOARoLAkAgAyAFayAEayIDRQ0AIAIQiAsgBEECdCIEaiAGQQJ0aiAJEIgLIARqIAVBAnRqIAMQzgEaCwJAIAFBAWoiAUECRg0AIAAQhQogCSABEIMKCyAAIAIQ+gogACAIEPsKAkAgB0EQaiILIwJJBEAQKgsgCyQACw8LIAAQ6wsACxcAAkAgAUUNACAAIAIgARDpCyEACyAAC6kBAQV/AkAjAEEQayIDIgYjAkkEQBAqCyAGJAALAkACQCAAENYJIgQgABC3BCIFayACSQ0AIAJFDQEgABCGBRCICyIEIAVBAnRqIAEgAhDOARogACAFIAJqIgIQ2AkgA0EANgIMIAQgAkECdGogA0EMahDsBgwBCyAAIAQgBSACaiAEayAFIAVBACACIAEQiwwLAkAgA0EQaiIHIwJJBEAQKgsgByQACyAAC+gBAQV/AkAjAEEQayICIgUjAkkEQBAqCyAFJAALIAIgATYCDAJAAkACQAJAAkAgABDBBUUNACAAEIgKIQEgABDCBSIDIAFBf2oiBEYNAQwDC0EBIQNBASEEIAAQwwUiAUEBRw0BCyAAIARBASAEIARBAEEAEIwMIAMhASAAEMEFDQELIAAQ7gYhBCAAIAFBAWoQ7wYMAQsgABDrBiEEIAAgA0EBahDtBiADIQELIAQgAUECdGoiACACQQxqEOwGIAJBADYCCCAAQQRqIAJBCGoQ7AYCQCACQRBqIgYjAkkEQBAqCyAGJAALCw4AIAAgASABEK0JEIkMC7IBAQV/AkAjAEEQayIDIgYjAkkEQBAqCyAGJAALAkAgABD3CiABSQ0AAkACQCABQQFLDQAgACABEO8GIAAQ7gYhBAwBCyABEPgKIQQgACAAEIUKIARBAWoiBRD5CiIEEPoKIAAgBRD7CiAAIAEQ7QYLIAQQiAsgASACEI0MGiADQQA2AgwgBCABQQJ0aiADQQxqEOwGAkAgA0EQaiIHIwJJBEAQKgsgByQACw8LIAAQ6wsACwkAQZGLARBjAAsDAAALQAEDfwJAIwBBEGsiASICIwJJBEAQKgsgAiQACyABIAAQlQwQlgwhAAJAIAFBEGoiAyMCSQRAECoLIAMkAAsgAAsMACAAIAEQlwwaIAALVwEEfwJAIwBBEGsiASIDIwJJBEAQKgsgAyQAC0EAIQICQCABQQhqIAAoAgQQmAwQmQwNACAAEJoMEJsMIQILAkAgAUEQaiIEIwJJBEAQKgsgBCQACyACCyMAIABBADYCDCAAIAE2AgQgACABNgIAIAAgAUEBajYCCCAACwsAIAAgATYCACAACwoAIAAoAgAQoAwLBAAgAAs+AQJ/QQAhAQJAAkAgACgCCCIALQAAIgJBAUYNACACQQJxDQEgAEECOgAAQQEhAQsgAQ8LQZiLAUEAEJMMAAs8AQN/AkAjAEEQayIBIgIjAkkEQBAqCyACJAALIAEgABCVDBCdDAJAIAFBEGoiAyMCSQRAECoLIAMkAAsLSgEDfwJAIwBBEGsiASICIwJJBEAQKgsgAiQACyABQQhqIAAoAgQQmAwQngwgABCaDBCfDAJAIAFBEGoiAyMCSQRAECoLIAMkAAsLCgAgACgCABChDAsMACAAKAIIQQE6AAALBwAgAC0AAAsJACAAQQE6AAALBwAgACgCAAsJAEG8wgEQogwLDABBzosBQQAQkwwACwQAIAALBwAgABDiCwsGAEHsiwELHAAgAEGwjAE2AgAgAEEEahCpDBogABClDBogAAsrAQF/AkAgABDoC0UNACAAKAIAEKoMIgFBCGoQqwxBf0oNACABEOILCyAACwcAIABBdGoLFQEBfyAAIAAoAgBBf2oiATYCACABCwoAIAAQqAwQ4gsLCgAgAEEEahCuDAsHACAAKAIACw0AIAAQqAwaIAAQ4gsLBAAgAAsKACAAELAMGiAACwIACwIACw0AIAAQsQwaIAAQ4gsLDQAgABCxDBogABDiCwsNACAAELEMGiAAEOILCywAAkAgAg0AIAAgARC4DA8LAkAgACABRw0AQQEPCyAAELkMIAEQuQwQqQNFCw0AIAAoAgQgASgCBEYLBwAgACgCBAvOAQEEfwJAIwBBwABrIgMiBSMCSQRAECoLIAUkAAtBASEEAkAgACABQQAQtwwNAEEAIQQgAUUNAEEAIQQgAUHIjQFB+I0BQQAQuwwiAUUNACADQX82AhQgAyAANgIQQQAhBCADQQA2AgwgAyABNgIIIANBGGpBAEEnENoMGiADQQE2AjggASADQQhqIAIoAgBBASABKAIAKAIcEQ0AIAMoAiBBAUcNACACIAMoAhg2AgBBASEECwJAIANBwABqIgYjAkkEQBAqCyAGJAALIAQLyAIBBX8CQCMAQcAAayIEIgcjAkkEQBAqCyAHJAALIAAoAgAiBUF8aigCACEGIAVBeGooAgAhBSAEIAM2AhQgBCABNgIQIAQgADYCDCAEIAI2AghBACEBIARBGGpBAEEnENoMGiAAIAVqIQACQAJAIAYgAkEAELcMRQ0AIARBATYCOCAGIARBCGogACAAQQFBACAGKAIAKAIUEQkAIABBACAEKAIgQQFGGyEBDAELIAYgBEEIaiAAQQFBACAGKAIAKAIYEQ4AAkACQCAEKAIsDgIAAQILIAQoAhxBACAEKAIoQQFGG0EAIAQoAiRBAUYbQQAgBCgCMEEBRhshAQwBCwJAIAQoAiBBAUYNACAEKAIwDQEgBCgCJEEBRw0BIAQoAihBAUcNAQsgBCgCGCEBCwJAIARBwABqIggjAkkEQBAqCyAIJAALIAELYAEBfwJAIAEoAhAiBA0AIAFBATYCJCABIAM2AhggASACNgIQDwsCQAJAIAQgAkcNACABKAIYQQJHDQEgASADNgIYDwsgAUEBOgA2IAFBAjYCGCABIAEoAiRBAWo2AiQLCx8AAkAgACABKAIIQQAQtwxFDQAgASABIAIgAxC8DAsLOAACQCAAIAEoAghBABC3DEUNACABIAEgAiADELwMDwsgACgCCCIAIAEgAiADIAAoAgAoAhwRDQALWgECfyAAKAIEIQQCQAJAIAINAEEAIQUMAQsgBEEIdSEFIARBAXFFDQAgAigCACAFaigCACEFCyAAKAIAIgAgASACIAVqIANBAiAEQQJxGyAAKAIAKAIcEQ0AC3UBAn8CQCAAIAEoAghBABC3DEUNACAAIAEgAiADELwMDwsgACgCDCEEIABBEGoiBSABIAIgAxC/DAJAIARBAkgNACAFIARBA3RqIQQgAEEYaiEAA0AgACABIAIgAxC/DCABLQA2DQEgAEEIaiIAIARJDQALCwuoAQAgAUEBOgA1AkAgASgCBCADRw0AIAFBAToANAJAIAEoAhAiAw0AIAFBATYCJCABIAQ2AhggASACNgIQIARBAUcNASABKAIwQQFHDQEgAUEBOgA2DwsCQCADIAJHDQACQCABKAIYIgNBAkcNACABIAQ2AhggBCEDCyABKAIwQQFHDQEgA0EBRw0BIAFBAToANg8LIAFBAToANiABIAEoAiRBAWo2AiQLCyAAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLC9MEAQR/AkAgACABKAIIIAQQtwxFDQAgASABIAIgAxDCDA8LAkACQCAAIAEoAgAgBBC3DEUNAAJAAkAgASgCECACRg0AIAEoAhQgAkcNAQsgA0EBRw0CIAFBATYCIA8LIAEgAzYCIAJAIAEoAixBBEYNACAAQRBqIgUgACgCDEEDdGohA0EAIQZBACEHAkACQAJAA0AgBSADTw0BIAFBADsBNCAFIAEgAiACQQEgBBDEDCABLQA2DQECQCABLQA1RQ0AAkAgAS0ANEUNAEEBIQggASgCGEEBRg0EQQEhBkEBIQdBASEIIAAtAAhBAnENAQwEC0EBIQYgByEIIAAtAAhBAXFFDQMLIAVBCGohBQwAAAsAC0EEIQUgByEIIAZBAXFFDQELQQMhBQsgASAFNgIsIAhBAXENAgsgASACNgIUIAEgASgCKEEBajYCKCABKAIkQQFHDQEgASgCGEECRw0BIAFBAToANg8LIAAoAgwhBSAAQRBqIgggASACIAMgBBDFDCAFQQJIDQAgCCAFQQN0aiEIIABBGGohBQJAAkAgACgCCCIAQQJxDQAgASgCJEEBRw0BCwNAIAEtADYNAiAFIAEgAiADIAQQxQwgBUEIaiIFIAhJDQAMAgALAAsCQCAAQQFxDQADQCABLQA2DQIgASgCJEEBRg0CIAUgASACIAMgBBDFDCAFQQhqIgUgCEkNAAwCAAsACwNAIAEtADYNAQJAIAEoAiRBAUcNACABKAIYQQFGDQILIAUgASACIAMgBBDFDCAFQQhqIgUgCEkNAAsLC08BAn8gACgCBCIGQQh1IQcCQCAGQQFxRQ0AIAMoAgAgB2ooAgAhBwsgACgCACIAIAEgAiADIAdqIARBAiAGQQJxGyAFIAAoAgAoAhQRCQALTQECfyAAKAIEIgVBCHUhBgJAIAVBAXFFDQAgAigCACAGaigCACEGCyAAKAIAIgAgASACIAZqIANBAiAFQQJxGyAEIAAoAgAoAhgRDgALggIAAkAgACABKAIIIAQQtwxFDQAgASABIAIgAxDCDA8LAkACQCAAIAEoAgAgBBC3DEUNAAJAAkAgASgCECACRg0AIAEoAhQgAkcNAQsgA0EBRw0CIAFBATYCIA8LIAEgAzYCIAJAIAEoAixBBEYNACABQQA7ATQgACgCCCIAIAEgAiACQQEgBCAAKAIAKAIUEQkAAkAgAS0ANUUNACABQQM2AiwgAS0ANEUNAQwDCyABQQQ2AiwLIAEgAjYCFCABIAEoAihBAWo2AiggASgCJEEBRw0BIAEoAhhBAkcNASABQQE6ADYPCyAAKAIIIgAgASACIAMgBCAAKAIAKAIYEQ4ACwubAQACQCAAIAEoAgggBBC3DEUNACABIAEgAiADEMIMDwsCQCAAIAEoAgAgBBC3DEUNAAJAAkAgASgCECACRg0AIAEoAhQgAkcNAQsgA0EBRw0BIAFBATYCIA8LIAEgAjYCFCABIAM2AiAgASABKAIoQQFqNgIoAkAgASgCJEEBRw0AIAEoAhhBAkcNACABQQE6ADYLIAFBBDYCLAsLpwIBBn8CQCAAIAEoAgggBRC3DEUNACABIAEgAiADIAQQwQwPCyABLQA1IQYgACgCDCEHIAFBADoANSABLQA0IQggAUEAOgA0IABBEGoiCSABIAIgAyAEIAUQxAwgBiABLQA1IgpyIQYgCCABLQA0IgtyIQgCQCAHQQJIDQAgCSAHQQN0aiEJIABBGGohBwNAIAEtADYNAQJAAkAgC0H/AXFFDQAgASgCGEEBRg0DIAAtAAhBAnENAQwDCyAKQf8BcUUNACAALQAIQQFxRQ0CCyABQQA7ATQgByABIAIgAyAEIAUQxAwgAS0ANSIKIAZyIQYgAS0ANCILIAhyIQggB0EIaiIHIAlJDQALCyABIAZB/wFxQQBHOgA1IAEgCEH/AXFBAEc6ADQLPgACQCAAIAEoAgggBRC3DEUNACABIAEgAiADIAQQwQwPCyAAKAIIIgAgASACIAMgBCAFIAAoAgAoAhQRCQALIQACQCAAIAEoAgggBRC3DEUNACABIAEgAiADIAQQwQwLCwQAQQALlzEBDX8CQCMAQRBrIgEiDCMCSQRAECoLIAwkAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAEH0AUsNAAJAQQAoAsDCASICQRAgAEELakF4cSAAQQtJGyIDQQN2IgR2IgBBA3FFDQAgAEF/c0EBcSAEaiIDQQN0IgVB8MIBaigCACIEQQhqIQACQAJAIAQoAggiBiAFQejCAWoiBUcNAEEAIAJBfiADd3E2AsDCAQwBC0EAKALQwgEgBksaIAYgBTYCDCAFIAY2AggLIAQgA0EDdCIGQQNyNgIEIAQgBmoiBCAEKAIEQQFyNgIEDAwLIANBACgCyMIBIgdNDQECQCAARQ0AAkACQCAAIAR0QQIgBHQiAEEAIABrcnEiAEEAIABrcUF/aiIAIABBDHZBEHEiAHYiBEEFdkEIcSIGIAByIAQgBnYiAEECdkEEcSIEciAAIAR2IgBBAXZBAnEiBHIgACAEdiIAQQF2QQFxIgRyIAAgBHZqIgZBA3QiBUHwwgFqKAIAIgQoAggiACAFQejCAWoiBUcNAEEAIAJBfiAGd3EiAjYCwMIBDAELQQAoAtDCASAASxogACAFNgIMIAUgADYCCAsgBEEIaiEAIAQgA0EDcjYCBCAEIANqIgUgBkEDdCIIIANrIgZBAXI2AgQgBCAIaiAGNgIAAkAgB0UNACAHQQN2IghBA3RB6MIBaiEDQQAoAtTCASEEAkACQCACQQEgCHQiCHENAEEAIAIgCHI2AsDCASADIQgMAQsgAygCCCEICyADIAQ2AgggCCAENgIMIAQgAzYCDCAEIAg2AggLQQAgBTYC1MIBQQAgBjYCyMIBDAwLQQAoAsTCASIJRQ0BIAlBACAJa3FBf2oiACAAQQx2QRBxIgB2IgRBBXZBCHEiBiAAciAEIAZ2IgBBAnZBBHEiBHIgACAEdiIAQQF2QQJxIgRyIAAgBHYiAEEBdkEBcSIEciAAIAR2akECdEHwxAFqKAIAIgUoAgRBeHEgA2shBCAFIQYCQANAAkAgBigCECIADQAgBkEUaigCACIARQ0CCyAAKAIEQXhxIANrIgYgBCAGIARJIgYbIQQgACAFIAYbIQUgACEGDAAACwALIAUoAhghCgJAIAUoAgwiCCAFRg0AAkBBACgC0MIBIAUoAggiAEsNACAAKAIMIAVHGgsgACAINgIMIAggADYCCAwLCwJAIAVBFGoiBigCACIADQAgBSgCECIARQ0DIAVBEGohBgsDQCAGIQsgACIIQRRqIgYoAgAiAA0AIAhBEGohBiAIKAIQIgANAAsgC0EANgIADAoLQX8hAyAAQb9/Sw0AIABBC2oiAEF4cSEDQQAoAsTCASIHRQ0AQQAhCwJAIABBCHYiAEUNAEEfIQsgA0H///8HSw0AIAAgAEGA/j9qQRB2QQhxIgR0IgAgAEGA4B9qQRB2QQRxIgB0IgYgBkGAgA9qQRB2QQJxIgZ0QQ92IAAgBHIgBnJrIgBBAXQgAyAAQRVqdkEBcXJBHGohCwtBACADayEGAkACQAJAAkAgC0ECdEHwxAFqKAIAIgQNAEEAIQBBACEIDAELIANBAEEZIAtBAXZrIAtBH0YbdCEFQQAhAEEAIQgDQAJAIAQoAgRBeHEgA2siAiAGTw0AIAIhBiAEIQggAg0AQQAhBiAEIQggBCEADAMLIAAgBEEUaigCACICIAIgBCAFQR12QQRxakEQaigCACIERhsgACACGyEAIAUgBEEAR3QhBSAEDQALCwJAIAAgCHINAEECIAt0IgBBACAAa3IgB3EiAEUNAyAAQQAgAGtxQX9qIgAgAEEMdkEQcSIAdiIEQQV2QQhxIgUgAHIgBCAFdiIAQQJ2QQRxIgRyIAAgBHYiAEEBdkECcSIEciAAIAR2IgBBAXZBAXEiBHIgACAEdmpBAnRB8MQBaigCACEACyAARQ0BCwNAIAAoAgRBeHEgA2siAiAGSSEFAkAgACgCECIEDQAgAEEUaigCACEECyACIAYgBRshBiAAIAggBRshCCAEIQAgBA0ACwsgCEUNACAGQQAoAsjCASADa08NACAIKAIYIQsCQCAIKAIMIgUgCEYNAAJAQQAoAtDCASAIKAIIIgBLDQAgACgCDCAIRxoLIAAgBTYCDCAFIAA2AggMCQsCQCAIQRRqIgQoAgAiAA0AIAgoAhAiAEUNAyAIQRBqIQQLA0AgBCECIAAiBUEUaiIEKAIAIgANACAFQRBqIQQgBSgCECIADQALIAJBADYCAAwICwJAQQAoAsjCASIAIANJDQBBACgC1MIBIQQCQAJAIAAgA2siBkEQSQ0AQQAgBjYCyMIBQQAgBCADaiIFNgLUwgEgBSAGQQFyNgIEIAQgAGogBjYCACAEIANBA3I2AgQMAQtBAEEANgLUwgFBAEEANgLIwgEgBCAAQQNyNgIEIAQgAGoiACAAKAIEQQFyNgIECyAEQQhqIQAMCgsCQEEAKALMwgEiBSADTQ0AQQAgBSADayIENgLMwgFBAEEAKALYwgEiACADaiIGNgLYwgEgBiAEQQFyNgIEIAAgA0EDcjYCBCAAQQhqIQAMCgsCQAJAQQAoApjGAUUNAEEAKAKgxgEhBAwBC0EAQn83AqTGAUEAQoCggICAgAQ3ApzGAUEAIAFBDGpBcHFB2KrVqgVzNgKYxgFBAEEANgKsxgFBAEEANgL8xQFBgCAhBAtBACEAIAQgA0EvaiIHaiICQQAgBGsiC3EiCCADTQ0JQQAhAAJAQQAoAvjFASIERQ0AQQAoAvDFASIGIAhqIgkgBk0NCiAJIARLDQoLQQAtAPzFAUEEcQ0EAkACQAJAQQAoAtjCASIERQ0AQYDGASEAA0ACQCAAKAIAIgYgBEsNACAGIAAoAgRqIARLDQMLIAAoAggiAA0ACwtBABDRDCIFQX9GDQUgCCECAkBBACgCnMYBIgBBf2oiBCAFcUUNACAIIAVrIAQgBWpBACAAa3FqIQILIAIgA00NBSACQf7///8HSw0FAkBBACgC+MUBIgBFDQBBACgC8MUBIgQgAmoiBiAETQ0GIAYgAEsNBgsgAhDRDCIAIAVHDQEMBwsgAiAFayALcSICQf7///8HSw0EIAIQ0QwiBSAAKAIAIAAoAgRqRg0DIAUhAAsCQCADQTBqIAJNDQAgAEF/Rg0AAkAgByACa0EAKAKgxgEiBGpBACAEa3EiBEH+////B00NACAAIQUMBwsCQCAEENEMQX9GDQAgBCACaiECIAAhBQwHC0EAIAJrENEMGgwECyAAIQUgAEF/Rw0FDAMLQQAhCAwHC0EAIQUMBQsgBUF/Rw0CC0EAQQAoAvzFAUEEcjYC/MUBCyAIQf7///8HSw0BIAgQ0QwiBUEAENEMIgBPDQEgBUF/Rg0BIABBf0YNASAAIAVrIgIgA0Eoak0NAQtBAEEAKALwxQEgAmoiADYC8MUBAkAgAEEAKAL0xQFNDQBBACAANgL0xQELAkACQAJAAkBBACgC2MIBIgRFDQBBgMYBIQADQCAFIAAoAgAiBiAAKAIEIghqRg0CIAAoAggiAA0ADAMACwALAkACQEEAKALQwgEiAEUNACAFIABPDQELQQAgBTYC0MIBC0EAIQBBACACNgKExgFBACAFNgKAxgFBAEF/NgLgwgFBAEEAKAKYxgE2AuTCAUEAQQA2AozGAQNAIABBA3QiBEHwwgFqIARB6MIBaiIGNgIAIARB9MIBaiAGNgIAIABBAWoiAEEgRw0AC0EAIAJBWGoiAEF4IAVrQQdxQQAgBUEIakEHcRsiBGsiBjYCzMIBQQAgBSAEaiIENgLYwgEgBCAGQQFyNgIEIAUgAGpBKDYCBEEAQQAoAqjGATYC3MIBDAILIAAtAAxBCHENACAFIARNDQAgBiAESw0AIAAgCCACajYCBEEAIARBeCAEa0EHcUEAIARBCGpBB3EbIgBqIgY2AtjCAUEAQQAoAszCASACaiIFIABrIgA2AszCASAGIABBAXI2AgQgBCAFakEoNgIEQQBBACgCqMYBNgLcwgEMAQsCQCAFQQAoAtDCASIITw0AQQAgBTYC0MIBIAUhCAsgBSACaiEGQYDGASEAAkACQAJAAkACQAJAAkADQCAAKAIAIAZGDQEgACgCCCIADQAMAgALAAsgAC0ADEEIcUUNAQtBgMYBIQADQAJAIAAoAgAiBiAESw0AIAYgACgCBGoiBiAESw0DCyAAKAIIIQAMAAALAAsgACAFNgIAIAAgACgCBCACajYCBCAFQXggBWtBB3FBACAFQQhqQQdxG2oiCyADQQNyNgIEIAZBeCAGa0EHcUEAIAZBCGpBB3EbaiIFIAtrIANrIQAgCyADaiEGAkAgBCAFRw0AQQAgBjYC2MIBQQBBACgCzMIBIABqIgA2AszCASAGIABBAXI2AgQMAwsCQEEAKALUwgEgBUcNAEEAIAY2AtTCAUEAQQAoAsjCASAAaiIANgLIwgEgBiAAQQFyNgIEIAYgAGogADYCAAwDCwJAIAUoAgQiBEEDcUEBRw0AIARBeHEhBwJAAkAgBEH/AUsNACAFKAIMIQMCQCAFKAIIIgIgBEEDdiIJQQN0QejCAWoiBEYNACAIIAJLGgsCQCADIAJHDQBBAEEAKALAwgFBfiAJd3E2AsDCAQwCCwJAIAMgBEYNACAIIANLGgsgAiADNgIMIAMgAjYCCAwBCyAFKAIYIQkCQAJAIAUoAgwiAiAFRg0AAkAgCCAFKAIIIgRLDQAgBCgCDCAFRxoLIAQgAjYCDCACIAQ2AggMAQsCQCAFQRRqIgQoAgAiAw0AIAVBEGoiBCgCACIDDQBBACECDAELA0AgBCEIIAMiAkEUaiIEKAIAIgMNACACQRBqIQQgAigCECIDDQALIAhBADYCAAsgCUUNAAJAAkAgBSgCHCIDQQJ0QfDEAWoiBCgCACAFRw0AIAQgAjYCACACDQFBAEEAKALEwgFBfiADd3E2AsTCAQwCCyAJQRBBFCAJKAIQIAVGG2ogAjYCACACRQ0BCyACIAk2AhgCQCAFKAIQIgRFDQAgAiAENgIQIAQgAjYCGAsgBSgCFCIERQ0AIAJBFGogBDYCACAEIAI2AhgLIAcgAGohACAFIAdqIQULIAUgBSgCBEF+cTYCBCAGIABBAXI2AgQgBiAAaiAANgIAAkAgAEH/AUsNACAAQQN2IgRBA3RB6MIBaiEAAkACQEEAKALAwgEiA0EBIAR0IgRxDQBBACADIARyNgLAwgEgACEEDAELIAAoAgghBAsgACAGNgIIIAQgBjYCDCAGIAA2AgwgBiAENgIIDAMLQQAhBAJAIABBCHYiA0UNAEEfIQQgAEH///8HSw0AIAMgA0GA/j9qQRB2QQhxIgR0IgMgA0GA4B9qQRB2QQRxIgN0IgUgBUGAgA9qQRB2QQJxIgV0QQ92IAMgBHIgBXJrIgRBAXQgACAEQRVqdkEBcXJBHGohBAsgBiAENgIcIAZCADcCECAEQQJ0QfDEAWohAwJAAkBBACgCxMIBIgVBASAEdCIIcQ0AQQAgBSAIcjYCxMIBIAMgBjYCACAGIAM2AhgMAQsgAEEAQRkgBEEBdmsgBEEfRht0IQQgAygCACEFA0AgBSIDKAIEQXhxIABGDQMgBEEddiEFIARBAXQhBCADIAVBBHFqQRBqIggoAgAiBQ0ACyAIIAY2AgAgBiADNgIYCyAGIAY2AgwgBiAGNgIIDAILQQAgAkFYaiIAQXggBWtBB3FBACAFQQhqQQdxGyIIayILNgLMwgFBACAFIAhqIgg2AtjCASAIIAtBAXI2AgQgBSAAakEoNgIEQQBBACgCqMYBNgLcwgEgBCAGQScgBmtBB3FBACAGQVlqQQdxG2pBUWoiACAAIARBEGpJGyIIQRs2AgQgCEEQakEAKQKIxgE3AgAgCEEAKQKAxgE3AghBACAIQQhqNgKIxgFBACACNgKExgFBACAFNgKAxgFBAEEANgKMxgEgCEEYaiEAA0AgAEEHNgIEIABBCGohBSAAQQRqIQAgBiAFSw0ACyAIIARGDQMgCCAIKAIEQX5xNgIEIAQgCCAEayICQQFyNgIEIAggAjYCAAJAIAJB/wFLDQAgAkEDdiIGQQN0QejCAWohAAJAAkBBACgCwMIBIgVBASAGdCIGcQ0AQQAgBSAGcjYCwMIBIAAhBgwBCyAAKAIIIQYLIAAgBDYCCCAGIAQ2AgwgBCAANgIMIAQgBjYCCAwEC0EAIQACQCACQQh2IgZFDQBBHyEAIAJB////B0sNACAGIAZBgP4/akEQdkEIcSIAdCIGIAZBgOAfakEQdkEEcSIGdCIFIAVBgIAPakEQdkECcSIFdEEPdiAGIAByIAVyayIAQQF0IAIgAEEVanZBAXFyQRxqIQALIARCADcCECAEQRxqIAA2AgAgAEECdEHwxAFqIQYCQAJAQQAoAsTCASIFQQEgAHQiCHENAEEAIAUgCHI2AsTCASAGIAQ2AgAgBEEYaiAGNgIADAELIAJBAEEZIABBAXZrIABBH0YbdCEAIAYoAgAhBQNAIAUiBigCBEF4cSACRg0EIABBHXYhBSAAQQF0IQAgBiAFQQRxakEQaiIIKAIAIgUNAAsgCCAENgIAIARBGGogBjYCAAsgBCAENgIMIAQgBDYCCAwDCyADKAIIIgAgBjYCDCADIAY2AgggBkEANgIYIAYgAzYCDCAGIAA2AggLIAtBCGohAAwFCyAGKAIIIgAgBDYCDCAGIAQ2AgggBEEYakEANgIAIAQgBjYCDCAEIAA2AggLQQAoAszCASIAIANNDQBBACAAIANrIgQ2AszCAUEAQQAoAtjCASIAIANqIgY2AtjCASAGIARBAXI2AgQgACADQQNyNgIEIABBCGohAAwDCxB8QTA2AgBBACEADAILAkAgC0UNAAJAAkAgCCAIKAIcIgRBAnRB8MQBaiIAKAIARw0AIAAgBTYCACAFDQFBACAHQX4gBHdxIgc2AsTCAQwCCyALQRBBFCALKAIQIAhGG2ogBTYCACAFRQ0BCyAFIAs2AhgCQCAIKAIQIgBFDQAgBSAANgIQIAAgBTYCGAsgCEEUaigCACIARQ0AIAVBFGogADYCACAAIAU2AhgLAkACQCAGQQ9LDQAgCCAGIANqIgBBA3I2AgQgCCAAaiIAIAAoAgRBAXI2AgQMAQsgCCADQQNyNgIEIAggA2oiBSAGQQFyNgIEIAUgBmogBjYCAAJAIAZB/wFLDQAgBkEDdiIEQQN0QejCAWohAAJAAkBBACgCwMIBIgZBASAEdCIEcQ0AQQAgBiAEcjYCwMIBIAAhBAwBCyAAKAIIIQQLIAAgBTYCCCAEIAU2AgwgBSAANgIMIAUgBDYCCAwBCwJAAkAgBkEIdiIEDQBBACEADAELQR8hACAGQf///wdLDQAgBCAEQYD+P2pBEHZBCHEiAHQiBCAEQYDgH2pBEHZBBHEiBHQiAyADQYCAD2pBEHZBAnEiA3RBD3YgBCAAciADcmsiAEEBdCAGIABBFWp2QQFxckEcaiEACyAFIAA2AhwgBUIANwIQIABBAnRB8MQBaiEEAkACQAJAIAdBASAAdCIDcQ0AQQAgByADcjYCxMIBIAQgBTYCACAFIAQ2AhgMAQsgBkEAQRkgAEEBdmsgAEEfRht0IQAgBCgCACEDA0AgAyIEKAIEQXhxIAZGDQIgAEEddiEDIABBAXQhACAEIANBBHFqQRBqIgIoAgAiAw0ACyACIAU2AgAgBSAENgIYCyAFIAU2AgwgBSAFNgIIDAELIAQoAggiACAFNgIMIAQgBTYCCCAFQQA2AhggBSAENgIMIAUgADYCCAsgCEEIaiEADAELAkAgCkUNAAJAAkAgBSAFKAIcIgZBAnRB8MQBaiIAKAIARw0AIAAgCDYCACAIDQFBACAJQX4gBndxNgLEwgEMAgsgCkEQQRQgCigCECAFRhtqIAg2AgAgCEUNAQsgCCAKNgIYAkAgBSgCECIARQ0AIAggADYCECAAIAg2AhgLIAVBFGooAgAiAEUNACAIQRRqIAA2AgAgACAINgIYCwJAAkAgBEEPSw0AIAUgBCADaiIAQQNyNgIEIAUgAGoiACAAKAIEQQFyNgIEDAELIAUgA0EDcjYCBCAFIANqIgYgBEEBcjYCBCAGIARqIAQ2AgACQCAHRQ0AIAdBA3YiCEEDdEHowgFqIQNBACgC1MIBIQACQAJAQQEgCHQiCCACcQ0AQQAgCCACcjYCwMIBIAMhCAwBCyADKAIIIQgLIAMgADYCCCAIIAA2AgwgACADNgIMIAAgCDYCCAtBACAGNgLUwgFBACAENgLIwgELIAVBCGohAAsCQCABQRBqIg0jAkkEQBAqCyANJAALIAALlQ4BB38CQCAARQ0AIABBeGoiASAAQXxqKAIAIgJBeHEiAGohAwJAIAJBAXENACACQQNxRQ0BIAEgASgCACICayIBQQAoAtDCASIESQ0BIAIgAGohAAJAQQAoAtTCASABRg0AAkAgAkH/AUsNACABKAIMIQUCQCABKAIIIgYgAkEDdiIHQQN0QejCAWoiAkYNACAEIAZLGgsCQCAFIAZHDQBBAEEAKALAwgFBfiAHd3E2AsDCAQwDCwJAIAUgAkYNACAEIAVLGgsgBiAFNgIMIAUgBjYCCAwCCyABKAIYIQcCQAJAIAEoAgwiBSABRg0AAkAgBCABKAIIIgJLDQAgAigCDCABRxoLIAIgBTYCDCAFIAI2AggMAQsCQCABQRRqIgIoAgAiBA0AIAFBEGoiAigCACIEDQBBACEFDAELA0AgAiEGIAQiBUEUaiICKAIAIgQNACAFQRBqIQIgBSgCECIEDQALIAZBADYCAAsgB0UNAQJAAkAgASgCHCIEQQJ0QfDEAWoiAigCACABRw0AIAIgBTYCACAFDQFBAEEAKALEwgFBfiAEd3E2AsTCAQwDCyAHQRBBFCAHKAIQIAFGG2ogBTYCACAFRQ0CCyAFIAc2AhgCQCABKAIQIgJFDQAgBSACNgIQIAIgBTYCGAsgASgCFCICRQ0BIAVBFGogAjYCACACIAU2AhgMAQsgAygCBCICQQNxQQNHDQBBACAANgLIwgEgAyACQX5xNgIEIAEgAEEBcjYCBCABIABqIAA2AgAPCyADIAFNDQAgAygCBCICQQFxRQ0AAkACQCACQQJxDQACQEEAKALYwgEgA0cNAEEAIAE2AtjCAUEAQQAoAszCASAAaiIANgLMwgEgASAAQQFyNgIEIAFBACgC1MIBRw0DQQBBADYCyMIBQQBBADYC1MIBDwsCQEEAKALUwgEgA0cNAEEAIAE2AtTCAUEAQQAoAsjCASAAaiIANgLIwgEgASAAQQFyNgIEIAEgAGogADYCAA8LIAJBeHEgAGohAAJAAkAgAkH/AUsNACADKAIMIQQCQCADKAIIIgUgAkEDdiIDQQN0QejCAWoiAkYNAEEAKALQwgEgBUsaCwJAIAQgBUcNAEEAQQAoAsDCAUF+IAN3cTYCwMIBDAILAkAgBCACRg0AQQAoAtDCASAESxoLIAUgBDYCDCAEIAU2AggMAQsgAygCGCEHAkACQCADKAIMIgUgA0YNAAJAQQAoAtDCASADKAIIIgJLDQAgAigCDCADRxoLIAIgBTYCDCAFIAI2AggMAQsCQCADQRRqIgIoAgAiBA0AIANBEGoiAigCACIEDQBBACEFDAELA0AgAiEGIAQiBUEUaiICKAIAIgQNACAFQRBqIQIgBSgCECIEDQALIAZBADYCAAsgB0UNAAJAAkAgAygCHCIEQQJ0QfDEAWoiAigCACADRw0AIAIgBTYCACAFDQFBAEEAKALEwgFBfiAEd3E2AsTCAQwCCyAHQRBBFCAHKAIQIANGG2ogBTYCACAFRQ0BCyAFIAc2AhgCQCADKAIQIgJFDQAgBSACNgIQIAIgBTYCGAsgAygCFCICRQ0AIAVBFGogAjYCACACIAU2AhgLIAEgAEEBcjYCBCABIABqIAA2AgAgAUEAKALUwgFHDQFBACAANgLIwgEPCyADIAJBfnE2AgQgASAAQQFyNgIEIAEgAGogADYCAAsCQCAAQf8BSw0AIABBA3YiAkEDdEHowgFqIQACQAJAQQAoAsDCASIEQQEgAnQiAnENAEEAIAQgAnI2AsDCASAAIQIMAQsgACgCCCECCyAAIAE2AgggAiABNgIMIAEgADYCDCABIAI2AggPC0EAIQICQCAAQQh2IgRFDQBBHyECIABB////B0sNACAEIARBgP4/akEQdkEIcSICdCIEIARBgOAfakEQdkEEcSIEdCIFIAVBgIAPakEQdkECcSIFdEEPdiAEIAJyIAVyayICQQF0IAAgAkEVanZBAXFyQRxqIQILIAFCADcCECABQRxqIAI2AgAgAkECdEHwxAFqIQQCQAJAAkACQEEAKALEwgEiBUEBIAJ0IgNxDQBBACAFIANyNgLEwgEgBCABNgIAIAFBGGogBDYCAAwBCyAAQQBBGSACQQF2ayACQR9GG3QhAiAEKAIAIQUDQCAFIgQoAgRBeHEgAEYNAiACQR12IQUgAkEBdCECIAQgBUEEcWpBEGoiAygCACIFDQALIAMgATYCACABQRhqIAQ2AgALIAEgATYCDCABIAE2AggMAQsgBCgCCCIAIAE2AgwgBCABNgIIIAFBGGpBADYCACABIAQ2AgwgASAANgIIC0EAQQAoAuDCAUF/aiIBNgLgwgEgAQ0AQYjGASEBA0AgASgCACIAQQhqIQEgAA0AC0EAQX82AuDCAQsLiwEBAn8CQCAADQAgARDMDA8LAkAgAUFASQ0AEHxBMDYCAEEADwsCQCAAQXhqQRAgAUELakF4cSABQQtJGxDPDCICRQ0AIAJBCGoPCwJAIAEQzAwiAg0AQQAPCyACIABBfEF4IABBfGooAgAiA0EDcRsgA0F4cWoiAyABIAMgAUkbENkMGiAAEM0MIAILiQgBCX8gACgCBCICQQNxIQMgACACQXhxIgRqIQUCQEEAKALQwgEiBiAASw0AIANBAUYNACAFIABNGgsCQAJAIAMNAEEAIQMgAUGAAkkNAQJAIAQgAUEEakkNACAAIQMgBCABa0EAKAKgxgFBAXRNDQILQQAPCwJAAkAgBCABSQ0AIAQgAWsiA0EQSQ0BIAAgAkEBcSABckECcjYCBCAAIAFqIgEgA0EDcjYCBCAFIAUoAgRBAXI2AgQgASADENAMDAELQQAhAwJAQQAoAtjCASAFRw0AQQAoAszCASAEaiIFIAFNDQIgACACQQFxIAFyQQJyNgIEIAAgAWoiAyAFIAFrIgFBAXI2AgRBACABNgLMwgFBACADNgLYwgEMAQsCQEEAKALUwgEgBUcNAEEAIQNBACgCyMIBIARqIgUgAUkNAgJAAkAgBSABayIDQRBJDQAgACACQQFxIAFyQQJyNgIEIAAgAWoiASADQQFyNgIEIAAgBWoiBSADNgIAIAUgBSgCBEF+cTYCBAwBCyAAIAJBAXEgBXJBAnI2AgQgACAFaiIBIAEoAgRBAXI2AgRBACEDQQAhAQtBACABNgLUwgFBACADNgLIwgEMAQtBACEDIAUoAgQiB0ECcQ0BIAdBeHEgBGoiCCABSQ0BIAggAWshCQJAAkAgB0H/AUsNACAFKAIMIQMCQCAFKAIIIgUgB0EDdiIHQQN0QejCAWoiBEYNACAGIAVLGgsCQCADIAVHDQBBAEEAKALAwgFBfiAHd3E2AsDCAQwCCwJAIAMgBEYNACAGIANLGgsgBSADNgIMIAMgBTYCCAwBCyAFKAIYIQoCQAJAIAUoAgwiByAFRg0AAkAgBiAFKAIIIgNLDQAgAygCDCAFRxoLIAMgBzYCDCAHIAM2AggMAQsCQCAFQRRqIgMoAgAiBA0AIAVBEGoiAygCACIEDQBBACEHDAELA0AgAyEGIAQiB0EUaiIDKAIAIgQNACAHQRBqIQMgBygCECIEDQALIAZBADYCAAsgCkUNAAJAAkAgBSgCHCIEQQJ0QfDEAWoiAygCACAFRw0AIAMgBzYCACAHDQFBAEEAKALEwgFBfiAEd3E2AsTCAQwCCyAKQRBBFCAKKAIQIAVGG2ogBzYCACAHRQ0BCyAHIAo2AhgCQCAFKAIQIgNFDQAgByADNgIQIAMgBzYCGAsgBSgCFCIFRQ0AIAdBFGogBTYCACAFIAc2AhgLAkAgCUEPSw0AIAAgAkEBcSAIckECcjYCBCAAIAhqIgEgASgCBEEBcjYCBAwBCyAAIAJBAXEgAXJBAnI2AgQgACABaiIBIAlBA3I2AgQgACAIaiIFIAUoAgRBAXI2AgQgASAJENAMCyAAIQMLIAMLqQ0BBn8gACABaiECAkACQCAAKAIEIgNBAXENACADQQNxRQ0BIAAoAgAiAyABaiEBAkBBACgC1MIBIAAgA2siAEYNAEEAKALQwgEhBAJAIANB/wFLDQAgACgCDCEFAkAgACgCCCIGIANBA3YiB0EDdEHowgFqIgNGDQAgBCAGSxoLAkAgBSAGRw0AQQBBACgCwMIBQX4gB3dxNgLAwgEMAwsCQCAFIANGDQAgBCAFSxoLIAYgBTYCDCAFIAY2AggMAgsgACgCGCEHAkACQCAAKAIMIgYgAEYNAAJAIAQgACgCCCIDSw0AIAMoAgwgAEcaCyADIAY2AgwgBiADNgIIDAELAkAgAEEUaiIDKAIAIgUNACAAQRBqIgMoAgAiBQ0AQQAhBgwBCwNAIAMhBCAFIgZBFGoiAygCACIFDQAgBkEQaiEDIAYoAhAiBQ0ACyAEQQA2AgALIAdFDQECQAJAIAAoAhwiBUECdEHwxAFqIgMoAgAgAEcNACADIAY2AgAgBg0BQQBBACgCxMIBQX4gBXdxNgLEwgEMAwsgB0EQQRQgBygCECAARhtqIAY2AgAgBkUNAgsgBiAHNgIYAkAgACgCECIDRQ0AIAYgAzYCECADIAY2AhgLIAAoAhQiA0UNASAGQRRqIAM2AgAgAyAGNgIYDAELIAIoAgQiA0EDcUEDRw0AQQAgATYCyMIBIAIgA0F+cTYCBCAAIAFBAXI2AgQgAiABNgIADwsCQAJAIAIoAgQiA0ECcQ0AAkBBACgC2MIBIAJHDQBBACAANgLYwgFBAEEAKALMwgEgAWoiATYCzMIBIAAgAUEBcjYCBCAAQQAoAtTCAUcNA0EAQQA2AsjCAUEAQQA2AtTCAQ8LAkBBACgC1MIBIAJHDQBBACAANgLUwgFBAEEAKALIwgEgAWoiATYCyMIBIAAgAUEBcjYCBCAAIAFqIAE2AgAPC0EAKALQwgEhBCADQXhxIAFqIQECQAJAIANB/wFLDQAgAigCDCEFAkAgAigCCCIGIANBA3YiAkEDdEHowgFqIgNGDQAgBCAGSxoLAkAgBSAGRw0AQQBBACgCwMIBQX4gAndxNgLAwgEMAgsCQCAFIANGDQAgBCAFSxoLIAYgBTYCDCAFIAY2AggMAQsgAigCGCEHAkACQCACKAIMIgYgAkYNAAJAIAQgAigCCCIDSw0AIAMoAgwgAkcaCyADIAY2AgwgBiADNgIIDAELAkAgAkEUaiIDKAIAIgUNACACQRBqIgMoAgAiBQ0AQQAhBgwBCwNAIAMhBCAFIgZBFGoiAygCACIFDQAgBkEQaiEDIAYoAhAiBQ0ACyAEQQA2AgALIAdFDQACQAJAIAIoAhwiBUECdEHwxAFqIgMoAgAgAkcNACADIAY2AgAgBg0BQQBBACgCxMIBQX4gBXdxNgLEwgEMAgsgB0EQQRQgBygCECACRhtqIAY2AgAgBkUNAQsgBiAHNgIYAkAgAigCECIDRQ0AIAYgAzYCECADIAY2AhgLIAIoAhQiA0UNACAGQRRqIAM2AgAgAyAGNgIYCyAAIAFBAXI2AgQgACABaiABNgIAIABBACgC1MIBRw0BQQAgATYCyMIBDwsgAiADQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALAkAgAUH/AUsNACABQQN2IgNBA3RB6MIBaiEBAkACQEEAKALAwgEiBUEBIAN0IgNxDQBBACAFIANyNgLAwgEgASEDDAELIAEoAgghAwsgASAANgIIIAMgADYCDCAAIAE2AgwgACADNgIIDwtBACEDAkAgAUEIdiIFRQ0AQR8hAyABQf///wdLDQAgBSAFQYD+P2pBEHZBCHEiA3QiBSAFQYDgH2pBEHZBBHEiBXQiBiAGQYCAD2pBEHZBAnEiBnRBD3YgBSADciAGcmsiA0EBdCABIANBFWp2QQFxckEcaiEDCyAAQgA3AhAgAEEcaiADNgIAIANBAnRB8MQBaiEFAkACQAJAQQAoAsTCASIGQQEgA3QiAnENAEEAIAYgAnI2AsTCASAFIAA2AgAgAEEYaiAFNgIADAELIAFBAEEZIANBAXZrIANBH0YbdCEDIAUoAgAhBgNAIAYiBSgCBEF4cSABRg0CIANBHXYhBiADQQF0IQMgBSAGQQRxakEQaiICKAIAIgYNAAsgAiAANgIAIABBGGogBTYCAAsgACAANgIMIAAgADYCCA8LIAUoAggiASAANgIMIAUgADYCCCAAQRhqQQA2AgAgACAFNgIMIAAgATYCCAsLVQEDfxAtIgEoAgAiAiAAQQNqQXxxIgNqIQACQAJAIANBAUgNACAAIAJNDQELAkAgAD8AQRB0TQ0AIAAQKEUNAQsgASAANgIAIAIPCxB8QTA2AgBBfwsEAEEACwQAQQALBABBAAsEAEEAC44HAgd/BH4CQCMAQYABayIFIgojAkkEQBAqCyAKJAALAkACQAJAIAMgBEIAQgAQkQNFDQAgAyAEENgMIQYgAkIwiKciB0H//wFxIghB//8BRg0AIAYNAQsgBUEQaiABIAIgAyAEEI4DIAUgBSkDECIEIAVBEGpBCGopAwAiAyAEIAMQmAMgBUEIaikDACECIAUpAwAhBAwBCwJAIAEgCK1CMIYgAkL///////8/g4QiDCADIARCMIinQf//AXEiCa1CMIYgBEL///////8/g4QiDRCRA0EASg0AAkAgASAMIAMgDRCRA0UNACABIQQMAgsgBUHwAGogASACQgBCABCOAyAFQfgAaikDACECIAUpA3AhBAwBCwJAAkAgCEUNACABIQQMAQsgBUHgAGogASAMQgBCgICAgICAwLvAABCOAyAFQegAaikDACIMQjCIp0GIf2ohCCAFKQNgIQQLAkAgCQ0AIAVB0ABqIAMgDUIAQoCAgICAgMC7wAAQjgMgBUHYAGopAwAiDUIwiKdBiH9qIQkgBSkDUCEDCyAMQv///////z+DQoCAgICAgMAAhCIMIA1C////////P4NCgICAgICAwACEIg59IAQgA1StfSIPQn9VIQYgBCADfSENAkAgCCAJTA0AA0ACQAJAIAZBAXFFDQACQCAPIA2EQgBSDQAgBUEgaiABIAJCAEIAEI4DIAVBKGopAwAhAiAFKQMgIQQMBQsgDUI/iCEMIA9CAYYhDwwBCyAEQj+IIQ8gDEIBhiEMIAQhDQsgDyAMhCIMIA59IA1CAYYiBCADVK19Ig9Cf1UhBiAEIAN9IQ0gCEF/aiIIIAlKDQALIAkhCAsCQCAGRQ0AIA8hDCANIQQgDyANhEIAUg0AIAVBMGogASACQgBCABCOAyAFQThqKQMAIQIgBSkDMCEEDAELAkAgDEL///////8/Vg0AA0AgBEI/iCEDIAhBf2ohCCAEQgGGIQQgAyAMQgGGhCIMQoCAgICAgMAAVA0ACwsgB0GAgAJxIQYCQCAIQQBKDQAgBUHAAGogBCAMQv///////z+DIAhB+ABqIAZyrUIwhoRCAEKAgICAgIDAwz8QjgMgBUHIAGopAwAhAiAFKQNAIQQMAQsgDEL///////8/gyAIIAZyrUIwhoQhAgsgACAENwMAIAAgAjcDCAJAIAVBgAFqIgsjAkkEQBAqCyALJAALC64BAAJAAkAgAUGACEgNACAARAAAAAAAAOB/oiEAAkAgAUH/D04NACABQYF4aiEBDAILIABEAAAAAAAA4H+iIQAgAUH9FyABQf0XSBtBgnBqIQEMAQsgAUGBeEoNACAARAAAAAAAABAAoiEAAkAgAUGDcEwNACABQf4HaiEBDAELIABEAAAAAAAAEACiIQAgAUGGaCABQYZoShtB/A9qIQELIAAgAUH/B2qtQjSGv6ILSwICfwF+IAFC////////P4MhBAJAAkAgAUIwiKdB//8BcSICQf//AUYNAEEEIQMgAg0BQQJBAyAEIACEUBsPCyAEIACEUCEDCyADC5IEAQN/AkAgAkGABEkNACAAIAEgAhApGiAADwsgACACaiEDAkACQCABIABzQQNxDQACQAJAIAJBAU4NACAAIQIMAQsCQCAAQQNxDQAgACECDAELIAAhAgNAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANPDQEgAkEDcQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICACIAEoAiQ2AiQgAiABKAIoNgIoIAIgASgCLDYCLCACIAEoAjA2AjAgAiABKAI0NgI0IAIgASgCODYCOCACIAEoAjw2AjwgAUHAAGohASACQcAAaiICIAVNDQALCyACIARPDQEDQCACIAEoAgA2AgAgAUEEaiEBIAJBBGoiAiAESQ0ADAIACwALAkAgA0EETw0AIAAhAgwBCwJAIANBfGoiBCAATw0AIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAUEEaiEBIAJBBGoiAiAETQ0ACwsCQCACIANPDQADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAvzAgIDfwF+AkAgAkUNACACIABqIgNBf2ogAToAACAAIAE6AAAgAkEDSQ0AIANBfmogAToAACAAIAE6AAEgA0F9aiABOgAAIAAgAToAAiACQQdJDQAgA0F8aiABOgAAIAAgAToAAyACQQlJDQAgAEEAIABrQQNxIgRqIgMgAUH/AXFBgYKECGwiATYCACADIAIgBGtBfHEiBGoiAkF8aiABNgIAIARBCUkNACADIAE2AgggAyABNgIEIAJBeGogATYCACACQXRqIAE2AgAgBEEZSQ0AIAMgATYCGCADIAE2AhQgAyABNgIQIAMgATYCDCACQXBqIAE2AgAgAkFsaiABNgIAIAJBaGogATYCACACQWRqIAE2AgAgBCADQQRxQRhyIgVrIgJBIEkNACABrSIGQiCGIAaEIQYgAyAFaiEBA0AgASAGNwMYIAEgBjcDECABIAY3AwggASAGNwMAIAFBIGohASACQWBqIgJBH0sNAAsLIAAL+gIBAX8CQCAAIAFGDQACQCABIABrIAJrQQAgAkEBdGtLDQAgACABIAIQ2QwPCyABIABzQQNxIQMCQAJAAkAgACABTw0AAkAgA0UNACAAIQMMAwsCQCAAQQNxDQAgACEDDAILIAAhAwNAIAJFDQQgAyABLQAAOgAAIAFBAWohASACQX9qIQIgA0EBaiIDQQNxRQ0CDAAACwALAkAgAw0AAkAgACACakEDcUUNAANAIAJFDQUgACACQX9qIgJqIgMgASACai0AADoAACADQQNxDQALCyACQQNNDQADQCAAIAJBfGoiAmogASACaigCADYCACACQQNLDQALCyACRQ0CA0AgACACQX9qIgJqIAEgAmotAAA6AAAgAg0ADAMACwALIAJBA00NAANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIAJBfGoiAkEDSw0ACwsgAkUNAANAIAMgAS0AADoAACADQQFqIQMgAUEBaiEBIAJBf2oiAg0ACwsgAAtcAQF/IAAgAC0ASiIBQX9qIAFyOgBKAkAgACgCACIBQQhxRQ0AIAAgAUEgcjYCAEF/DwsgAEIANwIEIAAgACgCLCIBNgIcIAAgATYCFCAAIAEgACgCMGo2AhBBAAvFAQEEfwJAAkAgAigCECIDDQBBACEEIAIQ3AwNASACKAIQIQMLAkAgAyACKAIUIgVrIAFPDQAgAiAAIAEgAigCJBEEAA8LQQAhBgJAIAIsAEtBAEgNACABIQQDQCAEIgNFDQEgACADQX9qIgRqLQAAQQpHDQALIAIgACADIAIoAiQRBAAiBCADSQ0BIAEgA2shASAAIANqIQAgAigCFCEFIAMhBgsgBSAAIAEQ2QwaIAIgAigCFCABajYCFCAGIAFqIQQLIAQLWwECfyACIAFsIQQCQAJAIAMoAkxBf0oNACAAIAQgAxDdDCEADAELIAMQ3wwhBSAAIAQgAxDdDCEAIAVFDQAgAxDgDAsCQCAAIARHDQAgAkEAIAEbDwsgACABbgsEAEEBCwIAC5wBAQN/IAAhAQJAAkAgAEEDcUUNAAJAIAAtAAANACAAIABrDwsgACEBA0AgAUEBaiIBQQNxRQ0BIAEtAABFDQIMAAALAAsDQCABIgJBBGohASACKAIAIgNBf3MgA0H//ft3anFBgIGChHhxRQ0ACwJAIANB/wFxDQAgAiAAaw8LA0AgAi0AASEDIAJBAWoiASECIAMNAAsLIAEgAGsLBAAjAAsUAQF/IAAiASMCSQRAECoLIAEkAAshAQN/AkAjACAAa0FwcSIBIgMjAkkEQBAqCyADJAALIAELIAACQEEAKAKwxgENAEEAIAE2ArTGAUEAIAA2ArDGAQsLBgAgACQCCwYAIABAAAsLACABIAIgABEBAAsRACABIAIgAyAEIAUgABEVAAsLACABIAIgABEPAAsNACABIAIgAyAAERIACykAIAEgAiADIAQgBSAGIAcgCCAJIAogCyAMIA0gDiAPIBAgESAAESUACwkAIAEgABEDAAsTACABIAIgAyAEIAUgBiAAESQACwkAIAEgABEAAAsHACAAEQYACxMAIAEgAiADIAQgBSAGIAARIAALDQAgASACIAMgABEEAAsNACABIAIgAyAAERoACxEAIAEgAiADIAQgBSAAERsACw8AIAEgAiADIAQgABENAAsLACABIAIgABECAAsPACABIAIgAyAEIAARCgALEQAgASACIAMgBCAFIAARCAALFwAgASACIAMgBCAFIAYgByAIIAARDAALEwAgASACIAMgBCAFIAYgABEFAAsRACABIAIgAyAEIAUgABEWAAsRACABIAIgAyAEIAUgABEfAAsTACABIAIgAyAEIAUgBiAAER4ACxUAIAEgAiADIAQgBSAGIAcgABEQAAsVACABIAIgAyAEIAUgBiAHIAARGAALEwAgASACIAMgBCAFIAYgABEJAAsRACABIAIgAyAEIAUgABEOAAskAQF+IAAgASACrSADrUIghoQgBBDzDCEFIAVCIIinECsgBacLGQAgACABIAIgA60gBK1CIIaEIAUgBhD0DAsZACAAIAEgAiADIAQgBa0gBq1CIIaEEPsMCyMAIAAgASACIAMgBCAFrSAGrUIghoQgB60gCK1CIIaEEP0MCyUAIAAgASACIAMgBCAFIAatIAetQiCGhCAIrSAJrUIghoQQ/wwLEwAgACABpyABQiCIpyACIAMQLAsLwb4BAwBBgAgL5IcBJWYgJWYgJWYgJWYKACVmICVmICVmICVmCgBhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAAAA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JBYAAFwAAABdAAAAaW9zX2Jhc2U6OmNsZWFyAE5TdDNfXzI4aW9zX2Jhc2VFAAAADEcAABAWAAAAAAAAaBYAAF4AAABfAAAATlN0M19fMjliYXNpY19pb3NJY05TXzExY2hhcl90cmFpdHNJY0VFRUUAAAA0RwAAPBYAACQWAAAAAAAAsBYAAGAAAABhAAAATlN0M19fMjliYXNpY19pb3NJd05TXzExY2hhcl90cmFpdHNJd0VFRUUAAAA0RwAAhBYAACQWAABOU3QzX18yMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUUAAAAADEcAALwWAABOU3QzX18yMTViYXNpY19zdHJlYW1idWZJd05TXzExY2hhcl90cmFpdHNJd0VFRUUAAAAADEcAAPgWAABOU3QzX18yMTNiYXNpY19pc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAACQRwAANBcAAAAAAAABAAAAaBYAAAP0//9OU3QzX18yMTNiYXNpY19pc3RyZWFtSXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFAACQRwAAfBcAAAAAAAABAAAAsBYAAAP0//9OU3QzX18yMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAACQRwAAxBcAAAAAAAABAAAAaBYAAAP0//9OU3QzX18yMTNiYXNpY19vc3RyZWFtSXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFAACQRwAADBgAAAAAAAABAAAAsBYAAAP0//9gSQAA8EkAAAAAAAC0GAAAMAAAAGYAAABnAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAaAAAAGkAAABqAAAAPAAAAD0AAABOU3QzX18yMTBfX3N0ZGluYnVmSWNFRQA0RwAAnBgAAPAWAAB1bnN1cHBvcnRlZCBsb2NhbGUgZm9yIHN0YW5kYXJkIGlucHV0AAAAAAAAAEAZAAA+AAAAawAAAGwAAABBAAAAQgAAAEMAAABEAAAARQAAAEYAAABtAAAAbgAAAG8AAABKAAAASwAAAE5TdDNfXzIxMF9fc3RkaW5idWZJd0VFADRHAAAoGQAALBcAAAAAAACoGQAAMAAAAHAAAABxAAAAMwAAADQAAAA1AAAAcgAAADcAAAA4AAAAOQAAADoAAAA7AAAAcwAAAHQAAABOU3QzX18yMTFfX3N0ZG91dGJ1ZkljRUUAAAAANEcAAIwZAADwFgAAAAAAABAaAAA+AAAAdQAAAHYAAABBAAAAQgAAAEMAAAB3AAAARQAAAEYAAABHAAAASAAAAEkAAAB4AAAAeQAAAE5TdDNfXzIxMV9fc3Rkb3V0YnVmSXdFRQAAAAA0RwAA9BkAACwXAABpbmZpbml0eQBuYW4AAAAAAAAAANF0ngBXnb0qgHBSD///PicKAAAAZAAAAOgDAAAQJwAAoIYBAEBCDwCAlpgAAOH1BRgAAAA1AAAAcQAAAGv////O+///kr///wAAAAAAAAAA/////////////////////////////////////////////////////////////////wABAgMEBQYHCAn/////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP///////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAQIEBwMGBQAAAAAAAAACAADAAwAAwAQAAMAFAADABgAAwAcAAMAIAADACQAAwAoAAMALAADADAAAwA0AAMAOAADADwAAwBAAAMARAADAEgAAwBMAAMAUAADAFQAAwBYAAMAXAADAGAAAwBkAAMAaAADAGwAAwBwAAMAdAADAHgAAwB8AAMAAAACzAQAAwwIAAMMDAADDBAAAwwUAAMMGAADDBwAAwwgAAMMJAADDCgAAwwsAAMMMAADDDQAA0w4AAMMPAADDAAAMuwEADMMCAAzDAwAMwwQADNMAAAAA3hIElQAAAAD///////////////9gHAAAFAAAAEMuVVRGLTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAATENfQUxMAAAAAAAAAAAAAExDX0NUWVBFAAAAAExDX05VTUVSSUMAAExDX1RJTUUAAAAAAExDX0NPTExBVEUAAExDX01PTkVUQVJZAExDX01FU1NBR0VTAExBTkcAQy5VVEYtOABQT1NJWABNVVNMX0xPQ1BBVEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAMgAiACIAIgAiACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgABYATABMAEwATABMAEwATABMAEwATABMAEwATABMAEwAjYCNgI2AjYCNgI2AjYCNgI2AjYBMAEwATABMAEwATABMAI1QjVCNUI1QjVCNUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFCMUIxQjFBMAEwATABMAEwATACNYI1gjWCNYI1gjWCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgjGCMYIxgTABMAEwATAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8CIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAAFQAAABYAAAAXAAAAGAAAABkAAAAaAAAAGwAAABwAAAAdAAAAHgAAAB8AAAAgAAAAIQAAACIAAAAjAAAAJAAAACUAAAAmAAAAJwAAACgAAAApAAAAKgAAACsAAAAsAAAALQAAAC4AAAAvAAAAMAAAADEAAAAyAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAOQAAADoAAAA7AAAAPAAAAD0AAAA+AAAAPwAAAEAAAABBAAAAQgAAAEMAAABEAAAARQAAAEYAAABHAAAASAAAAEkAAABKAAAASwAAAEwAAABNAAAATgAAAE8AAABQAAAAUQAAAFIAAABTAAAAVAAAAFUAAABWAAAAVwAAAFgAAABZAAAAWgAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAAEEAAABCAAAAQwAAAEQAAABFAAAARgAAAEcAAABIAAAASQAAAEoAAABLAAAATAAAAE0AAABOAAAATwAAAFAAAABRAAAAUgAAAFMAAABUAAAAVQAAAFYAAABXAAAAWAAAAFkAAABaAAAAewAAAHwAAAB9AAAAfgAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACQAAAAlAAAAJgAAACcAAAAoAAAAKQAAACoAAAArAAAALAAAAC0AAAAuAAAALwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAAA6AAAAOwAAADwAAAA9AAAAPgAAAD8AAABAAAAAYQAAAGIAAABjAAAAZAAAAGUAAABmAAAAZwAAAGgAAABpAAAAagAAAGsAAABsAAAAbQAAAG4AAABvAAAAcAAAAHEAAAByAAAAcwAAAHQAAAB1AAAAdgAAAHcAAAB4AAAAeQAAAHoAAABbAAAAXAAAAF0AAABeAAAAXwAAAGAAAABhAAAAYgAAAGMAAABkAAAAZQAAAGYAAABnAAAAaAAAAGkAAABqAAAAawAAAGwAAABtAAAAbgAAAG8AAABwAAAAcQAAAHIAAABzAAAAdAAAAHUAAAB2AAAAdwAAAHgAAAB5AAAAegAAAHsAAAB8AAAAfQAAAH4AAAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMTIzNDU2Nzg5YWJjZGVmQUJDREVGeFgrLXBQaUluTgAlcABsAGxsAABMACUAAAAAACVwAAAAACVJOiVNOiVTICVwJUg6JU0AAAAAAAAAACUAAABtAAAALwAAACUAAABkAAAALwAAACUAAAB5AAAAJQAAAFkAAAAtAAAAJQAAAG0AAAAtAAAAJQAAAGQAAAAlAAAASQAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAACAAAAAlAAAAcAAAAAAAAAAlAAAASAAAADoAAAAlAAAATQAAAAAAAAAAAAAAAAAAACUAAABIAAAAOgAAACUAAABNAAAAOgAAACUAAABTAAAAJUxmADAxMjM0NTY3ODkAJS4wTGYAQwAAAAAAAIgzAACOAAAAjwAAAJAAAAAAAAAA6DMAAJEAAACSAAAAkAAAAJMAAACUAAAAlQAAAJYAAACXAAAAmAAAAJkAAACaAAAAAAAAAFAzAACbAAAAnAAAAJAAAACdAAAAngAAAJ8AAACgAAAAoQAAAKIAAACjAAAAAAAAACA0AACkAAAApQAAAJAAAACmAAAApwAAAKgAAACpAAAAqgAAAAAAAABENAAAqwAAAKwAAACQAAAArQAAAK4AAACvAAAAsAAAALEAAAB0cnVlAAAAAHQAAAByAAAAdQAAAGUAAAAAAAAAZmFsc2UAAABmAAAAYQAAAGwAAABzAAAAZQAAAAAAAAAlbS8lZC8leQAAAAAlAAAAbQAAAC8AAAAlAAAAZAAAAC8AAAAlAAAAeQAAAAAAAAAlSDolTTolUwAAAAAlAAAASAAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAAAAAAAAlYSAlYiAlZCAlSDolTTolUyAlWQAAAAAlAAAAYQAAACAAAAAlAAAAYgAAACAAAAAlAAAAZAAAACAAAAAlAAAASAAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAACAAAAAlAAAAWQAAAAAAAAAlSTolTTolUyAlcAAlAAAASQAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAACAAAAAlAAAAcAAAAAAAAAAAAAAAUDAAALIAAACzAAAAkAAAAE5TdDNfXzI2bG9jYWxlNWZhY2V0RQAAADRHAAA4MAAAfEUAAAAAAADQMAAAsgAAALQAAACQAAAAtQAAALYAAAC3AAAAuAAAALkAAAC6AAAAuwAAALwAAAC9AAAAvgAAAL8AAADAAAAATlN0M19fMjVjdHlwZUl3RUUATlN0M19fMjEwY3R5cGVfYmFzZUUAAAxHAACyMAAAkEcAAKAwAAAAAAAAAgAAAFAwAAACAAAAyDAAAAIAAAAAAAAAZDEAALIAAADBAAAAkAAAAMIAAADDAAAAxAAAAMUAAADGAAAAxwAAAMgAAABOU3QzX18yN2NvZGVjdnRJY2MxMV9fbWJzdGF0ZV90RUUATlN0M19fMjEyY29kZWN2dF9iYXNlRQAAAAAMRwAAQjEAAJBHAAAgMQAAAAAAAAIAAABQMAAAAgAAAFwxAAACAAAAAAAAANgxAACyAAAAyQAAAJAAAADKAAAAywAAAMwAAADNAAAAzgAAAM8AAADQAAAATlN0M19fMjdjb2RlY3Z0SURzYzExX19tYnN0YXRlX3RFRQAAkEcAALQxAAAAAAAAAgAAAFAwAAACAAAAXDEAAAIAAAAAAAAATDIAALIAAADRAAAAkAAAANIAAADTAAAA1AAAANUAAADWAAAA1wAAANgAAABOU3QzX18yN2NvZGVjdnRJRGljMTFfX21ic3RhdGVfdEVFAACQRwAAKDIAAAAAAAACAAAAUDAAAAIAAABcMQAAAgAAAAAAAADAMgAAsgAAANkAAACQAAAA0gAAANMAAADUAAAA1QAAANYAAADXAAAA2AAAAE5TdDNfXzIxNl9fbmFycm93X3RvX3V0ZjhJTG0zMkVFRQAAADRHAACcMgAATDIAAAAAAAAgMwAAsgAAANoAAACQAAAA0gAAANMAAADUAAAA1QAAANYAAADXAAAA2AAAAE5TdDNfXzIxN19fd2lkZW5fZnJvbV91dGY4SUxtMzJFRUUAADRHAAD8MgAATDIAAE5TdDNfXzI3Y29kZWN2dEl3YzExX19tYnN0YXRlX3RFRQAAAJBHAAAsMwAAAAAAAAIAAABQMAAAAgAAAFwxAAACAAAATlN0M19fMjZsb2NhbGU1X19pbXBFAAAANEcAAHAzAABQMAAATlN0M19fMjdjb2xsYXRlSWNFRQA0RwAAlDMAAFAwAABOU3QzX18yN2NvbGxhdGVJd0VFADRHAAC0MwAAUDAAAE5TdDNfXzI1Y3R5cGVJY0VFAAAAkEcAANQzAAAAAAAAAgAAAFAwAAACAAAAyDAAAAIAAABOU3QzX18yOG51bXB1bmN0SWNFRQAAAAA0RwAACDQAAFAwAABOU3QzX18yOG51bXB1bmN0SXdFRQAAAAA0RwAALDQAAFAwAAAAAAAAqDMAANsAAADcAAAAkAAAAN0AAADeAAAA3wAAAAAAAADIMwAA4AAAAOEAAACQAAAA4gAAAOMAAADkAAAAAAAAAGQ1AACyAAAA5QAAAJAAAADmAAAA5wAAAOgAAADpAAAA6gAAAOsAAADsAAAA7QAAAO4AAADvAAAA8AAAAE5TdDNfXzI3bnVtX2dldEljTlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFRUUATlN0M19fMjlfX251bV9nZXRJY0VFAE5TdDNfXzIxNF9fbnVtX2dldF9iYXNlRQAADEcAACo1AACQRwAAFDUAAAAAAAABAAAARDUAAAAAAACQRwAA0DQAAAAAAAACAAAAUDAAAAIAAABMNQAAAAAAAAAAAAA4NgAAsgAAAPEAAACQAAAA8gAAAPMAAAD0AAAA9QAAAPYAAAD3AAAA+AAAAPkAAAD6AAAA+wAAAPwAAABOU3QzX18yN251bV9nZXRJd05TXzE5aXN0cmVhbWJ1Zl9pdGVyYXRvckl3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRUVFAE5TdDNfXzI5X19udW1fZ2V0SXdFRQAAAJBHAAAINgAAAAAAAAEAAABENQAAAAAAAJBHAADENQAAAAAAAAIAAABQMAAAAgAAACA2AAAAAAAAAAAAACA3AACyAAAA/QAAAJAAAAD+AAAA/wAAAAABAAABAQAAAgEAAAMBAAAEAQAABQEAAE5TdDNfXzI3bnVtX3B1dEljTlNfMTlvc3RyZWFtYnVmX2l0ZXJhdG9ySWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFRUUATlN0M19fMjlfX251bV9wdXRJY0VFAE5TdDNfXzIxNF9fbnVtX3B1dF9iYXNlRQAADEcAAOY2AACQRwAA0DYAAAAAAAABAAAAADcAAAAAAACQRwAAjDYAAAAAAAACAAAAUDAAAAIAAAAINwAAAAAAAAAAAADoNwAAsgAAAAYBAACQAAAABwEAAAgBAAAJAQAACgEAAAsBAAAMAQAADQEAAA4BAABOU3QzX18yN251bV9wdXRJd05TXzE5b3N0cmVhbWJ1Zl9pdGVyYXRvckl3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRUVFAE5TdDNfXzI5X19udW1fcHV0SXdFRQAAAJBHAAC4NwAAAAAAAAEAAAAANwAAAAAAAJBHAAB0NwAAAAAAAAIAAABQMAAAAgAAANA3AAAAAAAAAAAAAOg4AAAPAQAAEAEAAJAAAAARAQAAEgEAABMBAAAUAQAAFQEAABYBAAAXAQAA+P///+g4AAAYAQAAGQEAABoBAAAbAQAAHAEAAB0BAAAeAQAATlN0M19fMjh0aW1lX2dldEljTlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFRUUATlN0M19fMjl0aW1lX2Jhc2VFAAxHAAChOAAATlN0M19fMjIwX190aW1lX2dldF9jX3N0b3JhZ2VJY0VFAAAADEcAALw4AACQRwAAXDgAAAAAAAADAAAAUDAAAAIAAAC0OAAAAgAAAOA4AAAACAAAAAAAANQ5AAAfAQAAIAEAAJAAAAAhAQAAIgEAACMBAAAkAQAAJQEAACYBAAAnAQAA+P///9Q5AAAoAQAAKQEAACoBAAArAQAALAEAAC0BAAAuAQAATlN0M19fMjh0aW1lX2dldEl3TlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFRUUATlN0M19fMjIwX190aW1lX2dldF9jX3N0b3JhZ2VJd0VFAAAMRwAAqTkAAJBHAABkOQAAAAAAAAMAAABQMAAAAgAAALQ4AAACAAAAzDkAAAAIAAAAAAAAeDoAAC8BAAAwAQAAkAAAADEBAABOU3QzX18yOHRpbWVfcHV0SWNOU18xOW9zdHJlYW1idWZfaXRlcmF0b3JJY05TXzExY2hhcl90cmFpdHNJY0VFRUVFRQBOU3QzX18yMTBfX3RpbWVfcHV0RQAAAAxHAABZOgAAkEcAABQ6AAAAAAAAAgAAAFAwAAACAAAAcDoAAAAIAAAAAAAA+DoAADIBAAAzAQAAkAAAADQBAABOU3QzX18yOHRpbWVfcHV0SXdOU18xOW9zdHJlYW1idWZfaXRlcmF0b3JJd05TXzExY2hhcl90cmFpdHNJd0VFRUVFRQAAAACQRwAAsDoAAAAAAAACAAAAUDAAAAIAAABwOgAAAAgAAAAAAACMOwAAsgAAADUBAACQAAAANgEAADcBAAA4AQAAOQEAADoBAAA7AQAAPAEAAD0BAAA+AQAATlN0M19fMjEwbW9uZXlwdW5jdEljTGIwRUVFAE5TdDNfXzIxMG1vbmV5X2Jhc2VFAAAAAAxHAABsOwAAkEcAAFA7AAAAAAAAAgAAAFAwAAACAAAAhDsAAAIAAAAAAAAAADwAALIAAAA/AQAAkAAAAEABAABBAQAAQgEAAEMBAABEAQAARQEAAEYBAABHAQAASAEAAE5TdDNfXzIxMG1vbmV5cHVuY3RJY0xiMUVFRQCQRwAA5DsAAAAAAAACAAAAUDAAAAIAAACEOwAAAgAAAAAAAAB0PAAAsgAAAEkBAACQAAAASgEAAEsBAABMAQAATQEAAE4BAABPAQAAUAEAAFEBAABSAQAATlN0M19fMjEwbW9uZXlwdW5jdEl3TGIwRUVFAJBHAABYPAAAAAAAAAIAAABQMAAAAgAAAIQ7AAACAAAAAAAAAOg8AACyAAAAUwEAAJAAAABUAQAAVQEAAFYBAABXAQAAWAEAAFkBAABaAQAAWwEAAFwBAABOU3QzX18yMTBtb25leXB1bmN0SXdMYjFFRUUAkEcAAMw8AAAAAAAAAgAAAFAwAAACAAAAhDsAAAIAAAAAAAAAjD0AALIAAABdAQAAkAAAAF4BAABfAQAATlN0M19fMjltb25leV9nZXRJY05TXzE5aXN0cmVhbWJ1Zl9pdGVyYXRvckljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRUVFAE5TdDNfXzIxMV9fbW9uZXlfZ2V0SWNFRQAADEcAAGo9AACQRwAAJD0AAAAAAAACAAAAUDAAAAIAAACEPQAAAAAAAAAAAAAwPgAAsgAAAGABAACQAAAAYQEAAGIBAABOU3QzX18yOW1vbmV5X2dldEl3TlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFRUUATlN0M19fMjExX19tb25leV9nZXRJd0VFAAAMRwAADj4AAJBHAADIPQAAAAAAAAIAAABQMAAAAgAAACg+AAAAAAAAAAAAANQ+AACyAAAAYwEAAJAAAABkAQAAZQEAAE5TdDNfXzI5bW9uZXlfcHV0SWNOU18xOW9zdHJlYW1idWZfaXRlcmF0b3JJY05TXzExY2hhcl90cmFpdHNJY0VFRUVFRQBOU3QzX18yMTFfX21vbmV5X3B1dEljRUUAAAxHAACyPgAAkEcAAGw+AAAAAAAAAgAAAFAwAAACAAAAzD4AAAAAAAAAAAAAeD8AALIAAABmAQAAkAAAAGcBAABoAQAATlN0M19fMjltb25leV9wdXRJd05TXzE5b3N0cmVhbWJ1Zl9pdGVyYXRvckl3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRUVFAE5TdDNfXzIxMV9fbW9uZXlfcHV0SXdFRQAADEcAAFY/AACQRwAAED8AAAAAAAACAAAAUDAAAAIAAABwPwAAAAAAAAAAAADwPwAAsgAAAGkBAACQAAAAagEAAGsBAABsAQAATlN0M19fMjhtZXNzYWdlc0ljRUUATlN0M19fMjEzbWVzc2FnZXNfYmFzZUUAAAAADEcAAM0/AACQRwAAuD8AAAAAAAACAAAAUDAAAAIAAADoPwAAAgAAAAAAAABIQAAAsgAAAG0BAACQAAAAbgEAAG8BAABwAQAATlN0M19fMjhtZXNzYWdlc0l3RUUAAAAAkEcAADBAAAAAAAAAAgAAAFAwAAACAAAA6D8AAAIAAABTdW5kYXkATW9uZGF5AFR1ZXNkYXkAV2VkbmVzZGF5AFRodXJzZGF5AEZyaWRheQBTYXR1cmRheQBTdW4ATW9uAFR1ZQBXZWQAVGh1AEZyaQBTYXQAAAAAUwAAAHUAAABuAAAAZAAAAGEAAAB5AAAAAAAAAE0AAABvAAAAbgAAAGQAAABhAAAAeQAAAAAAAABUAAAAdQAAAGUAAABzAAAAZAAAAGEAAAB5AAAAAAAAAFcAAABlAAAAZAAAAG4AAABlAAAAcwAAAGQAAABhAAAAeQAAAAAAAABUAAAAaAAAAHUAAAByAAAAcwAAAGQAAABhAAAAeQAAAAAAAABGAAAAcgAAAGkAAABkAAAAYQAAAHkAAAAAAAAAUwAAAGEAAAB0AAAAdQAAAHIAAABkAAAAYQAAAHkAAAAAAAAAUwAAAHUAAABuAAAAAAAAAE0AAABvAAAAbgAAAAAAAABUAAAAdQAAAGUAAAAAAAAAVwAAAGUAAABkAAAAAAAAAFQAAABoAAAAdQAAAAAAAABGAAAAcgAAAGkAAAAAAAAAUwAAAGEAAAB0AAAAAAAAAEphbnVhcnkARmVicnVhcnkATWFyY2gAQXByaWwATWF5AEp1bmUASnVseQBBdWd1c3QAU2VwdGVtYmVyAE9jdG9iZXIATm92ZW1iZXIARGVjZW1iZXIASmFuAEZlYgBNYXIAQXByAEp1bgBKdWwAQXVnAFNlcABPY3QATm92AERlYwAAAEoAAABhAAAAbgAAAHUAAABhAAAAcgAAAHkAAAAAAAAARgAAAGUAAABiAAAAcgAAAHUAAABhAAAAcgAAAHkAAAAAAAAATQAAAGEAAAByAAAAYwAAAGgAAAAAAAAAQQAAAHAAAAByAAAAaQAAAGwAAAAAAAAATQAAAGEAAAB5AAAAAAAAAEoAAAB1AAAAbgAAAGUAAAAAAAAASgAAAHUAAABsAAAAeQAAAAAAAABBAAAAdQAAAGcAAAB1AAAAcwAAAHQAAAAAAAAAUwAAAGUAAABwAAAAdAAAAGUAAABtAAAAYgAAAGUAAAByAAAAAAAAAE8AAABjAAAAdAAAAG8AAABiAAAAZQAAAHIAAAAAAAAATgAAAG8AAAB2AAAAZQAAAG0AAABiAAAAZQAAAHIAAAAAAAAARAAAAGUAAABjAAAAZQAAAG0AAABiAAAAZQAAAHIAAAAAAAAASgAAAGEAAABuAAAAAAAAAEYAAABlAAAAYgAAAAAAAABNAAAAYQAAAHIAAAAAAAAAQQAAAHAAAAByAAAAAAAAAEoAAAB1AAAAbgAAAAAAAABKAAAAdQAAAGwAAAAAAAAAQQAAAHUAAABnAAAAAAAAAFMAAABlAAAAcAAAAAAAAABPAAAAYwAAAHQAAAAAAAAATgAAAG8AAAB2AAAAAAAAAEQAAABlAAAAYwAAAAAAAABBTQBQTQAAAEEAAABNAAAAAAAAAFAAAABNAAAAAAAAAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAAAAAAOA4AAAYAQAAGQEAABoBAAAbAQAAHAEAAB0BAAAeAQAAAAAAAMw5AAAoAQAAKQEAACoBAAArAQAALAEAAC0BAAAuAQAAAAAAAHxFAABxAQAAcgEAAHMBAABOU3QzX18yMTRfX3NoYXJlZF9jb3VudEUAAAAADEcAAGBFAABiYXNpY19zdHJpbmcAdmVjdG9yAF9fY3hhX2d1YXJkX2FjcXVpcmUgZGV0ZWN0ZWQgcmVjdXJzaXZlIGluaXRpYWxpemF0aW9uAFB1cmUgdmlydHVhbCBmdW5jdGlvbiBjYWxsZWQhAHN0ZDo6ZXhjZXB0aW9uAAAAAAAAIEYAAHQBAAB1AQAAdgEAAFN0OWV4Y2VwdGlvbgAAAAAMRwAAEEYAAAAAAABMRgAAJwAAAHcBAAB4AQAAU3QxMWxvZ2ljX2Vycm9yADRHAAA8RgAAIEYAAAAAAACARgAAJwAAAHkBAAB4AQAAU3QxMmxlbmd0aF9lcnJvcgAAAAA0RwAAbEYAAExGAABTdDl0eXBlX2luZm8AAAAADEcAAIxGAABOMTBfX2N4eGFiaXYxMTZfX3NoaW1fdHlwZV9pbmZvRQAAAAA0RwAApEYAAJxGAABOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAAAA0RwAA1EYAAMhGAAAAAAAA+EYAAHoBAAB7AQAAfAEAAH0BAAB+AQAAfwEAAIABAACBAQAAAAAAAHxHAAB6AQAAggEAAHwBAAB9AQAAfgEAAIMBAACEAQAAhQEAAE4xMF9fY3h4YWJpdjEyMF9fc2lfY2xhc3NfdHlwZV9pbmZvRQAAAAA0RwAAVEcAAPhGAAAAAAAA2EcAAHoBAACGAQAAfAEAAH0BAAB+AQAAhwEAAIgBAACJAQAATjEwX19jeHhhYml2MTIxX192bWlfY2xhc3NfdHlwZV9pbmZvRQAAADRHAACwRwAA+EYAAABB6I8BC5wFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAC0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4AAAAvAAAA1EwAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAC0AAAAAAAAAAAAAAAAAAAAAAAAAYgAAAAAAAAAvAAAA6EwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4AAABkAAAA+FAAAAAEAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAr/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBJAAAAQZCVAQuoMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    var binary = tryParseAsDataURI(wasmBinaryFile);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return new Promise(function(resolve, reject) {
    resolve(getBinary());
  });
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module['asm'] = exports;
    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}


// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};




// STATICTOP = STATIC_BASE + 24544;
/* global initializers */  __ATINIT__.push({ func: function() { ___wasm_call_ctors() } });




/* no memory initializer */
// {{PRE_LIBRARY}}


  function abortStackOverflow(allocSize) {
      abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          err = e;
        }
        if (!err.stack) {
          return '(no stack trace available)';
        }
      }
      return err.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }

  
  function _atexit(func, arg) {
      warnOnce('atexit() called, but EXIT_RUNTIME is not set, so atexits() will not be called. set EXIT_RUNTIME to 1 (see the FAQ)');
      __ATEXIT__.unshift({ func: func, arg: arg });
    }function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  
  var ___exception_infos={};
  
  var ___exception_last=0;
  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return __ZSt18uncaught_exceptionv.uncaught_exceptions > 0;
    }function ___cxa_throw(ptr, type, destructor) {
      ___exception_infos[ptr] = {
        ptr: ptr,
        adjusted: [ptr],
        type: type,
        destructor: destructor,
        refcount: 0,
        caught: false,
        rethrown: false
      };
      ___exception_last = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exceptions++;
      }
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }

  function ___handle_stack_overflow() {
      abort('stack overflow')
    }

  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)]=value;
      return value;
    }function ___map_file(pathname, size) {
      setErrNo(63);
      return -1;
    }

  
  
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        return;
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position); // Use typed array write if available.
          else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          // We don't currently support location hints for the address of the mapping
          assert(address === 0);
  
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var ERRNO_MESSAGES={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return setErrNo(e.errno);
      },lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(10);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else
        {}
        if (!random_device) {
          // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
          random_device = function() { abort("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        var stdout = FS.open('/dev/stdout', 'w');
        var stderr = FS.open('/dev/stderr', 'w');
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },standardizePath:function(path) {
        return PATH.normalize(path);
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          setErrNo(ret.error);
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) setErrNo(29);
        return success;
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)]=tempI64[0],HEAP32[(((buf)+(44))>>2)]=tempI64[1]);
        HEAP32[(((buf)+(48))>>2)]=4096;
        HEAP32[(((buf)+(52))>>2)]=stat.blocks;
        HEAP32[(((buf)+(56))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)]=0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)]=tempI64[0],HEAP32[(((buf)+(84))>>2)]=tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};function syscallMunmap(addr, len) {
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (info.prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        }
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _abort() {
      abort();
    }

  function _emscripten_get_sbrk_ptr() {
      return 25408;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  
  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  
  
  var Browser={mainLoop:{scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function() {
          Browser.mainLoop.scheduler = null;
          Browser.mainLoop.currentlyRunningMainloop++; // Incrementing this signals the previous main loop that it's now become old, and it must return.
        },resume:function() {
          Browser.mainLoop.currentlyRunningMainloop++;
          var timingMode = Browser.mainLoop.timingMode;
          var timingValue = Browser.mainLoop.timingValue;
          var func = Browser.mainLoop.func;
          Browser.mainLoop.func = null;
          _emscripten_set_main_loop(func, 0, false, Browser.mainLoop.arg, true /* do not set timing and call scheduler, we will do it on the next lines */);
          _emscripten_set_main_loop_timing(timingMode, timingValue);
          Browser.mainLoop.scheduler();
        },updateStatus:function() {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        },runIter:function(func) {
          if (ABORT) return;
          if (Module['preMainLoop']) {
            var preRet = Module['preMainLoop']();
            if (preRet === false) {
              return; // |return false| skips a frame
            }
          }
          try {
            func();
          } catch (e) {
            if (e instanceof ExitStatus) {
              return;
            } else {
              if (e && typeof e === 'object' && e.stack) err('exception thrown: ' + [e, e.stack]);
              throw e;
            }
          }
          if (Module['postMainLoop']) Module['postMainLoop']();
        }},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function() {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
  
        if (Browser.initted) return;
        Browser.initted = true;
  
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            assert(typeof url == 'string', 'createObjectURL must return a url as a string');
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
  
  
        // Canvas event setup
  
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === Module['canvas'] ||
                                document['mozPointerLockElement'] === Module['canvas'] ||
                                document['webkitPointerLockElement'] === Module['canvas'] ||
                                document['msPointerLockElement'] === Module['canvas'];
        }
        var canvas = Module['canvas'];
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                      canvas['mozRequestPointerLock'] ||
                                      canvas['webkitRequestPointerLock'] ||
                                      canvas['msRequestPointerLock'] ||
                                      function(){};
          canvas.exitPointerLock = document['exitPointerLock'] ||
                                   document['mozExitPointerLock'] ||
                                   document['webkitExitPointerLock'] ||
                                   document['msExitPointerLock'] ||
                                   function(){}; // no-op if function does not exist
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener("click", function(ev) {
              if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
                Module['canvas'].requestPointerLock();
                ev.preventDefault();
              }
            }, false);
          }
        }
      },createContext:function(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: (typeof WebGL2RenderingContext !== 'undefined') ? 2 : 1,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL !== 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          if (!useWebGL) assert(typeof GLctx === 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
  
          Module.ctx = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function(canvas, useWebGL, setInModule) {},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Module['canvas'];
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullscreen);
          if (Module['onFullscreen']) Module['onFullscreen'](Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullscreen'] ? function() { canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null) ||
                                           (canvasContainer['webkitRequestFullScreen'] ? function() { canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
  
        canvasContainer.requestFullscreen();
      },requestFullScreen:function() {
        abort('Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)');
      },exitFullscreen:function() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause "TypeError: Document not active"
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['msExitFullscreen'] ||
                  document['webkitCancelFullScreen'] ||
            (function() {});
        CFS.apply(document, []);
        return true;
      },nextRAF:0,fakeRequestAnimationFrame:function(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (Browser.nextRAF === 0) {
          Browser.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= Browser.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            Browser.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay);
      },requestAnimationFrame:function(func) {
        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func);
      },safeCallback:function(func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },allowAsyncCallbacks:true,queuedAsyncCallbacks:[],pauseAsyncCallbacks:function() {
        Browser.allowAsyncCallbacks = false;
      },resumeAsyncCallbacks:function() { // marks future callbacks as ok to execute, and synchronously runs any remaining ones right now
        Browser.allowAsyncCallbacks = true;
        if (Browser.queuedAsyncCallbacks.length > 0) {
          var callbacks = Browser.queuedAsyncCallbacks;
          Browser.queuedAsyncCallbacks = [];
          callbacks.forEach(function(func) {
            func();
          });
        }
      },safeRequestAnimationFrame:function(func) {
        return Browser.requestAnimationFrame(function() {
          if (ABORT) return;
          if (Browser.allowAsyncCallbacks) {
            func();
          } else {
            Browser.queuedAsyncCallbacks.push(func);
          }
        });
      },safeSetTimeout:function(func, timeout) {
        noExitRuntime = true;
        return setTimeout(function() {
          if (ABORT) return;
          if (Browser.allowAsyncCallbacks) {
            func();
          } else {
            Browser.queuedAsyncCallbacks.push(func);
          }
        }, timeout);
      },safeSetInterval:function(func, timeout) {
        noExitRuntime = true;
        return setInterval(function() {
          if (ABORT) return;
          if (Browser.allowAsyncCallbacks) {
            func();
          } // drop it on the floor otherwise, next interval will kick in
        }, timeout);
      },getMimetype:function(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function(func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function(event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function(event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },getMouseWheelDelta:function(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch(event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
  
          // check if SDL is available
          if (typeof SDL != "undefined") {
            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
            // just add the mouse delta to the current absolut mouse position
            // FIXME: ideally this should be clamped against the canvas size and zero
            Browser.mouseX += Browser.mouseMovementX;
            Browser.mouseY += Browser.mouseMovementY;
          }
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
  
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
          // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
          // and we have no viable fallback.
          assert((typeof scrollX !== 'undefined') && (typeof scrollY !== 'undefined'), 'Unable to retrieve scroll position, mouse positions likely broken.');
  
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the "touch" property is only defined in SDL
  
            }
            var adjustedX = touch.pageX - (scrollX + rect.left);
            var adjustedY = touch.pageY - (scrollY + rect.top);
  
            adjustedX = adjustedX * (cw / rect.width);
            adjustedY = adjustedY * (ch / rect.height);
  
            var coords = { x: adjustedX, y: adjustedY };
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              if (!last) last = coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          var x = event.pageX - (scrollX + rect.left);
          var y = event.pageY - (scrollY + rect.top);
  
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
  
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },asyncLoad:function(url, onload, onerror, noRunDep) {
        var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
        readAsync(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (dep) removeRunDependency(dep);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (dep) addRunDependency(dep);
      },resizeListeners:[],updateResizeListeners:function() {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function(width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)]=flags
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)]=flags
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },updateCanvasDimensions:function(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
             document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      },wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle:function() {
        var handle = Browser.nextWgetRequestHandle;
        Browser.nextWgetRequestHandle++;
        return handle;
      }};function _emscripten_set_main_loop_timing(mode, value) {
      Browser.mainLoop.timingMode = mode;
      Browser.mainLoop.timingValue = value;
  
      if (!Browser.mainLoop.func) {
        console.error('emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.');
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (mode == 0 /*EM_TIMING_SETTIMEOUT*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(Browser.mainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
        Browser.mainLoop.method = 'timeout';
      } else if (mode == 1 /*EM_TIMING_RAF*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      } else if (mode == 2 /*EM_TIMING_SETIMMEDIATE*/) {
        if (typeof setImmediate === 'undefined') {
          // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
          var setImmediates = [];
          var emscriptenMainLoopMessageId = 'setimmediate';
          var Browser_setImmediate_messageHandler = function(event) {
            // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
            // so check for both cases.
            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
              event.stopPropagation();
              setImmediates.shift()();
            }
          }
          addEventListener("message", Browser_setImmediate_messageHandler, true);
          setImmediate = /** @type{function(function(): ?, ...?): number} */(function Browser_emulated_setImmediate(func) {
            setImmediates.push(func);
            if (ENVIRONMENT_IS_WORKER) {
              if (Module['setImmediates'] === undefined) Module['setImmediates'] = [];
              Module['setImmediates'].push(func);
              postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
            } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
          })
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
          setImmediate(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'immediate';
      }
      return 0;
    }
  
  var _emscripten_get_now;_emscripten_get_now = function() { return performance.now(); }
  ;/** @param {number|boolean=} noSetTiming */
  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg, noSetTiming) {
      noExitRuntime = true;
  
      assert(!Browser.mainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
  
      Browser.mainLoop.func = func;
      Browser.mainLoop.arg = arg;
  
      var browserIterationFunc;
      if (typeof arg !== 'undefined') {
        browserIterationFunc = function() {
          Module['dynCall_vi'](func, arg);
        };
      } else {
        browserIterationFunc = function() {
          Module['dynCall_v'](func);
        };
      }
  
      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
  
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
  
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
  
        // Implement very basic swap interval control
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1/*EM_TIMING_RAF*/ && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          Browser.mainLoop.scheduler();
          return;
        } else if (Browser.mainLoop.timingMode == 0/*EM_TIMING_SETTIMEOUT*/) {
          Browser.mainLoop.tickStartTime = _emscripten_get_now();
        }
  
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
  
  
  
        if (Browser.mainLoop.method === 'timeout' && Module.ctx) {
          warnOnce('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
          Browser.mainLoop.method = ''; // just warn once per call to set main loop
        }
  
        Browser.mainLoop.runIter(browserIterationFunc);
  
        checkStackCookie();
  
        // catch pauses from the main loop itself
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
  
        // Queue new audio data. This is important to be right after the main loop invocation, so that we will immediately be able
        // to queue the newest produced audio samples.
        // TODO: Consider adding pre- and post- rAF callbacks so that GL.newRenderingFrameStarted() and SDL.audio.queueNewAudioData()
        //       do not need to be hardcoded into this function, but can be more generic.
        if (typeof SDL === 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
  
        Browser.mainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 1000.0 / fps);
        else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, 1); // Do rAF by rendering each frame (no decimating)
  
        Browser.mainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    }

  
  
  var ENV={};
  
  function __getExecutableName() {
      return thisProgram || './this.program';
    }function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          // Browser language detection #8751
          'LANG': ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8',
          '_': __getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)]=ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)]=strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)]=bufSize;
      return 0;
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)]=tempI64[0],HEAP32[(((newOffset)+(4))>>2)]=tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  
  
  function __webgl_enable_ANGLE_instanced_arrays(ctx) {
      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      if (ext) {
        ctx['vertexAttribDivisor'] = function(index, divisor) { ext['vertexAttribDivisorANGLE'](index, divisor); };
        ctx['drawArraysInstanced'] = function(mode, first, count, primcount) { ext['drawArraysInstancedANGLE'](mode, first, count, primcount); };
        ctx['drawElementsInstanced'] = function(mode, count, type, indices, primcount) { ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount); };
        return 1;
      }
    }
  
  function __webgl_enable_OES_vertex_array_object(ctx) {
      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = function() { return ext['createVertexArrayOES'](); };
        ctx['deleteVertexArray'] = function(vao) { ext['deleteVertexArrayOES'](vao); };
        ctx['bindVertexArray'] = function(vao) { ext['bindVertexArrayOES'](vao); };
        ctx['isVertexArray'] = function(vao) { return ext['isVertexArrayOES'](vao); };
        return 1;
      }
    }
  
  function __webgl_enable_WEBGL_draw_buffers(ctx) {
      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = function(n, bufs) { ext['drawBuffersWEBGL'](n, bufs); };
        return 1;
      }
    }
  
  function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.dibvbi' property, so not accessing it quoted.
      return !!(ctx.dibvbi = ctx.getExtension('WEBGL_draw_instanced_base_vertex_base_instance'));
    }var GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],uniforms:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},timerQueriesEXT:[],queries:[],samplers:[],transformFeedbacks:[],syncs:[],programInfos:{},stringCache:{},stringiCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },getNewId:function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },getSource:function(shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;
          source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);
        }
        return source;
      },createContext:function(canvas, webGLContextAttributes) {
  
  
  
  
  
        var ctx = 
          (webGLContextAttributes.majorVersion > 1)
          ?
            canvas.getContext("webgl2", webGLContextAttributes)
          :
          (canvas.getContext("webgl", webGLContextAttributes)
            // https://caniuse.com/#feat=webgl
            );
  
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
  
  
        return handle;
      },registerContext:function(ctx, webGLContextAttributes) {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle: handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
  
        // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault === 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
  
  
  
        return handle;
      },makeContextCurrent:function(contextHandle) {
  
        GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.
        return !(contextHandle && !GLctx);
      },getContext:function(contextHandle) {
        return GL.contexts[contextHandle];
      },deleteContext:function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents === 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.
        GL.contexts[contextHandle] = null;
      },initExtensions:function(context) {
        // If this function is called without a specific context object, init the extensions of the currently active context.
        if (!context) context = GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.
  
        // Extensions that are only available in WebGL 1 (the calls will be no-ops if called on a WebGL 2 context active)
        __webgl_enable_ANGLE_instanced_arrays(GLctx);
        __webgl_enable_OES_vertex_array_object(GLctx);
        __webgl_enable_WEBGL_draw_buffers(GLctx);
        // Extensions that are available from WebGL >= 2 (no-op if called on a WebGL 1 context active)
        __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
  
        GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
  
        // These are the 'safe' feature-enabling extensions that don't add any performance impact related to e.g. debugging, and
        // should be enabled by default so that client GLES2/GL code will not need to go through extra hoops to get its stuff working.
        // As new extensions are ratified at http://www.khronos.org/registry/webgl/extensions/ , feel free to add your new extensions
        // here, as long as they don't produce a performance impact for users that might not be using those extensions.
        // E.g. debugging-related extensions should probably be off by default.
        var automaticallyEnabledExtensions = [ // Khronos ratified WebGL extensions ordered by number (no debug extensions):
                                               "OES_texture_float", "OES_texture_half_float", "OES_standard_derivatives",
                                               "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture",
                                               "OES_element_index_uint", "EXT_texture_filter_anisotropic", "EXT_frag_depth",
                                               "WEBGL_draw_buffers", "ANGLE_instanced_arrays", "OES_texture_float_linear",
                                               "OES_texture_half_float_linear", "EXT_blend_minmax", "EXT_shader_texture_lod",
                                               "EXT_texture_norm16",
                                               // Community approved WebGL extensions ordered by number:
                                               "WEBGL_compressed_texture_pvrtc", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float",
                                               "EXT_sRGB", "WEBGL_compressed_texture_etc1", "EXT_disjoint_timer_query",
                                               "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_astc", "EXT_color_buffer_float",
                                               "WEBGL_compressed_texture_s3tc_srgb", "EXT_disjoint_timer_query_webgl2",
                                               // Old style prefixed forms of extensions (but still currently used on e.g. iPhone Xs as
                                               // tested on iOS 12.4.1):
                                               "WEBKIT_WEBGL_compressed_texture_pvrtc"];
  
        function shouldEnableAutomatically(extension) {
          var ret = false;
          automaticallyEnabledExtensions.forEach(function(include) {
            if (extension.indexOf(include) != -1) {
              ret = true;
            }
          });
          return ret;
        }
  
        var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
        exts.forEach(function(ext) {
          if (automaticallyEnabledExtensions.indexOf(ext) != -1) {
            GLctx.getExtension(ext); // Calling .getExtension enables that extension permanently, no need to store the return value to be enabled.
          }
        });
      },populateUniformTable:function(program) {
        var p = GL.programs[program];
        var ptable = GL.programInfos[program] = {
          uniforms: {},
          maxUniformLength: 0, // This is eagerly computed below, since we already enumerate all uniforms anyway.
          maxAttributeLength: -1, // This is lazily computed and cached, computed when/if first asked, "-1" meaning not computed yet.
          maxUniformBlockNameLength: -1 // Lazily computed as well
        };
  
        var utable = ptable.uniforms;
        // A program's uniform table maps the string name of an uniform to an integer location of that uniform.
        // The global GL.uniforms map maps integer locations to WebGLUniformLocations.
        var numUniforms = GLctx.getProgramParameter(p, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
        for (var i = 0; i < numUniforms; ++i) {
          var u = GLctx.getActiveUniform(p, i);
  
          var name = u.name;
          ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length+1);
  
          // If we are dealing with an array, e.g. vec4 foo[3], strip off the array index part to canonicalize that "foo", "foo[]",
          // and "foo[0]" will mean the same. Loop below will populate foo[1] and foo[2].
          if (name.slice(-1) == ']') {
            name = name.slice(0, name.lastIndexOf('['));
          }
  
          // Optimize memory usage slightly: If we have an array of uniforms, e.g. 'vec3 colors[3];', then
          // only store the string 'colors' in utable, and 'colors[0]', 'colors[1]' and 'colors[2]' will be parsed as 'colors'+i.
          // Note that for the GL.uniforms table, we still need to fetch the all WebGLUniformLocations for all the indices.
          var loc = GLctx.getUniformLocation(p, name);
          if (loc) {
            var id = GL.getNewId(GL.uniforms);
            utable[name] = [u.size, id];
            GL.uniforms[id] = loc;
  
            for (var j = 1; j < u.size; ++j) {
              var n = name + '['+j+']';
              loc = GLctx.getUniformLocation(p, n);
              id = GL.getNewId(GL.uniforms);
  
              GL.uniforms[id] = loc;
            }
          }
        }
      }};function _glAttachShader(program, shader) {
      GLctx.attachShader(GL.programs[program],
                              GL.shaders[shader]);
    }

  function _glBindBuffer(target, buffer) {
  
      if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
        // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that binding point is non-null to know what is
        // the proper API function to call.
        GLctx.currentPixelPackBufferBinding = buffer;
      } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
        // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
        // use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
        // binding point is non-null to know what is the proper API function to
        // call.
        GLctx.currentPixelUnpackBufferBinding = buffer;
      }
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    }

  function _glBufferData(target, size, data, usage) {
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (data) {
          GLctx.bufferData(target, HEAPU8, usage, data, size);
        } else {
          GLctx.bufferData(target, size, usage);
        }
      } else {
        // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
        // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
      }
    }

  function _glClear(x0) { GLctx['clear'](x0) }

  function _glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }

  function _glCompileShader(shader) {
      GLctx.compileShader(GL.shaders[shader]);
    }

  function _glCreateProgram() {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      program.name = id;
      GL.programs[id] = program;
      return id;
    }

  function _glCreateShader(shaderType) {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
      return id;
    }

  function _glDrawArrays(mode, first, count) {
  
      GLctx.drawArrays(mode, first, count);
  
    }

  function _glEnableVertexAttribArray(index) {
      GLctx.enableVertexAttribArray(index);
    }

  
  function __glGenObject(n, buffers, createFunction, objectTable
      ) {
      for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
          buffer.name = id;
          objectTable[id] = buffer;
        } else {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
        }
        HEAP32[(((buffers)+(i*4))>>2)]=id;
      }
    }function _glGenBuffers(n, buffers) {
      __glGenObject(n, buffers, 'createBuffer', GL.buffers
        );
    }

  function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)]=numBytesWrittenExclNull;
    }

  function _glGetShaderiv(shader, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)]=log.length + 1;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = (source === null || source.length == 0) ? 0 : source.length + 1;
        HEAP32[((p)>>2)]=sourceLength;
      } else {
        HEAP32[((p)>>2)]=GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    }

  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }function _glGetUniformLocation(program, name) {
      name = UTF8ToString(name);
  
      var arrayIndex = 0;
      // If user passed an array accessor "[index]", parse the array index off the accessor.
      if (name[name.length - 1] == ']') {
        var leftBrace = name.lastIndexOf('[');
        arrayIndex = name[leftBrace+1] != ']' ? jstoi_q(name.slice(leftBrace + 1)) : 0; // "index]", parseInt will ignore the ']' at the end; but treat "foo[]" as "foo[0]"
        name = name.slice(0, leftBrace);
      }
  
      var uniformInfo = GL.programInfos[program] && GL.programInfos[program].uniforms[name]; // returns pair [ dimension_of_uniform_array, uniform_location ]
      if (uniformInfo && arrayIndex >= 0 && arrayIndex < uniformInfo[0]) { // Check if user asked for an out-of-bounds element, i.e. for 'vec4 colors[3];' user could ask for 'colors[10]' which should return -1.
        return uniformInfo[1] + arrayIndex;
      } else {
        return -1;
      }
    }

  function _glLinkProgram(program) {
      GLctx.linkProgram(GL.programs[program]);
      GL.populateUniformTable(program);
    }

  function _glShaderSource(shader, count, string, length) {
      var source = GL.getSource(shader, count, string, length);
  
  
      GLctx.shaderSource(GL.shaders[shader], source);
    }

  
  var __miniTempWebGLFloatBuffers=[];function _glUniformMatrix4fv(location, count, transpose, value) {
  
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniformMatrix4fv(GL.uniforms[location], !!transpose, HEAPF32, value>>2, count*16);
        return;
      }
  
      if (count <= 18) {
        // avoid allocation when uploading few enough uniforms
        var view = __miniTempWebGLFloatBuffers[16*count-1];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 16 * count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2,(value+count*64)>>2);
      }
      GLctx.uniformMatrix4fv(GL.uniforms[location], !!transpose, view);
    }

  function _glUseProgram(program) {
      GLctx.useProgram(GL.programs[program]);
    }

  function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    }

  function _glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }

  
  
  /** @constructor */
  function GLFW_Window(id, width, height, title, monitor, share) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.fullscreen = false; // Used to determine if app in fullscreen mode
        this.storedX = 0; // Used to store X before fullscreen
        this.storedY = 0; // Used to store Y before fullscreen
        this.width = width;
        this.height = height;
        this.storedWidth = width; // Used to store width before fullscreen
        this.storedHeight = height; // Used to store height before fullscreen
        this.title = title;
        this.monitor = monitor;
        this.share = share;
        this.attributes = GLFW.hints;
        this.inputModes = {
          0x00033001:0x00034001, // GLFW_CURSOR (GLFW_CURSOR_NORMAL)
          0x00033002:0, // GLFW_STICKY_KEYS
          0x00033003:0, // GLFW_STICKY_MOUSE_BUTTONS
        };
        this.buttons = 0;
        this.keys = new Array();
        this.domKeys = new Array();
        this.shouldClose = 0;
        this.title = null;
        this.windowPosFunc = null; // GLFWwindowposfun
        this.windowSizeFunc = null; // GLFWwindowsizefun
        this.windowCloseFunc = null; // GLFWwindowclosefun
        this.windowRefreshFunc = null; // GLFWwindowrefreshfun
        this.windowFocusFunc = null; // GLFWwindowfocusfun
        this.windowIconifyFunc = null; // GLFWwindowiconifyfun
        this.framebufferSizeFunc = null; // GLFWframebuffersizefun
        this.mouseButtonFunc = null; // GLFWmousebuttonfun
        this.cursorPosFunc = null; // GLFWcursorposfun
        this.cursorEnterFunc = null; // GLFWcursorenterfun
        this.scrollFunc = null; // GLFWscrollfun
        this.dropFunc = null; // GLFWdropfun
        this.keyFunc = null; // GLFWkeyfun
        this.charFunc = null; // GLFWcharfun
        this.userptr = null;
      }var GLFW={WindowFromId:function(id) {
        if (id <= 0 || !GLFW.windows) return null;
        return GLFW.windows[id - 1];
      },joystickFunc:null,errorFunc:null,monitorFunc:null,active:null,windows:null,monitors:null,monitorString:null,versionString:null,initialTime:null,extensions:null,hints:null,defaultHints:{131073:0,131074:0,131075:1,131076:1,131077:1,135169:8,135170:8,135171:8,135172:8,135173:24,135174:8,135175:0,135176:0,135177:0,135178:0,135179:0,135180:0,135181:0,135182:0,135183:0,139265:196609,139266:1,139267:0,139268:0,139269:0,139270:0,139271:0,139272:0},DOMToGLFWKeyCode:function(keycode) {
        switch (keycode) {
          // these keycodes are only defined for GLFW3, assume they are the same for GLFW2
          case 0x20:return 32; // DOM_VK_SPACE -> GLFW_KEY_SPACE
          case 0xDE:return 39; // DOM_VK_QUOTE -> GLFW_KEY_APOSTROPHE
          case 0xBC:return 44; // DOM_VK_COMMA -> GLFW_KEY_COMMA
          case 0xAD:return 45; // DOM_VK_HYPHEN_MINUS -> GLFW_KEY_MINUS
          case 0xBD:return 45; // DOM_VK_MINUS -> GLFW_KEY_MINUS
          case 0xBE:return 46; // DOM_VK_PERIOD -> GLFW_KEY_PERIOD
          case 0xBF:return 47; // DOM_VK_SLASH -> GLFW_KEY_SLASH
          case 0x30:return 48; // DOM_VK_0 -> GLFW_KEY_0
          case 0x31:return 49; // DOM_VK_1 -> GLFW_KEY_1
          case 0x32:return 50; // DOM_VK_2 -> GLFW_KEY_2
          case 0x33:return 51; // DOM_VK_3 -> GLFW_KEY_3
          case 0x34:return 52; // DOM_VK_4 -> GLFW_KEY_4
          case 0x35:return 53; // DOM_VK_5 -> GLFW_KEY_5
          case 0x36:return 54; // DOM_VK_6 -> GLFW_KEY_6
          case 0x37:return 55; // DOM_VK_7 -> GLFW_KEY_7
          case 0x38:return 56; // DOM_VK_8 -> GLFW_KEY_8
          case 0x39:return 57; // DOM_VK_9 -> GLFW_KEY_9
          case 0x3B:return 59; // DOM_VK_SEMICOLON -> GLFW_KEY_SEMICOLON
          case 0x3D:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0xBB:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0x41:return 65; // DOM_VK_A -> GLFW_KEY_A
          case 0x42:return 66; // DOM_VK_B -> GLFW_KEY_B
          case 0x43:return 67; // DOM_VK_C -> GLFW_KEY_C
          case 0x44:return 68; // DOM_VK_D -> GLFW_KEY_D
          case 0x45:return 69; // DOM_VK_E -> GLFW_KEY_E
          case 0x46:return 70; // DOM_VK_F -> GLFW_KEY_F
          case 0x47:return 71; // DOM_VK_G -> GLFW_KEY_G
          case 0x48:return 72; // DOM_VK_H -> GLFW_KEY_H
          case 0x49:return 73; // DOM_VK_I -> GLFW_KEY_I
          case 0x4A:return 74; // DOM_VK_J -> GLFW_KEY_J
          case 0x4B:return 75; // DOM_VK_K -> GLFW_KEY_K
          case 0x4C:return 76; // DOM_VK_L -> GLFW_KEY_L
          case 0x4D:return 77; // DOM_VK_M -> GLFW_KEY_M
          case 0x4E:return 78; // DOM_VK_N -> GLFW_KEY_N
          case 0x4F:return 79; // DOM_VK_O -> GLFW_KEY_O
          case 0x50:return 80; // DOM_VK_P -> GLFW_KEY_P
          case 0x51:return 81; // DOM_VK_Q -> GLFW_KEY_Q
          case 0x52:return 82; // DOM_VK_R -> GLFW_KEY_R
          case 0x53:return 83; // DOM_VK_S -> GLFW_KEY_S
          case 0x54:return 84; // DOM_VK_T -> GLFW_KEY_T
          case 0x55:return 85; // DOM_VK_U -> GLFW_KEY_U
          case 0x56:return 86; // DOM_VK_V -> GLFW_KEY_V
          case 0x57:return 87; // DOM_VK_W -> GLFW_KEY_W
          case 0x58:return 88; // DOM_VK_X -> GLFW_KEY_X
          case 0x59:return 89; // DOM_VK_Y -> GLFW_KEY_Y
          case 0x5a:return 90; // DOM_VK_Z -> GLFW_KEY_Z
          case 0xDB:return 91; // DOM_VK_OPEN_BRACKET -> GLFW_KEY_LEFT_BRACKET
          case 0xDC:return 92; // DOM_VK_BACKSLASH -> GLFW_KEY_BACKSLASH
          case 0xDD:return 93; // DOM_VK_CLOSE_BRACKET -> GLFW_KEY_RIGHT_BRACKET
          case 0xC0:return 94; // DOM_VK_BACK_QUOTE -> GLFW_KEY_GRAVE_ACCENT
  
  
          case 0x1B:return 256; // DOM_VK_ESCAPE -> GLFW_KEY_ESCAPE
          case 0x0D:return 257; // DOM_VK_RETURN -> GLFW_KEY_ENTER
          case 0x09:return 258; // DOM_VK_TAB -> GLFW_KEY_TAB
          case 0x08:return 259; // DOM_VK_BACK -> GLFW_KEY_BACKSPACE
          case 0x2D:return 260; // DOM_VK_INSERT -> GLFW_KEY_INSERT
          case 0x2E:return 261; // DOM_VK_DELETE -> GLFW_KEY_DELETE
          case 0x27:return 262; // DOM_VK_RIGHT -> GLFW_KEY_RIGHT
          case 0x25:return 263; // DOM_VK_LEFT -> GLFW_KEY_LEFT
          case 0x28:return 264; // DOM_VK_DOWN -> GLFW_KEY_DOWN
          case 0x26:return 265; // DOM_VK_UP -> GLFW_KEY_UP
          case 0x21:return 266; // DOM_VK_PAGE_UP -> GLFW_KEY_PAGE_UP
          case 0x22:return 267; // DOM_VK_PAGE_DOWN -> GLFW_KEY_PAGE_DOWN
          case 0x24:return 268; // DOM_VK_HOME -> GLFW_KEY_HOME
          case 0x23:return 269; // DOM_VK_END -> GLFW_KEY_END
          case 0x14:return 280; // DOM_VK_CAPS_LOCK -> GLFW_KEY_CAPS_LOCK
          case 0x91:return 281; // DOM_VK_SCROLL_LOCK -> GLFW_KEY_SCROLL_LOCK
          case 0x90:return 282; // DOM_VK_NUM_LOCK -> GLFW_KEY_NUM_LOCK
          case 0x2C:return 283; // DOM_VK_SNAPSHOT -> GLFW_KEY_PRINT_SCREEN
          case 0x13:return 284; // DOM_VK_PAUSE -> GLFW_KEY_PAUSE
          case 0x70:return 290; // DOM_VK_F1 -> GLFW_KEY_F1
          case 0x71:return 291; // DOM_VK_F2 -> GLFW_KEY_F2
          case 0x72:return 292; // DOM_VK_F3 -> GLFW_KEY_F3
          case 0x73:return 293; // DOM_VK_F4 -> GLFW_KEY_F4
          case 0x74:return 294; // DOM_VK_F5 -> GLFW_KEY_F5
          case 0x75:return 295; // DOM_VK_F6 -> GLFW_KEY_F6
          case 0x76:return 296; // DOM_VK_F7 -> GLFW_KEY_F7
          case 0x77:return 297; // DOM_VK_F8 -> GLFW_KEY_F8
          case 0x78:return 298; // DOM_VK_F9 -> GLFW_KEY_F9
          case 0x79:return 299; // DOM_VK_F10 -> GLFW_KEY_F10
          case 0x7A:return 300; // DOM_VK_F11 -> GLFW_KEY_F11
          case 0x7B:return 301; // DOM_VK_F12 -> GLFW_KEY_F12
          case 0x7C:return 302; // DOM_VK_F13 -> GLFW_KEY_F13
          case 0x7D:return 303; // DOM_VK_F14 -> GLFW_KEY_F14
          case 0x7E:return 304; // DOM_VK_F15 -> GLFW_KEY_F15
          case 0x7F:return 305; // DOM_VK_F16 -> GLFW_KEY_F16
          case 0x80:return 306; // DOM_VK_F17 -> GLFW_KEY_F17
          case 0x81:return 307; // DOM_VK_F18 -> GLFW_KEY_F18
          case 0x82:return 308; // DOM_VK_F19 -> GLFW_KEY_F19
          case 0x83:return 309; // DOM_VK_F20 -> GLFW_KEY_F20
          case 0x84:return 310; // DOM_VK_F21 -> GLFW_KEY_F21
          case 0x85:return 311; // DOM_VK_F22 -> GLFW_KEY_F22
          case 0x86:return 312; // DOM_VK_F23 -> GLFW_KEY_F23
          case 0x87:return 313; // DOM_VK_F24 -> GLFW_KEY_F24
          case 0x88:return 314; // 0x88 (not used?) -> GLFW_KEY_F25
          case 0x60:return 320; // DOM_VK_NUMPAD0 -> GLFW_KEY_KP_0
          case 0x61:return 321; // DOM_VK_NUMPAD1 -> GLFW_KEY_KP_1
          case 0x62:return 322; // DOM_VK_NUMPAD2 -> GLFW_KEY_KP_2
          case 0x63:return 323; // DOM_VK_NUMPAD3 -> GLFW_KEY_KP_3
          case 0x64:return 324; // DOM_VK_NUMPAD4 -> GLFW_KEY_KP_4
          case 0x65:return 325; // DOM_VK_NUMPAD5 -> GLFW_KEY_KP_5
          case 0x66:return 326; // DOM_VK_NUMPAD6 -> GLFW_KEY_KP_6
          case 0x67:return 327; // DOM_VK_NUMPAD7 -> GLFW_KEY_KP_7
          case 0x68:return 328; // DOM_VK_NUMPAD8 -> GLFW_KEY_KP_8
          case 0x69:return 329; // DOM_VK_NUMPAD9 -> GLFW_KEY_KP_9
          case 0x6E:return 330; // DOM_VK_DECIMAL -> GLFW_KEY_KP_DECIMAL
          case 0x6F:return 331; // DOM_VK_DIVIDE -> GLFW_KEY_KP_DIVIDE
          case 0x6A:return 332; // DOM_VK_MULTIPLY -> GLFW_KEY_KP_MULTIPLY
          case 0x6D:return 333; // DOM_VK_SUBTRACT -> GLFW_KEY_KP_SUBTRACT
          case 0x6B:return 334; // DOM_VK_ADD -> GLFW_KEY_KP_ADD
          // case 0x0D:return 335; // DOM_VK_RETURN -> GLFW_KEY_KP_ENTER (DOM_KEY_LOCATION_RIGHT)
          // case 0x61:return 336; // DOM_VK_EQUALS -> GLFW_KEY_KP_EQUAL (DOM_KEY_LOCATION_RIGHT)
          case 0x10:return 340; // DOM_VK_SHIFT -> GLFW_KEY_LEFT_SHIFT
          case 0x11:return 341; // DOM_VK_CONTROL -> GLFW_KEY_LEFT_CONTROL
          case 0x12:return 342; // DOM_VK_ALT -> GLFW_KEY_LEFT_ALT
          case 0x5B:return 343; // DOM_VK_WIN -> GLFW_KEY_LEFT_SUPER
          // case 0x10:return 344; // DOM_VK_SHIFT -> GLFW_KEY_RIGHT_SHIFT (DOM_KEY_LOCATION_RIGHT)
          // case 0x11:return 345; // DOM_VK_CONTROL -> GLFW_KEY_RIGHT_CONTROL (DOM_KEY_LOCATION_RIGHT)
          // case 0x12:return 346; // DOM_VK_ALT -> GLFW_KEY_RIGHT_ALT (DOM_KEY_LOCATION_RIGHT)
          // case 0x5B:return 347; // DOM_VK_WIN -> GLFW_KEY_RIGHT_SUPER (DOM_KEY_LOCATION_RIGHT)
          case 0x5D:return 348; // DOM_VK_CONTEXT_MENU -> GLFW_KEY_MENU
          // XXX: GLFW_KEY_WORLD_1, GLFW_KEY_WORLD_2 what are these?
          default:return -1; // GLFW_KEY_UNKNOWN
        };
      },getModBits:function(win) {
        var mod = 0;
        if (win.keys[340]) mod |= 0x0001; // GLFW_MOD_SHIFT
        if (win.keys[341]) mod |= 0x0002; // GLFW_MOD_CONTROL
        if (win.keys[342]) mod |= 0x0004; // GLFW_MOD_ALT
        if (win.keys[343]) mod |= 0x0008; // GLFW_MOD_SUPER
        return mod;
      },onKeyPress:function(event) {
        if (!GLFW.active || !GLFW.active.charFunc) return;
        if (event.ctrlKey || event.metaKey) return;
  
        // correct unicode charCode is only available with onKeyPress event
        var charCode = event.charCode;
        if (charCode == 0 || (charCode >= 0x00 && charCode <= 0x1F)) return;
  
  
        dynCall_vii(GLFW.active.charFunc, GLFW.active.id, charCode);
      },onKeyChanged:function(keyCode, status) {
        if (!GLFW.active) return;
  
        var key = GLFW.DOMToGLFWKeyCode(keyCode);
        if (key == -1) return;
  
        var repeat = status && GLFW.active.keys[key];
        GLFW.active.keys[key] = status;
        GLFW.active.domKeys[keyCode] = status;
        if (!GLFW.active.keyFunc) return;
  
  
        if (repeat) status = 2; // GLFW_REPEAT
        dynCall_viiiii(GLFW.active.keyFunc, GLFW.active.id, key, keyCode, status, GLFW.getModBits(GLFW.active));
      },onGamepadConnected:function(event) {
        GLFW.refreshJoysticks();
      },onGamepadDisconnected:function(event) {
        GLFW.refreshJoysticks();
      },onKeydown:function(event) {
        GLFW.onKeyChanged(event.keyCode, 1); // GLFW_PRESS or GLFW_REPEAT
  
        // This logic comes directly from the sdl implementation. We cannot
        // call preventDefault on all keydown events otherwise onKeyPress will
        // not get called
        if (event.keyCode === 8 /* backspace */ || event.keyCode === 9 /* tab */) {
          event.preventDefault();
        }
      },onKeyup:function(event) {
        GLFW.onKeyChanged(event.keyCode, 0); // GLFW_RELEASE
      },onBlur:function(event) {
        if (!GLFW.active) return;
  
        for (var i = 0; i < GLFW.active.domKeys.length; ++i) {
          if (GLFW.active.domKeys[i]) {
            GLFW.onKeyChanged(i, 0); // GLFW_RELEASE
          }
        }
      },onMousemove:function(event) {
        if (!GLFW.active) return;
  
        Browser.calculateMouseEvent(event);
  
        if (event.target != Module["canvas"] || !GLFW.active.cursorPosFunc) return;
  
  
        dynCall_vidd(GLFW.active.cursorPosFunc, GLFW.active.id, Browser.mouseX, Browser.mouseY);
      },DOMToGLFWMouseButton:function(event) {
        // DOM and glfw have different button codes.
        // See http://www.w3schools.com/jsref/event_button.asp.
        var eventButton = event['button'];
        if (eventButton > 0) {
          if (eventButton == 1) {
            eventButton = 2;
          } else {
            eventButton = 1;
          }
        }
        return eventButton;
      },onMouseenter:function(event) {
        if (!GLFW.active) return;
  
        if (event.target != Module["canvas"] || !GLFW.active.cursorEnterFunc) return;
  
        dynCall_vii(GLFW.active.cursorEnterFunc, GLFW.active.id, 1);
      },onMouseleave:function(event) {
        if (!GLFW.active) return;
  
        if (event.target != Module["canvas"] || !GLFW.active.cursorEnterFunc) return;
  
        dynCall_vii(GLFW.active.cursorEnterFunc, GLFW.active.id, 0);
      },onMouseButtonChanged:function(event, status) {
        if (!GLFW.active) return;
  
        Browser.calculateMouseEvent(event);
  
        if (event.target != Module["canvas"]) return;
  
        var eventButton = GLFW.DOMToGLFWMouseButton(event);
  
        if (status == 1) { // GLFW_PRESS
          GLFW.active.buttons |= (1 << eventButton);
          try {
            event.target.setCapture();
          } catch (e) {}
        } else {  // GLFW_RELEASE
          GLFW.active.buttons &= ~(1 << eventButton);
        }
  
        if (!GLFW.active.mouseButtonFunc) return;
  
  
        dynCall_viiii(GLFW.active.mouseButtonFunc, GLFW.active.id, eventButton, status, GLFW.getModBits(GLFW.active));
      },onMouseButtonDown:function(event) {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 1); // GLFW_PRESS
      },onMouseButtonUp:function(event) {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 0); // GLFW_RELEASE
      },onMouseWheel:function(event) {
        // Note the minus sign that flips browser wheel direction (positive direction scrolls page down) to native wheel direction (positive direction is mouse wheel up)
        var delta = -Browser.getMouseWheelDelta(event);
        delta = (delta == 0) ? 0 : (delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1)); // Quantize to integer so that minimum scroll is at least +/- 1.
        GLFW.wheelPos += delta;
  
        if (!GLFW.active || !GLFW.active.scrollFunc || event.target != Module['canvas']) return;
  
  
        var sx = 0;
        var sy = 0;
        if (event.type == 'mousewheel') {
          sx = event.wheelDeltaX;
          sy = event.wheelDeltaY;
        } else {
          sx = event.deltaX;
          sy = event.deltaY;
        }
  
        dynCall_vidd(GLFW.active.scrollFunc, GLFW.active.id, sx, sy);
  
        event.preventDefault();
      },onCanvasResize:function(width, height) {
        if (!GLFW.active) return;
  
        var resizeNeeded = true;
  
        // If the client is requesting fullscreen mode
        if (document["fullscreen"] || document["fullScreen"] || document["mozFullScreen"] || document["webkitIsFullScreen"]) {
          GLFW.active.storedX = GLFW.active.x;
          GLFW.active.storedY = GLFW.active.y;
          GLFW.active.storedWidth = GLFW.active.width;
          GLFW.active.storedHeight = GLFW.active.height;
          GLFW.active.x = GLFW.active.y = 0;
          GLFW.active.width = screen.width;
          GLFW.active.height = screen.height;
          GLFW.active.fullscreen = true;
  
        // If the client is reverting from fullscreen mode
        } else if (GLFW.active.fullscreen == true) {
          GLFW.active.x = GLFW.active.storedX;
          GLFW.active.y = GLFW.active.storedY;
          GLFW.active.width = GLFW.active.storedWidth;
          GLFW.active.height = GLFW.active.storedHeight;
          GLFW.active.fullscreen = false;
  
        // If the width/height values do not match current active window sizes
        } else if (GLFW.active.width != width || GLFW.active.height != height) {
            GLFW.active.width = width;
            GLFW.active.height = height;
        } else {
          resizeNeeded = false;
        }
  
        // If any of the above conditions were true, we need to resize the canvas
        if (resizeNeeded) {
          // resets the canvas size to counter the aspect preservation of Browser.updateCanvasDimensions
          Browser.setCanvasSize(GLFW.active.width, GLFW.active.height, true);
          // TODO: Client dimensions (clientWidth/clientHeight) vs pixel dimensions (width/height) of
          // the canvas should drive window and framebuffer size respectfully.
          GLFW.onWindowSizeChanged();
          GLFW.onFramebufferSizeChanged();
        }
      },onWindowSizeChanged:function() {
        if (!GLFW.active) return;
  
        if (!GLFW.active.windowSizeFunc) return;
  
  
        dynCall_viii(GLFW.active.windowSizeFunc, GLFW.active.id, GLFW.active.width, GLFW.active.height);
      },onFramebufferSizeChanged:function() {
        if (!GLFW.active) return;
  
        if (!GLFW.active.framebufferSizeFunc) return;
  
        dynCall_viii(GLFW.active.framebufferSizeFunc, GLFW.active.id, GLFW.active.width, GLFW.active.height);
      },getTime:function() {
        return _emscripten_get_now() / 1000;
      },setWindowTitle:function(winid, title) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        win.title = UTF8ToString(title);
        if (GLFW.active.id == win.id) {
          document.title = win.title;
        }
      },setJoystickCallback:function(cbfun) {
        GLFW.joystickFunc = cbfun;
        GLFW.refreshJoysticks();
      },joys:{},lastGamepadState:null,lastGamepadStateFrame:null,refreshJoysticks:function() {
        // Produce a new Gamepad API sample if we are ticking a new game frame, or if not using emscripten_set_main_loop() at all to drive animation.
        if (Browser.mainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame || !Browser.mainLoop.currentFrameNumber) {
          GLFW.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : null);
          GLFW.lastGamepadStateFrame = Browser.mainLoop.currentFrameNumber;
  
          for (var joy = 0; joy < GLFW.lastGamepadState.length; ++joy) {
            var gamepad = GLFW.lastGamepadState[joy];
  
            if (gamepad) {
              if (!GLFW.joys[joy]) {
                console.log('glfw joystick connected:',joy);
                GLFW.joys[joy] = {
                  id: allocate(intArrayFromString(gamepad.id), 'i8', ALLOC_NORMAL),
                  buttonsCount: gamepad.buttons.length,
                  axesCount: gamepad.axes.length,
                  buttons: allocate(new Array(gamepad.buttons.length), 'i8', ALLOC_NORMAL),
                  axes: allocate(new Array(gamepad.axes.length*4), 'float', ALLOC_NORMAL)
                };
  
                if (GLFW.joystickFunc) {
                  dynCall_vii(GLFW.joystickFunc, joy, 0x00040001); // GLFW_CONNECTED
                }
              }
  
              var data = GLFW.joys[joy];
  
              for (var i = 0; i < gamepad.buttons.length;  ++i) {
                setValue(data.buttons + i, gamepad.buttons[i].pressed, 'i8');
              }
  
              for (var i = 0; i < gamepad.axes.length; ++i) {
                setValue(data.axes + i*4, gamepad.axes[i], 'float');
              }
            } else {
              if (GLFW.joys[joy]) {
                console.log('glfw joystick disconnected',joy);
  
                if (GLFW.joystickFunc) {
                  dynCall_vii(GLFW.joystickFunc, joy, 0x00040002); // GLFW_DISCONNECTED
                }
  
                _free(GLFW.joys[joy].id);
                _free(GLFW.joys[joy].buttons);
                _free(GLFW.joys[joy].axes);
  
                delete GLFW.joys[joy];
              }
            }
          }
        }
      },setKeyCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.keyFunc;
        win.keyFunc = cbfun;
        return prevcbfun;
      },setCharCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.charFunc;
        win.charFunc = cbfun;
        return prevcbfun;
      },setMouseButtonCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.mouseButtonFunc;
        win.mouseButtonFunc = cbfun;
        return prevcbfun;
      },setCursorPosCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.cursorPosFunc;
        win.cursorPosFunc = cbfun;
        return prevcbfun;
      },setScrollCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.scrollFunc;
        win.scrollFunc = cbfun;
        return prevcbfun;
      },setDropCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.dropFunc;
        win.dropFunc = cbfun;
        return prevcbfun;
      },onDrop:function(event) {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
        if (!event.dataTransfer || !event.dataTransfer.files || event.dataTransfer.files.length == 0) return;
  
        event.preventDefault();
  
        var filenames = allocate(new Array(event.dataTransfer.files.length*4), 'i8*', ALLOC_NORMAL);
        var filenamesArray = [];
        var count = event.dataTransfer.files.length;
  
        // Read and save the files to emscripten's FS
        var written = 0;
        var drop_dir = '.glfw_dropped_files';
        FS.createPath('/', drop_dir);
  
        function save(file) {
          var path = '/' + drop_dir + '/' + file.name.replace(/\//g, '_');
          var reader = new FileReader();
          reader.onloadend = function(e) {
            if (reader.readyState != 2) { // not DONE
              ++written;
              console.log('failed to read dropped file: '+file.name+': '+reader.error);
              return;
            }
  
            var data = e.target.result;
            FS.writeFile(path, new Uint8Array(data));
            if (++written === count) {
              dynCall_viii(GLFW.active.dropFunc, GLFW.active.id, count, filenames);
  
              for (var i = 0; i < filenamesArray.length; ++i) {
                _free(filenamesArray[i]);
              }
              _free(filenames);
            }
          };
          reader.readAsArrayBuffer(file);
  
          var filename = allocate(intArrayFromString(path), 'i8', ALLOC_NORMAL);
          filenamesArray.push(filename);
          setValue(filenames + i*4, filename, 'i8*');
        }
  
        for (var i = 0; i < count; ++i) {
          save(event.dataTransfer.files[i]);
        }
  
        return false;
      },onDragover:function(event) {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
  
        event.preventDefault();
        return false;
      },setWindowSizeCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowSizeFunc;
        win.windowSizeFunc = cbfun;
  
  
        return prevcbfun;
      },setWindowCloseCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowCloseFunc;
        win.windowCloseFunc = cbfun;
        return prevcbfun;
      },setWindowRefreshCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowRefreshFunc;
        win.windowRefreshFunc = cbfun;
        return prevcbfun;
      },onClickRequestPointerLock:function(e) {
        if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
          Module['canvas'].requestPointerLock();
          e.preventDefault();
        }
      },setInputMode:function(winid, mode, value) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        switch(mode) {
          case 0x00033001: { // GLFW_CURSOR
            switch(value) {
              case 0x00034001: { // GLFW_CURSOR_NORMAL
                win.inputModes[mode] = value;
                Module['canvas'].removeEventListener('click', GLFW.onClickRequestPointerLock, true);
                Module['canvas'].exitPointerLock();
                break;
              }
              case 0x00034002: { // GLFW_CURSOR_HIDDEN
                console.log("glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented.");
                break;
              }
              case 0x00034003: { // GLFW_CURSOR_DISABLED
                win.inputModes[mode] = value;
                Module['canvas'].addEventListener('click', GLFW.onClickRequestPointerLock, true);
                Module['canvas'].requestPointerLock();
                break;
              }
              default: {
                console.log("glfwSetInputMode called with unknown value parameter value: " + value + ".");
                break;
              }
            }
            break;
          }
          case 0x00033002: { // GLFW_STICKY_KEYS
            console.log("glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented.");
            break;
          }
          case 0x00033003: { // GLFW_STICKY_MOUSE_BUTTONS
            console.log("glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented.");
            break;
          }
          default: {
            console.log("glfwSetInputMode called with unknown mode parameter value: " + mode + ".");
            break;
          }
        }
      },getKey:function(winid, key) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return win.keys[key];
      },getMouseButton:function(winid, button) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return (win.buttons & (1 << button)) > 0;
      },getCursorPos:function(winid, x, y) {
        setValue(x, Browser.mouseX, 'double');
        setValue(y, Browser.mouseY, 'double');
      },getMousePos:function(winid, x, y) {
        setValue(x, Browser.mouseX, 'i32');
        setValue(y, Browser.mouseY, 'i32');
      },setCursorPos:function(winid, x, y) {
      },getWindowPos:function(winid, x, y) {
        var wx = 0;
        var wy = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          wx = win.x;
          wy = win.y;
        }
  
        if (x) {
          setValue(x, wx, 'i32');
        }
        
        if (y) {
          setValue(y, wy, 'i32');
        }
      },setWindowPos:function(winid, x, y) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        win.x = x;
        win.y = y;
      },getWindowSize:function(winid, width, height) {
        var ww = 0;
        var wh = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          ww = win.width;
          wh = win.height;
        }
  
        if (width) {
          setValue(width, ww, 'i32');
        }
        
        if (height) {
          setValue(height, wh, 'i32');
        }
      },setWindowSize:function(winid, width, height) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (GLFW.active.id == win.id) {
          if (width == screen.width && height == screen.height) {
            Browser.requestFullscreen();
          } else {
            Browser.exitFullscreen();
            Browser.setCanvasSize(width, height);
            win.width = width;
            win.height = height;
          }
        }
  
        if (!win.windowSizeFunc) return;
  
  
        dynCall_viii(win.windowSizeFunc, win.id, width, height);
      },createWindow:function(width, height, title, monitor, share) {
        var i, id;
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] !== null; i++) {
          // no-op
        }
        if (i > 0) throw "glfwCreateWindow only supports one window at time currently";
  
        // id for window
        id = i + 1;
  
        // not valid
        if (width <= 0 || height <= 0) return 0;
  
        if (monitor) {
          Browser.requestFullscreen();
        } else {
          Browser.setCanvasSize(width, height);
        }
  
        // Create context when there are no existing alive windows
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] == null; i++) {
          // no-op
        }
        if (i == GLFW.windows.length) {
          var contextAttributes = {
            antialias: (GLFW.hints[0x0002100D] > 1), // GLFW_SAMPLES
            depth: (GLFW.hints[0x00021005] > 0),     // GLFW_DEPTH_BITS
            stencil: (GLFW.hints[0x00021006] > 0),   // GLFW_STENCIL_BITS
            alpha: (GLFW.hints[0x00021004] > 0)      // GLFW_ALPHA_BITS
          }
          Module.ctx = Browser.createContext(Module['canvas'], true, true, contextAttributes);
        }
  
        // If context creation failed, do not return a valid window
        if (!Module.ctx) return 0;
  
        // Get non alive id
        var win = new GLFW_Window(id, width, height, title, monitor, share);
  
        // Set window to array
        if (id - 1 == GLFW.windows.length) {
          GLFW.windows.push(win);
        } else {
          GLFW.windows[id - 1] = win;
        }
  
        GLFW.active = win;
        return win.id;
      },destroyWindow:function(winid) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (win.windowCloseFunc)
          dynCall_vi(win.windowCloseFunc, win.id);
  
        GLFW.windows[win.id - 1] = null;
        if (GLFW.active.id == win.id)
          GLFW.active = null;
  
        // Destroy context when no alive windows
        for (var i = 0; i < GLFW.windows.length; i++)
          if (GLFW.windows[i] !== null) return;
  
        Module.ctx = Browser.destroyContext(Module['canvas'], true, true);
      },swapBuffers:function(winid) {
      },GLFW2ParamToGLFW3Param:function(param) {
        var table = {
          0x00030001:0, // GLFW_MOUSE_CURSOR
          0x00030002:0, // GLFW_STICKY_KEYS
          0x00030003:0, // GLFW_STICKY_MOUSE_BUTTONS
          0x00030004:0, // GLFW_SYSTEM_KEYS
          0x00030005:0, // GLFW_KEY_REPEAT
          0x00030006:0, // GLFW_AUTO_POLL_EVENTS
          0x00020001:0, // GLFW_OPENED
          0x00020002:0, // GLFW_ACTIVE
          0x00020003:0, // GLFW_ICONIFIED
          0x00020004:0, // GLFW_ACCELERATED
          0x00020005:0x00021001, // GLFW_RED_BITS
          0x00020006:0x00021002, // GLFW_GREEN_BITS
          0x00020007:0x00021003, // GLFW_BLUE_BITS
          0x00020008:0x00021004, // GLFW_ALPHA_BITS
          0x00020009:0x00021005, // GLFW_DEPTH_BITS
          0x0002000A:0x00021006, // GLFW_STENCIL_BITS
          0x0002000B:0x0002100F, // GLFW_REFRESH_RATE
          0x0002000C:0x00021007, // GLFW_ACCUM_RED_BITS
          0x0002000D:0x00021008, // GLFW_ACCUM_GREEN_BITS
          0x0002000E:0x00021009, // GLFW_ACCUM_BLUE_BITS
          0x0002000F:0x0002100A, // GLFW_ACCUM_ALPHA_BITS
          0x00020010:0x0002100B, // GLFW_AUX_BUFFERS
          0x00020011:0x0002100C, // GLFW_STEREO
          0x00020012:0, // GLFW_WINDOW_NO_RESIZE
          0x00020013:0x0002100D, // GLFW_FSAA_SAMPLES
          0x00020014:0x00022002, // GLFW_OPENGL_VERSION_MAJOR
          0x00020015:0x00022003, // GLFW_OPENGL_VERSION_MINOR
          0x00020016:0x00022006, // GLFW_OPENGL_FORWARD_COMPAT
          0x00020017:0x00022007, // GLFW_OPENGL_DEBUG_CONTEXT
          0x00020018:0x00022008, // GLFW_OPENGL_PROFILE
        };
        return table[param];
      }};function _glfwCreateWindow(width, height, title, monitor, share) {
      return GLFW.createWindow(width, height, title, monitor, share);
    }

  function _glfwDestroyWindow(winid) {
      return GLFW.destroyWindow(winid);
    }

  function _glfwInit() {
      if (GLFW.windows) return 1; // GL_TRUE
  
      GLFW.initialTime = GLFW.getTime();
      GLFW.hints = GLFW.defaultHints;
      GLFW.windows = new Array()
      GLFW.active = null;
  
      window.addEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
      window.addEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
      window.addEventListener("keydown", GLFW.onKeydown, true);
      window.addEventListener("keypress", GLFW.onKeyPress, true);
      window.addEventListener("keyup", GLFW.onKeyup, true);
      window.addEventListener("blur", GLFW.onBlur, true);
      Module["canvas"].addEventListener("touchmove", GLFW.onMousemove, true);
      Module["canvas"].addEventListener("touchstart", GLFW.onMouseButtonDown, true);
      Module["canvas"].addEventListener("touchcancel", GLFW.onMouseButtonUp, true);
      Module["canvas"].addEventListener("touchend", GLFW.onMouseButtonUp, true);
      Module["canvas"].addEventListener("mousemove", GLFW.onMousemove, true);
      Module["canvas"].addEventListener("mousedown", GLFW.onMouseButtonDown, true);
      Module["canvas"].addEventListener("mouseup", GLFW.onMouseButtonUp, true);
      Module["canvas"].addEventListener('wheel', GLFW.onMouseWheel, true);
      Module["canvas"].addEventListener('mousewheel', GLFW.onMouseWheel, true);
      Module["canvas"].addEventListener('mouseenter', GLFW.onMouseenter, true);
      Module["canvas"].addEventListener('mouseleave', GLFW.onMouseleave, true);
      Module["canvas"].addEventListener('drop', GLFW.onDrop, true);
      Module["canvas"].addEventListener('dragover', GLFW.onDragover, true);
  
      Browser.resizeListeners.push(function(width, height) {
         GLFW.onCanvasResize(width, height);
      });
      return 1; // GL_TRUE
    }

  function _glfwMakeContextCurrent(winid) {}

  function _glfwSetErrorCallback(cbfun) {
      var prevcbfun = GLFW.errorFunc;
      GLFW.errorFunc = cbfun;
      return prevcbfun;
    }

  function _glfwSetWindowSize(winid, width, height) {
      GLFW.setWindowSize(winid, width, height);
    }

  function _glfwTerminate() {
      window.removeEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
      window.removeEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
      window.removeEventListener("keydown", GLFW.onKeydown, true);
      window.removeEventListener("keypress", GLFW.onKeyPress, true);
      window.removeEventListener("keyup", GLFW.onKeyup, true);
      window.removeEventListener("blur", GLFW.onBlur, true);
      Module["canvas"].removeEventListener("touchmove", GLFW.onMousemove, true);
      Module["canvas"].removeEventListener("touchstart", GLFW.onMouseButtonDown, true);
      Module["canvas"].removeEventListener("touchcancel", GLFW.onMouseButtonUp, true);
      Module["canvas"].removeEventListener("touchend", GLFW.onMouseButtonUp, true);
      Module["canvas"].removeEventListener("mousemove", GLFW.onMousemove, true);
      Module["canvas"].removeEventListener("mousedown", GLFW.onMouseButtonDown, true);
      Module["canvas"].removeEventListener("mouseup", GLFW.onMouseButtonUp, true);
      Module["canvas"].removeEventListener('wheel', GLFW.onMouseWheel, true);
      Module["canvas"].removeEventListener('mousewheel', GLFW.onMouseWheel, true);
      Module["canvas"].removeEventListener('mouseenter', GLFW.onMouseenter, true);
      Module["canvas"].removeEventListener('mouseleave', GLFW.onMouseleave, true);
      Module["canvas"].removeEventListener('drop', GLFW.onDrop, true);
      Module["canvas"].removeEventListener('dragover', GLFW.onDragover, true);
  
  
      Module["canvas"].width = Module["canvas"].height = 1;
      GLFW.windows = null;
      GLFW.active = null;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  
  
  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }
var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();;
Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) { Browser.requestFullscreen(lockPointer, resizeCanvas) };
  Module["requestFullScreen"] = function Module_requestFullScreen() { Browser.requestFullScreen() };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
  Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) { return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes) };
var GLctx;;
var __miniTempWebGLFloatBuffersStorage = new Float32Array(288);
  for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
  __miniTempWebGLFloatBuffers[i] = __miniTempWebGLFloatBuffersStorage.subarray(0, i+1);
  }
  ;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmGlobalArg = {};
var asmLibraryArg = { "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_atexit": ___cxa_atexit, "__cxa_throw": ___cxa_throw, "__handle_stack_overflow": ___handle_stack_overflow, "__map_file": ___map_file, "__sys_munmap": ___sys_munmap, "abort": _abort, "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "emscripten_set_main_loop": _emscripten_set_main_loop, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "fd_close": _fd_close, "fd_read": _fd_read, "fd_seek": _fd_seek, "fd_write": _fd_write, "glAttachShader": _glAttachShader, "glBindBuffer": _glBindBuffer, "glBufferData": _glBufferData, "glClear": _glClear, "glClearColor": _glClearColor, "glCompileShader": _glCompileShader, "glCreateProgram": _glCreateProgram, "glCreateShader": _glCreateShader, "glDrawArrays": _glDrawArrays, "glEnableVertexAttribArray": _glEnableVertexAttribArray, "glGenBuffers": _glGenBuffers, "glGetShaderInfoLog": _glGetShaderInfoLog, "glGetShaderiv": _glGetShaderiv, "glGetUniformLocation": _glGetUniformLocation, "glLinkProgram": _glLinkProgram, "glShaderSource": _glShaderSource, "glUniformMatrix4fv": _glUniformMatrix4fv, "glUseProgram": _glUseProgram, "glVertexAttribPointer": _glVertexAttribPointer, "glViewport": _glViewport, "glfwCreateWindow": _glfwCreateWindow, "glfwDestroyWindow": _glfwDestroyWindow, "glfwInit": _glfwInit, "glfwMakeContextCurrent": _glfwMakeContextCurrent, "glfwSetErrorCallback": _glfwSetErrorCallback, "glfwSetWindowSize": _glfwSetWindowSize, "glfwTerminate": _glfwTerminate, "memory": wasmMemory, "setTempRet0": _setTempRet0, "strftime_l": _strftime_l, "table": wasmTable };
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _initGL = Module["_initGL"] = createExportWrapper("initGL");

/** @type {function(...*):?} */
var _setWindowSize = Module["_setWindowSize"] = createExportWrapper("setWindowSize");

/** @type {function(...*):?} */
var _destroyGL = Module["_destroyGL"] = createExportWrapper("destroyGL");

/** @type {function(...*):?} */
var _main = Module["_main"] = createExportWrapper("main");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var ___set_stack_limit = Module["___set_stack_limit"] = createExportWrapper("__set_stack_limit");

/** @type {function(...*):?} */
var __growWasmMemory = Module["__growWasmMemory"] = createExportWrapper("__growWasmMemory");

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = createExportWrapper("dynCall_vii");

/** @type {function(...*):?} */
var dynCall_viffff = Module["dynCall_viffff"] = createExportWrapper("dynCall_viffff");

/** @type {function(...*):?} */
var dynCall_vif = Module["dynCall_vif"] = createExportWrapper("dynCall_vif");

/** @type {function(...*):?} */
var dynCall_viif = Module["dynCall_viif"] = createExportWrapper("dynCall_viif");

/** @type {function(...*):?} */
var dynCall_viffffffffffffffff = Module["dynCall_viffffffffffffffff"] = createExportWrapper("dynCall_viffffffffffffffff");

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = createExportWrapper("dynCall_vi");

/** @type {function(...*):?} */
var dynCall_vifffff = Module["dynCall_vifffff"] = createExportWrapper("dynCall_vifffff");

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = createExportWrapper("dynCall_ii");

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = createExportWrapper("dynCall_v");

/** @type {function(...*):?} */
var dynCall_iidiiii = Module["dynCall_iidiiii"] = createExportWrapper("dynCall_iidiiii");

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = createExportWrapper("dynCall_iiii");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = createExportWrapper("dynCall_viiii");

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = createExportWrapper("dynCall_iii");

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = createExportWrapper("dynCall_iiiii");

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = createExportWrapper("dynCall_iiiiii");

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiii");

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = createExportWrapper("dynCall_iiiiiii");

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");

/** @type {function(...*):?} */
var dynCall_iiiiid = Module["dynCall_iiiiid"] = createExportWrapper("dynCall_iiiiid");

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");

/** @type {function(...*):?} */
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = createExportWrapper("dynCall_iiiiiiii");

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = createExportWrapper("dynCall_viiiiii");

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = createExportWrapper("dynCall_viiiii");





// === Auto-generated postamble setup entry stuff ===


if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getMemory")) Module["getMemory"] = function() { abort("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "dynamicAlloc")) Module["dynamicAlloc"] = function() { abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "loadDynamicLibrary")) Module["loadDynamicLibrary"] = function() { abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "loadWebAssemblyModule")) Module["loadWebAssemblyModule"] = function() { abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() { abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetIndexed")) Module["emscriptenWebGLGetIndexed"] = function() { abort("'emscriptenWebGLGetIndexed' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_DYNAMIC")) Object.defineProperty(Module, "ALLOC_DYNAMIC", { configurable: true, get: function() { abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NONE")) Object.defineProperty(Module, "ALLOC_NONE", { configurable: true, get: function() { abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  var entryFunction = Module['_main'];


  var argc = 0;
  var argv = 0;

  try {

    Module['___set_stack_limit'](STACK_MAX);

    var ret = entryFunction(argc, argv);


    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as execution is asynchronously handed
    // off to a pthread.
    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'unwind') {
      // running an evented main loop, don't immediately exit
      noExitRuntime = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }
  } finally {
    calledMain = true;
  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var print = out;
  var printErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = print;
  err = printErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
    }
  } else {

    ABORT = true;
    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = false;

if (Module['noInitialRun']) shouldRunNow = false;


  noExitRuntime = true;

run();






// {{MODULE_ADDITIONS}}





  return Module.ready
}
);
})();
export default Module;