import axios from "axios";
import appcode from "../config";

/**
 * 获取栏目列表
 *
 * @export
 * @returns 返回栏目列表信息
 */
export async function getChannelList() {
  var res = await axios.get("http://ali-news.showapi.com/channelList", {
    headers: {
      Authorization: `APPCODE ${appcode}`
    }
  });
  return res.data.showapi_res_body.channelList;
}

/**
 *获取新闻列表
 *
 * @export
 * @param {*} channelId 栏目的id
 * @param {number} [page=1]  页码数
 * @param {number} [maxResult=10] 一页展示数量
 */

export async function getNewsList(channelId, page = 1, maxResult = 10) {
  var res = await axios.get("http://ali-news.showapi.com/newsList", {
    headers: {
      Authorization: `APPCODE ${appcode}`
    },
    params: {
      channelId,
      page,
      maxResult,
      needContent: 1
    }
  });
  return res.data.showapi_res_body.pagebean.contentlist;
}
