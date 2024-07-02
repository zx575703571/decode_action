//Tue Jul 02 2024 07:10:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x64d73a = _0x10c36e("中国联通"),
  _0x1a1a55 = require("got"),
  _0x2241d5 = require("crypto-js"),
  {
    CookieJar: _0x1bb32f
  } = require("tough-cookie"),
  _0x463c37 = "chinaUnicom",
  _0x4a4c8d = ["\n", "&", "@"],
  _0x30b189 = [_0x463c37 + "Cookie"],
  _0x308aad = 50000,
  _0x519f1d = 3;
const _0x2a1201 = 1.07,
  _0x228377 = "chinaUnicom",
  _0x3084fe = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x37ab0b = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@10.0300}",
  _0x3af1bf = 5,
  _0x3dc741 = 13,
  _0x56fff8 = 1000,
  _0x281047 = 3600000,
  _0x2ab6a7 = 100,
  _0x4b75ff = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x4019d9 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x1346f2 = "10000002",
  _0x3c3419 = "7k1HcDL8RKvc",
  _0x448296 = "update!@#1234567",
  _0x60976 = "16-Bytes--String",
  _0x7a60b9 = "225",
  _0x1646c2 = "225",
  _0x1b6fdf = "party",
  _0xd34358 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x500651 = "0123456789",
  _0x47f1d1 = "qwertyuiopasdfghjklzxcvbnm",
  _0x350c76 = process.env[_0x463c37 + "Uuid"] || _0x64d73a.randomUuid(),
  _0x132d16 = [9, 10, 11, 12, 13],
  _0xce3893 = 1000,
  _0x2befd9 = 5000,
  _0x5627f0 = {
    read: 6641,
    moonbox: 8
  };
const _0x4a9118 = 7;
function _0x45566d(_0x240d6d, _0x2cc3b6, _0x56b7af, _0x5690ba, _0x2a3a38, _0x16ce2c) {
  return _0x2241d5[_0x240d6d].encrypt(_0x2241d5.enc.Utf8.parse(_0x5690ba), _0x2241d5.enc.Utf8.parse(_0x2a3a38), {
    mode: _0x2241d5.mode[_0x2cc3b6],
    padding: _0x2241d5.pad[_0x56b7af],
    iv: _0x2241d5.enc.Utf8.parse(_0x16ce2c)
  }).ciphertext.toString(_0x2241d5.enc.Hex);
}
function _0xd9dcf8(_0x334cc2, _0x20b75a, _0x73e62c, _0x5df380, _0x522ef8, _0x4e2688) {
  return _0x2241d5[_0x334cc2].decrypt({
    ciphertext: _0x2241d5.enc.Hex.parse(_0x5df380)
  }, _0x2241d5.enc.Utf8.parse(_0x522ef8), {
    mode: _0x2241d5.mode[_0x20b75a],
    padding: _0x2241d5.pad[_0x73e62c],
    iv: _0x2241d5.enc.Utf8.parse(_0x4e2688)
  }).toString(_0x2241d5.enc.Utf8);
}
class _0x12414a {
  constructor() {
    this.index = _0x64d73a.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x20b4ed = {
      limit: 0
    };
    const _0xedb132 = {
      Connection: "keep-alive"
    };
    const _0x103a3d = {
      retry: _0x20b4ed,
      timeout: _0x308aad,
      followRedirect: false,
      headers: _0xedb132
    };
    this.got = _0x1a1a55.extend(_0x103a3d);
  }
  log(_0x492067, _0x42c481 = {}) {
    var _0xadf4b3 = "",
      _0x1c466b = _0x64d73a.userCount.toString().length;
    if (this.index) {
      _0xadf4b3 += "账号[" + _0x64d73a.padStr(this.index, _0x1c466b) + "]";
    }
    if (this.name) {
      _0xadf4b3 += "[" + this.name + "]";
    }
    _0x64d73a.log(_0xadf4b3 + _0x492067, _0x42c481);
  }
  set_cookie(_0x28004b, _0x5a8822, _0xf5a5e6, _0x3412cf, _0x1699cf = {}) {
    this.cookieJar.setCookieSync(_0x28004b + "=" + _0x5a8822 + "; Domain=" + _0xf5a5e6 + ";", "" + _0x3412cf);
  }
  async request(_0x381db0) {
    const _0x42040b = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x2b7852 = ["TimeoutError"];
    var _0x33aa8c = null,
      _0x58e029 = 0,
      _0x4b04b2 = _0x381db0.fn || _0x381db0.url;
    _0x381db0.method = _0x381db0?.["method"]?.["toUpperCase"]() || "GET";
    let _0x38b8cf;
    while (_0x58e029 < _0x519f1d) {
      try {
        _0x58e029++;
        _0x38b8cf = null;
        let _0xbbcf14 = null,
          _0x46969f = _0x381db0?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x308aad,
          _0x36b898 = false;
        await new Promise(async _0x2da006 => {
          setTimeout(() => {
            _0x36b898 = true;
            _0x2da006();
          }, _0x46969f);
          await this.got(_0x381db0).then(_0x2c3f39 => {
            _0x33aa8c = _0x2c3f39;
          }, _0x2f76e6 => {
            _0xbbcf14 = _0x2f76e6;
            _0x33aa8c = _0x2f76e6.response;
            _0x38b8cf = _0xbbcf14?.["code"];
          });
          _0x2da006();
        });
        if (_0x36b898) {
          this.log("[" + _0x4b04b2 + "]请求超时(" + _0x46969f / 1000 + "秒)，重试第" + _0x58e029 + "次");
        } else {
          if (_0x2b7852.includes(_0xbbcf14?.["name"])) {
            this.log("[" + _0x4b04b2 + "]请求超时(" + _0xbbcf14.code + ")，重试第" + _0x58e029 + "次");
          } else {
            if (_0x42040b.includes(_0xbbcf14?.["code"])) {
              this.log("[" + _0x4b04b2 + "]请求错误(" + _0xbbcf14.code + ")，重试第" + _0x58e029 + "次");
            } else {
              let _0x1c7e95 = _0x33aa8c?.["statusCode"] || 999,
                _0x36522b = _0x1c7e95 / 100 | 0;
              if (_0x36522b > 3) {
                this.log("请求[" + _0x4b04b2 + "]返回[" + _0x1c7e95 + "]");
              }
              if (_0x36522b <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x38b129) {
        _0x38b129.name == "TimeoutError" ? this.log("[" + _0x4b04b2 + "]请求超时，重试第" + _0x58e029 + "次") : this.log("[" + _0x4b04b2 + "]请求错误(" + _0x38b129.message + ")，重试第" + _0x58e029 + "次");
      }
    }
    if (_0x33aa8c == null) {
      return Promise.resolve({
        statusCode: _0x38b8cf || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x2c32d0,
      headers: _0x22f532,
      body: _0x3f0d98
    } = _0x33aa8c;
    if (_0x3f0d98) {
      try {
        _0x3f0d98 = JSON.parse(_0x3f0d98);
      } catch {}
    }
    const _0x405c8e = {
      statusCode: _0x2c32d0,
      headers: _0x22f532,
      result: _0x3f0d98
    };
    return Promise.resolve(_0x405c8e);
  }
}
let _0x4d6255 = new _0x12414a();
class _0x5d22be extends _0x12414a {
  constructor(_0x10dc47) {
    super();
    this.cookieJar = new _0x1bb32f();
    const _0x418169 = {
      "User-Agent": _0x37ab0b
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x418169
    });
    let _0xff2458 = _0x10dc47.split("#");
    this.token_online = _0xff2458[0];
    this.unicomTokenId = _0x64d73a.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x64d73a.randomString(32, _0x500651 + _0x47f1d1).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.need_read_moonbox = false;
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x27e0f1, _0x5e64bc, _0x11444a = {}) {
    let _0xc4c6ed = _0x11444a?.["domain"] || "10010.com",
      _0x140835 = _0x11444a?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x27e0f1, _0x5e64bc, _0xc4c6ed, _0x140835, _0x11444a);
  }
  get_bizchannelinfo() {
    const _0x1c8919 = {
      bizChannelCode: _0x1646c2,
      disriBiz: _0x1b6fdf,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x5c354a = JSON.stringify(_0x1c8919);
    return _0x5c354a;
  }
  get_epay_authinfo() {
    const _0x1817de = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x1817de);
  }
  get_flmf_data(_0x5c88ab = "welfareCenter") {
    const _0x1ea004 = {
      sid: this.flmf_sid,
      actcode: _0x5c88ab
    };
    return _0x1ea004;
  }
  encode_woread(_0x525400) {
    let _0x475a6a = _0x45566d("AES", "CBC", "Pkcs7", JSON.stringify(_0x525400), _0x448296, _0x60976);
    return Buffer.from(_0x475a6a, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x64d73a.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  async onLine(_0x6c1cd9 = {}) {
    let _0x580749 = false;
    try {
      let _0x2b05c0 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x64d73a.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x4b75ff,
            version: "iphone_c@10.0300",
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x7f0fb2,
          statusCode: _0x2967e5
        } = await this.request(_0x2b05c0),
        _0x56a8b8 = _0x64d73a.get(_0x7f0fb2, "code", _0x2967e5);
      if (_0x56a8b8 == 0) {
        _0x580749 = true;
        this.valid = true;
        this.mobile = _0x7f0fb2?.["desmobile"];
        this.name = _0x7f0fb2?.["desmobile"];
        this.ecs_token = _0x7f0fb2?.["ecs_token"];
        this.city = _0x7f0fb2?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x56a8b8 + "]");
      }
    } catch (_0x21c8dc) {
      console.log(_0x21c8dc);
    } finally {
      return _0x580749;
    }
  }
  async openPlatLineNew(_0x328e23, _0x13b42b = {}) {
    const _0x29b7e9 = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x500146 = _0x29b7e9;
    try {
      const _0x20ab8d = {
        to_url: _0x328e23
      };
      const _0x7ae6ff = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x20ab8d
      };
      let {
        headers: _0x2a3b94,
        statusCode: _0x32651c
      } = await this.request(_0x7ae6ff);
      if (_0x2a3b94?.["location"]) {
        let _0xb3406 = new URL(_0x2a3b94.location),
          _0x2ccf03 = _0xb3406.searchParams.get("type") || "02",
          _0x7bb344 = _0xb3406.searchParams.get("ticket");
        !_0x7bb344 && this.log("获取ticket失败");
        const _0x5352a4 = {
          loc: _0x2a3b94.location,
          ticket: _0x7bb344,
          type: _0x2ccf03
        };
        _0x500146 = _0x5352a4;
      } else {
        this.log("获取ticket失败[" + _0x32651c + "]");
      }
    } catch (_0x5c57df) {
      console.log(_0x5c57df);
    } finally {
      return _0x500146;
    }
  }
  async gettaskip(_0x26b933 = {}) {
    let _0x177b66 = _0x64d73a.randomString(32).toUpperCase();
    try {
      const _0x34fb5f = {
        mobile: this.mobile,
        orderId: _0x177b66
      };
      const _0x43ce9f = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x34fb5f
      };
      await this.request(_0x43ce9f);
    } catch (_0x200f26) {
      console.log(_0x200f26);
    } finally {
      return _0x177b66;
    }
  }
  async draw_28_queryChance(_0x1f2925 = {}) {
    try {
      const _0x3230e3 = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x2f00d8,
          statusCode: _0x313ce2
        } = await this.request(_0x3230e3),
        _0x39fd96 = _0x64d73a.get(_0x2f00d8, "status", _0x313ce2);
      if (_0x39fd96 == "0000") {
        let _0x3a386c = parseInt(_0x2f00d8?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x3a386c + "次");
        let _0x53ae0d = false;
        while (_0x3a386c-- > 0) {
          if (_0x53ae0d) {
            await _0x64d73a.wait(8000);
          }
          _0x53ae0d = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x52a590 = _0x2f00d8?.["message"] || _0x2f00d8?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x39fd96 + "]: " + _0x52a590);
      }
    } catch (_0x1a1aa4) {
      console.log(_0x1a1aa4);
    }
  }
  async draw_28_lottery(_0xd703ca = {}) {
    try {
      const _0x42383d = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x5de7b7,
          statusCode: _0x1e2399
        } = await this.request(_0x42383d),
        _0x101dea = _0x64d73a.get(_0x5de7b7, "status", _0x1e2399);
      if (_0x101dea == "0000") {
        let _0x52ba83 = _0x64d73a.get(_0x5de7b7?.["data"], "code", -1);
        if (_0x5de7b7?.["data"]?.["uuid"]) {
          await _0x64d73a.wait(2000);
          await this.draw_28_winningRecord(_0x5de7b7.data.uuid);
        } else {
          let _0x214ec3 = _0x5de7b7?.["data"]?.["message"] || _0x5de7b7?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x52ba83 + "]: " + _0x214ec3);
        }
      } else {
        let _0x312ed7 = _0x5de7b7?.["message"] || _0x5de7b7?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x101dea + "]: " + _0x312ed7);
      }
    } catch (_0x3c818b) {
      console.log(_0x3c818b);
    }
  }
  async draw_28_winningRecord(_0x262890, _0x175b00 = {}) {
    try {
      const _0x58c55e = {
        requestId: _0x262890
      };
      const _0x29cfee = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x58c55e
      };
      let {
          result: _0x105b80,
          statusCode: _0x3390c9
        } = await this.request(_0x29cfee),
        _0x25ce94 = _0x64d73a.get(_0x105b80, "status", _0x3390c9);
      if (_0x25ce94 == "0000") {
        let _0x9770ee = _0x64d73a.get(_0x105b80?.["data"], "code", -1);
        if (_0x9770ee == "0000") {
          const _0x5d2494 = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x105b80?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x5d2494);
        } else {
          let _0x4d8372 = _0x105b80?.["data"]?.["message"] || _0x105b80?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x9770ee + "]: " + _0x4d8372);
        }
      } else {
        let _0x4e7b6d = _0x105b80?.["message"] || _0x105b80?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x25ce94 + "]: " + _0x4e7b6d);
      }
    } catch (_0x371007) {
      console.log(_0x371007);
    }
  }
  async ttlxj_authorize(_0x505f6e, _0x498743, _0x3ebd21, _0x471a34 = {}) {
    try {
      let _0x20ca24 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x3ebd21
          },
          json: {
            response_type: "rptid",
            client_id: _0x4019d9,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x505f6e,
              st_type: _0x498743,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x64d73a.randomString(13),
              trace_id: _0x64d73a.randomString(32)
            }
          }
        },
        {
          result: _0x21b6b2
        } = await this.request(_0x20ca24),
        _0x5549b5 = _0x64d73a.get(_0x21b6b2, "status", -1);
      if (_0x5549b5 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x14de9c = _0x21b6b2?.["message"] || _0x21b6b2?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x5549b5 + "]: " + _0x14de9c);
      }
    } catch (_0x3147fe) {
      console.log(_0x3147fe);
    }
  }
  async ttlxj_authCheck(_0x380fb3 = {}) {
    try {
      let _0x563400 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x260bc
        } = await this.request(_0x563400),
        _0x2df1e0 = _0x64d73a.get(_0x260bc, "code", -1);
      if (_0x2df1e0 == "0000") {
        let {
          mobile: _0xd8d84b,
          sessionId: _0x17d169,
          tokenId: _0x4ca4ed,
          userId: _0x223c20
        } = _0x260bc?.["data"]?.["authInfo"];
        const _0x4d5348 = {
          sessionId: _0x17d169,
          tokenId: _0x4ca4ed,
          userId: _0x223c20
        };
        Object.assign(this, _0x4d5348);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x2df1e0 == "2101000100") {
          let _0x1b83b8 = _0x260bc?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x1b83b8);
        } else {
          let _0x1aafc0 = _0x260bc?.["msgInside"] || _0x260bc?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x2df1e0 + "]: " + _0x1aafc0);
        }
      }
    } catch (_0x3f9ae3) {
      console.log(_0x3f9ae3);
    }
  }
  async ttlxj_login(_0x4efb5b, _0x56d907 = {}) {
    try {
      _0x4efb5b += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x7a60b9 + "&bizChannelCode=" + _0x1646c2;
      const _0x2796b0 = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x4efb5b
      };
      let {
        headers: _0x1b7809,
        statusCode: _0x13123a
      } = await this.request(_0x2796b0);
      if (_0x1b7809?.["location"]) {
        let _0x5391d3 = new URL(_0x1b7809.location);
        this.rptId = _0x5391d3.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x13123a + "]");
      }
    } catch (_0x49c038) {
      console.log(_0x49c038);
    }
  }
  async ttlxj_userDrawInfo(_0x4737d5 = {}) {
    try {
      let _0x5bb5d3 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x27a937
        } = await this.request(_0x5bb5d3),
        _0x2dfaab = _0x64d73a.get(_0x27a937, "code", -1);
      if (_0x2dfaab == "0000") {
        let _0x3dc494 = _0x27a937?.["data"]?.["dayOfWeek"],
          _0x3e4c99 = "day" + _0x3dc494,
          _0x1cf6fe = _0x27a937?.["data"]?.[_0x3e4c99] == "1";
        const _0x38bb80 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x1cf6fe ? "未" : "已") + "打卡", _0x38bb80);
        if (_0x1cf6fe) {
          let _0x3522e3 = new Date().getDay();
          _0x3522e3 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x138f0c = _0x27a937?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x2dfaab + "]: " + _0x138f0c);
      }
    } catch (_0x151a9a) {
      console.log(_0x151a9a);
    }
  }
  async ttlxj_unifyDrawNew(_0x50b88e, _0x4e0cd7 = {}) {
    try {
      let _0x10744d = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x50b88e,
            bizFrom: _0x7a60b9,
            activityId: "TTLXJ20210330"
          }
        },
        {
          result: _0xa1e5f0
        } = await this.request(_0x10744d),
        _0xf14d52 = _0x64d73a.get(_0xa1e5f0, "code", -1);
      if (_0xf14d52 == "0000" && _0xa1e5f0?.["data"]?.["returnCode"] == 0) {
        let _0x51dc72 = _0xa1e5f0?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0xa1e5f0?.["data"]?.["amount"]);
        const _0x4de3e6 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x51dc72, _0x4de3e6);
      } else {
        let _0x44b783 = _0xa1e5f0?.["data"]?.["returnMsg"] || _0xa1e5f0?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0xa1e5f0?.["data"]?.["returnCode"] || _0xf14d52) + "]: " + _0x44b783);
      }
    } catch (_0x53c77e) {
      console.log(_0x53c77e);
    }
  }
  async ttlxj_h(_0x41d3eb = {}) {
    try {
      let _0x505bba = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x7a60b9,
          activityId: "TTLXJ20210330",
          uid: _0xd34358
        }
      };
      await this.request(_0x505bba);
    } catch (_0xb6672a) {
      console.log(_0xb6672a);
    }
  }
  async ttlxj_queryAvailable(_0x221bf6 = {}) {
    try {
      let _0x58f79f = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x5d7fb4
        } = await this.request(_0x58f79f),
        _0x2988b8 = _0x64d73a.get(_0x5d7fb4, "code", -1);
      if (_0x2988b8 == "0000" && _0x5d7fb4?.["data"]?.["returnCode"] == 0) {
        let _0x56f507 = _0x5d7fb4?.["data"]?.["availableAmount"] || 0;
        const _0x5df286 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x56f507 / 100).toFixed(2) + "元", _0x5df286);
        let _0x2684ad = [],
          _0x5276de = Date.now();
        for (let _0x11c1bd of _0x5d7fb4?.["data"]?.["prizeList"]?.["filter"](_0x39eb24 => _0x39eb24.status == "A")) {
          let _0x55e827 = _0x11c1bd.endTime,
            _0x2cee4e = new Date(_0x55e827.slice(0, 4) + "-" + _0x55e827.slice(4, 6) + "-" + _0x55e827.slice(6, 8) + " 00:00:00"),
            _0x3dd6a8 = _0x2cee4e.getTime();
          if (_0x3dd6a8 - _0x5276de < _0x4a9118 * 24 * 60 * 60 * 1000) {
            let _0x5c57cd = _0x64d73a.time("yyyy-MM-dd", _0x3dd6a8);
            const _0x4f6407 = {
              timestamp: _0x3dd6a8,
              date: _0x5c57cd,
              amount: _0x11c1bd.amount
            };
            _0x2684ad.push(_0x4f6407);
          }
        }
        if (_0x2684ad.length) {
          const _0x473ed2 = {
            timestamp: 0
          };
          let _0x1f029b = _0x473ed2,
            _0x47b91b = _0x2684ad.reduce(function (_0x14041b, _0x140067) {
              (_0x1f029b.timestamp == 0 || _0x140067.timestamp < _0x1f029b.timestamp) && (_0x1f029b = _0x140067);
              return _0x14041b + parseFloat(_0x140067.amount);
            }, 0);
          const _0x4f44f2 = {
            notify: true
          };
          this.log(_0x4a9118 + "天内过期立减金: " + _0x47b91b.toFixed(2) + "元", _0x4f44f2);
          const _0x38fc04 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x1f029b.amount + "元 -- " + _0x1f029b.date + "过期", _0x38fc04);
        } else {
          const _0x29e172 = {
            notify: true
          };
          this.log(_0x4a9118 + "天内没有过期的立减金", _0x29e172);
        }
      } else {
        let _0x169e0a = _0x5d7fb4?.["data"]?.["returnMsg"] || _0x5d7fb4?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x5d7fb4?.["data"]?.["returnCode"] || _0x2988b8) + "]: " + _0x169e0a);
      }
    } catch (_0x477d97) {
      console.log(_0x477d97);
    }
  }
  async epay_28_authCheck(_0x5b2af6 = {}) {
    try {
      let _0x35d02b = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x304e2e
        } = await this.request(_0x35d02b),
        _0x39c1a3 = _0x64d73a.get(_0x304e2e, "code", -1);
      if (_0x39c1a3 == "0000") {
        let {
          mobile: _0x2ef70c,
          sessionId: _0x268038,
          tokenId: _0x3f1a40,
          userId: _0x1f206b
        } = _0x304e2e?.["data"]?.["authInfo"];
        const _0x219744 = {
          sessionId: _0x268038,
          tokenId: _0x3f1a40,
          userId: _0x1f206b
        };
        Object.assign(this, _0x219744);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x39c1a3 == "2101000100") {
          let _0x3f6a8b = _0x304e2e?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x3f6a8b);
        } else {
          let _0xb30e69 = _0x304e2e?.["msgInside"] || _0x304e2e?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x39c1a3 + "]: " + _0xb30e69);
        }
      }
    } catch (_0x24dac9) {
      console.log(_0x24dac9);
    }
  }
  async epay_28_login(_0x3a1510, _0x159c2c = {}) {
    try {
      let _0x2dc4f7 = _0x64d73a.time("yyyyMM") + "28ZFR";
      _0x3a1510 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x2dc4f7 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0xbefe61 = {
        fn: "epay_28_login",
        method: "get",
        url: _0x3a1510
      };
      let {
        headers: _0x374329,
        statusCode: _0x22d683
      } = await this.request(_0xbefe61);
      if (_0x374329?.["location"]) {
        let _0x2811a6 = new URL(_0x374329.location);
        this.rptId = _0x2811a6.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x22d683 + "]");
      }
    } catch (_0x2f6ea9) {
      console.log(_0x2f6ea9);
    }
  }
  async epay_28_queryUserPage(_0x56cf11 = {}) {
    try {
      let _0x3e6553 = _0x64d73a.time("yyyyMM") + "28ZFR";
      const _0x3337b0 = {
        templateName: _0x3e6553
      };
      let _0x20202d = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x3337b0
        },
        {
          result: _0xf67177
        } = await this.request(_0x20202d),
        _0x1619b2 = _0x64d73a.get(_0xf67177, "code", -1);
      if (_0x1619b2 == "0000" && _0xf67177?.["data"]?.["returnCode"] == 0) {
        for (let _0x2ebead of _0xf67177?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          if (_0x2ebead?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x3e6553, _0x2ebead.mouldName);
            break;
          }
        }
      } else {
        let _0x7b7461 = _0xf67177?.["message"] || _0xf67177?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x1619b2 + "]: " + _0x7b7461);
      }
    } catch (_0x45ba49) {
      console.log(_0x45ba49);
    }
  }
  async epay_28_queryMiddleUnit(_0x36d35f, _0x957023, _0x376aa7 = {}) {
    try {
      const _0x1db829 = {
        activityId: _0x36d35f,
        mouldName: _0x957023
      };
      let _0x1ec54f = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1db829
        },
        {
          result: _0x17d0e0
        } = await this.request(_0x1ec54f),
        _0x48e85d = _0x64d73a.get(_0x17d0e0, "code", -1);
      if (_0x48e85d == "0000") {
        let _0x5aedcc = _0x64d73a.time("dd");
        _0x17d0e0?.["data"]?.[_0x5aedcc] == "1" ? this.log("联通支付日今日(" + _0x5aedcc + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x36d35f, _0x957023);
      } else {
        let _0x277bec = _0x17d0e0?.["message"] || _0x17d0e0?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x48e85d + "]: " + _0x277bec);
      }
    } catch (_0x54783c) {
      console.log(_0x54783c);
    }
  }
  async epay_28_unifyDrawNew(_0x24c009, _0x170415, _0x206b76 = {}) {
    try {
      const _0x517ecc = {
        bizFrom: _0x7a60b9,
        activityId: _0x24c009,
        mouldName: _0x170415
      };
      let _0x2ce1e9 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x517ecc
        },
        {
          result: _0x3dded5
        } = await this.request(_0x2ce1e9),
        _0x16413e = _0x64d73a.get(_0x3dded5, "code", -1);
      if (_0x16413e == "0000" && _0x3dded5?.["data"]?.["returnCode"] == 0) {
        let _0x50a8e1 = _0x3dded5?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x3dded5?.["data"]?.["amount"]);
        const _0x29b146 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x50a8e1, _0x29b146);
      } else {
        let _0x14b46f = _0x3dded5?.["data"]?.["returnMsg"] || _0x3dded5?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x3dded5?.["data"]?.["returnCode"] || _0x16413e) + "]: " + _0x14b46f);
      }
    } catch (_0x20ee9c) {
      console.log(_0x20ee9c);
    }
  }
  async sign_getContinuous(_0x591070 = {}) {
    try {
      const _0x36e443 = {
        taskId: "",
        channel: ""
      };
      const _0x37ca1e = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x36e443
      };
      let {
          result: _0x82ac93
        } = await this.request(_0x37ca1e),
        _0x26e04b = _0x64d73a.get(_0x82ac93, "status", -1);
      if (_0x26e04b == "0000") {
        let _0x197481 = _0x82ac93?.["data"]?.["todaySigned"] || 0;
        const _0x18a88d = {
          notify: true
        };
        this.log("签到区今天" + (_0x197481 == "1" ? "未" : "已") + "签到", _0x18a88d);
        if (_0x197481 == "1") {
          await this.sign_daySign();
        }
      } else {
        let _0x39f659 = _0x82ac93?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x26e04b + "]: " + _0x39f659);
      }
    } catch (_0x1f74b5) {
      console.log(_0x1f74b5);
    }
  }
  async sign_daySign(_0x30688e = {}) {
    try {
      const _0x4c9996 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x11a3b0 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x4c9996
      };
      let {
          result: _0x336c80
        } = await this.request(_0x11a3b0),
        _0x2927f4 = _0x64d73a.get(_0x336c80, "status", -1);
      if (_0x2927f4 == "0000") {
        const _0x4fdf96 = {
          notify: true
        };
        this.log("签到区签到成功: " + _0x336c80?.["data"]?.["signMessage"], _0x4fdf96);
      } else {
        let _0xdc5af1 = _0x336c80?.["msg"] || "";
        this.log("签到区签到失败[" + _0x2927f4 + "]: " + _0xdc5af1);
      }
    } catch (_0x5e2153) {
      console.log(_0x5e2153);
    }
  }
  async sign_queryBubbleTask(_0x1fa204 = {}) {
    try {
      const _0x55dead = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x5e0803
        } = await this.request(_0x55dead),
        _0x340b8c = _0x64d73a.get(_0x5e0803, "status", -1);
      if (_0x340b8c == "0000") {
        for (let _0x28b81c of _0x5e0803?.["data"]?.["paramsList"]?.["filter"](_0x3a253d => _0x3a253d.taskState == 1)) {
          let _0xef6562 = await this.gettaskip();
          await this.sign_doTask(_0x28b81c, _0xef6562);
        }
      } else {
        let _0x863181 = _0x5e0803?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x340b8c + "]: " + _0x863181);
      }
    } catch (_0x371596) {
      console.log(_0x371596);
    }
  }
  async sign_doTask(_0x5a897e, _0x2bea60, _0x5f134d = {}) {
    try {
      const _0x1cf908 = {
        id: _0x5a897e.id,
        orderId: _0x2bea60,
        imei: "BB97982E-3F03-46D3-B904-819D626DF478",
        prizeType: _0x5a897e.rewardType,
        positionFlag: 0
      };
      const _0x368f49 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: _0x1cf908
      };
      let {
          result: _0x1cf654
        } = await this.request(_0x368f49),
        _0x5b015d = _0x64d73a.get(_0x1cf654, "status", -1);
      if (_0x5b015d == "0000") {
        this.log("完成任务[" + _0x5a897e.actName + "]获得: " + _0x1cf654?.["data"]?.["prizeCount"] + _0x1cf654?.["data"]?.["prizeName"]);
      } else {
        let _0x53e87e = _0x1cf654?.["msg"] || "";
        this.log("完成任务[" + _0x5a897e.actName + "]失败[" + _0x5b015d + "]: " + _0x53e87e);
      }
    } catch (_0x556b0c) {
      console.log(_0x556b0c);
    }
  }
  async game_login(_0x3e1521, _0x328290 = {}) {
    try {
      const _0x4117a5 = {
        channelid: "GAMELTAPP_90005"
      };
      const _0x2da2ce = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: _0x4117a5,
        json: {}
      };
      _0x2da2ce.json.identityType = "esToken";
      _0x2da2ce.json.code = this.ecs_token;
      _0x2da2ce.json.ticket = _0x3e1521;
      _0x2da2ce.json.uuid = _0x350c76;
      let {
          result: _0x41ae30
        } = await this.request(_0x2da2ce),
        _0x666256 = _0x64d73a.get(_0x41ae30, "code", -1);
      if (_0x666256 == 200) {
        this.game_token = _0x41ae30?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x4e37c5 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x4e37c5);
      } else {
        let _0x33dcb6 = _0x41ae30?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x666256 + "]: " + _0x33dcb6);
      }
    } catch (_0x4a8fc5) {
      console.log(_0x4a8fc5);
    }
  }
  async game_getMemberInfo(_0x2eae8e = {}) {
    try {
      const _0x59cbcc = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x477fde
        } = await this.request(_0x59cbcc),
        _0x9f0429 = _0x64d73a.get(_0x477fde, "code", -1);
      if (_0x9f0429 == 200) {
        this.point = _0x477fde?.["data"]?.["userIntegral"];
      } else {
        let _0x2915a3 = _0x477fde?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x9f0429 + "]: " + _0x2915a3);
      }
    } catch (_0xd7f66d) {
      console.log(_0xd7f66d);
    }
  }
  async game_signRecord(_0x58a27d = {}) {
    try {
      const _0x2550e5 = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x5f5abc
        } = await this.request(_0x2550e5),
        _0x5ebb5d = _0x64d73a.get(_0x5f5abc, "code", -1);
      if (_0x5ebb5d == 200) {
        for (let _0x1b5363 of _0x5f5abc?.["data"]) {
          if (_0x1b5363.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x1b5363.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x1b5363.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x399ebd = _0x5f5abc?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x5ebb5d + "]: " + _0x399ebd);
      }
    } catch (_0x1a4b6c) {
      console.log(_0x1a4b6c);
    }
  }
  async game_signIn(_0x107a86 = {}) {
    try {
      const _0x7c92e = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x217ae3
        } = await this.request(_0x7c92e),
        _0x5b915a = _0x64d73a.get(_0x217ae3, "code", -1);
      if (_0x5b915a == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x3b42ba = _0x217ae3?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x5b915a + "]: " + _0x3b42ba);
      }
    } catch (_0x388431) {
      console.log(_0x388431);
    }
  }
  async game_checkSlider(_0x4c86f5 = {}) {
    let _0x3b0056 = false;
    try {
      const _0x44abf7 = {
        xPos: 234
      };
      const _0x5cff9c = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x44abf7
      };
      let {
          result: _0x5b2f0a
        } = await this.request(_0x5cff9c),
        _0xc9f2d5 = _0x64d73a.get(_0x5b2f0a, "code", -1);
      if (_0xc9f2d5 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x33f4ea = _0x5b2f0a?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0xc9f2d5 + "]: " + _0x33f4ea);
      }
    } catch (_0x106e60) {
      console.log(_0x106e60);
    } finally {
      return _0x3b0056;
    }
  }
  async game_lottery(_0x5b225d = {}) {
    try {
      let _0x5208cd = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x64d73a.get(_0x5b225d, "id", 1)
          }
        },
        {
          result: _0x5a0bb9
        } = await this.request(_0x5208cd),
        _0x429e93 = _0x64d73a.get(_0x5a0bb9, "code", -1);
      if (_0x429e93 == 200) {
        const _0x499cc1 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x5a0bb9?.["data"]?.["productName"], _0x499cc1);
      } else {
        let _0x46b12e = _0x5a0bb9?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x429e93 + "]: " + _0x46b12e);
      }
    } catch (_0x4b912d) {
      console.log(_0x4b912d);
    }
  }
  async game_taskList(_0x2fe65d = {}) {
    try {
      const _0x80a9ad = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x24f868
        } = await this.request(_0x80a9ad),
        _0x35fd95 = _0x64d73a.get(_0x24f868, "code", -1);
      if (_0x35fd95 == 200) {
        for (let _0x4d2183 of _0x24f868?.["data"]) {
          switch (_0x4d2183.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x4d2183);
              break;
            case 2:
              break;
            default:
              _0x64d73a.log("任务[" + _0x4d2183.taskName + "]未知状态[" + _0x4d2183.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x3f5020 = _0x24f868?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x35fd95 + "]: " + _0x3f5020);
      }
    } catch (_0x41d98e) {
      console.log(_0x41d98e);
    }
  }
  async game_taskReceive(_0x3701a3, _0x2d52c1 = {}) {
    try {
      const _0x349247 = {
        productId: _0x3701a3.productId,
        taskId: _0x3701a3.id
      };
      const _0x1a122e = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x349247
      };
      let {
          result: _0x52ddd4
        } = await this.request(_0x1a122e),
        _0x3c69ff = _0x64d73a.get(_0x52ddd4, "code", -1);
      if (_0x3c69ff == 200) {
        this.log("领取任务[" + _0x3701a3.taskName + "]奖励成功");
      } else {
        let _0x579279 = _0x52ddd4?.["msg"] || "";
        this.log("领取任务[" + _0x3701a3.taskName + "]奖励失败[" + _0x3c69ff + "]: " + _0x579279);
      }
    } catch (_0xce7b2d) {
      console.log(_0xce7b2d);
    }
  }
  async game_playSave(_0x40a6a8 = {}) {
    try {
      let _0x486698 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x64d73a.randomString(2, "0123456789")
          }
        },
        {
          result: _0xf54a61
        } = await this.request(_0x486698),
        _0x54e352 = _0x64d73a.get(_0xf54a61, "code", -1);
      if (!(_0x54e352 == 200)) {
        let _0x16f1ac = _0xf54a61?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x54e352 + "]: " + _0x16f1ac);
      }
    } catch (_0x525728) {
      console.log(_0x525728);
    }
  }
  async flmf_login(_0x13cc29, _0x31605d = {}) {
    try {
      const _0x2bd3f5 = {
        fn: "flmf_login",
        method: "get",
        url: _0x13cc29
      };
      let {
        headers: _0x10569a,
        statusCode: _0x3515e1
      } = await this.request(_0x2bd3f5);
      if (_0x10569a?.["location"]) {
        let _0x2bf92e = new URL(_0x10569a.location);
        this.flmf_sid = _0x2bf92e.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x3515e1 + "]");
      }
    } catch (_0x2e2c84) {
      console.log(_0x2e2c84);
    }
  }
  async flmf_signInInit(_0x429978 = {}) {
    try {
      let _0x44120f = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x1c900c
        } = await this.request(_0x44120f),
        _0x1d492e = _0x64d73a.get(_0x1c900c, "resultCode", -1);
      if (_0x1d492e == "0000") {
        this.log("福利魔方今天" + (_0x1c900c?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x1c900c?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x1c900c?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x4a76c8 = _0x1c900c?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x1d492e + "]: " + _0x4a76c8);
      }
    } catch (_0x5bb2cc) {
      console.log(_0x5bb2cc);
    }
  }
  async flmf_signIn(_0x12aa95 = {}) {
    try {
      let _0xe5ecbf = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x467af5
        } = await this.request(_0xe5ecbf),
        _0x563b4c = _0x64d73a.get(_0x467af5, "resultCode", -1);
      if (_0x563b4c == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x8a68ab = _0x467af5?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x563b4c + "]: " + _0x8a68ab);
      }
    } catch (_0x5ab54f) {
      console.log(_0x5ab54f);
    }
  }
  async flmf_taskList(_0x4d447e = {}) {
    try {
      let _0x13739b = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x436acc
        } = await this.request(_0x13739b),
        _0x1efdb9 = _0x64d73a.get(_0x436acc, "resultCode", -1);
      if (_0x1efdb9 == "0000") {
        for (let _0xafdc74 of _0x436acc?.["data"]?.["taskInfoList"]) {
          for (let _0x184625 of _0xafdc74.taskInfoList.filter(_0x352112 => !_0x352112.done)) {
            for (let _0x5b2693 = _0x184625.hascount; _0x5b2693 < _0x184625.count; _0x5b2693++) {
              await this.flmf_gogLance(_0x184625.id);
            }
          }
        }
      } else {
        let _0x24d84f = _0x436acc?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x1efdb9 + "]: " + _0x24d84f);
      }
    } catch (_0x1a68e4) {
      console.log(_0x1a68e4);
    }
  }
  async flmf_scanTask() {
    for (let _0x25b5ea of _0x132d16) {
      await this.flmf_gogLance(_0x25b5ea);
    }
  }
  async flmf_gogLance(_0x3920c0, _0x13415e = {}) {
    try {
      let _0x311459 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x3920c0,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x4a46af
        } = await this.request(_0x311459);
      await _0x64d73a.wait_gap_interval(this.t_flmf_task, _0xce3893);
      let _0x59f218 = _0x64d73a.get(_0x4a46af, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x59f218 == "0000") {
        this.log("完成任务[" + _0x3920c0 + "]成功");
      } else {
        let _0x2df1ec = _0x4a46af?.["resultMsg"] || "";
        this.log("完成任务[" + _0x3920c0 + "]失败[" + _0x59f218 + "]: " + _0x2df1ec);
      }
    } catch (_0x2e5186) {
      console.log(_0x2e5186);
    }
  }
  async woread_api(_0x442a85) {
    let _0x250aae = await this.request(_0x64d73a.copy(_0x442a85)),
      _0x397d7c = _0x250aae?.["result"]?.["message"] || "";
    _0x397d7c?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x250aae = await this.request(_0x64d73a.copy(_0x442a85)));
    return _0x250aae;
  }
  async woread_auth(_0x472cfd = {}) {
    let _0x7fe843 = false;
    try {
      let _0x19cd39 = _0x64d73a.time("yyyyMMddhhmmss");
      const _0x546d7c = {
        timestamp: _0x19cd39
      };
      let _0x36e426 = this.encode_woread(_0x546d7c),
        _0x2be6fd = Date.now().toString(),
        _0x80a441 = _0x2241d5.MD5(_0x1346f2 + _0x3c3419 + _0x2be6fd).toString();
      const _0x1e1bf4 = {
        sign: _0x36e426
      };
      const _0x1b87ef = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x1346f2 + "/" + _0x2be6fd + "/" + _0x80a441,
        json: _0x1e1bf4
      };
      let {
          result: _0x563ea2
        } = await this.request(_0x1b87ef),
        _0x4b5a19 = _0x64d73a.get(_0x563ea2, "code", -1);
      if (_0x4b5a19 == "0000") {
        _0x7fe843 = true;
        this.woread_accesstoken = _0x563ea2?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x4c6cdd = _0x563ea2?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x4b5a19 + "]: " + _0x4c6cdd);
      }
    } catch (_0x1e9217) {
      console.log(_0x1e9217);
    } finally {
      return _0x7fe843;
    }
  }
  async woread_login(_0x109f01 = {}) {
    let _0x5c6a2f = false;
    try {
      let _0x1ab66b = {
          phone: this.mobile,
          timestamp: _0x64d73a.time("yyyyMMddhhmmss")
        },
        _0x409f27 = this.encode_woread(_0x1ab66b);
      const _0x240fb1 = {
        sign: _0x409f27
      };
      const _0x4c1557 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x240fb1
      };
      let {
          result: _0x5b8b8b
        } = await this.request(_0x4c1557),
        _0x12d008 = _0x64d73a.get(_0x5b8b8b, "code", -1);
      if (_0x12d008 == "0000") {
        _0x5c6a2f = true;
        let {
          userid: _0x2071b5,
          userindex: _0x407192,
          token: _0x2fdce2,
          verifycode: _0x504a08
        } = _0x5b8b8b?.["data"];
        this.woread_token = _0x2fdce2;
        this.woread_verifycode = _0x504a08;
        const _0x219796 = {
          woread_userid: _0x2071b5,
          woread_userindex: _0x407192,
          woread_token: _0x2fdce2,
          woread_verifycode: _0x504a08
        };
        Object.assign(this, _0x219796);
      } else {
        let _0x60d22f = _0x5b8b8b?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x12d008 + "]: " + _0x60d22f);
      }
    } catch (_0x5746e4) {
      console.log(_0x5746e4);
    } finally {
      return _0x5c6a2f;
    }
  }
  async woread_getSeeVideoAddNumber(_0x3da425 = {}) {
    try {
      let _0x25120b = {
          activityIndex: _0x5627f0.read,
          ...this.get_woread_param()
        },
        _0xd177d6 = this.encode_woread(_0x25120b);
      const _0x4ba1b9 = {
        sign: _0xd177d6
      };
      const _0x3be2b0 = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x4ba1b9
      };
      let {
          result: _0x46f8b5
        } = await this.woread_api(_0x3be2b0),
        _0x255e3c = _0x64d73a.get(_0x46f8b5, "code", -1);
      if (_0x255e3c == "0000") {
        _0x46f8b5?.["data"] == -1 && (await this.woread_addUserSeeVideo());
      } else {
        let _0x4e82ad = _0x46f8b5?.["message"] || "";
        this.log("阅读专区查询抽奖视频失败[" + _0x255e3c + "]: " + _0x4e82ad);
      }
    } catch (_0x53bf6d) {
      console.log(_0x53bf6d);
    }
  }
  async woread_addUserSeeVideo(_0x520851 = {}) {
    try {
      let _0x11e3b9 = _0x520851.num || 5,
        _0x5e3571 = {
          activityIndex: _0x5627f0.read,
          num: _0x11e3b9,
          ...this.get_woread_param()
        },
        _0x3e4fbc = this.encode_woread(_0x5e3571);
      const _0xbf845a = {
        sign: _0x3e4fbc
      };
      const _0x2db739 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0xbf845a
      };
      let {
          result: _0x45eaac
        } = await this.woread_api(_0x2db739),
        _0x5011b6 = _0x64d73a.get(_0x45eaac, "code", -1);
      if (_0x5011b6 == "0000") {
        this.log("阅读专区看视频增加抽奖次数成功");
      } else {
        let _0x2380f7 = _0x45eaac?.["message"] || "";
        this.log("阅读专区看视频增加抽奖次数失败[" + _0x5011b6 + "]: " + _0x2380f7);
      }
    } catch (_0x49655a) {
      console.log(_0x49655a);
    }
  }
  async woread_getActivityNumber(_0x2da8a6 = {}) {
    try {
      let _0x5ec517 = {
          activeIndex: _0x5627f0.read,
          ...this.get_woread_param()
        },
        _0x3778a6 = this.encode_woread(_0x5ec517);
      const _0x219cd3 = {
        sign: _0x3778a6
      };
      const _0x1d56d6 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x219cd3
      };
      let {
          result: _0x554f95
        } = await this.woread_api(_0x1d56d6),
        _0x5b894d = _0x64d73a.get(_0x554f95, "code", -1);
      if (_0x5b894d == "0000") {
        let _0x22f332 = _0x554f95?.["data"] || 0;
        this.log("阅读专区可以抽奖" + _0x22f332 + "次");
        while (_0x22f332-- > 0) {
          await this.woread_doDraw();
        }
      } else {
        let _0x53ab01 = _0x554f95?.["message"] || "";
        this.log("阅读专区查询抽奖次数失败[" + _0x5b894d + "]: " + _0x53ab01);
      }
    } catch (_0x2bf6ce) {
      console.log(_0x2bf6ce);
    }
  }
  async woread_doDraw(_0x2a59b4 = {}) {
    try {
      let _0x1711ce = {
          activeindex: _0x5627f0.read,
          ...this.get_woread_param()
        },
        _0x66079a = this.encode_woread(_0x1711ce);
      const _0x5e6b67 = {
        sign: _0x66079a
      };
      const _0x1fb0ed = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x5e6b67
      };
      await _0x64d73a.wait_gap_interval(this.t_woread_draw, _0x2befd9);
      let {
        result: _0x3e43f8
      } = await this.woread_api(_0x1fb0ed);
      this.t_woread_draw = Date.now();
      let _0x2e6e39 = _0x64d73a.get(_0x3e43f8, "code", -1);
      if (_0x2e6e39 == "0000") {
        const _0x51167e = {
          notify: true
        };
        this.log("阅读专区抽奖: " + (_0x3e43f8?.["data"]?.["prizedesc"] || "空气"), _0x51167e);
      } else {
        let _0x46deba = _0x3e43f8?.["message"] || "";
        this.log("阅读专区抽奖失败[" + _0x2e6e39 + "]: " + _0x46deba);
      }
    } catch (_0x54f582) {
      console.log(_0x54f582);
    }
  }
  async woread_queryTicketAccount(_0x1343d6 = {}) {
    try {
      let _0x3ebf03 = this.get_woread_param(),
        _0x36df3e = this.encode_woread(_0x3ebf03);
      const _0x31ef4b = {
        sign: _0x36df3e
      };
      const _0x8ca252 = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x31ef4b
      };
      let {
          result: _0x4df285
        } = await this.woread_api(_0x8ca252),
        _0x353883 = _0x64d73a.get(_0x4df285, "code", -1);
      if (_0x353883 == "0000") {
        let _0x48eac7 = (_0x4df285?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x427275 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x48eac7, _0x427275);
      } else {
        let _0x599866 = _0x4df285?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x353883 + "]: " + _0x599866);
      }
    } catch (_0x45527c) {
      console.log(_0x45527c);
    }
  }
  async woread_addReadTime(_0xa39a73 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0xa39a73,
        _0x3ab088 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0xb4cde1 = this.encode_woread(_0x3ab088);
      const _0x168de1 = {
        sign: _0xb4cde1
      };
      const _0xe0e18c = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x168de1
      };
      let {
          result: _0x25b2c7
        } = await this.request(_0xe0e18c),
        _0x356fae = _0x64d73a.get(_0x25b2c7, "code", -1);
      if (_0x356fae == "0000") {
        this.log("刷新读小说时间: " + _0x25b2c7?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x25b2c7?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x1a5c57 = _0x25b2c7?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x356fae + "]: " + _0x1a5c57);
      }
    } catch (_0x11a2ee) {
      console.log(_0x11a2ee);
    }
  }
  async rabblit_queryActivityData(_0x23a42a = {}) {
    try {
      let _0x573366 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x49fb84 = this.encode_woread(_0x573366);
      const _0xf8ad96 = {
        sign: _0x49fb84
      };
      const _0x5b5b4d = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0xf8ad96
      };
      let {
          result: _0x2e1187
        } = await this.woread_api(_0x5b5b4d),
        _0x14f978 = _0x64d73a.get(_0x2e1187, "code", -1);
      if (_0x14f978 == "0000") {
        let {
          totalcharpternums: _0x50e4dc,
          totalreadnums: _0x520905,
          status: _0x37e7df,
          activitystatus: _0x5a03d7
        } = _0x2e1187?.["data"];
        if (_0x5a03d7 == 1) {
          this.need_read_rabbit = false;
          const _0x5c4011 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x5c4011);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x520905 + "/" + _0x50e4dc + "分钟");
        if (_0x37e7df == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x520905 >= _0x50e4dc) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x2b387f = _0x2e1187?.["message"] || "";
        _0x2b387f?.["includes"]("未参加") && !_0x23a42a.join_retry && (await this.rabblit_joinRuning()) ? (_0x23a42a.join_retry = true, await this.rabblit_queryActivityData(_0x23a42a)) : this.log("龟兔赛跑查询状态失败[" + _0x14f978 + "]: " + _0x2b387f);
      }
    } catch (_0x3c5b1c) {
      console.log(_0x3c5b1c);
    }
  }
  async rabblit_joinRuning(_0x2b77e5 = {}) {
    let _0x4b4bde = false;
    try {
      let _0x145123 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x6a07 = this.encode_woread(_0x145123);
      const _0x45ce5e = {
        sign: _0x6a07
      };
      const _0x3fb881 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x45ce5e
      };
      let {
          result: _0x4523df
        } = await this.woread_api(_0x3fb881),
        _0x41c734 = _0x64d73a.get(_0x4523df, "code", -1);
      if (_0x41c734 == "0000") {
        _0x4b4bde = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x4fa727 = _0x4523df?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x41c734 + "]: " + _0x4fa727);
      }
    } catch (_0x1c1911) {
      console.log(_0x1c1911);
    } finally {
      return _0x4b4bde;
    }
  }
  async rabblit_wakeRabbit(_0x35982c = {}) {
    try {
      let _0x16fc83 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x181a7d = this.encode_woread(_0x16fc83);
      const _0x48f5b2 = {
        sign: _0x181a7d
      };
      const _0xa181a = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x48f5b2
      };
      await _0x64d73a.wait_gap_interval(this.t_woread_draw, _0x2befd9);
      let {
        result: _0x1e969e
      } = await this.woread_api(_0xa181a);
      this.t_woread_draw = Date.now();
      let _0x433656 = _0x64d73a.get(_0x1e969e, "code", -1);
      if (_0x433656 == "0000") {
        const _0x423a15 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x1e969e?.["data"]?.["prizedesc"] || "空气"), _0x423a15);
      } else {
        let _0x38acc0 = _0x1e969e?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x433656 + "]: " + _0x38acc0);
      }
    } catch (_0x1ae2b4) {
      console.log(_0x1ae2b4);
    }
  }
  async rabblit_finishActivity(_0x59f112 = {}) {
    try {
      let _0x450bd7 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x26e1bf = this.encode_woread(_0x450bd7);
      const _0x5e87e8 = {
        sign: _0x26e1bf
      };
      const _0x375b39 = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x5e87e8
      };
      await _0x64d73a.wait_gap_interval(this.t_woread_draw, _0x2befd9);
      let {
        result: _0x3b999d
      } = await this.woread_api(_0x375b39);
      this.t_woread_draw = Date.now();
      let _0xc0f202 = _0x64d73a.get(_0x3b999d, "code", -1);
      if (_0xc0f202 == "0000") {
        this.need_read_rabbit = false;
        const _0x5430ee = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x3b999d?.["data"]?.["prizedesc"] || "空气"), _0x5430ee);
      } else {
        let _0x46bb67 = _0x3b999d?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0xc0f202 + "]: " + _0x46bb67);
      }
    } catch (_0x54e9f3) {
      console.log(_0x54e9f3);
    }
  }
  async moonbox_queryCurTaskStatus(_0x1a1ab3 = {}) {
    try {
      let _0x12f9ab = {
          activeIndex: _0x5627f0.moonbox,
          ...this.get_woread_param()
        },
        _0x2100cf = this.encode_woread(_0x12f9ab);
      const _0x121d8d = {
        sign: _0x2100cf
      };
      const _0x27eaee = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x121d8d
      };
      let {
          result: _0x3650dc
        } = await this.woread_api(_0x27eaee),
        _0x46af58 = _0x64d73a.get(_0x3650dc, "code", -1);
      if (_0x46af58 == "0000") {
        for (let _0x116074 of _0x3650dc?.["data"] || []) {
          let {
            taskName: _0xaf2195,
            currentValue: _0xeb9b3b,
            taskValue: _0x2e0f66
          } = _0x116074?.["taskDetail"];
          switch (_0x116074.taskStatus) {
            case 0:
              this.need_read_moonbox = true;
              this.log("阅光宝盒[" + _0xaf2195 + "]进度: " + parseInt(_0xeb9b3b) + "/" + _0x2e0f66 + "分钟");
              break;
            case 2:
              await this.moonbox_completeActiveTask(_0x116074);
            case 1:
              this.need_read_moonbox = false;
              const _0x5f27b8 = {
                notify: true
              };
              this.log("阅光宝盒任务[" + _0xaf2195 + "]已完成", _0x5f27b8);
              break;
          }
        }
      } else {
        let _0x4daf5f = _0x3650dc?.["message"] || "";
        _0x4daf5f?.["includes"]("未领取") && !_0x1a1ab3.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x1a1ab3.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x1a1ab3)) : this.log("阅光宝盒查询任务状态失败[" + _0x46af58 + "]: " + _0x4daf5f);
      }
    } catch (_0x5e3704) {
      console.log(_0x5e3704);
    }
  }
  async moonbox_completeActiveTask(_0x59b68e, _0x1b0dee = {}) {
    try {
      let _0x3d0d8e = {
          taskId: _0x59b68e.id,
          ...this.get_woread_param()
        },
        _0x227c58 = this.encode_woread(_0x3d0d8e);
      const _0x30b2c8 = {
        sign: _0x227c58
      };
      const _0x2a65d8 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x30b2c8
      };
      let {
          result: _0x15dab3
        } = await this.woread_api(_0x2a65d8),
        _0x463b0d = _0x64d73a.get(_0x15dab3, "code", -1);
      if (_0x463b0d == "0000") {
        const _0x15bc58 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x15dab3?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x15dab3?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x15bc58);
      } else {
        let _0x3dcc35 = _0x15dab3?.["message"] || "";
        this.log("阅光宝盒[" + _0x59b68e?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x463b0d + "]: " + _0x3dcc35);
      }
    } catch (_0x21ed96) {
      console.log(_0x21ed96);
    }
  }
  async moonbox_queryActiveTaskList(_0x23f61e = {}) {
    try {
      let _0x4b7750 = {
          activeIndex: _0x5627f0.moonbox,
          ...this.get_woread_param()
        },
        _0x2c31c2 = this.encode_woread(_0x4b7750);
      const _0x378a88 = {
        sign: _0x2c31c2
      };
      const _0x5cd737 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x378a88
      };
      let {
          result: _0x20e188
        } = await this.woread_api(_0x5cd737),
        _0x35cb03 = _0x64d73a.get(_0x20e188, "code", -1);
      if (_0x35cb03 == "0000") {
        let _0xde3591 = _0x20e188?.["data"]?.["sort"](function (_0xbfc68b, _0x2223af) {
            let _0x56173d = parseInt(_0x2223af.taskDetail.taskValue),
              _0x24415c = parseInt(_0xbfc68b.taskDetail.taskValue);
            return _0x56173d - _0x24415c;
          }),
          _0xa9dfb7 = _0xde3591.filter(_0x486a9b => _0x486a9b.maxNum - _0x486a9b.receiveNum > 0 && _0x486a9b.taskDetail.materialGroup.groupName.includes("红包"));
        _0xa9dfb7?.["length"] ? await this.moonbox_receiveActiveTask(_0xa9dfb7) : (this.log("没有可领取的阅光宝盒红包任务了"), this.need_read_moonbox = false);
      } else {
        let _0x306d9a = _0x20e188?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x35cb03 + "]: " + _0x306d9a);
      }
    } catch (_0x3d30ba) {
      console.log(_0x3d30ba);
    }
  }
  async moonbox_receiveActiveTask(_0x52b3f4, _0x5bed1e = 0, _0x23c97a = {}) {
    try {
      let _0x2d3345 = {
          activeId: _0x5627f0.moonbox,
          taskId: _0x52b3f4[_0x5bed1e].secondTaskId,
          ...this.get_woread_param()
        },
        _0x5b8265 = this.encode_woread(_0x2d3345);
      const _0x822fca = {
        sign: _0x5b8265
      };
      const _0x27add5 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x822fca
      };
      let {
          result: _0xba2bf6
        } = await this.woread_api(_0x27add5),
        _0x58449d = _0x64d73a.get(_0xba2bf6, "code", -1);
      if (_0x58449d == "0000") {
        this.need_read_moonbox = true;
        this.log("领取阅光宝盒任务[" + _0x52b3f4?.[_0x5bed1e]?.["taskDetail"]?.["taskName"] + "]成功");
      } else {
        let _0x5ee172 = _0xba2bf6?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x52b3f4?.[_0x5bed1e]?.["taskDetail"]?.["taskName"] + "]失败[" + _0x58449d + "]: " + _0x5ee172);
        _0x5ee172?.["includes"]("今天无法完成") && _0x52b3f4?.["length"] > _0x5bed1e + 1 && (await this.moonbox_receiveActiveTask(_0x52b3f4, _0x5bed1e + 1, _0x23c97a));
      }
    } catch (_0x1bedb6) {
      console.log(_0x1bedb6);
    }
  }
  async moonbox_queryReadStatus(_0x123338 = {}) {
    try {
      let _0x34bc7b = {
          activeIndex: _0x5627f0.moonbox,
          ...this.get_woread_param()
        },
        _0x257f23 = this.encode_woread(_0x34bc7b);
      const _0x37dc43 = {
        sign: _0x257f23
      };
      const _0x4eaf9e = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x37dc43
      };
      let {
          result: _0x432c7f
        } = await this.woread_api(_0x4eaf9e),
        _0x58e6f8 = _0x64d73a.get(_0x432c7f, "code", -1);
      if (_0x58e6f8 == "0000") {
        switch (_0x432c7f?.["data"]) {
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x432c7f?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x1b7438 = _0x432c7f?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x58e6f8 + "]: " + _0x1b7438);
      }
    } catch (_0x5d08fc) {
      console.log(_0x5d08fc);
    }
  }
  async moonbox_drawReadActivePrize(_0x4ef985 = {}) {
    try {
      let _0x4838b8 = {
          activeIndex: _0x5627f0.moonbox,
          ...this.get_woread_param()
        },
        _0x114cdc = this.encode_woread(_0x4838b8);
      const _0x2bf973 = {
        sign: _0x114cdc
      };
      const _0x84553 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x2bf973
      };
      let {
          result: _0x47bd4f
        } = await this.woread_api(_0x84553),
        _0x1ffee9 = _0x64d73a.get(_0x47bd4f, "code", -1);
      if (_0x1ffee9 == "0000") {
        const _0x2abab5 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x47bd4f?.["data"]?.["prizedesc"] || JSON.stringify(_0x47bd4f)), _0x2abab5);
      } else {
        let _0x7e3498 = _0x47bd4f?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x1ffee9 + "]: " + _0x7e3498);
      }
    } catch (_0x510e72) {
      console.log(_0x510e72);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x35fd45 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x3c4931
      } = await this.openPlatLineNew(_0x35fd45);
    if (!_0x3c4931) {
      return;
    }
    await this.game_login(_0x3c4931);
  }
  async ttlxj_task() {
    let _0x12d382 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x21b8b5,
        type: _0x593348,
        loc: _0x367c56
      } = await this.openPlatLineNew(_0x12d382);
    if (!_0x21b8b5) {
      return;
    }
    await this.ttlxj_authorize(_0x21b8b5, _0x593348, _0x367c56);
  }
  async epay_28_task() {
    let _0x4bf614 = new Date().getDate();
    _0x4bf614 >= 26 && _0x4bf614 <= 28 && (await this.epay_28_authCheck());
  }
  async draw_28_task() {
    let _0x45b50f = new Date().getDate();
    _0x45b50f == 28 && (await this.draw_28_queryChance());
  }
  async flmf_task() {
    if (this.city.filter(_0x1886aa => _0x1886aa.proCode == "091").length == 0) {
      return;
    }
    let _0x2572b5 = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x5a4823
      } = await this.openPlatLineNew(_0x2572b5);
    if (!_0x5a4823) {
      return;
    }
    await this.flmf_login(_0x5a4823);
  }
  async woread_task() {
    await this.woread_getSeeVideoAddNumber();
    await this.woread_getActivityNumber();
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    while (this.need_read_rabbit || this.need_read_moonbox) {
      let _0x47fb8d = 2;
      const _0x3ea989 = {
        readTime: _0x47fb8d
      };
      await this.woread_addReadTime(_0x3ea989);
      if (this.need_read_moonbox) {
        await this.moonbox_queryCurTaskStatus();
      }
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      (this.need_read_rabbit || this.need_read_moonbox) && (this.log("等待2分钟..."), await _0x64d73a.wait(125000));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    await this.moonbox_queryCurTaskStatus();
    await this.rabblit_queryActivityData();
  }
  async userTask() {
    _0x64d73a.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.sign_task();
    await this.draw_28_task();
    await this.epay_28_task();
    await this.flmf_task();
    await this.woread_task();
  }
}
!(async () => {
  if (!(await _0x530783())) {
    return;
  }
  _0x64d73a.read_env(_0x5d22be);
  for (let _0x34ed18 of _0x64d73a.userList) {
    await _0x34ed18.userLoginTask();
  }
  for (let _0x23bf89 of _0x64d73a.userList.filter(_0x535153 => _0x535153.valid)) {
    await _0x23bf89.userTask();
  }
  let _0x34f690 = _0x64d73a.userList.filter(_0x2dd57c => _0x2dd57c.valid && _0x2dd57c.woread_verifycode && (_0x2dd57c.need_read_rabbit || _0x2dd57c.need_read_moonbox));
  if (_0x34f690.length) {
    let _0x139e0e = [];
    _0x64d73a.log("\n============ 开始刷阅读时长 ============");
    for (let _0x5a578d of _0x34f690) {
      _0x139e0e.push(_0x5a578d.woread_reading_task());
    }
    await Promise.all(_0x139e0e);
  }
})().catch(_0x3fdfbd => _0x64d73a.log(_0x3fdfbd)).finally(() => _0x64d73a.exitNow());
async function _0x530783(_0x317766 = 0) {
  let _0x172b01 = false;
  try {
    const _0x36a294 = {
      fn: "auth",
      method: "get",
      url: _0x3084fe,
      timeout: 20000
    };
    let {
      statusCode: _0x3282d1,
      result: _0x429d54
    } = await _0x4d6255.request(_0x36a294);
    if (_0x3282d1 != 200) {
      _0x317766++ < _0x3af1bf && (_0x172b01 = await _0x530783(_0x317766));
      return _0x172b01;
    }
    if (_0x429d54?.["code"] == 0) {
      _0x429d54 = JSON.parse(_0x429d54.data.file.data);
      if (_0x429d54?.["commonNotify"] && _0x429d54.commonNotify.length > 0) {
        const _0x3a5e3b = {
          notify: true
        };
        _0x64d73a.log(_0x429d54.commonNotify.join("\n") + "\n", _0x3a5e3b);
      }
      _0x429d54?.["commonMsg"] && _0x429d54.commonMsg.length > 0 && _0x64d73a.log(_0x429d54.commonMsg.join("\n") + "\n");
      if (_0x429d54[_0x228377]) {
        let _0x28760b = _0x429d54[_0x228377];
        _0x28760b.status == 0 ? _0x2a1201 >= _0x28760b.version ? (_0x172b01 = true, _0x64d73a.log(_0x28760b.msg[_0x28760b.status]), _0x64d73a.log(_0x28760b.updateMsg), _0x64d73a.log("现在运行的脚本版本是：" + _0x2a1201 + "，最新脚本版本：" + _0x28760b.latestVersion)) : _0x64d73a.log(_0x28760b.versionMsg) : _0x64d73a.log(_0x28760b.msg[_0x28760b.status]);
      } else {
        _0x64d73a.log(_0x429d54.errorMsg);
      }
    } else {
      _0x317766++ < _0x3af1bf && (_0x172b01 = await _0x530783(_0x317766));
    }
  } catch (_0xd32941) {
    _0x64d73a.log(_0xd32941);
  } finally {
    return _0x172b01;
  }
}
function _0x10c36e(_0x33a7a6) {
  return new class {
    constructor(_0x10c30d) {
      this.name = _0x10c30d;
      this.startTime = Date.now();
      const _0x1cd2e5 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x1cd2e5);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x4e0d25, _0x52697c = {}) {
      const _0x27a14b = {
        console: true
      };
      Object.assign(_0x27a14b, _0x52697c);
      if (_0x27a14b.time) {
        let _0x274def = _0x27a14b.fmt || "hh:mm:ss";
        _0x4e0d25 = "[" + this.time(_0x274def) + "]" + _0x4e0d25;
      }
      if (_0x27a14b.notify) {
        this.notifyStr.push(_0x4e0d25);
      }
      if (_0x27a14b.console) {
        console.log(_0x4e0d25);
      }
    }
    get(_0x172c5e, _0x13f67f, _0x425232 = "") {
      let _0x4f101e = _0x425232;
      _0x172c5e?.["hasOwnProperty"](_0x13f67f) && (_0x4f101e = _0x172c5e[_0x13f67f]);
      return _0x4f101e;
    }
    pop(_0x4b92f5, _0x460644, _0x395832 = "") {
      let _0x5e10b1 = _0x395832;
      _0x4b92f5?.["hasOwnProperty"](_0x460644) && (_0x5e10b1 = _0x4b92f5[_0x460644], delete _0x4b92f5[_0x460644]);
      return _0x5e10b1;
    }
    copy(_0x317092) {
      return Object.assign({}, _0x317092);
    }
    read_env(_0x2c9ad5) {
      let _0x4be701 = _0x30b189.map(_0x3895fd => process.env[_0x3895fd]);
      for (let _0x32091d of _0x4be701.filter(_0x2dcf9a => !!_0x2dcf9a)) {
        let _0x176476 = _0x4a4c8d.filter(_0x5d4a6a => _0x32091d.includes(_0x5d4a6a)),
          _0x227236 = _0x176476.length > 0 ? _0x176476[0] : _0x4a4c8d[0];
        for (let _0x3cb528 of _0x32091d.split(_0x227236).filter(_0x154c84 => !!_0x154c84)) {
          this.userList.push(new _0x2c9ad5(_0x3cb528));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x3b6273 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x30b189.map(_0x43ff54 => "[" + _0x43ff54 + "]").join("或"), _0x3b6273);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5c9e6c, _0x1412c2, _0x266d89 = {}) {
      while (_0x1412c2.idx < _0x64d73a.userList.length) {
        let _0x304257 = _0x64d73a.userList[_0x1412c2.idx++];
        if (!_0x304257.valid) {
          continue;
        }
        await _0x304257[_0x5c9e6c](_0x266d89);
      }
    }
    async threadTask(_0x2a09a4, _0x450471) {
      let _0x3af902 = [];
      const _0x170c54 = {
        idx: 0
      };
      while (_0x450471--) {
        _0x3af902.push(this.threads(_0x2a09a4, _0x170c54));
      }
      await Promise.all(_0x3af902);
    }
    time(_0x500dff, _0x3c8c47 = null) {
      let _0x5120df = _0x3c8c47 ? new Date(_0x3c8c47) : new Date(),
        _0x5a78d0 = {
          "M+": _0x5120df.getMonth() + 1,
          "d+": _0x5120df.getDate(),
          "h+": _0x5120df.getHours(),
          "m+": _0x5120df.getMinutes(),
          "s+": _0x5120df.getSeconds(),
          "q+": Math.floor((_0x5120df.getMonth() + 3) / 3),
          S: this.padStr(_0x5120df.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x500dff) && (_0x500dff = _0x500dff.replace(RegExp.$1, (_0x5120df.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3bcc85 in _0x5a78d0) new RegExp("(" + _0x3bcc85 + ")").test(_0x500dff) && (_0x500dff = _0x500dff.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5a78d0[_0x3bcc85] : ("00" + _0x5a78d0[_0x3bcc85]).substr(("" + _0x5a78d0[_0x3bcc85]).length)));
      return _0x500dff;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x509bf9 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x509bf9.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x440405, _0x68d7d0, _0x3730c4 = {}) {
      let _0x475ebd = _0x3730c4.padding || "0",
        _0x67ff07 = _0x3730c4.mode || "l",
        _0x52e4cc = String(_0x440405),
        _0x413ff5 = _0x68d7d0 > _0x52e4cc.length ? _0x68d7d0 - _0x52e4cc.length : 0,
        _0x133bb0 = "";
      for (let _0x2ea2c2 = 0; _0x2ea2c2 < _0x413ff5; _0x2ea2c2++) {
        _0x133bb0 += _0x475ebd;
      }
      _0x67ff07 == "r" ? _0x52e4cc = _0x52e4cc + _0x133bb0 : _0x52e4cc = _0x133bb0 + _0x52e4cc;
      return _0x52e4cc;
    }
    json2str(_0x182ab0, _0x1aef86, _0x26b8e9 = false) {
      let _0x5172e7 = [];
      for (let _0x22c6bb of Object.keys(_0x182ab0).sort()) {
        let _0x9570f0 = _0x182ab0[_0x22c6bb];
        if (_0x9570f0 && _0x26b8e9) {
          _0x9570f0 = encodeURIComponent(_0x9570f0);
        }
        _0x5172e7.push(_0x22c6bb + "=" + _0x9570f0);
      }
      return _0x5172e7.join(_0x1aef86);
    }
    str2json(_0x361c62, _0x3f46b9 = false) {
      let _0x25c5bb = {};
      for (let _0x4721c4 of _0x361c62.split("&")) {
        if (!_0x4721c4) {
          continue;
        }
        let _0x171623 = _0x4721c4.indexOf("=");
        if (_0x171623 == -1) {
          continue;
        }
        let _0x290424 = _0x4721c4.substr(0, _0x171623),
          _0x327701 = _0x4721c4.substr(_0x171623 + 1);
        if (_0x3f46b9) {
          _0x327701 = decodeURIComponent(_0x327701);
        }
        _0x25c5bb[_0x290424] = _0x327701;
      }
      return _0x25c5bb;
    }
    randomPattern(_0x4828cc, _0x522c9f = "abcdef0123456789") {
      let _0x55bda3 = "";
      for (let _0x2fd23f of _0x4828cc) {
        if (_0x2fd23f == "x") {
          _0x55bda3 += _0x522c9f.charAt(Math.floor(Math.random() * _0x522c9f.length));
        } else {
          _0x2fd23f == "X" ? _0x55bda3 += _0x522c9f.charAt(Math.floor(Math.random() * _0x522c9f.length)).toUpperCase() : _0x55bda3 += _0x2fd23f;
        }
      }
      return _0x55bda3;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x155e8b, _0x1aa2a8 = "abcdef0123456789") {
      let _0x5508a0 = "";
      for (let _0x4d288d = 0; _0x4d288d < _0x155e8b; _0x4d288d++) {
        _0x5508a0 += _0x1aa2a8.charAt(Math.floor(Math.random() * _0x1aa2a8.length));
      }
      return _0x5508a0;
    }
    randomList(_0x482cfb) {
      let _0x198a8 = Math.floor(Math.random() * _0x482cfb.length);
      return _0x482cfb[_0x198a8];
    }
    wait(_0x4de7ed) {
      return new Promise(_0x5c4fbe => setTimeout(_0x5c4fbe, _0x4de7ed));
    }
    async exitNow() {
      await this.showmsg();
      let _0x46d6e2 = Date.now(),
        _0x4d4f4c = (_0x46d6e2 - this.startTime) / 1000;
      this.log("");
      const _0x262088 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4d4f4c + "秒", _0x262088);
      process.exit(0);
    }
    normalize_time(_0x3e15d1, _0x3f4a80 = {}) {
      let _0x59fe0c = _0x3f4a80.len || _0x3dc741;
      _0x3e15d1 = _0x3e15d1.toString();
      let _0x5becd7 = _0x3e15d1.length;
      while (_0x5becd7 < _0x59fe0c) {
        _0x3e15d1 += "0";
      }
      _0x5becd7 > _0x59fe0c && (_0x3e15d1 = _0x3e15d1.slice(0, 13));
      return parseInt(_0x3e15d1);
    }
    async wait_until(_0x3c0dff, _0x6d1d62 = {}) {
      let _0x1eefe1 = _0x6d1d62.logger || this,
        _0x3cb200 = _0x6d1d62.interval || _0x56fff8,
        _0x27656a = _0x6d1d62.limit || _0x281047,
        _0x4350c5 = _0x6d1d62.ahead || _0x2ab6a7;
      if (typeof _0x3c0dff == "string" && _0x3c0dff.includes(":")) {
        if (_0x3c0dff.includes("-")) {
          _0x3c0dff = new Date(_0x3c0dff).getTime();
        } else {
          let _0x47c42c = this.time("yyyy-MM-dd ");
          _0x3c0dff = new Date(_0x47c42c + _0x3c0dff).getTime();
        }
      }
      let _0x2be672 = this.normalize_time(_0x3c0dff) - _0x4350c5,
        _0x40a0df = this.time("hh:mm:ss.S", _0x2be672),
        _0x197eae = Date.now();
      _0x197eae > _0x2be672 && (_0x2be672 += 86400000);
      let _0x56fd18 = _0x2be672 - _0x197eae;
      if (_0x56fd18 > _0x27656a) {
        const _0x2ee30d = {
          time: true
        };
        _0x1eefe1.log("离目标时间[" + _0x40a0df + "]大于" + _0x27656a / 1000 + "秒,不等待", _0x2ee30d);
      } else {
        const _0x403d89 = {
          time: true
        };
        _0x1eefe1.log("离目标时间[" + _0x40a0df + "]还有" + _0x56fd18 / 1000 + "秒,开始等待", _0x403d89);
        while (_0x56fd18 > 0) {
          let _0x1df912 = Math.min(_0x56fd18, _0x3cb200);
          await this.wait(_0x1df912);
          _0x197eae = Date.now();
          _0x56fd18 = _0x2be672 - _0x197eae;
        }
        const _0x3ea1ad = {
          time: true
        };
        _0x1eefe1.log("已完成等待", _0x3ea1ad);
      }
    }
    async wait_gap_interval(_0x2f6000, _0x4fe64c) {
      let _0x55b0b5 = Date.now() - _0x2f6000;
      _0x55b0b5 < _0x4fe64c && (await this.wait(_0x4fe64c - _0x55b0b5));
    }
  }(_0x33a7a6);
}