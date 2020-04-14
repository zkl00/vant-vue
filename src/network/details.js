import { request } from './request'
export const detailstList = (iid) => request({
    url: '/detail',
    params: {
        iid
    }
})
export const getCommints = ()=>request({
    url:'/recommend'
})
// 标题
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc;
        this.price = itemInfo.price
        this.lowPrice = itemInfo.lowPrice
        this.discountBgColor = itemInfo.discountBgColor
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
    }
}
// 商品
export class shop {
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}
// 尺寸
export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }