<!-- 注册页面 -->
<template>
  <div class="register-box">
    <div class="register f600 f24">注 册</div>
    <countryCodeSelector />
    <div class="mt-4">
      <el-input v-model="phone" placeholder="请输入手机号/邮箱" class="input-with-select">
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 24vw !important">
            <el-option style="width: 50vw !important;" v-for="(item, index) in countryList" :key="index" :label="item.name +' ' + '+' +' ' + item.areaCode" :value="item.areaCode" />
          </el-select>
        </template>
      </el-input>
    </div>
    <div class="msgCode textCenter">
      <el-button>获取短信验证码</el-button>
    </div>
    <div class="agree c-a5 textCenter">完成注册即代表你同意<span>用户协议</span>和<span>隐私政策</span></div>
    <div class="login f16 f600 flex flex-yCenter flex-xCenter">已有账号 去登录<el-icon>
        <CaretRight />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const select = ref('')
const phone = ref('')

// 所有国家区域号
const countryList = ref(
  [
    { name: "中国", areaCode: "86" },
    { name: "中国香港", areaCode: "852" },
    { name: "中国澳門", areaCode: "853" },
    { name: "中国台湾", areaCode: "886" },
    { name: "日本", areaCode: "81" },
    { name: "韩国", areaCode: "82" },
    { name: "美国", areaCode: "1" },
    { name: "阿富汗", areaCode: "93" },
    { name: "阿尔巴尼亚", areaCode: "355" },
    { name: "阿尔及利亚", areaCode: "213" },
    { name: "萨摩亚", areaCode: "684" },
    { name: "安道尔共和国", areaCode: "376" },
    { name: "安哥拉", areaCode: "244" },
    { name: "安圭拉岛", areaCode: "1264" },
    { name: "南极洲", areaCode: "672" },
    { name: "安提瓜和巴布达", areaCode: "1268" },
    { name: "阿根廷", areaCode: "54" },
    { name: "亚美尼亚", areaCode: "374" },
    { name: "阿鲁巴", areaCode: "297" },
    { name: "澳大利亚", areaCode: "61" },
    { name: "奥地利", areaCode: "43" },
    { name: "阿塞拜疆", areaCode: "994" },
    { name: "巴哈马", areaCode: "1242" },
    { name: "巴林", areaCode: "973" },
    { name: "孟加拉国", areaCode: "880" },
    { name: "巴巴多斯", areaCode: "1246" },
    { name: "白俄罗斯", areaCode: "375" },
    { name: "比利时", areaCode: "32" },
    { name: "伯利兹城", areaCode: "501" },
    { name: "贝宁", areaCode: "229" },
    { name: "百慕大", areaCode: "1441" },
    { name: "不丹", areaCode: "975" },
    { name: "玻利维亚", areaCode: "591" },
    { name: "波斯尼亚和黑塞哥维那", areaCode: "387" },
    { name: "博茨瓦纳", areaCode: "267" },
    { name: "巴西", areaCode: "55" },
    { name: "英属印度洋领地", areaCode: "246" },
    { name: "文莱达鲁萨兰国", areaCode: "673" },
    { name: "保加利亚", areaCode: "359" },
    { name: "布基纳法索", areaCode: "226" },
    { name: "布隆迪", areaCode: "257" },
    { name: "柬埔寨", areaCode: "855" },
    { name: "喀麦隆", areaCode: "237" },
    { name: "佛得角", areaCode: "238" },
    { name: "开曼群岛", areaCode: "1345" },
    { name: "中非共和国", areaCode: "236" },
    { name: "乍得", areaCode: "235" },
    { name: "智利", areaCode: "56" },
    { name: "圣延岛", areaCode: "61" },
    { name: "科科斯群岛", areaCode: "61" },
    { name: "哥伦比亚", areaCode: "57" },
    { name: "科摩罗", areaCode: "269" },
    { name: "刚果", areaCode: "242" },
    { name: "刚果民主共和国", areaCode: "243" },
    { name: "库克群岛", areaCode: "682" },
    { name: "哥斯达黎加", areaCode: "506" },
    { name: "科特迪瓦", areaCode: "225" },
    { name: "克罗地亚", areaCode: "385" },
    { name: "古巴", areaCode: "53" },
    { name: "塞浦路斯", areaCode: "357" },
    { name: "捷克", areaCode: "420" },
    { name: "丹麦", areaCode: "45" },
    { name: "吉布提", areaCode: "253" },
    { name: "多米尼克国", areaCode: "1767" },
    { name: "多米尼加共和国", areaCode: "1849" },
    { name: "东帝汶", areaCode: "670" },
    { name: "厄瓜多尔", areaCode: "593" },
    { name: "埃及", areaCode: "20" },
    { name: "萨尔瓦多", areaCode: "503" },
    { name: "赤道几内亚", areaCode: "240" },
    { name: "爱沙尼亚", areaCode: "372" },
    { name: "埃塞俄比亚", areaCode: "251" },
    { name: "福克兰群岛", areaCode: "500" },
    { name: "法罗群岛", areaCode: "298" },
    { name: "斐济", areaCode: "679" },
    { name: "芬兰", areaCode: "358" },
    { name: "法国", areaCode: "33" },
    { name: "法国大都会", areaCode: "33" },
    { name: "法属圭亚那", areaCode: "594" },
    { name: "法属玻里尼西亚", areaCode: "689" },
    { name: "加蓬", areaCode: "241" },
    { name: "冈比亚", areaCode: "220" },
    { name: "格鲁吉亚", areaCode: "995" },
    { name: "德国", areaCode: "49" },
    { name: "加纳", areaCode: "233" },
    { name: "直布罗陀", areaCode: "350" },
    { name: "希腊", areaCode: "30" },
    { name: "格陵兰", areaCode: "45" },
    { name: "格林纳达", areaCode: "1473" },
    { name: "瓜德罗普岛", areaCode: "590" },
    { name: "关岛", areaCode: "1671" },
    { name: "危地马拉", areaCode: "502" },
    { name: "几内亚", areaCode: "224" },
    { name: "几内亚比绍", areaCode: "245" },
    { name: "圭亚那", areaCode: "592" },
    { name: "海地", areaCode: "509" },
    { name: "洪都拉斯", areaCode: "504" },
    { name: "匈牙利", areaCode: "36" },
    { name: "冰岛", areaCode: "354" },
    { name: "印度", areaCode: "91" },
    { name: "印度尼西亚", areaCode: "62" },
    { name: "伊朗", areaCode: "98" },
    { name: "伊拉克", areaCode: "964" },
    { name: "爱尔兰", areaCode: "353" },
    { name: "以色列", areaCode: "972" },
    { name: "意大利", areaCode: "39" },
    { name: "牙买加", areaCode: "1876" },
    { name: "约旦", areaCode: "962" },
    { name: "哈萨克", areaCode: "7" },
    { name: "肯尼亚", areaCode: "254" },
    { name: "科威特", areaCode: "965" },
    { name: "吉尔吉斯", areaCode: "996" },
    { name: "拉脱维亚", areaCode: "371" },
    { name: "黎巴嫩", areaCode: "961" },
    { name: "莱索托", areaCode: "266" },
    { name: "利比里亚", areaCode: "231" },
    { name: "利比亚", areaCode: "218" },
    { name: "列支敦士登", areaCode: "423" },
    { name: "立陶宛", areaCode: "370" },
    { name: "卢森堡", areaCode: "352" },
    { name: "马达加斯加", areaCode: "261" },
    { name: "马拉维", areaCode: "265" },
    { name: "马来西亚", areaCode: "60" },
    { name: "马尔代夫", areaCode: "960" },
    { name: "马里", areaCode: "223" },
    { name: "马尔他", areaCode: "356" },
    { name: "马提尼克岛", areaCode: "596" },
    { name: "毛里塔尼亚", areaCode: "222" },
    { name: "毛里求斯", areaCode: "230" },
    { name: "马约特", areaCode: "262" },
    { name: "墨西哥", areaCode: "52" },
    { name: "密克罗尼西亚", areaCode: "691" },
    { name: "摩尔多瓦", areaCode: "373" },
    { name: "摩纳哥", areaCode: "377" },
    { name: "外蒙古", areaCode: "976" },
    { name: "黑山共和国", areaCode: "382" },
    { name: "蒙特塞拉特", areaCode: "1664" },
    { name: "摩洛哥", areaCode: "212" },
    { name: "莫桑比克", areaCode: "258" },
    { name: "缅甸", areaCode: "95" },
    { name: "那米比亚", areaCode: "264" },
    { name: "瑙鲁", areaCode: "674" },
    { name: "尼泊尔", areaCode: "977" },
    { name: "荷兰", areaCode: "31" },
    { name: "荷兰安的列斯群岛", areaCode: "599" },
    { name: "新喀里多尼亚", areaCode: "687" },
    { name: "新西兰", areaCode: "64" },
    { name: "尼加拉瓜", areaCode: "505" },
    { name: "尼日尔", areaCode: "227" },
    { name: "尼日利亚", areaCode: "234" },
    { name: "诺福克岛", areaCode: "6723" },
    { name: "朝鲜", areaCode: "850" },
    { name: "北马里亚纳群岛", areaCode: "1670" },
    { name: "挪威", areaCode: "47" },
    { name: "阿曼", areaCode: "968" },
    { name: "巴基斯坦", areaCode: "92" },
    { name: "帛琉", areaCode: "680" },
    { name: "巴勒斯坦", areaCode: "970" },
    { name: "巴拿马", areaCode: "507" },
    { name: "巴布亚新几内亚", areaCode: "675" },
    { name: "巴拉圭", areaCode: "595" },
    { name: "秘鲁", areaCode: "51" },
    { name: "菲律宾共和国", areaCode: "63" },
    { name: "皮特凯恩岛", areaCode: "64" },
    { name: "波兰", areaCode: "48" },
    { name: "葡萄牙", areaCode: "351" },
    { name: "波多黎各", areaCode: "1787" },
    { name: "卡塔尔", areaCode: "974" },
    { name: "留尼汪岛", areaCode: "262" },
    { name: "罗马尼亚", areaCode: "40" },
    { name: "俄罗斯联邦", areaCode: "7" },
    { name: "卢旺达", areaCode: "250" },
    { name: "美属萨摩亚", areaCode: "685" },
    { name: "圣马力诺共和国", areaCode: "378" },
    { name: "沙特阿拉伯", areaCode: "966" },
    { name: "塞内加尔", areaCode: "221" },
    { name: "塞尔维亚共和国", areaCode: "381" },
    { name: "塞舌尔", areaCode: "248" },
    { name: "塞拉利昂", areaCode: "232" },
    { name: "新加坡", areaCode: "65" },
    { name: "斯洛伐克", areaCode: "421" },
    { name: "斯洛文尼亚", areaCode: "386" },
    { name: "索罗门群岛", areaCode: "677" },
    { name: "索马里", areaCode: "252" },
    { name: "南非", areaCode: "27" },
    { name: "西班牙", areaCode: "34" },
    { name: "斯里兰卡", areaCode: "94" },
    { name: "苏丹", areaCode: "249" },
    { name: "苏里南", areaCode: "597" },
    { name: "斯威士兰", areaCode: "268" },
    { name: "瑞典", areaCode: "46" },
    { name: "瑞士", areaCode: "41" },
    { name: "叙利亚", areaCode: "963" },
    { name: "塔吉克", areaCode: "992" },
    { name: "坦桑尼亚", areaCode: "255" },
    { name: "泰国", areaCode: "66" },
    { name: "多哥", areaCode: "228" },
    { name: "汤加", areaCode: "676" },
    { name: "特立尼达和多巴哥", areaCode: "1868" },
    { name: "突尼斯", areaCode: "216" },
    { name: "土耳其", areaCode: "90" },
    { name: "土库曼", areaCode: "993" },
    { name: "土克斯及开科斯群岛", areaCode: "1809" },
    { name: "乌干达", areaCode: "256" },
    { name: "乌克兰", areaCode: "380" },
    { name: "阿拉伯联合酋长国", areaCode: "971" },
    { name: "英国", areaCode: "44" },
    { name: "乌拉圭", areaCode: "598" },
    { name: "乌兹别克斯坦", areaCode: "998" },
    { name: "瓦努阿图", areaCode: "678" },
    { name: "梵蒂冈", areaCode: "39" },
    { name: "委内瑞拉", areaCode: "58" },
    { name: "越南", areaCode: "84" },
    { name: "维尔京群岛(英国)", areaCode: "1284" },
    { name: "维尔京群岛(美国)", areaCode: "1340" },
    { name: "西撒哈拉", areaCode: "685" },
    { name: "也门", areaCode: "967" },
    { name: "南斯拉夫", areaCode: "381" },
    { name: "赞比亚", areaCode: "260" },
    { name: "津巴布韦", areaCode: "263" },
    { name: "阿布哈兹", areaCode: "7" },
    { name: "南奥赛梯", areaCode: "7" },
    { name: "泽西岛", areaCode: "44" },
    { name: "老挝", areaCode: "856" },
    { name: "马其顿", areaCode: "389" },
    { name: "圣基茨和尼维斯", areaCode: "1869" },
    { name: "圣卢西亚岛", areaCode: "1758" },
    { name: "圣文森特和格林纳丁斯", areaCode: "1784" },
    { name: "圣多美和普林西比", areaCode: "239" },
    { name: "南苏丹共和国", areaCode: "211" }
  ],
)
</script>

<style scoped lang="scss">
.register-box {
  height: 100vh;
  background-color: #f1ece7;

  .register {
    padding-top: 15vh;
    color: #354e44;
    margin-left: 15vw;
    margin-bottom: 5vh
  }

  .msgCode {
    margin-bottom: 2vh;

    .el-button {
      width: 70vw;
      height: 6vh;
      background-color: #344e43;
      border: none;
      font-weight: 700;
      color: #fff;
    }
  }

  .agree {
    margin-right: 11vw;
    margin-bottom: 20vh;

    span {
      color: #354e44;
    }
  }

  .login {
    color: #354e44;
  }
}
</style>

<style scoped lang="scss">
.el-input-group {
  width: 70vw;
  margin-left: 15vw;
  margin-bottom: 2vh;
}

::v-deep .el-input-group__prepend,
::v-deep .el-input__inner {
  font-size: 12px !important;
  background-color: #e3dfda;
}

::v-deep .el-input__wrapper {
  height: 5vh;
  border: 0;
  background-color: #e3dfda;
}

::v-deep .el-input__inner {
  height: 5vh;
  background-color: #e3dfda
}
::v-deep .el-select-dropdown, .selectClass {
  width: 50vw !important;
  overflow: auto !important;
}
</style>