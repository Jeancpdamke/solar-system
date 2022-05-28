/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "b9007a7b4098e8878748";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CapsuleBufferGeometry, CapsuleGeometry, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, ColorManagement, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, Data3DTexture, DataArrayTexture, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, FaceColors, FileLoader, FlatShading, Float16BufferAttribute, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FramebufferTexture, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColorSpace, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBFormat, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGBColorSpace, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Source, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGL1Renderer, WebGL3DRenderTarget, WebGLArrayRenderTarget, WebGLCubeRenderTarget, WebGLMultipleRenderTargets, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, _SRGBAFormat, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/OrbitControls.js":
/*!*******************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/OrbitControls.js ***!
  \*******************************************************************/
/*! exports provided: OrbitControls, MapControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrbitControls\", function() { return OrbitControls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapControls\", function() { return MapControls; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// This set of controls performs orbiting, dollying (zooming), and panning.\n// Unlike TrackballControls, it maintains the \"up\" direction object.up (+Y by default).\n//\n//    Orbit - left mouse / touch: one-finger move\n//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish\n//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move\n\nconst _changeEvent = { type: 'change' };\nconst _startEvent = { type: 'start' };\nconst _endEvent = { type: 'end' };\n\nclass OrbitControls extends three__WEBPACK_IMPORTED_MODULE_0__[\"EventDispatcher\"] {\n\n\tconstructor( object, domElement ) {\n\n\t\tsuper();\n\n\t\tif ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter \"domElement\" is now mandatory.' );\n\t\tif ( domElement === document ) console.error( 'THREE.OrbitControls: \"document\" should not be used as the target \"domElement\". Please use \"renderer.domElement\" instead.' );\n\n\t\tthis.object = object;\n\t\tthis.domElement = domElement;\n\t\tthis.domElement.style.touchAction = 'none'; // disable touch scroll\n\n\t\t// Set to false to disable this control\n\t\tthis.enabled = true;\n\n\t\t// \"target\" sets the location of focus, where the object orbits around\n\t\tthis.target = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\n\t\t// How far you can dolly in and out ( PerspectiveCamera only )\n\t\tthis.minDistance = 0;\n\t\tthis.maxDistance = Infinity;\n\n\t\t// How far you can zoom in and out ( OrthographicCamera only )\n\t\tthis.minZoom = 0;\n\t\tthis.maxZoom = Infinity;\n\n\t\t// How far you can orbit vertically, upper and lower limits.\n\t\t// Range is 0 to Math.PI radians.\n\t\tthis.minPolarAngle = 0; // radians\n\t\tthis.maxPolarAngle = Math.PI; // radians\n\n\t\t// How far you can orbit horizontally, upper and lower limits.\n\t\t// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )\n\t\tthis.minAzimuthAngle = - Infinity; // radians\n\t\tthis.maxAzimuthAngle = Infinity; // radians\n\n\t\t// Set to true to enable damping (inertia)\n\t\t// If damping is enabled, you must call controls.update() in your animation loop\n\t\tthis.enableDamping = false;\n\t\tthis.dampingFactor = 0.05;\n\n\t\t// This option actually enables dollying in and out; left as \"zoom\" for backwards compatibility.\n\t\t// Set to false to disable zooming\n\t\tthis.enableZoom = true;\n\t\tthis.zoomSpeed = 1.0;\n\n\t\t// Set to false to disable rotating\n\t\tthis.enableRotate = true;\n\t\tthis.rotateSpeed = 1.0;\n\n\t\t// Set to false to disable panning\n\t\tthis.enablePan = true;\n\t\tthis.panSpeed = 1.0;\n\t\tthis.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up\n\t\tthis.keyPanSpeed = 7.0;\t// pixels moved per arrow key push\n\n\t\t// Set to true to automatically rotate around the target\n\t\t// If auto-rotate is enabled, you must call controls.update() in your animation loop\n\t\tthis.autoRotate = false;\n\t\tthis.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60\n\n\t\t// The four arrow keys\n\t\tthis.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };\n\n\t\t// Mouse buttons\n\t\tthis.mouseButtons = { LEFT: three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].ROTATE, MIDDLE: three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].DOLLY, RIGHT: three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].PAN };\n\n\t\t// Touch fingers\n\t\tthis.touches = { ONE: three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].ROTATE, TWO: three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].DOLLY_PAN };\n\n\t\t// for reset\n\t\tthis.target0 = this.target.clone();\n\t\tthis.position0 = this.object.position.clone();\n\t\tthis.zoom0 = this.object.zoom;\n\n\t\t// the target DOM element for key events\n\t\tthis._domElementKeyEvents = null;\n\n\t\t//\n\t\t// public methods\n\t\t//\n\n\t\tthis.getPolarAngle = function () {\n\n\t\t\treturn spherical.phi;\n\n\t\t};\n\n\t\tthis.getAzimuthalAngle = function () {\n\n\t\t\treturn spherical.theta;\n\n\t\t};\n\n\t\tthis.getDistance = function () {\n\n\t\t\treturn this.object.position.distanceTo( this.target );\n\n\t\t};\n\n\t\tthis.listenToKeyEvents = function ( domElement ) {\n\n\t\t\tdomElement.addEventListener( 'keydown', onKeyDown );\n\t\t\tthis._domElementKeyEvents = domElement;\n\n\t\t};\n\n\t\tthis.saveState = function () {\n\n\t\t\tscope.target0.copy( scope.target );\n\t\t\tscope.position0.copy( scope.object.position );\n\t\t\tscope.zoom0 = scope.object.zoom;\n\n\t\t};\n\n\t\tthis.reset = function () {\n\n\t\t\tscope.target.copy( scope.target0 );\n\t\t\tscope.object.position.copy( scope.position0 );\n\t\t\tscope.object.zoom = scope.zoom0;\n\n\t\t\tscope.object.updateProjectionMatrix();\n\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t\tscope.update();\n\n\t\t\tstate = STATE.NONE;\n\n\t\t};\n\n\t\t// this method is exposed, but perhaps it would be better if we can make it private...\n\t\tthis.update = function () {\n\n\t\t\tconst offset = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\n\t\t\t// so camera.up is the orbit axis\n\t\t\tconst quat = new three__WEBPACK_IMPORTED_MODULE_0__[\"Quaternion\"]().setFromUnitVectors( object.up, new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]( 0, 1, 0 ) );\n\t\t\tconst quatInverse = quat.clone().invert();\n\n\t\t\tconst lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\t\t\tconst lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__[\"Quaternion\"]();\n\n\t\t\tconst twoPI = 2 * Math.PI;\n\n\t\t\treturn function update() {\n\n\t\t\t\tconst position = scope.object.position;\n\n\t\t\t\toffset.copy( position ).sub( scope.target );\n\n\t\t\t\t// rotate offset to \"y-axis-is-up\" space\n\t\t\t\toffset.applyQuaternion( quat );\n\n\t\t\t\t// angle from z-axis around y-axis\n\t\t\t\tspherical.setFromVector3( offset );\n\n\t\t\t\tif ( scope.autoRotate && state === STATE.NONE ) {\n\n\t\t\t\t\trotateLeft( getAutoRotationAngle() );\n\n\t\t\t\t}\n\n\t\t\t\tif ( scope.enableDamping ) {\n\n\t\t\t\t\tspherical.theta += sphericalDelta.theta * scope.dampingFactor;\n\t\t\t\t\tspherical.phi += sphericalDelta.phi * scope.dampingFactor;\n\n\t\t\t\t} else {\n\n\t\t\t\t\tspherical.theta += sphericalDelta.theta;\n\t\t\t\t\tspherical.phi += sphericalDelta.phi;\n\n\t\t\t\t}\n\n\t\t\t\t// restrict theta to be between desired limits\n\n\t\t\t\tlet min = scope.minAzimuthAngle;\n\t\t\t\tlet max = scope.maxAzimuthAngle;\n\n\t\t\t\tif ( isFinite( min ) && isFinite( max ) ) {\n\n\t\t\t\t\tif ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;\n\n\t\t\t\t\tif ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;\n\n\t\t\t\t\tif ( min <= max ) {\n\n\t\t\t\t\t\tspherical.theta = Math.max( min, Math.min( max, spherical.theta ) );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tspherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?\n\t\t\t\t\t\t\tMath.max( min, spherical.theta ) :\n\t\t\t\t\t\t\tMath.min( max, spherical.theta );\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t// restrict phi to be between desired limits\n\t\t\t\tspherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );\n\n\t\t\t\tspherical.makeSafe();\n\n\n\t\t\t\tspherical.radius *= scale;\n\n\t\t\t\t// restrict radius to be between desired limits\n\t\t\t\tspherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );\n\n\t\t\t\t// move target to panned location\n\n\t\t\t\tif ( scope.enableDamping === true ) {\n\n\t\t\t\t\tscope.target.addScaledVector( panOffset, scope.dampingFactor );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tscope.target.add( panOffset );\n\n\t\t\t\t}\n\n\t\t\t\toffset.setFromSpherical( spherical );\n\n\t\t\t\t// rotate offset back to \"camera-up-vector-is-up\" space\n\t\t\t\toffset.applyQuaternion( quatInverse );\n\n\t\t\t\tposition.copy( scope.target ).add( offset );\n\n\t\t\t\tscope.object.lookAt( scope.target );\n\n\t\t\t\tif ( scope.enableDamping === true ) {\n\n\t\t\t\t\tsphericalDelta.theta *= ( 1 - scope.dampingFactor );\n\t\t\t\t\tsphericalDelta.phi *= ( 1 - scope.dampingFactor );\n\n\t\t\t\t\tpanOffset.multiplyScalar( 1 - scope.dampingFactor );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tsphericalDelta.set( 0, 0, 0 );\n\n\t\t\t\t\tpanOffset.set( 0, 0, 0 );\n\n\t\t\t\t}\n\n\t\t\t\tscale = 1;\n\n\t\t\t\t// update condition is:\n\t\t\t\t// min(camera displacement, camera rotation in radians)^2 > EPS\n\t\t\t\t// using small-angle approximation cos(x/2) = 1 - x^2 / 8\n\n\t\t\t\tif ( zoomChanged ||\n\t\t\t\t\tlastPosition.distanceToSquared( scope.object.position ) > EPS ||\n\t\t\t\t\t8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {\n\n\t\t\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t\t\t\tlastPosition.copy( scope.object.position );\n\t\t\t\t\tlastQuaternion.copy( scope.object.quaternion );\n\t\t\t\t\tzoomChanged = false;\n\n\t\t\t\t\treturn true;\n\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\n\t\t\t};\n\n\t\t}();\n\n\t\tthis.dispose = function () {\n\n\t\t\tscope.domElement.removeEventListener( 'contextmenu', onContextMenu );\n\n\t\t\tscope.domElement.removeEventListener( 'pointerdown', onPointerDown );\n\t\t\tscope.domElement.removeEventListener( 'pointercancel', onPointerCancel );\n\t\t\tscope.domElement.removeEventListener( 'wheel', onMouseWheel );\n\n\t\t\tscope.domElement.removeEventListener( 'pointermove', onPointerMove );\n\t\t\tscope.domElement.removeEventListener( 'pointerup', onPointerUp );\n\n\n\t\t\tif ( scope._domElementKeyEvents !== null ) {\n\n\t\t\t\tscope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );\n\n\t\t\t}\n\n\t\t\t//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?\n\n\t\t};\n\n\t\t//\n\t\t// internals\n\t\t//\n\n\t\tconst scope = this;\n\n\t\tconst STATE = {\n\t\t\tNONE: - 1,\n\t\t\tROTATE: 0,\n\t\t\tDOLLY: 1,\n\t\t\tPAN: 2,\n\t\t\tTOUCH_ROTATE: 3,\n\t\t\tTOUCH_PAN: 4,\n\t\t\tTOUCH_DOLLY_PAN: 5,\n\t\t\tTOUCH_DOLLY_ROTATE: 6\n\t\t};\n\n\t\tlet state = STATE.NONE;\n\n\t\tconst EPS = 0.000001;\n\n\t\t// current position in spherical coordinates\n\t\tconst spherical = new three__WEBPACK_IMPORTED_MODULE_0__[\"Spherical\"]();\n\t\tconst sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_0__[\"Spherical\"]();\n\n\t\tlet scale = 1;\n\t\tconst panOffset = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\t\tlet zoomChanged = false;\n\n\t\tconst rotateStart = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\tconst rotateEnd = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\tconst rotateDelta = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\n\t\tconst panStart = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\tconst panEnd = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\tconst panDelta = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\n\t\tconst dollyStart = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\tconst dollyEnd = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\tconst dollyDelta = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\n\t\tconst pointers = [];\n\t\tconst pointerPositions = {};\n\n\t\tfunction getAutoRotationAngle() {\n\n\t\t\treturn 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;\n\n\t\t}\n\n\t\tfunction getZoomScale() {\n\n\t\t\treturn Math.pow( 0.95, scope.zoomSpeed );\n\n\t\t}\n\n\t\tfunction rotateLeft( angle ) {\n\n\t\t\tsphericalDelta.theta -= angle;\n\n\t\t}\n\n\t\tfunction rotateUp( angle ) {\n\n\t\t\tsphericalDelta.phi -= angle;\n\n\t\t}\n\n\t\tconst panLeft = function () {\n\n\t\t\tconst v = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\n\t\t\treturn function panLeft( distance, objectMatrix ) {\n\n\t\t\t\tv.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix\n\t\t\t\tv.multiplyScalar( - distance );\n\n\t\t\t\tpanOffset.add( v );\n\n\t\t\t};\n\n\t\t}();\n\n\t\tconst panUp = function () {\n\n\t\t\tconst v = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\n\t\t\treturn function panUp( distance, objectMatrix ) {\n\n\t\t\t\tif ( scope.screenSpacePanning === true ) {\n\n\t\t\t\t\tv.setFromMatrixColumn( objectMatrix, 1 );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tv.setFromMatrixColumn( objectMatrix, 0 );\n\t\t\t\t\tv.crossVectors( scope.object.up, v );\n\n\t\t\t\t}\n\n\t\t\t\tv.multiplyScalar( distance );\n\n\t\t\t\tpanOffset.add( v );\n\n\t\t\t};\n\n\t\t}();\n\n\t\t// deltaX and deltaY are in pixels; right and down are positive\n\t\tconst pan = function () {\n\n\t\t\tconst offset = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n\n\t\t\treturn function pan( deltaX, deltaY ) {\n\n\t\t\t\tconst element = scope.domElement;\n\n\t\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\t\t// perspective\n\t\t\t\t\tconst position = scope.object.position;\n\t\t\t\t\toffset.copy( position ).sub( scope.target );\n\t\t\t\t\tlet targetDistance = offset.length();\n\n\t\t\t\t\t// half of the fov is center to top of screen\n\t\t\t\t\ttargetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );\n\n\t\t\t\t\t// we use only clientHeight here so aspect ratio does not distort speed\n\t\t\t\t\tpanLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );\n\t\t\t\t\tpanUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );\n\n\t\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\t\t// orthographic\n\t\t\t\t\tpanLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );\n\t\t\t\t\tpanUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );\n\n\t\t\t\t} else {\n\n\t\t\t\t\t// camera neither orthographic nor perspective\n\t\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );\n\t\t\t\t\tscope.enablePan = false;\n\n\t\t\t\t}\n\n\t\t\t};\n\n\t\t}();\n\n\t\tfunction dollyOut( dollyScale ) {\n\n\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\tscale /= dollyScale;\n\n\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\tscope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );\n\t\t\t\tscope.object.updateProjectionMatrix();\n\t\t\t\tzoomChanged = true;\n\n\t\t\t} else {\n\n\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );\n\t\t\t\tscope.enableZoom = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction dollyIn( dollyScale ) {\n\n\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\tscale *= dollyScale;\n\n\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\tscope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );\n\t\t\t\tscope.object.updateProjectionMatrix();\n\t\t\t\tzoomChanged = true;\n\n\t\t\t} else {\n\n\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );\n\t\t\t\tscope.enableZoom = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\t//\n\t\t// event callbacks - update the object state\n\t\t//\n\n\t\tfunction handleMouseDownRotate( event ) {\n\n\t\t\trotateStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseDownDolly( event ) {\n\n\t\t\tdollyStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseDownPan( event ) {\n\n\t\t\tpanStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseMoveRotate( event ) {\n\n\t\t\trotateEnd.set( event.clientX, event.clientY );\n\n\t\t\trotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );\n\n\t\t\tconst element = scope.domElement;\n\n\t\t\trotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height\n\n\t\t\trotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );\n\n\t\t\trotateStart.copy( rotateEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseMoveDolly( event ) {\n\n\t\t\tdollyEnd.set( event.clientX, event.clientY );\n\n\t\t\tdollyDelta.subVectors( dollyEnd, dollyStart );\n\n\t\t\tif ( dollyDelta.y > 0 ) {\n\n\t\t\t\tdollyOut( getZoomScale() );\n\n\t\t\t} else if ( dollyDelta.y < 0 ) {\n\n\t\t\t\tdollyIn( getZoomScale() );\n\n\t\t\t}\n\n\t\t\tdollyStart.copy( dollyEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseMovePan( event ) {\n\n\t\t\tpanEnd.set( event.clientX, event.clientY );\n\n\t\t\tpanDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );\n\n\t\t\tpan( panDelta.x, panDelta.y );\n\n\t\t\tpanStart.copy( panEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseWheel( event ) {\n\n\t\t\tif ( event.deltaY < 0 ) {\n\n\t\t\t\tdollyIn( getZoomScale() );\n\n\t\t\t} else if ( event.deltaY > 0 ) {\n\n\t\t\t\tdollyOut( getZoomScale() );\n\n\t\t\t}\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleKeyDown( event ) {\n\n\t\t\tlet needsUpdate = false;\n\n\t\t\tswitch ( event.code ) {\n\n\t\t\t\tcase scope.keys.UP:\n\t\t\t\t\tpan( 0, scope.keyPanSpeed );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.BOTTOM:\n\t\t\t\t\tpan( 0, - scope.keyPanSpeed );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.LEFT:\n\t\t\t\t\tpan( scope.keyPanSpeed, 0 );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.RIGHT:\n\t\t\t\t\tpan( - scope.keyPanSpeed, 0 );\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t\tif ( needsUpdate ) {\n\n\t\t\t\t// prevent the browser from scrolling on cursor keys\n\t\t\t\tevent.preventDefault();\n\n\t\t\t\tscope.update();\n\n\t\t\t}\n\n\n\t\t}\n\n\t\tfunction handleTouchStartRotate() {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\trotateStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );\n\t\t\t\tconst y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );\n\n\t\t\t\trotateStart.set( x, y );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction handleTouchStartPan() {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\tpanStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );\n\t\t\t\tconst y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );\n\n\t\t\t\tpanStart.set( x, y );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction handleTouchStartDolly() {\n\n\t\t\tconst dx = pointers[ 0 ].pageX - pointers[ 1 ].pageX;\n\t\t\tconst dy = pointers[ 0 ].pageY - pointers[ 1 ].pageY;\n\n\t\t\tconst distance = Math.sqrt( dx * dx + dy * dy );\n\n\t\t\tdollyStart.set( 0, distance );\n\n\t\t}\n\n\t\tfunction handleTouchStartDollyPan() {\n\n\t\t\tif ( scope.enableZoom ) handleTouchStartDolly();\n\n\t\t\tif ( scope.enablePan ) handleTouchStartPan();\n\n\t\t}\n\n\t\tfunction handleTouchStartDollyRotate() {\n\n\t\t\tif ( scope.enableZoom ) handleTouchStartDolly();\n\n\t\t\tif ( scope.enableRotate ) handleTouchStartRotate();\n\n\t\t}\n\n\t\tfunction handleTouchMoveRotate( event ) {\n\n\t\t\tif ( pointers.length == 1 ) {\n\n\t\t\t\trotateEnd.set( event.pageX, event.pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\t\tconst x = 0.5 * ( event.pageX + position.x );\n\t\t\t\tconst y = 0.5 * ( event.pageY + position.y );\n\n\t\t\t\trotateEnd.set( x, y );\n\n\t\t\t}\n\n\t\t\trotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );\n\n\t\t\tconst element = scope.domElement;\n\n\t\t\trotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height\n\n\t\t\trotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );\n\n\t\t\trotateStart.copy( rotateEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMovePan( event ) {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\tpanEnd.set( event.pageX, event.pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\t\tconst x = 0.5 * ( event.pageX + position.x );\n\t\t\t\tconst y = 0.5 * ( event.pageY + position.y );\n\n\t\t\t\tpanEnd.set( x, y );\n\n\t\t\t}\n\n\t\t\tpanDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );\n\n\t\t\tpan( panDelta.x, panDelta.y );\n\n\t\t\tpanStart.copy( panEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDolly( event ) {\n\n\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\tconst dx = event.pageX - position.x;\n\t\t\tconst dy = event.pageY - position.y;\n\n\t\t\tconst distance = Math.sqrt( dx * dx + dy * dy );\n\n\t\t\tdollyEnd.set( 0, distance );\n\n\t\t\tdollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );\n\n\t\t\tdollyOut( dollyDelta.y );\n\n\t\t\tdollyStart.copy( dollyEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDollyPan( event ) {\n\n\t\t\tif ( scope.enableZoom ) handleTouchMoveDolly( event );\n\n\t\t\tif ( scope.enablePan ) handleTouchMovePan( event );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDollyRotate( event ) {\n\n\t\t\tif ( scope.enableZoom ) handleTouchMoveDolly( event );\n\n\t\t\tif ( scope.enableRotate ) handleTouchMoveRotate( event );\n\n\t\t}\n\n\t\t//\n\t\t// event handlers - FSM: listen for events and reset state\n\t\t//\n\n\t\tfunction onPointerDown( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tif ( pointers.length === 0 ) {\n\n\t\t\t\tscope.domElement.setPointerCapture( event.pointerId );\n\n\t\t\t\tscope.domElement.addEventListener( 'pointermove', onPointerMove );\n\t\t\t\tscope.domElement.addEventListener( 'pointerup', onPointerUp );\n\n\t\t\t}\n\n\t\t\t//\n\n\t\t\taddPointer( event );\n\n\t\t\tif ( event.pointerType === 'touch' ) {\n\n\t\t\t\tonTouchStart( event );\n\n\t\t\t} else {\n\n\t\t\t\tonMouseDown( event );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerMove( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tif ( event.pointerType === 'touch' ) {\n\n\t\t\t\tonTouchMove( event );\n\n\t\t\t} else {\n\n\t\t\t\tonMouseMove( event );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerUp( event ) {\n\n\t\t    removePointer( event );\n\n\t\t    if ( pointers.length === 0 ) {\n\n\t\t        scope.domElement.releasePointerCapture( event.pointerId );\n\n\t\t        scope.domElement.removeEventListener( 'pointermove', onPointerMove );\n\t\t        scope.domElement.removeEventListener( 'pointerup', onPointerUp );\n\n\t\t    }\n\n\t\t    scope.dispatchEvent( _endEvent );\n\n\t\t    state = STATE.NONE;\n\n\t\t}\n\n\t\tfunction onPointerCancel( event ) {\n\n\t\t\tremovePointer( event );\n\n\t\t}\n\n\t\tfunction onMouseDown( event ) {\n\n\t\t\tlet mouseAction;\n\n\t\t\tswitch ( event.button ) {\n\n\t\t\t\tcase 0:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.LEFT;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 1:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.MIDDLE;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.RIGHT;\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tmouseAction = - 1;\n\n\t\t\t}\n\n\t\t\tswitch ( mouseAction ) {\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].DOLLY:\n\n\t\t\t\t\tif ( scope.enableZoom === false ) return;\n\n\t\t\t\t\thandleMouseDownDolly( event );\n\n\t\t\t\t\tstate = STATE.DOLLY;\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].ROTATE:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\thandleMouseDownPan( event );\n\n\t\t\t\t\t\tstate = STATE.PAN;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\thandleMouseDownRotate( event );\n\n\t\t\t\t\t\tstate = STATE.ROTATE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].PAN:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\thandleMouseDownRotate( event );\n\n\t\t\t\t\t\tstate = STATE.ROTATE;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\thandleMouseDownPan( event );\n\n\t\t\t\t\t\tstate = STATE.PAN;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t\tif ( state !== STATE.NONE ) {\n\n\t\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onMouseMove( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tswitch ( state ) {\n\n\t\t\t\tcase STATE.ROTATE:\n\n\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleMouseMoveRotate( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.DOLLY:\n\n\t\t\t\t\tif ( scope.enableZoom === false ) return;\n\n\t\t\t\t\thandleMouseMoveDolly( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.PAN:\n\n\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\thandleMouseMovePan( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onMouseWheel( event ) {\n\n\t\t\tif ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;\n\n\t\t\tevent.preventDefault();\n\n\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\thandleMouseWheel( event );\n\n\t\t\tscope.dispatchEvent( _endEvent );\n\n\t\t}\n\n\t\tfunction onKeyDown( event ) {\n\n\t\t\tif ( scope.enabled === false || scope.enablePan === false ) return;\n\n\t\t\thandleKeyDown( event );\n\n\t\t}\n\n\t\tfunction onTouchStart( event ) {\n\n\t\t\ttrackPointer( event );\n\n\t\t\tswitch ( pointers.length ) {\n\n\t\t\t\tcase 1:\n\n\t\t\t\t\tswitch ( scope.touches.ONE ) {\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].ROTATE:\n\n\t\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartRotate();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_ROTATE;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].PAN:\n\n\t\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartPan();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_PAN;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tdefault:\n\n\t\t\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2:\n\n\t\t\t\t\tswitch ( scope.touches.TWO ) {\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].DOLLY_PAN:\n\n\t\t\t\t\t\t\tif ( scope.enableZoom === false && scope.enablePan === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartDollyPan();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_DOLLY_PAN;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].DOLLY_ROTATE:\n\n\t\t\t\t\t\t\tif ( scope.enableZoom === false && scope.enableRotate === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartDollyRotate();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_DOLLY_ROTATE;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tdefault:\n\n\t\t\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t\tif ( state !== STATE.NONE ) {\n\n\t\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onTouchMove( event ) {\n\n\t\t\ttrackPointer( event );\n\n\t\t\tswitch ( state ) {\n\n\t\t\t\tcase STATE.TOUCH_ROTATE:\n\n\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleTouchMoveRotate( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_PAN:\n\n\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\thandleTouchMovePan( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_DOLLY_PAN:\n\n\t\t\t\t\tif ( scope.enableZoom === false && scope.enablePan === false ) return;\n\n\t\t\t\t\thandleTouchMoveDollyPan( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_DOLLY_ROTATE:\n\n\t\t\t\t\tif ( scope.enableZoom === false && scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleTouchMoveDollyRotate( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onContextMenu( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tevent.preventDefault();\n\n\t\t}\n\n\t\tfunction addPointer( event ) {\n\n\t\t\tpointers.push( event );\n\n\t\t}\n\n\t\tfunction removePointer( event ) {\n\n\t\t\tdelete pointerPositions[ event.pointerId ];\n\n\t\t\tfor ( let i = 0; i < pointers.length; i ++ ) {\n\n\t\t\t\tif ( pointers[ i ].pointerId == event.pointerId ) {\n\n\t\t\t\t\tpointers.splice( i, 1 );\n\t\t\t\t\treturn;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction trackPointer( event ) {\n\n\t\t\tlet position = pointerPositions[ event.pointerId ];\n\n\t\t\tif ( position === undefined ) {\n\n\t\t\t\tposition = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\n\t\t\t\tpointerPositions[ event.pointerId ] = position;\n\n\t\t\t}\n\n\t\t\tposition.set( event.pageX, event.pageY );\n\n\t\t}\n\n\t\tfunction getSecondPointerPosition( event ) {\n\n\t\t\tconst pointer = ( event.pointerId === pointers[ 0 ].pointerId ) ? pointers[ 1 ] : pointers[ 0 ];\n\n\t\t\treturn pointerPositions[ pointer.pointerId ];\n\n\t\t}\n\n\t\t//\n\n\t\tscope.domElement.addEventListener( 'contextmenu', onContextMenu );\n\n\t\tscope.domElement.addEventListener( 'pointerdown', onPointerDown );\n\t\tscope.domElement.addEventListener( 'pointercancel', onPointerCancel );\n\t\tscope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );\n\n\t\t// force an update at start\n\n\t\tthis.update();\n\n\t}\n\n}\n\n\n// This set of controls performs orbiting, dollying (zooming), and panning.\n// Unlike TrackballControls, it maintains the \"up\" direction object.up (+Y by default).\n// This is very similar to OrbitControls, another set of touch behavior\n//\n//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate\n//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish\n//    Pan - left mouse, or arrow keys / touch: one-finger move\n\nclass MapControls extends OrbitControls {\n\n\tconstructor( object, domElement ) {\n\n\t\tsuper( object, domElement );\n\n\t\tthis.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up\n\n\t\tthis.mouseButtons.LEFT = three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].PAN;\n\t\tthis.mouseButtons.RIGHT = three__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE\"].ROTATE;\n\n\t\tthis.touches.ONE = three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].PAN;\n\t\tthis.touches.TWO = three__WEBPACK_IMPORTED_MODULE_0__[\"TOUCH\"].DOLLY_ROTATE;\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/three/examples/jsm/controls/OrbitControls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar THREE = _interopRequireWildcard(_three);\n\nvar _OrbitControls = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\nvar _orbits = __webpack_require__(/*! ./orbits */ \"./src/orbits.js\");\n\nvar _planets = __webpack_require__(/*! ./planets */ \"./src/planets.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar scene = void 0,\n    camera = void 0,\n    renderer = void 0,\n    controls = void 0;\nvar sun = void 0;\nvar renderedPlanets = [];\n\nvar init = function init() {\n  scene = new THREE.Scene();\n  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n\n  renderer = new THREE.WebGLRenderer({ antialias: true });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.getElementById('app').appendChild(renderer.domElement);\n  camera.position.z = 38.3;\n\n  // Controls\n  controls = new _OrbitControls.MapControls(camera, renderer.domElement);\n  controls.enableDamping = true;\n  controls.rotateSpeed = 0.3;\n  controls.target.set(0, 0, 0);\n\n  // SUN\n  // Radius: 696.340 km\n  var SUN_RADIUS = 696340;\n  var scaledSunRadius = (0, _utils.getScaledStarRadius)(SUN_RADIUS);\n  var sunGeometry = new THREE.SphereGeometry(scaledSunRadius, 100, 100);\n  var sunTexture = new THREE.TextureLoader().load('textures/8k_sun.jpeg');\n  var sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });\n  sun = new THREE.Mesh(sunGeometry, sunMaterial);\n  scene.add(sun);\n\n  _planets.planets.forEach(function (_ref, index) {\n    var planetRadius = _ref.radius,\n        maxDistanceFromSun = _ref.maxDistanceFromSun,\n        planetTexture = _ref.textureFileName;\n\n    // Create the final object to add to the scene\n    var _orbits$index = _orbits.orbits[index],\n        focalDistance = _orbits$index.focalDistance,\n        axis = _orbits$index.axis,\n        orbitColor = _orbits$index.orbitColor;\n\n    renderedPlanets[index] = (0, _utils.createPlanetMesh)(planetRadius, planetTexture);\n    renderedPlanets[index].orbit = (0, _utils.createPlanetOrbit)(focalDistance, axis, orbitColor);\n    scene.add(renderedPlanets[index]);\n    scene.add(renderedPlanets[index].orbit);\n    renderedPlanets[index].position.z = (0, _utils.getScaledDistance)(maxDistanceFromSun);\n  });\n};\n\nvar animate = function animate() {\n  requestAnimationFrame(animate);\n\n  sun.rotation.y -= 0.001;\n\n  renderer.render(scene, camera);\n};\n\nvar onWindowResize = function onWindowResize() {\n  var aspectRatio = window.innerWidth / window.innerHeight;\n  camera.aspect = aspectRatio;\n  camera.updateProjectionMatrix();\n  controls.update();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\n\nwindow.addEventListener('resize', onWindowResize);\n\ninit();\nanimate();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/orbits.js":
/*!***********************!*\
  !*** ./src/orbits.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// Focal distance calculation:\n// Given that Semi-major axis = SMajA\n// AND Semi-minor axis = SMinA\n// Focal Distance =  Square root of (SMajA^2 + SMinA^2)\n\n\n// Minor axis calculation\n// Give eccentricity = ecc\n// AND Semi-major axis = SMaxA\n// Semi-minor axis = SMaxA * sqrt(1 - ecc^2)\n\n\nvar orbits = exports.orbits = [\n// MERCURY\n// Orbit Duration: 87.97 days\n// Semi-major axis: 57 909 050 km (0.387098 AU)\n// Semi-minor axis: 56 671 523 km (0.378826 AU)\n// Focal distance: 11 907 835,77 km\n// Orbital Eccentricity: 0.205630\n{\n    focalDistance: 11907835.77,\n    axis: {\n        semiMajor: 57909050,\n        semiMinor: 56671523\n    },\n    orbitColor: '#ffffff'\n},\n// VENUS\n// Orbit Duration: 225 days\n// Semi-major axis: 108 208 926 km (0.72333199 AU)\n// Semi-minor axis: 108 206 443 km (0.72331539 AU)\n// Focal distance: 733 047.99 km\n// Orbital eccentricity: 0.00677323\n{\n    focalDistance: 733047.99,\n    axis: {\n        semiMajor: 108208926,\n        semiMinor: 108206443\n    },\n    orbitColor: '#f77e4a'\n},\n// EARTH\n// Orbit Duration: 365 days\n// Semi-major axis: 149 597 887.5 km (1.000 000 112 4 AU)\n// Semi-minor axis: 149 576 999.826 km (0.999 860 486 9 AU)\n// Focal distance: 2499813.496 km\n// Orbital eccentricity\t0.016710219\n{\n    focalDistance: 2499813.496,\n    axis: {\n        semiMajor: 149597887.5,\n        semiMinor: 149576999.826\n    },\n    orbitColor: '#809fff'\n}];\n\n//# sourceURL=webpack:///./src/orbits.js?");

/***/ }),

/***/ "./src/planets.js":
/*!************************!*\
  !*** ./src/planets.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar planets = exports.planets = [\n// MERCURY\n// Radius: 2.439,7 km\n// Distance from the sun (Average): 58.000.000 km\n// Aphelion: 69.816.900 km (0.466697 AU)\n// Perihelion: 46,001,200 km (0.307499 AU)\n{\n    name: 'Mercury',\n    radius: 2439.7,\n    maxDistanceFromSun: 69816900,\n    textureFileName: 'textures/mercury.jpeg'\n},\n// VENUS\n// Radius: 6.051,8  km\n// Distance from the sun (Average): 108.200.000 km\n// Aphelion: 108.939.000 km (0.728213 AU)\n// Perihelion: 107.477.000 km (0.718440 AU)\n{\n    name: 'Venus',\n    radius: 6051.8,\n    maxDistanceFromSun: 108200000,\n    textureFileName: 'textures/venus.jpeg'\n},\n// EARTH\n// Radius: 6.371 km\n// Distance from the sun (Average): 151.020.000 km\n// Aphelion: 152.100.000 km\n// Perihelion: 147.095.000 km\n// Axial tilt: 23.4 degrees\n{\n    name: 'Earth',\n    radius: 6371,\n    maxDistanceFromSun: 152100000,\n    textureFileName: 'textures/earth.jpeg'\n}];\n\n//# sourceURL=webpack:///./src/planets.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.createPlanetOrbit = exports.createPlanetMesh = exports.getScaledDistance = exports.getScaledPlanetRadius = exports.getScaledStarRadius = undefined;\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar THREE = _interopRequireWildcard(_three);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Constant used to keep proportions, while rendering smaller objects\nvar SCALE_FACTOR = 1000000;\n\n// Constant used to diminish distances, so that the planets are easier to visualize\n// (Using this with a value different than 1 will make the proportions become not-realistic)\nvar DISTANCE_FACTOR = 30;\n\n// Constant to increase the size of the planets, so that they are easier to visualize\nvar PLANETS_SIZE_FACTOR = 15;\n\nvar getScaledStarRadius = exports.getScaledStarRadius = function getScaledStarRadius(starRadius) {\n    return starRadius / SCALE_FACTOR;\n};\n\nvar getScaledPlanetRadius = exports.getScaledPlanetRadius = function getScaledPlanetRadius(planetRadius) {\n    return planetRadius * (PLANETS_SIZE_FACTOR / SCALE_FACTOR);\n};\n\nvar getScaledDistance = exports.getScaledDistance = function getScaledDistance(distance) {\n    return distance / (SCALE_FACTOR * DISTANCE_FACTOR);\n};\n\nvar createPlanetMesh = exports.createPlanetMesh = function createPlanetMesh(planetRadius, textureFileName) {\n    var scaledRadius = getScaledPlanetRadius(planetRadius);\n    var geometry = new THREE.SphereGeometry(scaledRadius, 50, 50);\n    var texture = new THREE.TextureLoader().load(textureFileName);\n    var material = new THREE.MeshBasicMaterial({ map: texture });\n\n    return new THREE.Mesh(geometry, material);\n};\n\nvar createPlanetOrbit = exports.createPlanetOrbit = function createPlanetOrbit(focalDistance, radius, color) {\n    var tilt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n    var scaledFocalDistance = getScaledDistance(focalDistance);\n    var radiusX = getScaledDistance(radius.semiMinor);\n    var radiusY = getScaledDistance(radius.semiMajor);\n\n    var orbit = new THREE.EllipseCurve(0, scaledFocalDistance, // ax, aY\n    radiusX, radiusY, // xRadius, yRadius\n    0, 2 * Math.PI, // aStartAngle, aEndAngle\n    false, // aClockwise\n    0 // aRotation\n    );\n    var orbitPoints = orbit.getPoints(radiusY * 100);\n    var orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);\n    var orbitMaterial = new THREE.LineBasicMaterial({ color: color, opacity: 0.4, transparent: true });\n\n    var ellipse = new THREE.Line(orbitGeometry, orbitMaterial);\n    ellipse.rotateX(Math.PI / 2 + tilt);\n    return ellipse;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });