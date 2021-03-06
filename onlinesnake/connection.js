! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WebConnection = t() : e.WebConnection = t() }(window, function() {
    return r = {}, i.m = n = [function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        t.default = { PNTimeOperation: "PNTimeOperation", PNHistoryOperation: "PNHistoryOperation", PNDeleteMessagesOperation: "PNDeleteMessagesOperation", PNFetchMessagesOperation: "PNFetchMessagesOperation", PNMessageCounts: "PNMessageCountsOperation", PNSubscribeOperation: "PNSubscribeOperation", PNUnsubscribeOperation: "PNUnsubscribeOperation", PNPublishOperation: "PNPublishOperation", PNSignalOperation: "PNSignalOperation", PNAddMessageActionOperation: "PNAddActionOperation", PNRemoveMessageActionOperation: "PNRemoveMessageActionOperation", PNGetMessageActionsOperation: "PNGetMessageActionsOperation", PNCreateUserOperation: "PNCreateUserOperation", PNUpdateUserOperation: "PNUpdateUserOperation", PNDeleteUserOperation: "PNDeleteUserOperation", PNGetUserOperation: "PNGetUsersOperation", PNGetUsersOperation: "PNGetUsersOperation", PNCreateSpaceOperation: "PNCreateSpaceOperation", PNUpdateSpaceOperation: "PNUpdateSpaceOperation", PNDeleteSpaceOperation: "PNDeleteSpaceOperation", PNGetSpaceOperation: "PNGetSpacesOperation", PNGetSpacesOperation: "PNGetSpacesOperation", PNGetMembersOperation: "PNGetMembersOperation", PNUpdateMembersOperation: "PNUpdateMembersOperation", PNGetMembershipsOperation: "PNGetMembershipsOperation", PNUpdateMembershipsOperation: "PNUpdateMembershipsOperation", PNGetAllUUIDMetadataOperation: "PNGetAllUUIDMetadataOperation", PNGetUUIDMetadataOperation: "PNGetUUIDMetadataOperation", PNSetUUIDMetadataOperation: "PNSetUUIDMetadataOperation", PNRemoveUUIDMetadataOperation: "PNRemoveUUIDMetadataOperation", PNGetAllChannelMetadataOperation: "PNGetAllChannelMetadataOperation", PNGetChannelMetadataOperation: "PNGetChannelMetadataOperation", PNSetChannelMetadataOperation: "PNSetChannelMetadataOperation", PNRemoveChannelMetadataOperation: "PNRemoveChannelMetadataOperation", PNSetMembersOperation: "PNSetMembersOperation", PNSetMembershipsOperation: "PNSetMembershipsOperation", PNPushNotificationEnabledChannelsOperation: "PNPushNotificationEnabledChannelsOperation", PNRemoveAllPushNotificationsOperation: "PNRemoveAllPushNotificationsOperation", PNWhereNowOperation: "PNWhereNowOperation", PNSetStateOperation: "PNSetStateOperation", PNHereNowOperation: "PNHereNowOperation", PNGetStateOperation: "PNGetStateOperation", PNHeartbeatOperation: "PNHeartbeatOperation", PNChannelGroupsOperation: "PNChannelGroupsOperation", PNRemoveGroupOperation: "PNRemoveGroupOperation", PNChannelsForGroupOperation: "PNChannelsForGroupOperation", PNAddChannelsToGroupOperation: "PNAddChannelsToGroupOperation", PNRemoveChannelsFromGroupOperation: "PNRemoveChannelsFromGroupOperation", PNAccessManagerGrant: "PNAccessManagerGrant", PNAccessManagerGrantToken: "PNAccessManagerGrantToken", PNAccessManagerAudit: "PNAccessManagerAudit" }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        e.exports = {}
    }, function(t, e, n) {
        "use strict";
        (function(r) {
            function n(e) { return encodeURIComponent(e).replace(/[!~*'()]/g, function(e) { return "%".concat(e.charCodeAt(0).toString(16).toUpperCase()) }) }

            function e(e) { return function(e) { var t = []; return Object.keys(e).forEach(function(e) { return t.push(e) }), t }(e).sort() }
            t.exports = {
                signPamFromParams: function(t) { return e(t).map(function(e) { return "".concat(e, "=").concat(n(t[e])) }).join("&") },
                endsWith: function(e, t) { return -1 !== e.indexOf(t, this.length - t.length) },
                createPromise: function() { var n, r; return { promise: new Promise(function(e, t) { n = e, r = t }), reject: r, fulfill: n } },
                encodeString: n,
                deprecated: function(n) {
                    return function() {
                        var e, t;
                        void 0 !== r && "test" !== (null === (e = r) || void 0 === e ? void 0 : null === (t = e.env) || void 0 === t ? void 0 : "production") && console.warn("The Objects v1 API has been deprecated.\nYou can learn more about Objects v2 API at https://www.pubnub.com/docs/web-javascript/api-reference-objects.\nIf you have questions about the Objects v2 API or require additional help with migrating to the new data model, please contact WebConnection Support at support@pubnub.com.");
                        return n.apply(void 0, arguments)
                    }
                }
            }
        }).call(this, n(18))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(5)) && r.__esModule ? r : { default: r };
        n(1);

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var a, u, c, l = (a = f, (u = [{ key: "getAuthKey", value: function() { return this.authKey } }, { key: "setAuthKey", value: function(e) { return this.authKey = e, this } }, { key: "setCipherKey", value: function(e) { return this.cipherKey = e, this } }, { key: "getUUID", value: function() { return this.UUID } }, { key: "setUUID", value: function(e) { return this._db && this._db.set && this._db.set("".concat(this.subscribeKey, "uuid"), e), this.UUID = e, this } }, { key: "getFilterExpression", value: function() { return this.filterExpression } }, { key: "setFilterExpression", value: function(e) { return this.filterExpression = e, this } }, { key: "getPresenceTimeout", value: function() { return this._presenceTimeout } }, { key: "setPresenceTimeout", value: function(e) { return 20 <= e ? this._presenceTimeout = e : (this._presenceTimeout = 20, console.log("WARNING: Presence timeout is less than the minimum. Using minimum value: ", this._presenceTimeout)), this.setHeartbeatInterval(this._presenceTimeout / 2 - 1), this } }, { key: "setProxy", value: function(e) { this.proxy = e } }, { key: "getHeartbeatInterval", value: function() { return this._heartbeatInterval } }, { key: "setHeartbeatInterval", value: function(e) { return this._heartbeatInterval = e, this } }, { key: "getSubscribeTimeout", value: function() { return this._subscribeRequestTimeout } }, { key: "setSubscribeTimeout", value: function(e) { return this._subscribeRequestTimeout = e, this } }, { key: "getTransactionTimeout", value: function() { return this._transactionalRequestTimeout } }, { key: "setTransactionTimeout", value: function(e) { return this._transactionalRequestTimeout = e, this } }, { key: "isSendBeaconEnabled", value: function() { return this._useSendBeacon } }, { key: "setSendBeaconConfig", value: function(e) { return this._useSendBeacon = e, this } }, { key: "getVersion", value: function() { return "4.28.2" } }, { key: "_addPnsdkSuffix", value: function(e, t) { this._PNSDKSuffix[e] = t } }, { key: "_getPnsdkSuffix", value: function(n) { var r = this; return Object.keys(this._PNSDKSuffix).reduce(function(e, t) { return e + n + r._PNSDKSuffix[t] }, "") } }, { key: "_decideUUID", value: function(e) { return e || (this._db && this._db.get && this._db.get("".concat(this.subscribeKey, "uuid")) ? this._db.get("".concat(this.subscribeKey, "uuid")) : "pn-".concat(i.default.createUUID())) } }]) && o(a.prototype, u), void(c && o(a, c)), f);

        function f(e) {
            var t = e.setup,
                n = e.db;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, f), s(this, "_db", void 0), s(this, "subscribeKey", void 0), s(this, "publishKey", void 0), s(this, "secretKey", void 0), s(this, "cipherKey", void 0), s(this, "authKey", void 0), s(this, "UUID", void 0), s(this, "proxy", void 0), s(this, "instanceId", void 0), s(this, "sdkName", void 0), s(this, "sdkFamily", void 0), s(this, "partnerId", void 0), s(this, "filterExpression", void 0), s(this, "suppressLeaveEvents", void 0), s(this, "secure", void 0), s(this, "origin", void 0), s(this, "logVerbosity", void 0), s(this, "useInstanceId", void 0), s(this, "useRequestId", void 0), s(this, "keepAlive", void 0), s(this, "keepAliveSettings", void 0), s(this, "autoNetworkDetection", void 0), s(this, "announceSuccessfulHeartbeats", void 0), s(this, "announceFailedHeartbeats", void 0), s(this, "_presenceTimeout", void 0), s(this, "_heartbeatInterval", void 0), s(this, "_subscribeRequestTimeout", void 0), s(this, "_transactionalRequestTimeout", void 0), s(this, "_useSendBeacon", void 0), s(this, "_PNSDKSuffix", void 0), s(this, "requestMessageCountThreshold", void 0), s(this, "restore", void 0), s(this, "dedupeOnSubscribe", void 0), s(this, "maximumCacheSize", void 0), s(this, "customEncrypt", void 0), s(this, "customDecrypt", void 0), this._PNSDKSuffix = {}, this._db = n, this.instanceId = "pn-".concat(i.default.createUUID()), this.secretKey = t.secretKey || t.secret_key, this.subscribeKey = t.subscribeKey || t.subscribe_key, this.publishKey = t.publishKey || t.publish_key, this.sdkName = t.sdkName, this.sdkFamily = t.sdkFamily, this.partnerId = t.partnerId, this.setAuthKey(t.authKey), this.setCipherKey(t.cipherKey), this.setFilterExpression(t.filterExpression), this.origin = t.origin || "ps.pndsn.com", this.secure = t.ssl || !1, this.restore = t.restore || !1, this.proxy = t.proxy, this.keepAlive = t.keepAlive, this.keepAliveSettings = t.keepAliveSettings, this.autoNetworkDetection = t.autoNetworkDetection || !1, this.dedupeOnSubscribe = t.dedupeOnSubscribe || !1, this.maximumCacheSize = t.maximumCacheSize || 100, this.customEncrypt = t.customEncrypt, this.customDecrypt = t.customDecrypt, "undefined" != typeof location && "https:" === location.protocol && (this.secure = !0), this.logVerbosity = t.logVerbosity || !1, this.suppressLeaveEvents = t.suppressLeaveEvents || !1, this.announceFailedHeartbeats = t.announceFailedHeartbeats || !0, this.announceSuccessfulHeartbeats = t.announceSuccessfulHeartbeats || !1, this.useInstanceId = t.useInstanceId || !1, this.useRequestId = t.useRequestId || !1, this.requestMessageCountThreshold = t.requestMessageCountThreshold, this.setTransactionTimeout(t.transactionalRequestTimeout || 15e3), this.setSubscribeTimeout(t.subscribeRequestTimeout || 31e4), this.setSendBeaconConfig(t.useSendBeacon || !0), t.presenceTimeout ? this.setPresenceTimeout(t.presenceTimeout) : this._presenceTimeout = 300, null != t.heartbeatInterval && this.setHeartbeatInterval(t.heartbeatInterval), this.setUUID(this._decideUUID(t.uuid))
        }
        t.default = l, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        t.default = { PNNetworkUpCategory: "PNNetworkUpCategory", PNNetworkDownCategory: "PNNetworkDownCategory", PNNetworkIssuesCategory: "PNNetworkIssuesCategory", PNTimeoutCategory: "PNTimeoutCategory", PNBadRequestCategory: "PNBadRequestCategory", PNAccessDeniedCategory: "PNAccessDeniedCategory", PNUnknownCategory: "PNUnknownCategory", PNReconnectedCategory: "PNReconnectedCategory", PNConnectedCategory: "PNConnectedCategory", PNRequestMessageCountExceededCategory: "PNRequestMessageCountExceededCategory" }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(14)) && r.__esModule ? r : { default: r };
        var o = { createUUID: function() { return i.default.uuid ? i.default.uuid() : (0, i.default)() } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        r(n(3));
        var u = r(n(7));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var s, a, c, l = (s = f, (a = [{ key: "HMACSHA256", value: function(e) { return u.default.HmacSHA256(e, this._config.secretKey).toString(u.default.enc.Base64) } }, { key: "SHA256", value: function(e) { return u.default.SHA256(e).toString(u.default.enc.Hex) } }, { key: "_parseOptions", value: function(e) { var t = e || {}; return t.hasOwnProperty("encryptKey") || (t.encryptKey = this._defaultOptions.encryptKey), t.hasOwnProperty("keyEncoding") || (t.keyEncoding = this._defaultOptions.keyEncoding), t.hasOwnProperty("keyLength") || (t.keyLength = this._defaultOptions.keyLength), t.hasOwnProperty("mode") || (t.mode = this._defaultOptions.mode), -1 === this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase()) && (t.keyEncoding = this._defaultOptions.keyEncoding), -1 === this._allowedKeyLengths.indexOf(parseInt(t.keyLength, 10)) && (t.keyLength = this._defaultOptions.keyLength), -1 === this._allowedModes.indexOf(t.mode.toLowerCase()) && (t.mode = this._defaultOptions.mode), t } }, { key: "_decodeKey", value: function(e, t) { return "base64" === t.keyEncoding ? u.default.enc.Base64.parse(e) : "hex" === t.keyEncoding ? u.default.enc.Hex.parse(e) : e } }, { key: "_getPaddedKey", value: function(e, t) { return e = this._decodeKey(e, t), t.encryptKey ? u.default.enc.Utf8.parse(this.SHA256(e).slice(0, 32)) : e } }, { key: "_getMode", value: function(e) { return "ecb" === e.mode ? u.default.mode.ECB : u.default.mode.CBC } }, { key: "_getIV", value: function(e) { return "cbc" === e.mode ? u.default.enc.Utf8.parse(this._iv) : null } }, { key: "encrypt", value: function(e, t, n) { return this._config.customEncrypt ? this._config.customEncrypt(e) : this.pnEncrypt(e, t, n) } }, { key: "decrypt", value: function(e, t, n) { return this._config.customDecrypt ? this._config.customDecrypt(e) : this.pnDecrypt(e, t, n) } }, {
            key: "pnEncrypt",
            value: function(e, t, n) {
                if (!t && !this._config.cipherKey) return e;
                n = this._parseOptions(n);
                var r = this._getIV(n),
                    i = this._getMode(n),
                    o = this._getPaddedKey(t || this._config.cipherKey, n);
                return u.default.AES.encrypt(e, o, { iv: r, mode: i }).ciphertext.toString(u.default.enc.Base64) || e
            }
        }, {
            key: "pnDecrypt",
            value: function(e, t, n) {
                if (!t && !this._config.cipherKey) return e;
                n = this._parseOptions(n);
                var r = this._getIV(n),
                    i = this._getMode(n),
                    o = this._getPaddedKey(t || this._config.cipherKey, n);
                try {
                    var s = u.default.enc.Base64.parse(e),
                        a = u.default.AES.decrypt({ ciphertext: s }, o, { iv: r, mode: i }).toString(u.default.enc.Utf8);
                    return JSON.parse(a)
                } catch (e) { return null }
            }
        }]) && i(s.prototype, a), void(c && i(s, c)), f);

        function f(e) { var t = e.config;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, f), o(this, "_config", void 0), o(this, "_iv", void 0), o(this, "_allowedKeyEncodings", void 0), o(this, "_allowedKeyLengths", void 0), o(this, "_allowedModes", void 0), o(this, "_defaultOptions", void 0), this._config = t, this._iv = "0123456789012345", this._allowedKeyEncodings = ["hex", "utf8", "base64", "binary"], this._allowedKeyLengths = [128, 256], this._allowedModes = ["ecb", "cbc"], this._defaultOptions = { encryptKey: !0, keyEncoding: "utf8", keyLength: 256, mode: "cbc" } }
        t.default = l, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        var r, c, i, u, o, s, a, l, f, d, j = j || function(a) {
            function n() {}
            var e = {},
                t = e.lib = {},
                r = t.Base = {
                    extend: function(e) { n.prototype = this; var t = new n; return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() { t.$super.init.apply(this, arguments) }), (t.init.prototype = t).$super = this, t },
                    create: function() { var e = this.extend(); return e.init.apply(e, arguments), e },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() { return this.init.prototype.extend(this) }
                },
                u = t.WordArray = r.extend({
                    init: function(e, t) { e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length },
                    toString: function(e) { return (e || o).stringify(this) },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            r = this.sigBytes;
                        if (e = e.sigBytes, this.clamp(), r % 4)
                            for (var i = 0; i < e; i++) t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8;
                        else if (65535 < n.length)
                            for (i = 0; i < e; i += 4) t[r + i >>> 2] = n[i >>> 2];
                        else t.push.apply(t, n);
                        return this.sigBytes += e, this
                    },
                    clamp: function() {
                        var e = this.words,
                            t = this.sigBytes;
                        e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = a.ceil(t / 4)
                    },
                    clone: function() { var e = r.clone.call(this); return e.words = this.words.slice(0), e },
                    random: function(e) { for (var t = [], n = 0; n < e; n += 4) t.push(4294967296 * a.random() | 0); return new u.init(t, e) }
                }),
                i = e.enc = {},
                o = i.Hex = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var n = [], r = 0; r < e; r++) {
                            var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16))
                        }
                        return n.join("")
                    },
                    parse: function(e) { for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4; return new u.init(n, t / 2) }
                },
                s = i.Latin1 = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                        return n.join("")
                    },
                    parse: function(e) { for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8; return new u.init(n, t) }
                },
                c = i.Utf8 = { stringify: function(e) { try { return decodeURIComponent(escape(s.stringify(e))) } catch (e) { throw Error("Malformed UTF-8 data") } }, parse: function(e) { return s.parse(unescape(encodeURIComponent(e))) } },
                l = t.BufferedBlockAlgorithm = r.extend({
                    reset: function() { this._data = new u.init, this._nDataBytes = 0 },
                    _append: function(e) { "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes },
                    _process: function(e) {
                        var t = this._data,
                            n = t.words,
                            r = t.sigBytes,
                            i = this.blockSize,
                            o = r / (4 * i);
                        if (e = (o = e ? a.ceil(o) : a.max((0 | o) - this._minBufferSize, 0)) * i, r = a.min(4 * e, r), e) {
                            for (var s = 0; s < e; s += i) this._doProcessBlock(n, s);
                            s = n.splice(0, e), t.sigBytes -= r
                        }
                        return new u.init(s, r)
                    },
                    clone: function() { var e = r.clone.call(this); return e._data = this._data.clone(), e },
                    _minBufferSize: 0
                });
            t.Hasher = l.extend({ cfg: r.extend(), init: function(e) { this.cfg = this.cfg.extend(e), this.reset() }, reset: function() { l.reset.call(this), this._doReset() }, update: function(e) { return this._append(e), this._process(), this }, finalize: function(e) { return e && this._append(e), this._doFinalize() }, blockSize: 16, _createHelper: function(n) { return function(e, t) { return new n.init(t).finalize(e) } }, _createHmacHelper: function(n) { return function(e, t) { return new f.HMAC.init(n, t).finalize(e) } } });
            var f = e.algo = {};
            return e
        }(Math);
        ! function(i) {
            for (var e = j, t = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, o = [], h = [], s = function(e) { return 4294967296 * (e - (0 | e)) | 0 }, a = 2, u = 0; u < 64;) {
                var c;
                e: {
                    c = a;
                    for (var l = i.sqrt(c), f = 2; f <= l; f++)
                        if (!(c % f)) { c = !1; break e }
                    c = !0
                }
                c && (u < 8 && (o[u] = s(i.pow(a, .5))), h[u] = s(i.pow(a, 1 / 3)), u++), a++
            }
            var v = [];
            r = r.SHA256 = n.extend({
                _doReset: function() { this._hash = new t.init(o.slice(0)) },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], u = n[5], c = n[6], l = n[7], f = 0; f < 64; f++) {
                        if (f < 16) v[f] = 0 | e[t + f];
                        else {
                            var d = v[f - 15],
                                p = v[f - 2];
                            v[f] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + v[f - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + v[f - 16]
                        }
                        d = l + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & c) + h[f] + v[f], p = ((r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)) + (r & i ^ r & o ^ i & o), l = c, c = u, u = a, a = s + d | 0, s = o, o = i, i = r, r = d + p | 0
                    }
                    n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + u | 0, n[6] = n[6] + c | 0, n[7] = n[7] + l | 0
                },
                _doFinalize: function() {
                    var e = this._data,
                        t = e.words,
                        n = 8 * this._nDataBytes,
                        r = 8 * e.sigBytes;
                    return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (64 + r >>> 9 << 4)] = i.floor(n / 4294967296), t[15 + (64 + r >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                },
                clone: function() { var e = n.clone.call(this); return e._hash = this._hash.clone(), e }
            });
            e.SHA256 = n._createHelper(r), e.HmacSHA256 = n._createHmacHelper(r)
        }(Math), c = (r = j).enc.Utf8, r.algo.HMAC = r.lib.Base.extend({
                init: function(e, t) {
                    e = this._hasher = new e.init, "string" == typeof t && (t = c.parse(t));
                    var n = e.blockSize,
                        r = 4 * n;
                    t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                    for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), s = i.words, a = o.words, u = 0; u < n; u++) s[u] ^= 1549556828, a[u] ^= 909522486;
                    i.sigBytes = o.sigBytes = r, this.reset()
                },
                reset: function() {
                    var e = this._hasher;
                    e.reset(), e.update(this._iKey)
                },
                update: function(e) { return this._hasher.update(e), this },
                finalize: function(e) { var t = this._hasher; return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e)) }
            }), u = (i = j).lib.WordArray, i.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words,
                        n = e.sigBytes,
                        r = this._map;
                    e.clamp(), e = [];
                    for (var i = 0; i < n; i += 3)
                        for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < n; s++) e.push(r.charAt(o >>> 6 * (3 - s) & 63));
                    if (t = r.charAt(64))
                        for (; e.length % 4;) e.push(t);
                    return e.join("")
                },
                parse: function(e) {
                    var t = e.length,
                        n = this._map;
                    !(r = n.charAt(64)) || -1 != (r = e.indexOf(r)) && (t = r);
                    for (var r = [], i = 0, o = 0; o < t; o++)
                        if (o % 4) {
                            var s = n.indexOf(e.charAt(o - 1)) << o % 4 * 2,
                                a = n.indexOf(e.charAt(o)) >>> 6 - o % 4 * 2;
                            r[i >>> 2] |= (s | a) << 24 - i % 4 * 8, i++
                        }
                    return u.create(r, i)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            },
            function(o) {
                function O(e, t, n, r, i, o, s) { return ((e = e + (t & n | ~t & r) + i + s) << o | e >>> 32 - o) + t }

                function T(e, t, n, r, i, o, s) { return ((e = e + (t & r | n & ~r) + i + s) << o | e >>> 32 - o) + t }

                function M(e, t, n, r, i, o, s) { return ((e = e + (t ^ n ^ r) + i + s) << o | e >>> 32 - o) + t }

                function S(e, t, n, r, i, o, s) { return ((e = e + (n ^ (t | ~r)) + i + s) << o | e >>> 32 - o) + t }
                for (var e = j, t = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, w = [], i = 0; i < 64; i++) w[i] = 4294967296 * o.abs(o.sin(i + 1)) | 0;
                r = r.MD5 = n.extend({
                    _doReset: function() { this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878]) },
                    _doProcessBlock: function(e, t) {
                        for (var n = 0; n < 16; n++) {
                            var r = e[s = t + n];
                            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                        }
                        n = this._hash.words;
                        var i, o, s = e[t + 0],
                            a = (r = e[t + 1], e[t + 2]),
                            u = e[t + 3],
                            c = e[t + 4],
                            l = e[t + 5],
                            f = e[t + 6],
                            d = e[t + 7],
                            p = e[t + 8],
                            h = e[t + 9],
                            v = e[t + 10],
                            g = e[t + 11],
                            y = e[t + 12],
                            b = e[t + 13],
                            m = e[t + 14],
                            _ = e[t + 15],
                            k = n[0],
                            P = S(P = S(P = S(P = S(P = M(P = M(P = M(P = M(P = T(P = T(P = T(P = T(P = O(P = O(P = O(P = O(P = n[1], o = O(o = n[2], i = O(i = n[3], k = O(k, P, o, i, s, 7, w[0]), P, o, r, 12, w[1]), k, P, a, 17, w[2]), i, k, u, 22, w[3]), o = O(o, i = O(i, k = O(k, P, o, i, c, 7, w[4]), P, o, l, 12, w[5]), k, P, f, 17, w[6]), i, k, d, 22, w[7]), o = O(o, i = O(i, k = O(k, P, o, i, p, 7, w[8]), P, o, h, 12, w[9]), k, P, v, 17, w[10]), i, k, g, 22, w[11]), o = O(o, i = O(i, k = O(k, P, o, i, y, 7, w[12]), P, o, b, 12, w[13]), k, P, m, 17, w[14]), i, k, _, 22, w[15]), o = T(o, i = T(i, k = T(k, P, o, i, r, 5, w[16]), P, o, f, 9, w[17]), k, P, g, 14, w[18]), i, k, s, 20, w[19]), o = T(o, i = T(i, k = T(k, P, o, i, l, 5, w[20]), P, o, v, 9, w[21]), k, P, _, 14, w[22]), i, k, c, 20, w[23]), o = T(o, i = T(i, k = T(k, P, o, i, h, 5, w[24]), P, o, m, 9, w[25]), k, P, u, 14, w[26]), i, k, p, 20, w[27]), o = T(o, i = T(i, k = T(k, P, o, i, b, 5, w[28]), P, o, a, 9, w[29]), k, P, d, 14, w[30]), i, k, y, 20, w[31]), o = M(o, i = M(i, k = M(k, P, o, i, l, 4, w[32]), P, o, p, 11, w[33]), k, P, g, 16, w[34]), i, k, m, 23, w[35]), o = M(o, i = M(i, k = M(k, P, o, i, r, 4, w[36]), P, o, c, 11, w[37]), k, P, d, 16, w[38]), i, k, v, 23, w[39]), o = M(o, i = M(i, k = M(k, P, o, i, b, 4, w[40]), P, o, s, 11, w[41]), k, P, u, 16, w[42]), i, k, f, 23, w[43]), o = M(o, i = M(i, k = M(k, P, o, i, h, 4, w[44]), P, o, y, 11, w[45]), k, P, _, 16, w[46]), i, k, a, 23, w[47]), o = S(o, i = S(i, k = S(k, P, o, i, s, 6, w[48]), P, o, d, 10, w[49]), k, P, m, 15, w[50]), i, k, l, 21, w[51]), o = S(o, i = S(i, k = S(k, P, o, i, y, 6, w[52]), P, o, u, 10, w[53]), k, P, v, 15, w[54]), i, k, r, 21, w[55]), o = S(o, i = S(i, k = S(k, P, o, i, p, 6, w[56]), P, o, _, 10, w[57]), k, P, f, 15, w[58]), i, k, b, 21, w[59]), o = S(o, i = S(i, k = S(k, P, o, i, c, 6, w[60]), P, o, g, 10, w[61]), k, P, a, 15, w[62]), i, k, h, 21, w[63]);
                        n[0] = n[0] + k | 0, n[1] = n[1] + P | 0, n[2] = n[2] + o | 0, n[3] = n[3] + i | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            t = e.words,
                            n = 8 * this._nDataBytes,
                            r = 8 * e.sigBytes;
                        t[r >>> 5] |= 128 << 24 - r % 32;
                        var i = o.floor(n / 4294967296);
                        for (t[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (t.length + 1), this._process(), t = (e = this._hash).words, n = 0; n < 4; n++) r = t[n], t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                        return e
                    },
                    clone: function() { var e = n.clone.call(this); return e._hash = this._hash.clone(), e }
                }), e.MD5 = n._createHelper(r), e.HmacMD5 = n._createHmacHelper(r)
            }(Math), a = (o = (s = j).lib).Base, l = o.WordArray, f = (o = s.algo).EvpKDF = a.extend({
                cfg: a.extend({ keySize: 4, hasher: o.MD5, iterations: 1 }),
                init: function(e) { this.cfg = this.cfg.extend(e) },
                compute: function(e, t) {
                    for (var n = (s = this.cfg).hasher.create(), r = l.create(), i = r.words, o = s.keySize, s = s.iterations; i.length < o;) {
                        a && n.update(a);
                        var a = n.update(e).finalize(t);
                        n.reset();
                        for (var u = 1; u < s; u++) a = n.finalize(a), n.reset();
                        r.concat(a)
                    }
                    return r.sigBytes = 4 * o, r
                }
            }), s.EvpKDF = function(e, t, n) { return f.create(n).compute(e, t) }, j.lib.Cipher || function() {
                var e = (d = j).lib,
                    t = e.Base,
                    s = e.WordArray,
                    n = e.BufferedBlockAlgorithm,
                    r = d.enc.Base64,
                    i = d.algo.EvpKDF,
                    o = e.Cipher = n.extend({ cfg: t.extend(), createEncryptor: function(e, t) { return this.create(this._ENC_XFORM_MODE, e, t) }, createDecryptor: function(e, t) { return this.create(this._DEC_XFORM_MODE, e, t) }, init: function(e, t, n) { this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset() }, reset: function() { n.reset.call(this), this._doReset() }, process: function(e) { return this._append(e), this._process() }, finalize: function(e) { return e && this._append(e), this._doFinalize() }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function(r) { return { encrypt: function(e, t, n) { return ("string" == typeof t ? p : f).encrypt(r, e, t, n) }, decrypt: function(e, t, n) { return ("string" == typeof t ? p : f).decrypt(r, e, t, n) } } } });
                e.StreamCipher = o.extend({ _doFinalize: function() { return this._process(!0) }, blockSize: 1 });

                function a(e, t, n) {
                    var r = this._iv;
                    r ? this._iv = void 0 : r = this._prevBlock;
                    for (var i = 0; i < n; i++) e[t + i] ^= r[i]
                }
                var u = d.mode = {},
                    c = (e.BlockCipherMode = t.extend({ createEncryptor: function(e, t) { return this.Encryptor.create(e, t) }, createDecryptor: function(e, t) { return this.Decryptor.create(e, t) }, init: function(e, t) { this._cipher = e, this._iv = t } })).extend();
                c.Encryptor = c.extend({
                    processBlock: function(e, t) {
                        var n = this._cipher,
                            r = n.blockSize;
                        a.call(this, e, t, r), n.encryptBlock(e, t), this._prevBlock = e.slice(t, t + r)
                    }
                }), c.Decryptor = c.extend({
                    processBlock: function(e, t) {
                        var n = this._cipher,
                            r = n.blockSize,
                            i = e.slice(t, t + r);
                        n.decryptBlock(e, t), a.call(this, e, t, r), this._prevBlock = i
                    }
                }), u = u.CBC = c, c = (d.pad = {}).Pkcs7 = {
                    pad: function(e, t) {
                        for (var n, r = (n = (n = 4 * t) - e.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], o = 0; o < n; o += 4) i.push(r);
                        n = s.create(i, n), e.concat(n)
                    },
                    unpad: function(e) { e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2] }
                }, e.BlockCipher = o.extend({
                    cfg: o.cfg.extend({ mode: u, padding: c }),
                    reset: function() {
                        o.reset.call(this);
                        var e = (t = this.cfg).iv,
                            t = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var n = t.createEncryptor;
                        else n = t.createDecryptor, this._minBufferSize = 1;
                        this._mode = n.call(t, this, e && e.words)
                    },
                    _doProcessBlock: function(e, t) { this._mode.processBlock(e, t) },
                    _doFinalize: function() { var e = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { e.pad(this._data, this.blockSize); var t = this._process(!0) } else t = this._process(!0), e.unpad(t); return t },
                    blockSize: 4
                });
                var l = e.CipherParams = t.extend({ init: function(e) { this.mixIn(e) }, toString: function(e) { return (e || this.formatter).stringify(this) } }),
                    f = (u = (d.format = {}).OpenSSL = {
                        stringify: function(e) { var t = e.ciphertext; return ((e = e.salt) ? s.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(r) },
                        parse: function(e) {
                            var t = (e = r.parse(e)).words;
                            if (1398893684 == t[0] && 1701076831 == t[1]) {
                                var n = s.create(t.slice(2, 4));
                                t.splice(0, 4), e.sigBytes -= 16
                            }
                            return l.create({ ciphertext: e, salt: n })
                        }
                    }, e.SerializableCipher = t.extend({ cfg: t.extend({ format: u }), encrypt: function(e, t, n, r) { r = this.cfg.extend(r); var i = e.createEncryptor(n, r); return t = i.finalize(t), i = i.cfg, l.create({ ciphertext: t, key: n, iv: i.iv, algorithm: e, mode: i.mode, padding: i.padding, blockSize: e.blockSize, formatter: r.format }) }, decrypt: function(e, t, n, r) { return r = this.cfg.extend(r), t = this._parse(t, r.format), e.createDecryptor(n, r).finalize(t.ciphertext) }, _parse: function(e, t) { return "string" == typeof e ? t.parse(e, this) : e } })),
                    d = (d.kdf = {}).OpenSSL = { execute: function(e, t, n, r) { return r = r || s.random(8), e = i.create({ keySize: t + n }).compute(e, r), n = s.create(e.words.slice(t), 4 * n), e.sigBytes = 4 * t, l.create({ key: e, iv: n, salt: r }) } },
                    p = e.PasswordBasedCipher = f.extend({ cfg: f.cfg.extend({ kdf: d }), encrypt: function(e, t, n, r) { return n = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize), r.iv = n.iv, (e = f.encrypt.call(this, e, t, n.key, r)).mixIn(n), e }, decrypt: function(e, t, n, r) { return r = this.cfg.extend(r), t = this._parse(t, r.format), n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt), r.iv = n.iv, f.decrypt.call(this, e, t, n.key, r) } })
            }(),
            function() {
                for (var e = j, t = e.lib.BlockCipher, n = e.algo, s = [], r = [], i = [], o = [], a = [], u = [], c = [], l = [], f = [], d = [], p = [], h = 0; h < 256; h++) p[h] = h < 128 ? h << 1 : h << 1 ^ 283;
                var v = 0,
                    g = 0;
                for (h = 0; h < 256; h++) {
                    var y = (y = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4) >>> 8 ^ 255 & y ^ 99;
                    s[v] = y;
                    var b = p[r[y] = v],
                        m = p[b],
                        _ = p[m],
                        k = 257 * p[y] ^ 16843008 * y;
                    i[v] = k << 24 | k >>> 8, o[v] = k << 16 | k >>> 16, a[v] = k << 8 | k >>> 24, u[v] = k, k = 16843009 * _ ^ 65537 * m ^ 257 * b ^ 16843008 * v, c[y] = k << 24 | k >>> 8, l[y] = k << 16 | k >>> 16, f[y] = k << 8 | k >>> 24, d[y] = k, v ? (v = b ^ p[p[p[_ ^ b]]], g ^= p[p[g]]) : v = g = 1
                }
                var P = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                n = n.AES = t.extend({
                    _doReset: function() {
                        for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), r = this._keySchedule = [], i = 0; i < n; i++)
                            if (i < t) r[i] = e[i];
                            else {
                                var o = r[i - 1];
                                i % t ? 6 < t && 4 == i % t && (o = s[o >>> 24] << 24 | s[o >>> 16 & 255] << 16 | s[o >>> 8 & 255] << 8 | s[255 & o]) : (o = s[(o = o << 8 | o >>> 24) >>> 24] << 24 | s[o >>> 16 & 255] << 16 | s[o >>> 8 & 255] << 8 | s[255 & o], o ^= P[i / t | 0] << 24), r[i] = r[i - t] ^ o
                            }
                        for (e = this._invKeySchedule = [], t = 0; t < n; t++) i = n - t, o = t % 4 ? r[i] : r[i - 4], e[t] = t < 4 || i <= 4 ? o : c[s[o >>> 24]] ^ l[s[o >>> 16 & 255]] ^ f[s[o >>> 8 & 255]] ^ d[s[255 & o]]
                    },
                    encryptBlock: function(e, t) { this._doCryptBlock(e, t, this._keySchedule, i, o, a, u, s) },
                    decryptBlock: function(e, t) {
                        var n = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, c, l, f, d, r), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n
                    },
                    _doCryptBlock: function(e, t, n, r, i, o, s, a) {
                        for (var u = this._nRounds, c = e[t] ^ n[0], l = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], d = e[t + 3] ^ n[3], p = 4, h = 1; h < u; h++) {
                            var v = r[c >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & d] ^ n[p++],
                                g = r[l >>> 24] ^ i[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & c] ^ n[p++],
                                y = r[f >>> 24] ^ i[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & l] ^ n[p++];
                            d = r[d >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ n[p++], c = v, l = g, f = y
                        }
                        v = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & d]) ^ n[p++], g = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & c]) ^ n[p++], y = (a[f >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ n[p++], d = (a[d >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ n[p++], e[t] = v, e[t + 1] = g, e[t + 2] = y, e[t + 3] = d
                    },
                    keySize: 8
                });
                e.AES = t._createHelper(n)
            }(), j.mode.ECB = ((d = j.lib.BlockCipherMode.extend()).Encryptor = d.extend({ processBlock: function(e, t) { this._cipher.encryptBlock(e, t) } }), d.Decryptor = d.extend({ processBlock: function(e, t) { this._cipher.decryptBlock(e, t) } }), d), e.exports = j
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        n(1);
        var r, i = (r = n(4)) && r.__esModule ? r : { default: r };

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var s, a, u, c = (s = l, (a = [{ key: "addListener", value: function(e) { this._listeners.push(e) } }, {
            key: "removeListener",
            value: function(t) {
                var n = [];
                this._listeners.forEach(function(e) { e !== t && n.push(e) }), this._listeners = n
            }
        }, { key: "removeAllListeners", value: function() { this._listeners = [] } }, { key: "announcePresence", value: function(t) { this._listeners.forEach(function(e) { e.presence && e.presence(t) }) } }, { key: "announceStatus", value: function(t) { this._listeners.forEach(function(e) { e.status && e.status(t) }) } }, { key: "announceMessage", value: function(t) { this._listeners.forEach(function(e) { e.message && e.message(t) }) } }, { key: "announceSignal", value: function(t) { this._listeners.forEach(function(e) { e.signal && e.signal(t) }) } }, { key: "announceMessageAction", value: function(t) { this._listeners.forEach(function(e) { e.messageAction && e.messageAction(t) }) } }, { key: "announceObjects", value: function(t) { this._listeners.forEach(function(e) { e.objects && e.objects(t) }) } }, { key: "announceUser", value: function(t) { this._listeners.forEach(function(e) { e.user && e.user(t) }) } }, { key: "announceSpace", value: function(t) { this._listeners.forEach(function(e) { e.space && e.space(t) }) } }, { key: "announceMembership", value: function(t) { this._listeners.forEach(function(e) { e.membership && e.membership(t) }) } }, {
            key: "announceNetworkUp",
            value: function() {
                var e = {};
                e.category = i.default.PNNetworkUpCategory, this.announceStatus(e)
            }
        }, {
            key: "announceNetworkDown",
            value: function() {
                var e = {};
                e.category = i.default.PNNetworkDownCategory, this.announceStatus(e)
            }
        }]) && o(s.prototype, a), void(u && o(s, u)), l);

        function l() {
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l),
            function(e, t, n) { t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n }(this, "_listeners", void 0), this._listeners = []
        }
        t.default = c, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNTimeOperation }, t.getURL = function() { return "/time/0" }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.prepareParams = function() { return {} }, t.isAuthSupported = function() { return !1 }, t.handleResponse = function(e, t) { return { timetoken: t[0] } }, t.validateParams = function() {};
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return null !== e && "object" == typeof e }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var i = l(n(12)),
            r = l(n(13)),
            o = l(n(81)),
            c = l(n(7)),
            s = l(n(82)),
            a = l(n(83)),
            u = n(84);
        n(1);

        function l(e) { return e && e.__esModule ? e : { default: e } }

        function f(e, t) { return !t || "object" !== h(t) && "function" != typeof t ? function(e) { if (void 0 !== e) return e; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(e) : t }

        function d(e) { return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

        function p(e, t) { return (p = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function h(e) { return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function v(e) {
            if (!navigator || !navigator.sendBeacon) return !1;
            navigator.sendBeacon(e)
        }

        function g(e) {
            for (var t = c.default.enc.Base64.parse(e).words, n = new ArrayBuffer(4 * t.length), r = new Uint8Array(n), i = 0, o = 0, s = 0; s < t.length; s += 1) {
                var a = t[s];
                r[o = 4 * s] = (4278190080 & a) >> 24, r[o + 1] = (16711680 & a) >> 16, r[o + 2] = (65280 & a) >> 8, r[o + 3] = 255 & a
            }
            for (var u = o + 3; o <= u; u -= 1) 0 === r[u] && (i += 1);
            return 0 < i ? r.buffer.slice(0, r.byteLength - i) : r.buffer
        }

        function y(i) {
            function o(e) { return e && "object" === h(e) && e.constructor === Object }
            if (!o(i)) return i;
            var s = {};
            return Object.keys(i).forEach(function(e) {
                var t = function(e) { return "string" == typeof e || e instanceof String }(e),
                    n = e,
                    r = i[e];
                Array.isArray(e) || t && 0 <= e.indexOf(",") ? n = (t ? e.split(",") : e).reduce(function(e, t) { return e += String.fromCharCode(t) }, "") : (function(e) { return "number" == typeof e && isFinite(e) }(e) || t && !isNaN(e)) && (n = String.fromCharCode(t ? parseInt(e, 10) : 10));
                s[n] = o(r) ? y(r) : r
            }), s
        }
        var b = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t)
        }(m, r.default), m);

        function m(e) {
            var t;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, m);
            var n = e.listenToBrowserNetworkEvents,
                r = void 0 === n || n;
            return e.db = s.default, e.sdkFamily = "Web", e.networking = new o.default({ del: u.del, get: u.get, post: u.post, patch: u.patch, sendBeacon: v }), e.cbor = new a.default(function(e) { return y(i.default.decode(e)) }, g), t = f(this, d(m).call(this, e)), r && (window.addEventListener("offline", function() { t.networkDownDetected() }), window.addEventListener("online", function() { t.networkUpDetected() })), t
        }
        t.default = b, e.exports = t.default
    }, function(t, n, r) {
        var o, s;
        ! function(e, M) {
            "use strict";
            var S = Math.pow(2, -24),
                i = Math.pow(2, 32),
                v = Math.pow(2, 53);
            (s = "function" == typeof(o = {
                encode: function(e) {
                    var s, a = new ArrayBuffer(256),
                        u = new DataView(a),
                        c = 0;

                    function l(e) {
                        for (var t = a.byteLength, n = c + e; t < n;) t *= 2;
                        if (t !== a.byteLength) {
                            var r = u;
                            a = new ArrayBuffer(t), u = new DataView(a);
                            for (var i = c + 3 >> 2, o = 0; o < i; ++o) u.setUint32(4 * o, r.getUint32(4 * o))
                        }
                        return s = e, u
                    }

                    function f() { c += s }

                    function d(e) { f(l(1).setUint8(c, e)) }

                    function p(e) {
                        for (var t = l(e.length), n = 0; n < e.length; ++n) t.setUint8(c + n, e[n]);
                        f()
                    }

                    function h(e, t) {
                        t < 24 ? d(e << 5 | t) : t < 256 ? (d(e << 5 | 24), d(t)) : t < 65536 ? (d(e << 5 | 25), function(e) { f(l(2).setUint16(c, e)) }(t)) : t < 4294967296 ? (d(e << 5 | 26), function(e) { f(l(4).setUint32(c, e)) }(t)) : (d(e << 5 | 27), function(e) {
                            var t = e % i,
                                n = (e - t) / i,
                                r = l(8);
                            r.setUint32(c, n), r.setUint32(c + 4, t), f()
                        }(t))
                    }
                    if (function e(t) {
                            var n;
                            if (!1 === t) return d(244);
                            if (!0 === t) return d(245);
                            if (null === t) return d(246);
                            if (t === M) return d(247);
                            switch (typeof t) {
                                case "number":
                                    if (Math.floor(t) === t) { if (0 <= t && t <= v) return h(0, t); if (-v <= t && t < 0) return h(1, -(t + 1)) }
                                    return d(251),
                                        function(e) { f(l(8).setFloat64(c, e)) }(t);
                                case "string":
                                    var r = [];
                                    for (n = 0; n < t.length; ++n) {
                                        var i = t.charCodeAt(n);
                                        i < 128 ? r.push(i) : (i < 2048 ? r.push(192 | i >> 6) : (i < 55296 ? r.push(224 | i >> 12) : (i = (1023 & i) << 10, i |= 1023 & t.charCodeAt(++n), i += 65536, r.push(240 | i >> 18), r.push(128 | i >> 12 & 63)), r.push(128 | i >> 6 & 63)), r.push(128 | 63 & i))
                                    }
                                    return h(3, r.length), p(r);
                                default:
                                    var o;
                                    if (Array.isArray(t))
                                        for (h(4, o = t.length), n = 0; n < o; ++n) e(t[n]);
                                    else if (t instanceof Uint8Array) h(2, t.length), p(t);
                                    else {
                                        var s = Object.keys(t);
                                        for (h(5, o = s.length), n = 0; n < o; ++n) {
                                            var a = s[n];
                                            e(a), e(t[a])
                                        }
                                    }
                            }
                        }(e), "slice" in a) return a.slice(0, c);
                    for (var t = new ArrayBuffer(c), n = new DataView(t), r = 0; r < c; ++r) n.setUint8(r, u.getUint8(r));
                    return t
                },
                decode: function(t, p, h) {
                    var v = new DataView(t),
                        g = 0;

                    function y(e, t) { return g += t, e }

                    function b(e) { return y(new Uint8Array(t, g, e), e) }

                    function m() { return y(v.getUint8(g), 1) }

                    function _() { return y(v.getUint16(g), 2) }

                    function n() { return y(v.getUint32(g), 4) }

                    function k() { return 255 === v.getUint8(g) && (g += 1, !0) }

                    function P(e) { if (e < 24) return e; if (24 === e) return m(); if (25 === e) return _(); if (26 === e) return n(); if (27 === e) return n() * i + n(); if (31 === e) return -1; throw "Invalid length encoding" }

                    function O(e) { var t = m(); if (255 === t) return -1; var n = P(31 & t); if (n < 0 || t >> 5 !== e) throw "Invalid indefinite length element"; return n }

                    function T(e, t) {
                        for (var n = 0; n < t; ++n) {
                            var r = m();
                            128 & r && (r < 224 ? (r = (31 & r) << 6 | 63 & m(), t -= 1) : r < 240 ? (r = (15 & r) << 12 | (63 & m()) << 6 | 63 & m(), t -= 2) : (r = (15 & r) << 18 | (63 & m()) << 12 | (63 & m()) << 6 | 63 & m(), t -= 3)), r < 65536 ? e.push(r) : (r -= 65536, e.push(55296 | r >> 10), e.push(56320 | 1023 & r))
                        }
                    }
                    "function" != typeof p && (p = function(e) { return e }), "function" != typeof h && (h = function() { return M });
                    var e = function e() {
                        var t, n, r = m(),
                            i = r >> 5,
                            o = 31 & r;
                        if (7 == i) switch (o) {
                            case 25:
                                return function() {
                                    var e = new ArrayBuffer(4),
                                        t = new DataView(e),
                                        n = _(),
                                        r = 32768 & n,
                                        i = 31744 & n,
                                        o = 1023 & n;
                                    if (31744 === i) i = 261120;
                                    else if (0 !== i) i += 114688;
                                    else if (0 != o) return o * S;
                                    return t.setUint32(0, r << 16 | i << 13 | o << 13), t.getFloat32(0)
                                }();
                            case 26:
                                return y(v.getFloat32(g), 4);
                            case 27:
                                return y(v.getFloat64(g), 8)
                        }
                        if ((n = P(o)) < 0 && (i < 2 || 6 < i)) throw "Invalid length";
                        switch (i) {
                            case 0:
                                return n;
                            case 1:
                                return -1 - n;
                            case 2:
                                if (n < 0) {
                                    for (var s = [], a = 0; 0 <= (n = O(i));) a += n, s.push(b(n));
                                    var u = new Uint8Array(a),
                                        c = 0;
                                    for (t = 0; t < s.length; ++t) u.set(s[t], c), c += s[t].length;
                                    return u
                                }
                                return b(n);
                            case 3:
                                var l = [];
                                if (n < 0)
                                    for (; 0 <= (n = O(i));) T(l, n);
                                else T(l, n);
                                return String.fromCharCode.apply(null, l);
                            case 4:
                                var f;
                                if (n < 0)
                                    for (f = []; !k();) f.push(e());
                                else
                                    for (f = new Array(n), t = 0; t < n; ++t) f[t] = e();
                                return f;
                            case 5:
                                var d = {};
                                for (t = 0; t < n || n < 0 && !k(); ++t) d[e()] = e();
                                return d;
                            case 6:
                                return p(e(), n);
                            case 7:
                                switch (n) {
                                    case 20:
                                        return !1;
                                    case 21:
                                        return !0;
                                    case 22:
                                        return null;
                                    case 23:
                                        return M;
                                    default:
                                        return h(n)
                                }
                        }
                    }();
                    if (g !== t.byteLength) throw "Remaining bytes";
                    return e
                }
            }) ? o.call(n, r, n, t) : o) === M || (t.exports = s)
        }()
    }, function(e, t, n) {
        "use strict";

        function s(e) { return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var g = l(n(3)),
            y = l(n(6)),
            b = l(n(15)),
            m = l(n(19)),
            r = l(n(20)),
            _ = l(n(8)),
            k = l(n(21)),
            P = l(n(22)),
            O = n(2),
            T = c(n(23)),
            M = c(n(24)),
            S = c(n(25)),
            w = c(n(26)),
            j = c(n(27)),
            C = c(n(28)),
            N = c(n(29)),
            A = c(n(30)),
            R = c(n(31)),
            E = c(n(32)),
            U = c(n(33)),
            x = c(n(34)),
            D = c(n(35)),
            K = c(n(36)),
            I = c(n(37)),
            G = c(n(38)),
            L = c(n(39)),
            F = c(n(40)),
            q = l(n(41)),
            H = l(n(42)),
            B = l(n(43)),
            z = l(n(44)),
            W = l(n(45)),
            X = l(n(46)),
            V = l(n(47)),
            J = l(n(48)),
            $ = l(n(49)),
            Q = l(n(50)),
            Y = l(n(51)),
            Z = l(n(52)),
            ee = c(n(53)),
            te = c(n(54)),
            ne = c(n(55)),
            re = c(n(56)),
            ie = c(n(57)),
            oe = c(n(58)),
            se = c(n(59)),
            ae = c(n(60)),
            ue = c(n(61)),
            ce = c(n(62)),
            le = c(n(63)),
            fe = c(n(64)),
            de = c(n(65)),
            pe = c(n(66)),
            he = c(n(67)),
            ve = c(n(68)),
            ge = c(n(69)),
            ye = c(n(70)),
            be = c(n(71)),
            me = c(n(72)),
            _e = c(n(73)),
            ke = c(n(74)),
            Pe = c(n(75)),
            Oe = c(n(76)),
            Te = c(n(77)),
            Me = c(n(78)),
            Se = c(n(79)),
            we = c(n(9)),
            je = c(n(80)),
            i = l(n(0)),
            o = l(n(4)),
            a = (n(1), l(n(5)));

        function u() { if ("function" != typeof WeakMap) return null; var e = new WeakMap; return u = function() { return e }, e }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== s(e) && "function" != typeof e) return { default: e };
            var t = u();
            if (t && t.has(e)) return t.get(e);
            var n = {},
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
            return n.default = e, t && t.set(e, n), n
        }

        function l(e) { return e && e.__esModule ? e : { default: e } }

        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r)
            }
            return n
        }

        function Ce(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(n), !0).forEach(function(e) { Ne(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
            }
            return t
        }

        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Ne(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var p, h, v, Ae = (p = Re, v = [{ key: "notificationPayload", value: function(e, t) { return new r.default(e, t) } }, { key: "generateUUID", value: function() { return a.default.createUUID() } }], (h = [{ key: "getVersion", value: function() { return this._config.getVersion() } }, { key: "_addPnsdkSuffix", value: function(e, t) { this._config._addPnsdkSuffix(e, t) } }, { key: "networkDownDetected", value: function() { this._listenerManager.announceNetworkDown(), this._config.restore ? this.disconnect() : this.destroy(!0) } }, { key: "networkUpDetected", value: function() { this._listenerManager.announceNetworkUp(), this.reconnect() } }]) && d(p.prototype, h), void(v && d(p, v)), Re);

        function Re(e) {
            var n = this;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Re), Ne(this, "_config", void 0), Ne(this, "_telemetryManager", void 0), Ne(this, "_listenerManager", void 0), Ne(this, "_tokenManager", void 0), Ne(this, "time", void 0), Ne(this, "publish", void 0), Ne(this, "fire", void 0), Ne(this, "history", void 0), Ne(this, "deleteMessages", void 0), Ne(this, "messageCounts", void 0), Ne(this, "fetchMessages", void 0), Ne(this, "channelGroups", void 0), Ne(this, "push", void 0), Ne(this, "hereNow", void 0), Ne(this, "whereNow", void 0), Ne(this, "getState", void 0), Ne(this, "setState", void 0), Ne(this, "grant", void 0), Ne(this, "grantToken", void 0), Ne(this, "audit", void 0), Ne(this, "subscribe", void 0), Ne(this, "signal", void 0), Ne(this, "presence", void 0), Ne(this, "unsubscribe", void 0), Ne(this, "unsubscribeAll", void 0), Ne(this, "addMessageAction", void 0), Ne(this, "removeMessageAction", void 0), Ne(this, "getMessageActions", void 0), Ne(this, "objects", void 0), Ne(this, "createUser", void 0), Ne(this, "updateUser", void 0), Ne(this, "deleteUser", void 0), Ne(this, "getUser", void 0), Ne(this, "getUsers", void 0), Ne(this, "createSpace", void 0), Ne(this, "updateSpace", void 0), Ne(this, "deleteSpace", void 0), Ne(this, "getSpaces", void 0), Ne(this, "getSpace", void 0), Ne(this, "getMembers", void 0), Ne(this, "addMembers", void 0), Ne(this, "updateMembers", void 0), Ne(this, "removeMembers", void 0), Ne(this, "getMemberships", void 0), Ne(this, "joinSpaces", void 0), Ne(this, "updateMemberships", void 0), Ne(this, "leaveSpaces", void 0), Ne(this, "disconnect", void 0), Ne(this, "reconnect", void 0), Ne(this, "destroy", void 0), Ne(this, "stop", void 0), Ne(this, "getSubscribedChannels", void 0), Ne(this, "getSubscribedChannelGroups", void 0), Ne(this, "addListener", void 0), Ne(this, "removeListener", void 0), Ne(this, "removeAllListeners", void 0), Ne(this, "parseToken", void 0), Ne(this, "setToken", void 0), Ne(this, "setTokens", void 0), Ne(this, "getToken", void 0), Ne(this, "getTokens", void 0), Ne(this, "clearTokens", void 0), Ne(this, "getAuthKey", void 0), Ne(this, "setAuthKey", void 0), Ne(this, "setCipherKey", void 0), Ne(this, "setUUID", void 0), Ne(this, "getUUID", void 0), Ne(this, "getFilterExpression", void 0), Ne(this, "setFilterExpression", void 0), Ne(this, "setHeartbeatInterval", void 0), Ne(this, "setProxy", void 0), Ne(this, "encrypt", void 0), Ne(this, "decrypt", void 0);
            var t = e.db,
                r = e.networking,
                i = e.cbor,
                o = this._config = new g.default({ setup: e, db: t }),
                s = new y.default({ config: o });
            r.init(o);
            var a = this._tokenManager = new k.default(o, i),
                u = { config: o, networking: r, crypto: s, tokenManager: a, telemetryManager: this._telemetryManager = new m.default({ maximumSamplesCount: 6e4 }) },
                c = P.default.bind(this, u, we),
                l = P.default.bind(this, u, E),
                f = P.default.bind(this, u, x),
                d = P.default.bind(this, u, K),
                p = P.default.bind(this, u, je),
                h = this._listenerManager = new _.default,
                v = new b.default({ timeEndpoint: c, leaveEndpoint: l, heartbeatEndpoint: f, setStateEndpoint: d, subscribeEndpoint: p, crypto: u.crypto, config: u.config, listenerManager: h });
            this.addListener = h.addListener.bind(h), this.removeListener = h.removeListener.bind(h), this.removeAllListeners = h.removeAllListeners.bind(h), this.parseToken = a.parseToken.bind(a), this.setToken = a.setToken.bind(a), this.setTokens = a.setTokens.bind(a), this.getToken = a.getToken.bind(a), this.getTokens = a.getTokens.bind(a), this.clearTokens = a.clearTokens.bind(a), this.channelGroups = { listGroups: P.default.bind(this, u, w), listChannels: P.default.bind(this, u, j), addChannels: P.default.bind(this, u, T), removeChannels: P.default.bind(this, u, M), deleteGroup: P.default.bind(this, u, S) }, this.push = { addChannels: P.default.bind(this, u, C), removeChannels: P.default.bind(this, u, N), deleteDevice: P.default.bind(this, u, R), listChannels: P.default.bind(this, u, A) }, this.hereNow = P.default.bind(this, u, I), this.whereNow = P.default.bind(this, u, U), this.getState = P.default.bind(this, u, D), this.setState = v.adaptStateChange.bind(v), this.grant = P.default.bind(this, u, me), this.grantToken = P.default.bind(this, u, _e), this.audit = P.default.bind(this, u, be), this.publish = P.default.bind(this, u, ke), this.fire = function(e, t) { return e.replicate = !1, e.storeInHistory = !1, n.publish(e, t) }, this.signal = P.default.bind(this, u, Pe), this.history = P.default.bind(this, u, Oe), this.deleteMessages = P.default.bind(this, u, Te), this.messageCounts = P.default.bind(this, u, Me), this.fetchMessages = P.default.bind(this, u, Se), this.addMessageAction = P.default.bind(this, u, G), this.removeMessageAction = P.default.bind(this, u, L), this.getMessageActions = P.default.bind(this, u, F), this.objects = { getAllUUIDMetadata: P.default.bind(this, u, q.default), getUUIDMetadata: P.default.bind(this, u, H.default), setUUIDMetadata: P.default.bind(this, u, B.default), removeUUIDMetadata: P.default.bind(this, u, z.default), getAllChannelMetadata: P.default.bind(this, u, W.default), getChannelMetadata: P.default.bind(this, u, X.default), setChannelMetadata: P.default.bind(this, u, V.default), removeChannelMetadata: P.default.bind(this, u, J.default), getChannelMembers: P.default.bind(this, u, $.default), setChannelMembers: function(e) { return P.default.call(n, u, Q.default, Ce({ type: "set" }, e)) }, removeChannelMembers: function(e) { return P.default.call(n, u, Q.default, Ce({ type: "remove" }, e)) }, getMemberships: P.default.bind(this, u, Y.default), setMemberships: function(e) { return P.default.call(n, u, Z.default, Ce({ type: "set" }, e)) }, removeMemberships: function(e) { return P.default.call(n, u, Z.default, Ce({ type: "remove" }, e)) } }, this.createUser = (0, O.deprecated)(P.default.bind(this, u, ee)), this.updateUser = (0, O.deprecated)(P.default.bind(this, u, te)), this.deleteUser = (0, O.deprecated)(P.default.bind(this, u, ne)), this.getUser = (0, O.deprecated)(P.default.bind(this, u, re)), this.getUsers = (0, O.deprecated)(P.default.bind(this, u, ie)), this.createSpace = (0, O.deprecated)(P.default.bind(this, u, oe)), this.updateSpace = (0, O.deprecated)(P.default.bind(this, u, se)), this.deleteSpace = (0, O.deprecated)(P.default.bind(this, u, ae)), this.getSpaces = (0, O.deprecated)(P.default.bind(this, u, ue)), this.getSpace = (0, O.deprecated)(P.default.bind(this, u, ce)), this.addMembers = (0, O.deprecated)(P.default.bind(this, u, fe)), this.updateMembers = (0, O.deprecated)(P.default.bind(this, u, de)), this.removeMembers = (0, O.deprecated)(P.default.bind(this, u, pe)), this.getMembers = (0, O.deprecated)(P.default.bind(this, u, le)), this.getMemberships = (0, O.deprecated)(P.default.bind(this, u, he)), this.joinSpaces = (0, O.deprecated)(P.default.bind(this, u, ge)), this.updateMemberships = (0, O.deprecated)(P.default.bind(this, u, ve)), this.leaveSpaces = (0, O.deprecated)(P.default.bind(this, u, ye)), this.time = c, this.subscribe = v.adaptSubscribeChange.bind(v), this.presence = v.adaptPresenceChange.bind(v), this.unsubscribe = v.adaptUnsubscribeChange.bind(v), this.disconnect = v.disconnect.bind(v), this.reconnect = v.reconnect.bind(v), this.destroy = function(e) { v.unsubscribeAll(e), v.disconnect() }, this.stop = this.destroy, this.unsubscribeAll = v.unsubscribeAll.bind(v), this.getSubscribedChannels = v.getSubscribedChannels.bind(v), this.getSubscribedChannelGroups = v.getSubscribedChannelGroups.bind(v), this.encrypt = s.encrypt.bind(s), this.decrypt = s.decrypt.bind(s), this.getAuthKey = u.config.getAuthKey.bind(u.config), this.setAuthKey = u.config.setAuthKey.bind(u.config), this.setCipherKey = u.config.setCipherKey.bind(u.config), this.getUUID = u.config.getUUID.bind(u.config), this.setUUID = u.config.setUUID.bind(u.config), this.getFilterExpression = u.config.getFilterExpression.bind(u.config), this.setFilterExpression = u.config.setFilterExpression.bind(u.config), this.setHeartbeatInterval = u.config.setHeartbeatInterval.bind(u.config), r.hasModule("proxy") && (this.setProxy = function(e) { u.config.setProxy(e), n.reconnect() })
        }
        Ne(t.default = Ae, "OPERATIONS", i.default), Ne(Ae, "CATEGORIES", o.default), e.exports = t.default
    }, function(e, t, n) {
        var r, i, o;
        i = [t], void 0 === (o = "function" == typeof(r = function(e) {
            var r = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i };

            function t() { var e, t, n = ""; for (e = 0; e < 32; e++) t = 16 * Math.random() | 0, 8 !== e && 12 !== e && 16 !== e && 20 !== e || (n += "-"), n += (12 === e ? 4 : 16 === e ? 3 & t | 8 : t).toString(16); return n }

            function n(e, t) { var n = r[t || "all"]; return n && n.test(e) || !1 }
            t.isUUID = n, t.VERSION = "0.1.0", e.uuid = t, e.isUUID = n
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        r(n(6)), r(n(3)), r(n(8));
        var c = r(n(16)),
            l = r(n(17)),
            f = r(n(2)),
            a = (n(1), r(n(4)));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var o, s, u, p = (o = h, (s = [{
            key: "adaptStateChange",
            value: function(e, t) {
                var n = this,
                    r = e.state,
                    i = e.channels,
                    o = void 0 === i ? [] : i,
                    s = e.channelGroups,
                    a = void 0 === s ? [] : s;
                return o.forEach(function(e) { e in n._channels && (n._channels[e].state = r) }), a.forEach(function(e) { e in n._channelGroups && (n._channelGroups[e].state = r) }), this._setStateEndpoint({ state: r, channels: o, channelGroups: a }, t)
            }
        }, {
            key: "adaptPresenceChange",
            value: function(e) {
                var t = this,
                    n = e.connected,
                    r = e.channels,
                    i = void 0 === r ? [] : r,
                    o = e.channelGroups,
                    s = void 0 === o ? [] : o;
                n ? (i.forEach(function(e) { t._heartbeatChannels[e] = { state: {} } }), s.forEach(function(e) { t._heartbeatChannelGroups[e] = { state: {} } })) : (i.forEach(function(e) { e in t._heartbeatChannels && delete t._heartbeatChannels[e] }), s.forEach(function(e) { e in t._heartbeatChannelGroups && delete t._heartbeatChannelGroups[e] }), !1 === this._config.suppressLeaveEvents && this._leaveEndpoint({ channels: i, channelGroups: s }, function(e) { t._listenerManager.announceStatus(e) })), this.reconnect()
            }
        }, {
            key: "adaptSubscribeChange",
            value: function(e) {
                var t = this,
                    n = e.timetoken,
                    r = e.channels,
                    i = void 0 === r ? [] : r,
                    o = e.channelGroups,
                    s = void 0 === o ? [] : o,
                    a = e.withPresence,
                    u = void 0 !== a && a,
                    c = e.withHeartbeats,
                    l = void 0 !== c && c;
                this._config.subscribeKey && "" !== this._config.subscribeKey ? (n && (this._lastTimetoken = this._currentTimetoken, this._currentTimetoken = n), "0" !== this._currentTimetoken && 0 !== this._currentTimetoken && (this._storedTimetoken = this._currentTimetoken, this._currentTimetoken = 0), i.forEach(function(e) { t._channels[e] = { state: {} }, u && (t._presenceChannels[e] = {}), (l || t._config.getHeartbeatInterval()) && (t._heartbeatChannels[e] = {}), t._pendingChannelSubscriptions.push(e) }), s.forEach(function(e) { t._channelGroups[e] = { state: {} }, u && (t._presenceChannelGroups[e] = {}), (l || t._config.getHeartbeatInterval()) && (t._heartbeatChannelGroups[e] = {}), t._pendingChannelGroupSubscriptions.push(e) }), this._subscriptionStatusAnnounced = !1, this.reconnect()) : console && console.log && console.log("subscribe key missing; aborting subscribe")
            }
        }, {
            key: "adaptUnsubscribeChange",
            value: function(e, t) {
                var n = this,
                    r = e.channels,
                    i = void 0 === r ? [] : r,
                    o = e.channelGroups,
                    s = void 0 === o ? [] : o,
                    a = [],
                    u = [];
                i.forEach(function(e) { e in n._channels && (delete n._channels[e], a.push(e), e in n._heartbeatChannels && delete n._heartbeatChannels[e]), e in n._presenceChannels && (delete n._presenceChannels[e], a.push(e)) }), s.forEach(function(e) { e in n._channelGroups && (delete n._channelGroups[e], u.push(e), e in n._heartbeatChannelGroups && delete n._heartbeatChannelGroups[e]), e in n._presenceChannelGroups && (delete n._channelGroups[e], u.push(e)) }), 0 === a.length && 0 === u.length || (!1 !== this._config.suppressLeaveEvents || t || this._leaveEndpoint({ channels: a, channelGroups: u }, function(e) { e.affectedChannels = a, e.affectedChannelGroups = u, e.currentTimetoken = n._currentTimetoken, e.lastTimetoken = n._lastTimetoken, n._listenerManager.announceStatus(e) }), 0 === Object.keys(this._channels).length && 0 === Object.keys(this._presenceChannels).length && 0 === Object.keys(this._channelGroups).length && 0 === Object.keys(this._presenceChannelGroups).length && (this._lastTimetoken = 0, this._currentTimetoken = 0, this._storedTimetoken = null, this._region = null, this._reconnectionManager.stopPolling()), this.reconnect())
            }
        }, { key: "unsubscribeAll", value: function(e) { this.adaptUnsubscribeChange({ channels: this.getSubscribedChannels(), channelGroups: this.getSubscribedChannelGroups() }, e) } }, { key: "getHeartbeatChannels", value: function() { return Object.keys(this._heartbeatChannels) } }, { key: "getHeartbeatChannelGroups", value: function() { return Object.keys(this._heartbeatChannelGroups) } }, { key: "getSubscribedChannels", value: function() { return Object.keys(this._channels) } }, { key: "getSubscribedChannelGroups", value: function() { return Object.keys(this._channelGroups) } }, { key: "reconnect", value: function() { this._startSubscribeLoop(), this._registerHeartbeatTimer() } }, { key: "disconnect", value: function() { this._stopSubscribeLoop(), this._stopHeartbeatTimer(), this._reconnectionManager.stopPolling() } }, { key: "_registerHeartbeatTimer", value: function() { this._stopHeartbeatTimer(), 0 !== this._config.getHeartbeatInterval() && (this._performHeartbeatLoop(), this._heartbeatTimer = setInterval(this._performHeartbeatLoop.bind(this), 1e3 * this._config.getHeartbeatInterval())) } }, { key: "_stopHeartbeatTimer", value: function() { this._heartbeatTimer && (clearInterval(this._heartbeatTimer), this._heartbeatTimer = null) } }, {
            key: "_performHeartbeatLoop",
            value: function() {
                var n = this,
                    e = this.getHeartbeatChannels(),
                    t = this.getHeartbeatChannelGroups(),
                    r = {};
                0 === e.length && 0 === t.length || (this.getSubscribedChannels().forEach(function(e) {
                    var t = n._channels[e].state;
                    Object.keys(t).length && (r[e] = t)
                }), this.getSubscribedChannelGroups().forEach(function(e) {
                    var t = n._channelGroups[e].state;
                    Object.keys(t).length && (r[e] = t)
                }), this._heartbeatEndpoint({ channels: e, channelGroups: t, state: r }, function(e) { e.error && n._config.announceFailedHeartbeats && n._listenerManager.announceStatus(e), e.error && n._config.autoNetworkDetection && n._isOnline && (n._isOnline = !1, n.disconnect(), n._listenerManager.announceNetworkDown(), n.reconnect()), !e.error && n._config.announceSuccessfulHeartbeats && n._listenerManager.announceStatus(e) }.bind(this)))
            }
        }, {
            key: "_startSubscribeLoop",
            value: function() {
                var n = this;
                this._stopSubscribeLoop();
                var r = {},
                    i = [],
                    o = [];
                if (Object.keys(this._channels).forEach(function(e) {
                        var t = n._channels[e].state;
                        Object.keys(t).length && (r[e] = t), i.push(e)
                    }), Object.keys(this._presenceChannels).forEach(function(e) { i.push("".concat(e, "-pnpres")) }), Object.keys(this._channelGroups).forEach(function(e) {
                        var t = n._channelGroups[e].state;
                        Object.keys(t).length && (r[e] = t), o.push(e)
                    }), Object.keys(this._presenceChannelGroups).forEach(function(e) { o.push("".concat(e, "-pnpres")) }), 0 !== i.length || 0 !== o.length) {
                    var e = { channels: i, channelGroups: o, state: r, timetoken: this._currentTimetoken, filterExpression: this._config.filterExpression, region: this._region };
                    this._subscribeCall = this._subscribeEndpoint(e, this._processSubscribeResponse.bind(this))
                }
            }
        }, {
            key: "_processSubscribeResponse",
            value: function(t, e) {
                var c = this;
                if (t.error) t.category === a.default.PNTimeoutCategory ? this._startSubscribeLoop() : (t.category === a.default.PNNetworkIssuesCategory ? (this.disconnect(), t.error && this._config.autoNetworkDetection && this._isOnline && (this._isOnline = !1, this._listenerManager.announceNetworkDown()), this._reconnectionManager.onReconnection(function() {
                    c._config.autoNetworkDetection && !c._isOnline && (c._isOnline = !0, c._listenerManager.announceNetworkUp()), c.reconnect(), c._subscriptionStatusAnnounced = !0;
                    var e = { category: a.default.PNReconnectedCategory, operation: t.operation, lastTimetoken: c._lastTimetoken, currentTimetoken: c._currentTimetoken };
                    c._listenerManager.announceStatus(e)
                }), this._reconnectionManager.startPolling()) : t.category === a.default.PNBadRequestCategory && this._stopHeartbeatTimer(), this._listenerManager.announceStatus(t));
                else {
                    if (this._storedTimetoken ? (this._currentTimetoken = this._storedTimetoken, this._storedTimetoken = null) : (this._lastTimetoken = this._currentTimetoken, this._currentTimetoken = e.metadata.timetoken), !this._subscriptionStatusAnnounced) {
                        var n = {};
                        n.category = a.default.PNConnectedCategory, n.operation = t.operation, n.affectedChannels = this._pendingChannelSubscriptions, n.subscribedChannels = this.getSubscribedChannels(), n.affectedChannelGroups = this._pendingChannelGroupSubscriptions, n.lastTimetoken = this._lastTimetoken, n.currentTimetoken = this._currentTimetoken, this._subscriptionStatusAnnounced = !0, this._listenerManager.announceStatus(n), this._pendingChannelSubscriptions = [], this._pendingChannelGroupSubscriptions = []
                    }
                    var r = e.messages || [],
                        i = this._config,
                        o = i.requestMessageCountThreshold,
                        l = i.dedupeOnSubscribe;
                    if (o && r.length >= o) {
                        var s = {};
                        s.category = a.default.PNRequestMessageCountExceededCategory, s.operation = t.operation, this._listenerManager.announceStatus(s)
                    }
                    r.forEach(function(e) {
                        var t = e.channel,
                            n = e.subscriptionMatch,
                            r = e.publishMetaData;
                        if (t === n && (n = null), l) {
                            if (c._dedupingManager.isDuplicate(e)) return;
                            c._dedupingManager.addEntry(e)
                        }
                        if (f.default.endsWith(e.channel, "-pnpres")) {
                            var i = { channel: null, subscription: null };
                            i.actualChannel = null != n ? t : null, i.subscribedChannel = null != n ? n : t, t && (i.channel = t.substring(0, t.lastIndexOf("-pnpres"))), n && (i.subscription = n.substring(0, n.lastIndexOf("-pnpres"))), i.action = e.payload.action, i.state = e.payload.data, i.timetoken = r.publishTimetoken, i.occupancy = e.payload.occupancy, i.uuid = e.payload.uuid, i.timestamp = e.payload.timestamp, e.payload.join && (i.join = e.payload.join), e.payload.leave && (i.leave = e.payload.leave), e.payload.timeout && (i.timeout = e.payload.timeout), c._listenerManager.announcePresence(i)
                        } else if (1 === e.messageType) {
                            var o = { channel: null, subscription: null };
                            o.channel = t, o.subscription = n, o.timetoken = r.publishTimetoken, o.publisher = e.issuingClientId, e.userMetadata && (o.userMetadata = e.userMetadata), o.message = e.payload, c._listenerManager.announceSignal(o)
                        } else if (2 === e.messageType) {
                            var s = { channel: null, subscription: null };
                            s.channel = t, s.subscription = n, s.timetoken = r.publishTimetoken, s.publisher = e.issuingClientId, e.userMetadata && (s.userMetadata = e.userMetadata), s.message = { event: e.payload.event, type: e.payload.type, data: e.payload.data }, c._listenerManager.announceObjects(s), "user" === e.payload.type ? c._listenerManager.announceUser(s) : "space" === e.payload.type ? c._listenerManager.announceSpace(s) : "membership" === e.payload.type && c._listenerManager.announceMembership(s)
                        } else if (3 === e.messageType) {
                            var a = {};
                            a.channel = t, a.subscription = n, a.timetoken = r.publishTimetoken, a.publisher = e.issuingClientId, a.data = { messageTimetoken: e.payload.data.messageTimetoken, actionTimetoken: e.payload.data.actionTimetoken, type: e.payload.data.type, uuid: e.issuingClientId, value: e.payload.data.value }, a.event = e.payload.event, c._listenerManager.announceMessageAction(a)
                        } else {
                            var u = { channel: null, subscription: null };
                            u.actualChannel = null != n ? t : null, u.subscribedChannel = null != n ? n : t, u.channel = t, u.subscription = n, u.timetoken = r.publishTimetoken, u.publisher = e.issuingClientId, e.userMetadata && (u.userMetadata = e.userMetadata), c._config.cipherKey ? u.message = c._crypto.decrypt(e.payload) : u.message = e.payload, c._listenerManager.announceMessage(u)
                        }
                    }), this._region = e.metadata.region, this._startSubscribeLoop()
                }
            }
        }, { key: "_stopSubscribeLoop", value: function() { this._subscribeCall && ("function" == typeof this._subscribeCall.abort && this._subscribeCall.abort(), this._subscribeCall = null) } }]) && i(o.prototype, s), void(u && i(o, u)), h);

        function h(e) {
            var t = e.subscribeEndpoint,
                n = e.leaveEndpoint,
                r = e.heartbeatEndpoint,
                i = e.setStateEndpoint,
                o = e.timeEndpoint,
                s = e.config,
                a = e.crypto,
                u = e.listenerManager;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, h), d(this, "_crypto", void 0), d(this, "_config", void 0), d(this, "_listenerManager", void 0), d(this, "_reconnectionManager", void 0), d(this, "_leaveEndpoint", void 0), d(this, "_heartbeatEndpoint", void 0), d(this, "_setStateEndpoint", void 0), d(this, "_subscribeEndpoint", void 0), d(this, "_channels", void 0), d(this, "_presenceChannels", void 0), d(this, "_heartbeatChannels", void 0), d(this, "_heartbeatChannelGroups", void 0), d(this, "_channelGroups", void 0), d(this, "_presenceChannelGroups", void 0), d(this, "_currentTimetoken", void 0), d(this, "_lastTimetoken", void 0), d(this, "_storedTimetoken", void 0), d(this, "_region", void 0), d(this, "_subscribeCall", void 0), d(this, "_heartbeatTimer", void 0), d(this, "_subscriptionStatusAnnounced", void 0), d(this, "_autoNetworkDetection", void 0), d(this, "_isOnline", void 0), d(this, "_pendingChannelSubscriptions", void 0), d(this, "_pendingChannelGroupSubscriptions", void 0), d(this, "_dedupingManager", void 0), this._listenerManager = u, this._config = s, this._leaveEndpoint = n, this._heartbeatEndpoint = r, this._setStateEndpoint = i, this._subscribeEndpoint = t, this._crypto = a, this._channels = {}, this._presenceChannels = {}, this._heartbeatChannels = {}, this._heartbeatChannelGroups = {}, this._channelGroups = {}, this._presenceChannelGroups = {}, this._pendingChannelSubscriptions = [], this._pendingChannelGroupSubscriptions = [], this._currentTimetoken = 0, this._lastTimetoken = 0, this._storedTimetoken = null, this._subscriptionStatusAnnounced = !1, this._isOnline = !0, this._reconnectionManager = new c.default({ timeEndpoint: o }), this._dedupingManager = new l.default({ config: s })
        }
        t.default = p, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r;
        (r = n(9)) && r.__esModule, n(1);

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var s, a, u, c = (s = l, (a = [{ key: "onReconnection", value: function(e) { this._reconnectionCallback = e } }, { key: "startPolling", value: function() { this._timeTimer = setInterval(this._performTimeLoop.bind(this), 3e3) } }, { key: "stopPolling", value: function() { clearInterval(this._timeTimer) } }, {
            key: "_performTimeLoop",
            value: function() {
                var t = this;
                this._timeEndpoint(function(e) { e.error || (clearInterval(t._timeTimer), t._reconnectionCallback()) })
            }
        }]) && i(s.prototype, a), void(u && i(s, u)), l);

        function l(e) { var t = e.timeEndpoint;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), o(this, "_reconnectionCallback", void 0), o(this, "_timeEndpoint", void 0), o(this, "_timeTimer", void 0), this._timeEndpoint = t }
        t.default = c, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r;
        (r = n(3)) && r.__esModule, n(1);

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var s, a, u, c = (s = l, (a = [{
            key: "getKey",
            value: function(e) {
                var t = function(e) { var t = 0; if (0 === e.length) return t; for (var n = 0; n < e.length; n += 1) t = (t << 5) - t + e.charCodeAt(n), t &= t; return t }(JSON.stringify(e.payload)).toString(),
                    n = e.publishMetaData.publishTimetoken;
                return "".concat(n, "-").concat(t)
            }
        }, { key: "isDuplicate", value: function(e) { return this.hashHistory.includes(this.getKey(e)) } }, { key: "addEntry", value: function(e) { this.hashHistory.length >= this._config.maximumCacheSize && this.hashHistory.shift(), this.hashHistory.push(this.getKey(e)) } }, { key: "clearHistory", value: function() { this.hashHistory = [] } }]) && i(s.prototype, a), void(u && i(s, u)), l);

        function l(e) { var t = e.config;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), o(this, "_config", void 0), o(this, "hashHistory", void 0), this.hashHistory = [], this._config = t }
        t.default = c, e.exports = t.default
    }, function(e, t) {
        var n, r, i = e.exports = {};

        function o() { throw new Error("setTimeout has not been defined") }

        function s() { throw new Error("clearTimeout has not been defined") }

        function a(t) { if (n === setTimeout) return setTimeout(t, 0); if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0); try { return n(t, 0) } catch (e) { try { return n.call(null, t, 0) } catch (e) { return n.call(this, t, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : o } catch (e) { n = o } try { r = "function" == typeof clearTimeout ? clearTimeout : s } catch (e) { r = s } }();
        var u, c = [],
            l = !1,
            f = -1;

        function d() { l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p()) }

        function p() {
            if (!l) {
                var e = a(d);
                l = !0;
                for (var t = c.length; t;) {
                    for (u = c, c = []; ++f < t;) u && u[f].run();
                    f = -1, t = c.length
                }
                u = null, l = !1,
                    function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (e) { try { return r.call(null, t) } catch (e) { return r.call(this, t) } } }(e)
            }
        }

        function h(e, t) { this.fun = e, this.array = t }

        function v() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t)), 1 !== c.length || l || a(p)
        }, h.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, o = (r = n(0)) && r.__esModule ? r : { default: r };

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var a, u, c, l = (a = f, (u = [{
            key: "operationsLatencyForRequest",
            value: function() {
                var r = this,
                    i = {};
                return Object.keys(this._latencies).forEach(function(e) {
                    var t = r._latencies[e],
                        n = r._averageLatency(t);
                    0 < n && (i["l_".concat(e)] = n)
                }), i
            }
        }, { key: "startLatencyMeasure", value: function(e, t) { e !== o.default.PNSubscribeOperation && t && (this._trackedLatencies[t] = Date.now()) } }, {
            key: "stopLatencyMeasure",
            value: function(e, t) {
                if (e !== o.default.PNSubscribeOperation && t) {
                    var n = this._endpointName(e),
                        r = this._latencies[n],
                        i = this._trackedLatencies[t];
                    (r = r || (this._latencies[n] = [])).push(Date.now() - i), r.length > this._maximumSamplesCount && r.splice(0, r.length - this._maximumSamplesCount), delete this._trackedLatencies[t]
                }
            }
        }, { key: "_averageLatency", value: function(e) { return Math.floor(e.reduce(function(e, t) { return e + t }, 0) / e.length) } }, {
            key: "_endpointName",
            value: function(e) {
                var t = null;
                switch (e) {
                    case o.default.PNPublishOperation:
                        t = "pub";
                        break;
                    case o.default.PNSignalOperation:
                        t = "sig";
                        break;
                    case o.default.PNHistoryOperation:
                    case o.default.PNFetchMessagesOperation:
                    case o.default.PNDeleteMessagesOperation:
                    case o.default.PNMessageCounts:
                        t = "hist";
                        break;
                    case o.default.PNUnsubscribeOperation:
                    case o.default.PNWhereNowOperation:
                    case o.default.PNHereNowOperation:
                    case o.default.PNHeartbeatOperation:
                    case o.default.PNSetStateOperation:
                    case o.default.PNGetStateOperation:
                        t = "pres";
                        break;
                    case o.default.PNAddChannelsToGroupOperation:
                    case o.default.PNRemoveChannelsFromGroupOperation:
                    case o.default.PNChannelGroupsOperation:
                    case o.default.PNRemoveGroupOperation:
                    case o.default.PNChannelsForGroupOperation:
                        t = "cg";
                        break;
                    case o.default.PNPushNotificationEnabledChannelsOperation:
                    case o.default.PNRemoveAllPushNotificationsOperation:
                        t = "push";
                        break;
                    case o.default.PNCreateUserOperation:
                    case o.default.PNUpdateUserOperation:
                    case o.default.PNDeleteUserOperation:
                    case o.default.PNGetUserOperation:
                    case o.default.PNGetUsersOperation:
                    case o.default.PNCreateSpaceOperation:
                    case o.default.PNUpdateSpaceOperation:
                    case o.default.PNDeleteSpaceOperation:
                    case o.default.PNGetSpaceOperation:
                    case o.default.PNGetSpacesOperation:
                    case o.default.PNGetMembersOperation:
                    case o.default.PNUpdateMembersOperation:
                    case o.default.PNGetMembershipsOperation:
                    case o.default.PNUpdateMembershipsOperation:
                        t = "obj";
                        break;
                    case o.default.PNAddMessageActionOperation:
                    case o.default.PNRemoveMessageActionOperation:
                    case o.default.PNGetMessageActionsOperation:
                        t = "msga";
                        break;
                    case o.default.PNAccessManagerGrant:
                    case o.default.PNAccessManagerAudit:
                        t = "pam";
                        break;
                    case o.default.PNAccessManagerGrantToken:
                        t = "pam3";
                        break;
                    default:
                        t = "time"
                }
                return t
            }
        }]) && i(a.prototype, u), void(c && i(a, c)), f);

        function f(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, f), s(this, "_maximumSamplesCount", 100), s(this, "_trackedLatencies", {}), s(this, "_latencies", {}), this._maximumSamplesCount = e.maximumSamplesCount || this._maximumSamplesCount }
        t.default = l, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.FCMNotificationPayload = t.MPNSNotificationPayload = t.APNSNotificationPayload = void 0;
        n(1);

        function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function i(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]) }
            return i
        }

        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r)
            }
            return n
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) { v(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
            }
            return t
        }

        function a(e, t) { return !t || "object" !== r(t) && "function" != typeof t ? c(e) : t }

        function u(e) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

        function c(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && f(e, t)
        }

        function f(e, t) { return (f = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function d(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function h(e, t, n) { return t && p(e.prototype, t), n && p(e, n), e }

        function v(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var g = (h(y, [{ key: "payload", get: function() { return this._payload } }, { key: "title", set: function(e) { this._title = e } }, { key: "subtitle", set: function(e) { this._subtitle = e } }, { key: "body", set: function(e) { this._body = e } }, { key: "badge", set: function(e) { this._badge = e } }, { key: "sound", set: function(e) { this._sound = e } }]), h(y, [{ key: "_setDefaultPayloadStructure", value: function() {} }, { key: "toObject", value: function() { return {} } }]), y);

        function y(e, t, n) { d(this, y), v(this, "_subtitle", void 0), v(this, "_payload", void 0), v(this, "_badge", void 0), v(this, "_sound", void 0), v(this, "_title", void 0), v(this, "_body", void 0), this._payload = e, this._setDefaultPayloadStructure(), this.title = t, this.body = n }
        var b = (l(m, g), h(m, [{ key: "_setDefaultPayloadStructure", value: function() { this._payload.aps = { alert: {} } } }, {
            key: "toObject",
            value: function() {
                var t = this,
                    e = s({}, this._payload),
                    n = e.aps,
                    r = n.alert;
                if (this._isSilent && (n["content-available"] = 1), "apns2" === this._apnsPushType) {
                    if (!this._configurations || !this._configurations.length) throw new ReferenceError("APNS2 configuration is missing");
                    var i = [];
                    this._configurations.forEach(function(e) { i.push(t._objectFromAPNS2Configuration(e)) }), i.length && (e.pn_push = i)
                }
                return r && Object.keys(r).length || delete n.alert, this._isSilent && (delete n.alert, delete n.badge, delete n.sound, r = {}), this._isSilent || Object.keys(r).length ? e : null
            }
        }, {
            key: "_objectFromAPNS2Configuration",
            value: function(e) {
                var t = this;
                if (!e.targets || !e.targets.length) throw new ReferenceError("At least one APNS2 target should be provided");
                var n = [];
                e.targets.forEach(function(e) { n.push(t._objectFromAPNSTarget(e)) });
                var r = e.collapseId,
                    i = e.expirationDate,
                    o = { auth_method: "token", targets: n, version: "v2" };
                return r && r.length && (o.collapse_id = r), i && (o.expiration = i.toISOString()), o
            }
        }, {
            key: "_objectFromAPNSTarget",
            value: function(e) {
                if (!e.topic || !e.topic.length) throw new TypeError("Target 'topic' undefined.");
                var t = e.topic,
                    n = e.environment,
                    r = void 0 === n ? "development" : n,
                    i = e.excludedDevices,
                    o = void 0 === i ? [] : i,
                    s = { topic: t, environment: r };
                return o.length && (s.excluded_devices = o), s
            }
        }, { key: "configurations", set: function(e) { e && e.length && (this._configurations = e) } }, { key: "notification", get: function() { return this._payload.aps } }, { key: "title", get: function() { return this._title }, set: function(e) { e && e.length && (this._payload.aps.alert.title = e, this._title = e) } }, { key: "subtitle", get: function() { return this._subtitle }, set: function(e) { e && e.length && (this._payload.aps.alert.subtitle = e, this._subtitle = e) } }, { key: "body", get: function() { return this._body }, set: function(e) { e && e.length && (this._payload.aps.alert.body = e, this._body = e) } }, { key: "badge", get: function() { return this._badge }, set: function(e) { null != e && (this._payload.aps.badge = e, this._badge = e) } }, { key: "sound", get: function() { return this._sound }, set: function(e) { e && e.length && (this._payload.aps.sound = e, this._sound = e) } }, { key: "silent", set: function(e) { this._isSilent = e } }]), m);

        function m() {
            var e, t;
            d(this, m);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return v(c(t = a(this, (e = u(m)).call.apply(e, [this].concat(r)))), "_configurations", void 0), v(c(t), "_apnsPushType", void 0), v(c(t), "_isSilent", void 0), t
        }
        t.APNSNotificationPayload = b;
        var _ = (l(k, g), h(k, [{ key: "toObject", value: function() { return Object.keys(this._payload).length ? s({}, this._payload) : null } }, { key: "backContent", get: function() { return this._backContent }, set: function(e) { e && e.length && (this._payload.back_content = e, this._backContent = e) } }, { key: "backTitle", get: function() { return this._backTitle }, set: function(e) { e && e.length && (this._payload.back_title = e, this._backTitle = e) } }, { key: "count", get: function() { return this._count }, set: function(e) { null != e && (this._payload.count = e, this._count = e) } }, { key: "title", get: function() { return this._title }, set: function(e) { e && e.length && (this._payload.title = e, this._title = e) } }, { key: "type", get: function() { return this._type }, set: function(e) { e && e.length && (this._payload.type = e, this._type = e) } }, { key: "subtitle", get: function() { return this.backTitle }, set: function(e) { this.backTitle = e } }, { key: "body", get: function() { return this.backContent }, set: function(e) { this.backContent = e } }, { key: "badge", get: function() { return this.count }, set: function(e) { this.count = e } }]), k);

        function k() {
            var e, t;
            d(this, k);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return v(c(t = a(this, (e = u(k)).call.apply(e, [this].concat(r)))), "_backContent", void 0), v(c(t), "_backTitle", void 0), v(c(t), "_count", void 0), v(c(t), "_type", void 0), t
        }
        t.MPNSNotificationPayload = _;
        var P = (l(O, g), h(O, [{ key: "_setDefaultPayloadStructure", value: function() { this._payload.notification = {}, this._payload.data = {} } }, {
            key: "toObject",
            value: function() {
                var e = s({}, this._payload.data),
                    t = null,
                    n = {};
                if (2 < Object.keys(this._payload).length) {
                    var r = this._payload;
                    r.notification, r.data, e = s({}, e, {}, i(r, ["notification", "data"]))
                }
                return this._isSilent ? e.notification = this._payload.notification : t = this._payload.notification, Object.keys(e).length && (n.data = e), t && Object.keys(t).length && (n.notification = t), Object.keys(n).length ? n : null
            }
        }, { key: "notification", get: function() { return this._payload.notification } }, { key: "data", get: function() { return this._payload.data } }, { key: "title", get: function() { return this._title }, set: function(e) { e && e.length && (this._payload.notification.title = e, this._title = e) } }, { key: "body", get: function() { return this._body }, set: function(e) { e && e.length && (this._payload.notification.body = e, this._body = e) } }, { key: "sound", get: function() { return this._sound }, set: function(e) { e && e.length && (this._payload.notification.sound = e, this._sound = e) } }, { key: "icon", get: function() { return this._icon }, set: function(e) { e && e.length && (this._payload.notification.icon = e, this._icon = e) } }, { key: "tag", get: function() { return this._tag }, set: function(e) { e && e.length && (this._payload.notification.tag = e, this._tag = e) } }, { key: "silent", set: function(e) { this._isSilent = e } }]), O);

        function O() {
            var e, t;
            d(this, O);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return v(c(t = a(this, (e = u(O)).call.apply(e, [this].concat(r)))), "_isSilent", void 0), v(c(t), "_icon", void 0), v(c(t), "_tag", void 0), t
        }

        function T(e, t) { d(this, T), v(this, "_payload", void 0), v(this, "_debugging", void 0), v(this, "_subtitle", void 0), v(this, "_badge", void 0), v(this, "_sound", void 0), v(this, "_title", void 0), v(this, "_body", void 0), v(this, "apns", void 0), v(this, "mpns", void 0), v(this, "fcm", void 0), this._payload = { apns: {}, mpns: {}, fcm: {} }, this._title = e, this._body = t, this.apns = new b(this._payload.apns, e, t), this.mpns = new _(this._payload.mpns, e, t), this.fcm = new P(this._payload.fcm, e, t) }
        t.FCMNotificationPayload = P;
        var M = (h(T, [{ key: "debugging", set: function(e) { this._debugging = e } }, { key: "title", get: function() { return this._title } }, { key: "body", get: function() { return this._body } }, { key: "subtitle", get: function() { return this._subtitle }, set: function(e) { this._subtitle = e, this.apns.subtitle = e, this.mpns.subtitle = e, this.fcm.subtitle = e } }, { key: "badge", get: function() { return this._badge }, set: function(e) { this._badge = e, this.apns.badge = e, this.mpns.badge = e, this.fcm.badge = e } }, { key: "sound", get: function() { return this._sound }, set: function(e) { this._sound = e, this.apns.sound = e, this.mpns.sound = e, this.fcm.sound = e } }]), h(T, [{
            key: "buildPayload",
            value: function(e) {
                var t = {};
                if (e.includes("apns") || e.includes("apns2")) {
                    this.apns._apnsPushType = e.includes("apns") ? "apns" : "apns2";
                    var n = this.apns.toObject();
                    n && Object.keys(n).length && (t.pn_apns = n)
                }
                if (e.includes("mpns")) {
                    var r = this.mpns.toObject();
                    r && Object.keys(r).length && (t.pn_mpns = r)
                }
                if (e.includes("fcm")) {
                    var i = this.fcm.toObject();
                    i && Object.keys(i).length && (t.pn_gcm = i)
                }
                return Object.keys(t).length && this._debugging && (t.pn_debug = !0), t
            }
        }]), T);
        t.default = M
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r;
        (r = n(3)) && r.__esModule, n(1);

        function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var a, u, c, l = (a = f, (u = [{ key: "_initializeTokens", value: function() { this._userTokens = {}, this._spaceTokens = {}, this._userToken = void 0, this._spaceToken = void 0 } }, {
            key: "_setToken",
            value: function(t) {
                var n = this,
                    e = this.parseToken(t);
                e && e.resources && (e.resources.users && Object.keys(e.resources.users).forEach(function(e) { n._userTokens[e] = t }), e.resources.spaces && Object.keys(e.resources.spaces).forEach(function(e) { n._spaceTokens[e] = t })), e && e.patterns && (e.patterns.users && 0 < Object.keys(e.patterns.users).length && (this._userToken = t), e.patterns.spaces && 0 < Object.keys(e.patterns.spaces).length && (this._spaceToken = t))
            }
        }, { key: "setToken", value: function(e) { e && 0 < e.length && this._setToken(e) } }, {
            key: "setTokens",
            value: function(e) {
                var t = this;
                e && e.length && "object" === i(e) && e.forEach(function(e) { t.setToken(e) })
            }
        }, {
            key: "getTokens",
            value: function(e) {
                var t = this,
                    n = { users: {}, spaces: {} };
                return e ? (e.user && (n.user = this._userToken), e.space && (n.space = this._spaceToken), e.users && e.users.forEach(function(e) { n.users[e] = t._userTokens[e] }), e.space && e.spaces.forEach(function(e) { n.spaces[e] = t._spaceTokens[e] })) : (this._userToken && (n.user = this._userToken), this._spaceToken && (n.space = this._spaceToken), Object.keys(this._userTokens).forEach(function(e) { n.users[e] = t._userTokens[e] }), Object.keys(this._spaceTokens).forEach(function(e) { n.spaces[e] = t._spaceTokens[e] })), n
            }
        }, { key: "getToken", value: function(e, t) { var n; return t ? "user" === e ? n = this._userTokens[t] : "space" === e && (n = this._spaceTokens[t]) : "user" === e ? n = this._userToken : "space" === e && (n = this._spaceToken), n } }, { key: "extractPermissions", value: function(e) { var t = { create: !1, read: !1, write: !1, manage: !1, delete: !1 }; return 16 == (16 & e) && (t.create = !0), 8 == (8 & e) && (t.delete = !0), 4 == (4 & e) && (t.manage = !0), 2 == (2 & e) && (t.write = !0), 1 == (1 & e) && (t.read = !0), t } }, {
            key: "parseToken",
            value: function(e) {
                var t = this,
                    n = this._cbor.decodeToken(e);
                if (void 0 !== n) {
                    var r = Object.keys(n.res.usr),
                        i = Object.keys(n.res.spc),
                        o = Object.keys(n.pat.usr),
                        s = Object.keys(n.pat.spc),
                        a = { version: n.v, timestamp: n.t, ttl: n.ttl },
                        u = 0 < r.length,
                        c = 0 < i.length;
                    (u || c) && (a.resources = {}, u && (a.resources.users = {}, r.forEach(function(e) { a.resources.users[e] = t.extractPermissions(n.res.usr[e]) })), c && (a.resources.spaces = {}, i.forEach(function(e) { a.resources.spaces[e] = t.extractPermissions(n.res.spc[e]) })));
                    var l = 0 < o.length,
                        f = 0 < s.length;
                    return (l || f) && (a.patterns = {}, l && (a.patterns.users = {}, o.forEach(function(e) { a.patterns.users[e] = t.extractPermissions(n.pat.usr[e]) })), f && (a.patterns.spaces = {}, s.forEach(function(e) { a.patterns.spaces[e] = t.extractPermissions(n.pat.spc[e]) }))), 0 < Object.keys(n.meta).length && (a.meta = n.meta), a.signature = n.sig, a
                }
            }
        }, { key: "clearTokens", value: function() { this._initializeTokens() } }]) && o(a.prototype, u), void(c && o(a, c)), f);

        function f(e, t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, f), s(this, "_config", void 0), s(this, "_cbor", void 0), s(this, "_userTokens", void 0), s(this, "_spaceTokens", void 0), s(this, "_userToken", void 0), s(this, "_spaceToken", void 0), this._config = e, this._cbor = t, this._initializeTokens() }
        t.default = l, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(r, i) {
            var e = r.networking,
                t = r.config,
                o = r.telemetryManager,
                s = m.default.createUUID(),
                a = null,
                u = null,
                c = {};
            a = i.getOperation() === k.default.PNTimeOperation || i.getOperation() === k.default.PNChannelGroupsOperation ? arguments.length <= 2 ? void 0 : arguments[2] : (c = arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3]);
            "undefined" == typeof Promise || a || (u = _.default.createPromise());
            var n = i.validateParams(r, c);
            if (n) return a ? a(M(n)) : u ? (u.reject(new T("Validation failed, check status for details", M(n))), u.promise) : void 0;
            var l, f = i.prepareParams(r, c),
                d = function(e, t, n) { return e.usePost && e.usePost(t, n) ? e.postURL(t, n) : e.usePatch && e.usePatch(t, n) ? e.patchURL(t, n) : e.getURL(t, n) }(i, r, c),
                p = { url: d, operation: i.getOperation(), timeout: i.getRequestTimeout(r), headers: i.getRequestHeaders ? i.getRequestHeaders() : {} };
            f.uuid = t.UUID, f.pnsdk = function(e) {
                if (e.sdkName) return e.sdkName;
                var t = "WebConnection-JS-".concat(e.sdkFamily);
                e.partnerId && (t += "-".concat(e.partnerId));
                t += "/".concat(e.getVersion());
                var n = e._getPnsdkSuffix(" ");
                0 < n.length && (t += n);
                return t
            }(t);
            var h = o.operationsLatencyForRequest();
            Object.keys(h).length && (f = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(n), !0).forEach(function(e) { O(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }({}, f, {}, h));
            t.useInstanceId && (f.instanceid = t.instanceId);
            t.useRequestId && (f.requestid = s);
            if (i.isAuthSupported()) {
                var v = function(e, t, n) {
                    var r;
                    e.getAuthToken && (r = e.getAuthToken(t, n));
                    return r
                }(i, r, c) || t.getAuthKey();
                v && (f.auth = v)
            }
            t.secretKey && function(e, t, n, r, i) {
                var o = e.config,
                    s = e.crypto,
                    a = S(e, i, r);
                n.timestamp = Math.floor((new Date).getTime() / 1e3);
                var u = "".concat(a, "\n").concat(o.publishKey, "\n").concat(t, "\n").concat(_.default.signPamFromParams(n), "\n");
                if ("POST" === a) {
                    var c = i.postPayload(e, r);
                    u += "string" == typeof c ? c : JSON.stringify(c)
                } else if ("PATCH" === a) {
                    var l = i.patchPayload(e, r);
                    u += "string" == typeof l ? l : JSON.stringify(l)
                }
                var f = "v2.".concat(s.HMACSHA256(u));
                f = (f = (f = f.replace(/\+/g, "-")).replace(/\//g, "_")).replace(/=+$/, ""), n.signature = f
            }(r, d, f, c, i);

            function g(e, t) {
                if (e.error) a ? a(e) : u && u.reject(new T("WebConnection call failed, check status for details", e));
                else {
                    o.stopLatencyMeasure(i.getOperation(), s);
                    var n = i.handleResponse(r, t, c);
                    a ? a(e, n) : u && u.fulfill(n)
                }
            }
            if (o.startLatencyMeasure(i.getOperation(), s), "POST" === S(r, i, c)) {
                var y = i.postPayload(r, c);
                l = e.POST(f, y, p, g)
            } else if ("PATCH" === S(r, i, c)) {
                var b = i.patchPayload(r, c);
                l = e.PATCH(f, b, p, g)
            } else l = "DELETE" === S(r, i, c) ? e.DELETE(f, p, g) : e.GET(f, p, g);
            if (i.getOperation() === k.default.PNSubscribeOperation) return l;
            if (u) return u.promise
        };
        var m = r(n(5)),
            _ = (n(1), r(n(2))),
            k = (r(n(3)), r(n(0)));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function P(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r)
            }
            return n
        }

        function O(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function o(e, t) { return !t || "object" !== i(t) && "function" != typeof t ? function(e) { if (void 0 !== e) return e; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(e) : t }

        function s(e) {
            var n = "function" == typeof Map ? new Map : void 0;
            return (s = function(e) {
                if (null === e || ! function(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") }(e)) return e;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== n) {
                    if (n.has(e)) return n.get(e);
                    n.set(e, t)
                }

                function t() { return a(e, arguments, c(this).constructor) }
                return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), u(t, e)
            })(e)
        }

        function a(e, t, n) {
            return (a = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }() ? Reflect.construct : function(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new(Function.bind.apply(e, r));
                return n && u(i, n.prototype), i
            }).apply(null, arguments)
        }

        function u(e, t) { return (u = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function c(e) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }
        var T = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && u(e, t)
        }(l, s(Error)), l);

        function l(e, t) { var n; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), (n = o(this, c(l).call(this, e))).name = n.constructor.name, n.status = t, n.message = e, n }

        function M(e) { return function(e, t) { return e.type = t, e.error = !0, e }({ message: e }, "validationError") }

        function S(e, t, n) { return t.usePost && t.usePost(e, n) ? "POST" : t.usePatch && t.usePatch(e, n) ? "PATCH" : t.useDelete && t.useDelete(e, n) ? "DELETE" : "GET" }
        e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNAddChannelsToGroupOperation }, t.validateParams = function(e, t) {
            var n = t.channels,
                r = t.channelGroup,
                i = e.config;
            if (!r) return "Missing Channel Group";
            if (!n || 0 === n.length) return "Missing Channels";
            if (!i.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.channelGroup,
                r = e.config;
            return "/v1/channel-registration/sub-key/".concat(r.subscribeKey, "/channel-group/").concat(i.default.encodeString(n))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) { var n = t.channels; return { add: (void 0 === n ? [] : n).join(",") } }, t.handleResponse = function() { return {} };
        n(1);
        var r = o(n(0)),
            i = o(n(2));

        function o(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNRemoveChannelsFromGroupOperation }, t.validateParams = function(e, t) {
            var n = t.channels,
                r = t.channelGroup,
                i = e.config;
            if (!r) return "Missing Channel Group";
            if (!n || 0 === n.length) return "Missing Channels";
            if (!i.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.channelGroup,
                r = e.config;
            return "/v1/channel-registration/sub-key/".concat(r.subscribeKey, "/channel-group/").concat(i.default.encodeString(n))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) { var n = t.channels; return { remove: (void 0 === n ? [] : n).join(",") } }, t.handleResponse = function() { return {} };
        n(1);
        var r = o(n(0)),
            i = o(n(2));

        function o(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNRemoveGroupOperation }, t.validateParams = function(e, t) {
            var n = t.channelGroup,
                r = e.config;
            if (!n) return "Missing Channel Group";
            if (!r.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.channelGroup,
                r = e.config;
            return "/v1/channel-registration/sub-key/".concat(r.subscribeKey, "/channel-group/").concat(i.default.encodeString(n), "/remove")
        }, t.isAuthSupported = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.prepareParams = function() { return {} }, t.handleResponse = function() { return {} };
        n(1);
        var r = o(n(0)),
            i = o(n(2));

        function o(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNChannelGroupsOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e) { var t = e.config; return "/v1/channel-registration/sub-key/".concat(t.subscribeKey, "/channel-group") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return { groups: t.payload.groups } };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNChannelsForGroupOperation }, t.validateParams = function(e, t) {
            var n = t.channelGroup,
                r = e.config;
            if (!n) return "Missing Channel Group";
            if (!r.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.channelGroup,
                r = e.config;
            return "/v1/channel-registration/sub-key/".concat(r.subscribeKey, "/channel-group/").concat(i.default.encodeString(n))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return { channels: t.payload.channels } };
        n(1);
        var r = o(n(0)),
            i = o(n(2));

        function o(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNPushNotificationEnabledChannelsOperation }, t.validateParams = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = t.channels,
                o = t.topic,
                s = e.config;
            if (!n) return "Missing Device ID (device)";
            if (!r) return "Missing GW Type (pushGateway: gcm, apns or apns2)";
            if ("apns2" === r && !o) return "Missing APNS2 topic";
            if (!i || 0 === i.length) return "Missing Channels";
            if (!s.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = e.config;
            return "apns2" !== r ? "/v1/push/sub-key/".concat(i.subscribeKey, "/devices/").concat(n) : "/v2/push/sub-key/".concat(i.subscribeKey, "/devices-apns2/").concat(n)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.pushGateway,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = t.environment,
                s = void 0 === o ? "development" : o,
                a = t.topic,
                u = { type: n, add: i.join(",") };
            "apns2" === n && delete(u = Object.assign({}, u, { environment: s, topic: a })).type;
            return u
        }, t.handleResponse = function() { return {} };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNPushNotificationEnabledChannelsOperation }, t.validateParams = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = t.channels,
                o = t.topic,
                s = e.config;
            if (!n) return "Missing Device ID (device)";
            if (!r) return "Missing GW Type (pushGateway: gcm, apns or apns2)";
            if ("apns2" === r && !o) return "Missing APNS2 topic";
            if (!i || 0 === i.length) return "Missing Channels";
            if (!s.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = e.config;
            return "apns2" !== r ? "/v1/push/sub-key/".concat(i.subscribeKey, "/devices/").concat(n) : "/v2/push/sub-key/".concat(i.subscribeKey, "/devices-apns2/").concat(n)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.pushGateway,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = t.environment,
                s = void 0 === o ? "development" : o,
                a = t.topic,
                u = { type: n, remove: i.join(",") };
            "apns2" === n && delete(u = Object.assign({}, u, { environment: s, topic: a })).type;
            return u
        }, t.handleResponse = function() { return {} };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNPushNotificationEnabledChannelsOperation }, t.validateParams = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = t.topic,
                o = e.config;
            if (!n) return "Missing Device ID (device)";
            if (!r) return "Missing GW Type (pushGateway: gcm, apns or apns2)";
            if ("apns2" === r && !i) return "Missing APNS2 topic";
            if (!o.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = e.config;
            return "apns2" !== r ? "/v1/push/sub-key/".concat(i.subscribeKey, "/devices/").concat(n) : "/v2/push/sub-key/".concat(i.subscribeKey, "/devices-apns2/").concat(n)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.pushGateway,
                r = t.environment,
                i = void 0 === r ? "development" : r,
                o = t.topic,
                s = { type: n };
            "apns2" === n && delete(s = Object.assign({}, s, { environment: i, topic: o })).type;
            return s
        }, t.handleResponse = function(e, t) { return { channels: t } };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNRemoveAllPushNotificationsOperation }, t.validateParams = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = t.topic,
                o = e.config;
            if (!n) return "Missing Device ID (device)";
            if (!r) return "Missing GW Type (pushGateway: gcm, apns or apns2)";
            if ("apns2" === r && !i) return "Missing APNS2 topic";
            if (!o.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.device,
                r = t.pushGateway,
                i = e.config;
            return "apns2" !== r ? "/v1/push/sub-key/".concat(i.subscribeKey, "/devices/").concat(n, "/remove") : "/v2/push/sub-key/".concat(i.subscribeKey, "/devices-apns2/").concat(n, "/remove")
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.pushGateway,
                r = t.environment,
                i = void 0 === r ? "development" : r,
                o = t.topic,
                s = { type: n };
            "apns2" === n && delete(s = Object.assign({}, s, { environment: i, topic: o })).type;
            return s
        }, t.handleResponse = function() { return {} };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNUnsubscribeOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = 0 < i.length ? i.join(",") : ",";
            return "/v2/presence/sub-key/".concat(n.subscribeKey, "/channel/").concat(s.default.encodeString(o), "/leave")
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.channelGroups,
                r = void 0 === n ? [] : n,
                i = {};
            0 < r.length && (i["channel-group"] = r.join(","));
            return i
        }, t.handleResponse = function() { return {} };
        n(1);
        var r = i(n(0)),
            s = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNWhereNowOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.uuid,
                i = void 0 === r ? n.UUID : r;
            return "/v2/presence/sub-key/".concat(n.subscribeKey, "/uuid/").concat(i)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return t.payload ? { channels: t.payload.channels } : { channels: [] } };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNHeartbeatOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = 0 < i.length ? i.join(",") : ",";
            return "/v2/presence/sub-key/".concat(n.subscribeKey, "/channel/").concat(s.default.encodeString(o), "/heartbeat")
        }, t.isAuthSupported = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.prepareParams = function(e, t) {
            var n = t.channelGroups,
                r = void 0 === n ? [] : n,
                i = t.state,
                o = void 0 === i ? {} : i,
                s = e.config,
                a = {};
            0 < r.length && (a["channel-group"] = r.join(","));
            return a.state = JSON.stringify(o), a.heartbeat = s.getPresenceTimeout(), a
        }, t.handleResponse = function() { return {} };
        n(1);
        var r = i(n(0)),
            s = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNGetStateOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.uuid,
                i = void 0 === r ? n.UUID : r,
                o = t.channels,
                s = void 0 === o ? [] : o,
                a = 0 < s.length ? s.join(",") : ",";
            return "/v2/presence/sub-key/".concat(n.subscribeKey, "/channel/").concat(u.default.encodeString(a), "/uuid/").concat(i)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.channelGroups,
                r = void 0 === n ? [] : n,
                i = {};
            0 < r.length && (i["channel-group"] = r.join(","));
            return i
        }, t.handleResponse = function(e, t, n) {
            var r = n.channels,
                i = void 0 === r ? [] : r,
                o = n.channelGroups,
                s = void 0 === o ? [] : o,
                a = {};
            1 === i.length && 0 === s.length ? a[i[0]] = t.payload : a = t.payload;
            return { channels: a }
        };
        n(1);
        var r = i(n(0)),
            u = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNSetStateOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.state,
                i = t.channels,
                o = void 0 === i ? [] : i,
                s = t.channelGroups,
                a = void 0 === s ? [] : s;
            if (!r) return "Missing State";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (0 === o.length && 0 === a.length) return "Please provide a list of channels and/or channel-groups"
        }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = 0 < i.length ? i.join(",") : ",";
            return "/v2/presence/sub-key/".concat(n.subscribeKey, "/channel/").concat(s.default.encodeString(o), "/uuid/").concat(n.UUID, "/data")
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.state,
                r = t.channelGroups,
                i = void 0 === r ? [] : r,
                o = {};
            o.state = JSON.stringify(n), 0 < i.length && (o["channel-group"] = i.join(","));
            return o
        }, t.handleResponse = function(e, t) { return { state: t.payload } };
        n(1);
        var r = i(n(0)),
            s = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNHereNowOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = t.channelGroups,
                s = void 0 === o ? [] : o,
                a = "/v2/presence/sub-key/".concat(n.subscribeKey);
            if (0 < i.length || 0 < s.length) {
                var u = 0 < i.length ? i.join(",") : ",";
                a += "/channel/".concat(c.default.encodeString(u))
            }
            return a
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.channelGroups,
                r = void 0 === n ? [] : n,
                i = t.includeUUIDs,
                o = void 0 === i || i,
                s = t.includeState,
                a = void 0 !== s && s,
                u = t.queryParameters,
                c = void 0 === u ? {} : u,
                l = {};
            o || (l.disable_uuids = 1);
            a && (l.state = 1);
            0 < r.length && (l["channel-group"] = r.join(","));
            return l = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach(function(e) { d(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                }
                return t
            }({}, l, {}, c)
        }, t.handleResponse = function(e, i, t) {
            var n, r = t.channels,
                o = void 0 === r ? [] : r,
                s = t.channelGroups,
                a = void 0 === s ? [] : s,
                u = t.includeUUIDs,
                c = void 0 === u || u,
                l = t.includeState,
                f = void 0 !== l && l;
            n = 1 < o.length || 0 < a.length || 0 === a.length && 0 === o.length ? function() {
                var r = {};
                return r.totalChannels = i.payload.total_channels, r.totalOccupancy = i.payload.total_occupancy, r.channels = {}, Object.keys(i.payload.channels).forEach(function(e) {
                    var t = i.payload.channels[e],
                        n = [];
                    return r.channels[e] = { occupants: n, name: e, occupancy: t.occupancy }, c && t.uuids.forEach(function(e) { f ? n.push({ state: e.state, uuid: e.uuid }) : n.push({ state: null, uuid: e }) }), r
                }), r
            }() : function() {
                var e = {},
                    t = [];
                return e.totalChannels = 1, e.totalOccupancy = i.occupancy, e.channels = {}, e.channels[o[0]] = { occupants: t, name: o[0], occupancy: i.occupancy }, c && i.uuids && i.uuids.forEach(function(e) { f ? t.push({ state: e.state, uuid: e.uuid }) : t.push({ state: null, uuid: e }) }), e
            }();
            return n
        };
        n(1);
        var r = i(n(0)),
            c = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r)
            }
            return n
        }

        function d(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNAddMessageActionOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.action,
                i = t.channel;
            if (!t.messageTimetoken) return "Missing message timetoken";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (!i) return "Missing message channel";
            if (!r) return "Missing Action";
            if (!r.value) return "Missing Action.value";
            if (!r.type) return "Missing Action.type";
            if (15 < r.type.length) return "Action.type value exceed maximum length of 15"
        }, t.usePost = function() { return !0 }, t.postURL = function(e, t) {
            var n = e.config,
                r = t.channel,
                i = t.messageTimetoken;
            return "/v1/message-actions/".concat(n.subscribeKey, "/channel/").concat(r, "/message/").concat(i)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.getRequestHeaders = function() { return { "Content-Type": "application/json" } }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function() { return {} }, t.postPayload = function(e, t) { return t.action }, t.handleResponse = function(e, t) { return { data: t.data } };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNRemoveMessageActionOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.channel,
                i = t.actionTimetoken;
            if (!t.messageTimetoken) return "Missing message timetoken";
            if (!i) return "Missing action timetoken";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (!r) return "Missing message channel"
        }, t.useDelete = function() { return !0 }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channel,
                i = t.actionTimetoken,
                o = t.messageTimetoken;
            return "/v1/message-actions/".concat(n.subscribeKey, "/channel/").concat(r, "/message/").concat(o, "/action/").concat(i)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return { data: t.data } };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetMessageActionsOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.channel;
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (!r) return "Missing message channel"
        }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channel;
            return "/v1/message-actions/".concat(n.subscribeKey, "/channel/").concat(r)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.limit,
                r = t.start,
                i = t.end,
                o = {};
            n && (o.limit = n);
            r && (o.start = r);
            i && (o.end = i);
            return o
        }, t.handleResponse = function(e, t) {
            var n = { data: t.data, start: null, end: null };
            n.data.length && (n.end = n.data[n.data.length - 1].actionTimetoken, n.start = n.data[0].actionTimetoken);
            return n
        };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function f(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                return n
            }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
        }
        var o = {
            getOperation: function() { return i.default.PNGetAllUUIDMetadataOperation },
            validateParams: function() {},
            getURL: function(e) { var t = e.config; return "/v2/objects/".concat(t.subscribeKey, "/uuids") },
            getRequestTimeout: function(e) { return e.config.getTransactionTimeout() },
            isAuthSupported: function() { return !0 },
            getAuthToken: function(e) { return e.tokenManager.getToken("user") },
            prepareParams: function(e, t) {
                var n, r, i, o, s, a, u, c, l = {};
                (null == t ? void 0 : null === (n = t.include) || void 0 === n ? void 0 : n.customFields) && (l.include = ["custom"]), (null == t ? void 0 : null === (r = t.include) || void 0 === r ? void 0 : r.totalCount) && (l.count = !0), (null == t ? void 0 : null === (i = t.page) || void 0 === i ? void 0 : i.next) && (l.start = null === (a = t.page) || void 0 === a ? void 0 : a.next);
                (null == t ? void 0 : null === (o = t.page) || void 0 === o ? void 0 : o.prev) && (l.end = null === (u = t.page) || void 0 === u ? void 0 : u.prev);
                (null == t ? void 0 : t.filter) && (l.filter = t.filter), l.limit = null !== (s = null == t ? void 0 : t.limit) && void 0 !== s ? s : 100, (null == t ? void 0 : t.sort) && (l.sort = Object.entries(null !== (c = t.sort) && void 0 !== c ? c : {}).map(function(e) {
                    var t = f(e, 2),
                        n = t[0],
                        r = t[1];
                    return "asc" === r || "desc" === r ? "".concat(n, ":").concat(r) : n
                }));
                return l
            },
            handleResponse: function(e, t) { return { status: t.status, data: t.data, totalCount: t.totalCount, next: t.next, prev: t.prev } }
        };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };
        var o = { getOperation: function() { return i.default.PNGetUUIDMetadataOperation }, validateParams: function() {}, getURL: function(e, t) { var n, r = e.config; return "/v2/objects/".concat(r.subscribeKey, "/uuids/").concat(null !== (n = null == t ? void 0 : t.uuid) && void 0 !== n ? n : r.getUUID()) }, getRequestTimeout: function(e) { return e.config.getTransactionTimeout() }, isAuthSupported: function() { return !0 }, getAuthToken: function(e) { return e.tokenManager.getToken("user") }, prepareParams: function(e, t) { var n, r, i, o = e.config; return { uuid: null !== (n = null == t ? void 0 : t.uuid) && void 0 !== n ? n : o.getUUID(), include: (null === (r = null == t ? void 0 : null === (i = t.include) || void 0 === i ? void 0 : i.customFields) || void 0 === r || r) && ["custom"] } }, handleResponse: function(e, t) { return { status: t.status, data: t.data } } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };
        var o = { getOperation: function() { return i.default.PNSetUUIDMetadataOperation }, validateParams: function(e, t) { if (!(null == t ? void 0 : t.data)) return "Data cannot be empty" }, usePatch: function() { return !0 }, patchURL: function(e, t) { var n, r = e.config; return "/v2/objects/".concat(r.subscribeKey, "/uuids/").concat(null !== (n = null == t ? void 0 : t.uuid) && void 0 !== n ? n : r.getUUID()) }, patchPayload: function(e, t) { return t.data }, getRequestTimeout: function(e) { return e.config.getTransactionTimeout() }, isAuthSupported: function() { return !0 }, getAuthToken: function(e) { return e.tokenManager.getToken("user") }, prepareParams: function(e, t) { var n, r, i, o = e.config; return { uuid: null !== (n = null == t ? void 0 : t.uuid) && void 0 !== n ? n : o.getUUID(), include: (null === (r = null == t ? void 0 : null === (i = t.include) || void 0 === i ? void 0 : i.customFields) || void 0 === r || r) && ["custom"] } }, handleResponse: function(e, t) { return { status: t.status, data: t.data } } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };
        var o = { getOperation: function() { return i.default.PNRemoveUUIDMetadataOperation }, validateParams: function() {}, getURL: function(e, t) { var n, r = e.config; return "/v2/objects/".concat(r.subscribeKey, "/uuids/").concat(null !== (n = null == t ? void 0 : t.uuid) && void 0 !== n ? n : r.getUUID()) }, useDelete: function() { return !0 }, getRequestTimeout: function(e) { return e.config.getTransactionTimeout() }, isAuthSupported: function() { return !0 }, getAuthToken: function(e) { return e.tokenManager.getToken("user") }, prepareParams: function(e, t) { var n, r = e.config; return { uuid: null !== (n = null == t ? void 0 : t.uuid) && void 0 !== n ? n : r.getUUID() } }, handleResponse: function(e, t) { return { status: t.status, data: t.data } } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function d(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                return n
            }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
        }
        var o = {
            getOperation: function() { return i.default.PNGetAllChannelMetadataOperation },
            validateParams: function() {},
            getURL: function(e) { var t = e.config; return "/v2/objects/".concat(t.subscribeKey, "/channels") },
            getRequestTimeout: function(e) { return e.config.getTransactionTimeout() },
            isAuthSupported: function() { return !0 },
            getAuthToken: function(e) { return e.tokenManager.getToken("channel") },
            prepareParams: function(e, t) {
                var n, r, i, o, s, a, u, c, l, f = {};
                null !== (n = null == t ? void 0 : null === (r = t.include) || void 0 === r ? void 0 : r.customFields) && void 0 !== n && !n || (f.include = ["custom"]), f.count = null === (i = null == t ? void 0 : null === (o = t.include) || void 0 === o ? void 0 : o.totalCount) || void 0 === i || i, (null == t ? void 0 : null === (s = t.page) || void 0 === s ? void 0 : s.next) && (f.start = null === (u = t.page) || void 0 === u ? void 0 : u.next);
                (null == t ? void 0 : null === (a = t.page) || void 0 === a ? void 0 : a.prev) && (f.end = null === (c = t.page) || void 0 === c ? void 0 : c.prev);
                (null == t ? void 0 : t.filter) && (f.filter = t.filter), (null == t ? void 0 : t.limit) && (f.limit = t.limit), (null == t ? void 0 : t.sort) && (f.sort = Object.entries(null !== (l = t.sort) && void 0 !== l ? l : {}).map(function(e) {
                    var t = d(e, 2),
                        n = t[0],
                        r = t[1];
                    return "asc" === r || "desc" === r ? "".concat(n, ":").concat(r) : n
                }));
                return f
            },
            handleResponse: function(e, t) { return { status: t.status, data: t.data, totalCount: t.totalCount, prev: t.prev, next: t.next } }
        };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };
        var o = { getOperation: function() { return i.default.PNGetChannelMetadataOperation }, validateParams: function(e, t) { if (!(null == t ? void 0 : t.channel)) return "Channel cannot be empty" }, getURL: function(e, t) { var n = e.config; return "/v2/objects/".concat(n.subscribeKey, "/channels/").concat(t.channel) }, getRequestTimeout: function(e) { return e.config.getTransactionTimeout() }, isAuthSupported: function() { return !0 }, getAuthToken: function(e) { return e.tokenManager.getToken("channel") }, prepareParams: function(e, t) { var n, r; return { include: (null === (n = null == t ? void 0 : null === (r = t.include) || void 0 === r ? void 0 : r.customFields) || void 0 === n || n) && ["custom"] } }, handleResponse: function(e, t) { return { status: t.status, data: t.data } } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };
        var o = { getOperation: function() { return i.default.PNSetChannelMetadataOperation }, validateParams: function(e, t) { return (null == t ? void 0 : t.channel) ? (null == t ? void 0 : t.data) ? void 0 : "Data cannot be empty" : "Channel cannot be empty" }, usePatch: function() { return !0 }, patchURL: function(e, t) { var n = e.config; return "/v2/objects/".concat(n.subscribeKey, "/channels/").concat(t.channel) }, patchPayload: function(e, t) { return t.data }, getRequestTimeout: function(e) { return e.config.getTransactionTimeout() }, isAuthSupported: function() { return !0 }, getAuthToken: function(e) { return e.tokenManager.getToken("channel") }, prepareParams: function(e, t) { var n, r; return { include: (null === (n = null == t ? void 0 : null === (r = t.include) || void 0 === r ? void 0 : r.customFields) || void 0 === n || n) && ["custom"] } }, handleResponse: function(e, t) { return { status: t.status, data: t.data } } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };
        var o = { getOperation: function() { return i.default.PNRemoveChannelMetadataOperation }, validateParams: function(e, t) { if (!(null == t ? void 0 : t.channel)) return "Channel cannot be empty" }, getURL: function(e, t) { var n = e.config; return "/v2/objects/".concat(n.subscribeKey, "/uuids/").concat(t.channel) }, useDelete: function() { return !0 }, getRequestTimeout: function(e) { return e.config.getTransactionTimeout() }, isAuthSupported: function() { return !0 }, getAuthToken: function(e) { return e.tokenManager.getToken("channel") }, prepareParams: function() { return {} }, handleResponse: function(e, t) { return { status: t.status, data: t.data } } };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function h(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                return n
            }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
        }
        var o = {
            getOperation: function() { return i.default.PNGetMembersOperation },
            validateParams: function(e, t) { if (!(null == t ? void 0 : t.channel)) return "UUID cannot be empty" },
            getURL: function(e, t) { var n = e.config; return "/v2/objects/".concat(n.subscribeKey, "/channels/").concat(t.channel, "/uuids") },
            getRequestTimeout: function(e) { return e.config.getTransactionTimeout() },
            isAuthSupported: function() { return !0 },
            getAuthToken: function(e) { return e.tokenManager.getToken("member") },
            prepareParams: function(e, t) {
                var n, r, i, o, s, a, u, c, l, f, d, p = {};
                (null == t ? void 0 : t.include) && (p.include = [], (null === (s = t.include) || void 0 === s ? void 0 : s.customFields) && p.include.push("custom"), (null === (a = t.include) || void 0 === a ? void 0 : a.customUUIDFields) && p.include.push("uuid.custom"), null !== (u = null === (c = t.include) || void 0 === c ? void 0 : c.UUIDFields) && void 0 !== u && !u || p.include.push("uuid"));
                (null == t ? void 0 : null === (n = t.include) || void 0 === n ? void 0 : n.totalCount) && (p.count = !0), (null == t ? void 0 : null === (r = t.page) || void 0 === r ? void 0 : r.next) && (p.start = null === (l = t.page) || void 0 === l ? void 0 : l.next);
                (null == t ? void 0 : null === (i = t.page) || void 0 === i ? void 0 : i.prev) && (p.end = null === (f = t.page) || void 0 === f ? void 0 : f.prev);
                (null == t ? void 0 : t.filter) && (p.filter = t.filter), p.limit = null !== (o = null == t ? void 0 : t.limit) && void 0 !== o ? o : 100, (null == t ? void 0 : t.sort) && (p.sort = Object.entries(null !== (d = t.sort) && void 0 !== d ? d : {}).map(function(e) {
                    var t = h(e, 2),
                        n = t[0],
                        r = t[1];
                    return "asc" === r || "desc" === r ? "".concat(n, ":").concat(r) : n
                }));
                return p
            },
            handleResponse: function(e, t) { return { status: t.status, data: t.data } }
        };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function d(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                return n
            }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
        }
        var o = {
            getOperation: function() { return i.default.PNSetMembersOperation },
            validateParams: function(e, t) { return (null == t ? void 0 : t.channel) ? (null == t ? void 0 : t.uuids) && 0 !== (null == t ? void 0 : t.uuids.length) ? void 0 : "UUIDs cannot be empty" : "Channel cannot be empty" },
            usePatch: function() { return !0 },
            patchURL: function(e, t) { var n = e.config; return "/v2/objects/".concat(n.subscribeKey, "/channels/").concat(t.channel, "/uuids") },
            patchPayload: function(e, t) { return function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }({ set: [], remove: [] }, t.type, t.uuids.map(function(e) { return "string" == typeof e ? { uuid: { id: e } } : { uuid: { id: e.id }, custom: e.custom } })) },
            getRequestTimeout: function(e) { return e.config.getTransactionTimeout() },
            isAuthSupported: function() { return !0 },
            getAuthToken: function(e) { return e.tokenManager.getToken("member") },
            prepareParams: function(e, t) {
                var n, r, i, o, s, a, u, c, l, f = {};
                (null == t ? void 0 : t.include) && (f.include = [], (null === (o = t.include) || void 0 === o ? void 0 : o.customFields) && f.include.push("custom"), (null === (s = t.include) || void 0 === s ? void 0 : s.customUUIDFields) && f.include.push("uuid.custom"), (null === (a = t.include) || void 0 === a ? void 0 : a.UUIDFields) && f.include.push("uuid"));
                (null == t ? void 0 : null === (n = t.include) || void 0 === n ? void 0 : n.totalCount) && (f.count = !0), (null == t ? void 0 : null === (r = t.page) || void 0 === r ? void 0 : r.next) && (f.start = null === (u = t.page) || void 0 === u ? void 0 : u.next);
                (null == t ? void 0 : null === (i = t.page) || void 0 === i ? void 0 : i.prev) && (f.end = null === (c = t.page) || void 0 === c ? void 0 : c.prev);
                (null == t ? void 0 : t.filter) && (f.filter = t.filter), (null == t ? void 0 : t.limit) && (f.limit = t.limit), (null == t ? void 0 : t.sort) && (f.sort = Object.entries(null !== (l = t.sort) && void 0 !== l ? l : {}).map(function(e) {
                    var t = d(e, 2),
                        n = t[0],
                        r = t[1];
                    return "asc" === r || "desc" === r ? "".concat(n, ":").concat(r) : n
                }));
                return f
            },
            handleResponse: function(e, t) { return { status: t.status, data: t.data, totalCount: t.totalCount, prev: t.prev, next: t.next } }
        };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function p(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                return n
            }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
        }
        var o = {
            getOperation: function() { return i.default.PNGetMembershipsOperation },
            validateParams: function(e, t) { if (!(null == t ? void 0 : t.uuid)) return "UUID cannot be empty" },
            getURL: function(e, t) { var n = e.config; return "/v2/objects/".concat(n.subscribeKey, "/uuids/").concat(t.uuid, "/channels") },
            getRequestTimeout: function(e) { return e.config.getTransactionTimeout() },
            isAuthSupported: function() { return !0 },
            getAuthToken: function(e) { return e.tokenManager.getToken("membership") },
            prepareParams: function(e, t) {
                var n, r, i, o, s, a, u, c, l, f, d = {};
                (null == t ? void 0 : t.include) && (d.include = [], (null === (s = t.include) || void 0 === s ? void 0 : s.customFields) && d.include.push("custom"), (null === (a = t.include) || void 0 === a ? void 0 : a.customChannelFields) && d.include.push("channel.custom"), (null === (u = t.include) || void 0 === u ? void 0 : u.channelFields) && d.include.push("channel"));
                (null == t ? void 0 : null === (n = t.include) || void 0 === n ? void 0 : n.totalCount) && (d.count = !0), (null == t ? void 0 : null === (r = t.page) || void 0 === r ? void 0 : r.next) && (d.start = null === (c = t.page) || void 0 === c ? void 0 : c.next);
                (null == t ? void 0 : null === (i = t.page) || void 0 === i ? void 0 : i.prev) && (d.end = null === (l = t.page) || void 0 === l ? void 0 : l.prev);
                (null == t ? void 0 : t.filter) && (d.filter = t.filter), d.limit = null !== (o = null == t ? void 0 : t.limit) && void 0 !== o ? o : 100, (null == t ? void 0 : t.sort) && (d.sort = Object.entries(null !== (f = t.sort) && void 0 !== f ? f : {}).map(function(e) {
                    var t = p(e, 2),
                        n = t[0],
                        r = t[1];
                    return "asc" === r || "desc" === r ? "".concat(n, ":").concat(r) : n
                }));
                return d
            },
            handleResponse: function(e, t) { return { status: t.status, data: t.data } }
        };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function d(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                return n
            }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
        }
        var o = {
            getOperation: function() { return i.default.PNSetMembershipsOperation },
            validateParams: function(e, t) { if (!(null == t ? void 0 : t.channels) || 0 === (null == t ? void 0 : t.channels.length)) return "Channels cannot be empty" },
            usePatch: function() { return !0 },
            patchURL: function(e, t) { var n, r = e.config; return "/v2/objects/".concat(r.subscribeKey, "/uuids/").concat(null !== (n = t.uuid) && void 0 !== n ? n : r.getUUID(), "/channels") },
            patchPayload: function(e, t) { return function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }({ set: [], remove: [] }, t.type, t.channels.map(function(e) { return "string" == typeof e ? { channel: { id: e } } : { channel: { id: e.id }, custom: e.custom } })) },
            getRequestTimeout: function(e) { return e.config.getTransactionTimeout() },
            isAuthSupported: function() { return !0 },
            getAuthToken: function(e) { return e.tokenManager.getToken("membership") },
            prepareParams: function(e, t) {
                var n, r, i, o, s, a, u, c, l, f = {};
                (null == t ? void 0 : t.include) && (f.include = [], (null === (o = t.include) || void 0 === o ? void 0 : o.customFields) && f.include.push("custom"), (null === (s = t.include) || void 0 === s ? void 0 : s.customChannelFields) && f.include.push("channel.custom"), (null === (a = t.include) || void 0 === a ? void 0 : a.channelFields) && f.include.push("channel"));
                (null == t ? void 0 : null === (n = t.include) || void 0 === n ? void 0 : n.totalCount) && (f.count = !0), (null == t ? void 0 : null === (r = t.page) || void 0 === r ? void 0 : r.next) && (f.start = null === (u = t.page) || void 0 === u ? void 0 : u.next);
                (null == t ? void 0 : null === (i = t.page) || void 0 === i ? void 0 : i.prev) && (f.end = null === (c = t.page) || void 0 === c ? void 0 : c.prev);
                (null == t ? void 0 : t.filter) && (f.filter = t.filter), (null == t ? void 0 : t.limit) && (f.limit = t.limit), (null == t ? void 0 : t.sort) && (f.sort = Object.entries(null !== (l = t.sort) && void 0 !== l ? l : {}).map(function(e) {
                    var t = d(e, 2),
                        n = t[0],
                        r = t[1];
                    return "asc" === r || "desc" === r ? "".concat(n, ":").concat(r) : n
                }));
                return f
            },
            handleResponse: function(e, t) { return { status: t.status, data: t.data, totalCount: t.totalCount, prev: t.prev, next: t.next } }
        };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNCreateUserOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.id,
                i = t.name,
                o = t.custom;
            if (!r) return "Missing User.id";
            if (!i) return "Missing User.name";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (o && !Object.values(o).every(function(e) { return "string" == typeof e || "number" == typeof e || "boolean" == typeof e })) return "Invalid custom type, only string, number and boolean values are allowed."
        }, t.usePost = function() { return !0 }, t.getURL = function(e) { var t = e.config; return "/v1/objects/".concat(t.subscribeKey, "/users") }, t.postURL = function(e) { var t = e.config; return "/v1/objects/".concat(t.subscribeKey, "/users") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.id) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = {};
            n ? void 0 === n.customFields && (n.customFields = !0) : n = { customFields: !0 };
            if (n) {
                var i = [];
                n.customFields && i.push("custom");
                var o = i.join(",");
                0 < o.length && (r.include = o)
            }
            return r
        }, t.postPayload = function(e, t) { return function(e, t) { return t }(0, t) }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateUserOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.id,
                i = t.name,
                o = t.custom;
            if (!r) return "Missing User.id";
            if (!i) return "Missing User.name";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (o && !Object.values(o).every(function(e) { return "string" == typeof e || "number" == typeof e || "boolean" == typeof e })) return "Invalid custom type, only string, number and boolean values are allowed."
        }, t.usePatch = function() { return !0 }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.id;
            return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(r)
        }, t.patchURL = function(e, t) {
            var n = e.config,
                r = t.id;
            return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(r)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.id) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = {};
            n ? void 0 === n.customFields && (n.customFields = !0) : n = { customFields: !0 };
            if (n) {
                var i = [];
                n.customFields && i.push("custom");
                var o = i.join(",");
                0 < o.length && (r.include = o)
            }
            return r
        }, t.patchPayload = function(e, t) { return function(e, t) { return t }(0, t) }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNDeleteUserOperation }, t.validateParams = function(e, t) { var n = e.config; if (!t) return "Missing UserId"; if (!n.subscribeKey) return "Missing Subscribe Key" }, t.useDelete = function() { return !0 }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t) }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t) || e.tokenManager.getToken("user") }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetUserOperation }, t.validateParams = function(e, t) { if (!t.userId) return "Missing userId" }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId) }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.userId) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = {};
            n ? void 0 === n.customFields && (n.customFields = !0) : n = { customFields: !0 };
            if (n) {
                var i = [];
                n.customFields && i.push("custom");
                var o = i.join(",");
                0 < o.length && (r.include = o)
            }
            return r
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetUsersOperation }, t.validateParams = function() {}, t.getURL = function(e) { var t = e.config; return "/v1/objects/".concat(t.subscribeKey, "/users") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e) { return e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = t.filter,
                s = {};
            r && (s.limit = r);
            if (n) {
                var a = [];
                n.totalCount && (s.count = !0), n.customFields && a.push("custom");
                var u = a.join(",");
                0 < u.length && (s.include = u)
            }
            i && (i.next && (s.start = i.next), i.prev && (s.end = i.prev));
            o && (s.filter = o);
            return s
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNCreateSpaceOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.id,
                i = t.name,
                o = t.custom;
            if (!r) return "Missing Space.id";
            if (!i) return "Missing Space.name";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (o && !Object.values(o).every(function(e) { return "string" == typeof e || "number" == typeof e || "boolean" == typeof e })) return "Invalid custom type, only string, number and boolean values are allowed."
        }, t.usePost = function() { return !0 }, t.getURL = function(e) { var t = e.config; return "/v1/objects/".concat(t.subscribeKey, "/spaces") }, t.postURL = function(e) { var t = e.config; return "/v1/objects/".concat(t.subscribeKey, "/spaces") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.id) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = {};
            n ? void 0 === n.customFields && (n.customFields = !0) : n = { customFields: !0 };
            if (n) {
                var i = [];
                n.customFields && i.push("custom");
                var o = i.join(",");
                0 < o.length && (r.include = o)
            }
            return r
        }, t.postPayload = function(e, t) { return function(e, t) { return t }(0, t) }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateSpaceOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.id,
                i = t.name,
                o = t.custom;
            if (!r) return "Missing Space.id";
            if (!i) return "Missing Space.name";
            if (!n.subscribeKey) return "Missing Subscribe Key";
            if (o && !Object.values(o).every(function(e) { return "string" == typeof e || "number" == typeof e || "boolean" == typeof e })) return "Invalid custom type, only string, number and boolean values are allowed."
        }, t.usePatch = function() { return !0 }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.id;
            return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(r)
        }, t.patchURL = function(e, t) {
            var n = e.config,
                r = t.id;
            return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(r)
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.id) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = {};
            n ? void 0 === n.customFields && (n.customFields = !0) : n = { customFields: !0 };
            if (n) {
                var i = [];
                n.customFields && i.push("custom");
                var o = i.join(",");
                0 < o.length && (r.include = o)
            }
            return r
        }, t.patchPayload = function(e, t) { return function(e, t) { return t }(0, t) }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNDeleteSpaceOperation }, t.validateParams = function(e, t) { var n = e.config; if (!t) return "Missing SpaceId"; if (!n.subscribeKey) return "Missing Subscribe Key" }, t.useDelete = function() { return !0 }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t) }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t) || e.tokenManager.getToken("space") }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetSpacesOperation }, t.validateParams = function() {}, t.getURL = function(e) { var t = e.config; return "/v1/objects/".concat(t.subscribeKey, "/spaces") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e) { return e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = t.filter,
                s = {};
            r && (s.limit = r);
            if (n) {
                var a = [];
                n.totalCount && (s.count = !0), n.customFields && a.push("custom");
                var u = a.join(",");
                0 < u.length && (s.include = u)
            }
            i && (i.next && (s.start = i.next), i.prev && (s.end = i.prev));
            o && (s.filter = o);
            return s
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetSpaceOperation }, t.validateParams = function(e, t) { if (!t.spaceId) return "Missing spaceId" }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId) }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.spaceId) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = {};
            n ? void 0 === n.customFields && (n.customFields = !0) : n = { customFields: !0 };
            if (n) {
                var i = [];
                n.customFields && i.push("custom");
                var o = i.join(",");
                0 < o.length && (r.include = o)
            }
            return r
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetMembersOperation }, t.validateParams = function(e, t) { if (!t.spaceId) return "Missing spaceId" }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.spaceId) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = t.filter,
                s = {};
            r && (s.limit = r);
            if (n) {
                var a = [];
                n.totalCount && (s.count = !0), n.customFields && a.push("custom"), n.userFields && a.push("user"), n.customUserFields && a.push("user.custom");
                var u = a.join(",");
                0 < u.length && (s.include = u)
            }
            i && (i.next && (s.start = i.next), i.prev && (s.end = i.prev));
            o && (s.filter = o);
            return s
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateMembersOperation }, t.validateParams = function(e, t) {
            var n = t.spaceId,
                r = t.users;
            if (!n) return "Missing spaceId";
            if (!r) return "Missing users"
        }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.patchURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.usePatch = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.spaceId) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = {};
            r && (o.limit = r);
            if (n) {
                var s = [];
                n.totalCount && (o.count = !0), n.customFields && s.push("custom"), n.spaceFields && s.push("space"), n.customSpaceFields && s.push("space.custom");
                var a = s.join(",");
                0 < a.length && (o.include = a)
            }
            i && (i.next && (o.start = i.next), i.prev && (o.end = i.prev));
            return o
        }, t.patchPayload = function(e, t) {
            return function(e, t) {
                var n = t.users,
                    r = {};
                n && 0 < n.length && (r.add = [], n.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), r.add.push(t)
                }));
                return r
            }(0, t)
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateMembersOperation }, t.validateParams = function(e, t) {
            var n = t.spaceId,
                r = t.users;
            if (!n) return "Missing spaceId";
            if (!r) return "Missing users"
        }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.patchURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.usePatch = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.spaceId) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = {};
            r && (o.limit = r);
            if (n) {
                var s = [];
                n.totalCount && (o.count = !0), n.customFields && s.push("custom"), n.spaceFields && s.push("space"), n.customSpaceFields && s.push("space.custom");
                var a = s.join(",");
                0 < a.length && (o.include = a)
            }
            i && (i.next && (o.start = i.next), i.prev && (o.end = i.prev));
            return o
        }, t.patchPayload = function(e, t) {
            return function(e, t) {
                var n = t.addMembers,
                    r = t.updateMembers,
                    i = t.removeMembers,
                    o = t.users,
                    s = {};
                n && 0 < n.length && (s.add = [], n.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), s.add.push(t)
                }));
                r && 0 < r.length && (s.update = [], r.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), s.update.push(t)
                }));
                o && 0 < o.length && (s.update = s.update || [], o.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), s.update.push(t)
                }));
                i && 0 < i.length && (s.remove = [], i.forEach(function(e) { s.remove.push({ id: e }) }));
                return s
            }(0, t)
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateMembersOperation }, t.validateParams = function(e, t) {
            var n = t.spaceId,
                r = t.users;
            if (!n) return "Missing spaceId";
            if (!r) return "Missing users"
        }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.patchURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/spaces/").concat(t.spaceId, "/users") }, t.usePatch = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("space", t.spaceId) || e.tokenManager.getToken("space") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = {};
            r && (o.limit = r);
            if (n) {
                var s = [];
                n.totalCount && (o.count = !0), n.customFields && s.push("custom"), n.spaceFields && s.push("space"), n.customSpaceFields && s.push("space.custom");
                var a = s.join(",");
                0 < a.length && (o.include = a)
            }
            i && (i.next && (o.start = i.next), i.prev && (o.end = i.prev));
            return o
        }, t.patchPayload = function(e, t) {
            return function(e, t) {
                var n = t.users,
                    r = {};
                n && 0 < n.length && (r.remove = [], n.forEach(function(e) { r.remove.push({ id: e }) }));
                return r
            }(0, t)
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNGetMembershipsOperation }, t.validateParams = function(e, t) { if (!t.userId) return "Missing userId" }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.userId) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = t.filter,
                s = {};
            r && (s.limit = r);
            if (n) {
                var a = [];
                n.totalCount && (s.count = !0), n.customFields && a.push("custom"), n.spaceFields && a.push("space"), n.customSpaceFields && a.push("space.custom");
                var u = a.join(",");
                0 < u.length && (s.include = u)
            }
            i && (i.next && (s.start = i.next), i.prev && (s.end = i.prev));
            o && (s.filter = o);
            return s
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateMembershipsOperation }, t.validateParams = function(e, t) {
            var n = t.userId,
                r = t.spaces;
            if (!n) return "Missing userId";
            if (!r) return "Missing spaces"
        }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.patchURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.usePatch = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.userId) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = {};
            r && (o.limit = r);
            if (n) {
                var s = [];
                n.totalCount && (o.count = !0), n.customFields && s.push("custom"), n.spaceFields && s.push("space"), n.customSpaceFields && s.push("space.custom");
                var a = s.join(",");
                0 < a.length && (o.include = a)
            }
            i && (i.next && (o.start = i.next), i.prev && (o.end = i.prev));
            return o
        }, t.patchPayload = function(e, t) {
            return function(e, t) {
                var n = t.addMemberships,
                    r = t.updateMemberships,
                    i = t.removeMemberships,
                    o = t.spaces,
                    s = {};
                n && 0 < n.length && (s.add = [], n.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), s.add.push(t)
                }));
                r && 0 < r.length && (s.update = [], r.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), s.update.push(t)
                }));
                o && 0 < o.length && (s.update = s.update || [], o.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), s.update.push(t)
                }));
                i && 0 < i.length && (s.remove = [], i.forEach(function(e) { s.remove.push({ id: e }) }));
                return s
            }(0, t)
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateMembershipsOperation }, t.validateParams = function(e, t) {
            var n = t.userId,
                r = t.spaces;
            if (!n) return "Missing userId";
            if (!r) return "Missing spaces"
        }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.patchURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.usePatch = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.userId) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = {};
            r && (o.limit = r);
            if (n) {
                var s = [];
                n.totalCount && (o.count = !0), n.customFields && s.push("custom"), n.spaceFields && s.push("space"), n.customSpaceFields && s.push("space.custom");
                var a = s.join(",");
                0 < a.length && (o.include = a)
            }
            i && (i.next && (o.start = i.next), i.prev && (o.end = i.prev));
            return o
        }, t.patchPayload = function(e, t) {
            return function(e, t) {
                var n = t.spaces,
                    r = {};
                n && 0 < n.length && (r.add = [], n.forEach(function(e) {
                    var t = { id: e.id };
                    e.custom && (t.custom = e.custom), r.add.push(t)
                }));
                return r
            }(0, t)
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNUpdateMembershipsOperation }, t.validateParams = function(e, t) {
            var n = t.userId,
                r = t.spaces;
            if (!n) return "Missing userId";
            if (!r) return "Missing spaces"
        }, t.getURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.patchURL = function(e, t) { var n = e.config; return "/v1/objects/".concat(n.subscribeKey, "/users/").concat(t.userId, "/spaces") }, t.usePatch = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.getAuthToken = function(e, t) { return e.tokenManager.getToken("user", t.userId) || e.tokenManager.getToken("user") }, t.prepareParams = function(e, t) {
            var n = t.include,
                r = t.limit,
                i = t.page,
                o = {};
            r && (o.limit = r);
            if (n) {
                var s = [];
                n.totalCount && (o.count = !0), n.customFields && s.push("custom"), n.spaceFields && s.push("space"), n.customSpaceFields && s.push("space.custom");
                var a = s.join(",");
                0 < a.length && (o.include = a)
            }
            i && (i.next && (o.start = i.next), i.prev && (o.end = i.prev));
            return o
        }, t.patchPayload = function(e, t) {
            return function(e, t) {
                var n = t.spaces,
                    r = {};
                n && 0 < n.length && (r.remove = [], n.forEach(function(e) { r.remove.push({ id: e }) }));
                return r
            }(0, t)
        }, t.handleResponse = function(e, t) { return t };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNAccessManagerAudit }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e) { var t = e.config; return "/v2/auth/audit/sub-key/".concat(t.subscribeKey) }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !1 }, t.prepareParams = function(e, t) {
            var n = t.channel,
                r = t.channelGroup,
                i = t.authKeys,
                o = void 0 === i ? [] : i,
                s = {};
            n && (s.channel = n);
            r && (s["channel-group"] = r);
            0 < o.length && (s.auth = o.join(","));
            return s
        }, t.handleResponse = function(e, t) { return t.payload };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNAccessManagerGrant }, t.validateParams = function(e) { var t = e.config; if (!t.subscribeKey) return "Missing Subscribe Key"; if (!t.publishKey) return "Missing Publish Key"; if (!t.secretKey) return "Missing Secret Key" }, t.getURL = function(e) { var t = e.config; return "/v2/auth/grant/sub-key/".concat(t.subscribeKey) }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !1 }, t.prepareParams = function(e, t) {
            var n = t.channels,
                r = void 0 === n ? [] : n,
                i = t.channelGroups,
                o = void 0 === i ? [] : i,
                s = t.ttl,
                a = t.read,
                u = void 0 !== a && a,
                c = t.write,
                l = void 0 !== c && c,
                f = t.manage,
                d = void 0 !== f && f,
                p = t.authKeys,
                h = void 0 === p ? [] : p,
                v = t.delete,
                g = {};
            g.r = u ? "1" : "0", g.w = l ? "1" : "0", g.m = d ? "1" : "0", g.d = v ? "1" : "0", 0 < r.length && (g.channel = r.join(","));
            0 < o.length && (g["channel-group"] = o.join(","));
            0 < h.length && (g.auth = h.join(","));
            !s && 0 !== s || (g.ttl = s);
            return g
        }, t.handleResponse = function() { return {} };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return i.default.PNAccessManagerGrantToken }, t.extractPermissions = f, t.validateParams = function(e, t) { var n = e.config; if (!n.subscribeKey) return "Missing Subscribe Key"; if (!n.publishKey) return "Missing Publish Key"; if (!n.secretKey) return "Missing Secret Key"; if (!t.resources && !t.patterns) return "Missing either Resources or Patterns."; if (t.resources && (!t.resources.users || 0 === Object.keys(t.resources.users).length) && (!t.resources.spaces || 0 === Object.keys(t.resources.spaces).length) || t.patterns && (!t.patterns.users || 0 === Object.keys(t.patterns.users).length) && (!t.patterns.spaces || 0 === Object.keys(t.patterns.spaces).length)) return "Missing values for either Resources or Patterns." }, t.postURL = function(e) { var t = e.config; return "/v3/pam/".concat(t.subscribeKey, "/grant") }, t.usePost = function() { return !0 }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !1 }, t.prepareParams = function() { return {} }, t.postPayload = function(e, t) {
            return function(e, t) {
                var n = t.ttl,
                    r = t.resources,
                    i = t.patterns,
                    o = t.meta,
                    s = { ttl: 0, permissions: { resources: { channels: {}, groups: {}, users: {}, spaces: {} }, patterns: { channels: {}, groups: {}, users: {}, spaces: {} }, meta: {} } };
                if (r) {
                    var a = r.users,
                        u = r.spaces;
                    a && Object.keys(a).forEach(function(e) { s.permissions.resources.users[e] = f(a[e]) }), u && Object.keys(u).forEach(function(e) { s.permissions.resources.spaces[e] = f(u[e]) })
                }
                if (i) {
                    var c = i.users,
                        l = i.spaces;
                    c && Object.keys(c).forEach(function(e) { s.permissions.patterns.users[e] = f(c[e]) }), l && Object.keys(l).forEach(function(e) { s.permissions.patterns.spaces[e] = f(l[e]) })
                }!n && 0 !== n || (s.ttl = n);
                o && (s.permissions.meta = o);
                return s
            }(0, t)
        }, t.handleResponse = function(e, t) { return t.data.token };
        n(1);
        var r, i = (r = n(0)) && r.__esModule ? r : { default: r };

        function f(e) { var t = 0; return e.create && (t |= 16), e.delete && (t |= 8), e.manage && (t |= 4), e.write && (t |= 2), e.read && (t |= 1), t }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNPublishOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.message;
            if (!t.channel) return "Missing Channel";
            if (!r) return "Missing Message";
            if (!n.subscribeKey) return "Missing Subscribe Key"
        }, t.usePost = function(e, t) { var n = t.sendByPost; return void 0 !== n && n }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channel,
                i = t.message,
                o = a(e, i);
            return "/publish/".concat(n.publishKey, "/").concat(n.subscribeKey, "/0/").concat(s.default.encodeString(r), "/0/").concat(s.default.encodeString(o))
        }, t.postURL = function(e, t) {
            var n = e.config,
                r = t.channel;
            return "/publish/".concat(n.publishKey, "/").concat(n.subscribeKey, "/0/").concat(s.default.encodeString(r), "/0")
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.postPayload = function(e, t) { var n = t.message; return a(e, n) }, t.prepareParams = function(e, t) {
            var n = t.meta,
                r = t.replicate,
                i = void 0 === r || r,
                o = t.storeInHistory,
                s = t.ttl,
                a = {};
            null != o && (a.store = o ? "1" : "0");
            s && (a.ttl = s);
            !1 === i && (a.norep = "true");
            n && "object" === u(n) && (a.meta = JSON.stringify(n));
            return a
        }, t.handleResponse = function(e, t) { return { timetoken: t[2] } };
        n(1);
        var r = i(n(0)),
            s = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function u(e) { return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function a(e, t) {
            var n = e.crypto,
                r = e.config,
                i = JSON.stringify(t);
            return r.cipherKey && (i = n.encrypt(i), i = JSON.stringify(i)), i
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNSignalOperation }, t.validateParams = function(e, t) {
            var n = e.config,
                r = t.message;
            if (!t.channel) return "Missing Channel";
            if (!r) return "Missing Message";
            if (!n.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channel,
                i = t.message,
                o = function(e, t) { return JSON.stringify(t) }(0, i);
            return "/signal/".concat(n.publishKey, "/").concat(n.subscribeKey, "/0/").concat(s.default.encodeString(r), "/0/").concat(s.default.encodeString(o))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function() { return {} }, t.handleResponse = function(e, t) { return { timetoken: t[2] } };
        n(1);
        var r = i(n(0)),
            s = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNHistoryOperation }, t.validateParams = function(e, t) {
            var n = t.channel,
                r = e.config;
            if (!n) return "Missing channel";
            if (!r.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.channel,
                r = e.config;
            return "/v2/history/sub-key/".concat(r.subscribeKey, "/channel/").concat(i.default.encodeString(n))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.start,
                r = t.end,
                i = t.reverse,
                o = t.count,
                s = void 0 === o ? 100 : o,
                a = t.stringifiedTimeToken,
                u = void 0 !== a && a,
                c = t.includeMeta,
                l = void 0 !== c && c,
                f = { include_token: "true" };
            f.count = s, n && (f.start = n);
            r && (f.end = r);
            u && (f.string_message_token = "true");
            null != i && (f.reverse = i.toString());
            l && (f.include_meta = "true");
            return f
        }, t.handleResponse = function(n, e) {
            var r = { messages: [], startTimeToken: e[1], endTimeToken: e[2] };
            Array.isArray(e[0]) && e[0].forEach(function(e) {
                var t = {
                    timetoken: e.timetoken,
                    entry: function(e, t) {
                        var n = e.config,
                            r = e.crypto;
                        if (!n.cipherKey) return t;
                        try { return r.decrypt(t) } catch (e) { return t }
                    }(n, e.message)
                };
                e.meta && (t.meta = e.meta), r.messages.push(t)
            });
            return r
        };
        n(1);
        var r = o(n(0)),
            i = o(n(2));

        function o(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNDeleteMessagesOperation }, t.validateParams = function(e, t) {
            var n = t.channel,
                r = e.config;
            if (!n) return "Missing channel";
            if (!r.subscribeKey) return "Missing Subscribe Key"
        }, t.useDelete = function() { return !0 }, t.getURL = function(e, t) {
            var n = t.channel,
                r = e.config;
            return "/v3/history/sub-key/".concat(r.subscribeKey, "/channel/").concat(i.default.encodeString(n))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.start,
                r = t.end,
                i = {};
            n && (i.start = n);
            r && (i.end = r);
            return i
        }, t.handleResponse = function(e, t) { return t.payload };
        n(1);
        var r = o(n(0)),
            i = o(n(2));

        function o(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNMessageCounts }, t.validateParams = function(e, t) {
            var n = t.channels,
                r = t.timetoken,
                i = t.channelTimetokens,
                o = e.config;
            if (!n) return "Missing channel";
            if (r && i) return "timetoken and channelTimetokens are incompatible together";
            if (r && i && 1 < i.length && n.length !== i.length) return "Length of channelTimetokens and channels do not match";
            if (!o.subscribeKey) return "Missing Subscribe Key"
        }, t.getURL = function(e, t) {
            var n = t.channels,
                r = e.config,
                i = n.join(",");
            return "/v3/history/sub-key/".concat(r.subscribeKey, "/message-counts/").concat(o.default.encodeString(i))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.timetoken,
                r = t.channelTimetokens,
                i = {};
            if (r && 1 === r.length) {
                var o = function(e, t) {
                    return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                        if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try { for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == a.return || a.return() } finally { if (i) throw o } }
                        return n
                    }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
                }(r, 1)[0];
                i.timetoken = o
            } else r ? i.channelsTimetoken = r.join(",") : n && (i.timetoken = n);
            return i
        }, t.handleResponse = function(e, t) { return { channels: t.channels } };
        var r = i(n(0)),
            o = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNFetchMessagesOperation }, t.validateParams = function(e, t) {
            var n = t.channels,
                r = t.includeMessageActions,
                i = void 0 !== r && r,
                o = e.config;
            if (!n || 0 === n.length) return "Missing channels";
            if (!o.subscribeKey) return "Missing Subscribe Key";
            if (i && 1 < n.length) throw new TypeError("History can return actions data for a single channel only. Either pass a single channel or disable the includeMessageActions flag.")
        }, t.getURL = function(e, t) {
            var n = t.channels,
                r = void 0 === n ? [] : n,
                i = t.includeMessageActions,
                o = void 0 !== i && i,
                s = e.config,
                a = o ? "history-with-actions" : "history",
                u = 0 < r.length ? r.join(",") : ",";
            return "/v3/".concat(a, "/sub-key/").concat(s.subscribeKey, "/channel/").concat(c.default.encodeString(u))
        }, t.getRequestTimeout = function(e) { return e.config.getTransactionTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = t.start,
                r = t.end,
                i = t.count,
                o = t.stringifiedTimeToken,
                s = void 0 !== o && o,
                a = t.includeMeta,
                u = void 0 !== a && a,
                c = {};
            i && (c.max = i);
            n && (c.start = n);
            r && (c.end = r);
            s && (c.string_message_token = "true");
            u && (c.include_meta = "true");
            return c
        }, t.handleResponse = function(r, e) {
            var i = { channels: {} };
            return Object.keys(e.channels || {}).forEach(function(n) {
                i.channels[n] = [], (e.channels[n] || []).forEach(function(e) {
                    var t = {};
                    t.channel = n, t.timetoken = e.timetoken, t.message = function(e, t) {
                        var n = e.config,
                            r = e.crypto;
                        if (!n.cipherKey) return t;
                        try { return r.decrypt(t) } catch (e) { return t }
                    }(r, e.message), e.actions && (t.actions = e.actions, t.data = e.actions), e.meta && (t.meta = e.meta), i.channels[n].push(t)
                })
            }), i
        };
        n(1);
        var r = i(n(0)),
            c = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getOperation = function() { return r.default.PNSubscribeOperation }, t.validateParams = function(e) { if (!e.config.subscribeKey) return "Missing Subscribe Key" }, t.getURL = function(e, t) {
            var n = e.config,
                r = t.channels,
                i = void 0 === r ? [] : r,
                o = 0 < i.length ? i.join(",") : ",";
            return "/v2/subscribe/".concat(n.subscribeKey, "/").concat(s.default.encodeString(o), "/0")
        }, t.getRequestTimeout = function(e) { return e.config.getSubscribeTimeout() }, t.isAuthSupported = function() { return !0 }, t.prepareParams = function(e, t) {
            var n = e.config,
                r = t.state,
                i = t.channelGroups,
                o = void 0 === i ? [] : i,
                s = t.timetoken,
                a = t.filterExpression,
                u = t.region,
                c = { heartbeat: n.getPresenceTimeout() };
            0 < o.length && (c["channel-group"] = o.join(","));
            a && 0 < a.length && (c["filter-expr"] = a);
            Object.keys(r).length && (c.state = JSON.stringify(r));
            s && (c.tt = s);
            u && (c.tr = u);
            return c
        }, t.handleResponse = function(e, t) {
            var r = [];
            t.m.forEach(function(e) {
                var t = { publishTimetoken: e.p.t, region: e.p.r },
                    n = { shard: parseInt(e.a, 10), subscriptionMatch: e.b, channel: e.c, messageType: e.e, payload: e.d, flags: e.f, issuingClientId: e.i, subscribeKey: e.k, originationTimetoken: e.o, userMetadata: e.u, publishMetaData: t };
                r.push(n)
            });
            var n = { timetoken: t.t.t, region: t.t.r };
            return { messages: r, metadata: n }
        };
        n(1);
        var r = i(n(0)),
            s = i(n(2));

        function i(e) { return e && e.__esModule ? e : { default: e } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        i(n(3));
        var r = i(n(4));
        n(1);

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        var a, u, c, l = (a = f, (u = [{ key: "init", value: function(e) { this._config = e, this._maxSubDomain = 20, this._currentSubDomain = Math.floor(Math.random() * this._maxSubDomain), this._providedFQDN = (this._config.secure ? "https://" : "http://") + this._config.origin, this._coreParams = {}, this.shiftStandardOrigin() } }, { key: "nextOrigin", value: function() { return this._providedFQDN.match(/ps\.pndsn\.com$/i) ? (this._currentSubDomain += 1, this._currentSubDomain >= this._maxSubDomain && (this._currentSubDomain = 1), e = this._currentSubDomain.toString(), this._providedFQDN.replace("ps.pndsn.com", "ps".concat(e, ".pndsn.com"))) : this._providedFQDN; var e } }, { key: "hasModule", value: function(e) { return e in this._modules } }, { key: "shiftStandardOrigin", value: function() { return this._standardOrigin = this.nextOrigin(), this._standardOrigin } }, { key: "getStandardOrigin", value: function() { return this._standardOrigin } }, { key: "POST", value: function(e, t, n, r) { return this._modules.post(e, t, n, r) } }, { key: "PATCH", value: function(e, t, n, r) { return this._modules.patch(e, t, n, r) } }, { key: "GET", value: function(e, t, n) { return this._modules.get(e, t, n) } }, { key: "DELETE", value: function(e, t, n) { return this._modules.del(e, t, n) } }, { key: "_detectErrorCategory", value: function(e) { if ("ENOTFOUND" === e.code) return r.default.PNNetworkIssuesCategory; if ("ECONNREFUSED" === e.code) return r.default.PNNetworkIssuesCategory; if ("ECONNRESET" === e.code) return r.default.PNNetworkIssuesCategory; if ("EAI_AGAIN" === e.code) return r.default.PNNetworkIssuesCategory; if (0 === e.status || e.hasOwnProperty("status") && void 0 === e.status) return r.default.PNNetworkIssuesCategory; if (e.timeout) return r.default.PNTimeoutCategory; if ("ETIMEDOUT" === e.code) return r.default.PNNetworkIssuesCategory; if (e.response) { if (e.response.badRequest) return r.default.PNBadRequestCategory; if (e.response.forbidden) return r.default.PNAccessDeniedCategory } return r.default.PNUnknownCategory } }]) && o(a.prototype, u), void(c && o(a, c)), f);

        function f(t) { var n = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, f), s(this, "_modules", void 0), s(this, "_config", void 0), s(this, "_maxSubDomain", void 0), s(this, "_currentSubDomain", void 0), s(this, "_standardOrigin", void 0), s(this, "_subscribeOrigin", void 0), s(this, "_providedFQDN", void 0), s(this, "_requestTimeout", void 0), s(this, "_coreParams", void 0), this._modules = {}, Object.keys(t).forEach(function(e) { n._modules[e] = t[e].bind(n) }) }
        t.default = l, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r = { get: function(e) { try { return localStorage.getItem(e) } catch (e) { return null } }, set: function(e, t) { try { return localStorage.setItem(e, t) } catch (e) { return null } } };
        t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var s, a, u, c = (s = l, (a = [{
            key: "decodeToken",
            value: function(e) {
                var t = "";
                e.length % 4 == 3 ? t = "=" : e.length % 4 == 2 && (t = "==");
                var n = e.replace(/-/gi, "+").replace(/_/gi, "/") + t,
                    r = this._decode(this._base64ToBinary(n));
                if ("object" === i(r)) return r
            }
        }]) && r(s.prototype, a), void(u && r(s, u)), l);

        function l(e, t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), o(this, "_base64ToBinary", void 0), o(this, "_cborReader", void 0), this._base64ToBinary = t, this._decode = e }
        t.default = c, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.get = function(e, t, n) { var r = o.default.get(this.getStandardOrigin() + t.url).set(t.headers).query(e); return s.call(this, r, t, n) }, t.post = function(e, t, n, r) { var i = o.default.post(this.getStandardOrigin() + n.url).query(e).set(n.headers).send(t); return s.call(this, i, n, r) }, t.patch = function(e, t, n, r) { var i = o.default.patch(this.getStandardOrigin() + n.url).query(e).set(n.headers).send(t); return s.call(this, i, n, r) }, t.del = function(e, t, n) { var r = o.default.delete(this.getStandardOrigin() + t.url).set(t.headers).query(e); return s.call(this, r, t, n) };
        var r, o = (r = n(85)) && r.__esModule ? r : { default: r };
        n(1);

        function a(r) {
            var i = (new Date).getTime(),
                e = (new Date).toISOString(),
                o = console && console.log ? console : window && window.console && window.console.log ? window.console : console;
            o.log("<<<<<"), o.log("[".concat(e, "]"), "\n", r.url, "\n", r.qs), o.log("-----"), r.on("response", function(e) {
                var t = (new Date).getTime() - i,
                    n = (new Date).toISOString();
                o.log(">>>>>>"), o.log("[".concat(n, " / ").concat(t, "]"), "\n", r.url, "\n", r.qs, "\n", e.text), o.log("-----")
            })
        }

        function s(e, i, o) { var s = this; return this._config.logVerbosity && (e = e.use(a)), this._config.proxy && this._modules.proxy && (e = this._modules.proxy.call(this, e)), this._config.keepAlive && this._modules.keepAlive && (e = this._modules.keepAlive(e)), e.timeout(i.timeout).end(function(t, n) { var e, r = {}; if (r.error = null !== t, r.operation = i.operation, n && n.status && (r.statusCode = n.status), t) { if (t.response && t.response.text && !s._config.logVerbosity) try { r.errorData = JSON.parse(t.response.text) } catch (e) { r.errorData = t } else r.errorData = t; return r.category = s._detectErrorCategory(t), o(r, null) } try { e = JSON.parse(n.text) } catch (e) { return r.errorData = n, r.error = !0, o(r, null) } return e.error && 1 === e.error && e.status && e.message && e.service ? (r.errorData = e, r.statusCode = e.status, r.error = !0, r.category = s._detectErrorCategory(r), o(r, null)) : (e.error && e.error.message && (r.errorData = e.error), o(r, e)) }) }
    }, function(e, n, t) {
        var r;
        r = "undefined" != typeof window ? window : "undefined" != typeof self ? self : (console.warn("Using browser-only version of superagent in non-browser environment"), this);
        var i = t(86),
            o = t(87),
            s = t(10),
            a = t(88),
            u = t(90);

        function c() {}
        var l = n = e.exports = function(e, t) { return "function" == typeof t ? new n.Request("GET", e).end(t) : 1 == arguments.length ? new n.Request("GET", e) : new n.Request(e, t) };
        n.Request = y, l.getXHR = function() { if (!(!r.XMLHttpRequest || r.location && "file:" == r.location.protocol && r.ActiveXObject)) return new XMLHttpRequest; try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (e) {} try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (e) {} try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (e) {} throw Error("Browser-only version of superagent could not find XHR") };
        var f = "".trim ? function(e) { return e.trim() } : function(e) { return e.replace(/(^\s*|\s*$)/g, "") };

        function d(e) { if (!s(e)) return e; var t = []; for (var n in e) p(t, n, e[n]); return t.join("&") }

        function p(t, n, e) {
            if (null != e)
                if (Array.isArray(e)) e.forEach(function(e) { p(t, n, e) });
                else if (s(e))
                for (var r in e) p(t, n + "[" + r + "]", e[r]);
            else t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
            else null === e && t.push(encodeURIComponent(n))
        }

        function h(e) { for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) - 1 == (n = (t = i[o]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1)); return r }

        function v(e) { return /[\/+]json($|[^-\w])/.test(e) }

        function g(e) {
            this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
            var t = this.xhr.status;
            1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = function(e) { for (var t, n, r, i, o = e.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) - 1 !== (t = (n = o[a]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), i = f(n.slice(t + 1)), s[r] = i); return s }(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
        }

        function y(e, t) {
            var r = this;
            this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
                var t, n = null,
                    e = null;
                try { e = new g(r) } catch (e) { return (n = new Error("Parser is unable to parse the response")).parse = !0, n.original = e, r.xhr ? (n.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response, n.status = r.xhr.status ? r.xhr.status : null, n.statusCode = n.status) : (n.rawResponse = null, n.status = null), r.callback(n) }
                r.emit("response", e);
                try { r._isResponseOK(e) || (t = new Error(e.statusText || "Unsuccessful HTTP response")) } catch (e) { t = e }
                t ? (t.original = n, t.response = e, t.status = e.status, r.callback(t, e)) : r.callback(null, e)
            })
        }

        function b(e, t, n) { var r = l("DELETE", e); return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }
        l.serializeObject = d, l.parseString = h, l.types = { html: "text/html", json: "application/json", xml: "text/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, l.serialize = { "application/x-www-form-urlencoded": d, "application/json": JSON.stringify }, l.parse = { "application/x-www-form-urlencoded": h, "application/json": JSON.parse }, a(g.prototype), g.prototype._parseBody = function(e) { var t = l.parse[this.type]; return this.req._parser ? this.req._parser(this, e) : (!t && v(this.type) && (t = l.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null) }, g.prototype.toError = function() {
            var e = this.req,
                t = e.method,
                n = e.url,
                r = "cannot " + t + " " + n + " (" + this.status + ")",
                i = new Error(r);
            return i.status = this.status, i.method = t, i.url = n, i
        }, l.Response = g, i(y.prototype), o(y.prototype), y.prototype.type = function(e) { return this.set("Content-Type", l.types[e] || e), this }, y.prototype.accept = function(e) { return this.set("Accept", l.types[e] || e), this }, y.prototype.auth = function(e, t, n) { 1 === arguments.length && (t = ""), "object" == typeof t && null !== t && (n = t, t = ""), n = n || { type: "function" == typeof btoa ? "basic" : "auto" }; return this._auth(e, t, n, function(e) { if ("function" == typeof btoa) return btoa(e); throw new Error("Cannot use basic auth, btoa is not a function") }) }, y.prototype.query = function(e) { return "string" != typeof e && (e = d(e)), e && this._query.push(e), this }, y.prototype.attach = function(e, t, n) {
            if (t) {
                if (this._data) throw Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(e, t, n || t.name)
            }
            return this
        }, y.prototype._getFormData = function() { return this._formData || (this._formData = new r.FormData), this._formData }, y.prototype.callback = function(e, t) {
            if (this._shouldRetry(e, t)) return this._retry();
            var n = this._callback;
            this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
        }, y.prototype.crossDomainError = function() {
            var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
        }, y.prototype.buffer = y.prototype.ca = y.prototype.agent = function() { return console.warn("This is not supported in browser version of superagent"), this }, y.prototype.pipe = y.prototype.write = function() { throw Error("Streaming is not supported in browser version of superagent") }, y.prototype._isHost = function(e) { return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e) }, y.prototype.end = function(e) { return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || c, this._finalizeQueryString(), this._end() }, y.prototype._end = function() {
            var n = this,
                r = this.xhr = l.getXHR(),
                e = this._formData || this._data;
            this._setTimeouts(), r.onreadystatechange = function() {
                var e = r.readyState;
                if (2 <= e && n._responseTimeoutTimer && clearTimeout(n._responseTimeoutTimer), 4 == e) {
                    var t;
                    try { t = r.status } catch (e) { t = 0 }
                    if (!t) { if (n.timedout || n._aborted) return; return n.crossDomainError() }
                    n.emit("end")
                }
            };

            function t(e, t) { 0 < t.total && (t.percent = t.loaded / t.total * 100), t.direction = e, n.emit("progress", t) }
            if (this.hasListeners("progress")) try { r.onprogress = t.bind(null, "download"), r.upload && (r.upload.onprogress = t.bind(null, "upload")) } catch (e) {}
            try { this.username && this.password ? r.open(this.method, this.url, !0, this.username, this.password) : r.open(this.method, this.url, !0) } catch (e) { return this.callback(e) }
            if (this._withCredentials && (r.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof e && !this._isHost(e)) {
                var i = this._header["content-type"],
                    o = this._serializer || l.serialize[i ? i.split(";")[0] : ""];
                !o && v(i) && (o = l.serialize["application/json"]), o && (e = o(e))
            }
            for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && r.setRequestHeader(s, this.header[s]);
            return this._responseType && (r.responseType = this._responseType), this.emit("request", this), r.send(void 0 !== e ? e : null), this
        }, l.agent = function() { return new u }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(r) { u.prototype[r.toLowerCase()] = function(e, t) { var n = new l.Request(r, e); return this._setDefaults(n), t && n.end(t), n } }), u.prototype.del = u.prototype.delete, l.get = function(e, t, n) { var r = l("GET", e); return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r }, l.head = function(e, t, n) { var r = l("HEAD", e); return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r }, l.options = function(e, t, n) { var r = l("OPTIONS", e); return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, l.del = b, l.delete = b, l.patch = function(e, t, n) { var r = l("PATCH", e); return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, l.post = function(e, t, n) { var r = l("POST", e); return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }, l.put = function(e, t, n) { var r = l("PUT", e); return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r }
    }, function(e, t, n) {
        function r(e) { if (e) return function(e) { for (var t in r.prototype) e[t] = r.prototype[t]; return e }(e) }(e.exports = r).prototype.on = r.prototype.addEventListener = function(e, t) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this }, r.prototype.once = function(e, t) {
            function n() { this.off(e, n), t.apply(this, arguments) }
            return n.fn = t, this.on(e, n), this
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n, r = this._callbacks["$" + e];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var i = 0; i < r.length; i++)
                if ((n = r[i]) === t || n.fn === t) { r.splice(i, 1); break }
            return 0 === r.length && delete this._callbacks["$" + e], this
        }, r.prototype.emit = function(e) { this._callbacks = this._callbacks || {}; for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]; if (n) { r = 0; for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t) } return this }, r.prototype.listeners = function(e) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [] }, r.prototype.hasListeners = function(e) { return !!this.listeners(e).length }
    }, function(e, t, n) {
        "use strict";
        var i = n(10);

        function r(e) { if (e) return function(e) { for (var t in r.prototype) e[t] = r.prototype[t]; return e }(e) }(e.exports = r).prototype.clearTimeout = function() { return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this }, r.prototype.parse = function(e) { return this._parser = e, this }, r.prototype.responseType = function(e) { return this._responseType = e, this }, r.prototype.serialize = function(e) { return this._serializer = e, this }, r.prototype.timeout = function(e) {
            if (!e || "object" != typeof e) return this._timeout = e, this._responseTimeout = 0, this;
            for (var t in e) switch (t) {
                case "deadline":
                    this._timeout = e.deadline;
                    break;
                case "response":
                    this._responseTimeout = e.response;
                    break;
                default:
                    console.warn("Unknown timeout option", t)
            }
            return this
        }, r.prototype.retry = function(e, t) { return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this };
        var o = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        r.prototype._shouldRetry = function(e, t) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
            if (this._retryCallback) try { var n = this._retryCallback(e, t); if (!0 === n) return !0; if (!1 === n) return !1 } catch (e) { console.error(e) }
            if (t && t.status && 500 <= t.status && 501 != t.status) return !0;
            if (e) { if (e.code && ~o.indexOf(e.code)) return !0; if (e.timeout && "ECONNABORTED" == e.code) return !0; if (e.crossDomain) return !0 }
            return !1
        }, r.prototype._retry = function() { return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end() }, r.prototype.then = function(e, t) {
            if (!this._fullfilledPromise) {
                var i = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(n, r) { i.end(function(e, t) { e ? r(e) : n(t) }) })
            }
            return this._fullfilledPromise.then(e, t)
        }, r.prototype.catch = function(e) { return this.then(void 0, e) }, r.prototype.use = function(e) { return e(this), this }, r.prototype.ok = function(e) { if ("function" != typeof e) throw Error("Callback required"); return this._okCallback = e, this }, r.prototype._isResponseOK = function(e) { return !!e && (this._okCallback ? this._okCallback(e) : 200 <= e.status && e.status < 300) }, r.prototype.getHeader = r.prototype.get = function(e) { return this._header[e.toLowerCase()] }, r.prototype.set = function(e, t) { if (i(e)) { for (var n in e) this.set(n, e[n]); return this } return this._header[e.toLowerCase()] = t, this.header[e] = t, this }, r.prototype.unset = function(e) { return delete this._header[e.toLowerCase()], delete this.header[e], this }, r.prototype.field = function(e, t) { if (null == e) throw new Error(".field(name, val) name can not be empty"); if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), i(e)) { for (var n in e) this.field(n, e[n]); return this } if (Array.isArray(t)) { for (var r in t) this.field(e, t[r]); return this } if (null == t) throw new Error(".field(name, val) val can not be empty"); return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this }, r.prototype.abort = function() { return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this }, r.prototype._auth = function(e, t, n, r) {
            switch (n.type) {
                case "basic":
                    this.set("Authorization", "Basic " + r(e + ":" + t));
                    break;
                case "auto":
                    this.username = e, this.password = t;
                    break;
                case "bearer":
                    this.set("Authorization", "Bearer " + e)
            }
            return this
        }, r.prototype.withCredentials = function(e) { return null == e && (e = !0), this._withCredentials = e, this }, r.prototype.redirects = function(e) { return this._maxRedirects = e, this }, r.prototype.maxResponseSize = function(e) { if ("number" != typeof e) throw TypeError("Invalid argument"); return this._maxResponseSize = e, this }, r.prototype.toJSON = function() { return { method: this.method, url: this.url, data: this._data, headers: this._header } }, r.prototype.send = function(e) {
            var t = i(e),
                n = this._header["content-type"];
            if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
            else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
            if (t && i(this._data))
                for (var r in e) this._data[r] = e[r];
            else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
            return !t || this._isHost(e) || n || this.type("json"), this
        }, r.prototype.sortQuery = function(e) { return this._sort = void 0 === e || e, this }, r.prototype._finalizeQueryString = function() { var e = this._query.join("&"); if (e && (this.url += (0 <= this.url.indexOf("?") ? "&" : "?") + e), this._query.length = 0, this._sort) { var t = this.url.indexOf("?"); if (0 <= t) { var n = this.url.substring(t + 1).split("&"); "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&") } } }, r.prototype._appendQueryString = function() { console.trace("Unsupported") }, r.prototype._timeoutError = function(e, t, n) {
            if (!this._aborted) {
                var r = new Error(e + t + "ms exceeded");
                r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
            }
        }, r.prototype._setTimeouts = function() {
            var e = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() { e._timeoutError("Timeout of ", e._timeout, "ETIME") }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() { e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT") }, this._responseTimeout))
        }
    }, function(e, t, n) {
        "use strict";
        var i = n(89);

        function r(e) { if (e) return function(e) { for (var t in r.prototype) e[t] = r.prototype[t]; return e }(e) }(e.exports = r).prototype.get = function(e) { return this.header[e.toLowerCase()] }, r.prototype._setHeaderProperties = function(e) {
            var t = e["content-type"] || "";
            this.type = i.type(t);
            var n = i.params(t);
            for (var r in n) this[r] = n[r];
            this.links = {};
            try { e.link && (this.links = i.parseLinks(e.link)) } catch (e) {}
        }, r.prototype._setStatusProperties = function(e) {
            var t = e / 100 | 0;
            this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.created = 201 == e, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e, this.unprocessableEntity = 422 == e
        }
    }, function(e, t, n) {
        "use strict";
        t.type = function(e) { return e.split(/ *; */).shift() }, t.params = function(e) {
            return e.split(/ *; */).reduce(function(e, t) {
                var n = t.split(/ *= */),
                    r = n.shift(),
                    i = n.shift();
                return r && i && (e[r] = i), e
            }, {})
        }, t.parseLinks = function(e) {
            return e.split(/ *, */).reduce(function(e, t) {
                var n = t.split(/ *; */),
                    r = n[0].slice(1, -1);
                return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e
            }, {})
        }, t.cleanHeader = function(e, t) { return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e }
    }, function(e, t) {
        function n() { this._defaults = [] }["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(e) { n.prototype[e] = function() { return this._defaults.push({ fn: e, arguments: arguments }), this } }), n.prototype._setDefaults = function(t) { this._defaults.forEach(function(e) { t[e.fn].apply(t, e.arguments) }) }, e.exports = n
    }], i.c = r, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) { return t[e] }.bind(null, r));
        return n
    }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "", i(i.s = 11);

    function i(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports }
    var n, r
});