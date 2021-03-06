import {createAction} from 'redux-actions';
import {getTopicByTabName, getTopicDetail} from 'api';
import * as Type from '../actionType';

/**
 * 获取主题内容
 */
export const getTopicByTabNameAction = createAction(
  Type.GET_TOPICS_BY_TAB,
  (args) => getTopicByTabName(args),
);
/**
 * 刷新时清除主题内容
 */
export const clearTopicAction = createAction(
  Type.CLEAR_TOPICS_BY_TAB,
  (args) => args,
);
// 获取主题详情
export const getTopicDetailAction = createAction(
  Type.GET_TOPIC_DETAIL,
  (args) => getTopicDetail(args),
);
export const clearDetailAction = createAction(
  Type.CLEAR_DETAIL,
  (args) => args,
);
