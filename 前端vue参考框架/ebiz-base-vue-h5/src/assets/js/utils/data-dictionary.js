// 数据字典
export default {
  //国家地区
  nativeplace: [
    {
      id: 1,
      text: '中国大陆'
    },
    {
      id: 2,
      text: '中国香港'
    },
    {
      id: 3,
      text: '中国澳门'
    },
    {
      id: 4,
      text: '中国台湾'
    },
    {
      id: 5,
      text: '英国'
    },
    {
      id: 6,
      text: '印度'
    },
    {
      id: 7,
      text: '意大利'
    },
    {
      id: 8,
      text: '以色列'
    },
    {
      id: 9,
      text: '新西兰'
    },
    {
      id: 10,
      text: '希腊'
    },
    {
      id: 11,
      text: '西班牙'
    },
    {
      id: 12,
      text: '威尔士'
    },
    {
      id: 13,
      text: '泰国'
    },
    {
      id: 14,
      text: '苏格兰'
    },
    {
      id: 15,
      text: '瑞士'
    },
    {
      id: 16,
      text: '瑞典'
    },
    {
      id: 17,
      text: '日本'
    },
    {
      id: 18,
      text: '葡萄牙'
    },
    {
      id: 19,
      text: '挪威'
    },
    {
      id: 20,
      text: '尼日利亚'
    },
    {
      id: 21,
      text: '美国'
    },
    {
      id: 22,
      text: '加拿大'
    },
    {
      id: 23,
      text: '荷兰'
    },
    {
      id: 24,
      text: '韩国'
    },
    {
      id: 25,
      text: '芬兰'
    },
    {
      id: 26,
      text: '法国'
    },
    {
      id: 27,
      text: '俄国'
    },
    {
      id: 28,
      text: '德国'
    },
    {
      id: 29,
      text: '波兰'
    },
    {
      id: 30,
      text: '巴西'
    },
    {
      id: 31,
      text: '澳大利亚'
    },
    {
      id: 32,
      text: '奥地利'
    },
    {
      id: 33,
      text: '爱尔兰'
    },
    {
      id: 34,
      text: '埃及'
    }
  ],
  //证件类型
  idType: [
    {
      id: 1,
      text: '身份证'
    },
    {
      id: 2,
      text: '户口本'
    },
    {
      id: 3,
      text: '出生证明'
    },
    {
      id: 4,
      text: '护照'
    },
    {
      id: 5,
      text: '港澳居民通行证'
    },
    {
      id: 6,
      text: '台湾居民通行证'
    },
    {
      id: 7,
      text: '其他'
    }
  ],
  //投保人证件类型
  insuredIdType: [
    {
      id: 1,
      text: '身份证'
    },
    {
      id: 2,
      text: '户口本',
      disabled: true
    },
    {
      id: 3,
      text: '出生证明',
      disabled: true
    },
    {
      id: 4,
      text: '护照'
    },
    {
      id: 5,
      text: '港澳居民通行证'
    },
    {
      id: 6,
      text: '台湾居民通行证'
    },
    {
      id: 7,
      text: '其他'
    }
  ],
  //出生证明
  birthType: [
    {
      id: 1,
      text: '身份证'
    },
    {
      id: 2,
      text: '户口本'
    },
    {
      id: 3,
      text: '出生证明',
      disabled: true
    },
    {
      id: 4,
      text: '护照'
    },
    {
      id: 5,
      text: '港澳居民通行证'
    },
    {
      id: 6,
      text: '台湾居民通行证'
    },
    {
      id: 7,
      text: '其他'
    }
  ],
  //投保人/被保人关系
  relationToAppnt: [
    {
      id: 1,
      text: '本人'
    },
    {
      id: 2,
      text: '配偶'
    },
    {
      id: 3,
      text: '父母'
    },
    {
      id: 4,
      text: '子女'
    },
    {
      id: 5,
      text: '其他'
    }
  ],
  //婚姻状况
  marriage: [
    {
      id: 1,
      text: '已婚'
    },
    {
      id: 2,
      text: '未婚'
    },
    {
      id: 3,
      text: '离婚'
    },
    {
      id: 4,
      text: '丧偶'
    }
  ],
  //文化程度
  degree: [
    {
      id: 1,
      text: '博士及以上'
    },
    {
      id: 2,
      text: '硕士'
    },
    {
      id: 3,
      text: '本科'
    },
    {
      id: 4,
      text: '大专'
    },
    {
      id: 5,
      text: '高中'
    },
    {
      id: 6,
      text: '初中'
    },
    {
      id: 7,
      text: '中专'
    },
    {
      id: 8,
      text: '小学'
    },
    {
      id: 9,
      text: '小学以下'
    }
  ],
  //居民身份 仅支持中国
  taxIdentity: [
    {
      id: 1,
      text: '仅为中国'
    }
  ],
  //交费期限
  payEndYear: [
    {
      id: 1,
      text: '1年交'
    },
    {
      id: 2,
      text: '4年交'
    },
    {
      id: 3,
      text: '5年交'
    },
    {
      id: 4,
      text: '9年交'
    },
    {
      id: 5,
      text: '10年交'
    },
    {
      id: 6,
      text: '14年交'
    },
    {
      id: 7,
      text: '15年交'
    },
    {
      id: 8,
      text: '19年交'
    },
    {
      id: 9,
      text: '20年交'
    },
    {
      id: 10,
      text: '29年交'
    },
    {
      id: 11,
      text: '30年交'
    },
    {
      id: 12,
      text: '至75周岁'
    }
  ],
  //交费方式
  payIntv: [
    {
      id: 1,
      text: '月交',
      disabled: true
    },
    {
      id: 2,
      text: '季交',
      disabled: true
    },
    {
      id: 3,
      text: '半年交',
      disabled: true
    },
    {
      id: 4,
      text: '年交'
    },
    {
      id: 5,
      text: '一次交清'
    }
  ],
  // 保险期间 data-dictionary
  insureYear: [
    {
      id: 1,
      text: '1年'
    },
    {
      id: 2,
      text: '4年'
    },
    {
      id: 3,
      text: '9年'
    },
    {
      id: 4,
      text: '10年'
    },
    {
      id: 5,
      text: '14年'
    },
    {
      id: 6,
      text: '15年'
    },
    {
      id: 7,
      text: '19年'
    },
    {
      id: 8,
      text: '20年'
    },
    {
      id: 9,
      text: '29年'
    },
    {
      id: 10,
      text: '30年'
    },
    {
      id: 11,
      text: '至70周岁'
    },
    {
      id: 12,
      text: '至75周岁'
    },
    {
      id: 13,
      text: '至80周岁'
    },
    {
      id: 14,
      text: '终身'
    }
  ],
  //客户类型
  customerType: [
    {
      id: 0,
      text: '准客户'
    },
    {
      id: 1,
      text: '老客户'
    }
  ],
  //客户来源
  customerSource: [
    {
      id: 0,
      text: '转介绍'
    },
    {
      id: 1,
      text: '缘故'
    },
    {
      id: 2,
      text: '陌生'
    }
  ],
  //在职情况
  workCondition: [
    {
      id: 1,
      text: '在职'
    },
    {
      id: 2,
      text: '退休'
    },
    {
      id: 3,
      text: '其他'
    }
  ],
  policyState: [
    {
      id: '01',
      text: '待客户确认'
    },
    {
      id: '02',
      text: '待客户付款'
    },
    {
      id: '03',
      text: '待公司确认'
    },
    {
      id: '04',
      text: '待客户上载影像'
    },
    {
      id: '05',
      text: '逾期关闭'
    },
    {
      id: '06',
      text: '客户撤销'
    },
    {
      id: '07',
      text: '公司谢绝'
    },
    {
      id: '08',
      text: '保单承保'
    },
    {
      id: '09',
      text: '订单退保'
    },
    {
      id: '10',
      text: '订单待签单'
    },
    {
      id: '11',
      text: '待生成电子保单'
    },
    {
      id: '12',
      text: '退保/领取审核中'
    },
    {
      id: '13',
      text: '等待出单'
    },
    {
      id: '14',
      text: '支付中'
    },
    {
      id: '15',
      text: '支付受理中'
    },
    {
      id: '16',
      text: '待手动承保'
    },
    {
      id: '17',
      text: '手动承保完成'
    },
    {
      id: '18',
      text: '阿里云端数据同步中间状态'
    },
    {
      id: '19',
      text: '支付失败'
    },
    {
      id: '20',
      text: '待答问卷'
    },
    {
      id: '21',
      text: 'ABS保单预约挂起中'
    },
    {
      id: '22',
      text: 'ABS保单取消预约挂起中'
    },
    {
      id: '23',
      text: '理赔挂起中'
    },
    {
      id: '24',
      text: '保单终止'
    },
    {
      id: '25',
      text: 'ABS保单受益权转让挂起中'
    },
    {
      id: '26',
      text: '保单冻结挂起中'
    },
    {
      id: '27',
      text: '冻结受益权转让挂起中'
    },
    {
      id: '28',
      text: '受益权还原挂起中'
    },
    {
      id: '29',
      text: '受益权转让挂起中'
    },
    {
      id: '30',
      text: '受益权还原挂起中'
    },
    {
      id: '31',
      text: '续保等待人核'
    },
    {
      id: '32',
      text: '续保第一次健康告知异常'
    },
    {
      id: '33',
      text: '核心人工核保中'
    },
    {
      id: '34',
      text: '核心人工核保中'
    },
    {
      id: '35',
      text: '投保人保存成功'
    },
    {
      id: '36',
      text: '被保人保存成功'
    },
    {
      id: '37',
      text: '受益人人保存成功'
    },
    {
      id: '38',
      text: '账户信息保存成功'
    },
    {
      id: '39',
      text: '险种信息保存成功'
    },
    {
      id: '40',
      text: '告知信息保存成功'
    },
    {
      id: '41',
      text: '转线下批扣中'
    },
    {
      id: '42',
      text: '转线下批扣中'
    },
    {
      id: '43',
      text: '待签名'
    },
    {
      id: '44',
      text: '计划书转投保'
    },
    {
      id: '45',
      text: '核心扣费失败'
    },
    {
      id: '46',
      text: '自核不通过待转人核'
    }
  ],
  riskType: [
    {
      shortName: '鼎诚终身重疾',
      name: '鼎诚鼎康保终身重大疾病保险',
      code: 'DCRS_M0001'
    },
    {
      shortName: '鼎诚定期重疾（A）',
      name: '鼎诚鼎康保定期重大疾病保险（A款）',
      code: 'DCRS_M0002'
    },
    {
      shortName: '鼎诚定期重疾（B）',
      name: '鼎诚鼎康保定期重大疾病保险（B款）',
      code: 'DCRS_M0003'
    }
  ],
  // 交易类型
  tradeType: [
    { id: '01', text: '投保' },
    { id: '02', text: '领取' },
    { id: '03', text: '退保' },
    { id: '99', text: '其他保全项目' }
  ],
  // 可疑特征
  tradeFeatures: [
    { id: 'STR0001', text: '短期内分散投保、集中退保或者集中投保、分散退保且不能合理解释原因 ' },
    { id: 'STR0002', text: '频繁投保、退保、变换险种或者保险金额 ' },
    { id: 'STR0004', text: '犹豫期退保时称大额发票丢失的，或者同一投保人短期内多次退保遗失发票总额达到大额的' },
    { id: 'STR0005', text: '发现所获得的有关投保人、被保险人和受益人的姓名、名称、住所、联系方式或财务状况等信息不真实的' },
    { id: 'STR0007', text: '以趸交方式购买大额保单，与其经济状况不符的' },
    { id: 'STR0008', text: '大额保费保单犹豫期退保、保险合同生效日后短期内退保或者提取现金价值，并要求退保金转入第三方账户或者非缴费账户的' },
    { id: 'STR0009', text: '不关注退保可能带来的较大金钱损失，而坚决要求退保，且不能合理解释退保原因的' },
    { id: 'STR0010', text: '明显超额支付当期应缴保险费并随即要求返还超出部分' },
    { id: 'STR0011', text: '保险经纪人、保险代理人代付保费，但无法说明资金来源' },
    { id: 'STR0012', text: '法人、其他组织坚持要求以现金或者转入非缴费账户方式退还保费，且不能合理解释原因的' },
    { id: 'STR0014', text: '通过第三人支付自然人保险费，而不能合理解释第三人与投保人、被保险人和受益人关系的' },
    {
      id: 'STR0017',
      text: '保险公司支付赔偿金、给付保险金时，客户要求将资金汇往被保险人、受益人以外的第三人；或客户要求将退还的保险费和保单现金价值汇往投保人以外的其他人'
    },
    { id: 'STR0018', text: '怀疑客户为恐怖组织、恐怖分子以及为恐怖活动犯罪募集或者企图募集资金或者其他形式财产的' },
    { id: 'STR0019', text: '怀疑客户为恐怖组织、恐怖分子、从事恐怖融资活动的人以及为恐怖活动犯罪提供或者企图提供资金或者其他形式财产的' },
    { id: 'STR0020', text: '怀疑客户为恐怖组织、恐怖分子，保存、管理、运作或者企图保存、管理、运作资金或者其他形式财产的' },
    { id: 'STR0021', text: '怀疑客户或者其交易对手是恐怖组织、恐怖分子以及从事恐怖融资活动人员的' },
    {
      id: 'STR0023',
      text:
        '怀疑资金或者其他形式财产用于或者将用于恐怖融资、恐怖活动犯罪及其他恐怖主义目的，或者怀疑资金或者其他形式财产被恐怖组织、恐怖分子、从事恐怖融资活动人员使用的'
    },
    {
      id: 'STR0024',
      text: '金融机构及其工作人员有合理理由怀疑资金、其他形式财产、交易、客户与恐怖主义、恐怖活动犯罪、恐怖组织、恐怖分子、从事恐怖融资活动人员有关的其他情'
    },
    { id: 'STR0025', text: '中国政府及有关部门、机构发布的恐怖组织、恐怖活动人员名单' },
    { id: 'STR0026', text: '联合国安理会决议中所列的恐怖组织、恐怖活动人员名单' },
    { id: 'STR0027', text: '中国人民银行要求关注的其他恐怖组织、恐怖分子嫌疑人名单' },
    { id: 'STR0033', text: '客户行为明显涉嫌洗钱、恐怖融资等犯罪活动的' },
    { id: 'STR0036', text: '客户单笔贷款或一年内累计贷款金额较高，且无法合理解释原因' },
    { id: 'STR0037', text: '通过POS机收取保费，且无法核对交费账户是否是投保人账户的' },
    { id: 'STR0038', text: '高风险等级客户在评定等级后新发生的交易' },
    { id: 'STR0039', text: '被人民银行和公安、检察、纪检检察机关调查过的客户' },
    { id: 'STR0040', text: '变更投保人或保单转移后短期内退保、保单借款、部分领取，金额达到一定标准，且不能解释合理原因' },
    { id: 'STR0042', text: '可疑交易报告后的接续报告' },
    { id: 'STR0044', text: '怀疑客户为政要人员' },
    { id: 'STR0045', text: '客户国籍为高风险国籍' }
  ],
  // 可疑程度
  dubiousLevel: [
    { id: '01', text: '一般可疑' },
    { id: '02', text: '重点可疑' }
  ]
}
